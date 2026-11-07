import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  Info,
  ShieldAlert,
  Flame,
  Moon,
  Sun,
  Coffee,
  Stethoscope,
  HeartPulse,
  TrendingUp,
  TrendingDown,
  Check,
  X,
  ChevronRight
} from 'lucide-react';
import { scrollToTop } from '../../utils/scrollHelper';

interface DiabeteGlicemiaPalestraViewProps {
  onBack: () => void;
}

export const DiabeteGlicemiaPalestraView: React.FC<DiabeteGlicemiaPalestraViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<
    | 'tutta'
    | 'brucia_grassi'
    | 'bustine_spuntino'
    | 'correggi_vs_non'
    | 'guida_iperglicemia'
    | 'variabilita_glicemica'
    | 'palestra'
    | 'notte'
    | 'colazione'
    | 'succo'
    | 'protocollo'
  >('tutta');

  // Scroll solo all'apertura della nota (mount)
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-rose-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>

        <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5">
          {/* Tasto Rapido Nota 2 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'brucia_grassi' ? 'tutta' : 'brucia_grassi')}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'brucia_grassi'
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-black border-amber-300 shadow-neon'
                : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/30'
            }`}
          >
            <Zap className="w-3 h-3" />
            <span>{activeTab === 'brucia_grassi' ? 'Chiudi' : 'Nota 2'}</span>
          </button>

          {/* Tasto Rapido Nota 3 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'bustine_spuntino' ? 'tutta' : 'bustine_spuntino')}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'bustine_spuntino'
                ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-black border-emerald-300 shadow-neon'
                : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border-emerald-500/30'
            }`}
          >
            <Coffee className="w-3 h-3" />
            <span>{activeTab === 'bustine_spuntino' ? 'Chiudi' : 'Nota 3: Bustine vs Spuntino'}</span>
          </button>

          {/* Tasto Rapido Nota 4 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'correggi_vs_non' ? 'tutta' : 'correggi_vs_non')}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'correggi_vs_non'
                ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-black border-rose-300 shadow-neon'
                : 'bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border-rose-500/30'
            }`}
          >
            <HeartPulse className="w-3 h-3" />
            <span>{activeTab === 'correggi_vs_non' ? 'Chiudi' : 'Nota 4: Correggi 50-60'}</span>
          </button>

          {/* Tasto Rapido Nota 5 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'guida_iperglicemia' ? 'tutta' : 'guida_iperglicemia')}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'guida_iperglicemia'
                ? 'bg-gradient-to-r from-purple-400 to-indigo-400 text-black border-purple-300 shadow-neon'
                : 'bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border-purple-500/30'
            }`}
          >
            <TrendingUp className="w-3 h-3" />
            <span>{activeTab === 'guida_iperglicemia' ? 'Chiudi' : 'Nota 5: Guida & Iper >180'}</span>
          </button>

          {/* Tasto Rapido Nota 6 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'variabilita_glicemica' ? 'tutta' : 'variabilita_glicemica')}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'variabilita_glicemica'
                ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-black border-teal-300 shadow-neon'
                : 'bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 border-teal-500/30'
            }`}
          >
            <Activity className="w-3 h-3" />
            <span>{activeTab === 'variabilita_glicemica' ? 'Chiudi' : 'Nota 6: Variabilità & Insulina'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border-2 border-rose-500/40 relative overflow-hidden space-y-3 bg-gradient-to-br from-rose-950/40 via-black/85 to-red-950/30 shadow-[0_0_35px_rgba(244,63,94,0.2)]">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-black uppercase tracking-widest border border-rose-500/40 flex items-center gap-1">
            <HeartPulse className="w-3 h-3 text-rose-400" />
            Guida Fisiologica & Metabolica
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Allenamento Serale & Notte</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
          <span>Diabete, glicemia e palestra</span>
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Analisi completa e scientifica su cosa accade nel corpo dopo la palestra serale: assorbimento del glicogeno, effetto "spugna" per 12-24 ore, distinzione tra Fenomeno dell'Alba ed Effetto Somogyi (il crollo notturno con rimbalzo a 120 e 180), l'errore del succo di frutta e le colazioni strategiche per stabilizzare i livelli.
        </p>

        {/* Griglia Card Rapide per le 4 Note Speciali */}
        <div className="pt-1 space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Card Nota 2: Brucia-Grassi (80-90 mg/dL) */}
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'brucia_grassi' ? 'tutta' : 'brucia_grassi')}
              className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'brucia_grassi'
                  ? 'bg-gradient-to-r from-amber-950/90 via-orange-950/70 to-black/90 border-amber-400 shadow-neon ring-2 ring-amber-400/30'
                  : 'bg-gradient-to-r from-amber-950/40 via-orange-950/30 to-black/70 border-amber-500/40 hover:border-amber-400'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                      {activeTab === 'brucia_grassi' ? '✓ Attiva' : 'Nota 2'}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-extrabold border border-amber-500/40">
                      80–90 mg/dL
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-white group-hover:text-amber-200 transition-colors">
                    Brucia-Grassi & Bustine
                  </h4>
                  <p className="text-[10px] text-gray-400">Lipolisi e correzione sicura</p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 text-[11px] font-black px-2.5 py-1.5 rounded-xl shrink-0 transition-all ${
                activeTab === 'brucia_grassi'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : 'bg-amber-400 text-black shadow-neon'
              }`}>
                <span>{activeTab === 'brucia_grassi' ? 'Chiudi' : 'Apri'}</span>
                {activeTab === 'brucia_grassi' ? <X className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              </div>
            </button>

            {/* Card Nota 3: Solo Bustine vs Spuntino Cibo Vero */}
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'bustine_spuntino' ? 'tutta' : 'bustine_spuntino')}
              className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'bustine_spuntino'
                  ? 'bg-gradient-to-r from-emerald-950/90 via-teal-950/70 to-black/90 border-emerald-400 shadow-neon ring-2 ring-emerald-400/30'
                  : 'bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-black/70 border-emerald-500/40 hover:border-emerald-400'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <Coffee className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                      {activeTab === 'bustine_spuntino' ? '✓ Attiva' : 'Nota 3'}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-extrabold border border-emerald-500/40">
                      GLUT-4 Spugna
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-white group-hover:text-emerald-200 transition-colors">
                    Bustine vs Cibo Vero
                  </h4>
                  <p className="text-[10px] text-gray-400">Effetto razzo vs tenuta stabile</p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 text-[11px] font-black px-2.5 py-1.5 rounded-xl shrink-0 transition-all ${
                activeTab === 'bustine_spuntino'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : 'bg-emerald-400 text-black shadow-neon'
              }`}>
                <span>{activeTab === 'bustine_spuntino' ? 'Chiudi' : 'Apri'}</span>
                {activeTab === 'bustine_spuntino' ? <X className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Card Nota 4: Biochimica Pura: Correggi Subito vs NON Correggi a 50-60 */}
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'correggi_vs_non' ? 'tutta' : 'correggi_vs_non')}
              className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'correggi_vs_non'
                  ? 'bg-gradient-to-r from-rose-950/90 via-pink-950/70 to-black/90 border-rose-400 shadow-neon ring-2 ring-rose-400/30'
                  : 'bg-gradient-to-r from-rose-950/40 via-pink-950/30 to-black/70 border-rose-500/40 hover:border-rose-400'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <HeartPulse className="w-4 h-4 text-rose-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 block">
                      {activeTab === 'correggi_vs_non' ? '✓ Attiva' : 'Nota 4'}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-extrabold border border-rose-500/40">
                      50–60 mg/dL
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-white group-hover:text-rose-200 transition-colors">
                    Correggi vs NON Correggi
                  </h4>
                  <p className="text-[10px] text-gray-400">Cortisolo & Ciclo di Krebs</p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 text-[11px] font-black px-2.5 py-1.5 rounded-xl shrink-0 transition-all ${
                activeTab === 'correggi_vs_non'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : 'bg-rose-400 text-black shadow-neon'
              }`}>
                <span>{activeTab === 'correggi_vs_non' ? 'Chiudi' : 'Apri'}</span>
                {activeTab === 'correggi_vs_non' ? <X className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              </div>
            </button>

            {/* Card Nota 5: Guida Definitiva: Glicemia, Insulina & Iperglicemia >180 */}
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'guida_iperglicemia' ? 'tutta' : 'guida_iperglicemia')}
              className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'guida_iperglicemia'
                  ? 'bg-gradient-to-r from-purple-950/90 via-indigo-950/70 to-black/90 border-purple-400 shadow-neon ring-2 ring-purple-400/30'
                  : 'bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-black/70 border-purple-500/40 hover:border-purple-400'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 group-hover:scale-105 transition-transform shrink-0">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 block">
                      {activeTab === 'guida_iperglicemia' ? '✓ Attiva' : 'Nota 5'}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-extrabold border border-purple-500/40">
                      Iper &gt;180 mg/dL
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-white group-hover:text-purple-200 transition-colors">
                    Guida Definitiva & Iper
                  </h4>
                  <p className="text-[10px] text-gray-400">Soglia renale & Tabella range</p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 text-[11px] font-black px-2.5 py-1.5 rounded-xl shrink-0 transition-all ${
                activeTab === 'guida_iperglicemia'
                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                  : 'bg-purple-400 text-black shadow-neon'
              }`}>
                <span>{activeTab === 'guida_iperglicemia' ? 'Chiudi' : 'Apri'}</span>
                {activeTab === 'guida_iperglicemia' ? <X className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              </div>
            </button>
          </div>

          {/* Card Nota 6: Variabilità Glicemica, Insulina e Dimagrimento */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'variabilita_glicemica' ? 'tutta' : 'variabilita_glicemica')}
            className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
              activeTab === 'variabilita_glicemica'
                ? 'bg-gradient-to-r from-teal-950/90 via-cyan-950/70 to-black/90 border-teal-400 shadow-neon ring-2 ring-teal-400/30'
                : 'bg-gradient-to-r from-teal-950/40 via-cyan-950/30 to-black/70 border-teal-500/40 hover:border-teal-400'
            }`}
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 group-hover:scale-105 transition-transform shrink-0">
                <Activity className="w-4 h-4 text-teal-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-teal-400 block">
                    {activeTab === 'variabilita_glicemica' ? '✓ Attiva' : 'Nota 6'}
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 font-extrabold border border-teal-500/40">
                    Insulina &amp; Lipolisi
                  </span>
                </div>
                <h4 className="text-xs font-black text-white group-hover:text-teal-200 transition-colors">
                  Variabilità Glicemica, Insulina e Dimagrimento
                </h4>
                <p className="text-[10px] text-gray-400">Digestione, sensibilità muscolare, stress e acidi grassi liberi</p>
              </div>
            </div>
            <div className={`flex items-center space-x-1 text-[11px] font-black px-2.5 py-1.5 rounded-xl shrink-0 transition-all ${
              activeTab === 'variabilita_glicemica'
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : 'bg-teal-400 text-black shadow-neon'
            }`}>
              <span>{activeTab === 'variabilita_glicemica' ? 'Chiudi' : 'Apri'}</span>
              {activeTab === 'variabilita_glicemica' ? <X className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
          </button>
        </div>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('tutta')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutta'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutta la Guida
          </button>

          {/* TAB NOTA 2 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'brucia_grassi' ? 'tutta' : 'brucia_grassi')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'brucia_grassi'
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-black shadow-neon font-black ring-2 ring-amber-300'
                : 'bg-amber-500/20 text-amber-300 hover:text-white border border-amber-500/40'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Nota 2: Brucia-Grassi (80-90)</span>
          </button>

          {/* TAB NOTA 3 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'bustine_spuntino' ? 'tutta' : 'bustine_spuntino')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'bustine_spuntino'
                ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-black shadow-neon font-black ring-2 ring-emerald-300'
                : 'bg-emerald-500/20 text-emerald-300 hover:text-white border border-emerald-500/40'
            }`}
          >
            <Coffee className="w-3.5 h-3.5 text-emerald-400" />
            <span>Nota 3: Bustine vs Spuntino</span>
          </button>

          {/* TAB NOTA 4 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'correggi_vs_non' ? 'tutta' : 'correggi_vs_non')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'correggi_vs_non'
                ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-black shadow-neon font-black ring-2 ring-rose-300'
                : 'bg-rose-500/20 text-rose-300 hover:text-white border border-rose-500/40'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
            <span>Nota 4: Correggi 50-60</span>
          </button>

          {/* TAB NOTA 5 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'guida_iperglicemia' ? 'tutta' : 'guida_iperglicemia')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'guida_iperglicemia'
                ? 'bg-gradient-to-r from-purple-400 to-indigo-400 text-black shadow-neon font-black ring-2 ring-purple-300'
                : 'bg-purple-500/20 text-purple-300 hover:text-white border border-purple-500/40'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
            <span>Nota 5: Iperglicemia &gt;180</span>
          </button>

          {/* TAB NOTA 6 */}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === 'variabilita_glicemica' ? 'tutta' : 'variabilita_glicemica')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'variabilita_glicemica'
                ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-black shadow-neon font-black ring-2 ring-teal-300'
                : 'bg-teal-500/20 text-teal-300 hover:text-white border border-teal-500/40'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-teal-400" />
            <span>Nota 6: Variabilità &amp; Dimagrimento</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('palestra')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'palestra'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            1. Palestra la Sera
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notte')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'notte'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            2. Somogyi vs Alba
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('colazione')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'colazione'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            3. Salto Colazione (180 mg/dL)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('succo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'succo'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" />
            4. Succo vs Colazione Protetta
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('protocollo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'protocollo'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            5. Protocollo & Medico
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* SECONDA NOTA: GLICEMIA, PALESTRA E BRUCIA-GRASSI               */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'brucia_grassi') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Zap className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Seconda Nota Specifica • Metabolismo Post-Workout
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  📝 Glicemia, Palestra e Brucia-Grassi
                </h2>
              </div>
            </div>
            {activeTab === 'brucia_grassi' ? (
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Torna alla Guida Completa</span>
              </button>
            ) : (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Nuova Aggiunta
              </span>
            )}
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-amber-400/50 space-y-4 bg-gradient-to-br from-amber-950/30 via-black/85 to-orange-950/30 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
            {/* Box 1: Cosa succede dopo la palestra (Valori 80–90 mg/dL) */}
            <div className="p-4 rounded-2xl bg-black/70 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-xl bg-amber-400 text-black flex items-center justify-center font-black text-xs">
                    1
                  </span>
                  <h3 className="text-sm font-black text-white">
                    Cosa succede dopo la palestra (Valori 80–90 mg/dL)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  Segno Ottimale
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Effetto Spugna (12–24h)
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Per <strong>12–24 ore dopo l'allenamento</strong>, i muscoli assorbono il glucosio dal sangue per ricaricare le riserve di glicogeno.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                    <Flame className="w-3.5 h-3.5 text-emerald-400" />
                    Stato Brucia-Grassi (Lipolisi)
                  </div>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Vedere la glicemia attorno a <strong>80–90 mg/dL dopo l'attività fisica è un ottimo segno</strong>: indica che il corpo ha esaurito lo zucchero in eccesso e sta attingendo al tessuto adiposo (lipolisi) per produrre energia.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Correggere con 1–2 bustine di zucchero */}
            <div className="p-4 rounded-2xl bg-black/70 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-xl bg-orange-400 text-black flex items-center justify-center font-black text-xs">
                    2
                  </span>
                  <h3 className="text-sm font-black text-white">
                    Correggere con 1–2 bustine di zucchero
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                  Sicurezza Glicemica
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white text-xs">Non blocca il dimagrimento</h5>
                    <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                      Prendere <strong>5–10 grammi di zucchero</strong> quando la glicemia scende <strong>non annulla la perdita di grasso né ti fa ingrassare</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white text-xs">Destinazione immediata</h5>
                    <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                      Quel poco zucchero entra nei muscoli "asciutti" per proteggerti dall'ipoglicemia.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                  <Flame className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-white text-xs">Bilancio calorico</h5>
                    <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                      La perdita di grasso dipende dal <strong>deficit calorico complessivo della giornata</strong>, non dalle poche calorie usate per la sicurezza della glicemia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hint pratico */}
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2 text-xs text-amber-200">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed">
                <strong>Regola Pratica:</strong> Se la glicemia cala verso o sotto gli 80 mg/dL e senti calo di forze, assumere 1–2 bustine di zucchero è la scelta corretta per la tua incolumità e protegge la massa magra muscolare senza compromettere la lipolisi e la definizione corporea.
              </p>
            </div>

            {activeTab === 'brucia_grassi' && (
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('tutta')}
                  className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Torna alla Guida Completa</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* NOTA 3: SOLO BUSTINE DI ZUCCHERO VS SPUNTINO CON CIBO VERO     */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'bustine_spuntino') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Coffee className="w-4 h-4 text-emerald-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Nota 3 • Gestione Ipoglicemia & Ricarica Glicogeno
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  🍬 Solo Bustine di Zucchero vs Spuntino con Cibo Vero
                </h2>
              </div>
            </div>
            {activeTab === 'bustine_spuntino' ? (
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Chiudi</span>
              </button>
            ) : (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Fisiologia Dinamica
              </span>
            )}
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-emerald-500/30 space-y-4 bg-black/75">
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              Nel diabete e nell'allenamento con i pesi, correggere un calo glicemico non significa scegliere "a caso" tra una bustina di zucchero o un panino. Ciascuna opzione risponde a una legge biochimica precisa: l'<strong>emergenza acuta</strong> richiede solo zuccheri rapidi, mentre la <strong>tenuta nel tempo</strong> necessita di macronutrienti strutturati.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
              {/* Blocco 1: Ipoglicemia Acuta <70 */}
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2.5">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center font-black text-xs shrink-0">1</span>
                  <h3 className="font-bold text-white text-xs">Ipoglicemia Immediata (&lt;70 mg/dL): Solo Zucchero Semplice</h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Quando il sensore o i sintomi scendono sotto i 70 mg/dL, il sistema nervoso centrale entra in deficit critico (neuroglicopenia). In questo momento serve <strong>UNICAMENTE zucchero semplice ad altissimo indice glicemico</strong> (1–2 bustine di saccarosio o glucosio sciolto in acqua).
                </p>
                <div className="p-2.5 rounded-xl bg-black/60 border border-rose-500/20 text-[10px] text-rose-200">
                  <strong>Perché NO cibo solido in emergenza?</strong> Grassi, fibre e proteine rallentano drasticamente lo svuotamento gastrico. Mangiare biscotti, cioccolata o frutta secca ritarda l'assorbimento del glucosio di 20–30 minuti, lasciando il cervello esposto al rischio di svenimento.
                </div>
              </div>

              {/* Blocco 2: L'Effetto Razzo e Rimbalzo Yo-Yo */}
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2.5">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-xs shrink-0">2</span>
                  <h3 className="font-bold text-white text-xs">Il Limite del Solo Zucchero: Effetto Razzo &amp; Yo-Yo</h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Lo zucchero semplice entra nel sangue come un razzo: fa salire rapidamente il valore, ma si esaurisce in appena <strong>20–30 minuti</strong>. Se ti limiti a prendere solo zucchero, i muscoli svuotati dalla palestra lo assorbono all'istante, causando poco dopo un <strong>nuovo crollo a picco</strong>.
                </p>
                <div className="p-2.5 rounded-xl bg-black/60 border border-amber-500/20 text-[10px] text-amber-200">
                  <strong>La Trappola Yo-Yo:</strong> Continuare a prendere bustine di zucchero per ore porta a continue montagne russe glicemiche, fame compulsiva e sbalzi ormonali dannosi.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
              {/* Blocco 3: Quando Usare Cibo Vero */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2.5">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-xs shrink-0">3</span>
                  <h3 className="font-bold text-white text-xs">Spuntino con Cibo Vero: Il "Pavimento" Stabile</h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Appena la glicemia è risalita nella fascia di sicurezza (<strong>&gt;80–90 mg/dL</strong>), per consolidare il risultato occorre uno spuntino con cibo reale: <strong>carboidrati complessi a rilascio lento combinati con proteine o grassi buoni</strong> (es. fette biscottate integrali o pane di segale con parmigiano, bresaola o burro d'arachidi).
                </p>
                <div className="p-2.5 rounded-xl bg-black/60 border border-emerald-500/20 text-[10px] text-emerald-200">
                  <strong>Rilascio a Lunga Durata:</strong> I macronutrienti strutturati rilasciano glucosio in modo fluido e costante per <strong>2–4 ore</strong>, evitando ricadute notturne e proteggendo la sazietà.
                </div>
              </div>

              {/* Blocco 4: I Muscoli come Spugne GLUT-4 */}
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2.5">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-xs shrink-0">4</span>
                  <h3 className="font-bold text-white text-xs">Muscoli Post-Palestra: La Spugna dei Canali GLUT-4</h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Durante le contrazioni coi pesi, le riserve di glicogeno muscolare vengono consumate. Per <strong>12–24 ore</strong> le cellule muscolari espongono i trasportatori <strong>GLUT-4</strong> alla membrana e assorbono glucosio anche <em>senza bisogno di insulina</em>.
                </p>
                <div className="p-2.5 rounded-xl bg-black/60 border border-cyan-500/20 text-[10px] text-cyan-200">
                  <strong>Destinazione Muscolo, Non Grasso:</strong> Lo zucchero e i carboidrati assunti in questa finestra vanno direttamente a ricaricare i serbatoi muscolari (aumentando pienezza e tonicità), senza alcuna possibilità di finire nelle riserve di grasso.
                </div>
              </div>
            </div>

            {/* Riepilogo Operativo Regola Aurea */}
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2.5 text-xs text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-bold text-white block">Regola Sequenziale Operativa:</span>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  <strong>Fase 1 (0-15 min):</strong> Glicemia sotto 70 &rarr; 1–2 bustine di zucchero solo per uscire dall'emergenza. <br />
                  <strong>Fase 2 (dopo 15-20 min):</strong> Glicemia risalita &gt;85–90 &rarr; Piccolo spuntino bilanciato (pane/fette integrali + proteine) per creare il pavimento di tenuta fino al pasto o al sonno.
                </p>
              </div>
            </div>

            {activeTab === 'bustine_spuntino' && (
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('tutta')}
                  className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Torna alla Guida Completa</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* NOTA 4: BIOCHIMICA PURA: CORREGGI SUBITO VS NON CORREGGI 50-60 */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'correggi_vs_non') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <HeartPulse className="w-4 h-4 text-rose-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                  Nota 4 • Biochimica Clinica &amp; Metabolismo
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  🔬 Biochimica Pura: Correggi Subito vs NON Correggi a 50–60 mg/dL
                </h2>
              </div>
            </div>
            {activeTab === 'correggi_vs_non' ? (
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Chiudi</span>
              </button>
            ) : (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30">
                Catabolismo vs Protezione
              </span>
            )}
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-rose-500/30 space-y-4 bg-black/75">
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              Esiste un pericoloso mito secondo cui lasciare la glicemia scendere a 50–60 mg/dL senza intervenire costringerebbe il corpo a "bruciare solo grassi". La biochimica umana dimostra l'esatto contrario: <strong>non correggere distrugge la massa muscolare e blocca l'ossidazione dei lipidi</strong>, mentre correggere tempestivamente massimizza il dimagrimento reale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* CASO 1: CORREGGI SUBITO */}
              <div className="p-4 rounded-2xl bg-emerald-950/30 border-2 border-emerald-500/40 space-y-3">
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h3 className="font-black text-white text-xs">CASO 1: Correggi Subito (1–2 Bustine)</h3>
                  </div>
                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    Scelta Vincente
                  </span>
                </div>

                <div className="space-y-2 text-[11px] text-gray-300 leading-relaxed">
                  <div className="p-2.5 rounded-xl bg-black/50 border border-emerald-500/20">
                    <strong className="text-emerald-300">1. Spegne l'Allarme Ormonale:</strong>
                    <p className="text-gray-300 mt-0.5">
                      Il glucosio rapido entra in circolo in 3-5 minuti, sfama l'ipotalamo e interrompe la scarica massiccia di <strong>adrenalina e cortisolo</strong>.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/50 border border-emerald-500/20">
                    <strong className="text-emerald-300">2. Protezione Muscolare Totale:</strong>
                    <p className="text-gray-300 mt-0.5">
                      Senza cortisolo alto, il corpo NON attiva la proteolisi d'emergenza. I tuoi muscoli e gli amminoacidi strutturali rimangono intatti e protetti.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/50 border border-emerald-500/20">
                    <strong className="text-emerald-300">3. Ciclo di Krebs Fluido (Brucia-Grassi Attivo):</strong>
                    <p className="text-gray-300 mt-0.5">
                      <em>"I grassi bruciano al fuoco dei carboidrati"</em>. La beta-ossidazione dei grassi produce Acetil-CoA, che per entrare nel ciclo di Krebs ha bisogno dell'<strong>ossaloacetato</strong> (derivato dal piruvato/glucosio). Fornire quel minimo di glucosio fa girare il ciclo e permette di <strong>ossidare i grassi in modo pulito</strong>!
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                    <strong>Esito Finale a Lungo Termine:</strong> Metabolismo alto, tiroide protetta, zero rimbalzi incontrollati e <strong>MASSIMA perdita di grasso su addome e viso</strong>.
                  </div>
                </div>
              </div>

              {/* CASO 2: NON CORREGGI */}
              <div className="p-4 rounded-2xl bg-rose-950/30 border-2 border-rose-500/40 space-y-3">
                <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <h3 className="font-black text-white text-xs">CASO 2: NON Correggi a 50–60 mg/dL</h3>
                  </div>
                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                    Grave Errore
                  </span>
                </div>

                <div className="space-y-2 text-[11px] text-gray-300 leading-relaxed">
                  <div className="p-2.5 rounded-xl bg-black/50 border border-rose-500/20">
                    <strong className="text-rose-300">1. Cannibalizzazione Muscolare (Gluconeogenesi):</strong>
                    <p className="text-gray-300 mt-0.5">
                      Il cervello non può attendere: il cortisolo alle stelle ordina al fegato di creare glucosio vitale estraendo <strong>alanina e glutammina dalle fibre muscolari</strong>. Stai letteralmente <strong>bruciando i tuoi muscoli</strong>!
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/50 border border-rose-500/20">
                    <strong className="text-rose-300">2. Stallo del Ciclo di Krebs &amp; Chetoni Acidi:</strong>
                    <p className="text-gray-300 mt-0.5">
                      Senza glucosio, l'ossaloacetato si esaurisce. L'Acetil-CoA derivato dalla lipolisi non può entrare nel ciclo di Krebs e viene deviato verso la formazione di <strong>corpi chetonici acidi</strong>, causando nausea, prostrazione e stanchezza cronica.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/50 border border-rose-500/20">
                    <strong className="text-rose-300">3. Iperglicemia Reattiva Feroce (180–220 mg/dL):</strong>
                    <p className="text-gray-300 mt-0.5">
                      Spinto da adrenalina e glucagone, il fegato scarica d'un colpo tutto il glicogeno epatico rimasto (Effetto Somogyi violento), provocando un rimbalzo a oltre 180–220 mg/dL con insulino-resistenza temporanea.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-200">
                    <strong>Esito Finale a Lungo Termine:</strong> Perdita di muscolo prezioso, metabolismo rallentato, glicemia impazzita e <strong>blocco del dimagrimento</strong>.
                  </div>
                </div>
              </div>
            </div>

            {/* Verdetto Scientifico */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/15 space-y-1 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                Verdetto Scientifico Inconfutabile:
              </span>
              <p className="text-[11px] text-gray-200 leading-relaxed">
                Non avere timore delle 1–2 bustine di zucchero (appena 20–40 calorie): <strong>correggere immediatamente a 50–60 mg/dL ti fa perdere PIÙ grasso a lungo termine</strong> perché protegge la massa magra muscolare (il vero motore che consuma calorie a riposo) e fa funzionare il ciclo di Krebs al 100%.
              </p>
            </div>

            {activeTab === 'correggi_vs_non' && (
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('tutta')}
                  className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-300 hover:to-pink-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Torna alla Guida Completa</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* NOTA 5: GUIDA DEFINITIVA: GLICEMIA, INSULINA & IPERGLICEMIA >180 */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'guida_iperglicemia') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <TrendingUp className="w-4 h-4 text-purple-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  Nota 5 • Guida Fisiologica Completa
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  📊 Glicemia, Palestra, Insulina &amp; Iperglicemia (&gt;180 mg/dL)
                </h2>
              </div>
            </div>
            {activeTab === 'guida_iperglicemia' ? (
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Chiudi</span>
              </button>
            ) : (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
                Soglia Renale &amp; Tabella
              </span>
            )}
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-purple-500/30 space-y-4 bg-black/75">
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              Questa guida definitiva chiarisce in maniera rigorosa la differenza tra un calo da insulina vs contrazione, la canalizzazione muscolare, il riposo notturno e le conseguenze biologiche di quando la glicemia supera la <strong>soglia renale di 180 mg/dL</strong>.
            </p>

            {/* Blocco 1: Riconoscere la Causa del Calo */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <h3 className="font-bold text-white text-xs flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-purple-400" />
                1. Riconoscere la Causa del Calo: Insulina Eccessiva vs Movimento Muscolare
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-1.5">
                  <span className="text-[10px] font-black uppercase text-purple-300 block">
                    Calo da Eccesso di Insulina (Bolus Attivo a Bordo)
                  </span>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Sintomi acuti improvvisi: tremito marcato, sudorazione fredda, ansia viscerale e palpitazioni. In presenza di insulina alta nel sangue, la lipasi ormono-sensibile (HSL) viene <strong>completamente bloccata</strong>: in questo stato il grasso <strong>NON si brucia</strong> perché la porta degli adipociti è sigillata.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5">
                  <span className="text-[10px] font-black uppercase text-cyan-300 block">
                    Calo Fisiologico da Esercizio (GLUT-4 &amp; AMPK)
                  </span>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Discesa fluida e graduale: sensazione di lavoro muscolare ma mente vigile. L'insulina in circolo è bassa, il glucosio entra nei muscoli in via insulino-indipendente e la lipolisi è <strong>attiva e altamente efficiente</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Blocco 2: Cosa succede quando la glicemia sale >180 mg/dL */}
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-3">
              <h3 className="font-bold text-white text-xs flex items-center gap-1.5 text-rose-300">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                2. Cosa Accade Quando la Glicemia SALE Oltre la Soglia Renale (&gt;180 mg/dL)
              </h3>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                I reni filtrano continuamente il sangue e riassorbono il 100% del glucosio fino a una concentrazione di circa <strong>180 mg/dL</strong> (capacità massima dei trasportatori SGLT2). Quando si supera questa soglia, si innesca una cascata patologica:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-black/60 border border-rose-500/20 space-y-1">
                  <span className="text-[10px] font-black uppercase text-rose-300 block">1. Glicosuria</span>
                  <p className="text-[10px] text-gray-300 leading-tight">
                    I tubuli renali non riescono a trattenere il glucosio in eccesso, che inizia a traboccare nelle urine.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-rose-500/20 space-y-1">
                  <span className="text-[10px] font-black uppercase text-rose-300 block">2. Poliuria (Osmotica)</span>
                  <p className="text-[10px] text-gray-300 leading-tight">
                    Lo zucchero nelle urine attira per forza osmotica litri d'acqua e minerali (potassio, sodio, magnesio), disidratandoti.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-rose-500/20 space-y-1">
                  <span className="text-[10px] font-black uppercase text-rose-300 block">3. Polidipsia</span>
                  <p className="text-[10px] text-gray-300 leading-tight">
                    Sete continua e bocca secca: l'ipotalamo tenta disperatamente di ripristinare il volume ematico perso.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-rose-500/20 space-y-1">
                  <span className="text-[10px] font-black uppercase text-rose-300 block">4. Fame Cellulare</span>
                  <p className="text-[10px] text-gray-300 leading-tight">
                    Stanchezza estrema: il sangue è pieno di zucchero, ma cellule e muscoli non riescono ad usarlo e "muoiono di fame".
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-[11px] text-gray-300 space-y-1">
                <strong className="text-white">Impatto su Muscoli e Grassi a Glicemie Alte:</strong>
                <p>
                  I muscoli perdono acqua intracellulare, appaiono svuotati, deboli e soggetti a crampi. Se l'iperglicemia è dovuta a carenza insulinica grave, la lipolisi impazzisce rilasciando acidi grassi tossici nel fegato con rischio di acidosi, mentre le proteine muscolari vengono degradate.
                </p>
              </div>
            </div>

            {/* Blocco 3: Tabella Sinottica Completa dei Range Glicemici */}
            <div className="space-y-2">
              <h3 className="font-bold text-white text-xs flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-cyan-400" />
                3. Tabella Sinottica: Range Glicemici, Stato Metabolico &amp; Azione
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-white/15 bg-black/60">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-white/10 text-[10px] font-black uppercase tracking-wider text-gray-300 border-b border-white/15">
                      <th className="p-3">Range Glicemia</th>
                      <th className="p-3">Stato Fisiologico</th>
                      <th className="p-3">Destino Muscoli &amp; Grassi</th>
                      <th className="p-3">Azione Corretta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-[11px]">
                    <tr className="bg-rose-950/20">
                      <td className="p-3 font-black text-rose-300 whitespace-nowrap">&lt; 70 mg/dL</td>
                      <td className="p-3 text-gray-300">
                        Ipoglicemia Acuta • Scarica di cortisolo &amp; adrenalina
                      </td>
                      <td className="p-3 text-gray-300">
                        Rischio cannibalizzazione muscolare (gluconeogenesi) • Lipolisi bloccata se c'è bolo attivo
                      </td>
                      <td className="p-3 font-bold text-white">
                        1–2 bustine di zucchero immediato (Regola del 15)
                      </td>
                    </tr>
                    <tr className="bg-emerald-950/30">
                      <td className="p-3 font-black text-emerald-300 whitespace-nowrap">80 – 130 mg/dL</td>
                      <td className="p-3 text-emerald-100 font-medium">
                        ★ ZONA OTTIMALE (Golden Zone) • Massima sensibilità
                      </td>
                      <td className="p-3 text-emerald-100">
                        I muscoli assorbono glucosio per glicogeno • Ciclo di Krebs fluido • <strong>Massima ossidazione dei grassi</strong>
                      </td>
                      <td className="p-3 font-bold text-emerald-300">
                        Spuntino bilanciato a rilascio lento prima di dormire o proseguire
                      </td>
                    </tr>
                    <tr className="bg-amber-950/20">
                      <td className="p-3 font-black text-amber-300 whitespace-nowrap">135 – 179 mg/dL</td>
                      <td className="p-3 text-gray-300">
                        Zona di Transizione / Allerta • Lieve resistenza
                      </td>
                      <td className="p-3 text-gray-300">
                        Ossidazione grassi rallentata • Prestazione fisica ancora accettabile ma non ottimale
                      </td>
                      <td className="p-3 font-bold text-amber-300">
                        Idratarsi bene, evitare zuccheri semplici, valutare camminata leggera
                      </td>
                    </tr>
                    <tr className="bg-purple-950/30">
                      <td className="p-3 font-black text-purple-300 whitespace-nowrap">&gt; 180 mg/dL</td>
                      <td className="p-3 text-gray-300">
                        Soglia Renale Superata • Glicosuria &amp; Diuresi Osmotica
                      </td>
                      <td className="p-3 text-gray-300">
                        Disidratazione muscolare profonda • Nebbia mentale • Muscoli "svuotati"
                      </td>
                      <td className="p-3 font-bold text-purple-300">
                        Bere molta acqua con elettroliti, eventuale correzione insulinica prescritta
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {activeTab === 'guida_iperglicemia' && (
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('tutta')}
                  className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-300 hover:to-indigo-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Torna alla Guida Completa</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* NOTA 6: VARIABILITÀ GLICEMICA, INSULINA E DIMAGRIMENTO        */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'variabilita_glicemica') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Activity className="w-4 h-4 text-teal-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400">
                  Nota 6 • Fisiologia Metabolica
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  📝 Nota Scientifica: Variabilità Glicemica, Insulina e Dimagrimento
                </h2>
              </div>
            </div>
            {activeTab === 'variabilita_glicemica' ? (
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Chiudi</span>
              </button>
            ) : (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-teal-500/15 text-teal-300 border border-teal-500/30">
                4 Pilastri Fisiologici
              </span>
            )}
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-teal-500/30 space-y-4 bg-black/75 shadow-[0_0_25px_rgba(20,184,166,0.15)]">
            <p className="text-xs text-gray-200 leading-relaxed font-medium bg-teal-950/30 p-3.5 rounded-2xl border border-teal-500/30">
              Spiegazione scientifica dettagliata e completa, strutturata punto per punto, che chiarisce esattamente perché <strong className="text-teal-300">lo stesso pasto a volte richiede dosi di insulina diverse</strong> e come tutto questo si collega al <strong className="text-teal-300">dimagrimento e all'uso dei grassi (lipolisi)</strong>.
            </p>

            {/* 1. La velocità di digestione e il carico glicemico nascosto */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center space-x-2 text-white font-bold text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-black text-xs shrink-0">
                  1
                </span>
                <span className="text-teal-300 uppercase tracking-wider font-extrabold">
                  La velocità di digestione e il carico glicemico nascosto
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed pl-8 font-medium">
                Il cibo non viene processato dall'organismo sempre alla stessa velocità.
              </p>
              <div className="space-y-2 text-xs pl-8 pt-1">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-white block font-bold text-[11px]">
                    • Il fattore cottura e composizione:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Anche mangiando lo stesso identico piatto (es. pasta e pane in mensa), variazioni minime nella cottura (pasta più o meno al dente), la presenza di condimenti diversi o l'abbinamento con fibre e grassi modificano i tempi di svuotamento gastrico.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-white block font-bold text-[11px]">
                    • L'impatto glicemico:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Se un alimento viene digerito più lentamente, il glucosio entra nel sangue in modo graduale. Se invece la digestione è più rapida (es. carboidrati più cotti o semplici), il picco glicemico arriva prima e con più forza, rendendo la stessa dose di insulina meno efficiente nel coprirlo.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. L'attività precedente e la sensibilità muscolare */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center space-x-2 text-white font-bold text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-xs shrink-0">
                  2
                </span>
                <span className="text-cyan-300 uppercase tracking-wider font-extrabold">
                  L'attività precedente e la sensibilità muscolare
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed pl-8 font-medium">
                I muscoli scheletrici sono i principali "consumatori" di glucosio del corpo e agiscono come spugne per l'insulina.
              </p>
              <div className="space-y-2 text-xs pl-8 pt-1">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-cyan-300 block font-bold text-[11px]">
                    • Effetto allenamento:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Se nei giorni precedenti ti sei allenato o hai camminato molto, i tuoi muscoli hanno svuotato le scorte di glicogeno e aumentano drasticamente la loro sensibilità all'insulina (il recettore cellulare risponde molto meglio, quindi serve meno insulina).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-amber-300 block font-bold text-[11px]">
                    • Effetto riposo/recupero:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Nei giorni in cui l'attività fisica è stata inferiore o i muscoli sono in fase di pieno recupero/riparazione, la sensibilità temporanea all'insulina si abbassa. A parità di cibo ingerito, le cellule richiedono più ormone per ottenere lo stesso risultato.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Fattori ormonali e stress */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center space-x-2 text-white font-bold text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center font-black text-xs shrink-0">
                  3
                </span>
                <span className="text-rose-300 uppercase tracking-wider font-extrabold">
                  Fattori ormonali e stress
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed pl-8 font-medium">
                Il sistema endocrino risponde a qualsiasi stimolo esterno o interno, alterando la glicemia indipendentemente da ciò che si è mangiato.
              </p>
              <div className="p-3 rounded-xl bg-black/60 border border-rose-500/30 text-xs ml-8 space-y-1">
                <strong className="text-rose-300 block font-bold text-[11px]">
                  • Ormoni dello stress (cortisolo e adrenalina):
                </strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Una notte di sonno non ottimale, lo stress scolastico o le normali tensioni quotidiane provocano il rilascio di cortisolo e adrenalina. Questi ormoni agiscono come "antagonisti" dell'insulina: ordinano al fegato di rilasciare glucosio nel sangue e riducono l'efficacia del bolo insulinico.
                </p>
              </div>
            </div>

            {/* 4. Il deficit calorico e l'uso dei grassi (Lipolisi) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-950/40 via-black/85 to-orange-950/30 border-2 border-amber-400/50 space-y-3 shadow-neon">
              <div className="flex items-center space-x-2 text-white font-bold text-xs sm:text-sm">
                <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-xs shrink-0">
                  4
                </span>
                <span className="text-amber-300 uppercase tracking-wider font-extrabold">
                  Il deficit calorico e l'uso dei grassi (Lipolisi)
                </span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed pl-8 font-medium">
                Questo è il punto chiave quando si punta al dimagrimento e alla ricomposizione corporea:
              </p>

              <div className="space-y-2.5 text-xs pl-8">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-amber-200 block font-bold text-[11px]">
                    • Adattamento al deficit:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Quando introduci meno energia di quella che consumi (mangiando in modo controllato o riducendo le porzioni), il corpo attiva la lipolisi, cioè la scissione dei tessuti adiposi per ricavare energia sotto forma di acidi grassi liberi.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-amber-500/30 space-y-1">
                  <strong className="text-amber-300 block font-bold text-[11px]">
                    • L'interferenza metabolica (Resistenza transitoria):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    La scienza ha dimostrato che quando la concentrazione di acidi grassi liberi nel sangue aumenta perché il corpo sta bruciando attivamente i grassi di riserva, si verifica una temporanea riduzione della sensibilità periferica all'insulina. In parole semplici: mentre il corpo brucia grassi in modo efficace per dimagrire, le cellule diventano leggermente più "sorde" all'insulina.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-teal-950/50 to-emerald-950/40 border border-teal-400/40 space-y-1">
                  <strong className="text-teal-300 block font-bold text-[11px]">
                    • La conseguenza pratica:
                  </strong>
                  <p className="text-[11px] text-gray-200 leading-relaxed">
                    Questo spiega scientificamente perché, man mano che il corpo si adatta al deficit calorico e mobilita i grassi, le dosi di insulina a cui eri abituato potrebbero temporaneamente "non bastare più", richiedendo un ricalcolo e una gestione attenta in accordo con il medico.
                  </p>
                </div>
              </div>
            </div>

            {activeTab === 'variabilita_glicemica' && (
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('tutta')}
                  className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Torna alla Guida Completa</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 1: COSA ACCADE CON LA PALESTRA LA SERA                 */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'palestra') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <Flame className="w-4 h-4 text-rose-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                  Fisiologia dell'Esercizio • Sezione 1
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  1. Allenamento Serale: I 2 Meccanismi Chiave
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30">
              Muscoli & Glucosio
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-rose-500/30 space-y-4 bg-black/75">
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              Quando ti alleni in palestra, soprattutto in orario serale, il tuo corpo avvia due processi fisiologici primari che continuano ad agire per tutta la notte e nelle prime ore del giorno dopo:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center font-black text-xs shrink-0">1</span>
                  <h3 className="font-bold text-white text-xs">Ripristino Riserve di Glicogeno</h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Durante gli esercizi con i pesi e l'alta intensità, i muscoli bruciano il loro carburante primario: il <strong>glicogeno</strong> (lo zucchero immagazzinato nelle fibre). A fine sessione, i muscoli non si fermano: continuano ad assorbire glucosio dal sangue per ore ininterrottamente per ricaricare i serbatoi, <strong>tirando giù la glicemia</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-xs shrink-0">2</span>
                  <h3 className="font-bold text-white text-xs">Effetto "Spugna" (Sensibilità all'Insulina 12-24h)</h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  L'attività fisica rende le cellule muscolari straordinariamente sensibili all'insulina, capaci di captare glucosio anche in via <em>insulino-indipendente</em>. Questa condizione di "spugna metabolica" si protrae per <strong>12–24 ore post-workout</strong>, moltiplicando il rischio di <strong>ipoglicemie notturne</strong> se la terapia o l'alimentazione non vengono calibrate.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 2: I FENOMENI NOTTURNI (ALBA vs EFFETTO SOMOGYI)       */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'notte') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Moon className="w-4 h-4 text-purple-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  La Notte • Sezione 2
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  2. Iperglicemia al Risveglio: Fenomeno dell'Alba vs Effetto Somogyi
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
              Notte & Risveglio
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-purple-500/40 space-y-4 bg-gradient-to-br from-purple-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(168,85,247,0.15)]">
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              Svegliarsi con la glicemia alta dopo una seduta in palestra è frequente. Tuttavia, può accadere per due motivi diametralmente opposti ed è fondamentale distinguerli:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Fenomeno dell'Alba */}
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    Fenomeno dell'Alba
                  </span>
                  <span className="text-[10px] font-bold text-gray-400">Fisiologico</span>
                </div>
                <h4 className="text-xs font-black text-white">La Sveglia Naturale degli Ormoni</h4>
                <ul className="space-y-1.5 text-[11px] text-gray-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Orario:</strong> Tra le 4:00 e le 8:00 del mattino mentre si dorme.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Cosa accade:</strong> Il cervello rilascia cortisolo, GH (ormone della crescita) e adrenalina per predisporre alla veglia.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Ruolo del fegato:</strong> Gli ormoni stimolano il fegato a rilasciare glucosio nel sangue per dare energia al risveglio.</span>
                  </li>
                </ul>
              </div>

              {/* Effetto Somogyi */}
              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-red-400" />
                    Effetto Somogyi (Il Trabocchetto)
                  </span>
                  <span className="text-[10px] font-bold text-red-300 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">Rimbalzo</span>
                </div>
                <h4 className="text-xs font-black text-white">Il Rimbalzo di Difesa Post-Palestra</h4>
                <ul className="space-y-1.5 text-[11px] text-gray-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Crollo invisibile alle 2:00-3:00:</strong> I muscoli svuotati dalla palestra continuano a succhiare glucosio; si scende a 60–70 mg/dL nel sonno.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Allarme d'emergenza:</strong> Il corpo avverte il pericolo cerebrale e scatena una tempesta di glucagone e adrenalina.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Rimbalzo epatico:</strong> Il fegato scarica violentemente tutte le sue riserve per salvarti: ti svegli a 120+ solo a causa del crollo precedente!</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Test delle 3:00 di notte */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
              <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                Come Capire Qual è il Tuo Caso? (Il Test delle 3:00 di Notte)
              </h4>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Mettendo una sveglia alle 3:00 di notte o verificando lo storico sul sensore continuo (Dexcom / FreeStyle Libre):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <strong className="text-amber-300 block">Se alle 3:00 è NORMALE o ALTA (100–130) e sale ancora:</strong>
                  <span className="text-gray-300">Si tratta del <strong>Fenomeno dell'Alba</strong> puro.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <strong className="text-red-300 block">Se alle 3:00 è BASSA (&lt; 70 mg/dL) e poi la trovi alta:</strong>
                  <span className="text-gray-300">È l'<strong>Effetto Somogyi</strong> (rimbalzo post-ipoglicemia da palestra serale).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 3: PERCHÉ SALE A 180 SE SALTI LA COLAZIONE?           */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'colazione') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <TrendingUp className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Il Paradosso del Mattino • Sezione 3
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  3. Da 120 a 180 mg/dL: Perché Saltare la Colazione Peggiora Tutto?
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              Digiuno & Fegato
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-amber-500/40 space-y-4 bg-gradient-to-br from-amber-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(245,158,11,0.15)]">
            <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-1 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Il Paradosso Metabolico
              </span>
              <p className="text-[11px] text-gray-200 leading-relaxed">
                Può sembrare inspiegabile: non hai mangiato nulla dalla sera prima, al risveglio eri a 120 mg/dL, esci di casa a digiuno e a metà mattina ti ritrovi a 180 mg/dL.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <strong className="text-amber-400 font-bold block">1. Il fegato continua a pompare glucosio:</strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Il corpo non sa che sei a digiuno per scelta. Vedendo che non entra cibo, il fegato percepisce una condizione di carenza e, alimentato dal picco mattutino di cortisolo, continua a immettere autonomamente zucchero nel flusso sanguigno per "salvaguardarti".
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <strong className="text-cyan-300 font-bold block">2. Manca il segnale metabolico di "stop":</strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Consumare un pasto bilanciato al mattino segnala al fegato che i nutrienti sono arrivati, <strong>spegnendo la gluconeogenesi epatica</strong> (la produzione autonoma di zucchero) e consentendo ai valori di stabilizzarsi.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-300 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>La catena esatta:</strong> Palestra serale ➔ Crollo a 60-70 alle 3:00 (Somogyi) ➔ Risveglio a 120 (rimbalzo) ➔ Salto colazione o digiuno ➔ Picco a 180 a metà mattina.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 4: L'ERRORE DEL SUCCO DI FRUTTA & COLAZIONE STRATEGICA */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'succo') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <Coffee className="w-4 h-4 text-rose-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                  Nutrizione del Mattino • Sezione 4
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  4. Il Succo alla Pesca: Perché Schizza a 180 e Cosa Mangiare
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30">
              Scelte al Risveglio
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-rose-500/40 space-y-4 bg-gradient-to-br from-rose-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(244,63,94,0.15)]">
            {/* Box Errore Succo */}
            <div className="p-4 rounded-2xl bg-red-950/30 border border-red-500/30 space-y-2 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <X className="w-3.5 h-3.5 text-red-400" />
                Bere Solo un Succo di Frutta (Brick alla Pesca): L'Errore N°1
              </span>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                I succhi di frutta confezionati nei brick sono <strong>zuccheri semplici liquidi ad assorbimento ultra-rapido</strong>, totalmente privi di fibre:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                  <strong className="text-red-300 block">Assorbimento Istantaneo:</strong>
                  <span className="text-gray-300">Lo stomaco non deve fare alcuno sforzo digestivo; gli zuccheri entrano nel circolo in pochi minuti.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                  <strong className="text-red-300 block">Doppio Segnale al Fegato:</strong>
                  <span className="text-gray-300">Il fegato stava già rilasciando glucosio (alba + rimbalzo); l'iniezione liquida fa impennare la curva sopra 180.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                  <strong className="text-red-300 block">Assenza Totale di "Freni":</strong>
                  <span className="text-gray-300">Mancano fibre, proteine e grassi sani che rallentano l'indice glicemico del pasto.</span>
                </div>
              </div>
            </div>

            {/* Alternativa Veloce in 30 Secondi */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-2.5 text-xs">
              <div className="flex items-center space-x-2">
                <span className="p-1 rounded-lg bg-emerald-500/20 text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                </span>
                <h4 className="font-bold text-white text-xs">
                  La Colazione Protetta Pronta in 30 Secondi (Con i "Freni" Glicemici)
                </h4>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Se la mattina hai fretta, abbina <strong>proteine + grassi buoni + carboidrati a lento rilascio</strong>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/20 space-y-1">
                  <strong className="text-emerald-300 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Opzione A (Ultra-Veloce al Cucchiaio):
                  </strong>
                  <p className="text-gray-300">
                    • 1 Yogurt greco al naturale (o latte scremato / vegetale senza zuccheri aggiunti)<br />
                    • 3–4 noci o mandorle (grassi sani che frenano la digestione)
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/20 space-y-1">
                  <strong className="text-emerald-300 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Opzione B (Croccante & Sostanziosa):
                  </strong>
                  <p className="text-gray-300">
                    • 2 Fette biscottate integrali con un velo di burro d'arachidi 100%<br />
                    • Tazza di tè verde o caffè non zuccherato
                  </p>
                </div>
              </div>
              <p className="text-[10px] text-emerald-300 font-semibold bg-black/40 p-2 rounded-lg border border-emerald-500/20">
                ✨ Risultato: spegni la produzione epatica di zucchero senza creare picchi e mantieni la glicemia stabile fino a pranzo.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 5: PROTOCOLLO PRATICO & DIALOGO COL DIABETOLOGO       */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'protocollo') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Stethoscope className="w-4 h-4 text-cyan-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  Sicurezza Clinica • Sezione 5
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  5. Protocollo Pratico & Cosa Mostrare al Medico
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Checklist Clinica
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-cyan-400/40 space-y-4 bg-gradient-to-br from-cyan-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(6,182,212,0.15)]">
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-2xl bg-black/60 border border-white/10 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">1</span>
                <div>
                  <h5 className="font-bold text-white text-xs">Spuntino Pre-Nanna nei Giorni di Palestra Serale</h5>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Se eviti che la glicemia crolli a 60–70 mg/dL alle 3:00, il fegato non scatenerà il rimbalzo d'emergenza. Valuta con il medico uno spuntino pre-sonno a base di carboidrati complessi a rilascio lento e una quota proteica (es. fetta biscottata integrale con parmigiano o yogurt greco).
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-black/60 border border-white/10 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">2</span>
                <div>
                  <h5 className="font-bold text-white text-xs">Zuccheri Rapidi Sempre sul Comodino</h5>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Tieni sempre a portata di mano zuccheri a rapido assorbimento (bustine di zucchero, succo di frutta d'emergenza, pastiglie di glucosio) vicino al letto, pronti in caso di sintomi o allarmi di ipoglicemia notturna.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-black/60 border border-white/10 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">3</span>
                <div>
                  <h5 className="font-bold text-white text-xs">I Valori Chiave da Mostrare al Diabetologo</h5>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Segna su un diario o esporta dal sensore questi dati specifici:
                  </p>
                  <div className="p-2.5 rounded-xl bg-black/80 border border-rose-500/30 text-[11px] text-rose-200 font-mono mt-1 space-y-0.5">
                    <div>• <strong>03:00 AM:</strong> 60–70 mg/dL (Ipoglicemia post-allenamento)</div>
                    <div>• <strong>07:30 AM:</strong> ~120 mg/dL (Risveglio / Rimbalzo Somogyi)</div>
                    <div>• <strong>10:30 AM:</strong> ~180 mg/dL (A digiuno prolungato o post-succo)</div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Questi 3 numeri sono preziosissimi per permettere al diabetologo di calibrare perfettamente l'insulina basale o la terapia dei giorni di allenamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-xs text-cyan-200 leading-relaxed space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" /> Nota di Responsabilità Medica
              </span>
              <p className="text-[11px] text-gray-200">
                Questa scheda spiega i meccanismi fisiologici ed è una guida personale di riferimento. Qualsiasi variazione nei dosaggi dell'insulina basale, dell'insulina rapida o della terapia orale va sempre concordata e validata con il proprio diabetologo o medico curante.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="pt-4 text-center">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-rose-500 hover:bg-rose-400 text-white font-extrabold text-xs transition-all shadow-lg hover:shadow-rose-500/25 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a Tutte le Note</span>
        </button>
      </div>
    </div>
  );
};
