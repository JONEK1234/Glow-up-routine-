import React, { useEffect, useRef, useState } from 'react';
import {
  Camera,
  Upload,
  Repeat,
  SlidersHorizontal,
  Columns,
  Sparkles,
  Calendar,
  Clock,
  Trash2,
  Plus,
  Download,
  FolderUp,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  HardDrive,
  Share2,
  FileText,
  Pencil,
  Check,
  Images
} from 'lucide-react';
import {
  ShavingAngle,
  ShavingExtraShot,
  ShavingPhotoSlot,
  ShavingSession
} from '../../types';
import {
  calcTimeDeltaLabel,
  compressPhoneImage,
  formatAutoTimestamp,
  shavingPhotoDb
} from '../../utils/shavingPhotoDb';

const ORDERED_ANGLES: Array<{
  key: ShavingAngle;
  step: number;
  label: string;
  shortLabel: string;
  hint: string;
}> = [
  {
    key: 'left',
    step: 1,
    label: '1. Laterale Sinistro',
    shortLabel: '1. Sinistro',
    hint: 'Profilo sinistro (guancia, mascella e collo lato sinistro)'
  },
  {
    key: 'front',
    step: 2,
    label: '2. Frontale',
    shortLabel: '2. Frontale',
    hint: 'Viso frontale (baffi, mento e sottomento centrale)'
  },
  {
    key: 'right',
    step: 3,
    label: '3. Laterale Destro',
    shortLabel: '3. Destro',
    hint: 'Profilo destro (guancia, mascella e collo lato destro)'
  }
];

type UploadTarget =
  | {
      kind: 'angle';
      sessionId: string;
      angle: ShavingAngle;
      phase: 'before' | 'after';
      mode: 'append' | 'replace';
      replaceIndex?: number;
    }
  | {
      kind: 'extra';
      sessionId: string;
      extraId: string;
      phase: 'before' | 'after';
      mode: 'append' | 'replace';
      replaceIndex?: number;
    };

type LightboxState = {
  session: ShavingSession;
  target:
    | { kind: 'angle'; angle: ShavingAngle }
    | { kind: 'extra'; extraId: string; extraLabel: string };
  phase: 'before' | 'after';
  index: number;
};

export const ShavingPhotoTrackerSection: React.FC = () => {
  const [sessions, setSessions] = useState<ShavingSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessingPhoto, setIsProcessingPhoto] = useState(false);
  const [isPersistentGranted, setIsPersistentGranted] = useState(false);

  // Confronto & Visualizzazione
  const [selectedAngle, setSelectedAngle] = useState<ShavingAngle | 'all'>('left');
  const [compareMode, setCompareMode] = useState<'overlay' | 'slider' | 'sideBySide'>('overlay');
  const [overlayPhase, setOverlayPhase] = useState<'before' | 'after'>('before');
  const [isAutoBlinking, setIsAutoBlinking] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);

  // Indice foto attiva per ogni blocco e fase (perché ogni lato può avere più foto)
  const [selectedIndexMap, setSelectedIndexMap] = useState<Record<string, number>>({});

  // Editing nome zona extra
  const [editingExtraId, setEditingExtraId] = useState<string | null>(null);
  const [editingExtraLabel, setEditingExtraLabel] = useState('');

  // Confronto tra due giorni diversi (Sessione A vs Sessione B)
  const [compareAcrossDays, setCompareAcrossDays] = useState(false);
  const [dayASessionId, setDayASessionId] = useState<string>('');
  const [dayBSessionId, setDayBSessionId] = useState<string>('');
  const [dayComparePhase, setDayComparePhase] = useState<'before' | 'after'>('after');

  // Note della sessione attiva
  const [noteDraft, setNoteDraft] = useState('');

  // Modifica manuale data/ora della rasatura attiva
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [editDateValue, setEditDateValue] = useState('');
  const [editTimeValue, setEditTimeValue] = useState('');
  const [alsoSyncPhotoDates, setAlsoSyncPhotoDates] = useState(false);

  // Fullscreen Lightbox
  const [lightboxState, setLightboxState] = useState<LightboxState | null>(null);

  // Feedback / Toast di stato
  const [statusFeedback, setStatusFeedback] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  // File Inputs (Hidden)
  const photoInputRef = useRef<HTMLInputElement | null>(null);
  const pendingUploadRef = useRef<UploadTarget | null>(null);
  const backupInputRef = useRef<HTMLInputElement | null>(null);

  // Caricamento iniziale da IndexedDB
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const loaded = await shavingPhotoDb.getAllSessions();
        const persisted = await shavingPhotoDb.requestPersistentStorage();
        if (!mounted) return;
        setIsPersistentGranted(persisted);
        if (loaded.length > 0) {
          setSessions(loaded);
          setActiveSessionId(loaded[0].id);
          setNoteDraft(loaded[0].notes || '');
          if (loaded.length >= 2) {
            setDayASessionId(loaded[1].id);
            setDayBSessionId(loaded[0].id);
          } else {
            setDayASessionId(loaded[0].id);
            setDayBSessionId(loaded[0].id);
          }
        }
      } catch (err: any) {
        if (mounted) {
          setStatusFeedback({
            type: 'error',
            message: err?.message || 'Errore lettura memoria telefono'
          });
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // Auto-lampeggio Prima/Dopo
  useEffect(() => {
    if (!isAutoBlinking) return;
    const timer = setInterval(() => {
      setOverlayPhase((prev) => (prev === 'before' ? 'after' : 'before'));
    }, 750);
    return () => clearInterval(timer);
  }, [isAutoBlinking]);

  const activeSession = sessions.find((s) => s.id === activeSessionId) || sessions[0] || null;

  useEffect(() => {
    if (activeSession) {
      setNoteDraft(activeSession.notes || '');
      setIsEditingDate(false);
      setEditingExtraId(null);
      setSelectedIndexMap({});
    }
  }, [activeSession?.id]);

  const showToast = (type: 'success' | 'error' | 'info', message: string) => {
    setStatusFeedback({ type, message });
    setTimeout(() => {
      setStatusFeedback((curr) => (curr?.message === message ? null : curr));
    }, 5500);
  };

  const getSlotKey = (targetKey: string, phase: 'before' | 'after') => `${targetKey}_${phase}`;

  const getSelectedIndex = (targetKey: string, phase: 'before' | 'after', listLength: number) => {
    if (listLength <= 0) return 0;
    const raw = selectedIndexMap[getSlotKey(targetKey, phase)] ?? 0;
    return Math.min(Math.max(0, raw), listLength - 1);
  };

  const setSelectedIndex = (targetKey: string, phase: 'before' | 'after', idx: number) => {
    setSelectedIndexMap((prev) => ({
      ...prev,
      [getSlotKey(targetKey, phase)]: idx
    }));
  };

  // Crea una nuova sessione di rasatura con giorno e ora automatici
  const handleCreateNewSession = async () => {
    const newSession = shavingPhotoDb.createEmptySession();
    try {
      await shavingPhotoDb.saveSession(newSession);
      await shavingPhotoDb.requestPersistentStorage();
      const updated = [newSession, ...sessions];
      setSessions(updated);
      setActiveSessionId(newSession.id);
      setNoteDraft('');
      setCompareAcrossDays(false);
      if (updated.length >= 2) {
        setDayASessionId(updated[1].id);
        setDayBSessionId(updated[0].id);
      }
      showToast(
        'success',
        `Nuova sessione creata: ${newSession.dayLabel} ${newSession.dateStr} alle ${newSession.timeStr}`
      );
    } catch (err: any) {
      showToast('error', err?.message || 'Impossibile creare la sessione');
    }
  };

  const ensureActiveSession = async (): Promise<ShavingSession> => {
    if (activeSession) return activeSession;
    const created = shavingPhotoDb.createEmptySession();
    await shavingPhotoDb.saveSession(created);
    setSessions([created]);
    setActiveSessionId(created.id);
    return created;
  };

  // Trigger upload foto da telefono (supporta 1 o più foto alla volta)
  const triggerAnglePhotoPicker = async (
    angle: ShavingAngle,
    phase: 'before' | 'after',
    mode: 'append' | 'replace' = 'append',
    replaceIndex?: number
  ) => {
    const targetSession = await ensureActiveSession();
    pendingUploadRef.current = {
      kind: 'angle',
      sessionId: targetSession.id,
      angle,
      phase,
      mode,
      replaceIndex
    };
    if (photoInputRef.current) {
      photoInputRef.current.value = '';
      photoInputRef.current.click();
    }
  };

  const triggerExtraPhotoPicker = async (
    extraId: string,
    phase: 'before' | 'after',
    mode: 'append' | 'replace' = 'append',
    replaceIndex?: number
  ) => {
    const targetSession = await ensureActiveSession();
    pendingUploadRef.current = {
      kind: 'extra',
      sessionId: targetSession.id,
      extraId,
      phase,
      mode,
      replaceIndex
    };
    if (photoInputRef.current) {
      photoInputRef.current.value = '';
      photoInputRef.current.click();
    }
  };

  const handlePhotoFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: File[] = e.target.files ? Array.from(e.target.files) : [];
    const target = pendingUploadRef.current;
    if (files.length === 0 || !target) return;

    setIsProcessingPhoto(true);
    try {
      const ts = formatAutoTimestamp(new Date());
      const newSlots: ShavingPhotoSlot[] = [];

      for (let i = 0; i < files.length; i++) {
        const compressedDataUrl = await compressPhoneImage(files[i]);
        newSlots.push({
          id: `photo_${Date.now()}_${i}_${Math.random().toString(36).slice(2, 6)}`,
          dataUrl: compressedDataUrl,
          uploadedAtIso: ts.iso,
          dayLabel: ts.dayLabel,
          dateStr: ts.dateStr,
          timeStr: ts.timeStr
        });
      }

      const targetSession =
        sessions.find((s) => s.id === target.sessionId) || shavingPhotoDb.createEmptySession();

      let updatedSession: ShavingSession;
      let targetKeyForSelect = '';

      if (target.kind === 'angle') {
        const existingList = shavingPhotoDb.getAnglePhotosList(
          targetSession,
          target.angle,
          target.phase
        );
        let nextList: ShavingPhotoSlot[];
        if (target.mode === 'replace' && typeof target.replaceIndex === 'number' && existingList.length > 0) {
          nextList = [...existingList];
          nextList.splice(target.replaceIndex, 1, ...newSlots);
        } else {
          nextList = [...existingList, ...newSlots];
        }

        const currentAngleObj = targetSession.photos[target.angle] || {};
        const nextAngleObj =
          target.phase === 'before'
            ? { ...currentAngleObj, beforeList: nextList, before: nextList[0] }
            : { ...currentAngleObj, afterList: nextList, after: nextList[0] };

        updatedSession = {
          ...targetSession,
          updatedAtIso: ts.iso,
          photos: {
            ...targetSession.photos,
            [target.angle]: nextAngleObj
          }
        };
        targetKeyForSelect = target.angle;

        const newActiveIdx =
          target.mode === 'replace' && typeof target.replaceIndex === 'number'
            ? target.replaceIndex
            : Math.max(0, nextList.length - 1);
        setSelectedIndex(targetKeyForSelect, target.phase, newActiveIdx);
      } else {
        const currentExtras = Array.isArray(targetSession.extraShots) ? targetSession.extraShots : [];
        let resultLen = 0;
        const nextExtras = currentExtras.map((extra) => {
          if (extra.id !== target.extraId) return extra;
          const existingList = target.phase === 'before' ? extra.beforeList : extra.afterList;
          let nextList: ShavingPhotoSlot[];
          if (target.mode === 'replace' && typeof target.replaceIndex === 'number' && existingList.length > 0) {
            nextList = [...existingList];
            nextList.splice(target.replaceIndex, 1, ...newSlots);
          } else {
            nextList = [...existingList, ...newSlots];
          }
          resultLen = nextList.length;
          return target.phase === 'before'
            ? { ...extra, beforeList: nextList }
            : { ...extra, afterList: nextList };
        });

        updatedSession = {
          ...targetSession,
          updatedAtIso: ts.iso,
          extraShots: nextExtras
        };
        targetKeyForSelect = `extra_${target.extraId}`;

        const newActiveIdx =
          target.mode === 'replace' && typeof target.replaceIndex === 'number'
            ? target.replaceIndex
            : Math.max(0, resultLen - 1);
        setSelectedIndex(targetKeyForSelect, target.phase, newActiveIdx);
      }

      await shavingPhotoDb.saveSession(updatedSession);
      const persisted = await shavingPhotoDb.requestPersistentStorage();
      setIsPersistentGranted(persisted);

      setSessions((prev) => {
        const exists = prev.some((s) => s.id === updatedSession.id);
        return exists
          ? prev.map((s) => (s.id === updatedSession.id ? updatedSession : s))
          : [updatedSession, ...prev];
      });
      setActiveSessionId(updatedSession.id);

      const phaseTitle = target.phase === 'before' ? 'Prima' : 'Dopo';
      const areaTitle =
        target.kind === 'angle'
          ? target.angle === 'left'
            ? 'Laterale Sinistro'
            : target.angle === 'front'
            ? 'Frontale'
            : 'Laterale Destro'
          : (updatedSession.extraShots?.find((ex) => ex.id === target.extraId)?.label || 'Zona Extra');

      showToast(
        'success',
        newSlots.length > 1
          ? `${newSlots.length} foto aggiunte a "${areaTitle} (${phaseTitle})" • ${ts.dayLabel} ${ts.dateStr} ore ${ts.timeStr}`
          : `Foto "${areaTitle} (${phaseTitle})" salvata sul telefono • ${ts.dayLabel} ${ts.dateStr} ore ${ts.timeStr}`
      );
    } catch (err: any) {
      showToast('error', err?.message || 'Errore durante il caricamento della foto');
    } finally {
      setIsProcessingPhoto(false);
      pendingUploadRef.current = null;
    }
  };

  const handleRemoveAnglePhotoAt = async (
    angle: ShavingAngle,
    phase: 'before' | 'after',
    indexToRemove: number
  ) => {
    if (!activeSession) return;
    const ts = formatAutoTimestamp(new Date());
    const existingList = shavingPhotoDb.getAnglePhotosList(activeSession, angle, phase);
    const nextList = existingList.filter((_, idx) => idx !== indexToRemove);

    const currentAngleObj = activeSession.photos[angle] || {};
    const nextAngleObj =
      phase === 'before'
        ? { ...currentAngleObj, beforeList: nextList, before: nextList[0] }
        : { ...currentAngleObj, afterList: nextList, after: nextList[0] };

    const updatedSession: ShavingSession = {
      ...activeSession,
      updatedAtIso: ts.iso,
      photos: {
        ...activeSession.photos,
        [angle]: nextAngleObj
      }
    };

    await shavingPhotoDb.saveSession(updatedSession);
    setSessions((prev) => prev.map((s) => (s.id === updatedSession.id ? updatedSession : s)));
    setSelectedIndex(angle, phase, Math.max(0, Math.min(indexToRemove, nextList.length - 1)));
  };

  const handleAddExtraShotBlock = async () => {
    const targetSession = await ensureActiveSession();
    const existingExtras = Array.isArray(targetSession.extraShots) ? targetSession.extraShots : [];
    const nextNum = 4 + existingExtras.length;
    const newExtra: ShavingExtraShot = {
      id: `extra_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      label: `${nextNum}. Zona / Dettaglio Extra`,
      beforeList: [],
      afterList: []
    };

    const updatedSession: ShavingSession = {
      ...targetSession,
      updatedAtIso: new Date().toISOString(),
      extraShots: [...existingExtras, newExtra]
    };

    await shavingPhotoDb.saveSession(updatedSession);
    setSessions((prev) => prev.map((s) => (s.id === updatedSession.id ? updatedSession : s)));
    showToast('success', 'Nuovo blocco foto aggiunto! Carica quante foto vuoi.');
  };

  const handleSaveExtraLabel = async (extraId: string) => {
    if (!activeSession) return;
    const trimmed = editingExtraLabel.trim();
    if (!trimmed) {
      setEditingExtraId(null);
      return;
    }
    const updatedSession: ShavingSession = {
      ...activeSession,
      updatedAtIso: new Date().toISOString(),
      extraShots: (activeSession.extraShots || []).map((ex) =>
        ex.id === extraId ? { ...ex, label: trimmed } : ex
      )
    };
    await shavingPhotoDb.saveSession(updatedSession);
    setSessions((prev) => prev.map((s) => (s.id === updatedSession.id ? updatedSession : s)));
    setEditingExtraId(null);
  };

  const handleRemoveExtraPhotoAt = async (
    extraId: string,
    phase: 'before' | 'after',
    indexToRemove: number
  ) => {
    if (!activeSession) return;
    let nextLen = 0;
    const updatedSession: ShavingSession = {
      ...activeSession,
      updatedAtIso: new Date().toISOString(),
      extraShots: (activeSession.extraShots || []).map((ex) => {
        if (ex.id !== extraId) return ex;
        const list = phase === 'before' ? ex.beforeList : ex.afterList;
        const nextList = list.filter((_, idx) => idx !== indexToRemove);
        nextLen = nextList.length;
        return phase === 'before' ? { ...ex, beforeList: nextList } : { ...ex, afterList: nextList };
      })
    };
    await shavingPhotoDb.saveSession(updatedSession);
    setSessions((prev) => prev.map((s) => (s.id === updatedSession.id ? updatedSession : s)));
    setSelectedIndex(
      `extra_${extraId}`,
      phase,
      Math.max(0, Math.min(indexToRemove, nextLen - 1))
    );
  };

  const handleDeleteExtraBlock = async (extraId: string) => {
    if (!activeSession) return;
    const updatedSession: ShavingSession = {
      ...activeSession,
      updatedAtIso: new Date().toISOString(),
      extraShots: (activeSession.extraShots || []).filter((ex) => ex.id !== extraId)
    };
    await shavingPhotoDb.saveSession(updatedSession);
    setSessions((prev) => prev.map((s) => (s.id === updatedSession.id ? updatedSession : s)));
    showToast('info', 'Blocco foto extra rimosso');
  };

  const handleSaveSessionNote = async () => {
    if (!activeSession) return;
    const updatedSession: ShavingSession = {
      ...activeSession,
      notes: noteDraft.trim(),
      updatedAtIso: new Date().toISOString()
    };
    await shavingPhotoDb.saveSession(updatedSession);
    setSessions((prev) => prev.map((s) => (s.id === updatedSession.id ? updatedSession : s)));
    showToast('success', 'Nota della rasatura salvata nella memoria del telefono');
  };

  const handleOpenDateEditor = () => {
    if (!activeSession) return;
    const parsed = new Date(activeSession.createdAtIso);
    const valid = !Number.isNaN(parsed.getTime()) ? parsed : new Date();
    const yyyy = valid.getFullYear();
    const mm = String(valid.getMonth() + 1).padStart(2, '0');
    const dd = String(valid.getDate()).padStart(2, '0');
    const hh = String(valid.getHours()).padStart(2, '0');
    const min = String(valid.getMinutes()).padStart(2, '0');
    setEditDateValue(`${yyyy}-${mm}-${dd}`);
    setEditTimeValue(`${hh}:${min}`);
    setAlsoSyncPhotoDates(false);
    setIsEditingDate(true);
  };

  const handleSaveSessionDate = async () => {
    if (!activeSession) return;
    if (!editDateValue) {
      showToast('error', 'Seleziona una data valida.');
      return;
    }

    const [y, m, d] = editDateValue.split('-').map(Number);
    const [hh, min] = (editTimeValue || '12:00').split(':').map(Number);
    const newDate = new Date(y, (m || 1) - 1, d || 1, hh || 0, min || 0, 0);

    if (Number.isNaN(newDate.getTime())) {
      showToast('error', 'Data o ora non valida.');
      return;
    }

    const ts = formatAutoTimestamp(newDate);

    const syncSlotDate = (slot: ShavingPhotoSlot): ShavingPhotoSlot => {
      const orig = new Date(slot.uploadedAtIso);
      const slotDate = new Date(newDate);
      if (!Number.isNaN(orig.getTime())) {
        slotDate.setHours(orig.getHours(), orig.getMinutes(), orig.getSeconds(), 0);
      }
      const slotTs = formatAutoTimestamp(slotDate);
      return {
        ...slot,
        uploadedAtIso: slotTs.iso,
        dayLabel: slotTs.dayLabel,
        dateStr: slotTs.dateStr,
        timeStr: slotTs.timeStr
      };
    };

    const syncAngle = (angle: ShavingAngle) => {
      const beforeList = shavingPhotoDb
        .getAnglePhotosList(activeSession, angle, 'before')
        .map(syncSlotDate);
      const afterList = shavingPhotoDb
        .getAnglePhotosList(activeSession, angle, 'after')
        .map(syncSlotDate);
      return {
        before: beforeList[0],
        after: afterList[0],
        beforeList,
        afterList
      };
    };

    const updatedSession: ShavingSession = {
      ...activeSession,
      createdAtIso: ts.iso,
      updatedAtIso: new Date().toISOString(),
      dayLabel: ts.dayLabel,
      dateStr: ts.dateStr,
      timeStr: ts.timeStr,
      title: `Rasatura ${ts.dayLabel} ${ts.dateStr}`,
      photos: alsoSyncPhotoDates
        ? {
            left: syncAngle('left'),
            front: syncAngle('front'),
            right: syncAngle('right')
          }
        : activeSession.photos,
      extraShots: alsoSyncPhotoDates
        ? (activeSession.extraShots || []).map((ex) => ({
            ...ex,
            beforeList: ex.beforeList.map(syncSlotDate),
            afterList: ex.afterList.map(syncSlotDate)
          }))
        : activeSession.extraShots
    };

    try {
      await shavingPhotoDb.saveSession(updatedSession);
      setSessions((prev) =>
        prev
          .map((s) => (s.id === updatedSession.id ? updatedSession : s))
          .sort((a, b) => new Date(b.createdAtIso).getTime() - new Date(a.createdAtIso).getTime())
      );
      setIsEditingDate(false);
      showToast(
        'success',
        `Data rasatura aggiornata a ${ts.dayLabel} ${ts.dateStr} • ore ${ts.timeStr}`
      );
    } catch (err: any) {
      showToast('error', err?.message || 'Errore nel salvataggio della data');
    }
  };

  const handleDeleteSession = async (id: string) => {
    await shavingPhotoDb.deleteSession(id);
    const remaining = sessions.filter((s) => s.id !== id);
    setSessions(remaining);
    if (activeSessionId === id) {
      setActiveSessionId(remaining[0]?.id || null);
    }
    showToast('info', 'Sessione rimossa dalla memoria locale');
  };

  // TASTO 1: SALVA PROGRESSO PELI INCARNITI (Esporta file JSON portatile per qualsiasi telefono)
  const handleExportProgress = async (useShareSheet: boolean = false) => {
    if (sessions.length === 0) {
      showToast('info', 'Carica prima almeno una foto o crea una sessione per salvarla.');
      return;
    }

    try {
      const bundle = shavingPhotoDb.buildBackupBundle(sessions);
      const jsonString = JSON.stringify(bundle);
      const dateStamp = new Date().toISOString().split('T')[0];
      const fileName = `progresso-peli-incarniti-${dateStamp}.json`;
      const blob = new Blob([jsonString], { type: 'application/json' });

      if (useShareSheet && typeof navigator !== 'undefined' && navigator.share) {
        const file = new File([blob], fileName, { type: 'application/json' });
        if ((navigator as any).canShare?.({ files: [file] })) {
          await navigator.share({
            title: 'Progresso Peli Incarniti',
            text: `Backup completo foto prima/dopo rasatura (${sessions.length} sessioni)`,
            files: [file]
          });
          showToast('success', 'Backup condiviso con successo!');
          return;
        }
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      const totalPhotos = sessions.reduce((acc, s) => acc + shavingPhotoDb.countPhotos(s), 0);
      showToast(
        'success',
        `File "${fileName}" salvato sul telefono (${sessions.length} sessioni, ${totalPhotos} foto)!`
      );
    } catch (err: any) {
      showToast('error', err?.message || 'Errore durante la creazione del backup');
    }
  };

  // TASTO 2: CARICA PROGRESSO (Importa su questo o su un altro telefono)
  const handleTriggerImport = () => {
    if (backupInputRef.current) {
      backupInputRef.current.value = '';
      backupInputRef.current.click();
    }
  };

  const handleImportFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const rawText = await file.text();
      const parsedSessions = shavingPhotoDb.parseBackupFileContent(rawText);
      const result = await shavingPhotoDb.importSessions(parsedSessions);
      const reloaded = await shavingPhotoDb.getAllSessions();
      setSessions(reloaded);
      if (reloaded.length > 0) {
        setActiveSessionId(reloaded[0].id);
        setNoteDraft(reloaded[0].notes || '');
        if (reloaded.length >= 2) {
          setDayASessionId(reloaded[1].id);
          setDayBSessionId(reloaded[0].id);
        }
      }
      const importedPhotos = parsedSessions.reduce((acc, s) => acc + shavingPhotoDb.countPhotos(s), 0);
      showToast(
        'success',
        `Caricamento completato! ${result.added} nuove + ${result.updated} aggiornate (${importedPhotos} foto ripristinate).`
      );
    } catch (err: any) {
      showToast('error', err?.message || 'Errore nella lettura del file di backup');
    }
  };

  const totalPhotosStored = sessions.reduce((acc, s) => acc + shavingPhotoDb.countPhotos(s), 0);
  const storageSizeLabel = shavingPhotoDb.estimateStorageSize(sessions);

  // Renderer unificato per qualsiasi blocco (sia i 3 angoli standard sia le zone extra illimitate)
  const renderComparisonGalleryBlock = (params: {
    blockKey: string;
    stepBadge: string | number;
    title: string;
    subtitle: string;
    beforeList: ShavingPhotoSlot[];
    afterList: ShavingPhotoSlot[];
    onPick: (phase: 'before' | 'after', mode: 'append' | 'replace', replaceIndex?: number) => void;
    onRemove: (phase: 'before' | 'after', index: number) => void;
    onOpenLightbox: (phase: 'before' | 'after', index: number) => void;
    extraControls?: React.ReactNode;
    isExtraBlock?: boolean;
  }) => {
    const {
      blockKey,
      stepBadge,
      title,
      subtitle,
      beforeList,
      afterList,
      onPick,
      onRemove,
      onOpenLightbox,
      extraControls,
      isExtraBlock
    } = params;

    const beforeIdx = getSelectedIndex(blockKey, 'before', beforeList.length);
    const afterIdx = getSelectedIndex(blockKey, 'after', afterList.length);
    const activeBefore = beforeList[beforeIdx];
    const activeAfter = afterList[afterIdx];
    const deltaLabel = calcTimeDeltaLabel(activeBefore?.uploadedAtIso, activeAfter?.uploadedAtIso);

    const renderPhaseColumn = (phase: 'before' | 'after') => {
      const isBefore = phase === 'before';
      const list = isBefore ? beforeList : afterList;
      const activeIdx = isBefore ? beforeIdx : afterIdx;
      const activePhoto = isBefore ? activeBefore : activeAfter;

      return (
        <div
          className={`p-2.5 rounded-2xl bg-white/[0.03] border space-y-2 flex flex-col ${
            isBefore ? 'border-amber-500/30' : 'border-emerald-500/30'
          }`}
        >
          <div className="flex items-center justify-between gap-1">
            <span
              className={`text-[11px] font-black uppercase tracking-wider ${
                isBefore ? 'text-amber-300' : 'text-emerald-300'
              }`}
            >
              {isBefore ? 'Prima di Rasare' : 'Dopo Rasatura'}
              {list.length > 0 && (
                <span className="ml-1 text-[10px] font-bold text-gray-400">({list.length})</span>
              )}
            </span>
            {activePhoto && (
              <button
                type="button"
                onClick={() => onRemove(phase, activeIdx)}
                className="p-1 rounded-lg text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 cursor-pointer"
                title={`Elimina questa foto (${activeIdx + 1})`}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {activePhoto ? (
            <div className="space-y-1.5 flex-1 flex flex-col">
              <div
                onClick={() => onOpenLightbox(phase, activeIdx)}
                className={`relative aspect-[3/4] rounded-xl overflow-hidden border bg-black cursor-pointer group ${
                  isBefore ? 'border-amber-400/40' : 'border-emerald-400/40'
                }`}
              >
                <img
                  src={activePhoto.dataUrl}
                  alt={`${title} ${isBefore ? 'Prima' : 'Dopo'} ${activeIdx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                {list.length > 1 && (
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-md bg-black/75 text-white text-[10px] font-black border border-white/20">
                    {activeIdx + 1}/{list.length}
                  </span>
                )}
                <span className="absolute top-1.5 right-1.5 p-1 rounded-lg bg-black/70 text-white border border-white/20">
                  <Maximize2 className="w-3 h-3" />
                </span>
              </div>

              <div className="text-[10px] text-gray-300 font-medium flex items-center justify-between px-0.5 tabular-nums">
                <span>
                  {activePhoto.dayLabel} {activePhoto.dateStr}
                </span>
                <span className={`${isBefore ? 'text-amber-300' : 'text-emerald-300'} font-bold`}>
                  {activePhoto.timeStr}
                </span>
              </div>

              {/* Mini-galleria selettore se ci sono 2+ foto o per aggiungere */}
              {list.length > 1 && (
                <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                  {list.map((slot, idx) => (
                    <button
                      key={slot.id || `${phase}_${idx}`}
                      type="button"
                      onClick={() => setSelectedIndex(blockKey, phase, idx)}
                      className={`relative w-9 h-11 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        idx === activeIdx
                          ? isBefore
                            ? 'border-amber-400 scale-105 shadow-md'
                            : 'border-emerald-400 scale-105 shadow-md'
                          : 'border-white/15 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={slot.dataUrl} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      <span className="absolute bottom-0 right-0 px-1 bg-black/80 text-[8px] font-black text-white">
                        {idx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Pulsanti: Aggiungi Altre (illimitate) + Sostituisci */}
              <div className="grid grid-cols-2 gap-1.5 mt-auto">
                <button
                  type="button"
                  onClick={() => onPick(phase, 'append')}
                  className={`py-2 px-1.5 rounded-xl border text-[10px] font-black flex items-center justify-center gap-1 cursor-pointer min-h-[38px] transition-all ${
                    isBefore
                      ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border-amber-400/40'
                      : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border-emerald-400/40'
                  }`}
                >
                  <Plus className="w-3.5 h-3.5 shrink-0" />
                  <span>Aggiungi</span>
                </button>
                <button
                  type="button"
                  onClick={() => onPick(phase, 'replace', activeIdx)}
                  className="py-2 px-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 text-[10px] font-bold flex items-center justify-center gap-1 cursor-pointer min-h-[38px]"
                >
                  <Camera className="w-3 h-3 shrink-0 text-gray-300" />
                  <span>Cambia</span>
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onPick(phase, 'append')}
              className={`flex-1 min-h-[150px] rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 p-3 text-center transition-all cursor-pointer active:scale-98 ${
                isBefore
                  ? 'border-amber-500/35 hover:border-amber-400 bg-amber-950/15 hover:bg-amber-950/30'
                  : 'border-emerald-500/35 hover:border-emerald-400 bg-emerald-950/15 hover:bg-emerald-950/30'
              }`}
            >
              <div
                className={`p-2.5 rounded-full border ${
                  isBefore
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}
              >
                <Upload className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-white block">
                  {isBefore ? 'Carica Prima' : 'Carica Dopo'}
                </span>
                <span className="text-[10px] text-gray-400 block mt-0.5">
                  1 o più foto dal telefono
                </span>
              </div>
            </button>
          )}
        </div>
      );
    };

    return (
      <div
        key={blockKey}
        className={`p-4 rounded-3xl bg-black/75 border space-y-3.5 ${
          isExtraBlock
            ? 'border-cyan-500/35 shadow-[0_0_20px_rgba(34,211,238,0.08)]'
            : 'border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.08)]'
        }`}
      >
        {/* Header Angolazione o Zona Extra */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
          <div className="flex-1 min-w-[180px]">
            <h4 className="text-sm font-black text-white flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-lg border flex items-center justify-center text-xs font-black shrink-0 ${
                  isExtraBlock
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                    : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                }`}
              >
                {stepBadge}
              </span>
              <span className="truncate">{title}</span>
            </h4>
            <p className="text-[11px] text-gray-400 mt-0.5">{subtitle}</p>
          </div>
          <div className="flex items-center gap-1.5">
            {deltaLabel && (
              <span className="text-[11px] font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-xl border border-cyan-500/25">
                ⏱ {deltaLabel}
              </span>
            )}
            {extraControls}
          </div>
        </div>

        {/* Colonne PRIMA e DOPO */}
        <div className="grid grid-cols-2 gap-2.5">
          {renderPhaseColumn('before')}
          {renderPhaseColumn('after')}
        </div>

        {/* Confronto Interattivo Differenze quando ci sono sia PRIMA che DOPO */}
        {activeBefore && activeAfter && (
          <div className="pt-2 border-t border-white/10 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Confronta Differenze ({beforeIdx + 1} vs {afterIdx + 1})
              </span>

              {compareMode === 'overlay' && (
                <button
                  type="button"
                  onClick={() => setIsAutoBlinking((v) => !v)}
                  className={`px-2.5 py-1 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
                    isAutoBlinking
                      ? 'bg-cyan-400 text-black border-cyan-300 font-black'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:text-white'
                  }`}
                >
                  {isAutoBlinking ? 'Stop Lampeggio' : 'Auto Lampeggio'}
                </button>
              )}
            </div>

            {compareMode === 'overlay' && (
              <div className="space-y-2">
                <div
                  onClick={() => setOverlayPhase((p) => (p === 'before' ? 'after' : 'before'))}
                  className="relative aspect-[3/4] max-w-xs mx-auto rounded-2xl overflow-hidden border-2 border-cyan-400/50 bg-black cursor-pointer select-none shadow-xl"
                >
                  <img
                    src={overlayPhase === 'before' ? activeBefore.dataUrl : activeAfter.dataUrl}
                    alt={`${title} confronto`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span
                      className={`px-2.5 py-1 rounded-xl text-[10px] font-black border backdrop-blur-md ${
                        overlayPhase === 'before'
                          ? 'bg-amber-950/90 text-amber-300 border-amber-400/50'
                          : 'bg-emerald-950/90 text-emerald-300 border-emerald-400/50'
                      }`}
                    >
                      {overlayPhase === 'before'
                        ? `PRIMA #${beforeIdx + 1} • ${activeBefore.timeStr}`
                        : `DOPO #${afterIdx + 1} • ${activeAfter.timeStr}`}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-center pointer-events-none">
                    <span className="text-[11px] font-bold text-white">
                      Tocca la foto per vedere la differenza Prima ↔ Dopo
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOverlayPhase((p) => (p === 'before' ? 'after' : 'before'))}
                  className="w-full max-w-xs mx-auto py-2.5 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer min-h-[44px]"
                >
                  <Repeat className="w-4 h-4" />
                  <span>
                    Scambia ({overlayPhase === 'before' ? 'Vedi Dopo Rasatura' : 'Vedi Prima di Rasare'})
                  </span>
                </button>
              </div>
            )}

            {compareMode === 'slider' && (
              <div className="space-y-2">
                <div className="relative aspect-[3/4] max-w-xs mx-auto rounded-2xl overflow-hidden border-2 border-cyan-400/50 bg-black select-none">
                  {/* Base: DOPO */}
                  <img
                    src={activeAfter.dataUrl}
                    alt="Dopo rasatura"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Clip: PRIMA */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                  >
                    <img
                      src={activeBefore.dataUrl}
                      alt="Prima di rasare"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Divider line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)] pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-cyan-400 text-black font-black text-[10px] flex items-center justify-center shadow-lg border-2 border-white">
                      ↔
                    </div>
                  </div>
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-black/80 text-amber-300 text-[10px] font-black border border-amber-400/40 pointer-events-none">
                    PRIMA #{beforeIdx + 1}
                  </span>
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-lg bg-black/80 text-emerald-300 text-[10px] font-black border border-emerald-400/40 pointer-events-none">
                    DOPO #{afterIdx + 1}
                  </span>
                </div>

                <div className="max-w-xs mx-auto space-y-1">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer h-6"
                    aria-label="Cursore confronto Prima e Dopo"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                    <span>← Trascina per Prima ({activeBefore.timeStr})</span>
                    <span>Dopo ({activeAfter.timeStr}) →</span>
                  </div>
                </div>
              </div>
            )}

            {compareMode === 'sideBySide' && (
              <div className="p-2.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/25 text-center text-[11px] text-cyan-200 font-medium">
                Vista affiancata attiva sopra: tocca una delle due foto per aprirla a schermo intero e scambiare al volo!
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Confronto tra due sessioni/giorni diversi (Evoluzione nel tempo)
  const sessionDayA = sessions.find((s) => s.id === dayASessionId) || sessions[1] || sessions[0];
  const sessionDayB = sessions.find((s) => s.id === dayBSessionId) || sessions[0];

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Hidden File Inputs (supports MULTIPLE photo selection!) */}
      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handlePhotoFileChange}
        className="hidden"
      />
      <input
        ref={backupInputRef}
        type="file"
        accept=".json,application/json"
        onChange={handleImportFileChange}
        className="hidden"
      />

      {/* Header Sezione Foto Rasatura */}
      <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
        <div className="flex items-center space-x-2">
          <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            <Camera className="w-4 h-4" />
          </span>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block">
              Parte 6 • Diario Visivo Rasature
            </span>
            <h2 className="text-base sm:text-lg font-black text-white">
              Foto Prima & Dopo Ogni Rasatura (Illimitate)
            </h2>
          </div>
        </div>
        <span className="text-[11px] font-bold text-emerald-300 tabular-nums">
          {sessions.length} {sessions.length === 1 ? 'Sessione' : 'Sessioni'} · {totalPhotosStored} Foto
        </span>
      </div>

      {/* Toast Feedback */}
      {statusFeedback && (
        <div
          className={`p-3.5 rounded-2xl border text-xs font-bold flex items-start gap-2.5 animate-in fade-in duration-150 ${
            statusFeedback.type === 'success'
              ? 'bg-emerald-950/60 border-emerald-400/50 text-emerald-200'
              : statusFeedback.type === 'error'
              ? 'bg-rose-950/60 border-rose-400/50 text-rose-200'
              : 'bg-cyan-950/60 border-cyan-400/50 text-cyan-200'
          }`}
        >
          {statusFeedback.type === 'error' ? (
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          )}
          <span className="leading-relaxed">{statusFeedback.message}</span>
        </div>
      )}

      {/* Card Sicurezza Memoria Telefono + Tasti SALVA PROGRESSO & CARICA */}
      <div className="p-4 rounded-3xl bg-gradient-to-br from-emerald-950/35 via-black/85 to-cyan-950/30 border border-emerald-500/35 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
              <HardDrive className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-xs sm:text-sm font-black text-white">
                Memoria del Telefono & Trasferimento su Altro Telefono
              </h3>
              <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                Le foto si salvano <strong className="text-emerald-300">direttamente nella memoria locale del tuo telefono</strong> (IndexedDB: <span className="tabular-nums font-bold text-white">{storageSizeLabel}</span> occupati{isPersistentGranted ? ' · archiviazione persistente attiva' : ''}). Puoi caricare <strong className="text-white">quante foto vuoi per ogni rasatura</strong> e trasferirle su un altro telefono coi tasti qui sotto:
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => handleExportProgress(false)}
            className="w-full py-3 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer min-h-[46px]"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>Salva Progresso Peli Incarniti</span>
          </button>

          <button
            type="button"
            onClick={handleTriggerImport}
            className="w-full py-3 px-4 rounded-2xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 font-black text-xs flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer min-h-[46px]"
          >
            <FolderUp className="w-4 h-4 shrink-0 text-cyan-300" />
            <span>Carica Progresso (Altro Telefono)</span>
          </button>
        </div>

        {sessions.length > 0 && typeof navigator !== 'undefined' && 'share' in navigator && (
          <button
            type="button"
            onClick={() => handleExportProgress(true)}
            className="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 text-[11px] font-bold flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-cyan-300" />
            <span>Invia file backup su WhatsApp / Drive per l'altro telefono</span>
          </button>
        )}

        <div className="text-[10px] text-gray-400 leading-relaxed flex items-start gap-1.5 pt-0.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-gray-200">Come funziona su un nuovo telefono:</strong> premi <em>"Salva Progresso Peli Incarniti"</em>, salva o invia il file sul nuovo telefono e lì premi <em>"Carica Progresso"</em>: tutte le foto, date e orari compaiono automaticamente.
          </span>
        </div>
      </div>

      {/* Controllo Sessioni + Pulsante Nuova Rasatura */}
      <div className="p-4 rounded-3xl bg-black/70 border border-white/10 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-gray-400 block">
              Le Tue Sessioni di Rasatura
            </span>
            <p className="text-xs text-gray-300">
              Data, giorno e ora vengono registrati in automatico al caricamento (puoi modificarli manualmente in qualsiasi momento).
            </p>
          </div>
          <button
            type="button"
            onClick={handleCreateNewSession}
            className="py-2.5 px-4 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs flex items-center gap-1.5 shadow-neon active:scale-95 transition-all cursor-pointer min-h-[44px]"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Nuova Rasatura Oggi</span>
          </button>
        </div>

        {isLoading ? (
          <div className="p-6 text-center text-xs text-gray-400">
            Caricamento foto dalla memoria del telefono...
          </div>
        ) : sessions.length === 0 ? (
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-dashed border-white/15 text-center space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center justify-center mx-auto">
              <Camera className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-black text-white">Nessuna sessione fotografica ancora</h4>
              <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                Premi <strong className="text-cyan-300">"Nuova Rasatura Oggi"</strong> oppure <strong className="text-cyan-300">"Carica Progresso"</strong> se hai già un file di backup da un altro telefono.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {sessions.map((s) => {
                const isSelected = activeSession?.id === s.id;
                const count = shavingPhotoDb.countPhotos(s);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setActiveSessionId(s.id);
                      setCompareAcrossDays(false);
                    }}
                    className={`shrink-0 px-3.5 py-2 rounded-2xl border text-left transition-all cursor-pointer min-h-[44px] ${
                      isSelected
                        ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-md'
                        : 'bg-white/[0.03] border-white/10 text-gray-300 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="text-xs font-extrabold flex items-center gap-1.5 whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{s.dayLabel} {s.dateStr}</span>
                    </div>
                    <div className="text-[10px] text-gray-400 flex items-center gap-2 mt-0.5 tabular-nums">
                      <span>{s.timeStr}</span>
                      <span>·</span>
                      <span className={count > 0 ? 'text-emerald-300 font-bold' : ''}>
                        {count} {count === 1 ? 'foto' : 'foto'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* SEZIONE ATTIVA CON I 3 LATI + ZONE EXTRA ILLIMITATE */}
      {activeSession && (
        <div className="space-y-4">
          {/* Barra Info Sessione + Modalità Confronto + Confronto tra Giorni */}
          <div className="p-3.5 rounded-3xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="space-y-0.5">
                <div className="text-xs font-black text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeSession.dayLabel} {activeSession.dateStr} • ore {activeSession.timeStr}</span>
                </div>
                <span className="text-[10px] text-gray-400 block">
                  1. Laterale Sinistro → 2. Frontale → 3. Laterale Destro + quante foto/zone extra vuoi
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => (isEditingDate ? setIsEditingDate(false) : handleOpenDateEditor())}
                  className={`px-2.5 py-1.5 rounded-xl border text-[11px] font-bold flex items-center gap-1 cursor-pointer min-h-[36px] transition-all ${
                    isEditingDate
                      ? 'bg-cyan-400 text-black border-cyan-300 font-black'
                      : 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border-cyan-500/30'
                  }`}
                >
                  <Pencil className="w-3.5 h-3.5" />
                  <span>{isEditingDate ? 'Chiudi Data' : 'Modifica Data'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDeleteSession(activeSession.id)}
                  className="px-2.5 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/25 text-[11px] font-bold flex items-center gap-1 cursor-pointer min-h-[36px]"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Elimina</span>
                </button>
              </div>
            </div>

            {isEditingDate && (
              <div className="p-3.5 rounded-2xl bg-black/75 border border-cyan-400/40 space-y-3 animate-in fade-in duration-150">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Modifica Data &amp; Ora della Rasatura
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[10px] text-gray-400 font-bold block mb-1">
                      Giorno / Data
                    </label>
                    <input
                      type="date"
                      value={editDateValue}
                      onChange={(e) => setEditDateValue(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.06] border border-white/15 text-white text-xs font-bold focus:border-cyan-400 focus:outline-none min-h-[40px]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-400 font-bold block mb-1">
                      Ora
                    </label>
                    <input
                      type="time"
                      value={editTimeValue}
                      onChange={(e) => setEditTimeValue(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.06] border border-white/15 text-white text-xs font-bold focus:border-cyan-400 focus:outline-none min-h-[40px]"
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 text-[11px] text-gray-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={alsoSyncPhotoDates}
                    onChange={(e) => setAlsoSyncPhotoDates(e.target.checked)}
                    className="w-4 h-4 rounded accent-cyan-400 cursor-pointer"
                  />
                  <span>Aggiorna anche la data stampata sotto le foto di questa rasatura</span>
                </label>

                <div className="flex items-center gap-2 pt-0.5">
                  <button
                    type="button"
                    onClick={handleSaveSessionDate}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer min-h-[40px]"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Salva Nuova Data</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingDate(false)}
                    className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 font-bold text-xs cursor-pointer min-h-[40px]"
                  >
                    Annulla
                  </button>
                </div>
              </div>
            )}

            {/* Selettore Angolazioni in ordine */}
            <div className="grid grid-cols-4 gap-1.5 bg-black/60 p-1 rounded-2xl border border-white/10">
              {ORDERED_ANGLES.map((a) => {
                const angleCount =
                  shavingPhotoDb.getAnglePhotosList(activeSession, a.key, 'before').length +
                  shavingPhotoDb.getAnglePhotosList(activeSession, a.key, 'after').length;
                return (
                  <button
                    key={a.key}
                    type="button"
                    onClick={() => setSelectedAngle(a.key)}
                    className={`py-2 px-1 rounded-xl text-[11px] font-bold text-center transition-all cursor-pointer min-h-[40px] ${
                      selectedAngle === a.key
                        ? 'bg-emerald-400 text-black font-black shadow-sm'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {a.shortLabel}
                    {angleCount > 0 ? ` (${angleCount})` : ''}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setSelectedAngle('all')}
                className={`py-2 px-1 rounded-xl text-[11px] font-bold text-center transition-all cursor-pointer min-h-[40px] ${
                  selectedAngle === 'all'
                    ? 'bg-cyan-400 text-black font-black shadow-sm'
                    : 'text-cyan-300 hover:text-white'
                }`}
              >
                Tutte
              </button>
            </div>

            {/* Modalità Confronto Differenze */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/10">
              <div className="flex bg-black/60 p-1 rounded-2xl border border-white/10 gap-1">
                <button
                  type="button"
                  onClick={() => setCompareMode('overlay')}
                  className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1 cursor-pointer ${
                    compareMode === 'overlay'
                      ? 'bg-cyan-400 text-black font-black'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Repeat className="w-3 h-3" />
                  <span>Sovrapponi</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCompareMode('slider')}
                  className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1 cursor-pointer ${
                    compareMode === 'slider'
                      ? 'bg-cyan-400 text-black font-black'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>Cursore</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCompareMode('sideBySide')}
                  className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1 cursor-pointer ${
                    compareMode === 'sideBySide'
                      ? 'bg-cyan-400 text-black font-black'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Columns className="w-3 h-3" />
                  <span>Affiancate</span>
                </button>
              </div>

              {sessions.length >= 2 && (
                <button
                  type="button"
                  onClick={() => setCompareAcrossDays((v) => !v)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-extrabold border transition-all cursor-pointer ${
                    compareAcrossDays
                      ? 'bg-purple-500 text-white border-purple-300'
                      : 'bg-purple-500/15 text-purple-300 border-purple-500/30 hover:bg-purple-500/25'
                  }`}
                >
                  {compareAcrossDays ? 'Chiudi Confronto Giorni' : 'Confronta Giorni Diversi'}
                </button>
              )}
            </div>
          </div>

          {/* Confronto tra 2 Giorni Diversi (se attivato e >= 2 sessioni) */}
          {compareAcrossDays && sessions.length >= 2 && sessionDayA && sessionDayB && (
            <div className="p-4 rounded-3xl bg-purple-950/25 border-2 border-purple-400/45 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xs sm:text-sm font-black text-purple-200 uppercase tracking-wider">
                  Confronto Evoluzione tra 2 Giorni
                </h4>
                <div className="flex bg-black/60 p-1 rounded-xl border border-white/10 text-[10px]">
                  <button
                    type="button"
                    onClick={() => setDayComparePhase('before')}
                    className={`px-2.5 py-1 rounded-lg font-bold cursor-pointer ${
                      dayComparePhase === 'before' ? 'bg-amber-400 text-black font-black' : 'text-gray-300'
                    }`}
                  >
                    Prima
                  </button>
                  <button
                    type="button"
                    onClick={() => setDayComparePhase('after')}
                    className={`px-2.5 py-1 rounded-lg font-bold cursor-pointer ${
                      dayComparePhase === 'after' ? 'bg-emerald-400 text-black font-black' : 'text-gray-300'
                    }`}
                  >
                    Dopo
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-gray-400 font-bold block mb-1">Giorno Precedente</label>
                  <select
                    value={sessionDayA.id}
                    onChange={(e) => setDayASessionId(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-xl bg-black/70 border border-white/15 text-white text-xs"
                  >
                    {sessions.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.dayLabel} {s.dateStr} ({s.timeStr})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 font-bold block mb-1">Giorno Nuovo</label>
                  <select
                    value={sessionDayB.id}
                    onChange={(e) => setDayBSessionId(e.target.value)}
                    className="w-full px-2.5 py-2 rounded-xl bg-black/70 border border-white/15 text-white text-xs"
                  >
                    {sessions.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.dayLabel} {s.dateStr} ({s.timeStr})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                {ORDERED_ANGLES.filter((a) => selectedAngle === 'all' || selectedAngle === a.key).map((angleMeta) => {
                  const pA = shavingPhotoDb.getAnglePhotosList(sessionDayA, angleMeta.key, dayComparePhase)[0];
                  const pB = shavingPhotoDb.getAnglePhotosList(sessionDayB, angleMeta.key, dayComparePhase)[0];
                  return (
                    <div key={angleMeta.key} className="space-y-1.5">
                      <span className="text-[11px] font-bold text-purple-200 block">{angleMeta.label}</span>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-xl overflow-hidden border border-white/15 bg-black aspect-[3/4] relative">
                          {pA ? (
                            <>
                              <img src={pA.dataUrl} alt="Giorno A" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                              <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-lg bg-black/80 text-[10px] font-bold text-amber-300">
                                {pA.dateStr} • {pA.timeStr}
                              </span>
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[11px] text-gray-500 p-2 text-center">
                              Nessuna foto ({dayComparePhase})
                            </div>
                          )}
                        </div>
                        <div className="rounded-xl overflow-hidden border border-emerald-400/40 bg-black aspect-[3/4] relative">
                          {pB ? (
                            <>
                              <img src={pB.dataUrl} alt="Giorno B" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                              <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-lg bg-black/80 text-[10px] font-bold text-emerald-300">
                                {pB.dateStr} • {pB.timeStr}
                              </span>
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[11px] text-gray-500 p-2 text-center">
                              Nessuna foto ({dayComparePhase})
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Blocchi Angoli Principali (1. Sinistro -> 2. Frontale -> 3. Destro, ciascuno con foto illimitate) */}
          <div className="space-y-4">
            {ORDERED_ANGLES.filter((a) => selectedAngle === 'all' || selectedAngle === a.key).map((a) =>
              renderComparisonGalleryBlock({
                blockKey: a.key,
                stepBadge: a.step,
                title: a.label.replace(/^\d+\.\s*/, ''),
                subtitle: a.hint,
                beforeList: shavingPhotoDb.getAnglePhotosList(activeSession, a.key, 'before'),
                afterList: shavingPhotoDb.getAnglePhotosList(activeSession, a.key, 'after'),
                onPick: (phase, mode, replaceIndex) =>
                  triggerAnglePhotoPicker(a.key, phase, mode, replaceIndex),
                onRemove: (phase, idx) => handleRemoveAnglePhotoAt(a.key, phase, idx),
                onOpenLightbox: (phase, idx) =>
                  setLightboxState({
                    session: activeSession,
                    target: { kind: 'angle', angle: a.key },
                    phase,
                    index: idx
                  })
              })
            )}
          </div>

          {/* ALTRE FOTO / ZONE EXTRA ILLIMITATE */}
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center justify-between gap-2 px-1">
              <div className="flex items-center gap-2">
                <Images className="w-4 h-4 text-cyan-400" />
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-cyan-300 block">
                    Altre Foto / Zone Extra (Illimitate)
                  </span>
                  <span className="text-[10px] text-gray-400">
                    Aggiungi altre zone (Sottomento, Collo, Zigomo, Zoom) oltre alle 3 principali
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleAddExtraShotBlock}
                className="py-2 px-3.5 rounded-2xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 font-black text-xs flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer min-h-[40px]"
              >
                <Plus className="w-4 h-4 stroke-[3] text-cyan-300" />
                <span>Aggiungi Altra Foto / Zona</span>
              </button>
            </div>

            {(activeSession.extraShots || []).map((extra, extraIdx) => {
              const isRenaming = editingExtraId === extra.id;
              return renderComparisonGalleryBlock({
                blockKey: `extra_${extra.id}`,
                stepBadge: 4 + extraIdx,
                title: isRenaming ? 'Rinomina Zona' : extra.label,
                subtitle: isRenaming
                  ? 'Scrivi il nome della zona e salva'
                  : 'Zona aggiuntiva personalizzata • carica quante foto vuoi Prima & Dopo',
                beforeList: extra.beforeList || [],
                afterList: extra.afterList || [],
                isExtraBlock: true,
                onPick: (phase, mode, replaceIndex) =>
                  triggerExtraPhotoPicker(extra.id, phase, mode, replaceIndex),
                onRemove: (phase, idx) => handleRemoveExtraPhotoAt(extra.id, phase, idx),
                onOpenLightbox: (phase, idx) =>
                  setLightboxState({
                    session: activeSession,
                    target: { kind: 'extra', extraId: extra.id, extraLabel: extra.label },
                    phase,
                    index: idx
                  }),
                extraControls: isRenaming ? (
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={editingExtraLabel}
                      onChange={(e) => setEditingExtraLabel(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveExtraLabel(extra.id);
                      }}
                      placeholder="Es: Sottomento"
                      className="px-2.5 py-1 rounded-xl bg-black/80 border border-cyan-400/50 text-white text-xs w-36 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleSaveExtraLabel(extra.id)}
                      className="p-1.5 rounded-xl bg-cyan-400 text-black font-black cursor-pointer"
                      title="Salva nome"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingExtraId(extra.id);
                        setEditingExtraLabel(extra.label);
                      }}
                      className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 cursor-pointer"
                      title="Rinomina zona"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteExtraBlock(extra.id)}
                      className="p-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/25 cursor-pointer"
                      title="Elimina questa zona extra"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )
              });
            })}
          </div>

          {/* Nota / Strumenti usati per questa rasatura */}
          <div className="p-4 rounded-3xl bg-black/70 border border-white/10 space-y-2.5">
            <label className="text-xs font-bold text-gray-200 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Appunti Rasatura (Strumento usato / Rossori / Salicilico)</span>
            </label>
            <textarea
              rows={2}
              value={noteDraft}
              onChange={(e) => setNoteDraft(e.target.value)}
              placeholder="Es: Monolama guance 30° + Nikai baffi, zero tagli, poca irritazione sul collo..."
              className="w-full px-3.5 py-2.5 rounded-2xl bg-black/60 border border-white/15 text-white text-xs placeholder:text-gray-600 focus:border-emerald-400 focus:outline-none resize-none"
            />
            <button
              type="button"
              onClick={handleSaveSessionNote}
              className="py-2 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-bold cursor-pointer min-h-[40px]"
            >
              Salva Appunto Sessione
            </button>
          </div>
        </div>
      )}

      {isProcessingPhoto && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="p-5 rounded-3xl bg-[#121824] border border-cyan-400/40 text-center space-y-2 max-w-xs w-full">
            <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mx-auto" />
            <p className="text-xs font-bold text-white">Ottimizzazione & salvataggio foto sul telefono...</p>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox per scambio istantaneo Prima ↔ Dopo e scorrimento multi-foto */}
      {lightboxState && (
        <div
          onClick={() => setLightboxState(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none"
        >
          <button
            type="button"
            onClick={() => setLightboxState(null)}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 cursor-pointer z-20"
            aria-label="Chiudi schermo intero"
          >
            <X className="w-5 h-5" />
          </button>

          {(() => {
            const { session, target, phase, index } = lightboxState;
            const otherPhase = phase === 'before' ? 'after' : 'before';

            let currentList: ShavingPhotoSlot[] = [];
            let otherList: ShavingPhotoSlot[] = [];
            let titleLabel = '';
            let angleIdx = -1;

            if (target.kind === 'angle') {
              currentList = shavingPhotoDb.getAnglePhotosList(session, target.angle, phase);
              otherList = shavingPhotoDb.getAnglePhotosList(session, target.angle, otherPhase);
              angleIdx = ORDERED_ANGLES.findIndex((a) => a.key === target.angle);
              titleLabel = ORDERED_ANGLES[angleIdx]?.label || '';
            } else {
              const found = (session.extraShots || []).find((ex) => ex.id === target.extraId);
              currentList = found ? (phase === 'before' ? found.beforeList : found.afterList) : [];
              otherList = found ? (otherPhase === 'before' ? found.beforeList : found.afterList) : [];
              titleLabel = found?.label || target.extraLabel;
            }

            const safeIdx = currentList.length > 0 ? Math.min(index, currentList.length - 1) : 0;
            const currentSlot = currentList[safeIdx];
            const otherSlot = otherList[Math.min(safeIdx, Math.max(0, otherList.length - 1))];

            return (
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-sm flex flex-col items-center space-y-3"
              >
                <div className="w-full flex items-center justify-between text-xs gap-2">
                  <span className="font-black text-white truncate">
                    {titleLabel}
                    {currentList.length > 1 ? ` (${safeIdx + 1}/${currentList.length})` : ''}
                  </span>
                  <span
                    className={`font-black shrink-0 ${
                      phase === 'before' ? 'text-amber-300' : 'text-emerald-300'
                    }`}
                  >
                    {phase === 'before' ? 'PRIMA DI RASARE' : 'DOPO RASATURA'}
                  </span>
                </div>

                <div className="relative w-full aspect-[3/4] max-h-[65vh] rounded-2xl overflow-hidden border-2 border-cyan-400/50 bg-black flex items-center justify-center">
                  {currentSlot ? (
                    <img
                      src={currentSlot.dataUrl}
                      alt={titleLabel}
                      referrerPolicy="no-referrer"
                      onClick={() => {
                        if (otherSlot) {
                          setLightboxState({ ...lightboxState, phase: otherPhase, index: 0 });
                        }
                      }}
                      className="w-full h-full object-contain cursor-pointer"
                    />
                  ) : (
                    <span className="text-xs text-gray-400">Foto non ancora caricata</span>
                  )}

                  {/* Frecce cambio foto (se ci sono più foto nello stesso lato) o cambio angolo */}
                  {(currentList.length > 1 || target.kind === 'angle') && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          if (currentList.length > 1) {
                            const prevImg = (safeIdx - 1 + currentList.length) % currentList.length;
                            setLightboxState({ ...lightboxState, index: prevImg });
                          } else if (target.kind === 'angle') {
                            const prevIdx = (angleIdx - 1 + ORDERED_ANGLES.length) % ORDERED_ANGLES.length;
                            setLightboxState({
                              ...lightboxState,
                              target: { kind: 'angle', angle: ORDERED_ANGLES[prevIdx].key },
                              index: 0
                            });
                          }
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/75 text-white border border-white/20 cursor-pointer"
                        title={currentList.length > 1 ? 'Foto precedente' : 'Angolo precedente'}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (currentList.length > 1) {
                            const nextImg = (safeIdx + 1) % currentList.length;
                            setLightboxState({ ...lightboxState, index: nextImg });
                          } else if (target.kind === 'angle') {
                            const nextIdx = (angleIdx + 1) % ORDERED_ANGLES.length;
                            setLightboxState({
                              ...lightboxState,
                              target: { kind: 'angle', angle: ORDERED_ANGLES[nextIdx].key },
                              index: 0
                            });
                          }
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/75 text-white border border-white/20 cursor-pointer"
                        title={currentList.length > 1 ? 'Foto successiva' : 'Angolo successivo'}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {currentSlot && (
                  <div className="text-xs text-gray-300 font-semibold tabular-nums">
                    {currentSlot.dayLabel} {currentSlot.dateStr} · ore {currentSlot.timeStr}
                  </div>
                )}

                {otherSlot && (
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxState({
                        ...lightboxState,
                        phase: otherPhase,
                        index: Math.min(safeIdx, Math.max(0, otherList.length - 1))
                      })
                    }
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
                  >
                    <Repeat className="w-4 h-4" />
                    <span>
                      Scambia ({phase === 'before' ? 'Vedi Dopo Rasatura' : 'Vedi Prima di Rasare'})
                    </span>
                  </button>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
