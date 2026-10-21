import React, { useState } from 'react';
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
  LineChart
} from 'lucide-react';
import { scrollToTop } from '../../utils/scrollHelper';

interface PalestraPerditaGrassoViewProps {
  onBack: () => void;
}

export const PalestraPerditaGrassoView: React.FC<PalestraPerditaGrassoViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutte' | 'palestra' | 'deficit' | 'biologia' | 'sessione' | 'nutrizione' | 'informazioni' | 'informazioni2' | 'quadro_completo' | 'proteine_scienza' | 'fabbisogno_tid' | 'fabbisogno_tid_2' | 'grassi_scienza'>('tutte');

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
            onClick={() => setActiveTab('informazioni')}
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
            onClick={() => setActiveTab('informazioni2')}
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
            onClick={() => setActiveTab('quadro_completo')}
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
            onClick={() => setActiveTab('proteine_scienza')}
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
                onClick={() => setActiveTab('fabbisogno_tid')}
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
                onClick={() => setActiveTab('fabbisogno_tid_2')}
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

          {/* 6# Informazioni: Grassi Alimentari, Digestione & Metabolismo 24h */}
          <div
            onClick={() => setActiveTab('grassi_scienza')}
            className="p-3 rounded-2xl bg-gradient-to-r from-yellow-950/50 via-amber-950/40 to-black/70 border border-yellow-500/40 hover:border-yellow-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-yellow-500/20 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-2.5">
              <span className="p-2 rounded-xl bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 group-hover:bg-yellow-500 group-hover:text-black transition-all shrink-0">
                <Droplet className="w-4 h-4 text-yellow-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 6# Info: I Grassi
                </span>
                <h3 className="text-xs font-extrabold text-white group-hover:text-yellow-200 transition-colors line-clamp-1">
                  I Grassi, la Carne, Digestione & Notte 24h
                </h3>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 group-hover:bg-yellow-500 group-hover:text-black transition-all shrink-0">
              Apri ➔
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('tutte')}
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
            onClick={() => setActiveTab('palestra')}
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
            onClick={() => setActiveTab('deficit')}
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
            onClick={() => setActiveTab('biologia')}
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
            onClick={() => setActiveTab('sessione')}
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
            onClick={() => setActiveTab('nutrizione')}
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
            onClick={() => setActiveTab('informazioni')}
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
            onClick={() => setActiveTab('informazioni2')}
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
            onClick={() => setActiveTab('quadro_completo')}
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
            onClick={() => setActiveTab('proteine_scienza')}
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
              onClick={() => setActiveTab('fabbisogno_tid')}
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
              onClick={() => setActiveTab('fabbisogno_tid_2')}
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

          {/* 12. 6# Info: I Grassi Alimentari & Metabolismo 24h */}
          <button
            type="button"
            onClick={() => setActiveTab('grassi_scienza')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'grassi_scienza'
                ? 'bg-yellow-500 text-black shadow-md shadow-yellow-500/30 font-extrabold'
                : 'bg-yellow-500/10 text-yellow-300 hover:text-white border border-yellow-500/30'
            }`}
          >
            <Droplet className="w-3.5 h-3.5 text-yellow-400" />
            12. 6# Info: Grassi & Carne
          </button>
        </div>
      </div>

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
                  onClick={() => setActiveTab('fabbisogno_tid_2')}
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
                  onClick={() => setActiveTab('fabbisogno_tid')}
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

      {/* Bottom Back Button */}
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
