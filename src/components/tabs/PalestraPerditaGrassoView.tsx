import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Dumbbell,
  Flame,
  Scale,
  HeartPulse,
  Activity,
  Zap,
  TrendingDown,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Apple,
  Info,
  Layers,
  ChevronDown,
  RefreshCw,
  Droplet,
  Moon,
  Target,
  LineChart,
  Calendar
} from 'lucide-react';
import { scrollToTop, scrollToElement } from '../../utils/scrollHelper';

interface PalestraPerditaGrassoViewProps {
  onBack: () => void;
}

export const PalestraPerditaGrassoView: React.FC<PalestraPerditaGrassoViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutte' | 'palestra' | 'deficit' | 'biologia' | 'sessione' | 'nutrizione' | 'informazioni' | 'informazioni2' | 'quadro_completo' | 'proteine_scienza' | 'fabbisogno_tid' | 'fabbisogno_tid_2' | 'grassi_scienza' | 'grassi_scienza_2' | 'bustine_palestra' | 'piegamenti_lavoro' | 'strategia_personale' | 'volume_calisthenics' | 'pap_seconda_serie'>('tutte');
  const noteContentRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (tab: typeof activeTab) => {
    setActiveTab(tab);
    if (tab !== 'tutte') {
      scrollToElement(noteContentRef.current, 68);
    }
  };

  // Scroll solo all'apertura della nota (mount)
  React.useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Top Navigation */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-orange-400 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>
        <span className="text-[11px] font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-xl border border-orange-500/20 flex items-center gap-1.5">
          <Dumbbell className="w-3.5 h-3.5 text-orange-400" />
          Palestra & Dimagrimento
        </span>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-orange-500/30 relative overflow-hidden space-y-3 bg-gradient-to-br from-orange-950/40 via-black/85 to-amber-950/30 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-black uppercase tracking-widest border border-orange-500/30 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-orange-400" />
            ★ Note Scritte Da Me
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Guida Completa & Ricomposizione</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
          <span>Palestra e organizzazione per perdere grasso</span>
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Tutto il sistema integrato: tecnica dei pesi e buffer, deficit calorico sostenibile senza fame, protezione totale della massa magra, scaletta pratica della sessione passo-passo e gestione di proteine, carboidrati e glicemia.
        </p>

        {/* Tasti Informazioni Rapidi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {/* 1# Informazioni */}
          <div
            onClick={() => handleSelectTab('informazioni')}
            className="p-3 rounded-2xl bg-gradient-to-r from-purple-950/50 via-indigo-950/40 to-black/70 border border-purple-500/40 hover:border-purple-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-purple-500/20"
          >
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 group-hover:bg-purple-500 group-hover:text-black transition-all shrink-0">
                <Info className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 1# Info
                </span>
                <h3 className="text-xs font-extrabold text-white group-hover:text-purple-200 transition-colors line-clamp-1">
                  Stretching vs Rigidità • Flessioni & Verticale
                </h3>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 group-hover:bg-purple-500 group-hover:text-black transition-all shrink-0">
              Apri ➔
            </span>
          </div>

          {/* 2# Informazioni */}
          <div
            onClick={() => handleSelectTab('informazioni2')}
            className="p-3 rounded-2xl bg-gradient-to-r from-blue-950/50 via-indigo-950/40 to-black/70 border border-blue-500/40 hover:border-blue-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-blue-500/20"
          >
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-black transition-all shrink-0">
                <Moon className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 2# Info
                </span>
                <h3 className="text-xs font-extrabold text-white group-hover:text-blue-200 transition-colors line-clamp-1">
                  Muscoli a Riposo • Grasso • Notte & GH
                </h3>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 group-hover:bg-blue-500 group-hover:text-black transition-all shrink-0">
              Apri ➔
            </span>
          </div>

          {/* 3# Informazioni: Il Quadro Completo */}
          <div
            onClick={() => handleSelectTab('quadro_completo')}
            className="p-3 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-teal-950/40 to-black/70 border border-emerald-500/40 hover:border-emerald-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-emerald-500/20"
          >
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-black transition-all shrink-0">
                <Target className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 3# Info: Quadro Completo
                </span>
                <h3 className="text-xs font-extrabold text-white group-hover:text-emerald-200 transition-colors line-clamp-1">
                  Strategia, Scienza Grasso Viso/Pancia & Controllo
                </h3>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-black transition-all shrink-0">
              Apri ➔
            </span>
          </div>

          {/* 4# Informazioni: Proteine & Grasso */}
          <div
            onClick={() => handleSelectTab('proteine_scienza')}
            className="p-3 rounded-2xl bg-gradient-to-r from-amber-950/50 via-rose-950/40 to-black/70 border border-amber-500/40 hover:border-amber-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-amber-500/20"
          >
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-black transition-all shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 4# Info: Proteine & Grasso
                </span>
                <h3 className="text-xs font-extrabold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                  Proteine e Grasso • ~1 g/kg (~75 g) & Termogenesi (TID)
                </h3>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-black transition-all shrink-0">
              Apri ➔
            </span>
          </div>

          {/* Box Unificato per 5# Info: Parte 1 & Parte 2 Affiancati */}
          <div className="col-span-1 sm:col-span-2 p-2 rounded-2xl bg-gradient-to-r from-rose-950/30 via-orange-950/20 to-black/60 border border-orange-500/30 space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-orange-400" />
                5# Info • Argomento Fabbisogno & Eccesso Proteico (Diviso in 2 Parti Collegate)
              </span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md">
                1 & 2 Affiancati
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* 5# Parte 1 (Sinistra) */}
              <div
                onClick={() => handleSelectTab('fabbisogno_tid')}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer group flex items-center justify-between ${
                  activeTab === 'fabbisogno_tid'
                    ? 'bg-rose-500/20 border-rose-400 shadow-md shadow-rose-500/20'
                    : 'bg-black/60 border-rose-500/30 hover:border-rose-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30 group-hover:bg-rose-500 group-hover:text-black transition-all shrink-0">
                    <Flame className="w-3.5 h-3.5 text-rose-400 group-hover:text-black" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 flex items-center gap-1">
                      Parte 1 (Sinistra)
                    </span>
                    <h3 className="text-xs font-extrabold text-white group-hover:text-rose-200 transition-colors line-clamp-1">
                      1g/kg, Turnover & TID
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30 group-hover:bg-rose-500 group-hover:text-black transition-all shrink-0">
                  Apri ➔
                </span>
              </div>

              {/* 5# Parte 2 (Destra) */}
              <div
                onClick={() => handleSelectTab('fabbisogno_tid_2')}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer group flex items-center justify-between ${
                  activeTab === 'fabbisogno_tid_2'
                    ? 'bg-orange-500/20 border-orange-400 shadow-md shadow-orange-500/20'
                    : 'bg-black/60 border-orange-500/40 hover:border-orange-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30 group-hover:bg-orange-500 group-hover:text-black transition-all shrink-0">
                    <Zap className="w-3.5 h-3.5 text-orange-400 group-hover:text-black" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 flex items-center gap-1">
                      Parte 2 (Destra)
                    </span>
                    <h3 className="text-xs font-extrabold text-white group-hover:text-orange-200 transition-colors line-clamp-1">
                      Proteine in Eccesso & Gluconeogenesi
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-orange-500/20 text-orange-300 border border-orange-500/30 group-hover:bg-orange-500 group-hover:text-black transition-all shrink-0">
                  Apri ➔
                </span>
              </div>
            </div>
          </div>

          {/* Box Unificato per 6# Info: I Grassi (Parte 1 & Parte 2 Affiancati) */}
          <div className="col-span-1 sm:col-span-2 p-2 rounded-2xl bg-gradient-to-r from-yellow-950/30 via-amber-950/20 to-black/60 border border-yellow-500/30 space-y-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
                <Droplet className="w-3 h-3 text-yellow-400" />
                6# Info • I Grassi (Diviso in 2 Parti Collegate)
              </span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md">
                1 & 2 Affiancati
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* 6# Parte 1 (Sinistra) */}
              <div
                onClick={() => handleSelectTab('grassi_scienza')}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer group flex items-center justify-between ${
                  activeTab === 'grassi_scienza'
                    ? 'bg-yellow-500/20 border-yellow-400 shadow-md shadow-yellow-500/20'
                    : 'bg-black/60 border-yellow-500/30 hover:border-yellow-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 group-hover:bg-yellow-500 group-hover:text-black transition-all shrink-0">
                    <Droplet className="w-3.5 h-3.5 text-yellow-400 group-hover:text-black" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400 flex items-center gap-1">
                      Parte 1 (Sinistra)
                    </span>
                    <h3 className="text-xs font-extrabold text-white group-hover:text-yellow-200 transition-colors line-clamp-1">
                      Digestione, Carne & Notte 24h
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 group-hover:bg-yellow-500 group-hover:text-black transition-all shrink-0">
                  Apri ➔
                </span>
              </div>

              {/* 6# Parte 2 (Destra) */}
              <div
                onClick={() => handleSelectTab('grassi_scienza_2')}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer group flex items-center justify-between ${
                  activeTab === 'grassi_scienza_2'
                    ? 'bg-amber-500/20 border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-black/60 border-amber-500/40 hover:border-amber-400'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-black transition-all shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:text-black" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                      Parte 2 (Destra)
                    </span>
                    <h3 className="text-xs font-extrabold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                      Grassi Dieta vs Grasso Corpo (Mito)
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-black transition-all shrink-0">
                  Apri ➔
                </span>
              </div>
            </div>
          </div>

          {/* 7# Informazioni: Zucchero in Palestra & Calorie (Stabilità 120-130) */}
          <div
            onClick={() => handleSelectTab('bustine_palestra')}
            className="p-3 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-teal-950/40 to-black/70 border border-emerald-500/40 hover:border-emerald-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-emerald-500/20"
          >
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-black transition-all shrink-0">
                <Zap className="w-4 h-4 text-emerald-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 7# Info: Zucchero Palestra
                </span>
                <h3 className="text-xs font-extrabold text-white group-hover:text-emerald-200 transition-colors line-clamp-1">
                  I Conti delle Bustine, Calorie & Stabilità 120-130 mg/dL
                </h3>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-black transition-all shrink-0">
              Apri ➔
            </span>
          </div>

          {/* 8# Informazioni: Piegamenti & Lavoro Fisico */}
          <div
            onClick={() => handleSelectTab('piegamenti_lavoro')}
            className="p-3 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-blue-950/40 to-black/70 border border-cyan-500/40 hover:border-cyan-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-cyan-500/20 col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-black transition-all shrink-0">
                <Activity className="w-4 h-4 text-cyan-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 8# Info: Piegamenti & Lavoro
                </span>
                <h3 className="text-xs font-extrabold text-white group-hover:text-cyan-200 transition-colors line-clamp-1">
                  Piegamenti (Flessioni) & Lavoro Fisico vs Palestra
                </h3>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-black transition-all shrink-0">
              Apri ➔
            </span>
          </div>

          {/* 9# Informazioni: Strategia Chirurgica Personale (16 anni • 75 kg • Settimana al Millimetro) */}
          <div
            onClick={() => handleSelectTab('strategia_personale')}
            className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-950/60 via-orange-950/40 to-black/80 border-2 border-rose-500/50 hover:border-rose-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-rose-500/25 col-span-1 sm:col-span-2 lg:col-span-3"
          >
            <div className="flex items-center space-x-3">
              <span className="p-2.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 group-hover:bg-rose-500 group-hover:text-black transition-all shrink-0">
                <Sparkles className="w-4 h-4 text-rose-400 group-hover:text-black" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-rose-400" /> 9# Info: Strategia Personale Chirurgica • Dati Biometrici (16a • 1,75m • 75kg)
                </span>
                <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-rose-200 transition-colors">
                  Skinny-Fat ad Asciutto: Deficit 700-900 kcal, Proteine 1,5-1,6g/kg, Camminata "Emblema d'Oro" & Settimana al Millimetro
                </h3>
                <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5">
                  Lun-Sab a 1.400-1.600 kcal, cardio 10+10 min, recupero gambe al sabato, domenica leptina e destino delle proteine se salti i pesi.
                </p>
              </div>
            </div>
            <span className="text-xs font-black px-3 py-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 group-hover:bg-rose-500 group-hover:text-black transition-all shrink-0 ml-2">
              Apri ➔
            </span>
          </div>

          {/* 10# Informazioni: Volume Extra, Cedimento 6 vs 14, Bicipiti & Calisthenics Off */}
          <div
            onClick={() => handleSelectTab('volume_calisthenics')}
            className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-violet-950/40 to-black/80 border-2 border-indigo-500/50 hover:border-indigo-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-indigo-500/25 col-span-1 sm:col-span-2 lg:col-span-3"
          >
            <div className="flex items-center space-x-3">
              <span className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-black transition-all shrink-0">
                <Dumbbell className="w-4 h-4 text-indigo-400 group-hover:text-black" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-indigo-400" /> 10# Info: Gestione Serie, Bicipiti & Calisthenics nei Giorni Off
                </span>
                <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-indigo-200 transition-colors">
                  Stimolare Senza Annientare, Blocco a 6 vs 14 Reps, 9 kg x 12, Serie di Avvicinamento & Recupero Attivo Braccia
                </h3>
                <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5">
                  Cortisolo da volume extra, ATP/acido lattico, drop-set e warm-up sets per bicipiti, dips/trazioni al 50-60% nei giorni off.
                </p>
              </div>
            </div>
            <span className="text-xs font-black px-3 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-black transition-all shrink-0 ml-2">
              Apri ➔
            </span>
          </div>

          {/* 11# Informazioni: Seconda Serie più Leggera (PAP) & Regola delle 3 Serie */}
          <div
            onClick={() => handleSelectTab('pap_seconda_serie')}
            className="p-3.5 rounded-2xl bg-gradient-to-r from-fuchsia-950/60 via-purple-950/40 to-black/80 border-2 border-fuchsia-500/50 hover:border-fuchsia-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-fuchsia-500/25 col-span-1 sm:col-span-2 lg:col-span-3"
          >
            <div className="flex items-center space-x-3">
              <span className="p-2.5 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 group-hover:bg-fuchsia-500 group-hover:text-black transition-all shrink-0">
                <Sparkles className="w-4 h-4 text-fuchsia-400 group-hover:text-black" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-fuchsia-400 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-fuchsia-400" /> 11# Info: Seconda Serie più "Leggera" (PAP) & Efficienza 3 Serie
                </span>
                <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-fuchsia-200 transition-colors">
                  Neurofisiologia PAP, Viscosità & Pump + Perché NON Tornare su un Muscolo Già Allenato (Tricipiti / Sinergici)
                </h3>
                <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5">
                  Reclutamento fibre rapide, liquido sinoviale, finestra magica 2ª-3ª serie e massima intensità sulle 3 serie a cedimento.
                </p>
              </div>
            </div>
            <span className="text-xs font-black px-3 py-1.5 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 group-hover:bg-fuchsia-500 group-hover:text-black transition-all shrink-0 ml-2">
              Apri ➔
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => handleSelectTab('tutte')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutte'
                ? 'bg-orange-500 text-black shadow-md shadow-orange-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutta la Guida
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('palestra')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'palestra'
                ? 'bg-orange-500 text-black shadow-md shadow-orange-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Dumbbell className="w-3.5 h-3.5" />
            1. Pesi & Esercizi
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('deficit')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'deficit'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5" />
            2. Deficit & Bilancia
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('biologia')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'biologia'
                ? 'bg-red-500 text-white shadow-md shadow-red-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            3. Biologia Muscolare
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('sessione')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'sessione'
                ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            4. Routine Passo-Passo
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('nutrizione')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'nutrizione'
                ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Apple className="w-3.5 h-3.5" />
            5. Nutrizione & Miti
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('informazioni')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'informazioni'
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/30 font-extrabold'
                : 'bg-purple-500/10 text-purple-300 hover:text-white border border-purple-500/30'
            }`}
          >
            <Info className="w-3.5 h-3.5 text-purple-400" />
            6. 1# Info
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('informazioni2')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'informazioni2'
                ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30 font-extrabold'
                : 'bg-blue-500/10 text-blue-300 hover:text-white border border-blue-500/30'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-blue-400" />
            7. 2# Info
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('quadro_completo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'quadro_completo'
                ? 'bg-teal-500 text-black shadow-md shadow-teal-500/30 font-extrabold'
                : 'bg-teal-500/10 text-teal-300 hover:text-white border border-teal-500/30'
            }`}
          >
            <Target className="w-3.5 h-3.5 text-teal-400" />
            8. 3# Quadro Completo
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('proteine_scienza')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'proteine_scienza'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-amber-500/10 text-amber-300 hover:text-white border border-amber-500/30'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            9. 4# Proteine (~1g/kg & TID)
          </button>

          {/* Tasti 5# Parte 1 e Parte 2 - Inseparabili, Uniti e Affiancati Sinistra/Destra */}
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-gradient-to-r from-rose-950/40 to-orange-950/40 border border-orange-500/40 shadow-sm shrink-0">
            <button
              type="button"
              onClick={() => handleSelectTab('fabbisogno_tid')}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'fabbisogno_tid'
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                  : 'bg-rose-500/20 text-rose-300 hover:text-white border border-rose-500/30'
              }`}
            >
              <Flame className="w-3 h-3 text-rose-400" />
              <span>10. 5# Parte 1 (Sx)</span>
            </button>
            <span className="text-gray-500 font-bold text-xs">/</span>
            <button
              type="button"
              onClick={() => handleSelectTab('fabbisogno_tid_2')}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'fabbisogno_tid_2'
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 font-extrabold'
                  : 'bg-orange-500/20 text-orange-300 hover:text-white border border-orange-500/30'
              }`}
            >
              <Zap className="w-3 h-3 text-orange-400" />
              <span>11. 5# Parte 2 (Dx)</span>
            </button>
          </div>

          {/* Tasti 6# Parte 1 e Parte 2 - Inseparabili, Uniti e Affiancati Sinistra/Destra */}
          <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-gradient-to-r from-yellow-950/40 to-amber-950/40 border border-yellow-500/40 shadow-sm shrink-0">
            <button
              type="button"
              onClick={() => handleSelectTab('grassi_scienza')}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'grassi_scienza'
                  ? 'bg-yellow-500 text-black shadow-md shadow-yellow-500/30 font-extrabold'
                  : 'bg-yellow-500/20 text-yellow-300 hover:text-white border border-yellow-500/30'
              }`}
            >
              <Droplet className="w-3 h-3 text-yellow-400" />
              <span>12. 6# Parte 1 (Sx)</span>
            </button>
            <span className="text-gray-500 font-bold text-xs">/</span>
            <button
              type="button"
              onClick={() => handleSelectTab('grassi_scienza_2')}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'grassi_scienza_2'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30 font-extrabold'
                  : 'bg-amber-500/20 text-amber-300 hover:text-white border border-amber-500/30'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>13. 6# Parte 2 (Dx)</span>
            </button>
          </div>

          {/* 14. 7# Info: Zucchero in Palestra, Calorie & Stabilità 120-130 mg/dL */}
          <button
            type="button"
            onClick={() => handleSelectTab('bustine_palestra')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'bustine_palestra'
                ? 'bg-emerald-400 text-black shadow-md shadow-emerald-500/30 font-extrabold'
                : 'bg-emerald-500/10 text-emerald-300 hover:text-white border border-emerald-500/30'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            14. 7# Info: Bustine & 120-130
          </button>

          {/* 15. 8# Info: Piegamenti e Lavoro Fisico */}
          <button
            type="button"
            onClick={() => handleSelectTab('piegamenti_lavoro')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'piegamenti_lavoro'
                ? 'bg-cyan-400 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-cyan-500/10 text-cyan-300 hover:text-white border border-cyan-500/30'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            15. 8# Info: Piegamenti & Lavoro
          </button>

          {/* 16. 9# Info: Strategia Personale (16a • 75kg) */}
          <button
            type="button"
            onClick={() => handleSelectTab('strategia_personale')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'strategia_personale'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-rose-500/10 text-rose-300 hover:text-white border border-rose-500/30'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            16. 9# Info: Strategia Personale (16a • 75kg)
          </button>

          {/* 17. 10# Info: Volume, Serie, Bicipiti & Calisthenics */}
          <button
            type="button"
            onClick={() => handleSelectTab('volume_calisthenics')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'volume_calisthenics'
                ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/30 font-extrabold'
                : 'bg-indigo-500/10 text-indigo-300 hover:text-white border border-indigo-500/30'
            }`}
          >
            <Dumbbell className="w-3.5 h-3.5 text-indigo-400" />
            17. 10# Info: Serie, Bicipiti & Calisthenics Off
          </button>

          {/* 18. 11# Info: Seconda Serie (PAP) & Regola 3 Serie */}
          <button
            type="button"
            onClick={() => handleSelectTab('pap_seconda_serie')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'pap_seconda_serie'
                ? 'bg-fuchsia-500 text-white shadow-md shadow-fuchsia-500/30 font-extrabold'
                : 'bg-fuchsia-500/10 text-fuchsia-300 hover:text-white border border-fuchsia-500/30'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-fuchsia-400" />
            18. 11# Info: PAP 2ª Serie & Regola 3 Serie
          </button>
        </div>
      </div>

      <div ref={noteContentRef} className="scroll-mt-16" />

      {/* ============================================================= */}
      {/* SEZIONE 1: GUIDA ALLENAMENTO & RECUPERO IN PALESTRA          */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'palestra') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-orange-500/20 text-orange-300 border border-orange-500/30">
                <Dumbbell className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-orange-400">
                  Pilastro 1 • Sala Pesi
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Guida Allenamento & Recupero in Palestra
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-orange-500/15 text-orange-300 border border-orange-500/30">
              Tecnica & Buffer
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* 1. Esecuzione degli Esercizi */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-orange-500/30 space-y-2.5 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  1. Esecuzione degli Esercizi (Tensione Muscolare)
                </h3>
              </div>
              <ul className="list-disc list-inside text-xs leading-relaxed text-gray-300 space-y-1.5 pl-1">
                <li>
                  <strong className="text-orange-200">Controllo del movimento:</strong> Esegui la fase eccentrica (discesa) in modo lento e controllato (2-3 secondi) e sali in modo fluido, senza dare strappi o usare slanci.
                </li>
                <li>
                  <strong className="text-orange-200">Tensione costante (TUT):</strong> Mantieni il muscolo sempre attivo durante tutto il movimento, evitando di scaricare il peso nei punti morti.
                </li>
              </ul>
            </div>

            {/* 2. Gestione Serie & Ripetizioni */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-orange-500/30 space-y-2.5 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  2. Serie, Ripetizioni & Buffer
                </h3>
              </div>
              <ul className="list-disc list-inside text-xs leading-relaxed text-gray-300 space-y-1.5 pl-1">
                <li>
                  <strong className="text-orange-200">Intensità ideale (12 Rep):</strong> Scegli un carico che ti permetta di completare le 12 ripetizioni di seguito, arrivando alle ultime 1-2 a fatica ma con una tecnica pulita (mantenendo 1-2 ripetizioni di margine dal cedimento totale).
                </li>
                <li>
                  <strong className="text-red-300">Evita di spezzare le serie:</strong> Non fermarti a metà serie per poi riprendere. Se non riesci a fare tutte le ripetizioni di fila, il peso è troppo alto.
                </li>
                <li>
                  <strong className="text-orange-200">Recupero tra le serie:</strong> Riposa 60–90 secondi (fino a 2 minuti per gli esercizi più grandi) tra una serie e l'altra per ripristinare le riserve energetiche (ATP) e mantenere alta la prestazione.
                </li>
              </ul>
            </div>

            {/* 3. Struttura della Sessione */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-orange-500/30 space-y-2.5 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  3. Struttura della Sessione in Palestra
                </h3>
              </div>
              <ul className="list-disc list-inside text-xs leading-relaxed text-gray-300 space-y-1.5 pl-1">
                <li>
                  <strong className="text-orange-200">Riscaldamento:</strong> 10 minuti di tapis roulant all'inizio per alzare la temperatura corporea e preparare le articolazioni.
                </li>
                <li>
                  <strong className="text-orange-200">Allenamento con i Pesi:</strong> Lavoro completo sui muscoli con carichi controllati per stimolare la massa magra e la ricomposizione corporea.
                </li>
                <li>
                  <strong className="text-orange-200">Defaticamento / Cardio finale:</strong> 10 minuti di tapis roulant o cyclette alla fine (puoi portarli a 15-20 minuti se vuoi consumare qualche caloria in più senza aggiungere uscite nei giorni OFF).
                </li>
              </ul>
            </div>

            {/* 4. Giornate di Riposo (Rest Days) */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-orange-500/30 space-y-2.5 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  4. Giornate di Riposo (Rest Days)
                </h3>
              </div>
              <ul className="list-disc list-inside text-xs leading-relaxed text-gray-300 space-y-1.5 pl-1">
                <li>
                  <strong className="text-emerald-300">Recupero Attivo:</strong> Sfrutta i giorni OFF per fare stretching leggero ed esercizi per la postura. Servono a migliorare la mobilità e velocizzare il recupero muscolare.
                </li>
                <li>
                  <strong className="text-gray-200">Movimento quotidiano:</strong> Non occorre fare camminate dedicate se non hai tempo o la possibilità; i normali spostamenti della giornata bastano. Evita attività ad alto impatto come la corda nei giorni di riposo per far recuperare bene le gambe.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 2: DEFICIT CALORICO & DIMAGRIMENTO                   */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'deficit') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <TrendingDown className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Pilastro 2 • Bilancio Energetico
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Guida Deficit Calorico & Dimagrimento Sostenibile
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              200-500g / Sett.
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-amber-500/30 space-y-4 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            {/* Box Combinazione d'Oro */}
            <div className="p-3.5 rounded-2xl bg-amber-950/25 border border-amber-500/30 space-y-1.5">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                La Combinazione d'Oro: Deficit Leggero + Pesi
              </span>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Il deficit calorico dice al corpo di bruciare il grasso per produrre energia, mentre i pesi dicono al corpo di proteggere e mantenere i muscoli.
              </p>
            </div>

            {/* Metodo 1 vs Metodo 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                <strong className="text-emerald-300 block font-bold text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Metodo 1: Aggiungendo la Palestra (Consigliato)
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300">
                  Mantenendo lo stesso cibo di prima (circa 1600 kcal) e aggiungendo i pesi e il tapis roulant, il consumo energetico aumenta in modo naturale. È l'approccio più sostenibile: hai le energie per spingere, stimoli la massa magra e bruci il grasso senza soffrire la fame.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-1.5">
                <strong className="text-red-300 block font-bold text-xs flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  Metodo 2: Tagliare solo il Cibo (Sconsigliato)
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300">
                  Se si riducono le calorie senza stimolare i muscoli con i pesi, si perde peso ma svuotando la massa magra, oltre ad avvertire molta più fame, debolezza e stanchezza cronica durante la giornata.
                </p>
              </div>
            </div>

            {/* Effetto Estetico e Peso sulla Bilancia */}
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                Effetto Estetico & Peso sulla Bilancia (Ricomposizione Corporea)
              </strong>
              <p className="text-xs text-gray-300 leading-relaxed">
                Mangiando fonti proteiche di qualità (pollo, carne magra, pesce, uova) e allenandosi in palestra, il corpo usa le calorie per riparare i muscoli e attinge dal grasso per produrre energia.
              </p>
              <p className="text-xs text-amber-200 leading-relaxed font-medium">
                🎯 Non occorre forzare il corpo a rimanere per forza a 76 kg. Lasciando che il peso scenda gradualmente (es. fino a 72-73 kg), il grasso corporeo globale diminuirà, sfinando anche i tratti del viso e definendo la muscolatura del collo e del corpo.
              </p>
            </div>

            {/* I 3 Segnali per Capire se Sei in Deficit */}
            <div className="space-y-2 pt-1">
              <strong className="text-white block font-bold text-xs">
                Come capire in modo pratico se sei in deficit (I 3 Segnali):
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-[10px] font-black uppercase text-amber-300 block">1. La Bilancia</span>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Pésati 2-3 volte a settimana al mattino a digiuno. Se la media scende di <strong>200-500 grammi a settimana</strong>, sei nel deficit perfetto. Se scende oltre 1 kg, è troppo severo.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-[10px] font-black uppercase text-amber-300 block">2. Specchio & Vestiti</span>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Pantaloni più comodi in vita e tratti del viso e dell'addome gradualmente più affilati e definiti, anche quando la bilancia scende lentamente.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-[10px] font-black uppercase text-amber-300 block">3. Forza in Palestra</span>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Se il carburante è giusto, mantieni i carichi o li aumenti nel tempo. Se ti senti privo di forze e i pesi crollano, stai mangiando troppo poco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 3: BIOLOGIA E PROTEZIONE DELLA MASSA MAGRA            */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'biologia') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-red-500/20 text-red-300 border border-red-500/30">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-red-400">
                  Pilastro 3 • Fisiologia Umana
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Perché Non Bisogna Perdere Peso Troppo Velocemente
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-red-500/15 text-red-300 border border-red-500/30">
              Anti-Catabolismo
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-red-500/30 space-y-3.5 shadow-[0_0_20px_rgba(239,68,68,0.1)]">
            <p className="text-xs text-gray-200 leading-relaxed font-medium bg-red-950/20 p-3 rounded-2xl border border-red-500/20">
              Se alleno i muscoli in palestra, come fa il corpo a bruciarli? La risposta sta nei limiti biologici del corpo umano e nel modo in cui l'energia viene gestita quando si va troppo veloci.
            </p>

            <div className="space-y-3 text-xs text-gray-300">
              {/* 1. Velocità massima combustione grasso */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  1. La velocità massima con cui il corpo può bruciare grasso:
                </strong>
                <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1 pl-2">
                  <li>Il tessuto adiposo ha un limite fisico quotidiano di quanta energia può rilasciare.</li>
                  <li>Perdere un intero chilo di solo grasso in 7 giorni richiede un deficit enorme (~7000 calorie).</li>
                  <li>Il corpo non riesce ad estrarre tutta quell'energia così rapidamente: in emergenza energetica smantella le proteine dei muscoli (neoglucogenesi) per nutrire cervello e organi vitali.</li>
                </ul>
              </div>

              {/* 2. Perché il muscolo viene intaccato */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  2. Perché il muscolo viene intaccato anche se lo alleni?
                </strong>
                <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1 pl-2">
                  <li>Per riparare e mantenere il muscolo dopo i pesi servono energia e proteine.</li>
                  <li>Se le calorie sono troppo basse, non ci sono risorse per riparare le micro-lesioni.</li>
                  <li>Il corpo usa il muscolo come "carburante di riserva" perché costa molte calorie da mantenere, mentre il grasso è la scorta di sopravvivenza.</li>
                </ul>
              </div>

              {/* 3. Campanelli d'allarme */}
              <div className="p-3.5 rounded-2xl bg-red-950/30 border border-red-500/30 space-y-2">
                <strong className="text-red-200 block font-bold text-xs flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  I 3 segnali inconfondibili che stai perdendo muscolo:
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-gray-300">
                  <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                    <strong className="text-white block mb-0.5">Perdita di Forza:</strong> I carichi crollano da una settimana all'altra.
                  </div>
                  <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                    <strong className="text-white block mb-0.5">Aspetto Svuotato:</strong> Non sembri più definito, ma sgonfio e morbido (skinny fat).
                  </div>
                  <div className="p-2 rounded-xl bg-black/50 border border-white/5">
                    <strong className="text-white block mb-0.5">Stanchezza Cronica:</strong> Sistema nervoso in sofferenza e fame ossessiva.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 4: GUIDA PASSO-PASSO PER LA GIORNATA DI PALESTRA     */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'sessione') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Clock className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  Pilastro 4 • Esempio Pratico
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Guida Passo-Passo per la Giornata di Palestra
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Dalla Casa alla Doccia
            </span>
          </div>

          <div className="space-y-3.5">
            {/* 1. Prima di andare in palestra */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-cyan-500/30 space-y-2.5 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  1. Prima di andare in palestra (A Casa)
                </h3>
              </div>
              <ul className="list-disc list-inside text-xs leading-relaxed text-gray-300 space-y-1.5 pl-1">
                <li>
                  <strong className="text-white">Pasto pre-allenamento:</strong> Mangia normalmente circa 1,5 - 2 ore prima di allenarti (es. spuntino con un frutto e fonte proteica, oppure pranzo equilibrato con carboidrati e proteine).
                </li>
                <li>
                  <strong className="text-white">Idratazione:</strong> Portati una borraccia da 1 litro dietro.
                </li>
              </ul>
            </div>

            {/* 2. In palestra: Le 3 Fasi */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-cyan-500/30 space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  2. Le 3 Fasi della Sessione
                </h3>
              </div>

              {/* Fase 1 */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-cyan-300 block font-bold text-xs">
                  Fase 1: Riscaldamento (10 Minuti)
                </strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Tapis roulant per 10 minuti a passo svelto (5,5 - 6 km/h, senza correre). Alza la temperatura corporea, attiva la circolazione e prepara le articolazioni.
                </p>
              </div>

              {/* Fase 2 */}
              <div className="p-3 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
                <strong className="text-cyan-200 block font-bold text-xs">
                  Fase 2: Gli Esercizi con i Pesi (Scheda 3x12)
                </strong>
                <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-1 pl-1">
                  <li><strong>Trova il carico:</strong> Primo giro leggero per testare il movimento.</li>
                  <li><strong>Esegui la serie:</strong> Discesa lenta (2-3s), salita fluida. Tutte e 12 le ripetizioni di fila con 1-2 di margine.</li>
                  <li><strong>Pausa:</strong> 60–90 secondi col cronometro prima della serie successiva.</li>
                  <li><strong>Regola chiave:</strong> Se alla 3ª serie arrivi alla 10ª e il peso non sale più pulito, fermati a 10 invece di spezzare la serie.</li>
                </ul>
              </div>

              {/* Fase 3 */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-cyan-300 block font-bold text-xs">
                  Fase 3: Defaticamento (10-15 Minuti)
                </strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Tapis roulant o cyclette a ritmo tranquillo per abbassare i battiti, favorire lo smaltimento dei metaboliti e bruciare calorie extra.
                </p>
              </div>
            </div>

            {/* 3. Dopo la palestra & Lungo Termine */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-cyan-500/30 space-y-2.5 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  3. Sovraccarico Progressivo & Lungo Termine
                </h3>
              </div>
              <ul className="list-disc list-inside text-xs leading-relaxed text-gray-300 space-y-1.5 pl-1">
                <li>
                  <strong className="text-white">Sovraccarico Progressivo (Progressive Overload):</strong> Quando le 12 ripetizioni diventano facili con 3-4 di riserva, aumenta leggermente il carico (es. da 10 a 12 kg).
                </li>
                <li>
                  <strong className="text-white">Aggiorna la Scheda (Ogni 6-8 settimane):</strong> Varia stimoli e angolazioni con l'istruttore per evitare che il corpo si adatti.
                </li>
                <li>
                  <strong className="text-white">Check ogni 3-4 settimane:</strong> Se il peso scende (200-500g) e la forza tiene, avanti così. Se stalla da 4 settimane, aggiungi 5-10 min di tapis roulant.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 5: NUTRIZIONE, GLICEMIA E MITI DA SFATARE            */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'nutrizione') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Apple className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Pilastro 5 • Nutrizione & Glicemia
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Proteine, Carboidrati & Miti da Sfatare
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              Scienza Chiara
            </span>
          </div>

          <div className="space-y-3.5">
            {/* Perché distribuire le proteine a pranzo */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-emerald-500/30 space-y-2.5 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-1.5 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                Perché distribuire le proteine anche a pranzo (non solo a cena)
              </h3>
              <ul className="list-disc list-inside text-xs leading-relaxed text-gray-300 space-y-1.5 pl-1">
                <li>
                  <strong className="text-emerald-200">Assorbimento e sintesi muscolare:</strong> Il corpo non ha una "scorta" di proteine come per grassi e carboidrati. Inserendo proteine a pranzo (tonno, pollo, carne magra, uova, parmigiano), fornisci un flusso costante di amminoacidi per riparare i tessuti.
                </li>
                <li>
                  <strong className="text-emerald-200">Sazietà e controllo della fame:</strong> Le proteine rallentano la digestione e stabilizzano la glicemia. Un piatto di sola pasta fa tornare la fame dopo 2 ore; con proteine e verdure il senso di pienezza dura molto più a lungo.
                </li>
              </ul>
            </div>

            {/* Mito 1: Carboidrati pre-workout bloccano il grasso? */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-emerald-500/30 space-y-2.5 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-1.5 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                I carboidrati prima della palestra bloccano il consumo di grasso? (FALSO)
              </h3>
              <p className="text-xs text-emerald-300 font-bold">
                NO, non bloccano affatto il dimagrimento.
              </p>
              <ul className="list-disc list-inside text-xs leading-relaxed text-gray-300 space-y-1.5 pl-1">
                <li>
                  <strong className="text-white">Carburante anaerobico:</strong> I muscoli usano quasi esclusivamente glucosio per sollevare pesi. I grassi sono a lenta conversione e non possono alimentare una serie pesante.
                </li>
                <li>
                  <strong className="text-white">Glicemia a 150 mg/dL:</strong> Una banana o un po' di avena portano la glicemia al valore di sicurezza ideale per spingere forte ed evitare cali di zuccheri o interruzioni forzate.
                </li>
                <li>
                  <strong className="text-emerald-200">Il grasso si brucia nelle 24 ore:</strong> Il corpo non dimagrisce solo durante i 60 minuti di palestra, ma lungo tutte le 24 ore se il totale calorico giornaliero resta in deficit.
                </li>
              </ul>
            </div>

            {/* Mito 2: Lo zucchero rapido in ipoglicemia fa ingrassare? */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-emerald-500/30 space-y-2.5 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <h3 className="text-sm font-extrabold text-white flex items-center gap-1.5 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                Prendere lo zucchero in ipoglicemia fa "ingrassare"? (FALSO)
              </h3>
              <p className="text-xs text-emerald-300 font-bold">
                Assolutamente NO.
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Quando sei sotto i 70-80 mg/dL, nel sangue c'è un vuoto energetico. Quei 15 grammi di zucchero rapido vengono assorbiti istantaneamente da cervello e muscoli per ripristinare i livelli vitali di sopravvivenza.
              </p>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-emerald-200 leading-relaxed font-medium">
                ⛽ È come mettere 5 litri di benzina in un'auto rimasta a secco a bordo strada: serve solo a far ripartire il motore, non finisce "in più" nel serbatoio!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 6: INFORMAZIONI SCIENTIFICHE & RECUPERO AVANZATO      */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'informazioni') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Info className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  Pilastro 6 • Tasto Informazioni (Approfondimento)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Informazioni: Fisiologia nei Due Casi & Gestione Flessioni/Verticale
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
              Scienza & Pratica
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Ecco cosa succede a livello scientifico nei due casi, analizzando la struttura di muscoli, tendini e sistema nervoso:
          </p>

          {/* PARTE A: I DUE CASI A LIVELLO SCIENTIFICO */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-purple-500/30 space-y-4 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Caso 1 */}
              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-2.5">
                <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white">
                    Caso 1: Chi fa solo palestra senza allungamento ("Rigidità")
                  </h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Quando sollevi i pesi, i muscoli si contraggono e subiscono micro-lesioni. Durante la riparazione, il corpo deposita nuovo tessuto proteico per renderli più forti. Se questo avviene senza esercitare la flessibilità, si verificano tre fenomeni biologici:
                </p>
                <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1.5 pl-1">
                  <li>
                    <strong className="text-red-300">Accorciamento dei sarcomeri:</strong> Il sarcomero è l'unità contrattile del muscolo. Senza allungamento, il muscolo si adatta lavorando in un raggio ridotto, mantenendo i sarcomeri "impacchettati" e corti anche a riposo.
                  </li>
                  <li>
                    <strong className="text-red-300">Irrigidimento della fascia connettivale:</strong> Attorno al muscolo c'è la fascia elastica. Senza stretching, perde idratazione e flessibilità, formando aderenze che "imprigionano" le fibre muscolari.
                  </li>
                  <li>
                    <strong className="text-red-300">Risposta del sistema nervoso:</strong> Il cervello registra il muscolo come "instabile" nell'allungamento e attiva lo stretch reflex (riflesso di stiramento), bloccando l'articolazione per paura di infortuni. Risultato: tipica postura chiusa e rigida.
                  </li>
                </ul>
              </div>

              {/* Caso 2 */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2.5">
                <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white">
                    Caso 2: Chi abbina Pesi + Stretching e Postura ("Flessibilità e Salute")
                  </h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Quando unisci l'allenamento con i pesi a una routine di allungamento e postura, sfrutti la plasticità del corpo ottenendo il massimo da entrambi i mondi:
                </p>
                <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1.5 pl-1">
                  <li>
                    <strong className="text-emerald-300">Aumento dei sarcomeri in serie:</strong> L'allungamento costante invia un segnale cellulare che stimola la creazione di nuovi sarcomeri disposti in serie (uno dietro l'altro). Il muscolo diventa forte, ma anche lungo e affusolato.
                  </li>
                  <li>
                    <strong className="text-emerald-300">Riorganizzazione del collagene:</strong> La fascia resta idratata e le fibre di collagene si allineano lungo le linee di forza. Il muscolo funziona come una molla: potente in contrazione ed elastico in estensione.
                  </li>
                  <li>
                    <strong className="text-emerald-300">Ricalibrazione del sistema nervoso:</strong> Mostrando al cervello che puoi controllare l'allungamento in totale sicurezza, il sistema nervoso riduce la tensione difensiva a riposo. Le spalle si aprono naturalmente, il collo si riallinea e la respirazione diaframmatica migliora.
                  </li>
                </ul>
              </div>
            </div>

            {/* TABELLA DI CONFRONTO DIRETTO */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 pt-1">
              <div className="p-3 bg-purple-950/30 border-b border-white/10 text-xs font-black uppercase text-purple-300 tracking-wider flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5" />
                Confronto Diretto: Scienza Muscolare & Articolare
              </div>
              <div className="divide-y divide-white/5 text-[11px]">
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 gap-2 bg-white/[0.02]">
                  <span className="font-bold text-white">Struttura Muscolare</span>
                  <span className="text-red-300">❌ Sarcomeri corti, muscolo denso e contratto</span>
                  <span className="text-emerald-300 font-semibold">✔ Sarcomeri in serie, muscolo forte ed elastico</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 gap-2">
                  <span className="font-bold text-white">Tessuto Connettivo (Fascia)</span>
                  <span className="text-red-300">❌ Rigido, disidratato, soggetto ad aderenze</span>
                  <span className="text-emerald-300 font-semibold">✔ Flessibile, idratato e reattivo</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 gap-2 bg-white/[0.02]">
                  <span className="font-bold text-white">Postura & Articolazioni</span>
                  <span className="text-red-300">❌ Chiusura posturale, pressione sulle articolazioni</span>
                  <span className="text-emerald-300 font-semibold">✔ Apertura toracica, colonna protetta, mobilità</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 p-3 gap-2">
                  <span className="font-bold text-white">Prevenzione Infortuni</span>
                  <span className="text-red-300">❌ Maggior rischio di strappi e tendiniti</span>
                  <span className="text-emerald-300 font-semibold">✔ Minore rischio di lesioni e migliore recupero</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-black/70 border border-purple-500/40 text-xs text-purple-200 leading-relaxed font-semibold">
              🥋 <strong>La Regola Suprema:</strong> Abbinare i pesi agli esercizi di postura e stretching ti permette di costruire un corpo <span className="text-white">forte come una struttura di ferro, ma flessibile come una frusta</span>, garantendoti salute articolare e postura impeccabile nel tempo.
            </div>
          </div>

          {/* PARTE B: ORGANIZZAZIONE PRATICA FLESSIONI, VERTICALE & AGILITÀ */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-purple-500/30 space-y-4 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
            <div className="border-b border-white/10 pb-2.5 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                Soluzione Logistica & Recupero DOMS
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                Come Inserire Flessioni, Verticale & Agilità Senza Rovinare il Recupero
              </h3>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Se in palestra spingi come si deve, nei giorni di riposo la parte superiore del corpo è letteralmente "fuori uso" per la fatica e i DOMS (i dolori muscolari). Pretendere di fare una verticale o sostenere il peso del corpo con le spalle stanche è impossibile e rischia solo di farti crollare. Inoltre, se in palestra preferisci non fare flessioni per terra, non c'è alcun problema.
            </p>

            <div className="space-y-3 text-xs text-gray-300">
              {/* 1. Flessioni */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  1. Per le Flessioni: Falle a casa nei giorni di parte superiore
                </strong>
                <p className="text-[11px] text-gray-300 pl-3 leading-relaxed">
                  Non devi per forza farle sul pavimento della palestra. Se il <strong>lunedì</strong> o il <strong>venerdì</strong> hai in scheda i muscoli della spinta (petto/spalle/tricipiti), puoi fare 2-3 serie di flessioni a casa prima di uscire per andare in palestra (come attivazione) oppure appena torni a casa.
                </p>
                <p className="text-[11px] text-purple-300 pl-3 font-medium">
                  💡 <strong>Perché funziona:</strong> Accorpi tutto allo stesso giorno di sforzo. Il petto e le spalle lavorano tutti di fila e poi hanno i loro 2-3 giorni interi di riposo assoluto per recuperare e crescere.
                </p>
              </div>

              {/* 2. Verticale */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  2. Per la Verticale: Sfrutta il "Principio del Primo Esercizio"
                </strong>
                <p className="text-[11px] text-gray-300 pl-3 leading-relaxed">
                  La verticale non richiede forza muscolare bruta, ma richiede <strong>sistema nervoso fresco</strong>. Se provi a farla dopo i pesi o il giorno dopo che ti sei distrutto le spalle, le braccia tremeranno.
                </p>
                <div className="pl-3 space-y-1 text-[11px] text-gray-300">
                  <div>• <strong>La soluzione:</strong> Fai la pratica di verticale <strong>PRIMA</strong> dell'allenamento con i pesi, nei giorni in cui vai in palestra (es. Lunedì o Venerdì).</div>
                  <div>• <strong>Come fare in pratica:</strong> A casa tua, prima di cambiarti per la palestra (o appena arrivi in palestra prima di toccare i bilancieri):</div>
                  <div className="pl-3 space-y-0.5 text-gray-400">
                    <div>- Scaldi bene i polsi e le spalle per 3 minuti.</div>
                    <div>- Fai 5-8 minuti al massimo di tentativi alla verticale contro il muro.</div>
                    <div>- Ti fermi molto prima di sentire la fatica: l'obiettivo è solo far capire al cervello come stare in equilibrio.</div>
                  </div>
                  <div>• <strong>Il vantaggio:</strong> A corpo ancora fresco hai il 100% della lucidità e della stabilità. Quei 5-8 minuti non intaccano minimamente le energie che ti servono poi per sollevare i pesi, e lasci i giorni di riposo (martedì, giovedì, sabato) totalmente liberi per far riposare i muscoli stanchi.</div>
                </div>
              </div>

              {/* 3. Domenica Agilità */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  3. La Domenica per l'Agilità e i Movimenti da Terra
                </strong>
                <p className="text-[11px] text-gray-300 pl-3 leading-relaxed">
                  Se la domenica ti dedichi alla tua routine di postura e stretching a casa, quello è il momento perfetto per provare con calma e senza fretta i movimenti di agilità (come alzarsi da terra in modo fluido, transizioni e coordinazione):
                </p>
                <ul className="list-disc list-inside text-[11px] text-gray-300 pl-4 space-y-0.5">
                  <li>Sei riposato dal sabato.</li>
                  <li>I muscoli sono caldi per via dello stretching.</li>
                  <li>Non hai la fretta di dover fare altro subito dopo.</li>
                </ul>
                <p className="text-[11px] text-emerald-300 pl-3 font-medium">
                  🎯 In questo modo lasci <strong>martedì e giovedì come veri giorni di riposo e scarico</strong>, senza la sensazione di dover fare per forza sforzi quando ti senti i muscoli sfiniti.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 7: 2# INFORMAZIONI - METABOLISMO, GRASSO & NOTTE      */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'informazioni2') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <Moon className="w-4 h-4 text-blue-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-400">
                  Pilastro 7 • 2# Informazioni (Approfondimento Fisiologico)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  2# Informazioni: Muscoli a Riposo, Riserva di Grasso & Ricostruzione Notturna
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/30">
              Biochimica & Sonno
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Il corpo non usa mai i muscoli fermi come "riserva di cibo" per alimentare quelli che stanno lavorando. A livello fisiologico e ormonale, il processo funziona in modo molto preciso e coordinato:
          </p>

          {/* PARTE 1: MUSCOLI A RIPOSO & DEFICIT CALORICO */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-blue-500/30 space-y-4 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                1. Perché il Corpo NON Brucia i Muscoli a Riposo
              </h3>
            </div>

            <div className="space-y-3 text-xs text-gray-300">
              {/* Punto 1: Durante l'allenamento */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-blue-300 block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  Cosa succede durante l'allenamento (es. Lunedì: alleni il petto):
                </strong>
                <ul className="list-disc list-inside text-[11px] text-gray-300 pl-3 space-y-1">
                  <li>
                    I muscoli del petto usano lo <strong>zucchero (glicogeno)</strong> immagazzinato direttamente al loro interno per sostenere lo sforzo.
                  </li>
                  <li>
                    I muscoli che riposano (es. le gambe) <strong>rimangono intatti</strong>. Non cedono le loro proteine né la loro energia al petto. Il corpo non "smantella" le gambe per far funzionare le braccia!
                  </li>
                </ul>
              </div>

              {/* Punto 2: Da dove prende l'energia in deficit */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-amber-300 block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  Da dove prende il corpo l'energia in deficit calorico?
                </strong>
                <p className="text-[11px] text-gray-300 pl-3 leading-relaxed">
                  Quando sei in deficit calorico ed esegui i pesi, entra in gioco la biochimica degli ormoni (come il <strong>glucagone</strong> e l'<strong>adrenalina</strong>):
                </p>
                <div className="pl-3 space-y-1 text-[11px] text-gray-300">
                  <div>
                    • <strong className="text-white">Il segnale al tessuto adiposo:</strong> Quando il corpo nota che le calorie del cibo sono finite e serve energia per recuperare e vivere, invia un segnale cellulare a tutto il grasso corporeo (pancia, fianchi, viso, cosce).
                  </div>
                  <div>
                    • <strong className="text-white">La liberazione dei grassi:</strong> Le cellule di grasso (adipociti) aprono le riserve e rilasciano nel sangue i trigliceridi sotto forma di <em>acidi grassi liberi</em>.
                  </div>
                  <div>
                    • <strong className="text-white">Il carburante per la ricostruzione:</strong> Questi acidi grassi viaggiano nel sangue e vengono "bruciati" dai mitocondri per fornire al corpo l'energia necessaria a riparare i muscoli del petto appena allenati.
                  </div>
                </div>
              </div>

              {/* Punto 3: Perché NON brucia gli altri muscoli */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-emerald-300 block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Perché il corpo NON brucia gli altri muscoli?
                </strong>
                <p className="text-[11px] text-gray-300 pl-3 leading-relaxed">
                  Il corpo brucerebbe proteine muscolari come carburante solo in casi estremi (digiuno prolungato per giorni o diete drastiche senza proteine). Nel tuo caso questo non accade perché:
                </p>
                <ul className="list-disc list-inside text-[11px] text-gray-300 pl-3 space-y-1">
                  <li>
                    <strong className="text-white">Lo stimolo dei pesi protegge i muscoli:</strong> Sollevando i carichi (anche a zone divise), dai un segnale continuo al cervello che tutti i muscoli ti servono.
                  </li>
                  <li>
                    <strong className="text-white">Le proteine della dieta li nutrono:</strong> Le proteine che mangi a pranzo e cena forniscono gli amminoacidi per riparare le fibre usate.
                  </li>
                  <li>
                    <strong className="text-white">Il grasso fa da scudo:</strong> Avendo una riserva di grasso da smaltire, il corpo sceglie sempre la via più efficiente e naturale: conservare il tessuto muscolare nobile e bruciare l'adipe in eccesso.
                  </li>
                </ul>
              </div>

              {/* Box di Sintesi Parte 1 */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-black/70 border border-blue-500/40 text-xs text-blue-200 leading-relaxed font-semibold">
                🛡️ <strong>In Sintesi:</strong> Quando alleni un muscolo in deficit calorico, il corpo protegge quel muscolo e anche quelli che riposano, mentre attinge l'energia che gli manca direttamente dai depositi di grasso distribuiti su tutto il corpo.
              </div>
            </div>
          </div>

          {/* PARTE 2: COSA SUCCEDE DURANTE LA NOTTE */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-blue-500/30 space-y-4 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                2. Cosa Succede di Notte: La Vera Trasformazione (Sonno & GH)
              </h3>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              La notte è il momento in cui avviene la vera trasformazione: durante il sonno profondo il corpo rilascia l'<strong>GH (ormone della crescita)</strong> e avvia la riparazione dei muscoli allenati di giorno.
            </p>
            <p className="text-xs text-indigo-200/90 leading-relaxed font-medium bg-indigo-950/20 p-3 rounded-2xl border border-indigo-500/20">
              Avendo mangiato la pasta a pranzo e il secondo a cena in regime di deficit calorico, ecco cosa succede fisiologicamente durante la notte step-by-step:
            </p>

            <div className="space-y-3 text-xs text-gray-300">
              {/* Step 1: I mattoni */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-blue-300 block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  1. I mattoni per ricostruire: Le proteine della cena
                </strong>
                <p className="text-[11px] text-gray-300 pl-3 leading-relaxed">
                  A cena hai fornito le proteine (carne, pesce, uova o formaggio magro). Durante la digestione notturna, queste proteine vengono scisse in <strong>amminoacidi</strong>, che entrano nel flusso sanguigno.
                </p>
                <div className="pl-3 space-y-1 text-[11px] text-gray-300">
                  <div>• I muscoli che hai allenato in palestra (es. petto o gambe) hanno delle micro-lesioni provocate dai pesi.</div>
                  <div>• Il corpo preleva questi amminoacidi dal sangue e li invia direttamente nelle fibre muscolari danneggiate per ricucirle, rendendole più forti, sode e toniche rispetto al giorno prima.</div>
                </div>
              </div>

              {/* Step 2: L'energia per il cantiere */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-amber-300 block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  2. L'energia per il cantiere: Il grasso corporeo
                </strong>
                <p className="text-[11px] text-gray-300 pl-3 leading-relaxed">
                  Ricostruire e riparare il tessuto muscolare è un lavoro pesante che richiede molta energia (calorie).
                </p>
                <div className="pl-3 space-y-1 text-[11px] text-gray-300">
                  <div>• Poiché sei in deficit calorico (pasta a pranzo e secondo a cena non sono stati "troppi", ma calcolati giusti), il cibo consumato durante il giorno è già stato speso per le attività e l'allenamento.</div>
                  <div>• Le calorie nel sangue non bastano a coprire tutta l'energia necessaria al "cantiere" notturno e al funzionamento degli organi vitali (cuore, cervello, polmoni).</div>
                  <div>• Di conseguenza, il cervello invia il segnale alle cellule adipose (il grasso della pancia, del viso, ecc.): <strong>liberare i trigliceridi</strong>.</div>
                  <div>• Il corpo "brucia" questo grasso come carburante per alimentare il processo di ricostruzione muscolare e per tenerti in vita mentre dormi.</div>
                </div>
              </div>

              {/* Box di Riepilogo Notturno */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-blue-950/40 to-black/80 border-2 border-blue-400/40 space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-blue-400" />
                  Cosa succede mentre dormi:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                    <strong className="text-white block mb-0.5">Dai muscoli:</strong> Vengono usati gli amminoacidi della cena per riparare e tonificare la massa magra.
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                    <strong className="text-white block mb-0.5">Dal grasso:</strong> Vengono prelevate le calorie mancanti per fornire l'energia alla riparazione.
                  </div>
                </div>
                <p className="text-xs text-gray-200 leading-relaxed font-medium pt-1">
                  🌅 <strong>Il risultato al risveglio:</strong> il muscolo è più tonico e compatto, mentre una piccola quota di grasso corporeo è stata consumata definitivamente. È proprio così che, giorno dopo giorno, ci si ritrova più magri e definiti!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 8: 3# INFORMAZIONI - IL QUADRO COMPLETO: STRATEGIA,   */}
      {/* SCIENZA DEL GRASSO (VISO & PANCIA) E CONTROLLO                */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'quadro_completo') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Target className="w-4 h-4 text-teal-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400">
                  Pilastro 8 • 3# Informazioni (Sintesi Integrata)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  📌 Il Quadro Completo: Strategia, Scienza e Controllo
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-teal-500/15 text-teal-300 border border-teal-500/30">
              Ricomposizione 360°
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Tutta la scienza del corpo, del grasso di viso e pancia e del controllo immediato e a lungo termine: il riassunto definitivo che racchiude ogni principio senza tralasciare nulla.
          </p>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-teal-500/30 space-y-4 shadow-[0_0_20px_rgba(20,184,166,0.1)]">
            {/* 1. La Strategia Generale (Niente massa per ora) */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  1. La Strategia Generale (Niente massa per ora)
                </h3>
              </div>
              <ul className="list-disc list-inside text-xs leading-relaxed text-gray-300 space-y-2 pl-1">
                <li>
                  <strong className="text-teal-300">Obiettivo pulizia e ricomposizione:</strong> Il tuo obiettivo prioritario è pulire e ricomporre il corpo (togliendo il grasso da viso e pancia) senza fare diete restrittive o calcoli folli.
                </li>
                <li>
                  <strong className="text-teal-300">Come fai il deficit leggero:</strong> Mangi le tue solite <strong>1.500–1.600 kcal</strong> (che per te sono il punto di pareggio) e crei il deficit calorico leggero unendo il movimento quotidiano e l'intensità della palestra. In questo modo bruci energia in più senza patire la fame e senza toccare il cibo.
                </li>
                <li>
                  <strong className="text-teal-300">Vantaggio anagrafico & ormonale:</strong> Alla tua età, grazie all'assetto ormonale favorevole, puoi costruire muscolo e definirti contemporaneamente anche senza una fase di massa tradizionale.
                </li>
              </ul>
            </div>

            {/* 2. La Scienza del Grasso (Viso e Pancia) */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  2. La Scienza del Grasso (Viso e Pancia)
                </h3>
              </div>
              <div className="space-y-2 text-xs text-gray-300 leading-relaxed">
                <div>
                  • <strong className="text-white">Che cos'è il grasso e recettori alfa-2:</strong> Sono cellule adipose (adipociti) che accumulano trigliceridi in eccesso. Nella pancia e nel viso ci sono <strong>recettori specifici (alfa-2)</strong> che rendono il grasso di quelle zone il più "ostinato" a staccarsi.
                </div>
                <div>
                  • <strong className="text-white">Come sparisce (Lipolisi e Ossidazione):</strong>
                  <ul className="list-disc list-inside text-[11px] text-gray-300 pl-4 space-y-1 pt-1">
                    <li>Il deficit calorico rilascia ormoni (adrenalina, noradrenalina, glucagone) che smontano i trigliceridi in acidi grassi liberi.</li>
                    <li>Il sangue li trasporta nei muscoli che lavorano (grazie all'allenamento in palestra).</li>
                    <li>I muscoli bruciano questi acidi grassi nei mitocondri trasformandoli in energia e respirandoli via sotto forma di anidride carbonica e acqua.</li>
                  </ul>
                </div>
                <div>
                  • <strong className="text-white">Il ruolo delle proteine:</strong> Fanno da <strong>"scudo"</strong> (impedendo al corpo di mangiare i muscoli per ricavare energia, effetto anti-catabolico) e da <strong>"mattoni"</strong> (forniscono aminoacidi per riparare e far crescere il muscolo dopo la palestra).
                </div>
              </div>
            </div>

            {/* 3. Come monitorare se stai facendo giusto */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  3. Come Monitorare se Stai Facendo Giusto (Subito e a Lungo Termine)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Segnali SUBITO */}
                <div className="p-3.5 rounded-xl bg-black/50 border border-teal-500/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-300">
                    <Zap className="w-3.5 h-3.5 text-teal-400" />
                    I Segnali SUBITO (Giorno per giorno)
                  </div>
                  <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1 pl-1">
                    <li>
                      <strong className="text-emerald-300">Livello di energia ottimale:</strong> Se ti svegli lucido, arrivi in palestra con la forza giusta e non hai un freddo anomalo o stanchezza estrema, le 1.500–1.600 kcal sono perfette.
                    </li>
                    <li>
                      <strong className="text-red-300">Se sei troppo in deficit:</strong> Ti senti svuotato, hai cali di forza improvvisi o una fame nervosa ossessiva.
                    </li>
                  </ul>
                </div>

                {/* Metodo A LUNGO TERMINE */}
                <div className="p-3.5 rounded-xl bg-black/50 border border-teal-500/20 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-300">
                    <LineChart className="w-3.5 h-3.5 text-teal-400" />
                    Il Metodo A LUNGO TERMINE (La media mobile)
                  </div>
                  <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1 pl-1">
                    <li>
                      <strong className="text-white">Pesata a digiuno:</strong> Ti pesi 3 volte a settimana (es. Lunedì, Mercoledì, Venerdì) la mattina a digiuno dopo essere andato in bagno.
                    </li>
                    <li>
                      <strong className="text-white">Media settimanale:</strong> Fai la media dei 3 numeri e la confronti con la settimana prima.
                    </li>
                    <li>
                      <strong className="text-emerald-300">Il risultato perfetto:</strong> Se la media scende di circa <strong>200–400 grammi a settimana</strong>, il deficit leggero creato dal movimento sta funzionando perfettamente sul grasso. Se scende di oltre 1 kg, stai tagliando troppo. Se è immobile per settimane, il movimento non basta.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Box di sintesi Pilastro 8 */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-teal-950/40 via-emerald-950/30 to-black/70 border border-teal-500/40 text-xs text-teal-200 leading-relaxed font-semibold">
              🎯 <strong>Regola Chiave del Quadro Completo:</strong> Non abbassare il cibo: mantieni le 1.500–1.600 kcal stabili con buone proteine, fai la palestra con intensità e lascia che la lipolisi bruci il grasso di pancia e viso a un ritmo sostenibile di 200–400g a settimana!
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 9: 4# INFORMAZIONI - CHIARIMENTO SCIENTIFICO:         */}
      {/* LE PROTEINE E IL GRASSO CORPOREO (~1g per kg / ~75g)          */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'proteine_scienza') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Pilastro 9 • 4# Informazioni (Biochimica Nutrizionale)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  🔬 Chiarimento Scientifico: Le Proteine "Bloccano" il Grasso?
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              ~1 g per kg (ca. 75 g)
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-amber-500/30 space-y-4 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <p className="text-xs text-gray-200 leading-relaxed font-medium">
              Hai perfettamente ragione a sollevare il dubbio, ed è un'ottima osservazione scientifica: le proteine di per sé non "catturano" né "bloccano" il grasso corporeo impedendogli di accumularsi, e un eccesso calorico (da qualsiasi macronutriente) verrebbe comunque immagazzinato.
            </p>

            <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                Vediamo esattamente cosa succede a livello biologico e metabolico:
              </h3>
            </div>

            <div className="space-y-3.5 text-xs text-gray-300">
              {/* 1. La lipolisi e il deficit calorico */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
                    1
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white">
                    1. La lipolisi e il deficit calorico (Perché il grasso se ne va)
                  </h4>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed pl-7">
                  Il corpo intacca il tessuto adiposo (grasso) unicamente quando si trova in deficit calorico (cioè consuma più energia di quella che introduce). In questa condizione, gli ormoni (come il glucagone e le catecolamine) segnalano alle cellule adipose di rilasciare gli acidi grassi nel sangue per usarli come carburante.
                </p>
              </div>

              {/* 2. Il ruolo reale delle proteine */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">
                    2
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white">
                    2. Il ruolo reale delle proteine (Lo "scudo" anti-catabolico)
                  </h4>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed pl-7">
                  Durante il deficit, il corpo avrebbe teoricamente la tentazione di smontare non solo il grasso, ma anche il tessuto muscolare per ricavarne amminoacidi da usare a scopo energetico.
                </p>
                <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-1.5 pl-7">
                  <li>
                    <strong className="text-emerald-300">Mantenere un adeguato apporto proteico (~1 g per kg, circa 75 g)</strong> significa fornire al sangue un flusso costante di amminoacidi liberi.
                  </li>
                  <li>
                    In questo modo, i muscoli riconoscono che non c'è carenza di "mattoni" e non vengono degradati (effetto anti-catabolico).
                  </li>
                  <li>
                    Di conseguenza, l'energia mancante viene presa quasi esclusivamente dalle riserve di grasso.
                  </li>
                </ul>
              </div>

              {/* 3. Il costo energetico (Termogenesi) */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs">
                    3
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-white">
                    3. Il costo energetico (Termogenesi)
                  </h4>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed pl-7">
                  C'è un altro motivo per cui le proteine aiutano nella definizione: la loro digestione e il loro metabolismo richiedono molta più energia rispetto ai carboidrati o ai grassi. Questo processo si chiama <strong>Termogenesi Indotta dalla Dieta (TID)</strong>: circa il <strong>20–30% delle calorie</strong> introdotte con le proteine viene "bruciato" solo per digerirle e assimilarle.
                </p>
              </div>

              {/* In Sintesi */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-orange-950/40 to-black/80 border-2 border-amber-400/40 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-300">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  In sintesi:
                </div>
                <p className="text-xs text-gray-200 leading-relaxed font-semibold">
                  Le proteine non impediscono al grasso di accumularsi per magia se sei in eccesso di cibo, ma in un contesto di deficit calorico proteggono la massa magra e fanno sì che il calo di peso sia mirato principalmente alla massa grassa.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 10: 5# INFORMAZIONI - FABBISOGNO 1 G/KG, TURNOVER,   */}
      {/* TID & DEFICIT A DUE FRONTI (SINERGIA BRUCIA-GRASSI)           */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'fabbisogno_tid') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <Flame className="w-4 h-4 text-rose-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                  Pilastro 10 • 5# Informazioni (Fisiologia, Fabbisogno & Sinergia)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  🥩 Fabbisogno Base 1 g/kg, Turnover, TID & Deficit a Due Fronti
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30">
              Sinergia Metabolica
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Il valore di <strong>1 grammo per ogni chilogrammo di peso corporeo</strong> (es. circa 70–75 g al giorno per un peso di 70–75 kg) è la quantità di base consigliata per un motivo ben preciso: la quota di fabbisogno minimo giornaliero e di ricambio cellulare. Ecco tutta la spiegazione scientifica organizzata in modo chiaro e organico punto per punto:
          </p>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-rose-500/30 space-y-4 shadow-[0_0_20px_rgba(244,63,94,0.1)]">
            {/* 1. Il "Turnover" proteico giornaliero e la proporzionalità */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  1. Il "Turnover" Proteico Giornaliero & Proporzionalità al Peso
                </h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Ogni singolo giorno, anche se stai fermo sul divano, il tuo corpo consuma e demolisce naturalmente una quota delle sue proteine interne (pelle, cellule della mucosa intestinale, enzimi, ormoni, fibre muscolari).
              </p>
              <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-1.5 pl-1 leading-relaxed">
                <li>
                  <strong className="text-rose-300">Che cos'è il turnover:</strong> Questo processo continuo di degradazione e rinnovamento si chiama <em>turnover proteico</em>.
                </li>
                <li>
                  <strong className="text-rose-300">La perdita netta (0.8–1.0 g/kg):</strong> Una parte di questi amminoacidi viene riutilizzata dal corpo, ma una quota significativa (circa <strong>0.8–1.0 grammi per ogni chilogrammo di peso</strong>) viene persa definitivamente e non può essere recuperata.
                </li>
                <li>
                  <strong className="text-rose-300">Il pareggio (Bilancio Azotato):</strong> Mangiando circa 1 g/kg, rimpiazzi esattamente la quantità che il corpo degrada per vivere, mantenendoti in pareggio (bilancio azotato in equilibrio).
                </li>
                <li>
                  <strong className="text-white">Perché è proporzionale ai chili:</strong> Si parla di 1 g per ogni kg semplicemente perché il fabbisogno dipende dalla massa biologica complessiva: una persona di 90 kg ha una quantità di tessuti, sangue e organi maggiore da mantenere rispetto a una di 50 kg, e di conseguenza necessita di un volume assoluto di amminoacidi superiore.
                </li>
              </ul>
            </div>

            {/* 2. Come varia la quota in base al tuo stile di vita (Tabella) */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  2. Come Varia il Fabbisogno in Base al Tuo Stile di Vita
                </h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                L'indicazione di 1 g/kg è la base di partenza per chiunque, ma la richiesta biologica cambia a seconda di quanto e come ti alleni:
              </p>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 pt-1">
                <div className="divide-y divide-white/10 text-xs">
                  {/* Header */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3 gap-2 bg-rose-950/30 text-rose-300 font-black uppercase tracking-wider text-[11px]">
                    <span>Livello di Attività</span>
                    <span>Fabbisogno Giornaliero</span>
                    <span>Perché? (Motivazione Fisiologica)</span>
                  </div>
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3 gap-2 bg-white/[0.01]">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                      Sedentario
                    </span>
                    <span className="text-amber-300 font-semibold">0.8 – 1.0 g per kg</span>
                    <span className="text-gray-300 text-[11px]">Copre solo il ricambio cellulare di base e la salute generale.</span>
                  </div>
                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3 gap-2 bg-white/[0.03]">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      Attività moderata / Cardio
                    </span>
                    <span className="text-blue-300 font-semibold">1.2 – 1.4 g per kg</span>
                    <span className="text-gray-300 text-[11px]">Serve a riparare la micro-usura dei tessuti causata dal movimento continuo.</span>
                  </div>
                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 p-3 gap-2 bg-white/[0.01]">
                    <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Palestra / Pesi / Definizione
                    </span>
                    <span className="text-emerald-300 font-bold">1.6 – 2.0 g per kg</span>
                    <span className="text-gray-300 text-[11px]">I muscoli subiscono micro-lesioni allenandosi con i carichi; serve una scorta maggiore di amminoacidi per ripararli, integrarli e proteggerli se sei a dieta.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Le proteine in eccesso e il grasso corporeo */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  3. Le Proteine in Eccesso si Trasformano in Grasso? (La Verità sul Surplus)
                </h3>
              </div>
              <ul className="list-disc list-inside text-xs leading-relaxed text-gray-300 space-y-1.5 pl-1">
                <li>
                  <strong className="text-white">Nessuna conversione automatica:</strong> Le proteine in più rispetto al fabbisogno minimo non si trasformano automaticamente in grasso corporeo.
                </li>
                <li>
                  <strong className="text-amber-300">Solo in surplus calorico:</strong> Questo accumulo avviene <em>esclusivamente</em> se ti trovi in un surplus calorico totale (cioè se mangi più calorie complessive di quelle che consumi durante la giornata).
                </li>
                <li>
                  <strong className="text-emerald-300">In deficit calorico:</strong> Se ti trovi in deficit calorico, le proteine in eccesso vengono semplicemente usate dal corpo a scopo energetico o convertite, senza mai trasformarsi in tessuto adiposo.
                </li>
              </ul>
            </div>

            {/* 4. L'Effetto Termico del Cibo (TID) e le Calorie "Bruciate" nella Digestione */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  4. L'Effetto Termico del Cibo (TID) e la Spesa Digestiva
                </h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Per digerire, assimilare e metabolizzare le proteine, il corpo spende molta più energia rispetto a quanta ne usa per carboidrati o grassi. Questo processo si chiama <strong>Termogenesi Indotta dalla Dieta (TID)</strong>.
              </p>
              <div className="p-3 rounded-xl bg-black/50 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed space-y-1">
                <div>
                  • <strong>Circa il 20–30% delle calorie</strong> introdotte tramite le proteine viene letteralmente "bruciato" dal corpo stesso durante la digestione e scomposizione in amminoacidi.
                </div>
                <div>
                  • <strong>Esempio pratico:</strong> se introduci ad esempio <strong>500 kcal da proteine</strong>, circa <strong>100–150 kcal</strong> vengono bruciate dal tuo corpo solo per digerirle. Quindi è come se il tuo corpo ne incassasse realmente solo <strong>~1450–1500 kcal nette</strong> pur mangiando le tue solite 1600 kcal!
                </div>
              </div>
            </div>

            {/* 5. Come Questo Meccanismo Fa Perdere ANCORA PIÙ Grasso: La Sinergia a Due Fronti */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-950/40 via-orange-950/30 to-black/80 border-2 border-rose-500/40 space-y-3.5">
              <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-rose-400" />
                  <h3 className="text-sm sm:text-base font-black text-white">
                    5. Come Questo Ti Fa Perdere ANCORA PIÙ Grasso (Deficit Ampliato su Due Fronti)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-500/30">
                  Effetto Moltiplicatore
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                I due fattori si sommano e allargano notevolmente il deficit calorico su due fronti contemporaneamente (senza che sia un "doppio" matematico, ma un ampliamento reale e concreto):
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Fronte 1 */}
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                  <span className="text-orange-400 font-extrabold flex items-center gap-1.5 text-xs">
                    <Dumbbell className="w-3.5 h-3.5" />
                    1. Il Dispendio della Palestra (Movimento)
                  </span>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Andare in palestra e allenarsi con i pesi richiede energia. Se prima il tuo corpo consumava 1600 kcal restando fermo, ora tra l'allenamento e il recupero muscolare nelle ore successive (il cosiddetto <strong>effetto EPOC</strong>) il tuo consumo totale giornaliero sale a circa <strong>1900–2000 kcal</strong>.
                  </p>
                </div>

                {/* Fronte 2 */}
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                  <span className="text-rose-400 font-extrabold flex items-center gap-1.5 text-xs">
                    <Flame className="w-3.5 h-3.5" />
                    2. Il Vantaggio Metabolico delle Proteine (Digestione)
                  </span>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Convertendo una parte maggiore della tua alimentazione in proteine (mantenendo le stesse 1600 kcal totali), entra in gioco la termogenesi (TID): il corpo ne "spreca" 100–150 kcal per digerirle, incassandone solo <strong>~1450–1500 nette</strong>.
                  </p>
                </div>
              </div>

              {/* Risultato Finale Organizzato */}
              <div className="p-3.5 rounded-xl bg-black/70 border border-rose-500/30 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                  Qual è il Risultato Finale?
                </span>
                <ul className="list-disc list-inside text-xs leading-relaxed text-gray-200 space-y-1.5 pl-1">
                  <li>
                    <strong className="text-white">Aumento del deficit effettivo:</strong> Da una parte bruci di più perché ti alleni e muovi i muscoli (fabbisogno in uscita che sale); dall'altra incassi di meno a parità di cibo perché le proteine richiedono tanta energia per essere digerite (calorie nette in entrata che scendono). Il deficit si fa più profondo <em>senza dover mangiare di meno e senza patire la fame</em>!
                  </li>
                  <li>
                    <strong className="text-emerald-300">Massima protezione della massa magra:</strong> Mantenendo le proteine adeguate durante il deficit, il corpo non ha mai bisogno di attaccare o smontare i tuoi muscoli per ricavare amminoacidi.
                  </li>
                  <li>
                    <strong className="text-amber-300">Utilizzo del grasso come carburante primario:</strong> Trovandosi in deficit di energia e con i muscoli blindati dalle proteine, al tuo corpo non rimane altra scelta se non attingere direttamente e in modo preferenziale dalle riserve di grasso corporeo (viso e pancia) per coprire il restante fabbisogno energetico giornaliero!
                  </li>
                </ul>
              </div>

              {/* Quick Switch to Parte 2 */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-orange-950/40 via-red-950/30 to-black/70 border border-orange-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 block flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Approfondimento Collegato (Parte 2)
                  </span>
                  <span className="text-xs font-bold text-white">
                    Proteine in Eccesso, Gluconeogenesi & Come le Brucia il Corpo
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectTab('fabbisogno_tid_2')}
                  className="py-2 px-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black text-xs font-black transition-all active:scale-95 cursor-pointer shrink-0 shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Apri Parte 2</span>
                  <Zap className="w-3.5 h-3.5 fill-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 11: 5# INFORMAZIONI (PARTE 2) - PROTEINE IN ECCESSO,  */}
      {/* GLUCONEOGENESI, DESTINO FISICO E BRUCIA-GRASSI               */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'fabbisogno_tid_2') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-orange-500/20 text-orange-300 border border-orange-500/30">
                <Zap className="w-4 h-4 text-orange-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-orange-400">
                  Pilastro 11 • 5# Informazioni (Parte 2 • Approfondimento)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  ⚡ 5# Info (Parte 2): Proteine in Eccesso, Gluconeogenesi & Grassi
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeTab === 'fabbisogno_tid_2' && (
                <button
                  type="button"
                  onClick={() => handleSelectTab('fabbisogno_tid')}
                  className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-rose-300 bg-rose-500/10 px-2.5 py-1 rounded-xl border border-rose-500/20 hover:bg-rose-500/20 transition-all cursor-pointer"
                >
                  ⬅ Torna a Parte 1
                </button>
              )}
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-orange-500/15 text-orange-300 border border-orange-500/30">
                Metabolismo Energetico
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Capisco benissimo il tuo dubbio: sembra quasi che incastrare tante proteine stando a poche calorie complessive sia un'impresa impossibile senza vivere di sole polveri! Mettiamo in ordine tutti i punti chiave in modo organico e senza ripetizioni:
          </p>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-orange-500/30 space-y-4 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
            {/* 1. Il Dilemma Pratico: Tante Proteine in Poche Calorie */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  1. È Difficile Assumere Più Proteine Stando in Deficit Calorico?
                </h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Sì, all'inizio non è facilissimo: se vuoi mantenere le calorie basse (es. 1.600 kcal) ma vuoi salire a 120–130 g di proteine (circa 1.5–1.8 g/kg per riparare le micro-lesioni della palestra), devi scegliere cibi con un alto rapporto proteine/calorie, altrimenti si rischia di sforare il budget:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-[11px]">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <strong className="text-emerald-300 block font-bold">Cibi Magri Fondamentali:</strong>
                  <p className="text-gray-300 leading-relaxed">
                    Petto di pollo, tacchino, albume d'uovo, pesce bianco (merluzzo, orata, spigola), fiocchi di latte magri e yogurt greco 0%.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <strong className="text-cyan-300 block font-bold">Il Ruolo delle Proteine in Polvere:</strong>
                  <p className="text-gray-300 leading-relaxed">
                    Molti le usano proprio perché danno una dose di proteine "pure" con pochissime calorie, senza grassi o carboidrati extra, aiutandoti a centrare l'obiettivo senza impazzire a mangiare chili di cibo.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Dove Vanno Fisicamente le Proteine in Eccesso? (Fegato & Gluconeogenesi) */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  2. Dove Finiscono Fisicamente le Proteine in Eccesso e Come le Brucia il Corpo?
                </h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Il tuo corpo è una macchina perfetta che non spreca nulla, ma i muscoli <strong>non sono un buco nero</strong> infinito:
              </p>
              <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-2 pl-1 leading-relaxed">
                <li>
                  <strong className="text-white">Capienza muscolare limitata:</strong> Il corpo ha un tetto massimo giornaliero di proteine che può usare per riparare e costruire muscoli (specialmente in deficit). Una volta che i muscoli hanno preso i "mattoni" necessari per le micro-lesioni, la loro capienza è satura.
                </li>
                <li>
                  <strong className="text-white">Cosa succede alle rimanenze nel sangue:</strong> Gli amminoacidi extra rimangono temporaneamente in circolo. Non rimangono lì a fare la muffa né vengono buttati via a caso.
                </li>
                <li>
                  <strong className="text-amber-300">Il fegato entra in azione (Deaminazione):</strong> Il fegato prende l'amminoacido in eccesso, stacca la parte azotata (che viene espulsa con le urine tramite il ciclo dell'urea) e tiene lo scheletro di carbonio.
                </li>
                <li>
                  <strong className="text-cyan-300">Conversione in carburante puro (Gluconeogenesi):</strong> La parte rimanente viene trasformata in energia immediata (glucosio o corpi chetogeni). Questa energia va dritta ai tuoi muscoli e organi mentre cammini, respiri, studi o ti alleni con i pesi!
                </li>
              </ul>
            </div>

            {/* 3. Perché NON Diventano Grasso e NON Spengono il Forno dell'Adipe */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  3. Perché le Proteine in Più NON Diventano Grasso e NON Fermano il Dimagrimento?
                </h3>
              </div>
              <div className="space-y-2 text-xs text-gray-300 leading-relaxed">
                <p>
                  C'è spesso l'equivoco comune: <em>"Se il corpo brucia le proteine in eccesso per energia, allora usa quelle e non tocca il grasso?"</em> La risposta scientifica è <strong>NO</strong>, per tre motivi precisi:
                </p>
                <div className="space-y-2 pl-1">
                  <div className="p-3 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white block text-xs">A) La "Regola dei Conti" (Il Deficit Vince Sempre):</strong>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Per creare grasso serve un surplus energetico. Se a fine giornata hai speso più di quanto hai mangiato, il corpo è obbligato a prelevare dai risparmi (le cellule adipose). Le proteine extra vengono bruciate come benzina, ma il buco calorico totale rimane intatto: non c'è abbastanza energia totale per accumulare ciccia.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-white block text-xs">B) Le Proteine non Spengono il "Forno" del Grasso:</strong>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      In deficit, il fabbisogno giornaliero per muoverti e vivere è talmente alto che il corpo deve bruciare <strong>sia l'energia del cibo sia una grossa fetta di grasso accumulato</strong>. L'adipe continua a bruciare costantemente.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-black/50 border border-white/5 space-y-1">
                    <strong className="text-rose-300 block text-xs">C) Il Pericolo di Mangiare Meno Proteine:</strong>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Se tenessi le proteine basse, il corpo non trovando amminoacidi smonterebbe i tuoi muscoli per ricavarli. Perderesti peso, ma gran parte sarebbe massa magra: il metabolismo rallenterebbe e il corpo apparirebbe svuotato invece che tonico e definito.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Il Meccanismo Virtuoso: Le Proteine "Rubano il Posto" ai Carboidrati col 20-30% di Spesa */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-950/40 via-amber-950/30 to-black/80 border-2 border-orange-500/40 space-y-3">
              <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <h3 className="text-sm sm:text-base font-black text-white">
                    4. Il Meccanismo Virtuoso: Le Proteine Sostituiscono i Carboidrati con Alto Costo Termico
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-bold border border-orange-500/30">
                  TID Elevata
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                In termini biologici non è un circolo vizioso, ma un <strong>meccanismo metabolico virtuoso</strong>:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-yellow-300 block text-xs font-bold">Se mangi Carboidrati (Pane/Pasta):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il corpo li digerisce facilmente e spende pochissima energia metabolica per usarli (solo il <strong>5–10%</strong>).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-orange-300 block text-xs font-bold">Se usa Proteine come Carburante:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Compie un lavoro chimico lungo e faticoso nel fegato per trasformare l'amminoacido in glucosio, bruciando il <strong>20–30% di calorie extra</strong> per la conversione.
                  </p>
                </div>
              </div>

              {/* Box Riassuntivo Finale */}
              <div className="p-3.5 rounded-xl bg-black/70 border border-orange-500/30 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-orange-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  In Sintesi Definitiva:
                </span>
                <ul className="list-disc list-inside text-xs leading-relaxed text-gray-200 space-y-1 pl-1 font-medium">
                  <li>Hai l'energia piena per muoverti e spingere forte in palestra (perché le proteine diventano carburante).</li>
                  <li>Il metabolismo lavora a pieno ritmo e consuma calorie extra solo per fare questa conversione chimica.</li>
                  <li>I muscoli restano blindati al 100% e il corpo è costretto a prelevare tutto il resto dell'energia direttamente dalle tue riserve di grasso!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 12: 6# INFORMAZIONI - I GRASSI, LA CARNE,              */}
      {/* DIGESTIONE, ASSORBIMENTO E METABOLISMO NELLE 24 ORE           */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'grassi_scienza') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                <Droplet className="w-4 h-4 text-yellow-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400">
                  Pilastro 12 • 6# Informazioni: I Grassi & la Carne
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  🧈 6# Info: I Grassi Alimentari, Digestione, Lipolisi & Notte
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-yellow-500/15 text-yellow-300 border border-yellow-500/30">
              Lipidi & Fisiologia
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            I grassi che mangiamo <strong>non si trasformano automaticamente in grasso corporeo</strong>. Il corpo non prende la fetta di lardo, la carne o il filo d'olio e lo &quot;incolla&quot; subito sui fianchi o sull'addome. Vediamo il percorso scientifico completo, senza ripetizioni, da quando entra nella bocca a come viene utilizzato o stoccato nelle 24 ore:
          </p>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-yellow-500/30 space-y-4 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
            {/* 1. Che Cosa Sono i Grassi? (Biochimica di Base) */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  1. Che Cosa Sono i Grassi? (Biochimica Base)
                </h3>
              </div>

              <div className="space-y-2 text-xs text-gray-300 leading-relaxed">
                <p>
                  Scientificamente, i grassi che mangiamo si chiamano <strong>lipidi</strong>, e oltre il <strong>95%</strong> di essi si trova sotto forma di <strong>trigliceridi</strong>:
                </p>
                <div className="p-3 rounded-xl bg-black/50 border border-yellow-500/20 text-xs text-yellow-200 leading-relaxed space-y-1">
                  <strong className="text-white block font-bold">Struttura a forma di &quot;E&quot;:</strong>
                  <div>• <strong>1 molecola di glicerolo</strong>: fa da spina dorsale verticale.</div>
                  <div>• <strong>3 catene di acidi grassi</strong>: attaccate orizzontalmente come i tre bracci della lettera E.</div>
                </div>
              </div>

              {/* Differenza Carne vs Olio d'Oliva */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-black uppercase tracking-wider text-yellow-400 block">
                  I Grassi della Carne vs Olio d'Oliva: Perché Uno è Solido e l'Altro è Liquido?
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  I grassi della carne (e di origine animale in genere) sono composti prevalentemente da <strong>acidi grassi saturi</strong>, insieme a una quota di monoinsaturi e piccoli quantitativi fisiologici di colesterolo:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-[11px]">
                  {/* Grassi Carne */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <strong className="text-amber-300 block font-bold flex items-center gap-1.5">
                      🥩 Grasso della Carne (Solido a Temperatura Ambiente):
                    </strong>
                    <p className="text-gray-300 leading-relaxed">
                      Le catene degli acidi grassi saturi sono chimicamente <strong>&quot;dritte&quot; e rigide</strong> (prive di doppi legami). Possono impacchettarsi in modo molto stretto e compatto tra loro: è questo legame serrato che rende il grasso visibile della bistecca o il burro solido e consistente.
                    </p>
                  </div>

                  {/* Olio d'Oliva */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <strong className="text-emerald-300 block font-bold flex items-center gap-1.5">
                      🫒 Olio d'Oliva (Liquido a Temperatura Ambiente):
                    </strong>
                    <p className="text-gray-300 leading-relaxed">
                      Contiene prevalentemente <strong>acidi grassi monoinsaturi</strong> (acido oleico). La presenza di un doppio legame di carbonio crea una &quot;piega&quot; o gomito nella molecola: questa curvatura impedisce alle molecole di impacchettarsi strettamente, lasciando l'olio fluido e scorrevole.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Cosa Succede Quando li Mangiamo? (Digestione e Assorbimento) */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  2. Cosa Succede Quando li Mangiamo? (Digestione e Assorbimento)
                </h3>
              </div>

              <div className="space-y-2.5 text-xs text-gray-300 leading-relaxed">
                {/* Bocca & Stomaco */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <strong className="text-white block text-xs">A) Bocca e Stomaco (Fase Preparatoria):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Qui avviene solo una prima triturazione meccanica con la masticazione e una minima azione di enzimi preliminari (lipasi linguale e gastrica). I grassi restano quasi intatti fino all'intestino.
                  </p>
                </div>

                {/* Intestino Tenue */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-yellow-950/30 to-black/60 border border-yellow-500/20 space-y-2">
                  <strong className="text-yellow-300 block text-xs font-bold">
                    B) Intestino Tenue (Il Cuore della Digestione - La Bile come &quot;Detersivo&quot;):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il grasso non si scioglie in acqua (e quindi neanche nei succhi gastrici). Per questo interviene la <strong>bile</strong> (prodotta dal fegato e rilasciata dalla cistifellea), che agisce esattamente come un detersivo per i piatti: <strong>emulsiona</strong> le grandi gocce di grasso, spaccandole in miliardi di microscopiche goccioline (micelle).
                  </p>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    A questo punto, la <strong>lipasi pancreatica</strong> può finalmente attaccarle e &quot;smontare&quot; i trigliceridi nei loro singoli pezzi: <em>acidi grassi liberi</em> e <em>monogliceridi</em>.
                  </p>
                </div>

                {/* Assorbimento e Chilomicroni */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950/30 to-black/60 border border-cyan-500/20 space-y-2">
                  <strong className="text-cyan-300 block text-xs font-bold">
                    C) Assorbimento e la &quot;Via Speciale&quot; (Sistema Linfatico & Chilomicroni):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Le cellule intestinali (enterociti) assorbono questi componenti e li <strong>riassemblano subito in trigliceridi</strong>.
                  </p>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Li impacchettano poi all'interno di speciali &quot;navette di trasporto&quot; chiamate <strong>chilomicroni</strong> (lipoproteine con una superficie compatibile con l'acqua).
                  </p>
                  <div className="p-2.5 rounded-lg bg-black/60 border border-cyan-500/30 text-[11px] text-cyan-200">
                    <strong>La differenza fondamentale rispetto a zuccheri e proteine:</strong> Mentre zuccheri e amminoacidi entrano direttamente nella vena porta andando subito al fegato, i chilomicroni <strong>entrano nel sistema linfatico</strong> (dotto toracico) e vengono immessi direttamente nella circolazione sanguigna generale!
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Il Destino nel Corpo: Chi Decide se Bruciarli o Stoccarli? */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  3. Il Destino nel Corpo: Come Viaggiano e Perché NON si Incollano all'Addome
                </h3>
              </div>

              <div className="space-y-2.5 text-xs text-gray-300 leading-relaxed">
                <p>
                  Mentre i chilomicroni navigano nel flusso sanguigno, incontrano sulle pareti dei vasi sanguigni un enzima chiave: la <strong>Lipoproteina Lipasi (LPL)</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-[11px]">
                  <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/30 space-y-1.5">
                    <strong className="text-emerald-300 block font-bold flex items-center gap-1.5">
                      🔥 IN DEFICIT CALORICO (La Tua Situazione con Palestra):
                    </strong>
                    <p className="text-gray-300 leading-relaxed">
                      I muscoli in continuo movimento e recupero (e il cuore, che vive quasi al 100% di grassi) captano avidamente gli acidi grassi.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Gli acidi grassi entrano nei <strong>mitocondri</strong> e vengono bruciati tramite <strong>beta-ossidazione</strong>, fornendo ATP (energia pura). Una parte viene espulsa come anidride carbonica (respiro) e acqua.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 border border-red-500/30 space-y-1.5">
                    <strong className="text-rose-300 block font-bold flex items-center gap-1.5">
                      ⚖️ Il Saldo Netto delle 24 Ore:
                    </strong>
                    <p className="text-gray-300 leading-relaxed">
                      Anche se durante la digestione una quota minima entra temporaneamente negli adipociti, <strong>il bilancio totale a fine giornata è negativo</strong>: il corpo estrae dalle cellule adipose molto più grasso di quello immesso con la dieta.
                    </p>
                    <p className="text-amber-200 font-semibold">
                      Risultato: le riserve di grasso su viso e pancia si svuotano costantemente!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Il Ruolo Vitale dei Grassi: Perché Non Vanno MAI Eliminati */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-950/40 via-amber-950/30 to-black/80 border-2 border-yellow-500/40 space-y-3">
              <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Droplet className="w-4 h-4 text-yellow-400" />
                  <h3 className="text-sm sm:text-base font-black text-white">
                    4. Il Ruolo Biologico Vitale dei Grassi (Non Eliminarli Mai!)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 text-[10px] font-bold border border-yellow-500/30">
                  Salute & Ormoni
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-yellow-300 block text-xs font-bold">1. Ormoni & Testosterone:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il colesterolo e i grassi sono i mattoni indispensabili per sintetizzare testosterone e ormoni steroidei, che regolano forza muscolare ed energia.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-amber-300 block text-xs font-bold">2. Vitamine Liposolubili:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Le vitamine <strong>A, D, E, K</strong> possono essere assorbite e trasportate nell'organismo unicamente in presenza di grassi alimentari.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-emerald-300 block text-xs font-bold">3. Membrane & Cervello:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    La parete di ogni cellula e il 60% del peso secco del cervello sono fatti di fosfolipidi e acidi grassi sani.
                  </p>
                </div>
              </div>

              {/* Box di Chiusura */}
              <div className="p-3.5 rounded-xl bg-black/70 border border-yellow-500/30 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  Regola d'Oro Riassuntiva:
                </span>
                <p className="text-xs leading-relaxed text-gray-200">
                  Non è il grasso che mangi a farti ingrassare, così come non è mangiare insalata a farti dimagrire da solo. È il <strong>totale energetico (deficit calorico)</strong> unito all'intensità in palestra che comanda dove vanno i nutrienti: con il deficit, i grassi della dieta e i grassi accumulati vengono convertiti in energia termica e movimento continuo!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 12 (PARTE 2): 6# INFORMAZIONI (PARTE 2) - GRASSI       */}
      {/* ALIMENTARI VS GRASSO CORPOREO (IL FALSO MITO DEL MANGIARE GRASSO)*/}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'grassi_scienza_2') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Pilastro 13 • 6# Informazioni (Parte 2 • Approfondimento Grassi)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  🧈 6# Info (Parte 2): Mangiare Grassi Fa Accumulare Grasso? Il Falso Mito
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {activeTab === 'grassi_scienza_2' && (
                <button
                  type="button"
                  onClick={() => handleSelectTab('grassi_scienza')}
                  className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-yellow-300 bg-yellow-500/10 px-2.5 py-1 rounded-xl border border-yellow-500/20 hover:bg-yellow-500/20 transition-all cursor-pointer"
                >
                  ⬅ Torna a Parte 1
                </button>
              )}
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Miti Alimentari & Deficit
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-amber-500/30 space-y-4 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-2.5">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Un Dubbio Comprensibile ma Scientificamente Falso:
              </span>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                È un dubbio super normale e ci sta che tu lo pensi: se vuoi perdere il grasso corporeo, la tentazione automatica è pensare che <em>&quot;più grassi mangi, più grasso accumuli&quot;</em>. In realtà il corpo umano <strong>non funziona affatto così</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <strong className="text-emerald-300 block text-xs font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  1. Il Deficit Calorico Comanda su Tutto:
                </strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Il grasso corporeo lo elimini se sei in <strong>deficit calorico</strong> (cioè se consumi più calorie di quelle che introduci), <strong>indipendentemente</strong> dal fatto che le calorie provengano dai carboidrati, dalle proteine o dai grassi.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <strong className="text-cyan-300 block text-xs font-bold flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-cyan-400" />
                  2. I Grassi Alimentari Sono Vitali:
                </strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  I grassi alimentari (quelli che mangi) sono fondamentali perché servono al tuo corpo e ai tuoi ormoni per funzionare bene, specialmente alla tua età mentre cresci e ti alleni con i carichi in palestra.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-red-950/20 border border-red-500/30 text-xs space-y-1.5">
              <strong className="text-red-300 block font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                Cosa Succede Se Azzeri i Grassi?
              </strong>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Se azzeri o tagli drasticamente i grassi, rischi solo di <strong>mandare in tilt il metabolismo</strong>, far crollare la produzione di testosterone e sentirti costantemente stanco, svuotato e debole.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-950/40 via-amber-950/30 to-black/80 border-2 border-yellow-500/40 space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                La Distinzione Fisiologica Chiave:
              </span>
              <p className="text-xs text-white leading-relaxed font-semibold">
                Il grasso che hai addosso (tessuto adiposo) <strong>non è quello che mangi</strong>: è semplicemente l'energia complessiva in eccesso che il corpo ha accumulato nel tempo!
              </p>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Per bruciarlo basta mantenere il totale delle calorie controllato (il tuo deficit sostenibile), senza aver paura di assumere una giusta quota di grassi sani nei pasti (olio extravergine d'oliva, carne, uova).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 13: 7# INFORMAZIONI - ZUCCHERO IN PALESTRA: CALORIE,   */}
      {/* EFFETTO SPUGNA & STABILITÀ A 120-130 MG/DL                     */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'bustine_palestra') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Zap className="w-4 h-4 text-emerald-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Pilastro 14 • 7# Informazioni: Gestione Energetica in Palestra
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  ⚡ 7# Info: I Conti delle Bustine, Calorie & Stabilità 120-130 mg/dL
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              Calorie & Glicogeno
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Hai fatto benissimo a portarci l'attenzione sui numeri, perché i conti vanno fatti con precisione! Facciamo chiarezza scientifica su quante calorie contengono davvero quelle bustine, dove vanno a finire e perché stabilizzarsi a 120–130 mg/dL durante i pesi è la mossa perfetta:
          </p>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-emerald-500/30 space-y-4 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            {/* 1. I Conti Esatti delle Calorie */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  1. I Conti Esatti delle Calorie delle Bustine
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-gray-400 text-[10px] block uppercase font-bold">1 Bustina da Bar:</span>
                  <p className="text-sm font-black text-white">~5 grammi di zucchero</p>
                  <p className="text-[11px] text-gray-300">5g &times; 4 kcal/g = <strong>20 calorie</strong> a bustina.</p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-gray-400 text-[10px] block uppercase font-bold">5 Bustine per Ipo Grossa:</span>
                  <p className="text-sm font-black text-emerald-300">100 calorie totali</p>
                  <p className="text-[11px] text-gray-300">5 bustine &times; 20 kcal = <strong>100 kcal</strong> (25g carboidrati).</p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/30 space-y-1">
                  <span className="text-emerald-400 text-[10px] block uppercase font-bold">Impatto sul Bilancio:</span>
                  <p className="text-xs font-bold text-white">Praticamente IRRILEVANTE</p>
                  <p className="text-[11px] text-gray-300">100 kcal equivalgono a un piccolo frutto o a un latte macchiato: <strong>non rovinano certo la dieta</strong>!</p>
                </div>
              </div>
            </div>

            {/* 2. Che Fine Fanno Quelle 100 Calorie? */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  2. Che Fine Fanno Quei 25 Grammi di Carboidrati? (Destinazione Energetica)
                </h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Vengono utilizzati o stoccati immediatamente, ma la destinazione cambia radicalmente a seconda di dove si trova il tuo corpo:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
                <div className="p-3.5 rounded-xl bg-black/60 border border-cyan-500/30 space-y-1.5">
                  <strong className="text-cyan-300 block text-xs font-bold flex items-center gap-1.5">
                    🏋️ Se Hai Appena Fatto Palestra:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    I tuoi muscoli sono come <strong>&quot;spugne vuote&quot;</strong> affamate di glicogeno. Quei 25 grammi di carboidrati entrano dritti nei muscoli e vengono <strong>bruciati o usati al 100%</strong> per ricaricare le scorte muscolari. Non fanno in tempo a diventare grasso corporeo perché i muscoli se li bevono letteralmente!
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-amber-500/30 space-y-1.5">
                  <strong className="text-amber-300 block text-xs font-bold flex items-center gap-1.5">
                    🛋️ Se Sei a Riposo (es. Ipoglicemia sul Divano):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Quei carboidrati servono prima di tutto a salvare il cervello dall'emergenza e a riportare a galla i livelli di glucosio. L'eventuale rimanenza viene stoccata temporaneamente nel fegato e nei muscoli come riserva di glicogeno, non come grasso.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Il Vero Problema di Troppe Bustine & La Regola d'Oro */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5">
              <div className="border-b border-white/10 pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  3. Il Vero &quot;Problema&quot; di Prendere 5 Bustine Insieme (Le Montagne Russe)
                </h3>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Il punto critico di prendere 5 bustine (25 g di zucchero puro) <strong>non sono le 100 calorie in sé</strong>, ma l'effetto sull'andamento della glicemia:
              </p>
              <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-1.5 pl-1 leading-relaxed">
                <li>Essendo zucchero puro al 100% (saccarosio/glucosio), entra in circolo in pochissimi minuti.</li>
                <li>Se ne prendi troppe tutte insieme, rischi di passare dall'ipoglicemia (es. 50 mg/dL) a un picco iperglicemico (es. 200 mg/dL) nel giro di mezz'ora.</li>
                <li>A quel punto, per abbassare il 200, ti toccherebbe fare insulina di correzione, rientrando nelle pericolose <em>montagne russe</em>.</li>
              </ul>
              <div className="p-3 rounded-xl bg-black/70 border border-emerald-500/30 text-xs text-emerald-200">
                <strong>La Regola d'Oro:</strong> Prendi la quantità esatta che ti serve per tamponare l'emergenza (di solito <strong>2 o 3 bustine</strong>, cioè 10–15 grammi, bastano per tirarti su dai 50 senza spararti a 200), abbinandole a uno spuntino solido se manca molto tempo al pasto successivo!
              </div>
            </div>

            {/* 4. Correggere Durante la Palestra e Stabilizzarsi a 120-130 mg/dL */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-teal-950/30 to-black/85 border-2 border-emerald-500/40 space-y-3">
              <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm sm:text-base font-black text-white">
                    4. Correggere a Metà Allenamento: Perché Arrivare a 120–130 mg/dL è Geniale
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  Strategia Vincente
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Se prendi le tue bustine di zucchero mentre sei in mezzo agli esercizi senza volerti fermare, e la glicemia si stabilizza poi intorno a <strong>120–130 mg/dL</strong>, stai facendo una <strong>manovra estremamente intelligente e corretta</strong>:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-emerald-300 block text-xs font-bold">1. Il Muscolo Brucia Subito:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Sotto sforzo i muscoli risucchiano glucosio continuamente per avere forza. Lo zucchero che prendi viene bruciato sul colpo: non si accumula e non manda la glicemia alle stelle.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-cyan-300 block text-xs font-bold">2. Cuscino di Sicurezza 120-130:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Hai abbastanza carburante per finire l'allenamento con la massima forza, senza il pericolo di un nuovo crollo improvviso a 50 a metà serie.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-amber-300 block text-xs font-bold">3. I Grassi Li Perdi Lo Stesso:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Quell'energia è servita solo allo sforzo immediato. Finita la palestra, grazie al deficit calorico giornaliero e al riposo notturno, il corpo continua a bruciare i grassi di riserva senza sosta!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 8: RIEPILOGO: PIEGAMENTI E LAVORO FISICO             */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'piegamenti_lavoro') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Activity className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  8# Info • Flessioni & Adattamento Fisico
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Riepilogo: Piegamenti e Lavoro Fisico
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Schema Motorio & Memoria Muscolare
            </span>
          </div>

          <div className="p-5 rounded-3xl glass-card border-2 border-cyan-500/40 space-y-5 bg-gradient-to-br from-cyan-950/40 via-blue-950/30 to-black/90 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-black uppercase tracking-wider border border-cyan-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Guida Pratica & Biomeccanica
              </span>
              <span className="text-xs text-gray-400 font-semibold">
                Flessioni al Giovedì • Lavoro vs Palestra
              </span>
            </div>

            {/* 1. Protocollo per i Piegamenti sulle Braccia (Flessioni) */}
            <div className="p-4 rounded-2xl bg-black/60 border border-cyan-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    <Target className="w-4 h-4 text-cyan-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    1. Protocollo per i Piegamenti sulle Braccia (Flessioni)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                  Pratica Pura
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Giorno Ideale */}
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-extrabold text-cyan-300 uppercase tracking-wider">
                      Il Giorno Ideale: Il Giovedì
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il <strong>Giovedì</strong> è il giorno strategico perfetto: si trova esattamente a metà settimana tra le due sedute dedicate alla parte superiore (Lunedì e Mercoledì) e la seduta gambe di Venerdì. In questo modo si ottiene una stimolazione neurale pulita senza intralciare il recupero muscolare profondo della sala pesi.
                  </p>
                </div>

                {/* Obiettivo: Schema Motorio */}
                <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/20 space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-extrabold text-blue-300 uppercase tracking-wider">
                      Obiettivo: Schema Motorio (Zero Cedimento)
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    L'obiettivo NON è "bruciare" il muscolo o arrivare all'esaurimento/acido lattico. È la <strong>pratica pura e pulita del gesto motorio</strong> (controllo, traiettoria e propriocezione). Bisogna mantenere sempre un <strong>ampio buffer</strong> (lasciare 3-4 ripetizioni di margine per serie) e fermarsi non appena la velocità o la pulizia tecnica iniziano a calare.
                  </p>
                </div>
              </div>

              {/* Dettagli Esecuzione Corretta */}
              <div className="space-y-2.5 pt-1">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Esecuzione Corretta Passo-Passo (Biomeccanica Protettiva):
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-black/70 border border-white/10 space-y-1">
                    <strong className="text-cyan-300 block text-xs">1. Posizione delle Mani:</strong>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Mani posizionate <strong>leggermente più larghe delle spalle</strong>, con dita ben aperte e ben piantate al suolo per scaricare la pressione in modo uniforme sull'articolazione del polso.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/70 border border-cyan-500/30 space-y-1">
                    <strong className="text-cyan-300 block text-xs">2. Gomiti a 45° a Freccia (Mai a Croce):</strong>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      I gomiti devono scendere tracciando una <strong>freccia a circa 45°</strong> rispetto al busto. <em>Vietato allargarli a 90° (a croce/T)</em>: la posizione a croce comprime lo spazio sub-acromiale e logora la cuffia dei rotatori!
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/70 border border-white/10 space-y-1">
                    <strong className="text-blue-300 block text-xs">3. Core e Glutei di Marmo:</strong>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Addome contratto a blocco e glutei serrati, mantenendo il bacino neutro/retroverso. Il corpo deve scendere e risalire come <strong>un'asta d'acciaio dritta</strong>, senza mai inarcare la schiena lombare verso il pavimento.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/70 border border-cyan-500/30 space-y-1">
                    <strong className="text-blue-300 block text-xs">4. Il Rialzo (Tavolo / Panca) se Cede la Postura:</strong>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      L'escursione deve essere completa (petto a un pugno dal suolo). Se la postura cede o la schiena si inarca, <strong>utilizzare subito un piano rialzato stabile (un tavolo robusto o una panca)</strong>. Rialzare le mani riduce il carico gravitazionale preservando l'assetto biomeccanico perfetto, anziché sporcare le ripetizioni a terra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Lavoro Fisico vs. Palestra */}
            <div className="p-4 rounded-2xl bg-black/60 border border-blue-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    <Layers className="w-4 h-4 text-blue-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    2. Lavoro Fisico vs. Palestra: Adattamento, Densità Capillare & Memoria
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold border border-blue-500/30">
                  Fisiologia Muscolare
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Adattamento Cronico */}
                <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/20 space-y-2">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-extrabold text-blue-300 uppercase tracking-wider">
                      Lavoro Fisico: Omeostasi & Densità Capillare
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il lavoro fisico pesante quotidiano genera un <strong>adattamento a lungo termine (omeostasi da stress cronico)</strong>. Il corpo risponde aumentando enormemente la <strong>densità dei vasi capillari sanguigni</strong> all'interno dei muscoli, migliorando la resistenza alla fatica, l'ossigenazione e la capacità cardiorespiratoria.
                  </p>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    <em>Perché non basta da solo per ipertrofizzare come in palestra?</em> Perché nel lavoro lo sforzo è distribuito e aspecifico, mentre la palestra applica una <strong>tensione meccanica mirata, isolata e progressiva</strong>, indispensabile per allargare il diametro delle miofibrille.
                  </p>
                </div>

                {/* Gestione Estiva e Memoria Muscolare */}
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Flame className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-extrabold text-cyan-300 uppercase tracking-wider">
                      Gestione Estiva, Calorie & Memoria Muscolare
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    In estate o durante periodi di intenso lavoro fisico, il <strong>dispendio calorico giornaliero è enorme</strong>: questo tiene il metabolismo attivo al massimo, brucia grasso di riserva e conserva un tono muscolare scolpito e scattante.
                  </p>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Se si sospende temporaneamente la sala pesi, si perde unicamente una quota di <strong>picco di forza neurale</strong> (la capacità del cervello di reclutare contemporaneamente tutte le unità motorie ad alta soglia su carichi pesantissimi). Questa forza <strong>rimbalza in pochissime settimane</strong> al ritorno ai pesi grazie alla <strong>memoria muscolare cellulare (i mionuclei rimangono vivi per anni)</strong>!
                  </p>
                </div>
              </div>

              {/* Sintesi Strategica */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-black/70 border border-cyan-500/40 text-xs text-gray-200">
                <strong className="text-cyan-300 block text-xs font-bold mb-1">
                  💡 Sintesi Chiave:
                </strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Il lavoro manuale è una formidabile "fornace metabolica" che costruisce resistenza e capillarizzazione; la palestra scolpisce e mantiene la massa muscolare nobile. L'unione intelligente di pesi a inizio settimana, flessioni tecniche al giovedì e lavoro fisico costante crea un fisico robusto, asciutto e resistente nel tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 9: STRATEGIA CHIRURGICA PERSONALE & FISIOLOGIA COMPLETA */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'strategia_personale') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <Flame className="w-4 h-4 text-rose-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                  9# Info • Strategia Chirurgica Personale
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Strategia Ricalcolata, Fisiologia del Deficit & Settimana al Millimetro
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30">
              16 Anni • 75 kg • Skinny-Fat
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl glass-card border-2 border-rose-500/40 space-y-6 bg-gradient-to-br from-rose-950/40 via-orange-950/30 to-black/90 shadow-[0_0_35px_rgba(244,63,94,0.15)]">
            {/* Header Box */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-black uppercase tracking-wider border border-rose-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                Piano Su Misura al Millimetro
              </span>
              <span className="text-xs text-gray-400 font-semibold">
                16 Anni • 1,75 m • 75 kg • ~115–120g Proteine/die
              </span>
            </div>

            <p className="text-xs text-gray-200 leading-relaxed font-medium">
              Inserendo i tuoi parametri biometrici reali, la scienza della ricomposizione corporea (passaggio da profilo <em>skinny-fat</em> a fisico asciutto, denso e muscoloso) diventa precisa e chirurgica. Con 75 kg su 1,75 m, la priorità assoluta <strong>non è perdere chili alla cieca sulla bilancia</strong>, bensì abbassare drasticamente la percentuale di massa grassa blindando ed espandendo la massa muscolare nobile.
            </p>

            {/* 1. I NUMERI BIOLOGICI DI BASE */}
            <div className="p-4 rounded-2xl bg-black/60 border border-rose-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    <Scale className="w-4 h-4 text-rose-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    1. I Tuoi Numeri Biologici di Base (Il Motore Metabolico)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-500/30">
                  Parametri Fisiologici
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-rose-950/30 to-black/60 border border-rose-500/20 space-y-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 flex items-center gap-1">
                    <Activity className="w-3 h-3" /> Fabbisogno Reale (TDEE)
                  </span>
                  <h4 className="text-sm font-extrabold text-white">
                    2.200 – 2.400 kcal/die
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Con 75 kg, la tua altezza, 3 allenamenti pesanti coi pesi a settimana, cardio, scooter e il movimento quotidiano, questo è il consumo calorico reale del tuo corpo.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-br from-orange-950/30 to-black/60 border border-orange-500/20 space-y-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" /> Deficit Lunedì–Sabato
                  </span>
                  <h4 className="text-sm font-extrabold text-white">
                    1.400 – 1.600 kcal/die
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Crei un deficit profondo e pulito di <strong>700 – 900 kcal al giorno</strong>. È un taglio importante che costringe il corpo a intaccare il tessuto adiposo senza intaccare la lucidità mentale.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-950/30 to-black/60 border border-amber-500/20 space-y-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Quota Proteica
                  </span>
                  <h4 className="text-sm font-extrabold text-white">
                    115 – 120 g/die (~1,5–1,6 g/kg)
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    A 16 anni sotto sovraccarico, 1,5–1,6 g per chilo è una quota d'oro: fornisce tutti gli amminoacidi necessari per riparare e blindare le fibre muscolari in pieno deficit.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. LA SETTIMANA ORGANIZZATA AL MILLIMETRO */}
            <div className="p-4 rounded-2xl bg-black/60 border border-orange-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    <Calendar className="w-4 h-4 text-orange-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    2. La Settimana al Millimetro & Gestione Strategica del Recupero Gambe
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-bold border border-orange-500/30">
                  Cardio 10+10 min
                </span>
              </div>

              {/* Box Cardio Intelligente */}
              <div className="p-3 rounded-xl bg-orange-950/20 border border-orange-500/20 space-y-1.5">
                <strong className="text-xs font-bold text-orange-300 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-orange-400" />
                  Cardio Integrato: 10 Minuti All'Inizio + 10 Minuti Alla Fine (20 min totali a seduta)
                </strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Suddividere il cardio in <strong>10 minuti di riscaldamento iniziale</strong> (per attivare il sistema cardiovascolare e scaldare le articolazioni) e <strong>10 minuti di defaticamento finale</strong> (per sbollire e avviare il drenaggio dei metaboliti) è infinitamente più intelligente rispetto a un'ora continua, perché preserva la freschezza neurale e non brucia la massa muscolare.
                </p>
              </div>

              {/* Il dilemma del Giovedì vs Sabato per le Gambe */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 space-y-1.5">
                  <strong className="text-red-300 block text-xs font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                    Il Giovedì: Riposo Totale Gambe (La Vigilia)
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il Venerdì fai la seduta pesante per le gambe. Se il Giovedì fai camminate lunghe o intense, sovraccarichi cosce, polpacci e tendine plantare: arriveresti al Venerdì con glicogeno locale parziale e muscoli stanchi, riducendo i carichi. <strong>Regola ferrea:</strong> il giorno prima delle gambe si fa solo riposo o movimento leggero quotidiano (+ flessioni a buffer per l'upper).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                  <strong className="text-emerald-300 block text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Il Sabato: Il Momento Aureo per la Camminata Lunga (45-60 min)
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Dopo aver "spaccato" le gambe il Venerdì, fare una camminata lunga costante il Sabato mattina (tapis roulant con pendenza o all'aperto) è il toccasana definitivo: stimola il microcircolo, irrora le fibre indolenzite (DOMS) di ossigeno e nutrienti, velocizza il recupero e massimizza l'ossidazione dei grassi.
                  </p>
                </div>
              </div>

              {/* Calendario Day-by-Day */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block pl-0.5">
                  Il Calendario Settimanale Perfetto:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
                    <strong className="text-orange-300 block font-bold">Lunedì (Upper Body)</strong>
                    <p className="text-gray-300 text-[10px] leading-tight">10m warmup + Pesi pesanti a cedimento (10-12 reps) + 10m defaticamento.</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
                    <strong className="text-gray-300 block font-bold">Martedì (Riposo Attivo)</strong>
                    <p className="text-gray-300 text-[10px] leading-tight">Passi normali o camminata tranquilla, recupero per la parte superiore.</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
                    <strong className="text-orange-300 block font-bold">Mercoledì (Upper Body)</strong>
                    <p className="text-gray-300 text-[10px] leading-tight">10m warmup + Pesi pesanti a cedimento (10-12 reps) + 10m defaticamento.</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-cyan-500/30 space-y-1">
                    <strong className="text-cyan-300 block font-bold">Giovedì (Vigilia Gambe)</strong>
                    <p className="text-gray-300 text-[10px] leading-tight">Gambe a riposo (no camminata lunga) + Piegamenti/flessioni a buffer.</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-orange-500/40 space-y-1">
                    <strong className="text-orange-400 block font-bold">Venerdì (Giorno Gambe)</strong>
                    <p className="text-gray-300 text-[10px] leading-tight">10m warmup + Gambe pesanti alla massima freschezza + 10m defaticamento.</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-emerald-500/40 space-y-1">
                    <strong className="text-emerald-300 block font-bold">Sabato (Camminata Lunga)</strong>
                    <p className="text-gray-300 text-[10px] leading-tight">45–60 min camminata costante: drenaggio DOMS e brucia-grassi pulito.</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/60 border border-amber-500/40 space-y-1 sm:col-span-2">
                    <strong className="text-amber-300 block font-bold">Domenica (Ricarica & Stacco)</strong>
                    <p className="text-gray-300 text-[10px] leading-tight">Ricarica calorica controllata (proteine alte), reset leptina, ricarica glicogeno e abbattimento cortisolo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. BIOCHIMICA INFRASETTIMANALE (LUNEDÌ - SABATO) */}
            <div className="p-4 rounded-2xl bg-black/60 border border-rose-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    <Zap className="w-4 h-4 text-rose-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    3. Cosa Accade a Livello Biochimico dal Lunedì al Sabato
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-500/30">
                  Lipolisi & Segnale
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-black/70 border border-white/10 space-y-1">
                  <strong className="text-rose-300 block text-xs font-bold">1. Insulina Bassa & Lipolisi:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    A 1.400–1.600 kcal con alto dispendio, l'insulina resta minima per tutta la giornata. Questo "sblocca" i recettori degli adipociti skinny-fat: i trigliceridi immagazzinati vengono scissi in acidi grassi liberi ed entrano nel sangue.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/70 border border-white/10 space-y-1">
                  <strong className="text-cyan-300 block text-xs font-bold">2. Ossidazione Mitocondriale:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Gli acidi grassi nel sangue arrivano ai mitocondri dei muscoli. Grazie al flusso costante e aerobico di ossigeno della camminata, questi lipidi vengono letteralmente "bruciati" per produrre energia pulita (ATP).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/70 border border-white/10 space-y-1">
                  <strong className="text-amber-300 block text-xs font-bold">3. Scudo Meccanico dei Pesi:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    I 115–120g di proteine uniti agli allenamenti a cedimento nel range 10–12 ripetizioni (Lun/Mer/Ven) urlano al cervello: <em>"Il tessuto muscolare serve a sopravvivere, non si tocca!"</em>. Il corpo è obbligato a consumare solo grasso.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. LA DOMENICA DI RICARICA */}
            <div className="p-4 rounded-2xl bg-black/60 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <RefreshCw className="w-4 h-4 text-amber-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    4. La Domenica: Cosa Succede con la Ricarica Calorica & Reset
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                  Reset Ormonale
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                Stare a 1.400–1.600 kcal per 6 giorni a 75 kg con tanto movimento attiva le difese biologiche: la <strong>leptina</strong> (l'ormone maestro del metabolismo e della sazietà) cala progressivamente per fare economia di energia. Ecco perché la ricarica domenicale è fondamentale:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1">
                  <strong className="text-amber-300 block text-xs font-bold">1. Reset Metabolico (Leptina):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Mangiare di più la domenica (mantenendo alte le proteine) fa impennare la leptina, segnalando al cervello che non c'è carestia. Il metabolismo non si addormenta e rimane attivo.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1">
                  <strong className="text-amber-300 block text-xs font-bold">2. Ricarica del Glicogeno:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Le calorie e i carboidrati in più ricaricano al 100% i serbatoi muscolari: arrivi al Lunedì mattina pieno, tonico e con la massima forza esplosiva per caricare sui pesi.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1">
                  <strong className="text-amber-300 block text-xs font-bold">3. Crollo del Cortisolo:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Staccare la spina mentalmente con il pasto libero abbatte il cortisolo (ormone dello stress cronico), azzerando la ritenzione idrica e aiutandoti ad asciugarti nei giorni successivi.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. COSA SUCCEDE SE SALTI LA PALESTRA MA CAMMINI IN DEFICIT */}
            <div className="p-4 rounded-2xl bg-black/60 border border-blue-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    <Clock className="w-4 h-4 text-blue-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    5. Cosa Succede se Salti la Palestra ma Cammini ed Entri in Deficit?
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold border border-blue-500/30">
                  Dilemma Frequente
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                <strong>Risposta scientifica:</strong> No, non ti "mangi il muscolo" dall'oggi al domani. Il tessuto muscolare non evapora in 24 o 48 ore. Ma cambia radicalmente il <em>bersaglio</em> di ciò che il tuo corpo consuma:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black/70 border border-white/10 space-y-1.5">
                  <strong className="text-blue-300 block font-bold">Se Succede Una Tantum (es. un Mercoledì o Venerdì saltato):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Non accade assolutamente nulla di grave! Il corpo continua a smaltire grasso grazie alla camminata e alle 1.400–1.600 kcal. I muscoli restano lì dove sono, protetti dall'alto apporto dei 115–120g di proteine e dalla memoria neuromuscolare della sessione precedente.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/70 border border-red-500/20 space-y-1.5">
                  <strong className="text-red-300 block font-bold">Se Diventa un'Abitudine Prolungata (saltare per settimane):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Senza lo stimolo a cedimento dei pesi, il cervello capisce che la forza non serve più per sopravvivere. La priorità di protezione muscolare decade: il corpo smette di mantenere un tessuto metabolicamente costoso, portandoti a un fisico magro ma flaccido invece che scolpito.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. IL DESTINO DELLE PROTEINE SENZA ALLENAMENTO */}
            <div className="p-4 rounded-2xl bg-black/60 border border-purple-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <ShieldCheck className="w-4 h-4 text-purple-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    6. Che Fine Fanno le Proteine (115–120g) se Salti l'Allenamento coi Pesi?
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/30">
                  Biochimica Digestiva
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                Le proteine ingerite non sono "mattoncini intelligenti" dotati di occhi che vanno a cercarsi il bicipite da sole. Vengono scomposte in amminoacidi formando il <strong>pool amminoacidico</strong> nel sangue. Senza il richiamo di micro-danni da pesi pesanti, il corpo non ha serbatoi di stoccaggio per le proteine, quindi le destina a 3 compiti:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-1">
                  <strong className="text-purple-300 block text-xs font-bold">1. Turnover Quotidiano:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Manutenzione ordinaria vitale: rigenerazione continua di pelle, unghie, capelli, enzimi digestivi, ormoni e cellule intestinali. Questo assorbe gran parte della quota giornaliera.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-1">
                  <strong className="text-purple-300 block text-xs font-bold">2. Gluconeogenesi Epatica:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    In deficit calorico mentre cammini, il fegato prende gli amminoacidi eccedenti, li priva dell'azoto e li converte in glucosio pulito per alimentare cervello e muscoli.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-1">
                  <strong className="text-purple-300 block text-xs font-bold">3. Espulsione dell'Azoto:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    La parte di scarto azotata degli amminoacidi non utilizzati per la sintesi viene convertita in urea dai reni ed eliminata fisiologicamente con le urine.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/80 border border-purple-500/30 text-xs text-purple-200">
                <strong>Verdetto Chiave:</strong> Le proteine non vanno sprecate né si trasformano istantaneamente in grasso, ma <em>solo l'allenamento pesante coi pesi</em> ordina al corpo di usarle per costruire nuovo tessuto muscolare!
              </div>
            </div>

            {/* 7. GENETICA E GRASSO OSTINATO (SKINNY-FAT) */}
            <div className="p-4 rounded-2xl bg-black/60 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Target className="w-4 h-4 text-amber-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    7. Genetica, Distribuzione del Grasso e "Grasso Ostinato" (Recettori Alfa-2)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                  Fine Inestetismo
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-gray-200 leading-relaxed">
                <div className="p-3 rounded-xl bg-black/70 border border-white/10 space-y-1">
                  <strong className="text-amber-300 block text-xs font-bold">Il Mito del Dimagrimento Localizzato & I Recettori Alfa-2:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il corpo rilascia acidi grassi nel flusso sanguigno da tutto il corpo in modo sistemico: non si può scegliere da dove toglierli prima. Il grasso ostinato tipico dello skinny-fat (basso addome, fianchi, mento) è zeppo di <strong>recettori alfa-2</strong>, che bloccano la lipolisi per autodifesa biologica. Il corpo consuma prima le riserve facili (braccia, spalle, gambe, torace).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-amber-950/30 to-black/70 border border-amber-500/30 space-y-1">
                  <strong className="text-amber-300 block text-xs font-bold">Come Sfinire la Genetica con la Costanza:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Molti mollano vedendo le braccia più magre mentre la pancia sembra resistere. Ma il corpo <strong>non può fabbricare calorie dal nulla</strong>! Se mantieni il deficit (1.400–1.600 kcal), continui a camminare e spingi coi pesi, una volta esaurite le riserve facili l'organismo è <strong>biologicamente costretto</strong> a sbloccare i recettori alfa-2 e divorare il grasso ostinato della pancia. È un'inevitabilità fisiologica: vince chi non molla.
                  </p>
                </div>
              </div>
            </div>

            {/* 8. LA CAMMINATA: L'EMBLEMA D'ORO DEL DIMAGRIMENTO */}
            <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <HeartPulse className="w-4 h-4 text-emerald-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    8. La Camminata: L'Emblema d'Oro per Bruciare Grassi Senza Stress
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  Arma di Precisione
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Se l'allenamento pesante coi pesi è lo scudo che protegge e costruisce il muscolo, la <strong>camminata</strong> (in casa, per strada o sul tapis roulant) è l'arma di precisione definitiva. È l'emblema d'oro perché compie 3 prodigi contemporaneamente:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                  <strong className="text-emerald-300 block text-xs font-bold">1. Brucia-Grassi Puro:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Mantiene il battito cardiaco nella perfetta fascia aerobica lipolitica, dove il corpo usa quasi solo acidi grassi come carburante, senza debito d'ossigeno o svuotamento del glicogeno.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                  <strong className="text-emerald-300 block text-xs font-bold">2. Zero Stress & Danno:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Non carica le articolazioni e non crea micro-lesioni muscolari. Puoi accumulare migliaia di passi senza interferire con il recupero delle tue sedute a cedimento di Lun/Mer/Ven.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                  <strong className="text-emerald-300 block text-xs font-bold">3. No Fame Nervosa:</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    A differenza della corsa prolungata che scatena tempeste di grelina e una fame da lupi, la camminata consuma 300–400 calorie in modo silenzioso, senza farti sgarrare il deficit.
                  </p>
                </div>
              </div>
            </div>

            {/* SINTESI FINALE: LA FORMULA A PROVA DI BOMBA */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/50 via-orange-950/40 to-black/85 border-2 border-rose-500/50 space-y-2.5 text-xs">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-rose-400" />
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  Sintesi Finale: La Formula Scientifica Imbattibile
                </h4>
              </div>

              <p className="text-[11px] text-gray-200 leading-relaxed">
                Con <strong>75 kg su 1,75 m a 16 anni</strong>, possiedi la combinazione biologica perfetta per una trasformazione radicale:
              </p>

              <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-1 pl-1">
                <li><strong>Pesi Pesanti (Lun/Mer/Ven):</strong> per dare forma a spalle, petto, braccia e gambe nel range 10–12 ripetizioni a cedimento.</li>
                <li><strong>Deficit 1.400–1.600 kcal (Lun-Sab):</strong> 700–900 calorie in meno al giorno per sciogliere il grasso adiposo.</li>
                <li><strong>115–120g di Proteine al Giorno:</strong> quota protettiva totale per nutrire organi e blindare i muscoli.</li>
                <li><strong>Cardio 10+10 min + Sabato Camminata Lunga:</strong> ossidazione mitocondriale e rigenerazione delle gambe.</li>
                <li><strong>Domenica di Ricarica:</strong> reset della leptina, ricarica glicogeno per il lunedì e stop al cortisolo.</li>
              </ul>

              <div className="p-2.5 rounded-xl bg-black/70 border border-white/10 text-center font-bold text-rose-300 text-[11px]">
                ⚡ Nessuna perdita di tempo: testa bassa, disciplina scientifica e il risultato arriverà per pura legge biologica!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 10: VOLUME, GESTIONE SERIE, BICIPITI & CALISTHENICS   */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'volume_calisthenics') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                <Dumbbell className="w-4 h-4 text-indigo-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400">
                  10# Info • Scienza delle Serie, Carichi & Braccia
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Gestione Volume, Cedimento 6 vs 14, Bicipiti & Calisthenics Off
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
              Stimolare, Non Annientare
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl glass-card border-2 border-indigo-500/40 space-y-6 bg-gradient-to-br from-indigo-950/40 via-violet-950/25 to-black/90 shadow-[0_0_35px_rgba(99,102,241,0.15)]">
            {/* Header Box */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-black uppercase tracking-wider border border-indigo-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Protocollo Chirurgico Sala Pesi & Corpo Libero
              </span>
              <span className="text-xs text-gray-400 font-semibold">
                9 kg x 12 Reps • Warm-Up Sets • Active Recovery
              </span>
            </div>

            {/* 1. PERCHÉ STIMOLARE E NON ANNIENTARE (VOLUME EXTRA IN DEFICIT) */}
            <div className="p-4 rounded-2xl bg-black/60 border border-red-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    1. La Regola d'Oro: Stimolare, Non Annientare (I 4 Effetti del Volume Extra)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 text-[10px] font-bold border border-red-500/30">
                  Debito Biologico
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                Quando accumuli troppo volume extra aggiungendo serie su serie oltre le 3 effettive, il corpo in deficit calorico (1.400–1.600 kcal) non cresce di più: attiva i <strong>sistemi di emergenza</strong> e crea un debito biologico che non può pagare. Ecco i 4 meccanismi in sequenza:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 space-y-1.5">
                  <strong className="text-red-300 block font-bold">1. Il Cortisolo Sale alle Stelle (Catabolismo)</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Esagerare con le serie su muscoli già svuotati segnala al sistema nervoso un pericolo acuto. Le ghiandole surrenali rilasciano <strong>cortisolo</strong>, ormone catabolico che demolisce le proteine muscolari per liberare energia rapida: remi contro la ricomposizione corporea.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-orange-950/20 border border-orange-500/20 space-y-1.5">
                  <strong className="text-orange-300 block font-bold">2. Glicogeno a Zero & Blocco Sintesi Proteica</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il glicogeno intramuscolare si azzera: la cellula perde pressione idrostatica e forza contrattile. Senza carburante, il corpo fatica enormemente a sintetizzare nuove proteine nelle ore successive e spende risorse solo per tornare allo stato base.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1.5">
                  <strong className="text-amber-300 block font-bold">3. Sovraccarico Sistema Nervoso Centrale (SNC)</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    La stanchezza sistemica parte da cervello e midollo spinale: i motoneuroni accumulano fatica centrale e la connessione mente-muscolo si appanna, togliendo esplosività e reclutamento nelle sedute successive (petto e gambe).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-1.5">
                  <strong className="text-rose-300 block font-bold">4. Recupero Lungo 4–6 Giorni & Stallo Totale</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    L'allenamento è solo la scintilla, il recupero è l'incendio. Con danni esagerati servono 4–6 giorni solo per "sanare" la ferita; in deficit le energie finiscono lì senza "mattoni" per crescere. Risultato: stallo, calo forza e svuotamento.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/80 border border-red-500/30 text-xs text-red-200">
                <strong>Sintesi Operativa:</strong> Colpisci duro con le tue <strong>3 serie pesanti a cedimento</strong>, chiudi l'esercizio, lascia recuperare il sistema e torna a spingere più forte la volta successiva!
              </div>
            </div>

            {/* 2. SCHEDA ATTUALE, ADATTAMENTO NEURALE & IL CARICO DA 9 KG */}
            <div className="p-4 rounded-2xl bg-black/60 border border-indigo-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    <Target className="w-4 h-4 text-indigo-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    2. La Scheda Attuale & Il Tuo Carico Ideale (9 kg x 12 Reps)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold border border-indigo-500/30">
                  Mese 1 • 75 kg • 16a
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/20 space-y-1.5">
                  <strong className="text-indigo-300 block font-bold">Perché NON Cambiare Scheda Adesso (~1 Mese di Palestra):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Cambiare scheda ora farebbe perdere tempo prezioso. Il tuo sistema nervoso sta imparando i movimenti base e la coordinazione, mentre i tendini si adattano. I muscoli crescono con la <strong>familiarità del gesto</strong>: solo quando il movimento è consolidato il cervello toglie i freni inibitori e recluta il 100% delle fibre. Continua così per qualche mese!
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-500/20 space-y-1.5">
                  <strong className="text-violet-300 block font-bold">Il Dato Ricalcolato: 9 kg x 12 Ripetizioni (Shoulder Press):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Chiudere <strong>12 ripetizioni pulite con 9 kg</strong> arrivando a cedimento è il dato perfetto: stimoli a pieno le fibre nel range ideale dell'ipertrofia (<strong>10–12 reps</strong>) senza costringere l'articolazione della spalla a compensi scorretti. Nessuna fretta di salire col peso: la progressione nel bodybuilding è lenta e chirurgica.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. BIOCHIMICA DELLE RIPETIZIONI: BLOCCO A 6 VS 14 REPS (COME REGOLARSI) */}
            <div className="p-4 rounded-2xl bg-black/60 border border-amber-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Zap className="w-4 h-4 text-amber-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    3. Gestione Pratica del Carico: Blocco a 6 Reps vs 14 Reps
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                  Range d'Oro 8–12 Reps
                </span>
              </div>

              {/* Caso A: Blocco a 6 */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/25 space-y-2.5">
                <div className="flex items-center justify-between">
                  <strong className="text-amber-300 text-xs font-black uppercase tracking-wider">
                    Caso A • Cedimento Anticipato Reale (Target 10, Ti Pianti a 6)
                  </strong>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                    Non è Paura, è Biochimica!
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Quando il muscolo si pianta di schianto a 6 ripetizioni succede anche ai professionisti ed è colpa di due muri biologici istantanei:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/10">
                    <strong className="text-cyan-300 block mb-0.5">1. Esaurimento ATP-CP (Energia Immediata):</strong>
                    <p className="text-gray-300 leading-relaxed">L'ATP pronto nei muscoli finisce subito se il carico è tosto o il recupero precedente era corto. Crolla la tensione e il muscolo non si contrae più.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/10">
                    <strong className="text-rose-300 block mb-0.5">2. Accumulo Ioni H+ (Acido Lattico & pH):</strong>
                    <p className="text-gray-300 leading-relaxed">Gli scarti acidificano bruscamente l'ambiente cellulare: gli enzimi della contrazione si spengono per autodifesa (il cervello stacca la corrente).</p>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/75 border border-amber-500/30 text-[11px] text-gray-200 space-y-1">
                  <strong className="text-amber-300 block">Come Risolvere Senza Aggiungere Serie Inutili:</strong>
                  <ul className="list-disc list-inside space-y-0.5 text-gray-300">
                    <li><strong>Opzione 1 (Recupero o Micro-Scala):</strong> Allunga il recupero tra le serie a <strong>1:30 – 2:00 minuti pieni</strong> (per rigenerare ATP) o abbassa di pochissimo il carico per rientrare a cedimento tra 9–11 reps.</li>
                    <li><strong>Opzione 2 (Accetta il Cedimento):</strong> Hai tirato 6 reps alla morte? Quella serie vale oro: <strong>non fare 5 serie extra</strong> né altre serie complete pesanti (farebbero fare solo 3-4 reps mandando l'SNC in tilt).</li>
                    <li><strong>Trucco Avanzato (Drop-Set / Scarico al volo):</strong> Solo se a 6 reps senti ancora un po' di carburante metabolico, scala al volo di un paio di chili e fai subito altre <strong>3–4 reps a bruciare</strong>, poi passa oltre.</li>
                  </ul>
                </div>
              </div>

              {/* Caso B: Chiudi 14 invece di 12 */}
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/25 space-y-2.5">
                <div className="flex items-center justify-between">
                  <strong className="text-emerald-300 text-xs font-black uppercase tracking-wider">
                    Caso B • Carico Leggero (Target 12, Chiudi Agilmente a 14)
                  </strong>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    Mai 4ª Serie Extra
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-black/60 border border-white/10">
                    <strong className="text-red-300 block mb-0.5">Peso Troppo Basso (14–15+ reps):</strong>
                    <p className="text-gray-300">Stanchezza da bruciore (acido lattico) e pompaggio, ma minore tensione meccanica sulle fibre profonde. Aggiungere una serie sarebbe <em>volume spazzatura</em>.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/60 border border-emerald-500/30">
                    <strong className="text-emerald-300 block mb-0.5">Range d'Oro (8–12 / 10–12 reps):</strong>
                    <p className="text-gray-300">Equilibrio perfetto tra tensione meccanica e stress metabolico per spingere la ricomposizione e l'ipertrofia senza sfondare le articolazioni.</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/60 border border-cyan-500/30">
                    <strong className="text-cyan-300 block mb-0.5">Test delle 14 Reps (Progressione):</strong>
                    <p className="text-gray-300">Mantieni sempre le <strong>3 serie</strong>. Se chiudi 14 reps pulite, hai superato quel peso: la seduta dopo aggiungi <strong>+1 kg</strong> (o scatto minimo) per tornare a 10–12 reps!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. LA SVOLTA PER I BICIPITI: SERIE DI AVVICINAMENTO (WARM-UP SETS) */}
            <div className="p-4 rounded-2xl bg-black/60 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    <TrendingDown className="w-4 h-4 text-cyan-400 rotate-180" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    4. La Svolta per i Bicipiti: Le Serie di Avvicinamento (Warm-Up Sets)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                  Zero Blocchi a Freddo
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                I bicipiti sono muscoli piccoli e i tendini vicini a gomito e spalla odiano partire <strong>"a freddo"</strong> con il peso alto: spesso il blocco precoce a 6 ripetizioni avviene proprio perché il sistema neuromuscolare non era pronto. Usare la progressione di carico in avvicinamento sblocca tutte le fibre e protegge i tendini:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-1">
                  <span className="text-[10px] font-black uppercase text-cyan-400">Step 1 • Non Allenante</span>
                  <strong className="text-white block text-xs">Serie 1 (Avvicinamento Leggero):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Carico leggero (da 15–20 reps): fanne <strong>10–12 molto controllate</strong>. Serve solo a oliare gomiti/spalle, mandare sangue al bicipite e insegnare il gesto al cervello.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 space-y-1">
                  <span className="text-[10px] font-black uppercase text-blue-400">Step 2 • Attivazione</span>
                  <strong className="text-white block text-xs">Serie 2 (Avvicinamento Medio):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Alzi il peso portandoti vicino al tuo carico di lavoro ed esegui <strong>6–8 ripetizioni fluide</strong> senza affaticarti. Tendini ora caldi e pronti.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/40 space-y-1">
                  <span className="text-[10px] font-black uppercase text-indigo-300">Step 3 • Ipertrofia Pura</span>
                  <strong className="text-white block text-xs">Serie 3 e 4 (Serie Effettive Pesanti):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Carico vero per arrivare a cedimento nel range <strong>10–12 ripetizioni al 110%</strong>. Con il sistema sbloccato raggiungi il target col massimo pump e forza!
                  </p>
                </div>
              </div>
            </div>

            {/* 5. INTEGRAZIONE CALISTHENICS & RECUPERO ATTIVO BRACCIA NEI GIORNI OFF */}
            <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <HeartPulse className="w-4 h-4 text-emerald-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    5. Calisthenics per le Braccia & Recupero Attivo nei Giorni Off (Mar / Gio)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  Active Recovery (50–60%)
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                L'intuizione di stimolare il flusso sanguigno nelle braccia nei giorni off (martedì o giovedì) senza stravolgere la scheda in palestra si chiama <strong>Active Recovery (Recupero Attivo)</strong> ed è potentissima su muscoli piccoli come bicipiti e tricipiti (che recuperano molto più in fretta di cosce o schiena):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {/* Perché funziona scientificamente */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1.5">
                  <strong className="text-emerald-300 block font-bold">Scienza del Recupero Attivo (Flusso Sanguigno):</strong>
                  <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-1">
                    <li><strong>Richiamo Nutrienti & Ossigeno:</strong> Porta sangue ricco di ossigeno e amminoacidi alle fibre in riparazione, facendo un "lavaggio" delle tossine che riduce i DOMS.</li>
                    <li><strong>Zero Danno Extra:</strong> Fermandoti con ampio margine, non crei nuove micro-lacerazioni; il corpo non spreca calorie preziose a riparare, ma fortifica il tono senza alzare il cortisolo né stancare l'SNC.</li>
                  </ul>
                </div>

                {/* Esercizi a casa */}
                <div className="p-3.5 rounded-xl bg-teal-950/20 border border-teal-500/20 space-y-1.5">
                  <strong className="text-teal-300 block font-bold">Esercizi a Corpo Libero (Forza Relativa & Densità):</strong>
                  <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-1">
                    <li><strong>Tricipiti & Petto:</strong> <em>Dips o Piegamenti a presa stretta / Diamond Push-up</em> (gomiti stretti lungo i fianchi). Catena cinetica chiusa: massimo pompaggio senza stress articolare da carichi esterni.</li>
                    <li><strong>Bicipiti & Schiena:</strong> <em>Trazioni inverse alla sbarra o Australian Pull-up</em> (sotto un tavolo o struttura sicura). Tensione continua micidiale per bicipiti e dorso.</li>
                  </ul>
                </div>
              </div>

              {/* Regola anti-cortocircuito */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-indigo-950/30 to-black/75 border border-emerald-500/40 space-y-1.5 text-xs">
                <strong className="text-emerald-300 block font-black uppercase tracking-wider text-[11px]">
                  ⚠️ La Regola Pratica Anti-Cortocircuito (Budget in Deficit 1.400–1.600 kcal):
                </strong>
                <p className="text-[11px] text-gray-200 leading-relaxed">
                  Il corpo libero nei giorni off deve essere solo una <strong>rifinitura di attivazione e pompaggio</strong>, MAI un secondo allenamento pesante parallelo:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-gray-300">
                    <strong className="text-white">• Volume Basso:</strong> Esegui solo <strong>2 o 3 serie</strong> con tecnica perfetta (niente 10 serie).
                  </div>
                  <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-gray-300">
                    <strong className="text-white">• Intensità 50–60% (No Cedimento):</strong> Lascia sempre <strong>3–4 reps in canna</strong>; il 100% resta esclusiva di Lun/Mer/Ven in palestra!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 11: PAP 2ª SERIE PIÙ LEGGERA & REGOLA 3 SERIE         */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'pap_seconda_serie') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
                <Zap className="w-4 h-4 text-fuchsia-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-fuchsia-400">
                  11# Info • Neurofisiologia Neuromuscolare & Efficienza
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Seconda Serie più "Leggera" (PAP) & Perché NON Tornare su un Muscolo
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30">
              PAP • Viscosità • Cedimento
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl glass-card border-2 border-fuchsia-500/40 space-y-6 bg-gradient-to-br from-fuchsia-950/35 via-purple-950/25 to-black/90 shadow-[0_0_35px_rgba(217,70,239,0.15)]">
            {/* Header Box */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <span className="px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-300 text-xs font-black uppercase tracking-wider border border-fuchsia-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                Neurofisiologia del Workout
              </span>
              <span className="text-xs text-gray-400 font-semibold">
                Finestra Magica 2ª–3ª Serie • Regola 3 Serie Chirurgiche
              </span>
            </div>

            {/* PARTE 1: PERCHÉ LA SECONDA SERIE SEMBRA PIÙ LEGGERA */}
            <div className="p-4 rounded-2xl bg-black/60 border border-fuchsia-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
                    <Activity className="w-4 h-4 text-fuchsia-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    1. Perché la Seconda Serie (o la Terza) Sembra più "Leggera" della Prima
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300 text-[10px] font-bold border border-fuchsia-500/30">
                  3 Cause Scientifiche
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                Arrivi alla seconda serie convinto di fare più fatica e invece bilanciere o manubri sembrano improvvisamente più leggeri, il gesto diventa più fluido e chiudi le ripetizioni più facilmente. Non è impressione né magia: è pura <strong>neurofisiologia del sistema neuromuscolare</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                {/* 1. PAP */}
                <div className="p-3.5 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/25 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-fuchsia-400 block">
                    Motivo 1 • Cervello & Midollo
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-white">
                    Potenziamento Post-Attivazione (PAP)
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il sistema nervoso non è un interruttore on/off e i soli 10 minuti di cardio non bastano a svegliarlo del tutto. Nella <strong>1ª serie</strong> molte fibre profonde a contrazione rapida (le più grandi e forti) restano "addormentate" e poco coordinate.
                  </p>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Subito dopo scatta il <strong>PAP (Post-Activation Potentiation)</strong>: il sistema nervoso ha misurato il carico, ha aperto i canali nel midollo spinale e nella <strong>2ª serie</strong> recluta molte più fibre in modo sincronizzato. Risultato: efficienza neurale massima!
                  </p>
                </div>

                {/* 2. Viscosità */}
                <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/25 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 block">
                    Motivo 2 • Attriti & Calore
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-white">
                    Viscosità Muscolare & Lubrificazione Articolare
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Muscoli, tendini e articolazioni contengono collagene e fluidi che <strong>a freddo</strong> sono più "viscosi", rigidi e creano resistenza meccanica interna.
                  </p>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    La contrazione forzata della 1ª serie genera calore locale, pompa sangue ossigenato, riduce la viscosità tissutale e rilascia <strong>liquido sinoviale</strong> nelle articolazioni: come un motore che entra in temperatura, dalla 2ª serie gli attriti interni crollano e le fibre diventano elastiche.
                  </p>
                </div>

                {/* 3. Pompata */}
                <div className="p-3.5 rounded-xl bg-pink-950/20 border border-pink-500/25 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-pink-400 block">
                    Motivo 3 • Vasodilatazione
                  </span>
                  <h4 className="text-xs sm:text-sm font-black text-white">
                    La "Pompata" (Afflusso di Sangue & Nutrienti)
                  </h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Mentre esegui la prima serie, i vasi sanguigni nei muscoli lavorati si dilatano (<strong>vasodilatazione</strong>) e il sangue ricco di ossigeno e carboidrati viene risucchiato dentro il tessuto creando il celebre <em>pump</em>.
                  </p>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Dalla seconda serie in poi il muscolo è già "pieno", pressurizzato e metabolicamente reattivo, pronto a esprimere forza in maniera brillante.
                  </p>
                </div>
              </div>

              {/* Finestra Magica */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-fuchsia-950/40 to-black/75 border border-fuchsia-500/40 text-xs text-gray-200 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-fuchsia-300 block mb-0.5">⏳ Attenzione: La Finestra "Magica" Dura Poco!</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Questo picco di super-efficienza dura tra la <strong>seconda e la terza serie</strong>: significa che la macchina è entrata in coppia perfetta con tutti i cilindri accesi. Se però continui ad aggiungere serie su serie senza recuperare abbastanza, subentra l'esatto opposto: accumulo di acido lattico, crollo del glicogeno locale e vera fatica muscolare.
                  </p>
                </div>
              </div>
            </div>

            {/* PARTE 2: TORNARE SU UN MUSCOLO A FINE ALLENAMENTO */}
            <div className="p-4 rounded-2xl bg-black/60 border border-orange-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="p-1.5 rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30">
                    <ShieldCheck className="w-4 h-4 text-orange-400" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black text-white">
                    2. Tornare su un Muscolo a Fine Allenamento ("Lo Sento Riposato")?
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-bold border border-orange-500/30">
                  Regola delle 3 Serie
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                Quando hai già chiuso le tue 3 serie pesanti a cedimento (es. sui tricipiti) e dopo altri esercizi pensi <em>"lo sento riposato e ho ancora energia, ne faccio ancora"</em>, la risposta della fisiologia è <strong>NO, non conviene quasi mai farlo</strong> (a meno di protocolli specifici programmati come <em>back-off set</em> o <em>drop set</em> studiati a tavolino). Ecco i 3 motivi chiave:
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-3.5 rounded-xl bg-orange-950/20 border border-orange-500/20 space-y-1">
                  <strong className="text-orange-300 block font-bold">1. Lo Stimolo Ipertrofico Ha un "Dosaggio" Preciso (Volume Effettivo)</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il muscolo cresce per uno stimolo meccanico ad alta intensità che attiva la sintesi proteica, non per farlo soffrire ore. Appena hai dato tutto nelle tue <strong>3 serie pesanti a cedimento</strong>, il muscolo ha già ricevuto il messaggio biologico di crescita: aggiungere altre serie dopo crea solo danno extra e stanchezza sistemica che rubano energie al recupero.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 space-y-1">
                  <strong className="text-red-300 block font-bold">2. L'Illusione del "Riposato" & Il Lavoro dei Muscoli Sinergici</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Se dopo i tricipiti passi ad allenare <strong>petto o spalle</strong> (es. panca piana o spinte), i tricipiti NON si stanno riposando davvero: stanno lavorando duramente come <strong>muscoli sinergici di supporto</strong>. Riattaccarli direttamente a fine seduta perché ti sembrano freschi impedisce loro di ripararsi, portandoti al <strong>sovrallenamento locale</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                  <strong className="text-emerald-300 block font-bold">3. La Regola dell'Efficienza nel Workout (In Deficit 1.400–1.600 kcal)</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il tuo allenamento deve essere chirurgico, rapido e pesantemente efficace: <strong>entri ➔ colpisci il bersaglio con 3 serie pesanti a cedimento ➔ passi all'esercizio successivo ➔ finisci ed esci</strong>. Se a fine esercizio hai ancora energie per farne altri sullo stesso muscolo, significa solo che potevi spingere o caricare di più prima!
                  </p>
                </div>
              </div>

              {/* Verdetto Finale */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-fuchsia-950/45 via-orange-950/35 to-black/80 border border-fuchsia-500/40 text-xs text-gray-200">
                <strong className="text-fuchsia-300 block font-bold mb-1">
                  🔥 Come Incanalare Quell'Energia Extra:
                </strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Invece di aggiungere esercizi a caso a fine seduta perché ti senti fresco, incanala tutta quella cattiveria nel rendere le <strong>3 serie principali così pesanti e tirate</strong> che, alla fine dell'esercizio, alzare le braccia anche solo per bere l'acqua diventi un'impresa. Così si stimola la crescita vera!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="pt-4 text-center">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs transition-all shadow-lg hover:shadow-orange-500/25 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a Tutte le Note</span>
        </button>
      </div>
    </div>
  );
};
