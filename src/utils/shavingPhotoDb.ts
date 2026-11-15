import {
  ShavingAngle,
  ShavingAnglePhotos,
  ShavingBackupBundle,
  ShavingExtraShot,
  ShavingPhotoSlot,
  ShavingSession
} from '../types';

const DB_NAME = 'glowup_shaving_tracker_db';
const DB_VERSION = 1;
const STORE_NAME = 'shaving_sessions';

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('indexedDB' in window)) {
      reject(new Error('IndexedDB non supportato in questo browser'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Errore apertura IndexedDB'));
  });
}

export function formatAutoTimestamp(date: Date = new Date()): {
  iso: string;
  dayLabel: string;
  dateStr: string;
  timeStr: string;
  fullLabel: string;
} {
  const iso = date.toISOString();
  const weekday = date.toLocaleDateString('it-IT', { weekday: 'short' });
  const dayLabel = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  const dateStr = date.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const timeStr = date.toLocaleTimeString('it-IT', {
    hour: '2-digit',
    minute: '2-digit'
  });
  return {
    iso,
    dayLabel,
    dateStr,
    timeStr,
    fullLabel: `${dayLabel} ${dateStr} • ${timeStr}`
  };
}

export function calcTimeDeltaLabel(beforeIso?: string, afterIso?: string): string | null {
  if (!beforeIso || !afterIso) return null;
  const start = new Date(beforeIso).getTime();
  const end = new Date(afterIso).getTime();
  if (Number.isNaN(start) || Number.isNaN(end)) return null;

  const diffMs = Math.abs(end - start);
  const totalMinutes = Math.round(diffMs / 60000);
  if (totalMinutes < 1) return 'Stesso minuto';
  if (totalMinutes < 60) return `+${totalMinutes} min dopo`;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (hours < 24) return mins > 0 ? `+${hours}h ${mins}m dopo` : `+${hours}h dopo`;
  const days = Math.floor(hours / 24);
  const remHours = hours % 24;
  return remHours > 0 ? `+${days}g ${remHours}h dopo` : `+${days}g dopo`;
}

export async function compressPhoneImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Impossibile leggere il file immagine'));
    reader.onload = () => {
      const rawDataUrl = reader.result as string;
      const img = new Image();
      img.onerror = () => reject(new Error('Formato immagine non valido'));
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          const maxDim = 1080;
          let { width, height } = img;
          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(rawDataUrl);
            return;
          }
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL('image/jpeg', 0.84);
          resolve(compressed);
        } catch {
          resolve(rawDataUrl);
        }
      };
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
  });
}

export const shavingPhotoDb = {
  async getAllSessions(): Promise<ShavingSession[]> {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => {
        const list = (req.result as ShavingSession[]) || [];
        list.sort((a, b) => new Date(b.createdAtIso).getTime() - new Date(a.createdAtIso).getTime());
        resolve(list);
      };
      req.onerror = () => reject(req.error || new Error('Errore lettura sessioni'));
    });
  },

  async saveSession(session: ShavingSession): Promise<void> {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put(session);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error('Errore salvataggio sessione'));
    });
  },

  async deleteSession(id: string): Promise<void> {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error('Errore eliminazione sessione'));
    });
  },

  async importSessions(incoming: ShavingSession[]): Promise<{ added: number; updated: number; total: number }> {
    const existing = await this.getAllSessions();
    const existingIds = new Set(existing.map((s) => s.id));

    const db = await openDatabase();
    let added = 0;
    let updated = 0;

    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);

      for (const session of incoming) {
        if (existingIds.has(session.id)) {
          updated += 1;
        } else {
          added += 1;
        }
        store.put(session);
      }

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error('Errore importazione sessioni'));
    });

    const finalList = await this.getAllSessions();
    return { added, updated, total: finalList.length };
  },

  async requestPersistentStorage(): Promise<boolean> {
    try {
      if (navigator.storage && navigator.storage.persist) {
        return await navigator.storage.persist();
      }
    } catch {
      // Ignore unsupported environments
    }
    return false;
  },

  createEmptySession(): ShavingSession {
    const ts = formatAutoTimestamp(new Date());
    return {
      id: `shave_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      createdAtIso: ts.iso,
      updatedAtIso: ts.iso,
      dayLabel: ts.dayLabel,
      dateStr: ts.dateStr,
      timeStr: ts.timeStr,
      title: `Rasatura ${ts.dayLabel} ${ts.dateStr}`,
      notes: '',
      photos: {
        left: { beforeList: [], afterList: [] },
        front: { beforeList: [], afterList: [] },
        right: { beforeList: [], afterList: [] }
      },
      extraShots: []
    };
  },

  getAnglePhotosList(
    session: ShavingSession,
    angle: ShavingAngle,
    phase: 'before' | 'after'
  ): ShavingPhotoSlot[] {
    const angleObj: ShavingAnglePhotos | undefined = session.photos?.[angle];
    if (!angleObj) return [];
    const list = phase === 'before' ? angleObj.beforeList : angleObj.afterList;
    if (Array.isArray(list) && list.length > 0) {
      return list;
    }
    const single = phase === 'before' ? angleObj.before : angleObj.after;
    return single?.dataUrl ? [single] : [];
  },

  countPhotos(session: ShavingSession): number {
    let count = 0;
    const angles: ShavingAngle[] = ['left', 'front', 'right'];
    for (const a of angles) {
      count += this.getAnglePhotosList(session, a, 'before').length;
      count += this.getAnglePhotosList(session, a, 'after').length;
    }
    if (Array.isArray(session.extraShots)) {
      for (const extra of session.extraShots) {
        count += Array.isArray(extra.beforeList) ? extra.beforeList.length : 0;
        count += Array.isArray(extra.afterList) ? extra.afterList.length : 0;
      }
    }
    return count;
  },

  estimateStorageSize(sessions: ShavingSession[]): string {
    try {
      const bytes = new Blob([JSON.stringify(sessions)]).size;
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    } catch {
      return '0 KB';
    }
  },

  buildBackupBundle(sessions: ShavingSession[]): ShavingBackupBundle {
    return {
      app: 'glowup-peli-incarniti-backup',
      version: 1,
      exportedAtIso: new Date().toISOString(),
      sessions
    };
  },

  parseBackupFileContent(rawText: string): ShavingSession[] {
    const parsed = JSON.parse(rawText);
    let candidates: any[] = [];

    if (parsed && parsed.app === 'glowup-peli-incarniti-backup' && Array.isArray(parsed.sessions)) {
      candidates = parsed.sessions;
    } else if (Array.isArray(parsed)) {
      candidates = parsed;
    } else {
      throw new Error('File non riconosciuto: seleziona un file di backup "progresso-peli-incarniti".');
    }

    const normalizeAngle = (rawAngle: any): ShavingAnglePhotos => {
      const obj = rawAngle && typeof rawAngle === 'object' ? rawAngle : {};
      const beforeList: ShavingPhotoSlot[] = Array.isArray(obj.beforeList)
        ? obj.beforeList
        : obj.before?.dataUrl
        ? [obj.before]
        : [];
      const afterList: ShavingPhotoSlot[] = Array.isArray(obj.afterList)
        ? obj.afterList
        : obj.after?.dataUrl
        ? [obj.after]
        : [];
      return {
        before: beforeList[0] || obj.before,
        after: afterList[0] || obj.after,
        beforeList,
        afterList
      };
    };

    const normalizeExtraShots = (rawExtras: any): ShavingExtraShot[] => {
      if (!Array.isArray(rawExtras)) return [];
      return rawExtras
        .filter((item) => item && typeof item.id === 'string')
        .map((item) => ({
          id: item.id,
          label: typeof item.label === 'string' ? item.label : 'Foto Extra',
          beforeList: Array.isArray(item.beforeList) ? item.beforeList : [],
          afterList: Array.isArray(item.afterList) ? item.afterList : []
        }));
    };

    const validSessions: ShavingSession[] = candidates
      .filter(
        (item) =>
          item &&
          typeof item.id === 'string' &&
          typeof item.createdAtIso === 'string' &&
          item.photos &&
          typeof item.photos === 'object'
      )
      .map((item) => ({
        id: item.id,
        createdAtIso: item.createdAtIso,
        updatedAtIso: item.updatedAtIso || item.createdAtIso,
        dayLabel: item.dayLabel || '',
        dateStr: item.dateStr || '',
        timeStr: item.timeStr || '',
        title: item.title || 'Sessione Rasatura',
        notes: item.notes || '',
        photos: {
          left: normalizeAngle(item.photos.left),
          front: normalizeAngle(item.photos.front),
          right: normalizeAngle(item.photos.right)
        },
        extraShots: normalizeExtraShots(item.extraShots)
      }));

    if (validSessions.length === 0 && candidates.length > 0) {
      throw new Error('Il file di backup non contiene sessioni valide.');
    }

    return validSessions;
  }
};
