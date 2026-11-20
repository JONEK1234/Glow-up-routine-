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
  Zap,
  Moon,
  Bed,
  Scissors,
  Droplets,
  Dumbbell,
  Gift,
  Wind,
  Search,
  ShieldCheck,
  BookOpen,
  Compass,
  Heart
} from 'lucide-react';
import { UserNote } from '../../types';
import { storageHelper } from '../../utils/storage';
import { MentoPosturaOcchiView } from './MentoPosturaOcchiView';
import { SonnoPosizioniView } from './SonnoPosizioniView';
import { PeliIncarnitiVisoView, PeliIncarnitiTabId } from './PeliIncarnitiVisoView';
import { GiorniShampooTextureView } from './GiorniShampooTextureView';
import { PalestraPerditaGrassoView } from './PalestraPerditaGrassoView';
import { CoseDaComprareRegaliView } from './CoseDaComprareRegaliView';
import { MasticazioneMasseteriView } from './MasticazioneMasseteriView';
import { VisoGrassoTaglioSleeperView } from './VisoGrassoTaglioSleeperView';
import { CapelliTextureFormaPiegaLisciaView } from './CapelliTextureFormaPiegaLisciaView';
import { CapelliMossiTexturedMessyMulletView } from './CapelliMossiTexturedMessyMulletView';
import { DiabeteGlicemiaPalestraView } from './DiabeteGlicemiaPalestraView';
import { PrevenzioneEtaArticolazioniView } from './PrevenzioneEtaArticolazioniView';
import { scrollToTop } from '../../utils/scrollHelper';
import { NoteSectionViewId, searchNotesIndex } from '../../utils/notesSearchIndex';

const FACE_PHOTOS = [
  {
    id: 'attuale',
    title: 'Viso Attuale',
    badge: '1/3 • Faccia Attuale',
    tag: 'Base di Partenza',
    desc: 'Viso iniziale: arcata destra espansa, arcata sinistra compressa',
    url: 'https://i.ibb.co/3VDsH13/20260911-184140.jpg'
  },
  {
    id: 'definita',
    title: 'Viso Definito',
    badge: '2/3 • Faccia Definita',
    tag: 'Modello Target',
    desc: 'Modello target: zigomi e masseteri cesellati, simmetria ed espansione',
    url: 'https://i.ibb.co/nspkJD8t/1789145825747.jpg'
  },
  {
    id: 'differenze',
    title: 'Nota le Differenze',
    badge: '3/3 • Nota le Differenze',
    tag: 'Foto Aggiuntiva',
    desc: 'Confronto visivo diretto e analisi delle differenze di asimmetria',
    url: 'https://i.ibb.co/XkXQvWwh/Picsart-26-10-03-19-38-11-847.jpg'
  }
];

const FACE_IMAGES = {
  attuale: FACE_PHOTOS[0].url,
  definita: FACE_PHOTOS[1].url,
  differenze: FACE_PHOTOS[2].url
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

const UPDATED_FACE_PHOTOS = [
  {
    id: 'upd_1475',
    title: '1. Frontale Neutro (Occhiali)',
    tag: 'Frontale',
    url: '/assets/aistudio/IMG_1475_24ce9047.jpeg'
  },
  {
    id: 'upd_1476',
    title: '2. 3/4 Sinistro (Occhiali)',
    tag: '3/4 Sx',
    url: '/assets/aistudio/IMG_1476_04e0ed3b.jpeg'
  },
  {
    id: 'upd_1477',
    title: '3. 3/4 Destro (Occhiali)',
    tag: '3/4 Dx',
    url: '/assets/aistudio/IMG_1477_95f1e0ec.jpeg'
  },
  {
    id: 'upd_1478',
    title: '4. Frontale Ravvicinato',
    tag: 'Close-Up',
    url: '/assets/aistudio/IMG_1478_77e46c09.jpeg'
  },
  {
    id: 'upd_1480',
    title: '5. Frontale Basso',
    tag: 'Mandibola',
    url: '/assets/aistudio/IMG_1480_c0d8f909.jpeg'
  },
  {
    id: 'upd_1482',
    title: '6. Profilo / 3/4 Sinistro',
    tag: 'Lato Sx',
    url: '/assets/aistudio/IMG_1482_2f5c9f09.jpeg'
  },
  {
    id: 'upd_1483',
    title: '7. Profilo / 3/4 Destro',
    tag: 'Lato Dx',
    url: '/assets/aistudio/IMG_1483_0dfdd5d9.jpeg'
  },
  {
    id: 'upd_1484',
    title: '8. Frontale Senza Occhiali',
    tag: 'No Occhiali',
    url: '/assets/aistudio/IMG_1484_898ba3db.jpeg'
  },
  {
    id: 'upd_1485',
    title: '9. 3/4 Sinistro Senza Occhiali',
    tag: 'Sx Pulito',
    url: '/assets/aistudio/IMG_1485_c016382d.jpeg'
  },
  {
    id: 'upd_1486',
    title: '10. 3/4 Destro Senza Occhiali',
    tag: 'Dx Pulito',
    url: '/assets/aistudio/IMG_1486_c7b47c7f.jpeg'
  },
  {
    id: 'upd_1487',
    title: '11. Allineamento Collo & Postura',
    tag: 'Postura',
    url: '/assets/aistudio/IMG_1487_61a7a36d.jpeg'
  },
  {
    id: 'upd_1488',
    title: '12. Contorni Laterali Mandibola',
    tag: 'Contorni',
    url: '/assets/aistudio/IMG_1488_c93f38bd.jpeg'
  },
  {
    id: 'upd_1489',
    title: '13. Frontale Luce Naturale',
    tag: 'Finale',
    url: '/assets/aistudio/IMG_1489_1ce6a31f.jpeg'
  }
];

export const NoteTab: React.FC = () => {
  const [activeView, setActiveView] = useState<'list' | 'bussola_mente' | 'studia_oggi' | 'asimmetria' | 'ortodonzia' | 'postura_occhi' | 'sonno_posizioni' | 'peli_incarniti' | 'shampoo_texture' | 'palestra_grasso' | 'regali_natale' | 'asimmetria_masticazione' | 'asimmetria_grasso_viso' | 'capelli_texture' | 'capelli_mullet' | 'diabete_glicemia' | 'prevenzione_eta'>('list');
  const [userNotes, setUserNotes] = useState<UserNote[]>(() => storageHelper.getUserNotes());
  const [fullscreenImg, setFullscreenImg] = useState<{ url: string; title: string } | null>(null);
  const [faceComparisonMode, setFaceComparisonMode] = useState<'overlay' | 'sideBySide' | 'swipe'>('overlay');
  const [activeFaceIndex, setActiveFaceIndex] = useState<number>(0);
  const [swapCount, setSwapCount] = useState<number>(0);
  const [isAutoBlinking, setIsAutoBlinking] = useState<boolean>(false);
  const [swipeOffset, setSwipeOffset] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [isOrtodonziaExpanded, setIsOrtodonziaExpanded] = useState(false);
  const [initialSubTab, setInitialSubTab] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSearchSection, setSelectedSearchSection] = useState<NoteSectionViewId | 'all'>('all');
  const [studyTodayFilter, setStudyTodayFilter] = useState<'tutte' | 'mente_viso' | 'diabete' | 'palestra_ossa'>('tutte');

  // Helper unificato per cambiare vista resettando istantaneamente lo scroll in cima
  const handleOpenView = (view: typeof activeView, subTab?: string) => {
    scrollToTop();
    setInitialSubTab(subTab);
    setActiveView(view);
  };

  // Scroll sempre all'inizio (in cima) quando si apre o si cambia qualsiasi nota
  useEffect(() => {
    scrollToTop();
  }, [activeView]);

  // Quick swap handler for overlay comparison
  const handleToggleFace = () => {
    setActiveFaceIndex(prev => (prev + 1) % FACE_PHOTOS.length);
    setSwapCount(c => c + 1);
  };

  // Optional automatic blinking timer
  useEffect(() => {
    let interval: any = null;
    if (isAutoBlinking) {
      interval = setInterval(() => {
        setActiveFaceIndex(prev => (prev + 1) % FACE_PHOTOS.length);
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
    const currentUpdatedIndex = UPDATED_FACE_PHOTOS.findIndex(p => p.url === fullscreenImg.url);
    const isUpdatedPhoto = currentUpdatedIndex !== -1;

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

        {/* Previous & Next arrows for face comparison photos OR updated gallery photos */}
        {(isFaceComparisonPhoto || isUpdatedPhoto) && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (isFaceComparisonPhoto) {
                  const newIdx = currentFaceIndex === 0 ? 1 : 0;
                  setFullscreenImg({ url: FACE_PHOTOS[newIdx].url, title: FACE_PHOTOS[newIdx].title });
                  setActiveFaceIndex(newIdx);
                } else {
                  const newIdx =
                    currentUpdatedIndex === 0
                      ? UPDATED_FACE_PHOTOS.length - 1
                      : currentUpdatedIndex - 1;
                  setFullscreenImg({
                    url: UPDATED_FACE_PHOTOS[newIdx].url,
                    title: `${UPDATED_FACE_PHOTOS[newIdx].title} (${newIdx + 1}/${UPDATED_FACE_PHOTOS.length})`
                  });
                }
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
                if (isFaceComparisonPhoto) {
                  const newIdx = currentFaceIndex === 1 ? 0 : 1;
                  setFullscreenImg({ url: FACE_PHOTOS[newIdx].url, title: FACE_PHOTOS[newIdx].title });
                  setActiveFaceIndex(newIdx);
                } else {
                  const newIdx =
                    currentUpdatedIndex === UPDATED_FACE_PHOTOS.length - 1
                      ? 0
                      : currentUpdatedIndex + 1;
                  setFullscreenImg({
                    url: UPDATED_FACE_PHOTOS[newIdx].url,
                    title: `${UPDATED_FACE_PHOTOS[newIdx].title} (${newIdx + 1}/${UPDATED_FACE_PHOTOS.length})`
                  });
                }
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
    return <MentoPosturaOcchiView onBack={() => handleOpenView('list')} />;
  }

  // -------------------------------------------------------------
  // VIEW: SONNO E POSIZIONI (RICHIESTA SPECIFICA UTENTE)
  // -------------------------------------------------------------
  if (activeView === 'sonno_posizioni') {
    return <SonnoPosizioniView onBack={() => handleOpenView('list')} initialTab={initialSubTab} />;
  }

  // -------------------------------------------------------------
  // VIEW: PELI INCARNITI VISO (RICHIESTA SPECIFICA UTENTE)
  // -------------------------------------------------------------
  if (activeView === 'peli_incarniti') {
    return (
      <PeliIncarnitiVisoView
        onBack={() => handleOpenView('list')}
        initialTab={initialSubTab as PeliIncarnitiTabId | undefined}
      />
    );
  }

  // -------------------------------------------------------------
  // VIEW: GIORNI DI SHAMPOO E GIORNI TEXTURE (RICHIESTA SPECIFICA UTENTE)
  // -------------------------------------------------------------
  if (activeView === 'shampoo_texture') {
    return <GiorniShampooTextureView onBack={() => handleOpenView('list')} initialTab={initialSubTab} />;
  }

  // -------------------------------------------------------------
  // VIEW: PALESTRA E ORGANIZZAZIONE PER PERDERE GRASSO
  // -------------------------------------------------------------
  if (activeView === 'palestra_grasso') {
    return <PalestraPerditaGrassoView onBack={() => handleOpenView('list')} initialTab={initialSubTab} />;
  }

  // -------------------------------------------------------------
  // VIEW: COSE DA COMPRARE (I MIEI REGALI DI NATALE)
  // -------------------------------------------------------------
  if (activeView === 'regali_natale') {
    return <CoseDaComprareRegaliView onBack={() => handleOpenView('list')} initialTab={initialSubTab} />;
  }

  // -------------------------------------------------------------
  // VIEW: CAPELLI TEXTURE FORMA PIEGA LISCIA
  // -------------------------------------------------------------
  if (activeView === 'capelli_texture') {
    return <CapelliTextureFormaPiegaLisciaView onBack={() => handleOpenView('list')} initialTab={initialSubTab} />;
  }

  // -------------------------------------------------------------
  // VIEW: CAPELLI MOSSI TEXTURED MESSY MULLET
  // -------------------------------------------------------------
  if (activeView === 'capelli_mullet') {
    return <CapelliMossiTexturedMessyMulletView onBack={() => handleOpenView('list')} initialTab={initialSubTab} />;
  }

  // -------------------------------------------------------------
  // VIEW: DIABETE GLICEMIA PALESTRA
  // -------------------------------------------------------------
  if (activeView === 'diabete_glicemia') {
    return <DiabeteGlicemiaPalestraView onBack={() => handleOpenView('list')} initialTab={initialSubTab} />;
  }

  // -------------------------------------------------------------
  // VIEW: PREVENZIONE ETÀ E ARTICOLAZIONI
  // -------------------------------------------------------------
  if (activeView === 'prevenzione_eta') {
    return <PrevenzioneEtaArticolazioniView onBack={() => handleOpenView('list')} initialTab={initialSubTab} />;
  }

  // -------------------------------------------------------------
  // VIEW: INFORMAZIONI MASTICAZIONE & MASSETERI (SEZIONE DEDICATA)
  // -------------------------------------------------------------
  if (activeView === 'asimmetria_masticazione') {
    return <MasticazioneMasseteriView onBack={() => handleOpenView('asimmetria')} initialTab={initialSubTab} />;
  }

  // -------------------------------------------------------------
  // VIEW: GRASSO FACCIALE, TAGLIO CORTO & FACCIA FINE (NUOVA SEZIONE)
  // -------------------------------------------------------------
  if (activeView === 'asimmetria_grasso_viso') {
    return <VisoGrassoTaglioSleeperView onBack={() => handleOpenView('asimmetria')} initialTab={initialSubTab} />;
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
            onClick={() => handleOpenView('list')}
            className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tutte le Note</span>
          </button>
          
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => handleOpenView('asimmetria_grasso_viso')}
              className="flex items-center space-x-1 py-1.5 px-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 text-[11px] font-extrabold shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all cursor-pointer active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Grasso Viso &amp; Taglio Corto</span>
            </button>

            <button
              type="button"
              onClick={() => handleOpenView('asimmetria_masticazione')}
              className="flex items-center space-x-1 py-1.5 px-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 text-[11px] font-extrabold shadow-[0_0_12px_rgba(245,158,11,0.2)] transition-all cursor-pointer active:scale-95"
            >
              <Info className="w-3.5 h-3.5 text-amber-400" />
              <span>Info Masticazione</span>
            </button>
          </div>
        </div>

        {/* Master Note Title Card */}
        <div className="p-4 sm:p-5 rounded-3xl glass-card border border-[#00FFD1]/30 relative overflow-hidden space-y-2.5">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#00FFD1]/10 text-[#00FFD1] text-[10px] font-extrabold uppercase tracking-widest border border-[#00FFD1]/30">
              Nota di Riferimento Aggiornata
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">Percorso Naturale</span>
          </div>

          <h1 className="text-base sm:text-lg font-black text-white leading-snug">
            ANALISI E PIANO INTEGRATO PER LA SIMMETRIA FACCIALE (STRATEGIA INVERTITA)
          </h1>

          <p className="text-xs text-gray-300 leading-relaxed font-medium">
            Questa nota riassume la tua struttura anatomica specifica, la diagnosi al tatto dei muscoli masseteri e il piano naturale aggiornato: la parte destra ha bisogno solo di dimagrimento per definirsi, mentre la parte sinistra (fina) deve essere stimolata con la masticazione per pareggiare lo spessore muscolare ed evitare che il dimagrimento accentui l'asimmetria.
          </p>
        </div>

        {/* Banner Link 1: NUOVA SEZIONE GRASSO VISO, TAGLIO CORTO & FACCIA FINE (IN ALTO, ZERO SCROLL) */}
        <div
          onClick={() => handleOpenView('asimmetria_grasso_viso')}
          className="p-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-black/85 to-emerald-500/15 border-2 border-cyan-400/60 hover:border-cyan-300 cursor-pointer transition-all flex items-center justify-between group shadow-[0_0_20px_rgba(6,182,212,0.18)]"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 group-hover:scale-105 transition-transform shrink-0">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Nuova Nota nella Sezione (17–19 Nov)
              </span>
              <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-cyan-200 transition-colors">
                Grasso Facciale (Pinch Test 1,75m / 73kg), Taglio Corto &amp; Strategia &quot;Faccia Fine&quot;
              </h4>
              <p className="text-[11px] text-gray-400 line-clamp-1">
                Alfa-2 vs Beta-2, illusione low-fade, ~1.600 kcal + 10.000 passi NEAT &amp; Sleeper Build Giugno.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 text-xs font-black px-3 py-2 rounded-xl bg-cyan-400 text-black group-hover:bg-cyan-300 transition-all shrink-0 ml-2">
            <span>Apri Nota</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Banner Link 2 a Sezione Masticazione */}
        <div
          onClick={() => handleOpenView('asimmetria_masticazione')}
          className="p-4 rounded-3xl bg-gradient-to-r from-amber-500/15 via-black/80 to-purple-500/15 border-2 border-amber-500/40 hover:border-amber-400 cursor-pointer transition-all flex items-center justify-between group shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
        >
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30 group-hover:scale-105 transition-transform shrink-0">
              <Info className="w-5 h-5 text-amber-400" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Sezione Dedicata Masticazione
              </span>
              <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-amber-200 transition-colors">
                Dieta Moderna, Gomme Dure per Definizione &amp; Allenamento Massetere Sinistro
              </h4>
              <p className="text-[11px] text-gray-400 line-clamp-1">
                Fisica delle gomme, protocollo da 10 min (65% sx), spiegazione al tatto e verdetto visivo.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 text-xs font-black px-3 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 group-hover:bg-amber-500 group-hover:text-black transition-all shrink-0 ml-2">
            <span>Apri Sezione</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* BOX 1: CONFRONTO FOTOGRAFICO VISO ATTUALE VS VISO DEFINITO */}
        <div className="p-4 rounded-3xl glass-card border border-white/10 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
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

            {/* Mode switch (Sovrapponi / Affiancate / Swipe) */}
            <div className="flex bg-black/60 p-1 rounded-2xl border border-white/10 text-[10px] space-x-0.5 self-start sm:self-auto">
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
                <span>Sovrapponi</span>
              </button>
              <button
                type="button"
                onClick={() => setFaceComparisonMode('sideBySide')}
                className={`px-2.5 py-1 rounded-xl font-bold transition-all cursor-pointer ${
                  faceComparisonMode === 'sideBySide'
                    ? 'bg-cyan-500 text-black shadow-sm font-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Affiancate
              </button>
              <button
                type="button"
                onClick={() => setFaceComparisonMode('swipe')}
                className={`px-2.5 py-1 rounded-xl font-bold transition-all cursor-pointer ${
                  faceComparisonMode === 'swipe'
                    ? 'bg-cyan-500 text-black shadow-sm font-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Swipe
              </button>
            </div>
          </div>

          {/* TASTO RICHIESTO: "NOTA LE DIFFERENZE" (APRE LA FOTO AGGIUNTIVA) */}
          <div
            onClick={() => {
              setActiveFaceIndex(2);
              setFullscreenImg({
                url: FACE_PHOTOS[2].url,
                title: 'Nota le Differenze • Foto Analisi Asimmetria'
              });
            }}
            className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-teal-950/50 to-black/85 border-2 border-emerald-400/70 hover:border-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-between cursor-pointer group active:scale-[0.98]"
          >
            <div className="flex items-center space-x-3">
              <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                <Sparkles className="w-4 h-4 text-emerald-400 group-hover:text-black" />
              </span>
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                  Foto Aggiuntiva Ingrandibile
                </span>
                <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-emerald-200 transition-colors">
                  Tasto: Nota le differenze
                </h4>
              </div>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-400 text-black font-black text-xs shadow-neon group-hover:scale-105 transition-transform">
              <Eye className="w-3.5 h-3.5" />
              <span>Apri Foto</span>
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
                      : activeFaceIndex === 1
                      ? 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                      : 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]'
                  }`} />
                  <div>
                    <span className="text-xs font-black text-white block">
                      {FACE_PHOTOS[activeFaceIndex].title}
                    </span>
                    <span className="text-[10px] text-gray-400 block -mt-0.5">
                      {FACE_PHOTOS[activeFaceIndex].desc}
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

                {/* 3rd Image: Nota le Differenze */}
                <img
                  src={FACE_PHOTOS[2].url}
                  alt="Nota le Differenze"
                  className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none ${
                    activeFaceIndex === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Top Floating Badge & Fullscreen Button */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
                  <span className={`text-[10px] font-black px-3 py-1.5 rounded-xl backdrop-blur-md border shadow-lg transition-all ${
                    activeFaceIndex === 0
                      ? 'bg-black/85 text-amber-300 border-amber-500/40'
                      : activeFaceIndex === 1
                      ? 'bg-cyan-950/90 text-cyan-300 border-cyan-400/50 shadow-neon'
                      : 'bg-emerald-950/90 text-emerald-300 border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  }`}>
                    {FACE_PHOTOS[activeFaceIndex].badge}
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
                    <span>Tocca per scambiare ({activeFaceIndex + 1}/3)</span>
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

              {/* TASTI DI SCAMBIO & NOTA LE DIFFERENZE */}
              <div className="space-y-2 max-w-sm mx-auto">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleToggleFace}
                    className="py-3 px-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 hover:from-cyan-300 hover:to-emerald-300 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95 transition-all cursor-pointer select-none"
                  >
                    <Repeat className="w-4 h-4 text-black shrink-0" />
                    <span>Scambia ({activeFaceIndex === 0 ? '1➔2' : activeFaceIndex === 1 ? '2➔3' : '3➔1'})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveFaceIndex(2);
                      setSwapCount(c => c + 1);
                    }}
                    className={`py-3 px-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all active:scale-95 cursor-pointer select-none ${
                      activeFaceIndex === 2
                        ? 'bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)] font-extrabold ring-2 ring-emerald-300'
                        : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 shadow-sm'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Nota le differenze</span>
                  </button>
                </div>

                {/* 3 mini tabs per selezionare direttamente 1, 2 o 3 */}
                <div className="grid grid-cols-3 gap-1.5 bg-black/60 p-1.5 rounded-2xl border border-white/10 text-[10px]">
                  <button
                    type="button"
                    onClick={() => setActiveFaceIndex(0)}
                    className={`py-1.5 px-1.5 rounded-xl font-bold transition-all text-center cursor-pointer ${
                      activeFaceIndex === 0
                        ? 'bg-amber-400 text-black font-black shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    1. Attuale
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveFaceIndex(1)}
                    className={`py-1.5 px-1.5 rounded-xl font-bold transition-all text-center cursor-pointer ${
                      activeFaceIndex === 1
                        ? 'bg-cyan-400 text-black font-black shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    2. Definita
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveFaceIndex(2)}
                    className={`py-1.5 px-1.5 rounded-xl font-bold transition-all text-center cursor-pointer flex items-center justify-center gap-1 ${
                      activeFaceIndex === 2
                        ? 'bg-emerald-400 text-black font-black shadow-sm'
                        : 'text-emerald-300 hover:text-white'
                    }`}
                  >
                    <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                    3. Differenze
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 text-center font-medium">
                  👆 Tocca il tasto <strong>"Nota le differenze"</strong> o l'immagine per confrontare i dettagli!
                </p>
              </div>
            </div>
          ) : faceComparisonMode === 'sideBySide' ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {FACE_PHOTOS.map((photo, pIdx) => (
                <div 
                  key={photo.id}
                  onClick={() => setFullscreenImg({ url: photo.url, title: photo.title })}
                  className={`group relative rounded-2xl overflow-hidden border bg-black cursor-pointer aspect-[3/4] transition-all ${
                    pIdx === 2 
                      ? 'border-emerald-400/60 shadow-[0_0_15px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400/40' 
                      : 'border-white/15'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border w-fit backdrop-blur-sm ${
                      pIdx === 0
                        ? 'text-white bg-black/60 border-white/10'
                        : pIdx === 1
                        ? 'text-cyan-300 bg-cyan-950/80 border-cyan-400/30'
                        : 'text-emerald-300 bg-emerald-950/80 border-emerald-400/40 font-black'
                    }`}>
                      {photo.title}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2.5">
              {/* Quick tab switcher for all 3 photos */}
              <div className="flex rounded-xl bg-black/40 p-1 border border-white/10 text-xs">
                {FACE_PHOTOS.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveFaceIndex(i)}
                    className={`flex-1 py-1.5 font-bold rounded-lg transition-all text-center cursor-pointer ${
                      activeFaceIndex === i
                        ? i === 2
                          ? 'bg-emerald-400 text-black shadow-sm font-extrabold'
                          : i === 1
                          ? 'bg-cyan-500 text-black shadow-sm font-extrabold'
                          : 'bg-white/15 text-white shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {i + 1}. {p.title}
                  </button>
                ))}
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
                            : idx === 1
                            ? 'bg-cyan-950/90 text-cyan-300 border-cyan-400/40'
                            : 'bg-emerald-950/90 text-emerald-300 border-emerald-400/40'
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
                    setActiveFaceIndex(prev => (prev === 0 ? FACE_PHOTOS.length - 1 : prev - 1));
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
                    setActiveFaceIndex(prev => (prev === FACE_PHOTOS.length - 1 ? 0 : prev + 1));
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

        {/* ============================================================= */}
        {/* BOX IN EVIDENZA: LA DIAGNOSI DEL TATTO & TEST DEI MASSETERI  */}
        {/* ============================================================= */}
        <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-emerald-400/60 bg-gradient-to-br from-emerald-950/40 via-black/85 to-cyan-950/30 shadow-[0_0_25px_rgba(16,185,129,0.2)] space-y-3.5">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                  Autodiagnosi Fondamentale
                </span>
                <h2 className="text-sm sm:text-base font-black text-white">
                  La Tecnica del Tatto: Test dei Muscoli Masseteri
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Stringi i Denti
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-black/60 border border-white/10 text-xs text-gray-200 leading-relaxed space-y-1">
            <strong className="text-emerald-300 block font-bold">👉 Come eseguire il test:</strong>
            <p className="text-[11px] text-gray-300">
              Appoggia i polpastrelli delle dita sulle guance, all'altezza degli angoli della mandibola, e <strong>stringi con forza i denti</strong> per sentire la consistenza e durezza dei muscoli masseteri sui due lati.
            </p>
          </div>

          {/* Risultato del test */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {/* Lato Destro */}
            <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-amber-300 font-extrabold uppercase text-[11px]">
                  Lato Destro: "Muro Duro" & Riempito
                </strong>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  Dominatore
                </span>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Quella sensazione di <strong>muro solido e riempito</strong> a destra indica che su quel lato c'è già una maggiore massa muscolare (ipertrofia del massetere) unita alla base ossea del palato più grande.
              </p>
              <p className="text-[11px] text-amber-200 font-semibold leading-relaxed">
                ⚠️ <strong>Cosa NON fare:</strong> Continuare a stimolarlo con la masticazione andrebbe solo ad appesantire quel lato, allargando ulteriormente la guancia e aumentando lo squilibrio visivo. Ha bisogno del solo dimagrimento per asciugarsi!
              </p>
            </div>

            {/* Lato Sinistro */}
            <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-cyan-300 font-extrabold uppercase text-[11px]">
                  Lato Sinistro: "Fino" & Cedevole
                </strong>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                  Lagging (Indietro)
                </span>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                A sinistra la sensazione è più <strong>cedevole e fina</strong>: c'è semplicemente meno tono/spessore muscolare sopra l'osso, arrivando subito a percepire la struttura scheletrica senza il cuscinetto denso che hai a destra.
              </p>
              <p className="text-[11px] text-cyan-200 font-semibold leading-relaxed">
                💡 <strong>La Strategia Invertita:</strong> Se la parte fina subisce solo il dimagrimento senza essere muscolarmente tonificata, si svuota ed evidenzia ancora di più l'asimmetria! Per questo DEVE essere la parte sinistra ad essere stimolata con la masticazione per addensarsi e pareggiare il destro.
              </p>
            </div>
          </div>
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
            La combinazione tra base ossea del palato e tono dei muscoli masseteri determina l'aspetto dei due lati.
          </p>

          <div className="space-y-3 pt-1">
            {/* LATO DESTRO */}
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-300 uppercase tracking-wider">
                  LATO DESTRO (Ampio / "Muro Duro" / Ipertrofico)
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  Base Larga + Muscolo Già Tonico
                </span>
              </div>
              <ul className="text-xs text-gray-200 space-y-1.5 list-disc pl-4 font-normal">
                <li>
                  <strong className="text-white">Arcata Palatina:</strong> Ampia ed espansa. Offre una base ossea strutturale più larga.
                </li>
                <li>
                  <strong className="text-white">Muscolo Massetere:</strong> Già ipertrofico, compatto e contratto (sensazione di "muro duro" al tatto).
                </li>
                <li>
                  <strong className="text-white">Comportamento dei Tessuti:</strong> La pelle è tesa su una superficie maggiore, creando una linea più dritta e squadrata.
                </li>
                <li>
                  <strong className="text-emerald-300">Obiettivo Estetico:</strong> NON ingrossarlo ulteriormente con la masticazione (riposo relativo 35-40%). Ha solo bisogno del dimagrimento corporeo per asciugare il velo superficiale e definire la mascella già solida.
                </li>
              </ul>
            </div>

            {/* LATO SINISTRO */}
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-cyan-300 uppercase tracking-wider">
                  LATO SINISTRO (Ristretto / "Fino" / Cedevole)
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold">
                  Base Stretta + Muscolo da Sviluppare
                </span>
              </div>
              <ul className="text-xs text-gray-200 space-y-1.5 list-disc pl-4 font-normal">
                <li>
                  <strong className="text-white">Arcata Palatina:</strong> Stretta e compattata. Lo spazio osseo a disposizione è ridotto.
                </li>
                <li>
                  <strong className="text-white">Muscolo Massetere:</strong> Fino, cedevole e meno spesso ("lagging" nello sviluppo rispetto al destro).
                </li>
                <li>
                  <strong className="text-white">Meccanica Mandibolare:</strong> È il lato verso cui la mandibola scivola a riposo per trovare contatto dentale stabile.
                </li>
                <li>
                  <strong className="text-cyan-300">Obiettivo Estetico Chiave:</strong> Stimolare l'ipertrofia del massetere sinistro con la masticazione mirata (60-65%) per addensarlo e riempire la zona, evitando che il dimagrimento svuoti la guancia mettendo in risalto l'asimmetria.
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

        {/* PARTE 3: SINTESI DELLA STRATEGIA NATURALE (FOCUS INVERTITO) */}
        <div className="p-4 rounded-3xl glass-card border border-white/10 space-y-2.5">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
              PARTE 3: SINTESI DELLA STRATEGIA NATURALE (FOCUS INVERTITO)
            </h2>
          </div>

          <p className="text-xs text-gray-300 font-medium leading-relaxed">
            La strategia da applicare da oggi è chiara e bilancia in modo complementare i due lati:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-xs font-bold text-amber-300 block">Sul Lato Destro ("Muro Duro"): Riposo Relativo (35-40%)</span>
              <p className="text-xs text-gray-300">
                Masticando meno a destra permetti al muscolo massetere di non ingrossarsi ulteriormente, mantenendo la sua forma attuale. Il deficit calorico e la palestra asciugheranno il grasso facciale facendolo emergere pulito e definito.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-xs font-bold text-cyan-300 block">Sul Lato Sinistro ("Fino"): Lavoro Mirato (60-65%)</span>
              <p className="text-xs text-gray-300">
                Concentrando la maggior parte della masticazione sul lato sinistro, dai uno stimolo di lavoro al massetere per farlo addensare, diventare duro al tatto e "riempire" quella zona rendendola compatta come il lato destro, evitando che il dimagrimento svuoti la guancia.
              </p>
            </div>
          </div>
        </div>

        {/* PARTE 4: PROTOCOLLO D'AZIONE (I Prossimi 8 Mesi - Obiettivo Giugno) */}
        <div className="p-4 rounded-3xl glass-card border border-[#00FFD1]/30 space-y-3.5">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-xl bg-[#00FFD1]/20 text-[#00FFD1]">
              <Flame className="w-4 h-4" />
            </div>
            <h2 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
              PARTE 4: PROTOCOLLO D'AZIONE (Obiettivo Giugno)
            </h2>
          </div>

          {/* 1. Definizione e Drenaggio */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-black">1</span>
              <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                Definizione e Drenaggio (Palestra & Deficit)
              </span>
            </div>
            <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-5 font-normal">
              <li>Allenamento costante in palestra con i pesi e tapis roulant per la ricomposizione corporea.</li>
              <li>Leggero deficit calorico per abbassare la percentuale di grasso corporeo generale e sfinare il viso.</li>
              <li>Bevi 2.5–3 litri d'acqua al giorno e controlla il sale per drenare i liquidi e togliere la ritenzione idrica.</li>
            </ul>
          </div>

          {/* 2. Masticazione Modulata Invertita */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-emerald-500/30 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-black">2</span>
                <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                  Masticazione Cosciente Invertita (60-65% a SINISTRA)
                </span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                Focus Lato Fino
              </span>
            </div>
            <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-5 font-normal">
              <li>
                <strong className="text-white">Focus sul Lato Sinistro:</strong> Durante i pasti quotidiani, concentra circa il <strong>60-65% della masticazione sul lato SINISTRO</strong> per dare stimolo di ipertrofia e densità al massetere lagging.
              </li>
              <li>
                <strong className="text-white">Riposo Relativo a Destra:</strong> Mastica a destra solo per il <strong>35-40%</strong>, permettendo al massetere destro di non allargarsi ulteriormente.
              </li>
              <li>
                <strong className="text-cyan-300">Il Controllo Settimanale al Tatto:</strong> Ogni 2-3 settimane, rifai il test con le dita sugli angoli della mascella mentre stringi i denti. Appena senti che la parte sinistra comincia a diventare solida e "dura" quasi quanto la destra, hai raggiunto l'equilibrio: a quel punto torni al 50/50 naturale su entrambi i lati.
              </li>
              <li>Se usi la gomma da masticare, limita la sessione a massimo 15 minuti totali al giorno masticando principalmente a sinistra.</li>
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

          {/* 4. Risultato Finale entro Giugno */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/40 to-black/80 border-2 border-emerald-400/40 space-y-2">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-black text-emerald-300 uppercase tracking-wider">
                Il Risultato Finale entro Giugno
              </span>
            </div>
            <p className="text-xs text-gray-200 leading-relaxed font-medium">
              Mentre riequilibri il volume dei due muscoli masseteri tramite la masticazione guidata a sinistra, il deficit calorico e l'allenamento in palestra faranno scendere la percentuale di grasso corporeo totale.
            </p>
            <p className="text-xs text-emerald-200/90 leading-relaxed font-medium">
              🎯 Riducendo il velo di grasso su tutto il viso, la combinazione di <strong>due masseteri finalmente simmetrici e duri</strong> con una pelle ben adesa all'osso ti regalerà quella linea della mascella (<strong>jawline</strong>) pulita, affilata e definita che stai cercando.
            </p>
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

        {/* ============================================================= */}
        {/* GUIDA SCIENTIFICA E PRATICA: STRUTTURA, GRASSO, MASTICAZIONE  */}
        {/* (Focus puro su struttura del viso, grasso facciale, volumi, postura) */}
        {/* ============================================================= */}
        <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-400/40 bg-gradient-to-br from-cyan-950/25 via-black/85 to-emerald-950/20 space-y-4">
          <div className="space-y-1 border-b border-white/10 pb-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 block">
              Analisi Scientifica &amp; Guida Operativa (Focus Esclusivo: Struttura, Grasso, Volumi &amp; Postura)
            </span>
            <h2 className="text-sm sm:text-base font-black text-white leading-snug">
              Chiarezza Totale: Quale Lato Sviluppare vs Quale Lato Definire, Lipolisi Facciale &amp; Le 3 Fasi
            </h2>
          </div>

          {/* 1. Punto chiaro sulla masticazione & biomeccanica */}
          <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2.5 text-xs text-gray-200 leading-relaxed">
            <strong className="text-cyan-300 block uppercase tracking-wider text-[11px]">
              1. Il Punto Chiaro sulla Masticazione: Quale Lato Sviluppare di Più &amp; Meccanica Scientifica
            </strong>
            <p>
              Quando guardi i due lati allo specchio e ti chiedi: <em>&quot;Se un lato crea già quella linea netta e definita e l&apos;altro è più rotondo/morbido, devo masticare di più quello definito per definirlo ancora di più, oppure l&apos;altro?&quot;</em> — ecco la logica biologica e visiva netta:
            </p>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>
                <strong className="text-white">Regola Visiva Universale (Armonia vs Squilibrio):</strong> il lato che già crea una linea più netta e lineare ha già buona tensione e spinta strutturale; ingrandirlo ulteriormente rischia di allargare la differenza tra i due lati finché non hai pareggiato. Il carico extra di lavoro va sul lato che vuoi <strong>riequilibrare</strong> (quello più rotondo/meno definito o — come nel tuo test al tatto — il lato sinistro più fino/cedevole che deve addensarsi per non svuotarsi col dimagrimento), usando <strong>sempre i molari</strong> e mai i denti anteriori.
              </li>
              <li>
                <strong className="text-emerald-300">Perché i Molari (Leva Corta) &amp; Perché NON Basta Gonfiare il Muscolo:</strong> masticando sui denti posteriori (molari) il braccio di leva rispetto all&apos;articolazione temporo-mandibolare (ATM) è corto, quindi generi alta forza senza torcere il condilo. Tuttavia, la vera <strong>&quot;definizione&quot;</strong> (vedere la linea affilata dell&apos;osso e dell&apos;angolo mandibolare) NON viene dal gonfiare il massetere all&apos;infinito: un muscolo enorme coperto da grasso e ritenzione idrica appare comunque gonfio o tondo; un muscolo equilibrato con <strong>meno grasso sottocutaneo e meno liquidi sopra</strong> lascia emergere subito lo spigolo osseo!
              </li>
              <li>
                <strong className="text-amber-300">Ipertrofia Mirata, Tetto Genetico &amp; Recupero ATM:</strong> il massetere è un muscolo scheletrico volontario. Il lavoro mirato crea subito flusso sanguigno locale (<em>iperemia</em>) e in 8–16 settimane stimola l&apos;adattamento delle fibre fino al suo <strong>tetto genetico</strong>: riempie e compatta la sporgenza laterale dell&apos;angolo mandibolare (non trasforma l&apos;osso adulto fuso, ma modula visivamente il profilo frontale e di 3/4). Esattamente come in palestra, vale la legge <strong>stimolo + recupero</strong>: esagerare ogni giorno con cibi o gomme durissime infiamma il disco articolare dell&apos;ATM causando contratture e click.
              </li>
            </ul>
          </div>

          {/* 2. Grasso facciale, compartimenti adiposi & postura */}
          <div className="p-3.5 rounded-2xl bg-black/55 border border-emerald-500/30 space-y-2.5 text-xs text-gray-200 leading-relaxed">
            <strong className="text-emerald-300 block uppercase tracking-wider text-[11px]">
              2. Cosa Succede al Viso Quando Perdi Grasso &amp; Correggi la Postura (Il Vero Motore)
            </strong>
            <ul className="space-y-1.5 list-disc pl-5">
              <li>
                <strong className="text-white">Postura Cranio-Cervicale &amp; Tessuti Sottomentali:</strong> quando tieni la testa leggermente in avanti o abbassata verso telefono/banco, i muscoli sovraioidei e la pelle sotto il mento si accorciano e si &quot;impacchettano&quot;, cancellando l&apos;angolo tra collo e mandibola e creando finta pienezza anche da magri. Appena raddrizzi il busto e allinei orecchie sopra le spalle (testa neutra, lingua appoggiata leggera al palato), i tessuti molli del collo si distendono come una tela tesa e l&apos;angolo mandibolare si apre all&apos;istante.
              </li>
              <li>
                <strong className="text-cyan-300">Lipolisi dei Compartimenti Adiposi del Viso:</strong> il grasso del viso è diviso in compartimenti superficiali (guance malari/inferiori, regione pre-auricolare davanti all&apos;orecchio, area sottomentoniera sotto la mascella) più la bolla di Bichat profonda. In deficit calorico costante l&apos;organismo mobilita i trigliceridi da tutti questi compartimenti superficiali: riducendo lo spessore dello strato adiposo che li ricopre, la luce non rimbalza più su una curva rotonda ma disegna ombre nette sotto zigomi e linea mandibolare.
              </li>
              <li>
                <strong className="text-amber-300">Ritenzione Idrica, Sodio/Potassio &amp; Cortisolo:</strong> molto spesso la differenza tra un giorno in cui sembri già definito e la mattina in cui sembri gonfio è <strong>acqua extracellulare</strong> (aldosterone/cortisolo alti da cena salata, poco sonno o poca acqua bevuta), non nuovo grasso!
              </li>
            </ul>
          </div>

          {/* 3. Regole essenziali ogni giorno */}
          <div className="p-3.5 rounded-2xl bg-black/55 border border-amber-500/30 space-y-2 text-xs text-gray-200 leading-relaxed">
            <strong className="text-amber-300 block uppercase tracking-wider text-[11px]">
              3. Le 5 Regole Essenziali da Seguire Ogni Giorno (Zero Dubbi)
            </strong>
            <ol className="space-y-1.5 list-decimal pl-5">
              <li>
                <strong className="text-white">Masticazione Bilanciata sui Molari:</strong> lavora maggiormente sul lato da riequilibrare (~60–65% sinistra / 35–40% destra secondo il tuo test al tatto) usando cibi consistenti o al max 10–15 min di gomma controllata. Controlla ogni 2–3 settimane stringendo i denti: appena i due lati si equivalgono al tatto, passa al 50/50 naturale. Mai stringere i denti a vuoto durante la giornata (regola: <em>&quot;labbra chiuse, denti leggermente staccati, lingua sul palato&quot;</em>).
              </li>
              <li>
                <strong className="text-white">Deficit Calorico Costante + Pesi + 10.000 Passi:</strong> abbassa gradualmente la percentuale di grasso corporeo totale senza diete estreme da fame (i tagli calorici troppo aggressivi alzano il cortisolo e gonfiano il viso di liquidi).
              </li>
              <li>
                <strong className="text-white">Allineamento Collo &amp; Smartphone all&apos;Altezza degli Occhi:</strong> mantieni ogni giorno 2 serie × 25 <em>Chin Tucks</em> + 2 serie × 15 <em>Neck Curls</em>, e porta il telefono davanti al viso invece di piegare il collo in giù.
              </li>
              <li>
                <strong className="text-white">Sonno Simmetrico (Pancia in Su):</strong> dormi supino su cuscino basso/ergonomico così nessuno dei due lati della guancia e della mandibola resta schiacciato per 7–8 ore contro il materasso.
              </li>
              <li>
                <strong className="text-white">Idratazione &amp; Equilibrio Sodio/Potassio:</strong> bevi <strong className="tabular-nums">2,5–3 litri</strong> d&apos;acqua al giorno, limita cibi ultra-salati la sera e consuma fonti naturali di potassio (verdure, kiwi/banana se nel tuo piano glicemico) per drenare l&apos;accumulo idrico dalle guance.
              </li>
            </ol>
          </div>

          {/* 4. Le 3 fasi di evoluzione */}
          <div className="space-y-2 text-xs">
            <strong className="text-purple-300 block uppercase tracking-wider text-[11px] pl-1">
              4. Progressione Reale in 3 Fasi (Cosa Aspettarti Nel Tempo)
            </strong>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-1 text-gray-200">
                <strong className="text-cyan-300 block">Fase 1 (Settimane 1–4)</strong>
                Si sgonfia la ritenzione idrica (viso subito meno gonfio la mattina), il collo si allunga con i chin tucks e impari la masticazione pulita sui molari senza stressare l&apos;ATM.
              </div>
              <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-1 text-gray-200">
                <strong className="text-emerald-300 block">Fase 2 (Mesi 2–4)</strong>
                La lipolisi facciale asciuga i compartimenti sottomentali e pre-auricolari; il massetere più indietro si compatta fino al pareggio al tatto, consentendo di passare al 50/50.
              </div>
              <div className="p-3 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-1 text-gray-200">
                <strong className="text-purple-300 block">Fase 3 (Mesi 5–8+)</strong>
                Massima definizione dell&apos;angolo goniaco e della jawline pulita con pelle adesa ai volumi muscolari bilanciati. Da qui deciderai con calma se ti soddisfa al 100% o se valutare uno gnatologo.
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================= */}
        {/* AGGIORNAMENTO FOTO (13 NUOVI SCATTI PROGRESSO & ANGOLAZIONI)  */}
        {/* ============================================================= */}
        <div className="p-4 sm:p-5 rounded-3xl glass-card border border-emerald-400/40 bg-gradient-to-br from-emerald-950/20 via-black/85 to-cyan-950/20 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white">
                  Aggiornamento Foto — Archivio Completo (13 Scatti)
                </h3>
                <p className="text-[10px] text-gray-400">
                  Frontali, 3/4 destro e sinistro, con e senza occhiali, allineamento collo e mandibola • Tocca per ingrandire e scorrere
                </p>
              </div>
            </div>
            <span className="text-[10px] font-black px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap shrink-0 tabular-nums">
              13 Foto
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
            {UPDATED_FACE_PHOTOS.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() =>
                  setFullscreenImg({
                    url: photo.url,
                    title: `${photo.title} (${idx + 1}/${UPDATED_FACE_PHOTOS.length})`
                  })
                }
                className="group relative rounded-2xl overflow-hidden border border-white/15 hover:border-emerald-400/60 bg-black cursor-pointer aspect-[3/4] transition-all"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent flex flex-col justify-end p-2">
                  <span className="text-[9px] font-bold text-emerald-300 bg-black/70 px-1.5 py-0.5 rounded border border-emerald-500/30 w-fit">
                    {photo.tag}
                  </span>
                  <span className="text-[10px] font-bold text-white line-clamp-1 mt-0.5">
                    {photo.title}
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
  // VIEW: LA MIA BUSSOLA (TRANQUILLITÀ, ANTI-PARANOIE & VERSIONE MIGLIORE)
  // -------------------------------------------------------------
  if (activeView === 'bussola_mente') {
    return (
      <div className="space-y-4 pb-24 pt-1 animate-in fade-in duration-200">
        {/* Top Sticky Nav */}
        <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
          <button
            type="button"
            onClick={() => handleOpenView('list')}
            className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-emerald-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tutte le Note</span>
          </button>
          <span className="text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            La Mia Bussola • Priorità N° 1
          </span>
        </div>

        {/* Hero Tranquillità */}
        <div className="p-5 sm:p-6 rounded-3xl glass-card border-2 border-emerald-400/60 bg-gradient-to-br from-emerald-950/45 via-black/90 to-cyan-950/30 space-y-3 shadow-[0_0_35px_rgba(16,185,129,0.2)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-400 text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
              <Heart className="w-3 h-3" />
              Da Leggere Quando Sei Smarrito o Hai Mille Paranoie
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
            Tranquillità, Organizzazione &amp; La Versione Migliore di Me
          </h1>

          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
            Se in questo momento ti senti confuso, non sai se stai facendo giusto o ti stai facendo mille paranoie: <strong className="text-emerald-300">fermati un secondo e respira. Se sei già su questa strada e ti stai organizzando, sei già a posto e stai già diventando la versione migliore di te.</strong>
          </p>
        </div>

        {/* 1. LA REGOLA #1: PACE INTERIORE & BIOCHIMICA DELLA CALMA */}
        <div className="p-4 sm:p-5 rounded-3xl glass-card border border-emerald-500/35 bg-black/75 space-y-3 text-xs text-gray-200 leading-relaxed">
          <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
            <Heart className="w-4 h-4 text-emerald-400 shrink-0" />
            <h2 className="text-sm sm:text-base font-black text-white">
              1. L&apos;Obiettivo Più Importante di Tutti: Essere Tranquillo e In Pace
            </h2>
          </div>

          <p>
            Il tuo vero obiettivo nella vita non è inseguire la perfezione con l&apos;ansia: è <strong className="text-emerald-300">stare tranquillo con te stesso e con le persone che ami</strong>. Migliorare il fisico, il viso, la pelle, i capelli e la salute serve a farti stare bene, mai a farti vivere sotto esame o in guerra con lo specchio.
          </p>

          <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-2 text-[11px]">
            <strong className="text-emerald-300 uppercase tracking-wider block">
              Perché Essere Calmi Ti Fa Migliorare Anche Fisicamente (Scienza Reale):
            </strong>
            <ul className="space-y-1.5 list-disc pl-5 text-gray-200">
              <li>
                <strong>Viso &amp; Ritenzione Idrica:</strong> le paranoie continue attivano l&apos;asse dello stress (<em>asse HPA</em>), alzando <strong>cortisolo e aldosterone</strong>. Il risultato biologico immediato dello stress è trattenere acqua sulle guance e sulla pancia. La calma letteralmente ti sgonfia il viso!
              </li>
              <li>
                <strong>Diabete &amp; Glicemia:</strong> adrenalina e cortisolo alzano la glicemia anche a digiuno rendendoti insulino-resistente. Una mente serena stabilizza molto di più i valori del sensore.
              </li>
              <li>
                <strong>Pelle, Acne &amp; Capelli:</strong> il cortisolo stimola le ghiandole sebacee a produrre più sebo infiammatorio e blocca la microcircolazione cutanea. Essere sereni aiuta anche pelle e capelli a guarire più in fretta.
              </li>
            </ul>
          </div>
        </div>

        {/* 2. VERITÀ ANTI-PARANOIE */}
        <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/35 bg-gradient-to-br from-cyan-950/25 via-black/80 to-black space-y-2.5 text-xs text-gray-200 leading-relaxed">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <h2 className="text-sm sm:text-base font-black text-white">
              2. Regola Anti-Paranoie: Conosci le Cose → Organizzati → Vivi Sereno
            </h2>
          </div>
          <p>
            Hai già raccolto tutta la scienza in queste note apposta per un motivo preciso: <strong className="text-white">sapere cosa devi fare senza dover andare a tentoni o dubitare ogni giorno</strong>. Quando la conoscenza è scritta qui dentro:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
            <div className="p-3 rounded-2xl bg-black/60 border border-white/10">
              <strong className="text-cyan-300 block mb-0.5">1. Sai Già Cosa Fare</strong>
              Non devi reinventare nulla ogni mattina: ogni dubbio ha già una risposta scientifica chiara qui dentro.
            </div>
            <div className="p-3 rounded-2xl bg-black/60 border border-white/10">
              <strong className="text-emerald-300 block mb-0.5">2. Il Corpo Richiede Mesi, Non Ore</strong>
              Guardarsi allo specchio ogni ora non accelera i risultati. Fai le tue cose giornaliere e lascia lavorare il tempo.
            </div>
            <div className="p-3 rounded-2xl bg-black/60 border border-white/10">
              <strong className="text-amber-300 block mb-0.5">3. 80% Costanza &gt; 100% Maniacale</strong>
              Non serve essere robot perfetti sul milligrammo di sodio o sul singolo sgarro: vince chi dura sereno per mesi.
            </div>
          </div>
        </div>

        {/* 3. I 6 PILASTRI DELLA VERSIONE MIGLIORE DI TE */}
        <div className="p-4 sm:p-5 rounded-3xl glass-card border border-white/15 bg-black/80 space-y-3 text-xs text-gray-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <h2 className="text-sm sm:text-base font-black text-white">
                3. Cosa Stai Costruendo (La Versione Migliore di Te in 6 Punti Semplici)
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px] leading-relaxed">
            <div className="p-3.5 rounded-2xl bg-orange-950/25 border border-orange-500/35 space-y-1.5">
              <strong className="text-orange-300 block">A. Perdere Grasso (Viso Asciutto &amp; Fisico Definito)</strong>
              <p className="text-gray-300">
                Deficit pulito Lun–Sab (~1.400–1.600 kcal, 115–120g proteine), palestra 3x/settimana + domenica di ricarica serena. Il grasso su pancia e viso scende automaticamente nei prossimi mesi fino a Giugno.
              </p>
              <button type="button" onClick={() => handleOpenView('palestra_grasso')} className="text-orange-300 font-bold underline cursor-pointer">
                Apri Palestra &amp; Grasso →
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-cyan-950/25 border border-cyan-500/35 space-y-1.5">
              <strong className="text-cyan-300 block">B. Lavorare Sull&apos;Asimmetria (Senza Ossessioni)</strong>
              <p className="text-gray-300">
                Masticazione 60–65% sul lato sinistro fino/meno definito (usando i molari), lingua leggera sul palato, <em>chin tucks</em> + dormire supino. Niente sforzi forzati sulla mandibola; a Giugno/Settembre rivaluti tutto con calma.
              </p>
              <button type="button" onClick={() => handleOpenView('asimmetria')} className="text-cyan-300 font-bold underline cursor-pointer">
                Apri La mia asimmetria →
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-teal-950/25 border border-teal-500/35 space-y-1.5">
              <strong className="text-teal-300 block">C. Capelli (Messy Wavy Voluminoso Semplice)</strong>
              <p className="text-gray-300">
                Lascia crescere la parte davanti per avere volume che copre la fronte, taglio scalato giusto e routine rapida la mattina (acqua/balsamo o polvere senza perderci la testa).
              </p>
              <button type="button" onClick={() => handleOpenView('capelli_mullet')} className="text-teal-300 font-bold underline cursor-pointer">
                Apri Textured Messy Mullet →
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-950/25 border border-emerald-500/35 space-y-1.5">
              <strong className="text-emerald-300 block">D. Acne, Peli Incarniti &amp; Zero Fissa sul Sodio</strong>
              <p className="text-gray-300">
                Detergente delicato, crema idratante, acido salicilico (2–3 sere), protezione solare SPF, rasatura delicata ogni 7–10 giorni. Alimentazione pulita + <strong>bevi tanta acqua (2,5–3L) senza mai stressarti a contare i mg di sodio</strong>!
              </p>
              <button type="button" onClick={() => handleOpenView('peli_incarniti')} className="text-emerald-300 font-bold underline cursor-pointer">
                Apri Peli Incarniti &amp; Skincare →
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-lime-950/25 border border-lime-500/35 space-y-1.5">
              <strong className="text-lime-300 block">E. 10.000 Passi/Giorno &amp; Prevenzione Lunga Vita</strong>
              <p className="text-gray-300">
                Camminare 10.000 passi ti fa bruciare grassi senza fame nervosa, apre i canali GLUT4 per stabilizzare il diabete e fortifica ossa, schiena e cuore fino a 80 anni.
              </p>
              <button type="button" onClick={() => handleOpenView('prevenzione_eta')} className="text-lime-300 font-bold underline cursor-pointer">
                Apri Prevenzione &amp; Longevità →
              </button>
            </div>

            <div className="p-3.5 rounded-2xl bg-rose-950/25 border border-rose-500/35 space-y-1.5">
              <strong className="text-rose-300 block">F. Dare il Massimo Con il Sorriso</strong>
              <p className="text-gray-300">
                Studia i tuoi dati del diabete con serenità insieme al medico, vivi le tue giornate con le persone a cui vuoi bene e ricordati sempre: <strong>sei già sulla strada giusta</strong>.
              </p>
              <button type="button" onClick={() => handleOpenView('diabete_glicemia')} className="text-rose-300 font-bold underline cursor-pointer">
                Apri Diabete &amp; Dati →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW: DA STUDIARE OGGI (TUTTE LE MODIFICHE & AGGIUNTE DI OGGI)
  // -------------------------------------------------------------
  if (activeView === 'studia_oggi') {
    const todayUpdates: {
      id: string;
      category: 'mente_viso' | 'diabete' | 'palestra_ossa';
      sectionBadge: string;
      badgeColor: string;
      title: string;
      summary: string;
      keyPoints: string[];
      targetView: typeof activeView;
      targetSubTab?: string;
    }[] = [
      {
        id: 'today_bussola',
        category: 'mente_viso',
        sectionBadge: 'Priorità N° 1 • Bussola Mentale',
        badgeColor: 'emerald',
        title: 'La Mia Bussola: Tranquillità, Anti-Paranoie & Versione Migliore di Me',
        summary: 'Nota madre da aprire quando sei smarrito o pieno di dubbi: l’obiettivo vero è la pace con te stesso e con chi ami. Lo stress cronico alza cortisolo/aldosterone peggiorando ritenzione al viso, glicemia e acne; essere organizzato e già sul percorso significa che stai già diventando la tua versione migliore.',
        keyPoints: [
          '6 pilastri chiari: dimagrire (1.600 kcal + 10k passi), asimmetria, messy wavy, acne/SPF + molta acqua senza fissazione sul sodio, longevità ossa.',
          'Se già fai le cose scritte nelle note, sei già a posto: lascia lavorare i mesi senza guardarti con ansia ogni ora.'
        ],
        targetView: 'bussola_mente'
      },
      {
        id: 'today_asimmetria_grasso_taglio',
        category: 'mente_viso',
        sectionBadge: 'La mia asimmetria • Nuova Sezione Dedicata',
        badgeColor: 'cyan',
        title: 'Grasso Facciale (Pinch Test 1,75m / 73kg), Taglio Corto & Strategia "Faccia Fine" (Giugno)',
        summary: 'Spostata in cima a La mia asimmetria come sezione dedicata separata (zero scorrimento!): spiega grasso sottocutaneo + acqua extracellulare, l’effetto ottico di cornice (low-fade vs chioma lunga), perché il grasso del viso resiste con recettori adrenergici Alfa-2 vs Beta-2, i 3 fronti uniti (~1.600 kcal / 115–120g proteine, 10.000 passi NEAT senza cortisolo, masseteri + Sleeper Build) e il vantaggio elastina/GH dei 16 anni fino a Giugno.',
        keyPoints: [
          'Pinch test: tirando la guancia senti grasso sottocutaneo + acqua (che lega 3g per g di glicogeno), non osso largo; i recettori Alfa-2 su guance/sottomento/basso ventre si svuotano per ultimi.',
          'Taglio corto low-fade = scompare la cornice (visual framing), ma il viso è identico; intanto ricresce e 1.600 kcal + 10.000 passi (70% dieta + consumo invisibile) asciugano tutto per Giugno.'
        ],
        targetView: 'asimmetria_grasso_viso'
      },
      {
        id: 'today_asimmetria_struttura_13foto',
        category: 'mente_viso',
        sectionBadge: 'La mia asimmetria • Struttura + 13 Foto',
        badgeColor: 'cyan',
        title: 'Quale Lato Sviluppare vs Definire, Lipolisi Facciale, Postura & 13 Nuove Foto',
        summary: 'Risolve il dubbio su quale lato masticare: il lato già lineare ha già tensione; il carico extra (60–65% sui molari, leva corta) va sul lato più rotondo/fino per pareggiarlo senza forzare l’ATM. Include l’archivio di 13 nuove foto con scorrimento fullscreen.',
        keyPoints: [
          'Definizione = meno grasso/acqua sopra + masseteri equilibrati + postura collo dritta (chin tucks).',
          'Controllo ogni 2–3 settimane al tatto finché i due lati si pareggiano, poi 50/50.'
        ],
        targetView: 'asimmetria'
      },
      {
        id: 'today_diabete_19nov',
        category: 'diabete',
        sectionBadge: 'Diabete • Nota 11 (Aggiornata 19/11)',
        badgeColor: 'rose',
        title: 'Dati Reali 19/11: Frullato (6U + 3U = 9U) & Mensa (9U + 4U + 3,5U = 16,5U / Stacking 36 Min)',
        summary: 'Analisi completa esclusivamente sui tuoi boli manuali reali (distinguendoli da 7,17 / 4,75 sommati con Control-IQ): al mattino frullato liquido (20–30 min) vs insulina rapida (picco >1h) fa toccare 281 alle 09:25 con 6U, scendendo a 152 alle 12:50 solo con +3U (rapporto mattutino ~1:6,5–1:7 vs 1:11–12 teorico). A pranzo 9U + 4U (14:03 a 252) + 3,5U dopo appena 36 minuti (14:39 a 321) = 16,5U in <2h (Stacking + Onda Lunga CCK dell’impanato + AMPK/GLUT4 in palestra -> picco 355 e crollo 80–90).',
        keyPoints: [
          'Pre-bolo frullato (chiedere 10–15 min di anticipo + I:C fascia 07:00–12:00 per cortisolo/GH mattutino).',
          'Mai correggere dopo 36 minuti su pasta + impanato (IOB dura 3,5–4h reali): portato il riassunto esatto con le domande per la dottoressa.'
        ],
        targetView: 'diabete_glicemia',
        targetSubTab: 'dati_reali_19nov'
      },
      {
        id: 'today_diabete_nota8',
        category: 'diabete',
        sectionBadge: 'Diabete • Nota 8',
        badgeColor: 'rose',
        title: 'Frullato Mattutino (40–41g CHO), I:C Teorico vs Cortisolo & Bolo 7,5 U',
        summary: 'Spiega latte scremato + banana + whey (~40–41g carboidrati): con I:C teorico 1:11–12 sarebbero ~3,5 U, ma tra picco di cortisolo/GH mattutino e assorbimento liquido veloce servono dosi e tempi calibrati con il medico (latenza sottocutanea 0–20 min vs picco 30–90 min).',
        keyPoints: [
          'Distinzione tra bolo cibo, correzione e micro-erogazioni automatiche Control-IQ.'
        ],
        targetView: 'diabete_glicemia',
        targetSubTab: 'frullato_bolo'
      },
      {
        id: 'today_diabete_nota9',
        category: 'diabete',
        sectionBadge: 'Diabete • Nota 9',
        badgeColor: 'rose',
        title: 'Mattina a Digiuno (~120 mg/dL), Dawn Effect & Effetto Sul Grasso',
        summary: 'Analizza perché uscendo senza colazione resti sui ~120 mg/dL (effetto Alba epatico + basale che contiene la curva) e perché saltare o fare colazione NON blocca il dimagrimento se rispetti il deficit calorico delle 24 ore.',
        keyPoints: [
          'Attenzione ai cali in classe e gestione intelligente delle bustine senza montagne russe.'
        ],
        targetView: 'diabete_glicemia',
        targetSubTab: 'mattina_digiuno'
      },
      {
        id: 'today_diabete_nota10',
        category: 'diabete',
        sectionBadge: 'Diabete • Nota 10',
        badgeColor: 'rose',
        title: 'Timing Frullato (Mer/Gio/Ven), Destino delle Proteine & Finestra Anabolica 24–48h',
        summary: 'Smentisce il mito delle proteine "in attesa nel sangue fino alle 18": le proteine diventano amminoacidi nel pool sistemico attraverso la vena porta e la sintesi proteica muscolare (MPS) resta accesa per 24–48 ore dopo i pesi. Spostare lo shake post-palestra sfrutta i canali GLUT4 riducendo il fabbisogno di insulina.',
        keyPoints: [
          'Contano prima le proteine totali del giorno (115–120g) e le calorie totali; l’orario dello shake conta solo per comodità e curva glicemica.'
        ],
        targetView: 'diabete_glicemia',
        targetSubTab: 'proteine_finestra'
      },
      {
        id: 'today_palestra_henneman_leve',
        category: 'palestra_ossa',
        sectionBadge: 'Palestra & Grasso • 13# Info (Nuovo 19 Nov)',
        badgeColor: 'violet',
        title: 'Principio di Henneman ("Pochi kg"), Autoregolazione, Curl Manubri vs Cavi & Leve Lunghe/Compensi',
        summary: 'Il muscolo è cieco al numero sul manubrio: legge tensione meccanica e prossimità al cedimento tecnico. Spiega perché "pochi kg" con traiettoria inchiodata battono un peso "da macho" strappato di schiena, il paradosso dell’autoregolazione, la fisica M = Forza × Braccio di leva sulle braccia lunghe e perché compaiono "spalla di alzata" e micromovimenti lombari.',
        keyPoints: [
          'Principio di Henneman (Size Principle): il cervello recluta prima fibre lente (Tipo I) e accende quelle grandi ad alta soglia (Tipo IIa/IIx) man mano che le piccole si stancano vicino al cedimento. "Spaccare le fibre" = avvicinarsi al limite tecnico con forma integra.',
          'Paradosso del peso (Autoregolazione): il carico giusto oggi è il massimo peso che tieni con controllo perfetto (cambia in base a sonno, glicogeno e glicemia/cortisolo).',
          'Curl Manubri vs Cavi: nei manubri la gravità tira solo in verticale (picco massimo a metà con avambraccio orizzontale, scarico ai lati); ai cavi la carrucola tiene tensione continua. Su entrambi: gomito stabile lungo il fianco, discesa lenta 2–3 sec (eccentrica) e zero colpi di reni.',
          'Fisica delle Leve Lunghe & Compensi: Momento Torcente = Forza × Braccio di leva → con braccia lunghe lo stesso manubrio "pesa" molto di più. Quando il target brucia, il cervello in automatico alza la spalla (trapezio) o inarca 5 mm la schiena per creare micro-slancio: fissa le scapole in basso, blocca addome/glutei e trasformi la grinta in muscolo vero.'
        ],
        targetView: 'palestra_grasso',
        targetSubTab: 'henneman_leve_compensi'
      },
      {
        id: 'today_palestra_stesso_giorno',
        category: 'palestra_ossa',
        sectionBadge: 'Palestra & Grasso • 14# Info (Nuovo 19 Nov)',
        badgeColor: 'emerald',
        title: 'Pesi e Camminata Nello Stesso Giorno: Concurrent Training (AMPK vs mTOR), Timing & Limite Recupero',
        summary: 'Pesi e camminata nello stesso giorno NON si annullano, anzi si completano: i pesi danno il segnale anabolico di tensione meccanica; la camminata brucia acidi grassi in modo pulito, attiva i GLUT4 per la glicemia e migliora il ritorno venoso articolare senza scatenare fame nervosa.',
        keyPoints: [
          'Zero interferenza (AMPK vs mTORC1): il blocco anabolico avviene solo con cardio lungo/intenso o HIIT vicino ai pesi. La camminata lavora su fibre ossidative Tipo I con zero fatica neuromuscolare.',
          'Ordine perfetto nello stesso giorno: 1ª scelta = Pesi prima (SNC fresco e tecnica massima) e camminata subito dopo o più tardi in giornata; Prima dei pesi = SOLO 5–10 min leggeri di riscaldamento (mai camminate lunghe prima dei carichi); Momenti separati = ottimo purché non tolga sonno.',
          'Unico limite: se sei sfatto o hai dormito male, tieni un passo deciso ma naturale senza trasformare i passi in una tortura in pendenza.'
        ],
        targetView: 'palestra_grasso',
        targetSubTab: 'pesi_camminata_giorno'
      },
      {
        id: 'today_palestra_rbe_terza_serie',
        category: 'palestra_ossa',
        sectionBadge: 'Palestra & Grasso • 15# Info (Nuovo 19 Nov)',
        badgeColor: 'amber',
        title: 'Crampi del Giorno 1 (Repeated Bout Effect), Tecnica Filtro, Sussulti al Limite & Regola 3ª Serie',
        summary: 'Spiega perché i primi giorni "scoppiavano" i muscoli coi crampi mentre dopo no, perché "senza tecnica non farò niente", cosa accade nei "sussulti di sforzo" (Rate Coding, ioni H+, fosfato Pi e Calcio) e la regola d’oro scientifica: buffer 1–2 reps su 1ª e 2ª serie e cedimento tecnico SOLO sulla 3ª.',
        keyPoints: [
          'Repeated Bout Effect (RBE): all’inizio il corpo non ha ancora lo scudo adattativo (reclutamento disordinato, edema, fusi neuromuscolari affaticati -> crampi/bruciore estremo). Quando spariscono i crampi non hai smesso di crescere: sei passato dall’emergenza all’ipertrofia strutturale.',
          'Tecnica Filtro & Sussulti (Rate Coding): la tecnica decide quale tessuto paga il conto. I tremori/sussulti indicano che i motoneuroni stanno sparando alla frequenza massima tra H+ e Pi: se tieni scapole e schiena bloccate è il limite reale; se strappi, hai superato il limite tecnico.',
          'Regola 3ª Serie vs Tutte: fermarsi a 1–2 ripetizioni pulite di margine su 1ª e 2ª serie preserva forza, tecnica e SNC per tutte e 3 le serie; sulla 3ª dai il cedimento tecnico pulito (massimo stimolo ipertrofico con metà usura su gomiti/spalle).'
        ],
        targetView: 'palestra_grasso',
        targetSubTab: 'rbe_limite_terza_serie'
      },
      {
        id: 'today_palestra_flessioni',
        category: 'palestra_ossa',
        sectionBadge: 'Palestra & Grasso • 12# Info',
        badgeColor: 'orange',
        title: 'Flessioni nei Giorni Off: Richiamo Sanguigno (Pump) vs Ipertrofia, SNC & 2 Fasi',
        summary: 'Chiarisce la differenza tra pump temporaneo da ossido nitrico/iperemia (1–2h) e vera crescita muscolare da tensione meccanica (fibre Tipo II + mTOR + MPS 48h). Spiega perché gomiti, spalle e SNC si affaticano se spingi nei giorni off, introducendo il Protocollo a 2 Fasi.',
        keyPoints: [
          'Fase 1 (casa giorni OFF): 1–2 mini-set × 3–5 reps con 4–5 RIR di margine (tecnica pura scapole/gomiti 45°, zero fatica).',
          'Fase 2 (palestra): integri i piegamenti dentro il giorno spinta e lasci i giorni off solo a recupero e passi.'
        ],
        targetView: 'palestra_grasso',
        targetSubTab: 'flessioni_riposo'
      },
      {
        id: 'today_prevenzione_lavoro_manuale',
        category: 'palestra_ossa',
        sectionBadge: 'Prevenzione • Sezione 2 (Aggiornata 19 Nov)',
        badgeColor: 'lime',
        title: 'Lavoro Fisico Quotidiano vs Palestra: Capillari, Economia del Gesto, Fibre IIx, Mionuclei & Fatica',
        summary: 'Analisi completa del compromesso scientifico di un lavoro manuale quotidiano senza pesi: alleni la resistenza (più capillari, mitocondri ed economia energetica su fibre lente Tipo I), diventi più asciutto ma perdi un po’ di riempimento/forza massima sulle fibre rapide Tipo IIx per assenza di picchi di alta tensione meccanica.',
        keyPoints: [
          'Cosa resta intatto: i Mionuclei permanenti costruiti in palestra da giovane ti salvano per tutta la vita; bastano 2–3 richiami brevi settimanali (25–35 min) per mantenere tutta la massa senza bruciarti.',
          'Fatica ≠ Stimolo: lavori ripetitivi/asimmetrici generano stanchezza sistemica e usura su schiena/spalle se mancano mobilità, sonno, proteine e richiami bilaterali (con diabete attenzione a ipoglicemie ritardate).'
        ],
        targetView: 'prevenzione_eta',
        targetSubTab: 'massa_lavoro'
      },
      {
        id: 'today_prevenzione_ossa',
        category: 'palestra_ossa',
        sectionBadge: 'Prevenzione • Sezione 1 (Aggiornata 19 Nov)',
        badgeColor: 'lime',
        title: 'Ossa Negli Anni: Collagene + Idrossiapatite, Corticale vs Trabecolare, Wolff/Piezoelettricità & Pesi vs Camminate',
        summary: 'Spiega l’osso come tessuto vivo: ~30–35% collagene elastico (anti-frattura) + ~65–70% idrossiapatite (durezza), strato Corticale esterno + rete Trabecolare interna. Sotto carico la micro-deformazione genera segnali piezoelettrici e flusso canalicolare agli Osteociti, che abbassano la Sclerostina attivando gli Osteoblasti lungo le linee di forza (Legge di Wolff).',
        keyPoints: [
          'Pesi vs Camminate vs Lavoro Manuale: i pesi danno trazione tendinea forte e rapida (picco BMD); le camminate danno impatto ciclico su femore/colonna; il lavoro manuale rinforza solo gli angoli abituali.',
          'Il rimodellamento avviene mentre dormi e recuperi (servono Calcio, Vitamina D3, K2, Magnesio e Proteine). Nel diabete glicemia buona + pesi rinnovano il collagene osseo evitando gli AGEs.'
        ],
        targetView: 'prevenzione_eta',
        targetSubTab: 'eta_articolazioni'
      },
      {
        id: 'today_prevenzione_sole',
        category: 'palestra_ossa',
        sectionBadge: 'Prevenzione • Sezione 7',
        badgeColor: 'lime',
        title: 'Digiuno Mattutino, Luce Solare Circadiana & Vitamina D Sicura (UVB vs UVA)',
        summary: 'Spiega il meccanismo del movimento mattutino a digiuno (lipolisi + GLUT4), l’impatto della luce naturale mattutina sugli occhi (ipRGCs -> nucleo SCN per cortisolo sveglio la mattina e melatonina profonda la sera) e la fisica dei raggi UVB (280–315 nm) vs UVA (315–400 nm) con regola dell’ombra e cofattori Magnesio + K2.',
        keyPoints: [
          'Auto-limitazione naturale della Vitamina D cutanea (lumisterolo/tachisterolo) e protezione SPF su viso/collo.'
        ],
        targetView: 'prevenzione_eta',
        targetSubTab: 'luce_vitamina_d'
      },
      {
        id: 'today_diabete_ipo_spugna',
        category: 'diabete',
        sectionBadge: 'Diabete • Nota 12 (Nuovo 19 Nov)',
        badgeColor: 'rose',
        title: 'Ipoglicemia vs Iperglicemia, "Spugna" Muscolare vs Fegato, Freni & Regola del 15',
        summary: 'Chiarisce il dubbio sulla "spugna": non sono i muscoli a tenere su la glicemia (i muscoli sono una spugna che la tira GIÙ tramite GLUT4 e insulina!), ma è il fegato (glicogenolisi + gluconeogenesi) spinto da glucagone, adrenalina, cortisolo e GH. Spiega perché nel T1D la spugna + insulina esogena attiva (IOB) può aggirare il freno naturale fino al crollo (con rischio di hypoglycemia unawareness) e come applicare la Regola del 15.',
        keyPoints: [
          'Breve termine vs Lungo termine: ipoglicemia = emergenza cerebrale immediata; iperglicemia cronica = danno lento a vasi/nervi/collagene (AGEs e stress ossidativo).',
          'Freno nel T1D: l’insulina già iniettata non si "spegne" sotto i 70 mg/dL, i pesi tengono accesi i canali GLUT4 (AMPK) e la risposta del glucagone può essere ridotta -> servono zuccheri semplici puri (Regola del 15: 15g glucosio/saccarosio, attesa 15 min, mai cioccolato/grassi in emergenza).'
        ],
        targetView: 'diabete_glicemia',
        targetSubTab: 'ipo_freni_spugna'
      },
      {
        id: 'today_sonno_2130_inerzia',
        category: 'mente_viso',
        sectionBadge: 'Sonno & Posizioni • Sezione 3 (Nuovo 19 Nov)',
        badgeColor: 'indigo',
        title: 'Dormire Alle 21:30 (9 Ore = 6 Cicli × 90 Min = 540 Min), Inerzia del Sonno & Ricostruzione',
        summary: 'Spiega perché andare a dormire alle 21:30 con sveglia alle 06:30 centra 6 cicli esatti da 90 minuti (540 min), massimizzando N3 (onde lente), GH pulsatile, sintesi proteica muscolare (MPS), recupero del sistema nervoso centrale e sensibilità insulinica — e perché svegliarsi "rincoglioniti" anche dormendo 9 ore è normale Inerzia del Sonno.',
        keyPoints: [
          'Inerzia del Sonno (15–30 min): la corteccia prefrontale impiega qualche minuto a riavviarsi e a smaltire l’adenosina residua; NON significa aver dormito male.',
          'Protocollo risveglio 10 minuti + Regola 21:30: zero snooze (frammenta il 6° ciclo), luce naturale negli occhi subito, 300–400 ml acqua e 2 minuti di movimento; anticipa alle 21:30 solo se hai sonno vero e cena finita da 2–3 ore.'
        ],
        targetView: 'sonno_posizioni',
        targetSubTab: 'scienza_cicli'
      },
      {
        id: 'today_viso_sinistra_fino_destra',
        category: 'mente_viso',
        sectionBadge: 'La mia asimmetria • Sezione 5 (Nuovo 19 Nov)',
        badgeColor: 'cyan',
        title: 'Lato Sinistro "Fino" (Più Visibile) vs Lato Destro "Meno Definito": Perché Basta Svuotare il Grasso',
        summary: 'Spiega perché a sinistra ("dove è fino") si vedono già muscoli e linea mentre a destra appare più morbido: sopra il massetere destro c’è uno strato ("cuscino") di grasso sottocutaneo e acqua extracellulare più spesso che sfuma il contorno. La chiave n° 1 è il dimagrimento sistemico (~1.600 kcal + 10.000 passi + 2,5–3 L acqua), NON masticare all’infinito.',
        keyPoints: [
          'Il muscolo sotto c’è già su entrambi i lati: se c’è spessore adiposo sopra, ipertrofizzare all’estremo non pulisce la linea e rischia solo di infiammare l’ATM.',
          'Equilibrio pratico: tieni il lavoro sui molari moderato e bilanciato senza forzare e non giudicarti allo specchio giorno per giorno (acqua e luce cambiano ogni mattina; valuta ogni 3–4 settimane).'
        ],
        targetView: 'asimmetria_grasso_viso',
        targetSubTab: 'sinistra_fino_destra'
      },
      {
        id: 'today_peli_bha_punti_neri',
        category: 'mente_viso',
        sectionBadge: 'Peli & Pelle • Parte 8 / BHA (Nuovo 19 Nov)',
        badgeColor: 'emerald',
        title: 'Punti Neri vs Filamenti Sebacei & Acido Salicilico (BHA): "Si Passa Sempre Oppure No?"',
        summary: 'Risposta netta alla tua domanda: NO, l’acido salicilico NON si passa sempre tutti i giorni né su tutto il viso! Usarlo ogni sera o post-rasatura distrugge la barriera cutanea (over-exfoliation), aumenta l’infiammazione e nel diabete rallenta la riparazione delle microlesioni. Spiega anche cosa sono i punti neri (tappo ossidato sebo+cheratina, non sporcizia) vs filamenti sebacei normali.',
        keyPoints: [
          'Protocollo esatto BHA 2%: SOLO 2–3 sere a settimana (mai consecutive all’inizio), pelle perfettamente asciutta (aspetta 10 min dopo il lavaggio), mirato su zona T/naso/mento/guance non irritate (lascia agire leave-on, ZERO su giorno di rasatura!).',
          'MAI schiacciare con le unghie o usare cerotti/strisce strappo o scrub granulosi: spingono l’infiammazione in profondità lasciando macchie (PIH); al mattino SPF obbligatorio.'
        ],
        targetView: 'peli_incarniti',
        targetSubTab: 'acne_punti_neri_bha'
      },
      {
        id: 'today_peli_latte_whey_sudore',
        category: 'mente_viso',
        sectionBadge: 'Peli & Pelle • Parte 8 / Diabete & Sudore (Nuovo 19 Nov)',
        badgeColor: 'emerald',
        title: 'Latte & Whey (250 ml + 25 g × 3 gg), IGF-1/mTORC1, Zero Fissa Sodio & Sudore vs Acne',
        summary: 'Spiega il meccanismo ormonale reale (latte/whey alzano insulina e IGF-1 attivando mTORC1 -> FoxO1 -> SREBP-1 e sebo) ma rassicura sulla tua quota reale: 250 ml di latte + 25 g di whey per 3 giorni (Mer/Gio/Ven) NON causano un disastro da soli. Chiarisce anche perché il sudore non chiude i pori (serve solo lavare dopo palestra) e perché bere 2,5–3 L di acqua batte qualsiasi ossessione sui mg di sodio.',
        keyPoints: [
          'Multifattorialità + Adolescenza: gli ormoni dei 16 anni spingono le ghiandole sebacee (si stabilizzeranno nel tempo); le leve reali restano poche e sostenibili: detersione delicata post-sudore, BHA 2–3 sere/sett, SPF e rasatura diradata.',
          'Zero "ingegnere chimico" davanti al piatto: varia le fonti (uova, carne, pesce, Parmigiano moderato) e tieni l’acqua alta invece di contare ogni granello di sale.'
        ],
        targetView: 'peli_incarniti',
        targetSubTab: 'acne_punti_neri_bha'
      },
      {
        id: 'today_palestra_pasto_tappabuchi',
        category: 'palestra_ossa',
        sectionBadge: 'Palestra & Grasso • 16# Info (Nuovo 19 Nov)',
        badgeColor: 'orange',
        title: 'Pranzo "Tappabuchi" (Fiocchi di Latte + Barretta Proteica ~300 kcal) vs Pasto Completo',
        summary: 'Risparmia ~300 kcal e ~33 g di carboidrati rispetto a un pranzo completo: fatto UNA TANTUM come soluzione d’emergenza è assolutamente neutro; trasformato in abitudine quotidiana a 16 anni (75 kg × 1,75 m) peggiora glicogeno e forza in palestra, toglie fibre/micronutrienti, porta polioli gonfianti, scatena fame accumulata la sera e riduce il margine di carboidrati pre-allenamento.',
        keyPoints: [
          'Regola pratica: usa fiocchi + barretta come jolly occasionale o spuntino, NON come sostituto fisso del pranzo vero con cereali/pasta, proteine e verdure.'
        ],
        targetView: 'palestra_grasso',
        targetSubTab: 'pasto_tappabuchi'
      }
    ];

    const countByCat = {
      mente_viso: todayUpdates.filter((u) => u.category === 'mente_viso').length,
      diabete: todayUpdates.filter((u) => u.category === 'diabete').length,
      palestra_ossa: todayUpdates.filter((u) => u.category === 'palestra_ossa').length
    };

    const filteredUpdates =
      studyTodayFilter === 'tutte'
        ? todayUpdates
        : todayUpdates.filter((u) => u.category === studyTodayFilter);

    return (
      <div className="space-y-4 pb-24 pt-1 animate-in fade-in duration-200">
        {/* Top Sticky Nav */}
        <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
          <button
            type="button"
            onClick={() => handleOpenView('list')}
            className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-amber-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tutte le Note</span>
          </button>
          <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            Da Studiare Oggi · 19 Nov
          </span>
        </div>

        {/* Hero Study Card */}
        <div className="p-5 sm:p-6 rounded-3xl glass-card border-2 border-amber-400/55 bg-gradient-to-br from-amber-950/40 via-black/90 to-cyan-950/30 space-y-3 shadow-[0_0_30px_rgba(245,158,11,0.18)]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              Sessione di Studio • 19 Novembre 2026
            </span>
            <span className="text-[11px] font-black text-amber-300 tabular-nums">
              {todayUpdates.length} Aggiornamenti di Oggi
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
            Tutte le Note Aggiunte &amp; Modificate Oggi
          </h1>

          <p className="text-xs text-gray-200 leading-relaxed font-medium">
            Qui trovi riunite in un&apos;unica pagina tutte le spiegazioni e gli aggiornamenti fatti oggi attraverso le varie sezioni (incluse ipoglicemia/spugna muscolare &amp; Regola del 15, sonno 21:30 &amp; inerzia del sonno, lato sinistro fino vs cuscino destro, punti neri &amp; acido salicilico 2–3 volte/settimana, latte/whey &amp; sudore, pranzo tappabuchi, biomeccanica pesi, leve lunghe, lavoro manuale e ossa), così puoi leggerli, ripassarli e studiarli con calma senza saltare da una cartella all&apos;altra.
          </p>

          {/* Filter Pills */}
          <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
            {[
              { id: 'tutte', label: `Tutte (${todayUpdates.length})` },
              { id: 'mente_viso', label: `Mente & Viso (${countByCat.mente_viso})` },
              { id: 'diabete', label: `Diabete (${countByCat.diabete})` },
              { id: 'palestra_ossa', label: `Palestra, Lavoro & Ossa (${countByCat.palestra_ossa})` }
            ].map((pill) => (
              <button
                key={pill.id}
                type="button"
                onClick={() => setStudyTodayFilter(pill.id as typeof studyTodayFilter)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  studyTodayFilter === pill.id
                    ? 'bg-amber-400 text-black shadow-sm'
                    : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista Unificata degli Aggiornamenti di Oggi */}
        <div className="space-y-3">
          {filteredUpdates.map((item, idx) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 rounded-3xl glass-card border border-white/15 hover:border-amber-400/50 bg-black/75 space-y-3 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center text-xs font-black tabular-nums shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300">
                    {item.sectionBadge}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenView(item.targetView, item.targetSubTab)}
                  className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-[11px] flex items-center gap-1 cursor-pointer transition-all active:scale-95 shrink-0"
                >
                  <span>Apri nella Sezione</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <h2 className="text-sm sm:text-base font-black text-white leading-snug">
                {item.title}
              </h2>

              <p className="text-xs text-gray-200 leading-relaxed">
                {item.summary}
              </p>

              <ul className="space-y-1.5 list-disc pl-5 text-[11px] text-gray-300">
                {item.keyPoints.map((pt, pIdx) => (
                  <li key={pIdx} className="leading-relaxed">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

      {/* Header & Add Button + Da Studiare Oggi */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h1 className="text-lg font-black text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-300" />
            <span>Note & Percorso</span>
          </h1>
          <p className="text-xs text-gray-400">Diario, analisi e appunti per il tuo cammino</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleOpenView('studia_oggi')}
            className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-amber-500/20 hover:bg-amber-400 hover:text-black text-amber-200 border border-amber-400/50 font-extrabold text-xs transition-all active:scale-95 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>Da Studiare Oggi (19 Nov · 20)</span>
          </button>

          <button
            type="button"
            onClick={() => setIsCreatingNote(true)}
            className="flex items-center space-x-1.5 py-2 px-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs shadow-neon transition-all active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Nuova Nota</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* RICERCA PAROLE NELLE NOTE (1° SEZIONE -> 2° SOTTO-NOTE)       */}
      {/* ------------------------------------------------------------- */}
      {(() => {
        const trimmedQuery = searchQuery.trim();
        const groupedResults = trimmedQuery ? searchNotesIndex(trimmedQuery) : [];
        const customUserMatches = trimmedQuery
          ? userNotes.filter((n) => {
              const hay = `${n.title} ${n.content} ${n.category}`.toLowerCase();
              return trimmedQuery
                .toLowerCase()
                .split(/\s+/)
                .filter(Boolean)
                .every((tok) => hay.includes(tok));
            })
          : [];

        const visibleGroups =
          selectedSearchSection === 'all'
            ? groupedResults
            : groupedResults.filter((g) => g.viewId === selectedSearchSection);

        const highlightText = (text: string, query: string) => {
          const tokens = query
            .trim()
            .split(/\s+/)
            .filter((t) => t.length > 0)
            .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
          if (tokens.length === 0) return text;
          const regex = new RegExp(`(${tokens.join('|')})`, 'gi');
          const parts = text.split(regex);
          return parts.map((part, idx) =>
            tokens.some((tok) => new RegExp(`^${tok}$`, 'i').test(part)) ? (
              <mark
                key={idx}
                className="bg-amber-400/30 text-amber-200 px-1 rounded font-extrabold border border-amber-400/40"
              >
                {part}
              </mark>
            ) : (
              <React.Fragment key={idx}>{part}</React.Fragment>
            )
          );
        };

        return (
          <div className="p-3.5 rounded-3xl bg-white/[0.03] border border-cyan-500/30 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedSearchSection('all');
                }}
                placeholder="Cerca parola nelle note (es. salicilico, insulina, nikai...)"
                className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-black/60 border border-white/15 text-white text-xs placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none min-h-[44px]"
              />
              {trimmedQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSearchSection('all');
                  }}
                  aria-label="Cancella ricerca"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {trimmedQuery && (
              <div className="space-y-3 animate-in fade-in duration-150">
                {groupedResults.length === 0 && customUserMatches.length === 0 ? (
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-center text-xs text-gray-400">
                    Nessuna nota trovata per <strong className="text-white">"{trimmedQuery}"</strong>. Prova con un'altra parola chiave.
                  </div>
                ) : (
                  <>
                    {/* STEP 1: Prima spunta le sezioni principali delle note dove compare */}
                    {groupedResults.length > 0 && (
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between px-0.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300">
                            1. Sezioni Note con "{trimmedQuery}" ({groupedResults.length})
                          </span>
                          {selectedSearchSection !== 'all' && (
                            <button
                              type="button"
                              onClick={() => setSelectedSearchSection('all')}
                              className="text-[10px] font-bold text-gray-300 hover:text-white underline cursor-pointer"
                            >
                              Mostra tutte
                            </button>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {groupedResults.map((group) => {
                            const isSelected = selectedSearchSection === group.viewId;
                            return (
                              <button
                                key={group.viewId}
                                type="button"
                                onClick={() =>
                                  setSelectedSearchSection((prev) =>
                                    prev === group.viewId ? 'all' : group.viewId
                                  )
                                }
                                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition-all cursor-pointer flex items-center gap-1.5 min-h-[38px] ${
                                  isSelected
                                    ? 'bg-cyan-400 text-black border-cyan-300 shadow-sm'
                                    : 'bg-black/60 hover:bg-white/10 text-white border-white/15'
                                }`}
                              >
                                <span>{group.sectionTitle}</span>
                                <span
                                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-black tabular-nums ${
                                    isSelected
                                      ? 'bg-black/20 text-black'
                                      : 'bg-cyan-500/20 text-cyan-300'
                                  }`}
                                >
                                  {group.subMatches.length}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Poi spunta esattamente in quali note / parti ci sono queste parole */}
                    {visibleGroups.length > 0 && (
                      <div className="space-y-2 pt-1 border-t border-white/10">
                        <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 block px-0.5">
                          2. In quali note compaiono queste parole (clicca per aprire subito)
                        </span>

                        <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                          {visibleGroups.map((group) => (
                            <div
                              key={group.viewId}
                              className="p-3 rounded-2xl bg-black/65 border border-white/10 space-y-2"
                            >
                              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                                <span className="text-xs font-black text-cyan-300">
                                  {group.sectionTitle}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleOpenView(group.viewId)}
                                  className="text-[10px] font-extrabold text-black bg-cyan-400 hover:bg-cyan-300 px-2.5 py-1 rounded-lg cursor-pointer"
                                >
                                  Apri Sezione →
                                </button>
                              </div>

                              <div className="space-y-1.5">
                                {group.subMatches.map((m) => (
                                  <button
                                    key={m.entry.id}
                                    type="button"
                                    onClick={() => handleOpenView(m.entry.viewId, m.entry.subTabId)}
                                    className="w-full text-left p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-cyan-400/40 transition-all cursor-pointer group flex items-start justify-between gap-2"
                                  >
                                    <div className="space-y-1 flex-1 min-w-0">
                                      <div className="text-xs font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                                        {highlightText(m.entry.subTitle, trimmedQuery)}
                                      </div>
                                      <p className="text-[11px] text-gray-300 leading-relaxed line-clamp-2">
                                        {highlightText(m.snippet, trimmedQuery)}
                                      </p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Note personali dell'utente corrispondenti */}
                    {customUserMatches.length > 0 && (
                      <div className="space-y-1.5 pt-1 border-t border-white/10">
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 block px-0.5">
                          Nel Tuo Diario Personale ({customUserMatches.length})
                        </span>
                        <div className="space-y-1.5">
                          {customUserMatches.map((note) => (
                            <button
                              key={note.id}
                              type="button"
                              onClick={() => setSelectedNote(note)}
                              className="w-full text-left p-2.5 rounded-xl bg-black/60 hover:bg-white/[0.07] border border-amber-500/25 flex items-center justify-between gap-2 cursor-pointer"
                            >
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-white truncate">
                                  {highlightText(note.title, trimmedQuery)}
                                </div>
                                <p className="text-[11px] text-gray-300 line-clamp-1">
                                  {highlightText(note.content, trimmedQuery)}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-amber-300 shrink-0" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        );
      })()}

      {/* ------------------------------------------------------------- */}
      {/* ACCESSO RAPIDO COMPATTO IN ALTO PER APRIRE SUBITO LE NOTE      */}
      {/* ------------------------------------------------------------- */}
      <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
        <div className="flex items-center justify-between px-0.5">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-cyan-400" />
            Accesso Rapido • Apri Subito
          </span>
          <span className="text-[10px] font-bold text-gray-500">13 Guide</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => handleOpenView('bussola_mente')}
            className="px-2.5 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-400/50 text-[11px] font-extrabold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Compass className="w-3 h-3 text-emerald-300 shrink-0" />
            <span>La Mia Bussola</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('studia_oggi')}
            className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/50 text-[11px] font-extrabold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <BookOpen className="w-3 h-3 text-amber-300 shrink-0" />
            <span>Da Studiare Oggi (19 Nov)</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('asimmetria')}
            className="px-2.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-200 border border-cyan-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Scale className="w-3 h-3 text-cyan-400 shrink-0" />
            <span>Asimmetria</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('postura_occhi')}
            className="px-2.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-200 border border-amber-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Eye className="w-3 h-3 text-amber-400 shrink-0" />
            <span>Postura & Occhi</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('sonno_posizioni')}
            className="px-2.5 py-1.5 rounded-xl bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-200 border border-indigo-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Moon className="w-3 h-3 text-indigo-400 shrink-0" />
            <span>Sonno</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('peli_incarniti')}
            className="px-2.5 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-200 border border-emerald-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Scissors className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Peli Incarniti</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('shampoo_texture')}
            className="px-2.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-200 border border-cyan-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Droplets className="w-3 h-3 text-cyan-400 shrink-0" />
            <span>Shampoo & Texture</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('capelli_texture')}
            className="px-2.5 py-1.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-200 border border-sky-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Wind className="w-3 h-3 text-sky-400 shrink-0" />
            <span>Capelli & Piega</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('capelli_mullet')}
            className="px-2.5 py-1.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 text-teal-200 border border-teal-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Wind className="w-3 h-3 text-teal-400 shrink-0" />
            <span>Textured Messy Mullet</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('palestra_grasso')}
            className="px-2.5 py-1.5 rounded-xl bg-orange-500/15 hover:bg-orange-500/25 text-orange-200 border border-orange-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Dumbbell className="w-3 h-3 text-orange-400 shrink-0" />
            <span>Palestra & Grasso</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('regali_natale')}
            className="px-2.5 py-1.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 text-teal-200 border border-teal-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Gift className="w-3 h-3 text-teal-400 shrink-0" />
            <span>Cose da Comprare</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('diabete_glicemia')}
            className="px-2.5 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-200 border border-rose-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <Activity className="w-3 h-3 text-rose-400 shrink-0" />
            <span>Diabete & Glicemia</span>
          </button>

          <button
            type="button"
            onClick={() => handleOpenView('prevenzione_eta')}
            className="px-2.5 py-1.5 rounded-xl bg-lime-500/15 hover:bg-lime-500/25 text-lime-200 border border-lime-500/30 text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
          >
            <ShieldCheck className="w-3 h-3 text-lime-400 shrink-0" />
            <span>Prevenzione Età</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CARD #1 IN ALTO: "LA MIA BUSSOLA: TRANQUILLITÀ & VERSIONE MIGLIORE" */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block pl-1">
          Priorità Assoluta • Da Aprire Quando Hai Dubbi o Paranoie
        </span>

        <div
          onClick={() => handleOpenView('bussola_mente')}
          className="p-5 rounded-3xl glass-card border-2 border-emerald-400/80 hover:border-emerald-300 bg-gradient-to-br from-emerald-500/20 via-black/85 to-cyan-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400 text-black text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  ★ La Nota Più Importante
                </span>
                <span className="text-[10px] text-emerald-200 font-bold">Pace • Anti-Paranoie • 6 Pilastri</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors uppercase tracking-tight">
                La Mia Bussola: Tranquillità &amp; Versione Migliore
              </h2>

              <p className="text-xs text-gray-200 leading-relaxed font-medium line-clamp-3">
                Obiettivo n° 1: stare sereno e in pace con te stesso e chi ami. Se già sei su questa strada e organizzato (grasso viso, asimmetria, messy wavy, acne/acqua senza fissazione sodio, 10.000 passi), sei già a posto e stai già diventando la tua versione migliore.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-500/20 group-hover:bg-emerald-500 text-emerald-300 group-hover:text-black border border-emerald-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-emerald-300 font-bold flex items-center gap-1.5">
              <span>Tocca per ritrovare calma &amp; direzione chiara</span>
              <Compass className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">Scienza Cortisolo + I 6 Pilastri Semplici</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* IL QUADRATINO CHIAVE: "LA MIA ASIMMETRIA" (RICHIESTA SPECIFICA) */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block pl-1">
          Nota Guida Fondamentale
        </span>

        <div
          onClick={() => handleOpenView('asimmetria')}
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
                Test masseteri, 2 sezioni dedicate subito in cima (Grasso Viso/Taglio Corto &amp; Info Masticazione), lipolisi viso + 13 foto e percorso ortodontico.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-cyan-500/20 group-hover:bg-cyan-500 text-cyan-300 group-hover:text-black border border-cyan-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-cyan-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire piano, 2 sotto-sezioni &amp; 13 foto</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">Scienza Viso + Nuova Sezione Grasso/Taglio + 13 Foto</span>
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
          onClick={() => handleOpenView('postura_occhi')}
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
      {/* CARD: "SONNO E POSIZIONI" (RICHIESTA SPECIFICA UTENTE)        */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block pl-1">
          Nuova Nota Personale • Riposo & Allineamento Notturno
        </span>

        <div
          onClick={() => handleOpenView('sonno_posizioni')}
          className="p-5 rounded-3xl glass-card border-2 border-indigo-400/70 hover:border-indigo-400 bg-gradient-to-br from-indigo-500/20 via-black/85 to-purple-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-400/20 text-indigo-300 text-[10px] font-black uppercase tracking-wider border border-indigo-400/40 shadow-sm flex items-center gap-1">
                  <Moon className="w-3 h-3 text-indigo-400" />
                  ★ Note Scritte Da Me
                </span>
                <span className="text-[10px] text-gray-400 font-semibold">Schiena, Fianco &amp; Cicli 21:30</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-300 transition-colors uppercase tracking-tight">
                Sonno e posizioni
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                Tecniche posturali notturne (supina &amp; fianco), federa seta e nuova 3ª sezione scientifica: dormire alle 21:30 (9 ore = 6 cicli da 90 min), Inerzia del Sonno, GH/MPS e protocollo risveglio in 10 minuti.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-indigo-500/20 group-hover:bg-indigo-500 text-indigo-300 group-hover:text-black border border-indigo-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-indigo-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire posizioni, cicli 21:30 &amp; inerzia</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">3 Sezioni: Supina + Fianco + 6 Cicli/Inerzia</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CARD: "PELI INCARNITI VISO" (RICHIESTA SPECIFICA UTENTE)     */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block pl-1">
          Nuova Nota Personale • Skincare & Rasatura Barba
        </span>

        <div
          onClick={() => handleOpenView('peli_incarniti')}
          className="p-5 rounded-3xl glass-card border-2 border-emerald-400/70 hover:border-emerald-400 bg-gradient-to-br from-emerald-500/20 via-black/85 to-teal-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-black uppercase tracking-wider border border-emerald-400/40 shadow-sm flex items-center gap-1">
                  <Scissors className="w-3 h-3 text-emerald-400" />
                  ★ Note Scritte Da Me
                </span>
                <span className="text-[10px] text-gray-400 font-semibold">8 Parti: 7 Guide + 📸 Foto Prima &amp; Dopo</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors uppercase tracking-tight">
                Peli incarniti viso
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                Massaggio mattutino, metodo diviso per zone, razor burn, <strong className="text-lime-300">protocollo 7–10 gg</strong>, <strong className="text-amber-300">Parte 8 (Punti Neri, Acido Salicilico 2–3x/sett, Latte/Whey &amp; Sudore)</strong> e 📸 Foto Prima &amp; Dopo.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-500/20 group-hover:bg-emerald-500 text-emerald-300 group-hover:text-black border border-emerald-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-emerald-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire guide, BHA, punti neri &amp; foto</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">8 Parti • Include BHA &amp; Latte/Sudore</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CARD: "GIORNI DI SHAMPOO E GIORNI TEXTURE"                    */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block pl-1">
          Nuova Nota Personale • Capelli, Scuola & Palestra
        </span>

        <div
          onClick={() => handleOpenView('shampoo_texture')}
          className="p-5 rounded-3xl glass-card border-2 border-cyan-400/70 hover:border-cyan-400 bg-gradient-to-br from-cyan-500/20 via-black/85 to-blue-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[10px] font-black uppercase tracking-wider border border-cyan-400/40 shadow-sm flex items-center gap-1">
                  <Droplets className="w-3 h-3 text-cyan-400" />
                  ★ Note Scritte Da Me
                </span>
                <span className="text-[10px] text-gray-400 font-semibold">Routine Settimanale Definitiva</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight">
                Giorni di shampoo e giorni texture
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                Tabella ciclo continuo con lavaggi mattina e sera (scuola e palestra), consiglio federa cuscino per le notti critiche e guida completa alla polverina texturizzante.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-cyan-500/20 group-hover:bg-cyan-500 text-cyan-300 group-hover:text-black border border-cyan-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-cyan-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire la routine capelli settimanale</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">Ciclo Continuo + Notti Critiche & Polverina</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CARD: "CAPELLI TEXTURE FORMA PIEGA LISCIA" (AFFIANCATA)        */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block pl-1">
          Nuova Nota Personale • Asciugatura, Verso & Piega
        </span>

        <div
          onClick={() => handleOpenView('capelli_texture')}
          className="p-5 rounded-3xl glass-card border-2 border-cyan-400/70 hover:border-cyan-400 bg-gradient-to-br from-cyan-500/20 via-black/85 to-blue-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[10px] font-black uppercase tracking-wider border border-cyan-400/40 shadow-sm flex items-center gap-1">
                  <Wind className="w-3 h-3 text-cyan-400" />
                  ★ Note Scritte Da Me
                </span>
                <span className="text-[10px] text-emerald-300 font-extrabold bg-emerald-500/15 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  📸 Progresso N° 1 (7)
                </span>
                <span className="text-[10px] text-cyan-300 font-extrabold bg-cyan-500/15 px-2 py-0.5 rounded-md border border-cyan-500/30">
                  ✨ Primo Risultato (16)
                </span>
                <span className="text-[10px] text-amber-300 font-extrabold bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/30">
                  ⚡ Progressi #2 (Tutorial)
                </span>
                <span className="text-[10px] text-sky-300 font-extrabold bg-sky-500/15 px-2 py-0.5 rounded-md border border-sky-500/30">
                  🔄 Reset Giorno Dopo
                </span>
                <span className="text-[10px] text-rose-300 font-extrabold bg-rose-500/15 px-2 py-0.5 rounded-md border border-rose-500/30">
                  ✂️ Taglio Graffiato (1 Mese)
                </span>
                <span className="text-[10px] text-teal-300 font-extrabold bg-teal-500/15 px-2 py-0.5 rounded-md border border-teal-500/30">
                  🌊 Spray Sale Marino
                </span>
                <span className="text-[10px] text-violet-300 font-extrabold bg-violet-500/15 px-2 py-0.5 rounded-md border border-violet-500/30">
                  🧪 Shampoo vs Balsamo
                </span>
                <span className="text-[10px] text-blue-300 font-extrabold bg-blue-500/15 px-2 py-0.5 rounded-md border border-blue-500/30">
                  💦 Spruzzino & Mullet
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight">
                Capelli texture forma piega liscia
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                Diagnosi Tipo 2B, gallerie Progressi (7 &amp; 16 foto), Ciuffo Graffiato, reset giorno dopo, Taglio 1 mese, Sea Salt Spray, scienza Solo Shampoo vs Balsamo e tecnica Spruzzino (saturazione interna + parte dietro mullet).
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-cyan-500/20 group-hover:bg-cyan-500 text-cyan-300 group-hover:text-black border border-cyan-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-cyan-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire nota, gallerie & novità styling</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-cyan-300 font-bold">1. Progressi → 6. Spray Sale → 7. Shampoo vs Balsamo → 8. Spruzzino</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CARD: "CAPELLI MOSSI TEXTURED MESSY MULLET" (VICINO AI CAPELLI)*/}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider block pl-1">
          Nuova Nota Personale • Mosso Naturale 2B, Barbiere &amp; 6 Video
        </span>

        <div
          onClick={() => handleOpenView('capelli_mullet')}
          className="p-5 rounded-3xl glass-card border-2 border-teal-400/70 hover:border-teal-400 bg-gradient-to-br from-teal-500/20 via-black/85 to-emerald-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-400/20 text-teal-300 text-[10px] font-black uppercase tracking-wider border border-teal-400/40 shadow-sm flex items-center gap-1">
                  <Wind className="w-3 h-3 text-teal-400" />
                  ★ Note Scritte Da Me
                </span>
                <span className="text-[10px] text-cyan-300 font-extrabold bg-cyan-500/15 px-2 py-0.5 rounded-md border border-cyan-500/30">
                  🌊 Sale, Polvere &amp; Cera Opaca
                </span>
                <span className="text-[10px] text-emerald-300 font-extrabold bg-emerald-500/15 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  ✂️ Taglio Barbiere
                </span>
                <span className="text-[10px] text-amber-300 font-extrabold bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/30">
                  🌀 Diffusore &amp; Pinza 3D
                </span>
                <span className="text-[10px] text-purple-300 font-extrabold bg-purple-500/15 px-2 py-0.5 rounded-md border border-purple-500/30">
                  🎬 6 Video TikTok
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-teal-300 transition-colors uppercase tracking-tight">
                Capelli mossi Textured Messy Mullet
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                8 punti unificati senza duplicati: fisica 2B, spessore capelli fini &amp; alimentazione, crescita &amp; chiusura &quot;buchi&quot; davanti, barbiere, prodotti &amp; tecnica ibrida, Hover Diffusing + pettine + Pantene 2-step, mattina a secco (balsamo+acqua e polvere), cute/forfora e 6 video TikTok.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-teal-500/20 group-hover:bg-teal-500 text-teal-300 group-hover:text-black border border-teal-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-teal-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire la guida Textured Messy Mullet</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">8 Punti · Spessore, Buchi, Secco &amp; Diffusore</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CARD: "PALESTRA E ORGANIZZAZIONE PER PERDERE GRASSO"          */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider block pl-1">
          Nuova Nota Personale • Allenamento & Ricomposizione Corporea
        </span>

        <div
          onClick={() => handleOpenView('palestra_grasso')}
          className="p-5 rounded-3xl glass-card border-2 border-orange-500/70 hover:border-orange-400 bg-gradient-to-br from-orange-500/20 via-black/85 to-amber-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-400/20 text-orange-300 text-[10px] font-black uppercase tracking-wider border border-orange-400/40 shadow-sm flex items-center gap-1">
                  <Dumbbell className="w-3 h-3 text-orange-400" />
                  ★ Note Scritte Da Me
                </span>
                <span className="text-[10px] text-gray-400 font-semibold">23 Pilastri • Include 13#–16# Info (Henneman, RBE, Pranzo Tappabuchi)</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-orange-300 transition-colors uppercase tracking-tight">
                Palestra e organizzazione per perdere grasso
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                Deficit 700–900 kcal, proteine/grassi, bustine, PAP, 12# Flessioni, 13# Henneman &amp; Leve, 14# Pesi+Camminata, 15# Crampi/RBE &amp; 3ª Serie, e 16# Pranzo &quot;Tappabuchi&quot; (Fiocchi + Barretta 300 kcal).
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-orange-500/20 group-hover:bg-orange-500 text-orange-300 group-hover:text-black border border-orange-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-orange-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire la guida su palestra e dimagrimento</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">23 Pilastri • Include 16# Pranzo Tappabuchi</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CARD: "COSE DA COMPRARE (I MIEI REGALI DI NATALE)"           */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block pl-1">
          Nuova Nota Personale • Wishlist & Acquisti Ufficiali
        </span>

        <div
          onClick={() => handleOpenView('regali_natale')}
          className="p-5 rounded-3xl glass-card border-2 border-emerald-500/70 hover:border-emerald-400 bg-gradient-to-br from-emerald-500/20 via-black/85 to-teal-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-black uppercase tracking-wider border border-emerald-400/40 shadow-sm flex items-center gap-1">
                  <Gift className="w-3 h-3 text-emerald-400" />
                  ★ Note Scritte Da Me
                </span>
                <span className="text-[10px] text-gray-400 font-semibold">Regali & Cura Personale</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors uppercase tracking-tight">
                Cose da comprare (i miei regali di natale)
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                I 4 regali ufficiali: Rasoio King C. Gillette + lamette platino (15 €) su Amazon, federa 100% pura seta Mulberry 22 Momme (49 €) su Offtopic, il diffusore per phon (fisica dei micro-flussi e fissaggio dei legami a idrogeno) e le gomme da masticare mewing ad alta resistenza per l'allenamento dei masseteri.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-500/20 group-hover:bg-emerald-500 text-emerald-300 group-hover:text-black border border-emerald-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-emerald-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire la lista dei 4 regali di Natale</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">Rasoio + Seta 49€ + Diffusore + Gomme Mewing</span>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------- */}
      {/* CARD: "DIABETE, GLICEMIA E PALESTRA" (RICHIESTA SPECIFICA)    */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block pl-1">
          Nuova Nota Personale • Metabolismo, Diabete & Palestra
        </span>

        <div
          onClick={() => handleOpenView('diabete_glicemia')}
          className="p-5 rounded-3xl glass-card border-2 border-rose-500/70 hover:border-rose-400 bg-gradient-to-br from-rose-500/20 via-black/85 to-red-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-yellow-400 text-black text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                  ★ IMPORTANTE: Calcolo Insulina (1:11–12 • 40–45)
                </span>
                <span className="text-[10px] text-amber-300 font-extrabold bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/30">
                  ⚡ 2: Brucia-Grassi (80-90)
                </span>
                <span className="text-[10px] text-emerald-300 font-extrabold bg-emerald-500/15 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  ☕ 3: Bustine vs Cibo Vero
                </span>
                <span className="text-[10px] text-rose-300 font-extrabold bg-rose-500/15 px-2 py-0.5 rounded-md border border-rose-500/30">
                  🔬 4: Correggi 50-60
                </span>
                <span className="text-[10px] text-purple-300 font-extrabold bg-purple-500/15 px-2 py-0.5 rounded-md border border-purple-500/30">
                  📊 5: Iperglicemia &gt;180
                </span>
                <span className="text-[10px] text-cyan-300 font-extrabold bg-cyan-500/15 px-2 py-0.5 rounded-md border border-cyan-500/30">
                  🧬 6: Variabilità & Dimagrimento
                </span>
                <span className="text-[10px] text-orange-300 font-extrabold bg-orange-500/15 px-2 py-0.5 rounded-md border border-orange-500/30">
                  🌊 7: Onda Lunga (3h • Cordon Bleu)
                </span>
                <span className="text-[10px] text-sky-300 font-extrabold bg-sky-500/15 px-2 py-0.5 rounded-md border border-sky-500/30">
                  🥤 8: Frullato &amp; 7,5 U
                </span>
                <span className="text-[10px] text-lime-300 font-extrabold bg-lime-500/15 px-2 py-0.5 rounded-md border border-lime-500/30">
                  ☀️ 9: Digiuno ~120
                </span>
                <span className="text-[10px] text-indigo-300 font-extrabold bg-indigo-500/15 px-2 py-0.5 rounded-md border border-indigo-500/30">
                  🧬 10: Proteine &amp; Finestra
                </span>
                <span className="text-[10px] text-rose-200 font-extrabold bg-rose-500/20 px-2 py-0.5 rounded-md border border-rose-400/40">
                  📌 11: Dati 19/11 &amp; Stacking
                </span>
                <span className="text-[10px] text-amber-200 font-extrabold bg-amber-500/20 px-2 py-0.5 rounded-md border border-amber-400/40">
                  🧽 12: Ipo, Freni &amp; Spugna
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-rose-300 transition-colors uppercase tracking-tight">
                Diabete, glicemia e palestra
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                ★ Calcolo Insulina + Onda Lunga 3h, Frullato 40–41g CHO, Digiuno ~120, Nota 11 (Dati 19/11 &amp; Stacking) + Nota 12: Ipoglicemia vs Iperglicemia, &quot;Spugna&quot; Muscolare, Freno Epatico &amp; Regola del 15.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-rose-500/20 group-hover:bg-rose-500 text-rose-300 group-hover:text-black border border-rose-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-rose-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire guida, calcoli e Nota 12</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">★ Calcolo Insulina + 12 Note + 5 Sezioni</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* CARD: "PREVENZIONE ETÀ E ARTICOLAZIONI" (3 NOTE)               */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-lime-400 uppercase tracking-wider block pl-1">
          Nuova Nota Personale • Longevità, Ossa, Ossigeno, Capelli, Collagene &amp; Diabete
        </span>

        <div
          onClick={() => handleOpenView('prevenzione_eta')}
          className="p-5 rounded-3xl glass-card border-2 border-lime-500/70 hover:border-lime-400 bg-gradient-to-br from-lime-500/20 via-black/85 to-emerald-500/20 shadow-neon hover:shadow-neon-lg active:scale-98 transition-all cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-lime-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div className="flex items-start justify-between relative z-10">
            <div className="space-y-2 flex-1 pr-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-lime-400/20 text-lime-300 text-[10px] font-black uppercase tracking-wider border border-lime-400/40 shadow-sm flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-lime-400" />
                  ★ Note Scritte Da Me
                </span>
                <span className="text-[10px] text-emerald-300 font-extrabold bg-emerald-500/15 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  🦴 Ossa &amp; Età
                </span>
                <span className="text-[10px] text-sky-300 font-extrabold bg-sky-500/15 px-2 py-0.5 rounded-md border border-sky-500/30">
                  🫁 Ossigeno &amp; Bici
                </span>
                <span className="text-[10px] text-teal-300 font-extrabold bg-teal-500/15 px-2 py-0.5 rounded-md border border-teal-500/30">
                  💇 Capelli
                </span>
                <span className="text-[10px] text-purple-300 font-extrabold bg-purple-500/15 px-2 py-0.5 rounded-md border border-purple-500/30">
                  🧬 Collagene &amp; Dieta
                </span>
                <span className="text-[10px] text-rose-300 font-extrabold bg-rose-500/15 px-2 py-0.5 rounded-md border border-rose-500/30">
                  🩸 Diabete
                </span>
                <span className="text-[10px] text-yellow-300 font-extrabold bg-yellow-500/15 px-2 py-0.5 rounded-md border border-yellow-500/30">
                  ☀️ Sole &amp; Vit. D
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-lime-300 transition-colors uppercase tracking-tight">
                Prevenzione età, ossa, collagene, sole &amp; diabete
              </h2>

              <p className="text-xs text-gray-300 leading-relaxed font-medium line-clamp-3">
                7 sezioni scientifiche e pratiche calibrate sul diabete: ossa (Wolff), lavoro &amp; 3 età, AGEs/GLUT4, ossigeno &amp; bici, capelli, collagene + dieta anti-AGEs, digiuno mattutino + luce circadiana &amp; Vitamina D UVB sicura.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-lime-500/20 group-hover:bg-lime-500 text-lime-300 group-hover:text-black border border-lime-400/50 shadow-neon transition-all shrink-0 mt-1">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
            <span className="text-lime-300 font-bold flex items-center gap-1.5">
              <span>Tocca per aprire le 7 sezioni complete</span>
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">Ossa • Ossigeno &amp; Bici • Collagene • Sole &amp; Vit. D</span>
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
