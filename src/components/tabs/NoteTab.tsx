import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Plus, 
  Trash2, 
  ArrowLeft, 
  Eye, 
  Maximize2, 
  X, 
  ShieldAlert, 
  AlertTriangle, 
  Sparkles, 
  Scale, 
  ChevronRight, 
  ChevronDown, 
  Stethoscope, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Activity, 
  Layers, 
  Flame, 
  Info,
  ChevronLeft,
  ExternalLink,
  Play,
  Repeat,
  Zap
} from 'lucide-react';
import { UserNote } from '../../types';
import { storageHelper } from '../../utils/storage';
import { MentoPosturaOcchiView } from './MentoPosturaOcchiView';

const FACE_PHOTOS = [
  {
    id: 'attuale',
    title: 'Viso Attuale',
    badge: '1/2 • Faccia Attuale',
    tag: 'Base di Partenza',
    desc: 'Viso iniziale: arcata destra espansa, arcata sinistra compressa',
    url: 'https://i.ibb.co/3VDsH13/20260911-184140.jpg'
  },
  {
    id: 'definita',
    title: 'Viso Definito',
    badge: '2/2 • Faccia Definita',
    tag: 'Modello Target',
    desc: 'Modello target: zigomi e masseteri cesellati, simmetria ed espansione',
    url: 'https://i.ibb.co/nspkJD8t/1789145825747.jpg'
  }
];

const FACE_IMAGES = {
  attuale: FACE_PHOTOS[0].url,
  definita: FACE_PHOTOS[1].url
};

const SCHEMA_IMAGES = [
  {
    title: 'Schema Analisi Strutturale 1',
    url: 'https://i.ibb.co/r2gc2cRW/1789145830684.jpg',
    desc: 'Tracciato asse facciale, deviazione mediana e proporzioni ossee'
  },
  {
    title: 'Schema Analisi Strutturale 2',
    url: 'https://i.ibb.co/tPKpnGjW/1789145833456.jpg',
    desc: 'Mappatura discrepanza del palato e shift funzionale mandibolare'
  }
];

export const NoteTab: React.FC = () => {
  const [activeView, setActiveView] = useState<'list' | 'asimmetria' | 'ortodonzia' | 'postura_occhi'>('list');
  const [userNotes, setUserNotes] = useState<UserNote[]>(() => storageHelper.getUserNotes());
  const [fullscreenImg, setFullscreenImg] = useState<{ url: string; title: string } | null>(null);
  const [faceComparisonMode, setFaceComparisonMode] = useState<'overlay' | 'sideBySide' | 'swipe'>('overlay');
  const [activeFaceIndex, setActiveFaceIndex] = useState<number>(0);
  const [swapCount, setSwapCount] = useState<number>(0);
  const [isAutoBlinking, setIsAutoBlinking] = useState<boolean>(false);
  const [swipeOffset, setSwipeOffset] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [isOrtodonziaExpanded, setIsOrtodonziaExpanded] = useState(false);

  // Quick swap handler for overlay comparison
  const handleToggleFace = () => {
    setActiveFaceIndex(prev => (prev === 0 ? 1 : 0));
    setSwapCount(c => c + 1);
  };

  // Optional automatic blinking timer
  useEffect(() => {
    let interval: any = null;
    if (isAutoBlinking) {
      interval = setInterval(() => {
        setActiveFaceIndex(prev => (prev === 0 ? 1 : 0));
        setSwapCount(c => c + 1);
      }, 700);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoBlinking]);

  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);
  const mouseStartX = React.useRef<number | null>(null);
  const isMouseDown = React.useRef<boolean>(false);

  // Swipe Handlers for mobile touch and desktop mouse drag
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsSwiping(true);
    setSwipeOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = e.touches[0].clientX - touchStartX.current;
    const diffY = e.touches[0].clientY - (touchStartY.current ?? e.touches[0].clientY);
    if (Math.abs(diffX) > Math.abs(diffY)) {
      setSwipeOffset(diffX);
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null) {
      if (swipeOffset < -40) {
        // Swiped left -> Next photo (definita)
        setActiveFaceIndex(1);
      } else if (swipeOffset > 40) {
        // Swiped right -> Prev photo (attuale)
        setActiveFaceIndex(0);
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
    setIsSwiping(false);
    setSwipeOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isMouseDown.current = true;
    setIsSwiping(true);
    setSwipeOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || mouseStartX.current === null) return;
    const diffX = e.clientX - mouseStartX.current;
    setSwipeOffset(diffX);
  };

  const handleMouseUp = () => {
    if (isMouseDown.current && mouseStartX.current !== null) {
      if (swipeOffset < -40) {
        setActiveFaceIndex(1);
      } else if (swipeOffset > 40) {
        setActiveFaceIndex(0);
      }
    }
    isMouseDown.current = false;
    mouseStartX.current = null;
    setIsSwiping(false);
    setSwipeOffset(0);
  };

  // New Note Modal
  const [isCreatingNote, setIsCreatingNote] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteCategory, setNewNoteCategory] = useState<UserNote['category']>('percorso');
  const [newNoteContent, setNewNoteContent] = useState('');

  // Selected User Note Modal / Detail
  const [selectedNote, setSelectedNote] = useState<UserNote | null>(null);

  const handleCreateNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteTitle.trim() || !newNoteContent.trim()) return;

    const newNote: UserNote = {
      id: 'note_' + Date.now(),
      title: newNoteTitle.trim(),
      date: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }),
      category: newNoteCategory,
      content: newNoteContent.trim()
    };

    const updated = [newNote, ...userNotes];
    setUserNotes(updated);
    storageHelper.saveUserNotes(updated);

    setNewNoteTitle('');
    setNewNoteContent('');
    setIsCreatingNote(false);
  };

  const handleDeleteNote = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = userNotes.filter(n => n.id !== id);
    setUserNotes(updated);
    storageHelper.saveUserNotes(updated);
    if (selectedNote?.id === id) {
      setSelectedNote(null);
    }
  };

  // FULLSCREEN IMAGE MODAL
  const renderFullscreenModal = () => {
    if (!fullscreenImg) return null;

    const currentFaceIndex = FACE_PHOTOS.findIndex(p => p.url === fullscreenImg.url);
    const isFaceComparisonPhoto = currentFaceIndex !== -1;

    return (
      <div 
        className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-in fade-in select-none"
        onClick={() => setFullscreenImg(null)}
      >
        <button
          onClick={() => setFullscreenImg(null)}
          className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer z-30"
          title="Chiudi"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous & Next arrows for face comparison photos */}
        {isFaceComparisonPhoto && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                const newIdx = currentFaceIndex === 0 ? 1 : 0;
                setFullscreenImg({ url: FACE_PHOTOS[newIdx].url, title: FACE_PHOTOS[newIdx].title });
                setActiveFaceIndex(newIdx);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md cursor-pointer z-30 active:scale-90 transition-all"
              title="Foto Precedente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                const newIdx = currentFaceIndex === 1 ? 0 : 1;
                setFullscreenImg({ url: FACE_PHOTOS[newIdx].url, title: FACE_PHOTOS[newIdx].title });
                setActiveFaceIndex(newIdx);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md cursor-pointer z-30 active:scale-90 transition-all"
              title="Foto Successiva"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div 
          className={`max-w-md w-full max-h-[85vh] flex flex-col items-center select-none ${
            isFaceComparisonPhoto ? 'cursor-pointer' : ''
          }`}
          onClick={(e) => {
            if (isFaceComparisonPhoto) {
              e.stopPropagation();
              const newIdx = currentFaceIndex === 0 ? 1 : 0;
              setFullscreenImg({ url: FACE_PHOTOS[newIdx].url, title: FACE_PHOTOS[newIdx].title });
              setActiveFaceIndex(newIdx);
              setSwapCount(c => c + 1);
            }
          }}
        >
          <div className="relative w-full flex items-center justify-center">
            <img
              src={fullscreenImg.url}
              alt={fullscreenImg.title}
              className="w-full max-h-[70vh] object-contain rounded-2xl border-2 border-cyan-400/40 shadow-2xl active:scale-[0.99] transition-transform"
              referrerPolicy="no-referrer"
            />
            {isFaceComparisonPhoto && (
              <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-xl border border-white/20 text-[10px] font-black text-cyan-300 pointer-events-none">
                {currentFaceIndex === 0 ? '1/2 • Faccia Attuale' : '2/2 • Faccia Definita'}
              </div>
            )}
          </div>

          <p className="mt-2.5 text-sm font-extrabold text-center text-cyan-300">
            {fullscreenImg.title}
          </p>

          {isFaceComparisonPhoto && (
            <div className="flex flex-col items-center gap-2 mt-2 w-full">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full transition-all ${currentFaceIndex === 0 ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-white/20'}`} />
                <span className={`w-2.5 h-2.5 rounded-full transition-all ${currentFaceIndex === 1 ? 'bg-cyan-400 shadow-[0_0_8px_rgba(0,255,209,0.8)]' : 'bg-white/20'}`} />
                <span className="text-[11px] text-gray-300 font-bold">
                  {currentFaceIndex === 0 ? 'Attuale' : 'Definita'}
                </span>
              </div>

              {/* Big floating button to swap in fullscreen */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const newIdx = currentFaceIndex === 0 ? 1 : 0;
                  setFullscreenImg({ url: FACE_PHOTOS[newIdx].url, title: FACE_PHOTOS[newIdx].title });
                  setActiveFaceIndex(newIdx);
                  setSwapCount(c => c + 1);
                }}
                className="w-full max-w-xs py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-neon active:scale-95 transition-all cursor-pointer z-30"
              >
                <Repeat className="w-4 h-4 text-black" />
                <span>⚡ Clicca per Scambiare ({currentFaceIndex === 0 ? 'Vedi Definita' : 'Vedi Attuale'})</span>
              </button>
            </div>
          )}

          <span className="text-[10px] text-gray-400 mt-2 text-center">
            {isFaceComparisonPhoto 
              ? '👆 Tocca l\'immagine o il tasto a ripetizione per notare le differenze • Sfondo per chiudere' 
              : 'Tocca ovunque per chiudere'}
          </span>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------------
  // VIEW: MENTO, POSTURA E OCCHI (RICHIESTA SPECIFICA UTENTE)
  // -------------------------------------------------------------
  if (activeView === 'postura_occhi') {
    return <MentoPosturaOcchiView onBack={() => setActiveView('list')} />;
  }

  // -------------------------------------------------------------
  // VIEW: LA MIA ASIMMETRIA (MENU DETTAGLIATO)
  // -------------------------------------------------------------
  if (activeView === 'asimmetria') {
    return (
      <div className="space-y-4 pb-24 pt-1 animate-in fade-in duration-200">
        {renderFullscreenModal()}

        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/90 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
          <button
            type="button"
            onClick={() => setActiveView('list')}
            className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tutte le Note</span>
          </button>
          <span className="text-[11px] font-bold text-gray-400 bg-black/40 px-3 py-1 rounded-xl border border-white/5">
            Nota Guida • 8 Mesi
          </span>
        </div>

        {/* Master Note Title Card */}
        <div className="p-4 sm:p-5 rounded-3xl glass-card border border-[#00FFD1]/30 relative overflow-hidden space-y-2.5">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#00FFD1]/10 text-[#00FFD1] text-[10px] font-extrabold uppercase tracking-widest border border-[#00FFD1]/30">
              Nota di Riferimento
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">Percorso Naturale</span>
          </div>

          <h1 className="text-base sm:text-lg font-black text-white leading-snug">
            ANALISI E PIANO INTEGRATO PER LA SIMMETRIA FACCIALE (PERCORSO NATURALE)
          </h1>

          <p className="text-xs text-gray-300 leading-relaxed font-medium">
            Questa nota riassume la tua struttura anatomica specifica, la meccanica del tuo morso e il piano d'azione naturale consolidato per i prossimi 8 mesi. L'obiettivo è massimizzare la definizione e l'armonia, sfruttando la tua base ossea esistente.
          </p>
        </div>

        {/* BOX 1: CONFRONTO FOTOGRAFICO VISO ATTUALE VS VISO DEFINITO */}
        <div className="p-4 rounded-3xl glass-card border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white">
                  Confronto Viso: Attuale vs Definito
                </h3>
                <p className="text-[10px] text-gray-400">Tocca una foto per ingrandirla a schermo intero</p>
              </div>
            </div>

            {/* Mode switch (Sovrapponi / 2 Affiancate / Swipe) */}
            <div className="flex bg-black/60 p-1 rounded-2xl border border-white/10 text-[10px] space-x-0.5">
              <button
                type="button"
                onClick={() => setFaceComparisonMode('overlay')}
                className={`px-2.5 py-1 rounded-xl font-bold transition-all flex items-center space-x-1 cursor-pointer ${
                  faceComparisonMode === 'overlay'
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black shadow-neon font-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Repeat className="w-3 h-3" />
                <span>Sovrapponi & Scambia</span>
              </button>
              <button
                type="button"
                onClick={() => setFaceComparisonMode('sideBySide')}
                className={`px-2 py-1 rounded-xl font-bold transition-all cursor-pointer ${
                  faceComparisonMode === 'sideBySide'
                    ? 'bg-cyan-500 text-black shadow-sm font-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                2 Affiancate
              </button>
              <button
                type="button"
                onClick={() => setFaceComparisonMode('swipe')}
                className={`px-2 py-1 rounded-xl font-bold transition-all cursor-pointer ${
                  faceComparisonMode === 'swipe'
                    ? 'bg-cyan-500 text-black shadow-sm font-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Swipe
              </button>
            </div>
          </div>

          {faceComparisonMode === 'overlay' ? (
            <div className="space-y-3 pt-1">
              {/* Status Header & Controls */}
              <div className="flex items-center justify-between bg-black/50 p-2.5 rounded-2xl border border-white/10">
                <div className="flex items-center space-x-2">
                  <span className={`w-3 h-3 rounded-full transition-all ${
                    activeFaceIndex === 0 
                      ? 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]' 
                      : 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                  }`} />
                  <div>
                    <span className="text-xs font-black text-white block">
                      {activeFaceIndex === 0 ? '1. Faccia Attuale' : '2. Faccia Definita'}
                    </span>
                    <span className="text-[10px] text-gray-400 block -mt-0.5">
                      {activeFaceIndex === 0 ? 'Base di partenza rilassata' : 'Target cesellato e simmetrico'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5">
                  {swapCount > 0 && (
                    <span className="text-[10px] text-cyan-300 font-extrabold bg-cyan-950/80 px-2 py-0.5 rounded-lg border border-cyan-500/30">
                      {swapCount} {swapCount === 1 ? 'scambio' : 'scambi'}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsAutoBlinking(!isAutoBlinking)}
                    className={`px-2.5 py-1 rounded-xl text-[10px] font-bold border transition-all flex items-center space-x-1 cursor-pointer ${
                      isAutoBlinking
                        ? 'bg-cyan-500 text-black border-cyan-400 shadow-neon animate-pulse font-extrabold'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                    }`}
                    title="Alterna automaticamente le foto ogni 0.7 secondi"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{isAutoBlinking ? 'Stop' : 'Auto Lampeggio'}</span>
                  </button>
                </div>
              </div>

              {/* The Overlaid Photo Frame - click directly to swap! */}
              <div
                onClick={handleToggleFace}
                className="group relative rounded-3xl overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-300 bg-black cursor-pointer aspect-[3/4] max-h-[420px] max-w-sm mx-auto shadow-2xl transition-all active:scale-[0.99] select-none"
                title="Tocca la foto per scambiarla all'istante"
              >
                {/* Base Image: Attuale */}
                <img
                  src={FACE_PHOTOS[0].url}
                  alt="Faccia Attuale"
                  className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none ${
                    activeFaceIndex === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Image: Definita */}
                <img
                  src={FACE_PHOTOS[1].url}
                  alt="Faccia Definita"
                  className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none ${
                    activeFaceIndex === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Top Floating Badge & Fullscreen Button */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
                  <span className={`text-[10px] font-black px-3 py-1.5 rounded-xl backdrop-blur-md border shadow-lg transition-all ${
                    activeFaceIndex === 0
                      ? 'bg-black/85 text-amber-300 border-amber-500/40'
                      : 'bg-cyan-950/90 text-cyan-300 border-cyan-400/50 shadow-neon'
                  }`}>
                    {activeFaceIndex === 0 ? '1/2 • Faccia Attuale' : '2/2 • Faccia Definita'}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenImg({
                        url: FACE_PHOTOS[activeFaceIndex].url,
                        title: FACE_PHOTOS[activeFaceIndex].title
                      });
                    }}
                    className="p-2 rounded-xl bg-black/70 hover:bg-black text-white hover:text-cyan-300 border border-white/20 backdrop-blur-md cursor-pointer transition-all active:scale-90"
                    title="Espandi a schermo intero"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Center hint when hovering or tapping */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3.5 py-1.5 rounded-2xl bg-black/85 backdrop-blur-md text-white border border-cyan-400/40 text-xs font-bold shadow-xl flex items-center gap-1.5">
                    <Repeat className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Tocca per scambiare</span>
                  </span>
                </div>

                {/* Bottom overlay bar with description and switch indicator */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 text-left z-20 pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-white">
                      {FACE_PHOTOS[activeFaceIndex].title}
                    </span>
                    <span className="text-[10px] text-cyan-300 font-bold">
                      {FACE_PHOTOS[activeFaceIndex].tag}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-300 line-clamp-1 mt-0.5">
                    {FACE_PHOTOS[activeFaceIndex].desc}
                  </p>
                </div>
              </div>

              {/* TASTO RICHIESTO DALL'UTENTE: PERMETTE DI SOVRAPPORRE / SCAMBIARE L'IMMAGINE */}
              <div className="space-y-2 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={handleToggleFace}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 hover:from-cyan-300 hover:to-emerald-300 text-black font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2.5 shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 transition-all cursor-pointer select-none"
                >
                  <Repeat className="w-5 h-5 text-black" />
                  <span>
                    ⚡ Clicca per Scambiare ({activeFaceIndex === 0 ? 'Passa a Faccia Definita' : 'Torna a Faccia Attuale'})
                  </span>
                </button>

                <p className="text-[11px] text-gray-400 text-center font-medium">
                  👆 Clicca a ripetizione il tasto o l'immagine per sovrapporle e vedere ogni minima differenza!
                </p>
              </div>
            </div>
          ) : faceComparisonMode === 'sideBySide' ? (
            <div className="grid grid-cols-2 gap-2.5">
              {/* Foto Attuale */}
              <div 
                onClick={() => setFullscreenImg({ url: FACE_PHOTOS[0].url, title: FACE_PHOTOS[0].title })}
                className="group relative rounded-2xl overflow-hidden border border-white/15 bg-black cursor-pointer aspect-[3/4]"
              >
                <img
                  src={FACE_PHOTOS[0].url}
                  alt="Viso Attuale"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2">
                  <span className="text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded-md border border-white/10 w-fit backdrop-blur-sm">
                    Faccia Attuale
                  </span>
                </div>
                <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Foto Definita */}
              <div 
                onClick={() => setFullscreenImg({ url: FACE_PHOTOS[1].url, title: FACE_PHOTOS[1].title })}
                className="group relative rounded-2xl overflow-hidden border border-cyan-400/30 bg-black cursor-pointer aspect-[3/4]"
              >
                <img
                  src={FACE_PHOTOS[1].url}
                  alt="Faccia Definita"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2">
                  <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-400/30 w-fit backdrop-blur-sm">
                    Faccia Definita
                  </span>
                </div>
                <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-2.5">
              {/* Quick tab switcher */}
              <div className="flex rounded-xl bg-black/40 p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveFaceIndex(0)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeFaceIndex === 0
                      ? 'bg-white/15 text-white shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  1. Faccia Attuale
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFaceIndex(1)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeFaceIndex === 1
                      ? 'bg-cyan-500 text-black shadow-sm font-extrabold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  2. Faccia Definita
                </button>
              </div>

              {/* Swipeable Photo Container */}
              <div
                className="relative rounded-2xl overflow-hidden border border-white/20 bg-black cursor-grab active:cursor-grabbing select-none touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {/* Horizontal carousel slide track */}
                <div 
                  className={`flex w-full ${isSwiping ? 'transition-none' : 'transition-transform duration-300 ease-out'}`}
                  style={{
                    transform: `translateX(calc(-${activeFaceIndex * 100}% + ${swipeOffset}px))`
                  }}
                >
                  {FACE_PHOTOS.map((photo, idx) => (
                    <div 
                      key={photo.id}
                      className="min-w-full w-full relative aspect-[3/4] max-h-[380px] bg-black flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover pointer-events-none"
                        referrerPolicy="no-referrer"
                      />

                      {/* Top floating badge & maximize button */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-auto">
                        <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg backdrop-blur-md border shadow-lg ${
                          idx === 0 
                            ? 'bg-black/80 text-white border-white/20' 
                            : 'bg-cyan-950/90 text-cyan-300 border-cyan-400/40'
                        }`}>
                          {photo.badge}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFullscreenImg({ url: photo.url, title: photo.title });
                          }}
                          className="p-1.5 rounded-lg bg-black/70 text-white hover:text-cyan-300 border border-white/20 backdrop-blur-md cursor-pointer transition-all active:scale-90"
                          title="Espandi a schermo intero"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Bottom subtitle overlay */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 text-left pointer-events-none">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white">{photo.title}</span>
                          <span className="text-[10px] text-cyan-300 font-bold">{photo.tag}</span>
                        </div>
                        <p className="text-[10px] text-gray-300 line-clamp-1 mt-0.5">{photo.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Left Floating Arrow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveFaceIndex(prev => (prev === 0 ? 1 : 0));
                  }}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md cursor-pointer z-10 active:scale-90 transition-all"
                  title="Foto Precedente (o swipe a destra)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Right Floating Arrow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveFaceIndex(prev => (prev === 1 ? 0 : 1));
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md cursor-pointer z-10 active:scale-90 transition-all"
                  title="Foto Successiva (o swipe a sinistra)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Swipe Hint & Dots pagination */}
              <div className="flex flex-col items-center gap-1.5 pt-0.5">
                <div className="flex items-center space-x-2">
                  {FACE_PHOTOS.map((p, i) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActiveFaceIndex(i)}
                      className={`transition-all rounded-full cursor-pointer ${
                        activeFaceIndex === i
                          ? 'w-6 h-2 bg-cyan-400 shadow-[0_0_8px_rgba(0,255,209,0.8)]'
                          : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                      }`}
                      title={p.title}
                    />
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 flex items-center justify-center gap-1 font-medium">
                  <span>👈</span>
                  <span>Scorri con il dito a destra o sinistra per cambiare foto</span>
                  <span>👉</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* PARTE 1: MAPPATURA ANATOMICA FACCIALE */}
        <div className="p-4 rounded-3xl glass-card border border-white/10 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
                PARTE 1: MAPPATURA ANATOMICA FACCIALE
              </h2>
              <p className="text-[10px] text-gray-400">(Dalla Tua Prospettiva)</p>
            </div>
          </div>

          <p className="text-xs text-gray-300 font-medium italic border-l-2 border-purple-400/50 pl-2.5 py-0.5">
            La differenza visiva tra i due lati è determinata dalla larghezza della base ossea del palato.
          </p>

          <div className="space-y-3 pt-1">
            {/* LATO DESTRO */}
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-300 uppercase tracking-wider">
                  LATO DESTRO (Ampio / Piatto / Squadrato)
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  Base Larga
                </span>
              </div>
              <ul className="text-xs text-gray-200 space-y-1.5 list-disc pl-4 font-normal">
                <li>
                  <strong className="text-white">Arcata Palatina:</strong> Ampia ed espansa. Offre una base ossea strutturale più larga.
                </li>
                <li>
                  <strong className="text-white">Comportamento dei Tessuti:</strong> La pelle e i muscoli si stendono su una superficie maggiore, creando una linea più dritta, tesa e squadrata.
                </li>
                <li>
                  <strong className="text-white">Meccanica Mandibolare:</strong> Rappresenta la base su cui si estende la larghezza naturale dell'angolo della mascella.
                </li>
                <li>
                  <strong className="text-emerald-300">Obiettivo Estetico:</strong> Far emergere l'angolo squadrato asciugando la copertura superficiale e dando un leggero stimolo muscolare extra.
                </li>
              </ul>
            </div>

            {/* LATO SINISTRO */}
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                  LATO SINISTRO (Arrotondato / Ristretto / Pieno)
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold">
                  Base Stretta
                </span>
              </div>
              <ul className="text-xs text-gray-200 space-y-1.5 list-disc pl-4 font-normal">
                <li>
                  <strong className="text-white">Arcata Palatina:</strong> Stretta e compattata. Lo spazio osseo a disposizione è ridotto.
                </li>
                <li>
                  <strong className="text-white">Comportamento dei Tessuti:</strong> I tessuti molli (grasso e ritenzione idrica) si raggruppano in meno spazio, creando l'effetto visivo pieno e arrotondato.
                </li>
                <li>
                  <strong className="text-white">Meccanica Mandibolare:</strong> È il lato verso cui la mandibola scivola automaticamente a riposo per permettere ai denti di incastrarsi.
                </li>
                <li>
                  <strong className="text-cyan-300">Obiettivo Estetico:</strong> Sgonfiare la superficie drenando i liquidi ed eliminando la massa grassa accumulata.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PARTE 2: MECCANICA DELLA DEVIAZIONE FUNZIONALE */}
        <div className="p-4 rounded-3xl glass-card border border-white/10 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300">
              <Activity className="w-4 h-4" />
            </div>
            <h2 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
              PARTE 2: MECCANICA DELLA DEVIAZIONE FUNZIONALE
            </h2>
          </div>

          <div className="space-y-2.5 text-xs text-gray-200 font-medium leading-relaxed">
            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-amber-300 font-bold block">Lo Scivolamento a Sinistra:</span>
              <p>
                Essendo il palato più stretto a sinistra, la mandibola fa un micro-scivolamento automatico verso quel lato per trovare un contatto stabile. Questo scivolamento "impacchetta" i tessuti molli della guancia sinistra, accentuando l'effetto rotondo.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-emerald-300 font-bold block">Il Riallineamento verso Destra:</span>
              <p>
                Quando sposti il mento leggermente a destra, riallinei la struttura con il lato del palato più largo.
              </p>
            </div>

            {/* Warning Box */}
            <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-200 space-y-1.5">
              <div className="flex items-center space-x-1.5 font-bold text-rose-300">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>⚠️ Nota Bene Fondamentale</span>
              </div>
              <p className="text-[11px] leading-relaxed text-rose-100">
                Non forzare mai questo posizionamento con i muscoli durante il giorno. Mantenere la mascella "spostata" artificialmente sottopone l'articolazione (ATM) a tensioni dannose. La correzione scheletrica avviene solo via ortodonzia, non via muscoli.
              </p>
            </div>
          </div>
        </div>

        {/* PARTE 3: SINTESI DELLA STRATEGIA NATURALE */}
        <div className="p-4 rounded-3xl glass-card border border-white/10 space-y-2.5">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
              PARTE 3: SINTESI DELLA STRATEGIA NATURALE
            </h2>
          </div>

          <p className="text-xs text-gray-300 font-medium leading-relaxed">
            Il piano funziona perché un unico lavoro generale produce risultati diversi e complementari sui due lati:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-xs font-bold text-emerald-300 block">Sul Lato Destro (Ampio):</span>
              <p className="text-xs text-gray-300">
                Crei un leggero volume muscolare con la masticazione modulata, mentre la definizione fa emergere la base ossea già larga, rendendo la linea affilata e squadrata.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-xs font-bold text-cyan-300 block">Sul Lato Sinistro (Ristretto):</span>
              <p className="text-xs text-gray-300">
                Non serve fare massa muscolare. Il deficit calorico e l'idratazione eliminano il grasso e i liquidi in eccesso, snellendo il profilo e appiattendo la guancia, avvicinandola all'aspetto del lato destro.
              </p>
            </div>
          </div>
        </div>

        {/* PARTE 4: PROTOCOLLO D'AZIONE (I Prossimi 8 Mesi) */}
        <div className="p-4 rounded-3xl glass-card border border-[#00FFD1]/30 space-y-3.5">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-xl bg-[#00FFD1]/20 text-[#00FFD1]">
              <Flame className="w-4 h-4" />
            </div>
            <h2 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
              PARTE 4: PROTOCOLLO D'AZIONE (I Prossimi 8 Mesi)
            </h2>
          </div>

          {/* 1. Definizione e Drenaggio */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-black">1</span>
              <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                Definizione e Drenaggio (Focus Principale)
              </span>
            </div>
            <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-5 font-normal">
              <li>Allenamento costante in palestra.</li>
              <li>Leggero deficit calorico per abbassare la percentuale di grasso corporeo generale.</li>
              <li>Bevi 2.5–3 litri d'acqua al giorno e controlla il sale per eliminare la ritenzione idrica, che gonfia soprattutto la guancia sinistra.</li>
            </ul>
          </div>

          {/* 2. Masticazione Modulata */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-black">2</span>
              <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                Masticazione Modulata (+15% a Destra)
              </span>
            </div>
            <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-5 font-normal">
              <li>Mastica i pasti normali distribuendo il cibo su entrambi i lati.</li>
              <li>Sposta circa il <strong>60% del lavoro sul lato destro</strong> (ampio) e il <strong>40% sul sinistro</strong> (un leggero extra di stimolo a destra).</li>
              <li>Se usi la gomma da masticare, limita la sessione a un massimo di 15 minuti totali al giorno.</li>
            </ul>
          </div>

          {/* 3. Postura Facciale e Cervicale */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-black">3</span>
              <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                Postura Facciale e Cervicale
              </span>
            </div>
            <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-5 font-normal">
              <li>Lingua sul palato a riposo (Mewing quotidiano).</li>
              <li>
                <strong>Thumbpulling Mewing (Espansione Palatina):</strong> Pressione manuale dei pollici sul palato duro (premolari/molari) verso l'esterno per stimolare la sutura e allargare l'arcata. 
                <a 
                  href="https://vm.tiktok.com/ZN8jNd7JF/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 ml-1 text-cyan-300 hover:text-cyan-200 underline font-semibold"
                >
                  <Play className="w-3 h-3 fill-cyan-300" /> Video TikTok: vm.tiktok.com/ZN8jNd7JF/ <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li><strong>2 serie da 25 Chin Tucks</strong> al giorno per allineare la testa e correggere la postura cervicale.</li>
              <li><strong>2 serie da 15 Neck Curls</strong> al giorno (flessioni del collo a corpo libero, sdraiato su una superficie piana) per rafforzare i muscoli anteriori del collo.</li>
              <li>Dormi a pancia in su per evitare compressioni asimmetriche sul cuscino.</li>
            </ul>
          </div>
        </div>

        {/* BOX 2: SCHEMI E TRACCIATI ANALISI ANATOMICA (LE ALTRE 2 FOTO) */}
        <div className="p-4 rounded-3xl glass-card border border-white/10 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-extrabold text-white">
                Schemi & Tracciati Analisi Anatomica
              </h3>
              <p className="text-[10px] text-gray-400">Analisi ortodontica, assi e tracciati di asimmetria</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {SCHEMA_IMAGES.map((schema, index) => (
              <div
                key={index}
                onClick={() => setFullscreenImg({ url: schema.url, title: schema.title })}
                className="group relative rounded-2xl overflow-hidden border border-white/15 bg-black cursor-pointer aspect-[3/4]"
              >
                <img
                  src={schema.url}
                  alt={schema.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-2">
                  <span className="text-[9px] font-bold text-white bg-purple-900/60 px-1.5 py-0.5 rounded border border-purple-500/30 w-fit backdrop-blur-sm line-clamp-1">
                    {schema.title}
                  </span>
                  <span className="text-[8px] text-gray-300 line-clamp-1 mt-0.5">
                    {schema.desc}
                  </span>
                </div>
                <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* RIQUADRO: POSSIBILE PERCORSO ORTODONTICO (INTERATTIVO / ESPANDIBILE) */}
        {/* ------------------------------------------------------------- */}
        <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-950/40 via-black/80 to-emerald-950/30 space-y-4">
          <button
            type="button"
            onClick={() => setIsOrtodonziaExpanded(!isOrtodonziaExpanded)}
            className="w-full text-left flex items-start justify-between cursor-pointer group"
          >
            <div className="space-y-1.5 flex-1 pr-2">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-neon">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-extrabold uppercase tracking-widest border border-cyan-400/30">
                  Cartella Clinica Specialistica
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                Possibile percorso ortodontico
              </h3>
              <p className="text-xs text-gray-300 font-medium leading-relaxed">
                Tocca qui per consultare la diagnosi gnatologica, il protocollo clinico con bite ed espansore e il confronto con il percorso naturale.
              </p>
            </div>

            <div className="p-2.5 rounded-2xl bg-white/5 group-hover:bg-cyan-500/20 text-cyan-300 border border-white/10 transition-all shrink-0 mt-1">
              {isOrtodonziaExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </div>
          </button>

          {/* Expanded Content */}
          {isOrtodonziaExpanded && (
            <div className="pt-3 border-t border-white/10 space-y-4 animate-in fade-in duration-300">
              {/* Header Reperto Clinico */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-cyan-500/30 space-y-1">
                <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider block">
                  REPERTO E NOTA CLINICA:
                </span>
                <h4 className="text-sm font-black text-white">
                  DEVIAZIONE FUNZIONALE E ASIMMETRIA FACCIALE
                </h4>
              </div>

              {/* Quadro Diagnostico */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-xs font-black text-cyan-300 uppercase tracking-wider block">
                  Quadro Diagnostico
                </span>
                <ul className="text-xs text-gray-200 space-y-2 font-medium">
                  <li className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <strong className="text-white block mb-0.5">Eziologia:</strong>
                    Asimmetria scheletrico-occlusale caratterizzata da discrepanza dell'arcata palatina (lato destro ampio ed espanso; lato sinistro ristretto e compresso).
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <strong className="text-white block mb-0.5">Meccanica della Deviazione:</strong>
                    Il palato stretto a sinistra genera un'interferenza occlusale. Per permettere il contatto tra i denti e la masticazione, la mandibola esegue un <em>lateral shift</em> (scivolamento funzionale) compensatorio verso sinistra.
                  </li>
                  <li className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <strong className="text-white block mb-0.5">Impatto sui Tessuti Molli:</strong>
                    Il rientro e la deviazione verso sinistra causano il compattamento dei tessuti molli (effetto guancia piena/arrotondata). Sul lato destro, la base ossea più ampia stende i tessuti facendoli aderire al profilo (effetto teso/squadrato).
                  </li>
                </ul>
              </div>

              {/* Controindicazioni per Correzioni Volontarie */}
              <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-2">
                <div className="flex items-center space-x-1.5 text-rose-300 font-bold text-xs">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>Controindicazioni per Correzioni Volontarie</span>
                </div>
                <p className="text-xs text-gray-200 font-medium">
                  Lo spostamento attivo e cosciente della mandibola verso destra durante la giornata è <strong>fortemente sconsigliato</strong>. Questa manovra forzata non modifica l'osso né l'arcata dentale, ma sottopone il condilo e l'articolazione temporo-mandibolare (ATM) a una leva innaturale, rischiando di generare:
                </p>
                <ul className="text-xs text-rose-200 space-y-1 list-disc pl-5 font-medium">
                  <li>Infiammazione e contratture della muscolatura masticatoria e cervicale.</li>
                  <li>Click, scatti o blocchi articolari in apertura/chiusura.</li>
                  <li>Usura irregolare delle superfici dentali.</li>
                </ul>
              </div>

              {/* Iter Terapeutico Clinico Specialistico */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-xs font-black text-cyan-300 uppercase tracking-wider block">
                  Iter Terapeutico Clinico Specialistico
                </span>
                <div className="space-y-2 text-xs text-gray-200">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <strong className="text-cyan-300 block mb-0.5">1. Bite Gnatologico Deprogrammante:</strong>
                    Placca in resina su misura che elimina i punti di incastro errati tra i denti. Azzera la memoria muscolare e permette alla mandibola di rilassarsi e riposizionarsi al centro in modo passivo.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <strong className="text-cyan-300 block mb-0.5">2. Espansione del Palato (RPE/MSE):</strong>
                    Trattamento ortodontico per allargare la base ossea dell'arcata superiore. Creando lo spazio fisico necessario, la mandibola si riallinea da sola al centro senza alcuno sforzo.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <strong className="text-cyan-300 block mb-0.5">3. Ortodonzia di Rifinitura:</strong>
                    Allineamento finale dei denti per stabilizzare la nuova chiusura centrata.
                  </div>
                </div>
              </div>

              {/* Integrazione Conservativa Non Invasiva */}
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                <span className="text-xs font-black text-emerald-300 uppercase tracking-wider block">
                  Integrazione Conservativa Non Invasiva
                </span>
                <p className="text-xs text-gray-200">
                  In assenza di un percorso ortodontico, il miglioramento visivo si ottiene tramite:
                </p>
                <ul className="text-xs text-gray-200 space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">Drenaggio Tessutale:</strong> Deficit calorico, idratazione costante (2.5-3L d'acqua) e controllo del sodio per svuotare l'accumulo di liquidi sulla guancia sinistra.
                  </li>
                  <li>
                    <strong className="text-white">Stimolazione Muscolare Modulata:</strong> Masticazione fisiologica gestita al 60% a destra e 40% a sinistra per dare volume al massetere piatto senza sovraccaricare la cerniera articolare.
                  </li>
                </ul>
              </div>

              {/* Tempistiche Box */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-300">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Tempistiche & Strategia Temporale</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-medium">
                  Un percorso ortodontico completo per adulti (bite, espansione e allineamento) richiede mediamente tra i <strong>18 e i 30 mesi</strong> (da 1,5 a 2,5 anni totali), poiché la risposta dell'osso maturo richiede tempi fisiologici graduali.
                </p>
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 text-xs font-semibold">
                  💡 Fare prima il percorso naturale per 12 mesi (fino a settembre) e poi valutare l'ortodonzia è una strategia eccellente e sensata.
                </div>
              </div>

              {/* TABELLA CONFRONTO TRA I DUE PERCORSI */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-black text-white uppercase tracking-wider block">
                  CONFRONTO TRA I DUE PERCORSI
                </span>
                
                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/60">
                  <table className="w-full text-left text-[11px] border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-2.5 font-bold text-gray-300">Caratteristica</th>
                        <th className="p-2.5 font-bold text-emerald-300">Percorso Naturale</th>
                        <th className="p-2.5 font-bold text-cyan-300">Percorso Ortodontico</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-gray-300">
                      <tr>
                        <td className="p-2.5 font-bold text-white">Tempistiche</td>
                        <td className="p-2.5 text-emerald-200">8-12 mesi</td>
                        <td className="p-2.5 text-cyan-200">18-30 mesi</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-white">Invasività</td>
                        <td className="p-2.5 text-emerald-200">Zero (stile di vita & palestra)</td>
                        <td className="p-2.5 text-cyan-200">Medio-alto (dispositivi e visite)</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-white">Su cosa agisce</td>
                        <td className="p-2.5 text-emerald-200">Tessuto adiposo, liquidi, muscolo</td>
                        <td className="p-2.5 text-cyan-200">Struttura ossea palato, denti, occlusione</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-white">Risultato Finale</td>
                        <td className="p-2.5 text-emerald-200">Viso asciutto, definito e affilato naturale</td>
                        <td className="p-2.5 text-cyan-200">Spostamento reale osso, centraggio mandibola</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* PERCHÉ TI CONVIENE FARE PRIMA IL NATURALE */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-xs font-black text-cyan-300 uppercase tracking-wider block">
                  PERCHÉ TI CONVIENE FARE PRIMA IL NATURALE
                </span>
                
                <div className="space-y-2 text-xs text-gray-200">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Vedi il tuo vero potenziale senza spendere un euro:</strong>
                      <p className="text-gray-300 mt-0.5">
                        Riducendo il grasso e drenando i liquidi in questi 12 mesi, vedrai esattamente dove arriva il tuo corpo da solo. Spesso, sgonfiando la superficie, l'asimmetria visiva si riduce così tanto che l'impatto estetico finale potrebbe già soddisfarti appieno.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Zero rischi e solo benefici di salute:</strong>
                      <p className="text-gray-300 mt-0.5">
                        L'allenamento in palestra, la postura corretta e la buona idratazione sono abitudini che ti faranno stare meglio a prescindere dal viso.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Nessun conflitto tra i due metodi:</strong>
                      <p className="text-gray-300 mt-0.5">
                        Tutto quello che fai oggi non ostacola in alcun modo un eventuale apparecchio domani. Se a settembre del prossimo anno deciderai di andare dallo gnatologo, ti presenterai con un corpo già in forma e una postura nettamente migliore.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-white/10 text-xs text-cyan-200 font-medium mt-2">
                  ✨ <strong>Conclusioni:</strong> Puntare al 100% sul percorso naturale per un anno ti permette di capire se hai davvero bisogno dell'ortodonzia o se la versione "asciutta" del tuo viso ti soddisfa già.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW: LISTA NOTE (HOME DELLE NOTE CON QUADRATINO ASIMMETRIA)
  // -------------------------------------------------------------
  return (
    <div className="space-y-4 pb-24 pt-1 animate-in fade-in duration-200">
      {renderFullscreenModal()}

      {/* Header & Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-black text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-300" />
            <span>Note & Percorso</span>
          </h1>
          <p className="text-xs text-gray-400">Diario, analisi e appunti per il tuo cammino</p>
        </div>

        <button
          type="button"
          onClick={() => setIsCreatingNote(true)}
          className="flex items-center space-x-1.5 py-2 px-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs shadow-neon transition-all active:scale-95 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Nuova Nota</span>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* IL QUADRATINO CHIAVE: "LA MIA ASIMMETRIA" (RICHIESTA SPECIFICA) */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block pl-1">
          Nota Guida Fondamentale
        </span>

        <div
          onClick={() => setActiveView('asimmetria')}
          className="p-5 rounded-3xl glass-card border-2 border-cyan-400/70 hover:border-cyan-400 bg-gradient-to-br from-cyan-500/20 via-black/85 to-purple-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[10px] font-black uppercase tracking-wider border border-cyan-400/40 shadow-sm">
                  ★ Pinned Master Note
                </span>
                <span className="text-[10px] text-gray-400 font-semibold">8 Mesi Piano</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight">
                La mia asimmetria
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                Analisi della base ossea palatina, deviazione funzionale, piano naturale 60/40 masticazione, confronto foto attuali vs definite e iter ortodontico specialistico.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-cyan-500/20 group-hover:bg-cyan-500 text-cyan-300 group-hover:text-black border border-cyan-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-cyan-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire il piano completo</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">4 Parti + Foto & Clinica</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CARD: "MENTO, POSTURA E OCCHI" (RICHIESTA SPECIFICA UTENTE) */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block pl-1">
          Nuova Nota Personale • Biomeccanica & Foto
        </span>

        <div
          onClick={() => setActiveView('postura_occhi')}
          className="p-5 rounded-3xl glass-card border-2 border-amber-400/70 hover:border-amber-400 bg-gradient-to-br from-amber-500/20 via-black/85 to-cyan-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-black uppercase tracking-wider border border-amber-400/40 shadow-sm">
                  ★ Note Scritte Da Me
                </span>
                <span className="text-[10px] text-gray-400 font-semibold">Foto & Sguardo</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors uppercase tracking-tight">
                Mento, postura e occhi
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                Confronto foto postura normale vs corretta, visibilità sclera e palpebre (hooded eyes), retroposizione del capo (chin tuck), perché l'armonia batte la tensione e come la postura eretta espande la presenza del corpo.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-amber-500/20 group-hover:bg-amber-500 text-amber-300 group-hover:text-black border border-amber-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-amber-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire le note & confronto foto</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">Confronto Foto + Memorandum</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SEZIONE NOTE PERSONALI AGGIUNTE DALL'UTENTE */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between pl-1">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Il Tuo Diario del Cammino ({userNotes.length})
          </span>
          <span className="text-[10px] text-gray-500">Salvate localmente</span>
        </div>

        {userNotes.length === 0 ? (
          <div className="p-6 rounded-3xl glass-card border border-white/10 text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-gray-400">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-white">Nessun'altra nota creata</h3>
            <p className="text-xs text-gray-400 max-w-xs mx-auto">
              Qui compariranno tutte le note che scriverai pian piano durante il tuo percorso. Tocca "+ Nuova Nota" in alto per iniziare.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {userNotes.map((note) => (
              <div
                key={note.id}
                onClick={() => setSelectedNote(note)}
                className="p-4 rounded-2xl glass-card border border-white/10 hover:border-white/20 transition-all cursor-pointer group flex items-start justify-between"
              >
                <div className="space-y-1 flex-1 pr-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-cyan-300 border border-white/5 uppercase">
                      {note.category}
                    </span>
                    <span className="text-[10px] text-gray-500 font-medium">{note.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {note.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 font-medium">
                    {note.content}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleDeleteNote(note.id, e)}
                  title="Elimina nota"
                  className="p-2 rounded-xl text-gray-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all shrink-0 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL NUOVA NOTA */}
      {isCreatingNote && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121824] border border-white/15 rounded-3xl p-5 w-full max-w-md space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-cyan-300" />
                <span>Crea Nuova Nota</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsCreatingNote(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateNote} className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block mb-1">
                  Titolo Nota
                </label>
                <input
                  type="text"
                  required
                  placeholder="Es: Checkpoint Mese 1, Masticazione..."
                  value={newNoteTitle}
                  onChange={(e) => setNewNoteTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-black/50 border border-white/15 text-white text-xs placeholder:text-gray-600 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block mb-1">
                  Categoria
                </label>
                <select
                  value={newNoteCategory}
                  onChange={(e) => setNewNoteCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-black/50 border border-white/15 text-white text-xs focus:border-cyan-400 focus:outline-none"
                >
                  <option value="percorso">Percorso Generale</option>
                  <option value="asimmetria">Asimmetria & Morso</option>
                  <option value="allenamento">Allenamento & Postura</option>
                  <option value="dieta">Dieta & Idratazione</option>
                  <option value="mentale">Mindset & Riflessioni</option>
                  <option value="generale">Altro</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-300 uppercase tracking-wider block mb-1">
                  Testo / Contenuto
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Scrivi qui le tue riflessioni, misurazioni, sensazioni o passaggi del cammino..."
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-black/50 border border-white/15 text-white text-xs placeholder:text-gray-600 focus:border-cyan-400 focus:outline-none resize-none leading-relaxed"
                />
              </div>

              <div className="flex space-x-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsCreatingNote(false)}
                  className="flex-1 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-gray-300 text-xs font-bold"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs shadow-neon"
                >
                  Salva Nota
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL DETTAGLIO NOTA PERSONALE */}
      {selectedNote && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121824] border border-white/15 rounded-3xl p-5 w-full max-w-md space-y-4 shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-start justify-between border-b border-white/10 pb-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase">
                  {selectedNote.category}
                </span>
                <h3 className="text-base font-black text-white">
                  {selectedNote.title}
                </h3>
                <span className="text-[10px] text-gray-500 font-medium block">{selectedNote.date}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNote(null)}
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-1 text-xs text-gray-200 whitespace-pre-wrap leading-relaxed">
              {selectedNote.content}
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedNote(null)}
                className="py-2 px-5 rounded-2xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
