import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Wind,
  Droplets,
  Droplet,
  Layers,
  Flame,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Info,
  Clock,
  ShieldCheck,
  Check,
  Repeat,
  Scissors,
  Eye,
  Activity,
  Atom,
  ChevronRight,
  ChevronLeft,
  X,
  Camera,
  Maximize2,
  SlidersHorizontal,
  Sun
} from 'lucide-react';
import { scrollToTop } from '../../utils/scrollHelper';

interface CapelliTextureFormaPiegaLisciaViewProps {
  onBack: () => void;
}

export interface HairProgressPhoto {
  id: string;
  title: string;
  badge: string;
  type: 'prima' | 'dopo';
  typeLabel: string;
  desc: string;
  localUrl: string;
  url: string;
  sourceUrl: string;
}

export const HAIR_PROGRESS_PHOTOS: HairProgressPhoto[] = [
  {
    id: 'prog1_init_1',
    title: 'Mattina - Risveglio Scompigliato 1',
    badge: '1/7 • Foto Iniziale',
    type: 'prima',
    typeLabel: 'Prima • Mattina',
    desc: 'Capelli scompigliati al risveglio prima del ritocco',
    localUrl: '/uploads/progressi_capelli/114616.jpg',
    url: 'https://i.ibb.co/WWQ8jRK2/IMG-20261011-114616.jpg',
    sourceUrl: 'https://ibb.co/GvXYNrP5'
  },
  {
    id: 'prog1_init_2',
    title: 'Mattina - Risveglio Scompigliato 2',
    badge: '2/7 • Foto Iniziale',
    type: 'prima',
    typeLabel: 'Prima • Mattina',
    desc: 'Ciocche disordinate prima di inumidire e phonare',
    localUrl: '/uploads/progressi_capelli/114551.jpg',
    url: 'https://i.ibb.co/QvsZFxkg/IMG-20261011-114551.jpg',
    sourceUrl: 'https://ibb.co/YBv67VXC'
  },
  {
    id: 'prog1_res_1',
    title: 'Risultato Piega - Definizione & Volume 1',
    badge: '3/7 • Risultato',
    type: 'dopo',
    typeLabel: 'Risultato Finale',
    desc: 'Volume alle radici e ciuffo orientato in diagonale',
    localUrl: '/uploads/progressi_capelli/111858.jpg',
    url: 'https://i.ibb.co/zHWWVVmd/IMG-20261011-111858.jpg',
    sourceUrl: 'https://ibb.co/n8qqMMwp'
  },
  {
    id: 'prog1_res_2',
    title: 'Risultato Piega - Ciuffo & Direzione 2',
    badge: '4/7 • Risultato',
    type: 'dopo',
    typeLabel: 'Risultato Finale',
    desc: 'Direzione destra impostata col pettine a denti larghi',
    localUrl: '/uploads/progressi_capelli/111857.jpg',
    url: 'https://i.ibb.co/BHb9yV9k/IMG-20261011-111857.jpg',
    sourceUrl: 'https://ibb.co/j9mSyvSt'
  },
  {
    id: 'prog1_res_3',
    title: 'Risultato Piega - Radici & Separazione 3',
    badge: '5/7 • Risultato',
    type: 'dopo',
    typeLabel: 'Risultato Finale',
    desc: 'Ciocche separate senza effetto blocco rigido',
    localUrl: '/uploads/progressi_capelli/111900.jpg',
    url: 'https://i.ibb.co/mCPmR8v9/IMG-20261011-111900.jpg',
    sourceUrl: 'https://ibb.co/wN2TdsJS'
  },
  {
    id: 'prog1_res_4',
    title: 'Risultato Piega - Dettaglio Vertice & Cima 4',
    badge: '6/7 • Risultato',
    type: 'dopo',
    typeLabel: 'Risultato Finale',
    desc: 'Vertice chiuso e radice sollevata con aria fredda',
    localUrl: '/uploads/progressi_capelli/114030.jpg',
    url: 'https://i.ibb.co/SXJHkqRp/IMG-20261011-114030.jpg',
    sourceUrl: 'https://ibb.co/C5W4jxhF'
  },
  {
    id: 'prog1_res_5',
    title: 'Risultato Piega - Vista Completa Post-Ritocco 5',
    badge: '7/7 • Risultato',
    type: 'dopo',
    typeLabel: 'Risultato Finale',
    desc: 'Look pulito, dinamico e compatto completato in 1 minuto',
    localUrl: '/uploads/progressi_capelli/114036.jpg',
    url: 'https://i.ibb.co/0RtRmT0B/IMG-20261011-114036.jpg',
    sourceUrl: 'https://ibb.co/v6Y6VpNs'
  }
];

export const PRIMO_RISULTATO_PIEGA_PHOTOS: HairProgressPhoto[] = [
  {
    id: 'primo_risultato_1',
    title: 'Piega Riuscita - Vista Frontale & Ciuffo 1',
    badge: '1/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Ciuffo leggero e sollevato con orientamento diagonale verso destra',
    localUrl: '/uploads/primo_risultato_piega/piega_01.jpg',
    url: 'https://i.ibb.co/1CRFdTj/IMG-20261014-071931.jpg',
    sourceUrl: 'https://ibb.co/GZCztRN'
  },
  {
    id: 'primo_risultato_2',
    title: 'Piega Riuscita - Radici & Volume 2',
    badge: '2/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Spinta naturale alla radice senza effetto schiacciato',
    localUrl: '/uploads/primo_risultato_piega/piega_02.jpg',
    url: 'https://i.ibb.co/7tFBGgBH/IMG-20261014-071934.jpg',
    sourceUrl: 'https://ibb.co/23BRj8Rw'
  },
  {
    id: 'primo_risultato_3',
    title: 'Piega Riuscita - Texture & Separazione 3',
    badge: '3/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Ciocche definite ad onde a "S" morbide senza mazzetti compatti',
    localUrl: '/uploads/primo_risultato_piega/piega_03.jpg',
    url: 'https://i.ibb.co/7JWMGZmN/IMG-20261014-071939.jpg',
    sourceUrl: 'https://ibb.co/hRWQK4z1'
  },
  {
    id: 'primo_risultato_4',
    title: 'Piega Riuscita - Profilo Destro & Direzione 4',
    badge: '4/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Accompagnamento fluido delle lunghezze verso il lato destro',
    localUrl: '/uploads/primo_risultato_piega/piega_04.jpg',
    url: 'https://i.ibb.co/v4rDrh0C/IMG-20261014-071943.jpg',
    sourceUrl: 'https://ibb.co/gZX6Xdkb'
  },
  {
    id: 'primo_risultato_5',
    title: 'Piega Riuscita - Dettaglio Vertice & Cima 5',
    badge: '5/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Cima controllata e vertice chiuso senza aperture disordinate',
    localUrl: '/uploads/primo_risultato_piega/piega_05.jpg',
    url: 'https://i.ibb.co/nqRkf0Fz/IMG-20261014-071946.jpg',
    sourceUrl: 'https://ibb.co/0pQJZXxh'
  },
  {
    id: 'primo_risultato_6',
    title: 'Piega Riuscita - Volume & Tenuta 6',
    badge: '6/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Fissaggio con getto di aria fredda e movimento dinamico',
    localUrl: '/uploads/primo_risultato_piega/piega_06.jpg',
    url: 'https://i.ibb.co/0R02PxDC/IMG-20261014-071949.jpg',
    sourceUrl: 'https://ibb.co/mVnTQ3D9'
  },
  {
    id: 'primo_risultato_7',
    title: 'Piega Riuscita - Angolatura Frontale 7',
    badge: '7/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Separazione pulita col pettine a denti larghi',
    localUrl: '/uploads/primo_risultato_piega/piega_07.jpg',
    url: 'https://i.ibb.co/XNhzf1K/IMG-20261014-071957.jpg',
    sourceUrl: 'https://ibb.co/yGw8mtZ'
  },
  {
    id: 'primo_risultato_8',
    title: 'Piega Riuscita - Lato Sinistro Controllato 8',
    badge: '8/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Zona a rischio buchino ben schermata e fusto lucido',
    localUrl: '/uploads/primo_risultato_piega/piega_08.jpg',
    url: 'https://i.ibb.co/dw0w7JjZ/IMG-20261014-072000.jpg',
    sourceUrl: 'https://ibb.co/W4W4spGC'
  },
  {
    id: 'primo_risultato_9',
    title: 'Piega Riuscita - Definizione & Lucentezza 9',
    badge: '9/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Cuticole chiuse ed evidenza della salute della fibra Tipo 2B',
    localUrl: '/uploads/primo_risultato_piega/piega_09.jpg',
    url: 'https://i.ibb.co/JW2B6V4r/IMG-20261014-072003.jpg',
    sourceUrl: 'https://ibb.co/rKM78YS5'
  },
  {
    id: 'primo_risultato_10',
    title: 'Piega Riuscita - Prospettiva Tre Quarti 10',
    badge: '10/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Look dinamico e aerato senza polvere visibile o pesantezza',
    localUrl: '/uploads/primo_risultato_piega/piega_10.jpg',
    url: 'https://i.ibb.co/Hp3NX9rV/IMG-20261014-072005.jpg',
    sourceUrl: 'https://ibb.co/2YH85pjy'
  },
  {
    id: 'primo_risultato_11',
    title: 'Piega Riuscita - Movimento Ciocche 11',
    badge: '11/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Ciocche flessibili che tornano in posizione dopo il movimento',
    localUrl: '/uploads/primo_risultato_piega/piega_11.jpg',
    url: 'https://i.ibb.co/0zdw6XB/IMG-20261014-072013.jpg',
    sourceUrl: 'https://ibb.co/hTtq4MX'
  },
  {
    id: 'primo_risultato_12',
    title: 'Piega Riuscita - Visione d\'Insieme 12',
    badge: '12/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Piega naturale e pulita ottenuta con il protocollo rapido',
    localUrl: '/uploads/primo_risultato_piega/piega_12.jpg',
    url: 'https://i.ibb.co/pjPFshh0/IMG-20261014-072016.jpg',
    sourceUrl: 'https://ibb.co/CKtGXPP1'
  },
  {
    id: 'primo_risultato_13',
    title: 'Piega Riuscita - Post-Stabilizzazione 13',
    badge: '13/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Fusto stabilizzato dopo qualche minuto, morbidezza ideale',
    localUrl: '/uploads/primo_risultato_piega/piega_13.jpg',
    url: 'https://i.ibb.co/DH0nhv2b/20261014-072520.jpg',
    sourceUrl: 'https://ibb.co/zTqwpBv5'
  },
  {
    id: 'primo_risultato_14',
    title: 'Piega Riuscita - Angolo Laterale 14',
    badge: '14/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Definizione geometrica senza scalini né ciuffo cadente',
    localUrl: '/uploads/primo_risultato_piega/piega_14.jpg',
    url: 'https://i.ibb.co/fYwGVmHx/20261014-072522.jpg',
    sourceUrl: 'https://ibb.co/Rpw4GLcD'
  },
  {
    id: 'primo_risultato_15',
    title: 'Piega Riuscita - Zoom Radice & Ciuffo 15',
    badge: '15/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Volume continuo alla radice senza effetto piatto o finto',
    localUrl: '/uploads/primo_risultato_piega/piega_15.jpg',
    url: 'https://i.ibb.co/GvTH5vwP/20261014-072524.jpg',
    sourceUrl: 'https://ibb.co/KjwKrjZy'
  },
  {
    id: 'primo_risultato_16',
    title: 'Piega Riuscita - Risultato Finale Completo 16',
    badge: '16/16 • Risultato Piega',
    type: 'dopo',
    typeLabel: 'Risultato Ottimale',
    desc: 'Panoramica impeccabile della piega venuta bene e stabile',
    localUrl: '/uploads/primo_risultato_piega/piega_16.jpg',
    url: 'https://i.ibb.co/99JCZ294/20261014-072528.jpg',
    sourceUrl: 'https://ibb.co/ccP7Ytc8'
  }
];

export const CapelliTextureFormaPiegaLisciaView: React.FC<CapelliTextureFormaPiegaLisciaViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutta' | 'progressi' | 'progressi_2' | 'primo_risultato' | 'diagnosi' | 'regole_cima' | 'routine_4passi' | 'polverina' | 'giorno_dopo' | 'fisica'>('tutta');
  const [galleryFilter, setGalleryFilter] = useState<'tutte' | 'prima' | 'dopo'>('tutte');

  // Scroll solo all'apertura della nota (mount)
  useEffect(() => {
    scrollToTop();
  }, []);

  // Mini gallery & Fullscreen modal states
  const [activeGalleryCollection, setActiveGalleryCollection] = useState<'progressi' | 'primo_risultato'>('progressi');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [isUltraZoomOpen, setIsUltraZoomOpen] = useState<boolean>(false);

  // Swipe handling
  const touchStartX = useRef<number | null>(null);
  const [swipeOffset, setSwipeOffset] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);

  const currentGalleryPhotos = activeGalleryCollection === 'progressi'
    ? (galleryFilter === 'tutte' ? HAIR_PROGRESS_PHOTOS : HAIR_PROGRESS_PHOTOS.filter(p => p.type === galleryFilter))
    : PRIMO_RISULTATO_PIEGA_PHOTOS;

  const openProgressGallery = (idx: number) => {
    setActiveGalleryCollection('progressi');
    setActiveGalleryIndex(idx);
  };

  const openPrimoRisultatoGallery = (idx: number) => {
    setActiveGalleryCollection('primo_risultato');
    setActiveGalleryIndex(idx);
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeGalleryIndex === null) return;
    setActiveGalleryIndex((prev) => (prev! + 1) % currentGalleryPhotos.length);
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeGalleryIndex === null) return;
    setActiveGalleryIndex((prev) => (prev! === 0 ? currentGalleryPhotos.length - 1 : prev! - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
    setSwipeOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.touches[0].clientX - touchStartX.current;
    setSwipeOffset(diff);
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && activeGalleryIndex !== null) {
      if (swipeOffset < -45) {
        handleNextPhoto();
      } else if (swipeOffset > 45) {
        handlePrevPhoto();
      }
    }
    touchStartX.current = null;
    setIsSwiping(false);
    setSwipeOffset(0);
  };

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* ------------------------------------------------------------- */}
      {/* 1. MODAL ULTRA ZOOM (LIVELLO ANCORA PIÙ GRANDE A TUTTO SCHERMO) */}
      {/* ------------------------------------------------------------- */}
      {isUltraZoomOpen && activeGalleryIndex !== null && (
        <div
          onClick={() => setIsUltraZoomOpen(false)}
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-between p-3 select-none cursor-zoom-out animate-in fade-in duration-200"
        >
          <div className="w-full max-w-2xl flex items-center justify-between px-2 pt-2">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 text-xs font-black border border-cyan-500/30">
                {currentGalleryPhotos[activeGalleryIndex].badge}
              </span>
              <span className="text-xs font-bold text-white">
                {currentGalleryPhotos[activeGalleryIndex].title}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsUltraZoomOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl flex-1 flex items-center justify-center p-2 cursor-default relative"
          >
            <img
              src={currentGalleryPhotos[activeGalleryIndex].url}
              onError={(e) => {
                (e.target as HTMLImageElement).src = currentGalleryPhotos[activeGalleryIndex].localUrl;
              }}
              alt={currentGalleryPhotos[activeGalleryIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/20"
            />

            {/* Left and Right Nav in Ultra Zoom */}
            <button
              type="button"
              onClick={handlePrevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md cursor-pointer active:scale-90 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={handleNextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 backdrop-blur-md cursor-pointer active:scale-90 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="w-full max-w-md pb-2 text-center text-xs text-gray-400">
            Tocca ovunque fuori dall'immagine per chiudere lo zoom massimo
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. MINI GALLERIA INTERATTIVA CON SWIPE (LIVELLO PIÙ GRANDE)    */}
      {/* ------------------------------------------------------------- */}
      {activeGalleryIndex !== null && !isUltraZoomOpen && (
        <div
          onClick={() => setActiveGalleryIndex(null)}
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-3 select-none animate-in fade-in duration-200 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-[#101622] border-2 border-cyan-400/50 rounded-3xl p-4 shadow-2xl flex flex-col space-y-3 cursor-default relative max-h-[92vh] overflow-hidden"
          >
            {/* Header Mini Galleria */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                    currentGalleryPhotos[activeGalleryIndex].type === 'prima'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {currentGalleryPhotos[activeGalleryIndex].typeLabel}
                  </span>
                  <span className="text-[11px] font-bold text-gray-400">
                    Foto {activeGalleryIndex + 1} di {currentGalleryPhotos.length}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-white leading-tight">
                  {currentGalleryPhotos[activeGalleryIndex].title}
                </h3>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  type="button"
                  onClick={() => setIsUltraZoomOpen(true)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-cyan-300 border border-white/10 transition-all cursor-pointer active:scale-95"
                  title="Ingrandisci ancora di più a schermo intero"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveGalleryIndex(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer active:scale-95"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Immagine con Swipe e Clic per Ingrandire Ancora */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/15 bg-black cursor-grab active:cursor-grabbing select-none aspect-[3/4] max-h-[50vh] flex items-center justify-center group"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={() => setIsUltraZoomOpen(true)}
              title="Tocca per ingrandire ancora di più"
            >
              <img
                src={currentGalleryPhotos[activeGalleryIndex].url}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = currentGalleryPhotos[activeGalleryIndex].localUrl;
                }}
                alt={currentGalleryPhotos[activeGalleryIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain pointer-events-none transition-transform duration-200"
                style={{
                  transform: isSwiping ? `translateX(${swipeOffset}px)` : 'none'
                }}
              />

              {/* Bottoni Frecce per Scambiare Foto */}
              <button
                type="button"
                onClick={handlePrevPhoto}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 backdrop-blur-md cursor-pointer z-10 active:scale-90 transition-all shadow-lg"
                title="Foto Precedente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNextPhoto}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 backdrop-blur-md cursor-pointer z-10 active:scale-90 transition-all shadow-lg"
                title="Foto Successiva"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Suggerimento Zoom Massimo al centro in basso */}
              <div className="absolute bottom-2.5 left-3 right-3 py-1.5 px-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-between text-[10px] text-gray-200 pointer-events-none">
                <span className="flex items-center gap-1 font-semibold text-cyan-300">
                  <Maximize2 className="w-3 h-3" /> Tocca per zoom ultra-grande
                </span>
                <span className="text-gray-400">Swipe ◀ ▶ per cambiare</span>
              </div>
            </div>

            {/* Descrizione Foto Attiva */}
            <p className="text-[11px] text-gray-300 leading-snug px-1">
              {currentGalleryPhotos[activeGalleryIndex].desc}
            </p>

            {/* Strip di Miniature Orizzontale */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar border-t border-white/10">
              {currentGalleryPhotos.map((photo, pIdx) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActiveGalleryIndex(pIdx)}
                  className={`w-11 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer relative ${
                    activeGalleryIndex === pIdx
                      ? 'border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)] scale-105'
                      : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.url}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = photo.localUrl;
                    }}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <span className={`absolute bottom-0 inset-x-0 text-[8px] font-black text-center py-0.2 ${
                    photo.type === 'prima' ? 'bg-amber-500/80 text-black' : 'bg-emerald-500/80 text-black'
                  }`}>
                    {pIdx + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Tasti di controllo rapido in basso */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={handlePrevPhoto}
                className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-xs flex items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Precedente</span>
              </button>
              <button
                type="button"
                onClick={handleNextPhoto}
                className="py-2 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 font-bold text-xs flex items-center justify-center gap-1 transition-all active:scale-95 cursor-pointer"
              >
                <span>Successiva</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>

        {/* Tasti Rapidi nella Barra Superiore (Ordinati Cronologicamente) */}
        <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5">
          {/* 1. Tasto Diretto per i Progressi N° 1 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'progressi' ? 'tutta' : 'progressi')}
            className={`flex items-center space-x-1 py-1.5 px-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'progressi'
                ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black border-emerald-300 shadow-neon'
                : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border-emerald-500/30'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{activeTab === 'progressi' ? 'Chiudi' : 'Progressi (7)'}</span>
          </button>

          {/* 2. Tasto Diretto per Il Primo Risultato Piega Venuta Bene */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'primo_risultato' ? 'tutta' : 'primo_risultato')}
            className={`flex items-center space-x-1 py-1.5 px-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'primo_risultato'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-black border-cyan-300 shadow-neon'
                : 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border-cyan-500/30'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{activeTab === 'primo_risultato' ? 'Chiudi' : 'Primo Risultato (16)'}</span>
          </button>

          {/* 3. Tasto Diretto per Progressi #2 (Viene dopo il Primo Risultato) */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'progressi_2' ? 'tutta' : 'progressi_2')}
            className={`flex items-center space-x-1 py-1.5 px-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'progressi_2'
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-black border-amber-300 shadow-neon'
                : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/30'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>{activeTab === 'progressi_2' ? 'Chiudi' : 'Progressi #2 (Tutorial)'}</span>
          </button>

          {/* 4. Tasto Diretto per Aggiornamenti #2 (Giorno Dopo) */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'giorno_dopo' ? 'tutta' : 'giorno_dopo')}
            className={`flex items-center space-x-1 py-1.5 px-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'giorno_dopo'
                ? 'bg-gradient-to-r from-sky-400 to-indigo-400 text-black border-sky-300 shadow-neon'
                : 'bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border-sky-500/30'
            }`}
          >
            <Repeat className="w-3.5 h-3.5" />
            <span>{activeTab === 'giorno_dopo' ? 'Chiudi' : 'Aggiornamenti #2 (Giorno Dopo)'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border-2 border-cyan-400/40 relative overflow-hidden space-y-3 bg-gradient-to-br from-cyan-950/40 via-black/85 to-blue-950/30 shadow-[0_0_35px_rgba(6,182,212,0.2)]">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-black uppercase tracking-widest border border-cyan-500/40 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Guida Ufficiale di Styling & Piega
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Tipo 2B Mosso Naturale</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
          <span>Capelli texture forma piega liscia</span>
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          La sintesi completa, organizzata e priva di ripetizioni sulla struttura dei tuoi capelli: diagnosi della fibra (Tipo 2B, non crespi), correzione del verso d'asciugatura, regola del "buchino" a sinistra, routine veloce anti-separazione in 4 passi, applicazione della polverina volumizzante, riattivazione il giorno dopo e la spiegazione fisica del perché la piega migliora dopo qualche ora.
        </p>

        {/* Tasti Dedicati Espliciti (Organizzati in Sequenza Cronologica) */}
        <div className="space-y-2.5 pt-1">
          {/* Prima Riga: Progressi N° 1 e Il Primo Risultato Piega */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Tasto Progressi (N° 1) */}
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'progressi' ? 'tutta' : 'progressi')}
              className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'progressi'
                  ? 'bg-gradient-to-r from-emerald-950/80 via-teal-950/60 to-black/90 border-emerald-400 shadow-neon'
                  : 'bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-black/70 border-emerald-500/40 hover:border-emerald-400'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <Camera className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                    {activeTab === 'progressi' ? '✓ Sezione Attiva' : '1. Primo Step'}
                  </span>
                  <h4 className="text-xs font-black text-white group-hover:text-emerald-200 transition-colors">
                    Progressi N° 1
                  </h4>
                  <p className="text-[10px] text-gray-400">7 Foto (Ritocco 1 min)</p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 text-xs font-black px-2.5 py-1.5 rounded-xl shrink-0 transition-all ${
                activeTab === 'progressi'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30'
                  : 'bg-emerald-400 text-black shadow-neon'
              }`}>
                <span>{activeTab === 'progressi' ? 'Chiudi' : 'Apri'}</span>
                {activeTab === 'progressi' ? <X className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
              </div>
            </button>

            {/* Tasto Il Primo Risultato Piega Venuta Bene */}
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'primo_risultato' ? 'tutta' : 'primo_risultato')}
              className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'primo_risultato'
                  ? 'bg-gradient-to-r from-cyan-950/80 via-blue-950/60 to-black/90 border-cyan-400 shadow-neon'
                  : 'bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-black/70 border-cyan-500/40 hover:border-cyan-400'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block">
                    {activeTab === 'primo_risultato' ? '✓ Sezione Attiva' : '2. Risultato Piega'}
                  </span>
                  <h4 className="text-xs font-black text-white group-hover:text-cyan-200 transition-colors">
                    Il primo risultato piega venuta bene
                  </h4>
                  <p className="text-[10px] text-gray-400">16 Foto Caricate</p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 text-xs font-black px-2.5 py-1.5 rounded-xl shrink-0 transition-all ${
                activeTab === 'primo_risultato'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30'
                  : 'bg-gradient-to-r from-cyan-400 to-blue-400 text-black shadow-neon'
              }`}>
                <span>{activeTab === 'primo_risultato' ? 'Chiudi' : '16 Foto'}</span>
                {activeTab === 'primo_risultato' ? <X className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
              </div>
            </button>
          </div>

          {/* Sotto a Primo Risultato: Progressi #2 (Posizionato sotto per indicare che viene dopo) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'progressi_2' ? 'tutta' : 'progressi_2')}
              className={`w-full p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'progressi_2'
                  ? 'bg-gradient-to-r from-amber-950/90 via-orange-950/70 to-black/90 border-amber-400 shadow-neon ring-2 ring-amber-400/30'
                  : 'bg-gradient-to-r from-amber-950/40 via-orange-950/30 to-black/70 border-amber-500/40 hover:border-amber-400'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                      {activeTab === 'progressi_2' ? '✓ Sezione Attiva' : '3. Fase Successiva'}
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-extrabold border border-amber-500/40">
                      ↓ Viene Dopo il Primo Risultato Piega
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-amber-200 transition-colors mt-0.5">
                    Progressi #2: Tutorial Spazzola Sopra & Ciuffo Graffiato
                  </h4>
                  <p className="text-[10px] text-gray-300">
                    Tutorial Operativo Passo dopo Passo (Procedura Tecnica Definitiva)
                  </p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 text-xs font-black px-3 py-1.5 rounded-xl shrink-0 transition-all ${
                activeTab === 'progressi_2'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30'
                  : 'bg-gradient-to-r from-amber-400 to-orange-400 text-black shadow-neon'
              }`}>
                <span>{activeTab === 'progressi_2' ? 'Chiudi' : 'Apri Tutorial'}</span>
                {activeTab === 'progressi_2' ? <X className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
              </div>
            </button>
          </div>

          {/* Sotto a Progressi #2: Aggiornamenti #2 (Capelli il Giorno Dopo & Reset se Persa) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'giorno_dopo' ? 'tutta' : 'giorno_dopo')}
              className={`w-full p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'giorno_dopo'
                  ? 'bg-gradient-to-r from-sky-950/90 via-indigo-950/70 to-black/90 border-sky-400 shadow-neon ring-2 ring-sky-400/30'
                  : 'bg-gradient-to-r from-sky-950/40 via-indigo-950/30 to-black/70 border-sky-500/40 hover:border-sky-400'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <Repeat className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
                      {activeTab === 'giorno_dopo' ? '✓ Sezione Attiva' : '4. Aggiornamenti Ufficiali'}
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-300 font-extrabold border border-sky-500/40">
                      ★ Aggiornamenti #2: Capelli il Giorno Dopo
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-sky-200 transition-colors mt-0.5">
                    Il Giorno Dopo: Reset da Capo se la Piega si è Rovinata (Aggiornamenti #2)
                  </h4>
                  <p className="text-[10px] text-gray-300">
                    Procedura obbligatoria se la piega si è rovinata o dopo umidità • Ciclo Acqua &rarr; Phon Caldo &rarr; Freddo &rarr; Pettine
                  </p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 text-xs font-black px-3 py-1.5 rounded-xl shrink-0 transition-all ${
                activeTab === 'giorno_dopo'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30'
                  : 'bg-gradient-to-r from-sky-400 to-indigo-400 text-black shadow-neon'
              }`}>
                <span>{activeTab === 'giorno_dopo' ? 'Chiudi' : 'Apri'}</span>
                {activeTab === 'giorno_dopo' ? <X className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
              </div>
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('tutta')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutta'
                ? 'bg-cyan-400 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutta la Nota
          </button>

          {/* TASTO PROGRESSI RICHIESTO */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'progressi' ? 'tutta' : 'progressi')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'progressi'
                ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-black shadow-neon font-black ring-2 ring-emerald-300'
                : 'bg-emerald-500/20 text-emerald-300 hover:text-white border border-emerald-500/40'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-emerald-400" />
            <span>Progressi (N° 1)</span>
          </button>

          {/* TASTO IL PRIMO RISULTATO PIEGA VENUTA BENE (PRIMA DI PROGRESSI #2) */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'primo_risultato' ? 'tutta' : 'primo_risultato')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'primo_risultato'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-black shadow-neon font-black ring-2 ring-cyan-300'
                : 'bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Il primo risultato piega venuta bene (16)</span>
          </button>

          {/* TASTO PROGRESSI #2 (DOPO IL PRIMO RISULTATO) */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'progressi_2' ? 'tutta' : 'progressi_2')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'progressi_2'
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-black shadow-neon font-black ring-2 ring-amber-300'
                : 'bg-amber-500/20 text-amber-300 hover:text-white border border-amber-500/40'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Progressi #2 (Tutorial • Viene dopo)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('diagnosi')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'diagnosi'
                ? 'bg-cyan-400 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            1. Diagnosi Tipo 2B
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('regole_cima')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'regole_cima'
                ? 'bg-cyan-400 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            2. Buchino & Vertice
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('routine_4passi')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'routine_4passi'
                ? 'bg-cyan-400 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            3. Routine 4 Passi
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('polverina')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'polverina'
                ? 'bg-cyan-400 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            4. Polverina & Graffiato
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('giorno_dopo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'giorno_dopo'
                ? 'bg-sky-400 text-black shadow-md shadow-sky-500/30 font-extrabold'
                : 'bg-sky-500/10 text-sky-300 hover:text-white border border-sky-500/30'
            }`}
          >
            <Repeat className="w-3.5 h-3.5" />
            5. Giorno Dopo & Aggiornamenti #2
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('fisica')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'fisica'
                ? 'bg-cyan-400 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Atom className="w-3.5 h-3.5" />
            6. Fisica Ore Successive
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* SEZIONE SPECIALE: PROGRESSI (PROGRESSO NUMERO 1 & BACHECA FOTO) */}
      {/* (Visibile SOLO ed esclusivamente su click del tasto Progressi) */}
      {/* ============================================================= */}
      {activeTab === 'progressi' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Camera className="w-4 h-4 text-emerald-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Documentazione Reale • Bacheca & Galleria
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Progressi • Progresso Numero 1
                </h2>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                7 Foto Caricate
              </span>
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Torna alla Nota</span>
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-emerald-400/50 space-y-4 bg-gradient-to-br from-emerald-950/30 via-black/85 to-teal-950/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            {/* Header del Progresso N° 1 */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400 text-black text-[10px] font-black uppercase tracking-wider">
                  Progresso N° 1
                </span>
                <span className="text-xs font-bold text-emerald-300">
                  Risultato Testato & Replicabile
                </span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Ecco la nota finale salvata e pronta per i tuoi promemoria. C'è dentro tutto il procedimento perfetto che hai testato e che ti ha dato quel risultato pazzesco:
              </p>
            </div>

            {/* CARD: PROTOCOLLO DI RITOCCO MATTUTINO (RISVEGLIO) */}
            <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/30 space-y-3">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300">
                  <Clock className="w-4 h-4" />
                </span>
                <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight">
                  📝 Nota: Protocollo di Ritocco Mattutino (Risveglio)
                </h3>
              </div>

              <div className="space-y-2.5 text-xs">
                {/* Punto 1 */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-xs">Inumidire le mani</h5>
                    <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                      Bagnare leggermente i palmi con pochissima acqua.
                    </p>
                  </div>
                </div>

                {/* Punto 2 */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-xs">Attivazione delle radici</h5>
                    <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                      Passare le mani umide direttamente alla base e sul ciuffo, indirizzando e spingendo le radici in diagonale verso il lato destro.
                    </p>
                  </div>
                </div>

                {/* Punto 3 */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">
                    3
                  </span>
                  <div className="space-y-1">
                    <h5 className="font-bold text-white text-xs">Asciugatura con phon (Caldo + Freddo)</h5>
                    <ul className="text-[11px] text-gray-300 leading-relaxed space-y-1 pl-1">
                      <li className="flex items-start gap-1.5">
                        <span className="text-cyan-400">•</span>
                        <span>Usare il phon con il beccuccio.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-cyan-400">•</span>
                        <span>Dare una passata di aria calda concentrata prima sulle radici per ridare volume e sollevamento, e poi accompagnando le lunghezze verso destra.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-cyan-400">•</span>
                        <span>Chiudere sempre con qualche secondo di aria fredda per bloccare la forma e fissare il volume.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Punto 4 */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-xs">Finitura con il pettine a denti larghi</h5>
                    <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                      Usare il pettine a denti larghi nell'ultima fase per separare le ciocche e dare quel look dinamico e pulito, senza appiattire il tutto in un blocco unico.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conclusione incoraggiante */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200">
                ✨ <strong>Hai fatto un lavoro eccezionale:</strong> questo schema è perfetto da replicare ogni mattina per avere sempre i capelli al top in un minuto!
              </div>
            </div>

            {/* ========================================================= */}
            {/* LA BACHECA FOTO: PRIMA (MATTINA) VS RISULTATO (DOPO)      */}
            {/* ========================================================= */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2">
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5">
                    <span>Bacheca Foto del Ritocco</span>
                    <span className="text-[10px] font-bold text-gray-400">(Tocca per aprire la galleria)</span>
                  </h4>
                  <p className="text-[10px] text-gray-400">
                    2 foto iniziali scompigliate della mattina e 5 foto del risultato finale
                  </p>
                </div>

                {/* Filtro bacheca */}
                <div className="flex bg-black/60 p-1 rounded-xl border border-white/10 text-[10px] space-x-1 self-start sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setGalleryFilter('tutte')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      galleryFilter === 'tutte'
                        ? 'bg-cyan-400 text-black font-black'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Tutte (7)
                  </button>
                  <button
                    type="button"
                    onClick={() => setGalleryFilter('prima')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      galleryFilter === 'prima'
                        ? 'bg-amber-400 text-black font-black'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Mattina (2)
                  </button>
                  <button
                    type="button"
                    onClick={() => setGalleryFilter('dopo')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      galleryFilter === 'dopo'
                        ? 'bg-emerald-400 text-black font-black'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Risultato (5)
                  </button>
                </div>
              </div>

              {/* 1. SEZIONE FOTO INIZIALI (SCOMPIGLIATI AL RISVEGLIO) */}
              {(galleryFilter === 'tutte' || galleryFilter === 'prima') && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 pl-1">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                      Foto Iniziali • Risveglio Mattutino (Capelli Scompigliati)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {HAIR_PROGRESS_PHOTOS.filter(p => p.type === 'prima').map((photo) => {
                      const photoIndex = HAIR_PROGRESS_PHOTOS.findIndex(p => p.id === photo.id);
                      return (
                        <div
                          key={photo.id}
                          onClick={() => openProgressGallery(photoIndex)}
                          className="group relative rounded-2xl overflow-hidden border-2 border-amber-500/40 hover:border-amber-400 bg-black cursor-pointer aspect-[3/4] shadow-md transition-all active:scale-[0.98]"
                        >
                          <img
                            src={photo.url}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = photo.localUrl;
                            }}
                            alt={photo.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 left-2">
                            <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-amber-950/90 text-amber-300 border border-amber-400/50 backdrop-blur-md shadow-sm">
                              {photo.badge}
                            </span>
                          </div>
                          <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 text-left">
                            <span className="text-[10px] font-bold text-white block line-clamp-1">
                              {photo.title}
                            </span>
                            <span className="text-[9px] text-amber-300 font-medium">Tocca per galleria</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 2. SEZIONE FOTO RISULTATO (POST-RITOCCO FINALE) */}
              {(galleryFilter === 'tutte' || galleryFilter === 'dopo') && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center space-x-2 pl-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300">
                      Foto Risultato • Post-Ritocco (Volume, Direzione & Look Pulito)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {HAIR_PROGRESS_PHOTOS.filter(p => p.type === 'dopo').map((photo) => {
                      const photoIndex = HAIR_PROGRESS_PHOTOS.findIndex(p => p.id === photo.id);
                      return (
                        <div
                          key={photo.id}
                          onClick={() => openProgressGallery(photoIndex)}
                          className="group relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 hover:border-emerald-300 bg-black cursor-pointer aspect-[3/4] shadow-md transition-all active:scale-[0.98]"
                        >
                          <img
                            src={photo.url}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = photo.localUrl;
                            }}
                            alt={photo.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 left-2">
                            <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-emerald-950/90 text-emerald-300 border border-emerald-400/50 backdrop-blur-md shadow-sm">
                              {photo.badge}
                            </span>
                          </div>
                          <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 text-left">
                            <span className="text-[10px] font-bold text-white block line-clamp-1">
                              {photo.title}
                            </span>
                            <span className="text-[9px] text-emerald-300 font-medium">Tocca per galleria</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Hint interazione galleria */}
              <div className="p-3 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-between text-[11px] text-gray-300">
                <span className="flex items-center gap-1.5 font-bold text-cyan-300">
                  <Eye className="w-4 h-4" />
                  Mini Galleria Interattiva
                </span>
                <span className="text-[10px] text-gray-400">
                  Tocca una foto per ingrandirla, fare swipe o zoom massimo
                </span>
              </div>

              {/* Tasto Chiudi Progressi e Torna alla Nota */}
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('tutta')}
                  className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Chiudi Progressi e Torna alla Nota Completa</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE: IL PRIMO RISULTATO PIEGA VENUTA BENE (16 FOTO)       */}
      {/* (Visibile SOLO ed esclusivamente su click del tasto dedicato)  */}
      {/* ============================================================= */}
      {activeTab === 'primo_risultato' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  Documentazione Reale • Bacheca 16 Foto
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Il primo risultato piega venuta bene
                </h2>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                16 Foto Caricate
              </span>
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Torna alla Nota</span>
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-cyan-400/50 space-y-4 bg-gradient-to-br from-cyan-950/30 via-black/85 to-blue-950/30 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
            {/* Header del Risultato */}
            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-400 text-black text-[10px] font-black uppercase tracking-wider">
                  ★ Primo Risultato Piega
                </span>
                <span className="text-xs font-bold text-cyan-300">
                  Risultato Testato & Confermato
                </span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Ecco la bacheca completa del <strong>primo risultato piega venuta bene</strong>. La documentazione fotografica ad alta definizione mostra la perfetta tenuta del volume alla radice, il ciuffo orientato diagonalmente a destra, onde Tipo 2B soffici e separate e l'assenza totale di mazzetti rigidi o buchini.
              </p>
            </div>

            {/* Hint e istruzioni interazione */}
            <div className="p-3 rounded-2xl bg-black/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-gray-300">
              <span className="flex items-center gap-1.5 font-bold text-cyan-300">
                <Eye className="w-4 h-4 text-cyan-400" />
                Bacheca 16 Foto (Miniature)
              </span>
              <span className="text-[10px] text-gray-400">
                Tocca una foto per aprire la mini galleria con swipe, frecce e zoom a schermo intero
              </span>
            </div>

            {/* Griglia Bacheca delle 16 Foto */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {PRIMO_RISULTATO_PIEGA_PHOTOS.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => openPrimoRisultatoGallery(idx)}
                  className="group relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-400 bg-black cursor-pointer aspect-[3/4] shadow-md transition-all active:scale-[0.98]"
                >
                  <img
                    src={photo.url}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = photo.localUrl;
                    }}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[9px] font-black px-2 py-0.5 rounded-md bg-cyan-950/90 text-cyan-300 border border-cyan-400/50 backdrop-blur-md shadow-sm">
                      {photo.badge}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 text-left">
                    <span className="text-[10px] font-bold text-white block line-clamp-1">
                      {photo.title}
                    </span>
                    <span className="text-[9px] text-cyan-300 font-medium">Tocca per galleria</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tasto Chiudi e Torna alla Nota */}
            <div className="pt-2 flex justify-center">
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Chiudi e Torna alla Nota Completa</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE: PROGRESSI #2 (SPAZZOLA SOPRA & CIUFFO GRAFFIATO)      */}
      {/* (Visibile SOLO ed esclusivamente su click del tasto Progressi #2) */}
      {/* ============================================================= */}
      {activeTab === 'progressi_2' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Zap className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Progresso & Tecnica • Sezione Dedicata
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Progressi #2: Spazzola Sopra & Ciuffo Graffiato
                </h2>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Tutorial Step by Step
              </span>
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Torna alla Nota</span>
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-amber-400/50 space-y-5 bg-gradient-to-br from-amber-950/30 via-black/85 to-orange-950/30 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
            {/* Box Rassicurazione & Focus Mentale (Sintetico) */}
            <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-black uppercase tracking-wider">
                  ★ Protocollo Definitivo
                </span>
                <span className="text-xs font-bold text-amber-300">
                  Cross-Wrapping 100% • Spazzola Sopra • Segreto Graffiato
                </span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Hai capito un punto fondamentale: <strong>pettinare i capelli nella direzione giusta subito dopo il cross-wrapping e prima di passare alla spazzola tonda</strong> è il trucco che ti ha evitato quella ciocca che cadeva verso il basso come nelle prime foto! Ecco la sequenza tutorial completa e integrata: dal perfezionamento del cross-wrapping fino al trucco per far uscire le scanalature graffiate sopra a phon spento.
              </p>
            </div>

            {/* ======================================================== */}
            {/* 🚿 IL TUTORIAL DEFINITIVO PASSO DOPO PASSO (STEP BY STEP) */}
            {/* ======================================================== */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center space-x-2 border-b border-amber-500/30 pb-1.5">
                <span className="p-1 rounded-lg bg-orange-500/20 text-orange-300">
                  <Flame className="w-4 h-4" />
                </span>
                <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span>🚿 Il Tutorial Definitivo: Il Ciuffo Graffiato (Tutti i Passaggi Integrati)</span>
                </h3>
              </div>

              <div className="space-y-2.5">
                {/* Step 1: Cross-Wrapping 100% */}
                <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 flex items-start space-x-3 group hover:border-amber-400/50 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 font-black text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-white">Cross-Wrapping Perfetto al 100% (Dita a Rastrello & Aria alle Radici)</h4>
                      <span className="text-[10px] text-amber-400 font-bold">Base Volume</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Non usare spazzole in questa fase: infila le <strong>5 dita della mano libera direttamente nella cute</strong>, a ridosso delle radici.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] pt-0.5">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-200">
                        <strong className="text-amber-300 block mb-0.5">Movimento Destra ↔ Sinistra (5 sec):</strong>
                        Spingi tutta la massa da sinistra verso destra asciugando la radice col phon per 5s; poi inverti subito e spingi tutto da destra verso sinistra per altri 5s.
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-200">
                        <strong className="text-cyan-300 block mb-0.5">Aria SOLO sulle Radici:</strong>
                        Il phon deve scaldare la base del capello (non le punte!), perché è lì che devi azzerare la riga e creare il volume iniziale.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Il Trucco Chiave Pre-Spazzola */}
                <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-400/60 flex items-start space-x-3 group shadow-md">
                  <div className="p-2 rounded-xl bg-amber-400 text-black font-black text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-amber-300">Il Passaggio Chiave: Pettinata Direzionale a Destra all'80%</h4>
                      <span className="text-[10px] text-amber-300 font-black uppercase">Segreto Anti-Caduta</span>
                    </div>
                    <p className="text-[11px] text-gray-200 leading-relaxed">
                      Quando senti le <strong>radici asciutte all'80%</strong>, fermati subito col cross-wrapping. Prendi il <strong>pettine a denti larghi</strong> e dai un'unica pettinata generale guidando tutto il ciuffo in diagonale verso destra prima ancora di prendere la spazzola tonda!
                    </p>
                    <div className="p-2 rounded-xl bg-black/50 border border-amber-500/30 text-[10px] text-amber-200">
                      ★ <em>È questo il trucco fondamentale che fa memorizzare ai capelli la direzione verso destra ed evita che la ciocca ricada in basso o in avanti sulla fronte come nelle prime foto scompigliate.</em>
                    </div>
                  </div>
                </div>

                {/* Step 3: Sezionamento */}
                <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 flex items-start space-x-3 group hover:border-amber-400/50 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 font-black text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-white">Isola la Prima Sezione del Ciuffo Anteriore (2-3 Micro-Ciocche)</h4>
                      <span className="text-[10px] text-amber-400 font-bold">Micro-Sezione</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Non prendere mai tutto il ciuffo davanti in blocco (creerebbe una massa rigida e appiattita). Con due dita solleva solo la prima porzione centrale (spessore di circa 2 cm), lasciando i lati per dopo.
                    </p>
                  </div>
                </div>

                {/* Step 4: Spazzola DA SOPRA */}
                <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 flex items-start space-x-3 group hover:border-amber-400/50 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 font-black text-xs shrink-0 mt-0.5">
                    04
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-white">Posiziona la Spazzolina Tonda "DA SOPRA" (Modalità Definitiva)</h4>
                      <span className="text-[10px] text-amber-300 font-bold">Ergonomia</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Appoggia la spazzola rotonda <strong>sopra</strong> la ciocca, facendola aderire proprio sopra la radice. Le setole agganciano i capelli dall'alto: hai il controllo visivo totale allo specchio e il polso non si affatica rispetto alla scomoda presa da sotto.
                    </p>
                  </div>
                </div>

                {/* Step 5: Trazione & No Lisciatura Eccessiva */}
                <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 flex items-start space-x-3 group hover:border-amber-400/50 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 font-black text-xs shrink-0 mt-0.5">
                    05
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-white">Trazione in Alto & Rotazione a Destra (Senza Lisciare Troppo!)</h4>
                      <span className="text-[10px] text-cyan-400 font-bold">Volume + Direzione</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Solleva leggermente la spazzola verso l'alto (per staccare la radice dalla testa) e falla ruotare dolcemente guidando la ciocca in diagonale verso destra.
                    </p>
                    <div className="p-2 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-[10px] text-cyan-200">
                      <strong>Regola d'oro:</strong> La spazzola tonda serve SOLO a dare la direzione destra e togliere il crespo. NON continuare a lisciare finché è del tutto asciutta, altrimenti le setole uniscono tutti i capelli in una massa piatta!
                    </div>
                  </div>
                </div>

                {/* Step 6: Flusso Caldo col Beccuccio */}
                <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 flex items-start space-x-3 group hover:border-amber-400/50 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 font-black text-xs shrink-0 mt-0.5">
                    06
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-white">Flusso Caldo col Beccuccio Parallelo Radice-Punte</h4>
                      <span className="text-[10px] text-amber-400 font-bold">Aria Continua</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Tieni il phon con il beccuccio piatto a circa 2 cm dalla spazzola, inclinato verso il basso e a destra. Segui il movimento della spazzola che scorre fino alle punte senza soste a metà fusto.
                    </p>
                  </div>
                </div>

                {/* Step 7: Cool Shot 3 Secondi */}
                <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 flex items-start space-x-3 group shadow-sm">
                  <div className="p-2 rounded-xl bg-cyan-400 text-black font-black text-xs shrink-0 mt-0.5">
                    07
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-cyan-300">Il Sigillo Termico Freddo (3 Secondi a Spazzola Ferma)</h4>
                      <span className="text-[10px] text-cyan-300 font-black uppercase">Blocco Piega</span>
                    </div>
                    <p className="text-[11px] text-gray-200 leading-relaxed">
                      Arrivato alle punte con la ciocca curvata verso destra, <strong>blocca il movimento della spazzola</strong> e premi immediatamente il tasto dell'aria fredda per 3 secondi contati. Solo ora sfila la spazzola verso destra.
                    </p>
                  </div>
                </div>

                {/* Step 8: Replica sulle altre ciocche */}
                <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 flex items-start space-x-3 group hover:border-amber-400/50 transition-colors">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 font-black text-xs shrink-0 mt-0.5">
                    08
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-white">Ripeti sulle Altre 1 o 2 Micro-Ciocche del Davanti</h4>
                      <span className="text-[10px] text-amber-400 font-bold">Completamento</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Esegui la stessa sequenza rapida (spazzola sopra, trazione alta, rotazione destra, flusso caldo e 3s freddo) sulle sezioni laterali del ciuffo. Il davanti sarà perfettamente asciutto e orientato.
                    </p>
                  </div>
                </div>

                {/* Step 9: 💡 Il Segreto del Graffiato a Phon Spento */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-teal-950/50 to-black/80 border-2 border-emerald-400/60 flex items-start space-x-3 group shadow-lg">
                  <div className="p-2.5 rounded-xl bg-emerald-400 text-black font-black text-sm shrink-0 mt-0.5 shadow-neon">
                    09
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-black text-emerald-300">
                        💡 Il Segreto del Graffiato Sopra: Separazione a Secco a Phon Spento
                      </h4>
                      <span className="text-[10px] text-emerald-300 font-black uppercase tracking-wider bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/40">
                        Look Definitivo
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-200 leading-relaxed">
                      La piega è venuta benissimo come direzione e altezza della radice. <strong>Perché il graffiato sopra non usciva?</strong> Perché la spazzola tonda liscia e unisce tutti i capelli in una massa compatta. Il look graffiato NON lo fa la spazzola: <strong>nasce solo dopo, a phon spento</strong>!
                    </p>
                    
                    <div className="space-y-1.5 p-3 rounded-xl bg-black/60 border border-emerald-500/30 text-[11px] text-gray-200">
                      <strong className="text-emerald-300 block text-xs">Cosa fare appena spegni il phon:</strong>
                      <ul className="space-y-1 pl-1">
                        <li className="flex items-start gap-1.5">
                          <span className="text-red-400 font-bold">✗</span>
                          <span><strong>Non toccare più la spazzola tonda</strong> né spazzole piatte.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>Prendi il <strong>pettine a denti larghi</strong>.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>Infila i denti del pettine <strong>in profondità nel ciuffo sopra</strong> e tiralo verso destra con <strong>dei colpi decisi</strong>.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-bold">✓</span>
                          <span>I denti larghi divideranno istantaneamente la massa compatta in <strong>4 o 5 "scanalature" ben definite</strong>: è esattamente da qui che nasce l'effetto graffiato pulito e arioso!</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="text-cyan-300 font-bold">★</span>
                          <span><em>Perché sui capelli 2B serve il tocco texturizzante:</em> I capelli puliti tendono ad aggregarsi di nuovo tra loro. Una spolverata di <strong>polvere volumizzante</strong> alle radici o spray al sale prima di passare il pettine a denti larghi "blocca" la separazione e impedisce alle ciocche di tornare una massa unica durante il giorno.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sintesi Rapida & Regole d'Oro */}
            <div className="p-3.5 rounded-2xl bg-black/80 border border-white/15 space-y-2">
              <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Riepilogo Veloce: I 3 Errori che Impediscono il Graffiato
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 space-y-1">
                  <span className="font-bold block text-amber-300">1. Lisciare troppo a lungo</span>
                  <p className="text-[10px] text-gray-300 leading-tight">
                    Se continui a spazzolare con phon finché è asciutto, le setole compattano tutti i capelli in un blocco unico.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 space-y-1">
                  <span className="font-bold block text-cyan-300">2. Mancata apertura a secco</span>
                  <p className="text-[10px] text-gray-300 leading-tight">
                    La spazzola tonda dà solo direzione e toglie crespo; il graffiato lo crea il pettine largo a phon spento.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 space-y-1">
                  <span className="font-bold block text-emerald-300">3. Aggregazione Tipo 2B</span>
                  <p className="text-[10px] text-gray-300 leading-tight">
                    I capelli 2B puliti tendono a riunirsi: il colpo deciso di pettine largo e la polverina li mantengono separati in scanalature.
                  </p>
                </div>
              </div>
            </div>

            {/* Tasto Chiudi Progressi #2 e Torna alla Nota */}
            <div className="pt-2 flex justify-center">
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Chiudi Progressi #2 e Torna alla Nota Completa</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 1: DIAGNOSI DELLA FIBRA (TIPO 2B vs CRESPO REALE)     */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'diagnosi') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  Struttura del Capello • Sezione 1
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  1. Diagnosi Reale: Tipo 2B (Mossi) e Non Crespi
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Verdetto Fibra
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/30 space-y-4 bg-black/75">
            {/* Box Materia Prima */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-black/70 border border-emerald-500/30 space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                La Materia Prima è Ottima
              </span>
              <p className="text-xs text-gray-200 leading-relaxed">
                I capelli sono <strong>folti, sani, con lucentezza naturale e fibra compatta</strong>. La forma a cascata da bagnati rivela una porosità media con evidenti curve ad ampia <strong className="text-cyan-300">"S"</strong> (Tipo 2B della classificazione internazionale). Non cadono a spaghetti lisci (Tipo 1A), ma mostrano una tendenza elastica all'ondulazione naturale.
              </p>
            </div>

            {/* Confronto Crespo Vero vs Situazione Reale */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  Come si Riconosce il Vero Crespo (Assente)
                </span>
                <ul className="space-y-1.5 text-[11px] text-gray-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Aureola di spilli:</strong> miriade di capellini elettrizzati che si staccano in alto come antenne.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Tatto ruvido:</strong> superficie secca come paglia e priva di ogni riflesso luminoso.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Reazione umidità:</strong> raddoppiano istantaneamente diventando un palloncino informe.</span>
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Cosa Succedeva Realmente (Errore di Asciugatura)
                </span>
                <ul className="space-y-1.5 text-[11px] text-gray-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>Aria diretta verso il basso:</strong> sparare il phon dall'alto verso il basso schiaccia le radici ma spettina le cuticole in micro-ciocche disordinate.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>I "Mazzetti" rigidi:</strong> azzerata la spinta alla base, il ciuffo cade in avanti come un blocco unico e pesante anziché rimanere aperto e soffice.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span><strong>Conclusione:</strong> non è un difetto del capello, è solo una texture mossa piegata di fretta senza sostegno alla radice.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 2: IL BUCHINO A SINISTRA & LA CIMA (VERTICE)          */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'regole_cima') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Biomeccanica della Piega • Sezione 2
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  2. Regola del "Buchino" a Sinistra & Controllo del Vertice
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              Regola Aurea
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-amber-500/40 space-y-4 bg-gradient-to-br from-amber-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(245,158,11,0.15)]">
            {/* Box Fondamentale: Il Lato Sinistro NON va gonfiato */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <h3 className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-tight">
                  Regola Chiave: A Sinistra NON Gonfiare Verso L'Alto!
                </h3>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Se sollevi e gonfi la radice anche sul lato sinistro (da cui parte il ciuffo), crei un <strong>arco esagerato</strong> che spinge i capelli in su lasciando uno spazio vuoto scoperto sulla fronte (il famigerato "buchino").
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                <div className="p-3 rounded-xl bg-black/60 border border-red-500/30 space-y-1">
                  <strong className="text-red-400 font-bold block flex items-center gap-1">
                    <X className="w-3.5 h-3.5 text-red-400" />
                    Lato Sinistro (Attaccatura Ciuffo):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Va tenuto <strong>basso, piatto e aderente</strong>. Quando appoggi la spazzola piatta a sinistra, fai una leggera pressione verso il basso e direzionala subito in diagonale verso destra. In questo modo chiudi lo spazio vuoto e la base rimane compatta.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/30 space-y-1">
                  <strong className="text-emerald-300 font-bold block flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Centro & Destra (Corpo del Ciuffo):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Qui invece puoi sollevare e gonfiare liberamente le radici per dare tutto il volume, l'altezza e il sostegno necessario senza rischiare alcun buco.
                  </p>
                </div>
              </div>
            </div>

            {/* Perché i capelli sulla cima cadevano dritti */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5 text-xs">
              <h4 className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                Perché i capelli sulla cima si aprivano a metà?
              </h4>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                La radice ha una <strong>memoria</strong> e sulla parte alta (vertice) la gravità è massima. Se ti limiti a spingere le lunghezze di lato ma lasci le radici della cima asciugarsi senza tensione dal calore, la loro tendenza ad onda a "S" le farà collassare dritte verso il basso, separando il ciuffo in due.
              </p>
              <p className="text-[11px] text-cyan-300 font-semibold bg-cyan-950/40 p-2.5 rounded-xl border border-cyan-500/20">
                💡 <strong>Soluzione:</strong> La tecnica del <em>Cross-Wrapping</em> (sinistra e destra alternate con phon caldo) resetta la memoria della radice prima di impostare la diagonale definitiva.
              </p>
            </div>

            {/* La Pace del Mosso Strutturato */}
            <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-xs space-y-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> La Svolta: La "Pace" del Mosso Strutturato
              </span>
              <p className="text-[11px] text-gray-200 leading-relaxed">
                I tuoi capelli non sono Tipo 1A (lisci spaghetto). Smettere di forzarli ad essere ultra-lisci e graffiati a forza di calore estremo toglie ogni frustrazione. Lavora con la loro onda naturale: <strong>volume alla base, direzione in diagonale morbida e texture organizzata</strong>. Il risultato è molto più pulito, maschile e coerente con la tua fisionomia.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 3: PROTOCOLLO DI ASCIUGATURA (ROUTINE 4 PASSI)        */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'routine_4passi') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Clock className="w-4 h-4 text-emerald-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Guida Pratica Mattutina • Sezione 3
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  3. Protocollo di Asciugatura Anti-Separazione in 4 Passi
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              Veloce & Efficace
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-emerald-500/40 space-y-4 bg-gradient-to-br from-emerald-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(16,185,129,0.15)]">
            {/* Pre-Styling a Capello Bagnato */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                🚿 La Regola del "Pre-Styling" a Capello Bagnato
              </span>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Il capello fissa la forma mentre evapora l'acqua. Se esci dalla doccia, lo lasci cadere bagnato in avanti e ci spari il phon sopra, si fisserà piatto.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                  <strong className="text-white block">1. Balsamo solo sulle punte:</strong>
                  <span className="text-gray-300">Chiude le scaglie in doccia così le ciocche scivolano senza incastrarsi in mazzetti rigidi.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                  <strong className="text-white block">2. Tampona e imposta la direzione:</strong>
                  <span className="text-gray-300">Tampona senza strofinare. Con le dita bagnate spingi già le ciocche verso l'alto e di lato.</span>
                </div>
              </div>
            </div>

            {/* I 4 Passi della Routine */}
            <div className="space-y-2.5 text-xs">
              {/* Passo 1 */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-black text-xs text-white">
                    <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-[10px]">1</span>
                    Impostazione Volumi alla Base (Capelli Molto Umidi • 30-45s)
                  </span>
                  <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-500/30">
                    Vel. Max • Temp. Media
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed pl-7">
                  Mettiti a testa in giù oppure infila le dita sotto le radici e sollevale decisamente verso l'alto. Asciuga solo le radici. Questo gonfia la base prima che si schiacci. Ricorda: <strong>gonfia centro e destra, tieni controllata la radice sinistra</strong> per non creare il buchino.
                </p>
              </div>

              {/* Passo 2 */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-black text-xs text-white">
                    <span className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center text-[10px]">2</span>
                    Reset della Cima & Cross-Wrapping (Capelli Umidi)
                  </span>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-500/30">
                    Vel. Media • Temp. Alta (Beccuccio)
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed pl-7">
                  Torna dritto. Identifica l'area della cima (vertice) che tende ad aprirsi. Con le dita come un rastrello, sposta tutti i capelli della parte superiore <strong>prima a sinistra, poi a destra</strong>, ripetendo il movimento per 3-4 volte con il phon caldo vicino. Questo "confonde" la memoria dell'onda e azzera la caduta dritta verso il basso.
                </p>
              </div>

              {/* Passo 3 */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-black text-xs text-white">
                    <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-[10px]">3</span>
                    Modellatura in Diagonale con Spazzola Piatta (Capelli Quasi Asciutti)
                  </span>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    Spazzola Piatta • Flusso dall'Alto
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed pl-7">
                  Appoggia la spazzola piatta sopra i capelli della cima e accompagnali in diagonale verso il lato destro. Il phon segue la spazzola soffiando dall'alto verso il basso con leggera tensione meccanica. Sul lato sinistro (inizio ciuffo), tieni la spazzola aderente e piatta verso il basso/destra per chiudere l'attaccatura ed eliminare ogni spazio vuoto.
                </p>
              </div>

              {/* Passo 4 */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-black text-xs text-white">
                    <span className="w-5 h-5 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center text-[10px]">4</span>
                    Fissaggio a Freddo (Capelli Asciutti • 15-20s)
                  </span>
                  <span className="text-[10px] font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded-md border border-sky-500/30">
                    Aria Fredda
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed pl-7">
                  Premi il pulsante dell'aria fredda e passalo su tutto il ciuffo tenendolo in piega con le dita o la spazzola. Il freddo fissa istantaneamente i legami di idrogeno nella posizione raggiunta, blocca la radice sollevata ed elimina l'elettricità statica.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 4: STYLING POLVERINA & EFFETTO GRAFFIATO              */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'polverina') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Zap className="w-4 h-4 text-purple-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  Texture & Definizione • Sezione 4
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  4. Polverina Volumizzante & Effetto "Graffiato"
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
              Texture Opaca
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-purple-500/40 space-y-3 bg-gradient-to-br from-purple-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(168,85,247,0.15)]">
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-2xl bg-purple-950/30 border border-purple-500/30 space-y-1">
                <strong className="text-purple-300 font-bold block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Solo a Capelli 100% Asciutti:
                </strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Non applicare mai la polverina sui capelli bagnati o umidi. Quando i capelli sono totalmente asciutti, versa un pizzico leggero di polvere volumizzante direttamente sulle radici (centro e destra) e sfregala sui polpastrelli.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                  <strong className="text-cyan-300 font-bold block">La Tecnica a "Rastrello":</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Non spalmare a palmo aperto (appiattiresti il volume). Usa solo i polpastrelli come se fossero un rastrello, infilando le dita tra le punte per separare le ciocche in mazzetti leggeri e texturizzati.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                  <strong className="text-emerald-300 font-bold block">Aderenza Opaca Senza Unto:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    La polvere volumizzante non unge e non si indurisce come il gel. Crea una micro-aderenza opaca tra i fusti capillari che sostiene il ciuffo e resiste per tutto il giorno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* ============================================================= */}
      {/* SEZIONE 5: IL GIORNO DOPO & AGGIORNAMENTI #2 (RESET TOTALE)   */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'giorno_dopo') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <Repeat className="w-4 h-4 text-sky-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400">
                  Tenuta & Aggiornamenti #2 • Sezione 5
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  5. Gestione del Giorno Dopo & Aggiornamenti #2 (Reset Totale)
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-sky-500/15 text-sky-300 border border-sky-500/30">
              Aggiornamenti #2
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-sky-500/40 space-y-5 bg-gradient-to-br from-sky-950/25 via-black/85 to-indigo-950/30 shadow-[0_0_30px_rgba(56,189,248,0.18)]">
            {/* --------------------------------------------------------- */}
            {/* AGGIORNAMENTI #2 CAPELLI IL GIORNO DOPO                   */}
            {/* SE LA PIEGA SI È ROVINATA / PERSA / UMIDITÀ (RESET TOTALE) */}
            {/* --------------------------------------------------------- */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-sky-950/40 via-blue-950/30 to-black/85 border-2 border-sky-400/50 space-y-3.5 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-500/30 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-xl bg-sky-400/20 text-sky-300">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
                      ★ Aggiornamenti #2 Capelli: Il Giorno Dopo
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-white">
                      Se la Piega si è Rovinata, Persa o Scompigliata (Reset da Capo)
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/40">
                  Procedura Obbligatoria
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-sky-500/30 space-y-2 text-xs">
                <p className="text-gray-200 leading-relaxed font-medium">
                  Esatto, <strong>hai centrato perfettamente il punto</strong>: se la piega si è rovinata, persa o scompigliata (magari dopo essere uscita o dopo aver preso umidità), per recuperare il risultato pulito <strong>devi rifare il procedimento da capo</strong>.
                </p>
                <div className="p-2.5 rounded-lg bg-red-950/30 border border-red-500/40 text-red-200 text-[11px] leading-relaxed">
                  <strong>La Regola Biologica:</strong> Non puoi semplicemente &quot;aggiustarla&quot; a secco sopra al disastro, perché i <strong>legami a idrogeno</strong> e le <strong>cuticole</strong> sono ormai andati per conto loro!
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-sky-300 block">
                  Ecco cosa devi fare per ripartire da zero e recuperare il risultato perfetto:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {/* Step 1: Bagna di nuovo */}
                  <div className="p-3.5 rounded-xl bg-black/70 border border-white/10 space-y-1">
                    <div className="flex items-center space-x-2 text-sky-400 font-extrabold text-xs">
                      <Droplet className="w-3.5 h-3.5" />
                      <span>1. Bagna di nuovo (o inumidisci bene)</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Riporta i capelli nello stato iniziale con l'acqua per azzerare la forma precedente e riaprire i legami a idrogeno.
                    </p>
                  </div>

                  {/* Step 2: Spazzola + Phon Caldo */}
                  <div className="p-3.5 rounded-xl bg-black/70 border border-white/10 space-y-1">
                    <div className="flex items-center space-x-2 text-orange-400 font-extrabold text-xs">
                      <Flame className="w-3.5 h-3.5" />
                      <span>2. Usa la spazzola + Phon Caldo</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Riprendi la spazzola per stirare e indirizzare i capelli verso destra, usando l'aria calda del phon per riaprire le cuticole e dare la nuova direzione.
                    </p>
                  </div>

                  {/* Step 3: Chiudi con l'Aria Fredda */}
                  <div className="p-3.5 rounded-xl bg-black/70 border border-white/10 space-y-1">
                    <div className="flex items-center space-x-2 text-cyan-400 font-extrabold text-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>3. Chiudi con l'Aria Fredda</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Fai sempre i tuoi secondi di aria fredda per sigillare le cuticole e congelare la piega, bloccandola contro l'umidità esterna.
                    </p>
                  </div>

                  {/* Step 4: Pettine a denti larghi alla fine */}
                  <div className="p-3.5 rounded-xl bg-black/70 border border-white/10 space-y-1">
                    <div className="flex items-center space-x-2 text-amber-400 font-extrabold text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>4. Pettine a Denti Larghi Solo alla Fine</span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Solo quando i capelli sono asciutti e freddi, prendi il pettine a denti larghi per sgranare le ciocche e ottenere l'effetto graffiato definitivo.
                    </p>
                  </div>
                </div>

                {/* Ciclo Fisso */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-sky-950/60 to-black/80 border border-sky-400/40 text-center space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
                    Il Ciclo Indispensabile:
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold text-white">
                    Acqua &rarr; Spazzola e Aria Calda &rarr; Aria Fredda &rarr; Pettine a Denti Larghi
                  </p>
                  <p className="text-[11px] text-gray-300 font-medium">
                    È l'unico modo per non ritrovarsi con un risultato rovinato dopo pochi minuti!
                  </p>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------- */}
            {/* PARTE C: ERRORE CHE HO FATTO (ANALISI SCIENTIFICA)         */}
            {/* --------------------------------------------------------- */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-red-950/40 via-orange-950/30 to-black/85 border-2 border-red-500/40 space-y-3.5 shadow-md">
              <div className="flex items-center space-x-2 border-b border-red-500/30 pb-2">
                <span className="p-1.5 rounded-xl bg-red-500/20 text-red-300">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-400 block">
                    Analisi di Laboratorio • Diagnosi Errore
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    Errore Che Ho Fatto: Dove Stava l'Inghippo e Perché la Piega è Crollata
                  </h3>
                </div>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Esatto, <strong>hai fatto centro al 100%!</strong> Hai individuato esattamente tutti i passaggi mancanti che hanno fatto crollare il risultato. Facciamo il punto della situazione su dove stava l'errore:
              </p>

              <div className="space-y-2.5 text-xs">
                {/* 1. Il salto del phon */}
                <div className="p-3 rounded-xl bg-black/60 border border-red-500/30 space-y-1">
                  <strong className="text-red-300 block text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    1. Il salto del phon (Mancata asciugatura):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Hai stirato i capelli verso il tuo lato con la spazzola e poi sei passato direttamente al pettine a denti larghi, <strong>lasciando però i capelli umidi o bagnati d'acqua</strong>. Senza il phon, la struttura dell'acqua è rimasta intrappolata all'interno della corteccia del capello.
                  </p>
                </div>

                {/* 2. Niente aria calda */}
                <div className="p-3 rounded-xl bg-black/60 border border-orange-500/30 space-y-1">
                  <strong className="text-orange-300 block text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    2. Niente aria calda (Mancata attivazione):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Saltando il phon con l'aria calda, <strong>le cuticole non si sono aperte</strong> per farsi guidare e i legami a idrogeno non hanno memorizzato la nuova direzione verso destra.
                  </p>
                </div>

                {/* 3. Niente aria fredda */}
                <div className="p-3 rounded-xl bg-black/60 border border-cyan-500/30 space-y-1">
                  <strong className="text-cyan-300 block text-xs font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    3. Niente aria fredda (Mancata sigillatura):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Non avendo usato il colpo di freddo alla fine, le cuticole sono rimaste &quot;aperte&quot; e i legami non sono stati congelati. <strong>Appena hai messo piede fuori casa, l'umidità dell'aria è entrata all'istante (come una spugna)</strong>, rompendo quel poco di forma che era rimasta e facendo aprire e gonfiare i capelli.
                  </p>
                </div>
              </div>

              {/* Conclusione Chiave */}
              <div className="p-3.5 rounded-xl bg-black/70 border border-red-500/40 space-y-1.5">
                <span className="text-xs font-black uppercase tracking-wider text-red-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-red-400" />
                  La Dinamica Chiave da Ricordare Sempre:
                </span>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Il pettine a denti larghi serve <strong>solo alla fine per fare il &quot;graffiato&quot;</strong>, ma se prima non fai asciugare e bloccare la struttura con <strong>spazzola + aria calda e poi aria fredda</strong>, qualsiasi forma tu faccia si scioglierà sempre nel giro di pochi minuti. Adesso la sequenza ce l'hai chiara al 100% in testa!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 6: PERCHÉ I CAPELLI SEMBRANO "MEGLIO" DOPO QUALCHE ORA */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'fisica') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Atom className="w-4 h-4 text-teal-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400">
                  Fisica & Struttura del Capello • Sezione 6
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  6. Perché i Capelli Sembrano "Meglio" Dopo Qualche Ora?
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-teal-500/15 text-teal-300 border border-teal-500/30">
              Spiegazione Tecnica
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-teal-500/40 space-y-3 bg-gradient-to-br from-teal-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(20,184,166,0.15)]">
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              È normale che dopo qualche ora dall'asciugatura lo styling ti appaia più ordinato, pieno e naturale rispetto al momento in cui spegni il phon. Questo fenomeno ha 3 cause tecniche precise:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-300 block flex items-center gap-1">
                  <Wind className="w-3.5 h-3.5" />
                  1. Raffreddamento Completo
                </span>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Appena finito il phon, il capello è caldo, statico e malleabile. Raffreddandosi del tutto nel tempo, i legami di idrogeno si cristallizzano nella forma data, conferendo stabilità e compattezza.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-300 block flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5" />
                  2. Micro-Umidità Ambientale
                </span>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  La porosità media dei Tipo 2B assorbe una minima quantità di umidità dall'aria. Questa idratazione naturale ammorbidisce la rigidità "cotta" del calore, restituendo elasticità organica e movimento.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-300 block flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" />
                  3. Rilascio da Gravità
                </span>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Con i movimenti della testa durante il giorno, le ciocche della cima si staccano leggermente dalla cute e si unificano spontaneamente al ciuffo laterale, creando un look armonioso col viso.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOX DI RIEPILOGO FINALE: IL PROMEMORIA TASCABILE */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-cyan-950/50 via-teal-950/40 to-black/80 border-2 border-cyan-400/50 space-y-3">
        <div className="flex items-center space-x-2">
          <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </span>
          <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight">
            Promemoria Rapido per la Prossima Asciugatura
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-gray-300 flex items-start gap-2">
            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
            <span><strong>Da bagnato:</strong> direzione a dita bagnate, balsamo solo sulle punte.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-gray-300 flex items-start gap-2">
            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
            <span><strong>A sinistra (buchino):</strong> non gonfiare in alto! Tieni piatto e diagonale a destra.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-gray-300 flex items-start gap-2">
            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
            <span><strong>Sulla cima:</strong> cross-wrapping destra/sinistra con phon caldo prima di modellare.</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-gray-300 flex items-start gap-2">
            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
            <span><strong>A secco:</strong> polverina alle radici, separa a rastrello e fissa a freddo.</span>
          </div>
        </div>
      </div>

      {/* Bottom Back Button */}
      <div className="pt-4 text-center">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs transition-all shadow-lg hover:shadow-cyan-400/25 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a Tutte le Note</span>
        </button>
      </div>
    </div>
  );
};
