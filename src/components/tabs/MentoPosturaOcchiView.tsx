import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  Eye,
  Maximize2,
  X,
  Sparkles,
  Upload,
  Link as LinkIcon,
  Trash2,
  CheckCircle2,
  XCircle,
  Columns,
  ShieldAlert,
  Flame,
  User,
  Compass,
  Zap,
  Image as ImageIcon,
  Repeat
} from 'lucide-react';
import { storageHelper } from '../../utils/storage';
import { PostureComparisonData } from '../../types';

interface MentoPosturaOcchiViewProps {
  onBack: () => void;
}

type PhotoSlot = 'normal1' | 'normal2' | 'good1' | 'good2';

interface PhotoCardSlotProps {
  slot: PhotoSlot;
  label: string;
  badge: string;
  photoUrl?: string;
  theme: 'rose' | 'emerald';
  emptyPrompt: string;
  onUploadClick: (slot: PhotoSlot) => void;
  onUrlClick: (slot: PhotoSlot) => void;
  onRemoveClick: (slot: PhotoSlot) => void;
  onFullscreen: (url: string, title: string) => void;
}

const PhotoCardSlot: React.FC<PhotoCardSlotProps> = ({
  slot,
  label,
  badge,
  photoUrl,
  theme,
  emptyPrompt,
  onUploadClick,
  onUrlClick,
  onRemoveClick,
  onFullscreen
}) => {
  const isRose = theme === 'rose';
  const borderColor = isRose ? 'border-rose-500/30' : 'border-emerald-500/40';
  const badgeBg = isRose ? 'bg-rose-500/15 text-rose-300 border-rose-500/30' : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
  const iconBg = isRose ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
  const uploadBtnBg = isRose ? 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border-rose-500/30' : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border-emerald-500/30';

  return (
    <div className={`p-3.5 rounded-2xl bg-black/60 border ${borderColor} space-y-2.5 flex flex-col justify-between`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-black text-white flex items-center space-x-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-gray-400" />
          <span>{label}</span>
        </span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${badgeBg}`}>
          {badge}
        </span>
      </div>

      {photoUrl ? (
        <div className="space-y-2">
          <div
            onClick={() => onFullscreen(photoUrl, `${label} (${badge})`)}
            className={`group relative rounded-xl overflow-hidden border ${borderColor} bg-black/90 cursor-pointer h-56 sm:h-64 flex items-center justify-center`}
          >
            <img
              src={photoUrl}
              alt={label}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
              <span className="text-[10px] font-bold text-white">Ingrandisci</span>
              <span className="p-1 rounded-lg bg-black/70 text-cyan-300 border border-white/20">
                <Maximize2 className="w-3 h-3" />
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-0.5">
            <button
              type="button"
              onClick={() => onUploadClick(slot)}
              className="text-[10px] font-bold text-gray-300 hover:text-white flex items-center space-x-1 py-1 px-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
            >
              <Upload className="w-3 h-3 text-cyan-300" />
              <span>Cambia</span>
            </button>
            <button
              type="button"
              onClick={() => onRemoveClick(slot)}
              className="text-[10px] font-bold text-rose-400 hover:text-rose-300 flex items-center space-x-1 py-1 px-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 cursor-pointer"
            >
              <Trash2 className="w-3 h-3" />
              <span>Rimuovi</span>
            </button>
          </div>
        </div>
      ) : (
        <div className={`h-56 sm:h-64 rounded-xl border-2 border-dashed ${borderColor} bg-white/2 flex flex-col items-center justify-center p-3 text-center space-y-2.5`}>
          <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center border`}>
            <User className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">{label} Vuota</h4>
            <p className="text-[10px] text-gray-400 max-w-[190px] mx-auto mt-0.5 leading-snug">
              {emptyPrompt}
            </p>
          </div>
          <div className="flex items-center space-x-1.5 pt-1">
            <button
              type="button"
              onClick={() => onUploadClick(slot)}
              className={`py-1.5 px-2.5 rounded-xl ${uploadBtnBg} border text-[11px] font-bold flex items-center space-x-1 active:scale-95 transition-all cursor-pointer`}
            >
              <Upload className="w-3 h-3" />
              <span>Carica</span>
            </button>
            <button
              type="button"
              onClick={() => onUrlClick(slot)}
              className="py-1.5 px-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-gray-200 border border-white/10 text-[11px] font-bold flex items-center space-x-1 active:scale-95 transition-all cursor-pointer"
            >
              <LinkIcon className="w-3 h-3" />
              <span>Link</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const MentoPosturaOcchiView: React.FC<MentoPosturaOcchiViewProps> = ({ onBack }) => {
  const [comparisonData, setComparisonData] = useState<PostureComparisonData>(() =>
    storageHelper.getPostureComparison()
  );
  const [comparisonLayout, setComparisonLayout] = useState<'overlay' | 'sideBySide' | 'toggle'>('overlay');
  const [activeToggleTab, setActiveToggleTab] = useState<'normal' | 'good'>('normal');
  const [overlayAngle, setOverlayAngle] = useState<'slot1' | 'slot2'>('slot1');
  const [overlayActiveState, setOverlayActiveState] = useState<'normal' | 'good'>('normal');
  const [overlaySwapCount, setOverlaySwapCount] = useState<number>(0);
  const [isOverlayBlinking, setIsOverlayBlinking] = useState<boolean>(false);

  const handleTogglePostureOverlay = () => {
    setOverlayActiveState(prev => (prev === 'normal' ? 'good' : 'normal'));
    setOverlaySwapCount(c => c + 1);
  };

  // Optional automatic blinking timer
  React.useEffect(() => {
    let interval: any = null;
    if (isOverlayBlinking) {
      interval = setInterval(() => {
        setOverlayActiveState(prev => (prev === 'normal' ? 'good' : 'normal'));
        setOverlaySwapCount(c => c + 1);
      }, 700);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOverlayBlinking]);

  const [fullscreenImage, setFullscreenImage] = useState<{ url: string; title: string } | null>(null);

  // Modals for URL input
  const [urlModalTarget, setUrlModalTarget] = useState<PhotoSlot | null>(null);
  const [urlInput, setUrlInput] = useState('');

  // Single file input for any slot
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const activeUploadSlotRef = useRef<PhotoSlot | null>(null);

  // Helper to compress and convert file to base64
  const handleFileUpload = async (file: File, slot: PhotoSlot) => {
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const maxDim = 800;
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
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
            savePhoto(slot, dataUrl);
          } else {
            savePhoto(slot, e.target?.result as string);
          }
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Errore nel caricamento del file:', err);
    }
  };

  const savePhoto = (slot: PhotoSlot, url: string) => {
    const updated: PostureComparisonData = {
      ...comparisonData,
      ...(slot === 'normal1' ? { normalPhotoUrl: url } : {}),
      ...(slot === 'normal2' ? { normalPhotoUrl2: url } : {}),
      ...(slot === 'good1' ? { goodPhotoUrl: url } : {}),
      ...(slot === 'good2' ? { goodPhotoUrl2: url } : {}),
      updatedAt: new Date().toLocaleDateString('it-IT')
    };
    setComparisonData(updated);
    storageHelper.savePostureComparison(updated);
  };

  const removePhoto = (slot: PhotoSlot) => {
    savePhoto(slot, '');
  };

  const handleUploadClick = (slot: PhotoSlot) => {
    activeUploadSlotRef.current = slot;
    fileInputRef.current?.click();
  };

  const handleUrlClick = (slot: PhotoSlot) => {
    setUrlModalTarget(slot);
    setUrlInput('');
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlModalTarget || !urlInput.trim()) return;
    savePhoto(urlModalTarget, urlInput.trim());
    setUrlInput('');
    setUrlModalTarget(null);
  };

  const getSlotTitle = (slot: PhotoSlot) => {
    switch (slot) {
      case 'normal1':
        return 'Foto 1 - Postura Normale (Abituale)';
      case 'normal2':
        return 'Foto 2 - Postura Normale (Abituale)';
      case 'good1':
        return 'Foto 1 - Postura Buona (Da Mantenere)';
      case 'good2':
        return 'Foto 2 - Postura Buona (Da Mantenere)';
    }
  };

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file && activeUploadSlotRef.current) {
            handleFileUpload(file, activeUploadSlotRef.current);
          }
          e.target.value = '';
        }}
      />

      {/* Top Navigation */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/90 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>
        <span className="text-[11px] font-bold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20">
          Nota Biomeccanica • Personale
        </span>
      </div>

      {/* Title Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-amber-500/30 relative overflow-hidden space-y-2 bg-gradient-to-br from-amber-500/15 via-black/80 to-cyan-500/10">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase tracking-widest border border-amber-500/30">
            ★ Note Scritte Da Me
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Postura, Mento & Sguardo</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
          Mento, postura e occhi
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Le mie note personali su quello che ho capito e verificato confrontando le mie foto: come cambia la visibilità della sclera e l'effetto hooded eyes, la retroposizione del capo (chin tuck), perché l'armonia batte la tensione massima del mento e come la postura eretta espande la presenza del corpo.
        </p>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 📸 BOX CONFRONTO FOTOGRAFICO POSTURA NORMALE VS POSTURA BUONA */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-cyan-400/40 space-y-4 bg-gradient-to-b from-cyan-950/20 to-black/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="space-y-0.5">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-black text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Columns className="w-4 h-4 text-cyan-400" />
                <span>Confronto Fotografico Postura (2 Foto per Categoria)</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/10 text-gray-300 border border-white/10">
                4 Spazi Totali
              </span>
            </div>
            <p className="text-[11px] text-gray-400">
              Confronta 2 foto con la postura abituale/normale e 2 foto con la postura corretta da mantenere (es. frontale e mezzo profilo).
            </p>
          </div>

          {/* Toggle view layout buttons */}
          <div className="flex items-center bg-black/60 p-1 rounded-2xl border border-white/10 shrink-0 self-start sm:self-auto space-x-1">
            <button
              type="button"
              onClick={() => setComparisonLayout('overlay')}
              className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all flex items-center space-x-1 cursor-pointer ${
                comparisonLayout === 'overlay'
                  ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black shadow-neon font-black'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Repeat className="w-3 h-3" />
              <span>Sovrapponi & Scambia</span>
            </button>
            <button
              type="button"
              onClick={() => setComparisonLayout('sideBySide')}
              className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
                comparisonLayout === 'sideBySide'
                  ? 'bg-cyan-500 text-black shadow-sm font-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Tutte le Categorie
            </button>
            <button
              type="button"
              onClick={() => setComparisonLayout('toggle')}
              className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
                comparisonLayout === 'toggle'
                  ? 'bg-cyan-500 text-black shadow-sm font-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Una alla Volta
            </button>
          </div>
        </div>

        {/* OVERLAY & BLINK MODE */}
        {comparisonLayout === 'overlay' && (
          <div className="space-y-4 pt-1">
            {/* Angle Selector Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-black/50 rounded-2xl border border-white/10 max-w-md mx-auto">
              <button
                type="button"
                onClick={() => setOverlayAngle('slot1')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                  overlayAngle === 'slot1'
                    ? 'bg-white/15 text-white shadow-sm border border-white/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>Foto 1: Frontale</span>
              </button>
              <button
                type="button"
                onClick={() => setOverlayAngle('slot2')}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                  overlayAngle === 'slot2'
                    ? 'bg-white/15 text-white shadow-sm border border-white/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>Foto 2: Angolata / Profilo</span>
              </button>
            </div>

            {/* Subheader with auto-blink toggle & swap count */}
            <div className="flex items-center justify-between bg-black/50 p-2.5 rounded-2xl border border-white/10 max-w-sm mx-auto">
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full transition-all ${
                  overlayActiveState === 'normal'
                    ? 'bg-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.8)]'
                    : 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]'
                }`} />
                <div>
                  <span className="text-xs font-black text-white block">
                    {overlayActiveState === 'normal' ? '1. Postura Normale / Afflosciata' : '2. Postura Buona & Allineata'}
                  </span>
                  <span className="text-[10px] text-gray-400 block -mt-0.5">
                    {overlayAngle === 'slot1' ? 'Inquadratura Frontale' : 'Inquadratura Profilo'}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-1.5">
                {overlaySwapCount > 0 && (
                  <span className="text-[10px] text-cyan-300 font-extrabold bg-cyan-950/80 px-2 py-0.5 rounded-lg border border-cyan-500/30">
                    {overlaySwapCount} {overlaySwapCount === 1 ? 'scambio' : 'scambi'}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setIsOverlayBlinking(!isOverlayBlinking)}
                  className={`px-2.5 py-1 rounded-xl text-[10px] font-bold border transition-all flex items-center space-x-1 cursor-pointer ${
                    isOverlayBlinking
                      ? 'bg-cyan-500 text-black border-cyan-400 shadow-neon animate-pulse font-extrabold'
                      : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
                  }`}
                  title="Alterna automaticamente le foto ogni 0.7 secondi"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>{isOverlayBlinking ? 'Stop' : 'Auto Lampeggio'}</span>
                </button>
              </div>
            </div>

            {/* Photo Frame or Missing Upload state */}
            {(() => {
              const normalPhoto = overlayAngle === 'slot1' ? comparisonData.normalPhotoUrl : comparisonData.normalPhotoUrl2;
              const goodPhoto = overlayAngle === 'slot1' ? comparisonData.goodPhotoUrl : comparisonData.goodPhotoUrl2;
              const hasBoth = Boolean(normalPhoto && goodPhoto);
              const activePhotoUrl = overlayActiveState === 'normal' ? normalPhoto : goodPhoto;

              if (hasBoth) {
                return (
                  <div className="space-y-3">
                    <div
                      onClick={handleTogglePostureOverlay}
                      className="group relative rounded-3xl overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-300 bg-black cursor-pointer aspect-[3/4] max-h-[420px] max-w-sm mx-auto shadow-2xl transition-all active:scale-[0.99] select-none"
                      title="Tocca la foto per scambiarla all'istante"
                    >
                      {/* Normal Photo Layer */}
                      <img
                        src={normalPhoto}
                        alt="Postura Normale"
                        className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none ${
                          overlayActiveState === 'normal' ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                        referrerPolicy="no-referrer"
                      />

                      {/* Good Photo Layer */}
                      <img
                        src={goodPhoto}
                        alt="Postura Buona"
                        className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none ${
                          overlayActiveState === 'good' ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                        referrerPolicy="no-referrer"
                      />

                      {/* Top Floating Badge & Fullscreen Button */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
                        <span className={`text-[10px] font-black px-3 py-1.5 rounded-xl backdrop-blur-md border shadow-lg transition-all ${
                          overlayActiveState === 'normal'
                            ? 'bg-black/85 text-rose-300 border-rose-500/40'
                            : 'bg-black/85 text-emerald-300 border-emerald-500/40'
                        }`}>
                          {overlayActiveState === 'normal' ? '❌ 1. Postura Normale' : '✅ 2. Postura Buona'}
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFullscreenImage({
                              url: activePhotoUrl || '',
                              title: `${overlayAngle === 'slot1' ? 'Foto 1' : 'Foto 2'} • ${
                                overlayActiveState === 'normal' ? 'Postura Normale' : 'Postura Buona'
                              }`
                            });
                          }}
                          className="p-2 rounded-xl bg-black/70 hover:bg-black text-white hover:text-cyan-300 border border-white/20 backdrop-blur-md cursor-pointer transition-all active:scale-90"
                          title="Espandi a schermo intero"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Center hint when hovering */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="px-3.5 py-1.5 rounded-2xl bg-black/85 backdrop-blur-md text-white border border-cyan-400/40 text-xs font-bold shadow-xl flex items-center gap-1.5">
                          <Repeat className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Tocca per scambiare</span>
                        </span>
                      </div>

                      {/* Bottom overlay bar */}
                      <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 text-left z-20 pointer-events-none">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-white">
                            {overlayActiveState === 'normal' ? 'Postura Normale / Afflosciata' : 'Postura Buona & Allineata'}
                          </span>
                          <span className={`text-[10px] font-bold ${
                            overlayActiveState === 'normal' ? 'text-rose-400' : 'text-emerald-400'
                          }`}>
                            {overlayAngle === 'slot1' ? 'Frontale' : 'Profilo'}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-300 line-clamp-1 mt-0.5">
                          {overlayActiveState === 'normal' 
                            ? 'Fronte tesa/rughe, mento in avanti, troppa sclera visibile sotto gli occhi' 
                            : 'Fronte ripassata e liscia, chin tuck naturale, palpebra a filo iride'}
                        </p>
                      </div>
                    </div>

                    {/* BIG ACTION BUTTON */}
                    <div className="space-y-2 max-w-sm mx-auto">
                      <button
                        type="button"
                        onClick={handleTogglePostureOverlay}
                        className={`w-full py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2.5 shadow-lg active:scale-95 transition-all cursor-pointer select-none ${
                          overlayActiveState === 'normal'
                            ? 'bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black shadow-emerald-500/30'
                            : 'bg-gradient-to-r from-rose-400 to-amber-400 hover:from-rose-300 hover:to-amber-300 text-black shadow-rose-500/30'
                        }`}
                      >
                        <Repeat className="w-5 h-5 text-black" />
                        <span>
                          ⚡ Clicca per Scambiare ({overlayActiveState === 'normal' ? 'Passa a Postura Buona' : 'Torna a Postura Normale'})
                        </span>
                      </button>

                      <p className="text-[11px] text-gray-400 text-center font-medium">
                        👆 Clicca a ripetizione il tasto o l'immagine per sovrapporle e vedere ogni minima differenza!
                      </p>
                    </div>
                  </div>
                );
              }

              // If one or both photos are missing in this slot
              return (
                <div className="p-6 rounded-3xl bg-black/50 border border-white/15 text-center space-y-4 max-w-md mx-auto">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-300">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-white">
                      Mancano le foto per {overlayAngle === 'slot1' ? 'Foto 1 (Frontale)' : 'Foto 2 (Profilo)'}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Per poter sovrapporre e scambiare le foto a raffica, carica sia la foto normale che quella corretta.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => handleUploadClick(overlayAngle === 'slot1' ? 'normal1' : 'normal2')}
                      className="py-2.5 px-3 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold hover:bg-rose-500/30 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Carica Normale</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleUploadClick(overlayAngle === 'slot1' ? 'good1' : 'good2')}
                      className="py-2.5 px-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold hover:bg-emerald-500/30 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Carica Buona</span>
                    </button>
                  </div>

                  {/* Option to load demo photos for instant testing */}
                  <button
                    type="button"
                    onClick={() => {
                      const sampleNormal = 'https://i.ibb.co/3VDsH13/20260911-184140.jpg';
                      const sampleGood = 'https://i.ibb.co/nspkJD8t/1789145825747.jpg';
                      const updated = {
                        ...comparisonData,
                        normalPhotoUrl: comparisonData.normalPhotoUrl || sampleNormal,
                        goodPhotoUrl: comparisonData.goodPhotoUrl || sampleGood,
                        normalPhotoUrl2: comparisonData.normalPhotoUrl2 || sampleNormal,
                        goodPhotoUrl2: comparisonData.goodPhotoUrl2 || sampleGood
                      };
                      setComparisonData(updated);
                      storageHelper.savePostureComparison(updated);
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold text-xs transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Carica Foto Demo di Prova per Testare lo Scambio</span>
                  </button>
                </div>
              );
            })()}
          </div>
        )}

        {/* Tab switch if toggle mode */}
        {comparisonLayout === 'toggle' && (
          <div className="grid grid-cols-2 gap-2 p-1 bg-black/50 rounded-2xl border border-white/10">
            <button
              type="button"
              onClick={() => setActiveToggleTab('normal')}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                activeToggleTab === 'normal'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>1. Postura Normale (2 Foto)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveToggleTab('good')}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                activeToggleTab === 'good'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>2. Postura Buona (2 Foto)</span>
            </button>
          </div>
        )}

        {/* Categories container */}
        <div className="space-y-5">
          {/* CATEGORIA 1: POSTURA NORMALE / ABITUALE (2 FOTO) */}
          {(comparisonLayout === 'sideBySide' || (comparisonLayout === 'toggle' && activeToggleTab === 'normal')) && (
            <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-rose-500/30 space-y-4 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-rose-500/20 pb-2.5">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
                      Categoria 1 • Come Tendo a Stare
                    </span>
                    <span className="text-[10px] font-bold text-gray-400">2 Foto Disponibili</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white mt-1">Postura Normale / Afflosciata</h3>
                </div>
                <span className="text-[11px] text-rose-300/80 font-semibold italic">Base Abituale</span>
              </div>

              {/* 2 Foto Slots Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <PhotoCardSlot
                  slot="normal1"
                  label="Foto 1 Normale"
                  badge="Frontale"
                  photoUrl={comparisonData.normalPhotoUrl}
                  theme="rose"
                  emptyPrompt="Carica la prima foto (es. vista frontale) con la postura che hai normalmente."
                  onUploadClick={handleUploadClick}
                  onUrlClick={handleUrlClick}
                  onRemoveClick={removePhoto}
                  onFullscreen={(url, title) => setFullscreenImage({ url, title })}
                />

                <PhotoCardSlot
                  slot="normal2"
                  label="Foto 2 Normale"
                  badge="Angolata / Profilo"
                  photoUrl={comparisonData.normalPhotoUrl2}
                  theme="rose"
                  emptyPrompt="Carica la seconda foto (es. mezzo profilo o angolata) con la postura normale."
                  onUploadClick={handleUploadClick}
                  onUrlClick={handleUrlClick}
                  onRemoveClick={removePhoto}
                  onFullscreen={(url, title) => setFullscreenImage({ url, title })}
                />
              </div>

              {/* Punti chiave rilevati */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1 text-xs">
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider block">
                  Cosa succede in questa postura normale:
                </span>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  <li><strong className="text-rose-200">Sguardo piatto:</strong> occhio più aperto, troppa sclera bianca visibile attorno all'iride.</li>
                  <li><strong className="text-rose-200">Mento/Collo:</strong> mento sporto in avanti o alzato in modo innaturale.</li>
                  <li><strong className="text-rose-200">Torace svuotato:</strong> spalle chiuse, corpo che sembra più stretto e minuto.</li>
                  <li><strong className="text-rose-200">Asse sbilanciato:</strong> testa che tende a pendere verso una spalla.</li>
                </ul>
              </div>
            </div>
          )}

          {/* CATEGORIA 2: POSTURA BUONA / QUELLA DA MANTENERE (2 FOTO) */}
          {(comparisonLayout === 'sideBySide' || (comparisonLayout === 'toggle' && activeToggleTab === 'good')) && (
            <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-emerald-500/40 space-y-4 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-emerald-500/20 pb-2.5">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      Categoria 2 • Quella da Mantenere
                    </span>
                    <span className="text-[10px] font-bold text-emerald-300">2 Foto Disponibili</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-white mt-1">Postura Buona & Allineata</h3>
                </div>
                <span className="text-[11px] text-cyan-300 font-semibold italic">Obiettivo di Default</span>
              </div>

              {/* 2 Foto Slots Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <PhotoCardSlot
                  slot="good1"
                  label="Foto 1 Buona"
                  badge="Frontale"
                  photoUrl={comparisonData.goodPhotoUrl}
                  theme="emerald"
                  emptyPrompt="Carica la prima foto (es. vista frontale) con la postura buona e allineata."
                  onUploadClick={handleUploadClick}
                  onUrlClick={handleUrlClick}
                  onRemoveClick={removePhoto}
                  onFullscreen={(url, title) => setFullscreenImage({ url, title })}
                />

                <PhotoCardSlot
                  slot="good2"
                  label="Foto 2 Buona"
                  badge="Angolata / Profilo"
                  photoUrl={comparisonData.goodPhotoUrl2}
                  theme="emerald"
                  emptyPrompt="Carica la seconda foto (es. mezzo profilo con luce) con la postura corretta."
                  onUploadClick={handleUploadClick}
                  onUrlClick={handleUrlClick}
                  onRemoveClick={removePhoto}
                  onFullscreen={(url, title) => setFullscreenImage({ url, title })}
                />
              </div>

              {/* Punti chiave rilevati */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1 text-xs">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                  I benefici che ottengo in questa postura corretta:
                </span>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  <li><strong className="text-emerald-200">Hooded eyes naturali:</strong> palpebra scesa che copre l'iride, sguardo intenso e magnetico.</li>
                  <li><strong className="text-emerald-200">Mascella definita:</strong> zona sotto il mento compatta e pulita.</li>
                  <li><strong className="text-emerald-200">Petto aperto:</strong> spalle più larghe e tronco imponente e solido.</li>
                  <li><strong className="text-emerald-200">Testa in asse:</strong> simmetria impeccabile e zero sforzo muscolare forzato.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SEZIONE 1: GLI OCCHI E LO SGUARDO */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 sm:p-5 rounded-3xl glass-card border border-white/10 space-y-3">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">Capitolo 1</span>
            <h2 className="text-base font-black text-white">Gli Occhi: Visibilità della Sclera e Sguardo Hooded</h2>
          </div>
        </div>

        <div className="space-y-3 text-xs text-gray-200 leading-relaxed font-medium">
          <p>
            Mettendo a confronto le mie due foto, ho notato una differenza impressionante negli occhi che cambia totalmente l'impatto visivo del viso:
          </p>

          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              1. Visibilità della Sclera (Il Bianco dell'Occhio):
            </h4>
            <p className="text-gray-300">
              Nella foto in cui non ho l'impostazione "rilassata", il mio occhio è leggermente più spalancato e si vede molto più bianco (sclera) sia sopra che attorno all'iride. Questo mi dà subito uno sguardo piatto, convenzionale o persino reattivo/sgranato.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              2. Posizione della Palpebra Superiore:
            </h4>
            <p className="text-gray-300">
              Nella foto con la postura rilassata (leggero chin tuck unito alla palpebra che si abbassa), la palpebra superiore scende dolcemente e va a coprire il bordo superiore dell'iride. Questo crea un effetto incorniciato, profondo e magnetico (<strong>hooded eyes naturale</strong>).
            </p>
          </div>

          {/* 3. LA FRONTE DA RIPASSARE E DECONTRARRE (FONDAMENTALE PER LO SGUARDO) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-black/80 to-purple-950/40 border-2 border-cyan-400/40 space-y-3 shadow-lg">
            <div className="flex items-center space-x-2 border-b border-cyan-400/20 pb-2">
              <span className="p-1.5 rounded-xl bg-cyan-400/20 text-cyan-300">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block">
                  Regola Chiave • Guarda gli Occhi & la Fronte
                </span>
                <h4 className="text-xs sm:text-sm font-extrabold text-white">
                  3. Si Deve Ripassare e Decontrarre Anche la Fronte!
                </h4>
              </div>
            </div>

            <p className="text-gray-200 leading-relaxed font-medium">
              Questo è il punto cruciale che collega gli occhi alla fisionomia generale: <strong className="text-cyan-200">non puoi avere lo sguardo hooded perfetto se la fronte è tesa o sollevata!</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                <span className="text-xs font-bold text-rose-300 flex items-center gap-1">
                  <span>❌ L'Errore Comune:</span>
                </span>
                <p className="text-gray-300 text-[11px]">
                  Quando cerchiamo di fissare qualcosa o guardare dritto, il riflesso inconscio è attivare il muscolo frontale, sollevando le sopracciglia. Questo crea pieghe orizzontali sulla fronte e sgrana l'occhio, lasciando esposta troppa sclera bianca (sguardo "impaurito" o convenzionale).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/30 space-y-1">
                <span className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                  <span>✅ Come Ripassare la Fronte:</span>
                </span>
                <p className="text-gray-300 text-[11px]">
                  Fai un <strong>check tattile e mentale</strong>: passa delicatamente i polpastrelli dal centro della fronte verso le tempie con un movimento lisciante per azzerare ogni ruga e contrazione. La fronte deve diventare liscia e morbida come il marmo.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 space-y-1">
              <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block">
                🧠 Il Risultato Diretto sugli Occhi:
              </span>
              <p className="text-gray-200 text-xs">
                Non appena <strong>ripassi e spiani la fronte</strong>, le sopracciglia si abbassano da sole di quel millimetro necessario, e la palpebra superiore cade docilmente sopra l'iride coprendo la sclera. <em>Nessuna forzatura: lo sguardo magnetico nasce dal rilassamento completo della fronte e dal mento arretrato.</em>
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 space-y-1">
            <strong className="block text-white">✨ Il Trucco dell'Ancoraggio (Zero Sforzo):</strong>
            <span>
              La cosa fondamentale che ho capito è che questo sguardo profondo <strong>non richiede alcuna contrazione forzata</strong> dei muscoli facciali. Funziona grazie alla micro-inclinazione della testa, al ripasso distensivo della fronte e al rilassamento naturale della palpebra: la linea delle sopracciglia crea un'ombra protettiva sull'occhio per semplice sovrapposizione geometrica.
            </span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SEZIONE 2: GUIDA ALLA POSTURA DELLA TESTA E MASCELLA */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 sm:p-5 rounded-3xl glass-card border border-white/10 space-y-3">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">Capitolo 2</span>
            <h2 className="text-base font-black text-white">Postura della Testa & Mascella (Retroposizione del Capo)</h2>
          </div>
        </div>

        <div className="space-y-3 text-xs text-gray-200 leading-relaxed font-medium">
          <p>
            Questo movimento serve a eliminare l'inclinazione del collo in avanti, appiattire la pelle sotto il mento e dare massima definizione alla mascella (jawline), creando contemporaneamente il supporto naturale per lo sguardo profondo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
              <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                Il Movimento Chiave:
              </span>
              <p className="text-gray-300">
                Faccio scivolare la testa e la nuca all'indietro (retroposizione), come se volessi allontanare il viso da un ostacolo, estendendo leggermente la colonna cervicale verso l'alto.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
              <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block">
                Lo Sguardo:
              </span>
              <p className="text-gray-300">
                Mantengo gli occhi dritti all'orizzonte davanti a me. Nessuno sforzo negli occhi, solo un punto fisso orizzontale.
              </p>
            </div>
          </div>

          {/* Cosa NON fare */}
          <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/25 space-y-1.5">
            <span className="text-[11px] font-bold text-rose-300 uppercase tracking-wider block flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>Cosa NON devo assolutamente fare:</span>
            </span>
            <ul className="text-rose-100 space-y-1 list-disc list-inside">
              <li><strong>❌ Non piegare la testa verso il basso:</strong> non devo guardare i piedi né piegare il collo.</li>
              <li><strong>❌ Non alzare il mento verso l'alto:</strong> non devo guardare il soffitto credendo di tirare la pelle.</li>
            </ul>
          </div>

          {/* Effetti Immediati */}
          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
              Gli effetti immediati che ho notato sul mio viso:
            </span>
            <ul className="text-gray-300 space-y-1.5 list-disc list-inside">
              <li>
                <strong className="text-white">Definizione della mascella:</strong> la zona molle sotto il mento si stende e si compatta istantaneamente, eliminando l'effetto "doppio mento".
              </li>
              <li>
                <strong className="text-white">Postura oculare naturale:</strong> con la testa rientrata, le sopracciglia coprono leggermente l'iride dall'alto, bloccando lo sguardo profondo (hooded eyes).
              </li>
              <li>
                <strong className="text-white">Migliore supporto facciale:</strong> la colonna sostiene la testa in perfetto equilibrio, riducendo le tensioni sulla fronte e sui trapezi.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SEZIONE 3: IL TRUCCO DELL'ANELLO (RESET RAPIDO) */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/30 space-y-3 bg-gradient-to-r from-cyan-500/10 to-transparent">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">Capitolo 3</span>
            <h2 className="text-base font-black text-white">Il "Trucco dell'Anello" / Reset Veloce durante il Giorno</h2>
          </div>
        </div>

        <p className="text-xs text-gray-300">
          La formula mentale per ritrovare subito la postura ideale in qualsiasi momento (mentre cammino, sono al computer o allo specchio):
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
          <div className="p-3 rounded-2xl bg-black/50 border border-white/10 space-y-1">
            <span className="text-cyan-400 font-extrabold text-[10px] uppercase tracking-wider block">1. Allineamento</span>
            <p className="text-gray-300 font-medium">
              Immagino un anello al centro della nuca e un filo invisibile che lo tira leggermente all'indietro e verso l'alto.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/50 border border-white/10 space-y-1">
            <span className="text-cyan-400 font-extrabold text-[10px] uppercase tracking-wider block">2. Retroposizione</span>
            <p className="text-gray-300 font-medium">
              Faccio scivolare la testa indietro finché non sento la nuca allungarsi e la pelle sotto il mento compattarsi.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/50 border border-cyan-400/30 space-y-1">
            <span className="text-cyan-400 font-extrabold text-[10px] uppercase tracking-wider block">3. Fronte Ripassata & Sguardo</span>
            <p className="text-gray-300 font-medium">
              Fisso l'orizzonte dritto, <strong>ripasso e spiano la fronte a zero rughe</strong> e lascio che la palpebra superiore scenda naturalmente a coprire l'iride.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SEZIONE 4: L'ARMONIA BATTE LA TENSIONE MASSIMA */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 sm:p-5 rounded-3xl glass-card border border-white/10 space-y-3">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-300">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">Capitolo 4</span>
            <h2 className="text-base font-black text-white">Mento Basso vs Tirato in Alto: L'Armonia Vince sulla Tensione</h2>
          </div>
        </div>

        <div className="space-y-3 text-xs text-gray-200 leading-relaxed font-medium">
          <p>
            Prima pensavo che per eliminare ogni minima piega sotto il mento dovessi alzare la testa e "tirare" il collo. Ho capito che è un errore che distrugge l'estetica del viso:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-1.5">
              <span className="text-rose-300 font-bold text-xs uppercase tracking-wider block">
                Quando alzo troppo la testa:
              </span>
              <ul className="text-gray-300 space-y-1 list-disc list-inside">
                <li>Sposto la testa fuori dall'asse verticale.</li>
                <li>Appiattisco la profondità dello sguardo (le sopracciglia non fanno più ombra sugli occhi).</li>
                <li>Allungo il viso in modo innaturale ed espongo le tempie, sbilanciando la massa dei capelli.</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
              <span className="text-emerald-300 font-bold text-xs uppercase tracking-wider block">
                Quando abbasso il mento & arretro la nuca:
              </span>
              <ul className="text-gray-300 space-y-1 list-disc list-inside">
                <li>La struttura ossea globale del viso si compatta e si armonizza.</li>
                <li>Gli occhi guadagnano subito profondità magnetica.</li>
                <li>La mascella trova una proporzione maschile ed equilibrata rispetto all'intero cranio.</li>
              </ul>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-amber-300 font-semibold">
            💡 <strong>La mia regola d'oro:</strong> Non devo mai cercare la "tensione massima" per eliminare ogni singola micro-piega sotto il mento. L'armonia della struttura ossea e dello sguardo batte sempre la tensione forzata della pelle.
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SEZIONE 5: LA POSTURA DEL CORPO CHE "AUMENTA" */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 sm:p-5 rounded-3xl glass-card border border-white/10 space-y-3">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">Capitolo 5</span>
            <h2 className="text-base font-black text-white">Postura Corporea: Perché la Postura Eretta fa "Aumentare" il Corpo</h2>
          </div>
        </div>

        <div className="space-y-3 text-xs text-gray-200 leading-relaxed font-medium">
          <p>
            Questo è un meccanismo anatomico fondamentale: quando passo dalla postura "molle" a quella eretta e allineata, il corpo cambia radicalmente proporzioni visive.
          </p>

          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider">
              Cosa succede con la postura afflosciata (spalle chiuse, colonna curva):
            </h4>
            <p className="text-gray-300">
              La testa cade in avanti per compensare il peso della schiena curva. Per guardare dritto sono costretto a sporgere il mento in fuori. Il torace si svuota, le spalle rientrano e la mia figura complessiva sembra più piccola, stretta e asimmetrica (ed è esattamente per questo che mi capitava di vedermi "pendere" da un lato!).
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Cosa succede con la postura eretta naturale:
            </h4>
            <ul className="text-gray-300 space-y-1.5 list-disc list-inside">
              <li>
                <strong className="text-white">Il petto si espande:</strong> la gabbia toracica si apre, la catena muscolare anteriore si allunga e la larghezza percepita delle spalle aumenta visivamente all'istante.
              </li>
              <li>
                <strong className="text-white">Il mento rientra da solo:</strong> allineando le vertebre cervicali, la testa si posiziona esattamente sopra le spalle. Il mento rientra nel collo senza alcuno sforzo forzato.
              </li>
              <li>
                <strong className="text-white">Presenza fisica potente:</strong> il tronco appare più imponente, la linea del collo si connette in modo solido alle spalle, dando l'effetto di una struttura corporea tonica, solida e aumentata.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* IL MIO MEMORANDUM QUOTIDIANO */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 sm:p-5 rounded-3xl glass-card border border-amber-500/30 space-y-4 bg-gradient-to-br from-amber-500/10 via-black/60 to-transparent">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-black text-white uppercase tracking-wider">
            Il Mio Memorandum Quotidiano (Regole d'Oro)
          </h3>
        </div>

        {/* Come fare la posizione (Ancoraggio Naturale) */}
        <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 space-y-2">
          <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider block">
            📱 Come fare la posizione:
          </span>
          <p className="text-xs text-white font-semibold leading-relaxed">
            È come quando prendo il telefono e mi metto in posizione. Mi esce naturale in questo modo:
          </p>
          <div className="p-2.5 rounded-xl bg-black/50 border border-amber-500/20 text-xs text-amber-200 space-y-1.5 font-medium">
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Testa:</strong> inclinata verso la mia destra.</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span><strong>Mento:</strong> punta automaticamente verso sinistra.</span>
            </div>
          </div>
        </div>

        <div className="space-y-2 text-xs text-gray-200">
          <div className="flex items-start space-x-2 p-2 rounded-xl bg-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Inclinazione e orientamento:</strong> testa inclinata verso la mia destra, mento che automaticamente punta verso sinistra.</span>
          </div>
          <div className="flex items-start space-x-2 p-2 rounded-xl bg-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Petto aperto e spalle basse:</strong> il mento rientra da solo senza sforzo se la colonna è allineata.</span>
          </div>
          <div className="flex items-start space-x-2 p-2 rounded-xl bg-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Nuca lunga all'indietro:</strong> immagina il filo invisibile che tira l'anello in alto e indietro.</span>
          </div>
          <div className="flex items-start space-x-2 p-2 rounded-xl bg-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Mento leggermente in basso:</strong> cerca l'armonia globale del viso, non la tensione forzata della pelle.</span>
          </div>
          <div className="flex items-start space-x-2 p-2 rounded-xl bg-white/5 border border-cyan-400/20">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span><strong>Fronte ripassata e decontratta:</strong> spiana la fronte e azzera ogni ruga orizzontale; il muscolo frontale a riposo permette alla palpebra di scendere sull'iride.</span>
          </div>
          <div className="flex items-start space-x-2 p-2 rounded-xl bg-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Occhi rilassati, sguardo dritto:</strong> lascia cadere la palpebra superiore a coprire la cima dell'iride per lo sguardo hooded naturale.</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODAL PER INSERIRE URL IMMAGINE */}
      {/* ------------------------------------------------------------- */}
      {urlModalTarget && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#121824] border border-white/15 rounded-3xl p-5 w-full max-w-sm space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-white flex items-center gap-1.5">
                <LinkIcon className="w-4 h-4 text-cyan-300" />
                <span>Link URL: {getSlotTitle(urlModalTarget)}</span>
              </h3>
              <button
                type="button"
                onClick={() => setUrlModalTarget(null)}
                className="p-1.5 rounded-xl text-gray-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUrlSubmit} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Link Immagine (es. ibb.co o web)
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://..."
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs placeholder:text-gray-600 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setUrlModalTarget(null)}
                  className="flex-1 py-2 rounded-xl bg-white/10 text-gray-300 text-xs font-bold cursor-pointer"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs cursor-pointer shadow-neon"
                >
                  Salva Foto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* FULLSCREEN LIGHTBOX MODAL */}
      {/* ------------------------------------------------------------- */}
      {fullscreenImage && (() => {
        const isSlot1Normal = fullscreenImage.url === comparisonData.normalPhotoUrl;
        const isSlot1Good = fullscreenImage.url === comparisonData.goodPhotoUrl;
        const isSlot2Normal = fullscreenImage.url === comparisonData.normalPhotoUrl2;
        const isSlot2Good = fullscreenImage.url === comparisonData.goodPhotoUrl2;

        const canSwap = 
          (isSlot1Normal && Boolean(comparisonData.goodPhotoUrl)) ||
          (isSlot1Good && Boolean(comparisonData.normalPhotoUrl)) ||
          (isSlot2Normal && Boolean(comparisonData.goodPhotoUrl2)) ||
          (isSlot2Good && Boolean(comparisonData.normalPhotoUrl2));

        const handleSwapInLightbox = (e?: React.MouseEvent) => {
          if (e) e.stopPropagation();
          if (isSlot1Normal && comparisonData.goodPhotoUrl) {
            setFullscreenImage({ url: comparisonData.goodPhotoUrl, title: 'Foto 1 • Postura Buona & Allineata' });
            setOverlayActiveState('good');
            setOverlaySwapCount(c => c + 1);
          } else if (isSlot1Good && comparisonData.normalPhotoUrl) {
            setFullscreenImage({ url: comparisonData.normalPhotoUrl, title: 'Foto 1 • Postura Normale / Afflosciata' });
            setOverlayActiveState('normal');
            setOverlaySwapCount(c => c + 1);
          } else if (isSlot2Normal && comparisonData.goodPhotoUrl2) {
            setFullscreenImage({ url: comparisonData.goodPhotoUrl2, title: 'Foto 2 • Postura Buona & Allineata' });
            setOverlayActiveState('good');
            setOverlaySwapCount(c => c + 1);
          } else if (isSlot2Good && comparisonData.normalPhotoUrl2) {
            setFullscreenImage({ url: comparisonData.normalPhotoUrl2, title: 'Foto 2 • Postura Normale / Afflosciata' });
            setOverlayActiveState('normal');
            setOverlaySwapCount(c => c + 1);
          }
        };

        return (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-in fade-in select-none"
            onClick={() => setFullscreenImage(null)}
          >
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer z-30"
            >
              <X className="w-6 h-6" />
            </button>

            <div 
              className={`max-w-md w-full max-h-[85vh] flex flex-col items-center select-none ${canSwap ? 'cursor-pointer' : ''}`}
              onClick={canSwap ? handleSwapInLightbox : undefined}
            >
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={fullscreenImage.url}
                  alt={fullscreenImage.title}
                  className="w-full max-h-[70vh] object-contain rounded-2xl border-2 border-cyan-400/40 shadow-2xl active:scale-[0.99] transition-transform"
                  referrerPolicy="no-referrer"
                />
                {canSwap && (
                  <div className={`absolute top-2 left-2 px-3 py-1 rounded-xl text-[10px] font-black border backdrop-blur-md pointer-events-none ${
                    isSlot1Normal || isSlot2Normal 
                      ? 'bg-black/80 text-rose-300 border-rose-500/40' 
                      : 'bg-black/80 text-emerald-300 border-emerald-500/40'
                  }`}>
                    {isSlot1Normal || isSlot2Normal ? '❌ 1. Postura Normale' : '✅ 2. Postura Buona'}
                  </div>
                )}
              </div>

              <p className="mt-2.5 text-sm font-extrabold text-center text-cyan-300">
                {fullscreenImage.title}
              </p>

              {canSwap && (
                <div className="flex flex-col items-center gap-2 mt-2 w-full">
                  <button
                    type="button"
                    onClick={handleSwapInLightbox}
                    className="w-full max-w-xs py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-neon active:scale-95 transition-all cursor-pointer z-30"
                  >
                    <Repeat className="w-4 h-4 text-black" />
                    <span>
                      ⚡ Clicca per Scambiare ({isSlot1Normal || isSlot2Normal ? 'Vedi Buona' : 'Vedi Normale'})
                    </span>
                  </button>
                </div>
              )}

              <span className="text-[10px] text-gray-400 mt-2 text-center">
                {canSwap 
                  ? '👆 Tocca l\'immagine o il tasto a ripetizione per notare le differenze • Sfondo per chiudere' 
                  : 'Tocca ovunque per chiudere'}
              </span>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
