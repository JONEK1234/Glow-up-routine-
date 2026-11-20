import React, { useState, useEffect, useRef } from 'react';
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
import { scrollToTop, scrollToElement } from '../../utils/scrollHelper';

interface DiabeteGlicemiaPalestraViewProps {
  onBack: () => void;
  initialTab?: string;
}

export const DiabeteGlicemiaPalestraView: React.FC<DiabeteGlicemiaPalestraViewProps> = ({ onBack, initialTab }) => {
  type DiabeteTab =
    | 'tutta'
    | 'brucia_grassi'
    | 'bustine_spuntino'
    | 'correggi_vs_non'
    | 'guida_iperglicemia'
    | 'variabilita_glicemica'
    | 'onda_lunga'
    | 'frullato_bolo'
    | 'mattina_digiuno'
    | 'proteine_finestra'
    | 'dati_reali_19nov'
    | 'calcolo_insulina'
    | 'calcoli_importanti'
    | 'palestra'
    | 'notte'
    | 'colazione'
    | 'succo'
    | 'protocollo';

  const [activeTab, setActiveTab] = useState<DiabeteTab>((initialTab as DiabeteTab) || 'tutta');
  const noteContentRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (tab: DiabeteTab, toggleIfActive = false) => {
    const nextTab = toggleIfActive && activeTab === tab ? 'tutta' : tab;
    setActiveTab(nextTab);
    if (nextTab !== 'tutta') {
      scrollToElement(noteContentRef.current, 68);
    }
  };

  // Scroll all'apertura (o al tab specifico se aperto dalla ricerca)
  useEffect(() => {
    if (initialTab && initialTab !== 'tutta') {
      setActiveTab(initialTab as DiabeteTab);
      setTimeout(() => scrollToElement(noteContentRef.current, 68), 80);
    } else {
      scrollToTop();
    }
  }, [initialTab]);

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
          {/* Tasto Rapido ★ IMPORTANTE: Calcolo Insulina */}
          <button
            type="button"
            onClick={() => handleSelectTab('calcolo_insulina', true)}
            className={`flex items-center space-x-1 py-1.5 px-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'calcolo_insulina'
                ? 'bg-gradient-to-r from-yellow-300 via-amber-400 to-cyan-300 text-black border-yellow-200 shadow-neon'
                : 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 border-yellow-400/50'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>{activeTab === 'calcolo_insulina' ? 'Chiudi' : '★ Calcolo Insulina'}</span>
          </button>

          {/* Tasto Rapido ⚡ Solo Calcoli Importanti */}
          <button
            type="button"
            onClick={() => handleSelectTab('calcoli_importanti', true)}
            className={`flex items-center space-x-1 py-1.5 px-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'calcoli_importanti'
                ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black border-cyan-300 shadow-neon'
                : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-400/50'
            }`}
          >
            <Zap className="w-3 h-3" />
            <span>{activeTab === 'calcoli_importanti' ? 'Chiudi' : 'Solo Calcoli'}</span>
          </button>

          {/* Tasto Rapido Nota 2 */}
          <button
            type="button"
            onClick={() => handleSelectTab('brucia_grassi', true)}
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
            onClick={() => handleSelectTab('bustine_spuntino', true)}
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
            onClick={() => handleSelectTab('correggi_vs_non', true)}
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
            onClick={() => handleSelectTab('guida_iperglicemia', true)}
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
            onClick={() => handleSelectTab('variabilita_glicemica', true)}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'variabilita_glicemica'
                ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-black border-teal-300 shadow-neon'
                : 'bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 border-teal-500/30'
            }`}
          >
            <Activity className="w-3 h-3" />
            <span>{activeTab === 'variabilita_glicemica' ? 'Chiudi' : 'Nota 6: Variabilità & Insulina'}</span>
          </button>

          {/* Tasto Rapido Nota 7 */}
          <button
            type="button"
            onClick={() => handleSelectTab('onda_lunga', true)}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'onda_lunga'
                ? 'bg-gradient-to-r from-orange-400 to-amber-400 text-black border-orange-300 shadow-neon'
                : 'bg-orange-500/15 hover:bg-orange-500/25 text-orange-300 border-orange-500/30'
            }`}
          >
            <Clock className="w-3 h-3" />
            <span>{activeTab === 'onda_lunga' ? 'Chiudi' : 'Nota 7: Onda Lunga 3h'}</span>
          </button>

          {/* Tasto Rapido Nota 8 */}
          <button
            type="button"
            onClick={() => handleSelectTab('frullato_bolo', true)}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'frullato_bolo'
                ? 'bg-gradient-to-r from-sky-400 to-cyan-400 text-black border-sky-300 shadow-neon'
                : 'bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border-sky-500/30'
            }`}
          >
            <Coffee className="w-3 h-3" />
            <span>{activeTab === 'frullato_bolo' ? 'Chiudi' : 'Nota 8: Frullato & 7,5U'}</span>
          </button>

          {/* Tasto Rapido Nota 9 */}
          <button
            type="button"
            onClick={() => handleSelectTab('mattina_digiuno', true)}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'mattina_digiuno'
                ? 'bg-gradient-to-r from-lime-400 to-emerald-400 text-black border-lime-300 shadow-neon'
                : 'bg-lime-500/15 hover:bg-lime-500/25 text-lime-300 border-lime-500/30'
            }`}
          >
            <Sun className="w-3 h-3" />
            <span>{activeTab === 'mattina_digiuno' ? 'Chiudi' : 'Nota 9: Digiuno ~120'}</span>
          </button>

          {/* Tasto Rapido Nota 10 */}
          <button
            type="button"
            onClick={() => handleSelectTab('proteine_finestra', true)}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'proteine_finestra'
                ? 'bg-gradient-to-r from-indigo-400 to-purple-400 text-black border-indigo-300 shadow-neon'
                : 'bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border-indigo-500/30'
            }`}
          >
            <Flame className="w-3 h-3" />
            <span>{activeTab === 'proteine_finestra' ? 'Chiudi' : 'Nota 10: Proteine & Finestra'}</span>
          </button>

          {/* Tasto Rapido Nota 11 */}
          <button
            type="button"
            onClick={() => handleSelectTab('dati_reali_19nov', true)}
            className={`flex items-center space-x-1 py-1.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 cursor-pointer shrink-0 ${
              activeTab === 'dati_reali_19nov'
                ? 'bg-gradient-to-r from-rose-400 to-amber-300 text-black border-rose-300 shadow-neon'
                : 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border-rose-400/50'
            }`}
          >
            <AlertTriangle className="w-3 h-3" />
            <span>{activeTab === 'dati_reali_19nov' ? 'Chiudi' : 'Nota 11: Dati 19/11 (Stacking)'}</span>
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

        {/* Griglia Card Rapide per le Note Speciali */}
        <div className="pt-1 space-y-2.5">
          {/* BOX IMPORTANTE IN PRIMO PIANO: CALCOLO INSULINA + TASTO SOLO CALCOLI */}
          <div
            className={`p-3.5 rounded-2xl border-2 transition-all space-y-2.5 ${
              activeTab === 'calcolo_insulina' || activeTab === 'calcoli_importanti'
                ? 'bg-gradient-to-r from-yellow-950/80 via-cyan-950/60 to-black/90 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.28)]'
                : 'bg-gradient-to-r from-yellow-950/40 via-amber-950/30 to-cyan-950/30 border-yellow-400/60 hover:border-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.15)]'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div
                onClick={() => handleSelectTab('calcolo_insulina', true)}
                className="flex items-center space-x-2.5 cursor-pointer group flex-1"
              >
                <div className="p-2.5 rounded-xl bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 group-hover:scale-105 transition-transform shrink-0">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-yellow-400 text-black">
                      ★ IMPORTANTE
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-extrabold border border-cyan-500/40">
                      Microinfusore • 40–45 U/die
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-yellow-200 transition-colors mt-0.5">
                    Calcolo Insulina: Rapporto I:C (1:11–12), Regola 500 &amp; 1800 (40–45)
                  </h4>
                  <p className="text-[10px] text-gray-300">
                    Formula carboidrati, fattore di correzione reale dai tuoi grafici e variazioni palestra/cordon bleu
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleSelectTab('calcoli_importanti', true)}
                  className={`px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 border ${
                    activeTab === 'calcoli_importanti'
                      ? 'bg-cyan-400 text-black border-cyan-200 shadow-neon ring-2 ring-cyan-300/50'
                      : 'bg-cyan-500/20 hover:bg-cyan-400 hover:text-black text-cyan-300 border-cyan-400/50'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{activeTab === 'calcoli_importanti' ? 'Chiudi Solo Calcoli' : 'Solo Calcoli'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSelectTab('calcolo_insulina', true)}
                  className={`px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer flex items-center gap-1 ${
                    activeTab === 'calcolo_insulina'
                      ? 'bg-red-500/25 text-red-200 border border-red-400/40'
                      : 'bg-yellow-400 hover:bg-yellow-300 text-black shadow-neon'
                  }`}
                >
                  <span>{activeTab === 'calcolo_insulina' ? 'Chiudi' : 'Apri Nota'}</span>
                  {activeTab === 'calcolo_insulina' ? <X className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Card Nota 2: Brucia-Grassi (80-90 mg/dL) */}
            <button
              type="button"
              onClick={() => handleSelectTab('brucia_grassi', true)}
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
              onClick={() => handleSelectTab('bustine_spuntino', true)}
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
              onClick={() => handleSelectTab('correggi_vs_non', true)}
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
              onClick={() => handleSelectTab('guida_iperglicemia', true)}
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
            onClick={() => handleSelectTab('variabilita_glicemica', true)}
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

          {/* Card Nota 7: Picco Ritardato "Onda Lunga" (Grassi, Impanati & Cordon Bleu) */}
          <button
            type="button"
            onClick={() => handleSelectTab('onda_lunga', true)}
            className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
              activeTab === 'onda_lunga'
                ? 'bg-gradient-to-r from-orange-950/90 via-amber-950/70 to-black/90 border-orange-400 shadow-neon ring-2 ring-orange-400/30'
                : 'bg-gradient-to-r from-orange-950/40 via-amber-950/30 to-black/70 border-orange-500/40 hover:border-orange-400'
            }`}
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-orange-500/20 text-orange-300 border border-orange-500/30 group-hover:scale-105 transition-transform shrink-0">
                <Clock className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 block">
                    {activeTab === 'onda_lunga' ? '✓ Attiva' : 'Nota 7'}
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 font-extrabold border border-orange-500/40">
                    Picco 3h (280 mg/dL)
                  </span>
                </div>
                <h4 className="text-xs font-black text-white group-hover:text-orange-200 transition-colors">
                  Picco Ritardato "Onda Lunga": Cordon Bleu, Patate &amp; Impanati
                </h4>
                <p className="text-[10px] text-gray-400">Controllo spia a 3 ore, errore 10 UI subito, micro-correzione &amp; bolo sdoppiato</p>
              </div>
            </div>
            <div className={`flex items-center space-x-1 text-[11px] font-black px-2.5 py-1.5 rounded-xl shrink-0 transition-all ${
              activeTab === 'onda_lunga'
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : 'bg-orange-400 text-black shadow-neon'
            }`}>
              <span>{activeTab === 'onda_lunga' ? 'Chiudi' : 'Apri'}</span>
              {activeTab === 'onda_lunga' ? <X className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </div>
          </button>

          {/* Griglia Note 8, 9, 10, 11 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            <button
              type="button"
              onClick={() => handleSelectTab('frullato_bolo', true)}
              className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'frullato_bolo'
                  ? 'bg-gradient-to-r from-sky-950/90 to-black/90 border-sky-400 shadow-neon'
                  : 'bg-gradient-to-r from-sky-950/40 to-black/70 border-sky-500/40 hover:border-sky-400'
              }`}
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
                  {activeTab === 'frullato_bolo' ? '✓ Attiva' : 'Nota 8 · 40–41g CHO'}
                </span>
                <h4 className="text-xs font-black text-white">Frullato &amp; Bolo 7,5 U</h4>
                <p className="text-[10px] text-gray-400">I:C mattutino &amp; curve</p>
              </div>
              <ChevronRight className="w-4 h-4 text-sky-300 shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => handleSelectTab('mattina_digiuno', true)}
              className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'mattina_digiuno'
                  ? 'bg-gradient-to-r from-lime-950/90 to-black/90 border-lime-400 shadow-neon'
                  : 'bg-gradient-to-r from-lime-950/40 to-black/70 border-lime-500/40 hover:border-lime-400'
              }`}
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-lime-400 block">
                  {activeTab === 'mattina_digiuno' ? '✓ Attiva' : 'Nota 9 · ~120 mg/dL'}
                </span>
                <h4 className="text-xs font-black text-white">Mattina a Digiuno</h4>
                <p className="text-[10px] text-gray-400">Dawn effect &amp; grassi</p>
              </div>
              <ChevronRight className="w-4 h-4 text-lime-300 shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => handleSelectTab('proteine_finestra', true)}
              className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'proteine_finestra'
                  ? 'bg-gradient-to-r from-indigo-950/90 to-black/90 border-indigo-400 shadow-neon'
                  : 'bg-gradient-to-r from-indigo-950/40 to-black/70 border-indigo-500/40 hover:border-indigo-400'
              }`}
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 block">
                  {activeTab === 'proteine_finestra' ? '✓ Attiva' : 'Nota 10 · Mer/Gio/Ven'}
                </span>
                <h4 className="text-xs font-black text-white">Proteine &amp; Finestra</h4>
                <p className="text-[10px] text-gray-400">Timing, MPS 48h &amp; mTOR</p>
              </div>
              <ChevronRight className="w-4 h-4 text-indigo-300 shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => handleSelectTab('dati_reali_19nov', true)}
              className={`w-full p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group shadow-sm active:scale-[0.99] text-left ${
                activeTab === 'dati_reali_19nov'
                  ? 'bg-gradient-to-r from-rose-950/90 to-amber-950/70 border-rose-400 shadow-neon'
                  : 'bg-gradient-to-r from-rose-950/40 to-amber-950/30 border-rose-400/50 hover:border-rose-300'
              }`}
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-300 block">
                  {activeTab === 'dati_reali_19nov' ? '✓ Attiva' : 'Nota 11 · 19 Nov'}
                </span>
                <h4 className="text-xs font-black text-white">Dati Reali &amp; Stacking</h4>
                <p className="text-[10px] text-gray-400">6U+3U &amp; Mensa 16,5U</p>
              </div>
              <ChevronRight className="w-4 h-4 text-rose-300 shrink-0" />
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => handleSelectTab('tutta')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutta'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutta la Guida
          </button>

          {/* TAB IMPORTANTE: CALCOLO INSULINA & SOLO CALCOLI */}
          <button
            type="button"
            onClick={() => handleSelectTab('calcolo_insulina', true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'calcolo_insulina'
                ? 'bg-gradient-to-r from-yellow-300 to-amber-400 text-black shadow-neon ring-2 ring-yellow-300'
                : 'bg-yellow-500/20 text-yellow-300 hover:text-white border border-yellow-400/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>★ IMPORTANTE: Calcolo Insulina</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('calcoli_importanti', true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'calcoli_importanti'
                ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-black shadow-neon ring-2 ring-cyan-300'
                : 'bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-400/50'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>⚡ Solo Calcoli Importanti</span>
          </button>

          {/* TAB NOTA 2 */}
          <button
            type="button"
            onClick={() => handleSelectTab('brucia_grassi', true)}
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
            onClick={() => handleSelectTab('bustine_spuntino', true)}
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
            onClick={() => handleSelectTab('correggi_vs_non', true)}
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
            onClick={() => handleSelectTab('guida_iperglicemia', true)}
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
            onClick={() => handleSelectTab('variabilita_glicemica', true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'variabilita_glicemica'
                ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-black shadow-neon font-black ring-2 ring-teal-300'
                : 'bg-teal-500/20 text-teal-300 hover:text-white border border-teal-500/40'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-teal-400" />
            <span>Nota 6: Variabilità &amp; Dimagrimento</span>
          </button>

          {/* TAB NOTA 7 */}
          <button
            type="button"
            onClick={() => handleSelectTab('onda_lunga', true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'onda_lunga'
                ? 'bg-gradient-to-r from-orange-400 to-amber-400 text-black shadow-neon font-black ring-2 ring-orange-300'
                : 'bg-orange-500/20 text-orange-300 hover:text-white border border-orange-500/40'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>Nota 7: Onda Lunga (3 Ore)</span>
          </button>

          {/* TAB NOTA 8 */}
          <button
            type="button"
            onClick={() => handleSelectTab('frullato_bolo', true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'frullato_bolo'
                ? 'bg-gradient-to-r from-sky-400 to-cyan-400 text-black shadow-neon font-black ring-2 ring-sky-300'
                : 'bg-sky-500/20 text-sky-300 hover:text-white border border-sky-500/40'
            }`}
          >
            <Coffee className="w-3.5 h-3.5 text-sky-400" />
            <span>Nota 8: Frullato &amp; 7,5 U</span>
          </button>

          {/* TAB NOTA 9 */}
          <button
            type="button"
            onClick={() => handleSelectTab('mattina_digiuno', true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'mattina_digiuno'
                ? 'bg-gradient-to-r from-lime-400 to-emerald-400 text-black shadow-neon font-black ring-2 ring-lime-300'
                : 'bg-lime-500/20 text-lime-300 hover:text-white border border-lime-500/40'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-lime-400" />
            <span>Nota 9: Mattina Senza Colazione</span>
          </button>

          {/* TAB NOTA 10 */}
          <button
            type="button"
            onClick={() => handleSelectTab('proteine_finestra', true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'proteine_finestra'
                ? 'bg-gradient-to-r from-indigo-400 to-purple-400 text-black shadow-neon font-black ring-2 ring-indigo-300'
                : 'bg-indigo-500/20 text-indigo-300 hover:text-white border border-indigo-500/40'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-indigo-400" />
            <span>Nota 10: Proteine &amp; Finestra</span>
          </button>

          {/* TAB NOTA 11 */}
          <button
            type="button"
            onClick={() => handleSelectTab('dati_reali_19nov', true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'dati_reali_19nov'
                ? 'bg-gradient-to-r from-rose-400 to-amber-300 text-black shadow-neon font-black ring-2 ring-rose-300'
                : 'bg-rose-500/20 text-rose-200 hover:text-white border border-rose-400/40'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-300" />
            <span>Nota 11: Dati 19/11 &amp; Stacking</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('palestra')}
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
            onClick={() => handleSelectTab('notte')}
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
            onClick={() => handleSelectTab('colazione')}
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
            onClick={() => handleSelectTab('succo')}
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
            onClick={() => handleSelectTab('protocollo')}
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

      <div ref={noteContentRef} className="scroll-mt-16" />

      {/* ============================================================= */}
      {/* VISTA RAPIDA: SOLO I CALCOLI IMPORTANTI (1 CLICK)             */}
      {/* ============================================================= */}
      {activeTab === 'calcoli_importanti' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-2 pl-1 border-b border-cyan-400/30 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                <Zap className="w-4 h-4 text-cyan-300" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-yellow-400 text-black font-black">★ IMPORTANTE</span>
                  Schermata Rapida • Solo Numeri &amp; Formule
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  ⚡ Solo Calcoli Importanti Insulina (Microinfusore)
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleSelectTab('calcolo_insulina')}
                className="py-1.5 px-2.5 rounded-xl bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-200 border border-yellow-400/40 text-[11px] font-bold transition-all active:scale-95 cursor-pointer"
              >
                Spiegazione Completa
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1.5 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Tutta la Guida</span>
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-cyan-400/60 space-y-4 bg-gradient-to-br from-cyan-950/40 via-black/90 to-yellow-950/25 shadow-[0_0_30px_rgba(34,211,238,0.22)]">
            {/* 3 Numeri Chiave dai Grafici Reali */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3.5 rounded-2xl bg-black/75 border border-yellow-400/45 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-yellow-300 block">
                  1. Insulina Totale Media
                </span>
                <div className="text-xl font-black text-white font-mono">40–45 U/die</div>
                <p className="text-[11px] text-gray-300 leading-snug">
                  Basale + Bolo (display: 45U, 40.6U, 41.4U, 50.7U • Peso: <strong className="text-white">75 kg</strong>).
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/75 border border-cyan-400/50 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 block">
                  2. Rapporto I:C (ICR) • Regola 500
                </span>
                <div className="text-xl font-black text-cyan-300 font-mono">~1 : 11 / 12</div>
                <p className="text-[11px] text-gray-200 leading-snug">
                  <strong className="text-white">1 U rapida</strong> copre circa <strong className="text-cyan-300">11–12 g</strong> di carboidrati (<code className="text-cyan-200">500 ÷ 40–45</code>).
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/75 border border-emerald-400/50 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 block">
                  3. Fattore Correzione • Regola 1800
                </span>
                <div className="text-xl font-black text-emerald-300 font-mono">~40–45 mg/dL</div>
                <p className="text-[11px] text-gray-200 leading-snug">
                  <strong className="text-white">1 U rapida</strong> abbassa di <strong className="text-emerald-300">40–45 mg/dL</strong> (<code className="text-emerald-200">1800 ÷ 40–45</code>).
                </p>
              </div>
            </div>

            {/* Formule Pratiche Immediate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-cyan-950/35 border border-cyan-400/40 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-cyan-300 block">
                  Formula Pasto (Carboidrati)
                </span>
                <div className="p-2.5 rounded-xl bg-black/80 border border-cyan-500/30 font-mono text-xs text-white text-center font-bold">
                  Unità Pasto = Grammi Carboidrati ÷ 11 o 12
                </div>
                <div className="text-[11px] text-gray-200 space-y-1">
                  <div>• <strong className="text-white">Esempio Pasta (60 g pesati ≈ 45 g CHO):</strong> <span className="font-mono text-cyan-300 font-bold">45 ÷ 11,5 ≈ 4 U</span></div>
                  <div>• <strong className="text-gray-300">Con rapporto 1:10 (40 g CHO):</strong> <span className="font-mono text-gray-200">40 ÷ 10 = 4 U</span></div>
                  <div>• <strong className="text-gray-300">Con rapporto 1:5 (40 g CHO):</strong> <span className="font-mono text-gray-200">40 ÷ 5 = 8 U</span></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/35 border border-emerald-400/40 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-300 block">
                  Formula Correzione Glicemia Alta
                </span>
                <div className="p-2.5 rounded-xl bg-black/80 border border-emerald-500/30 font-mono text-xs text-white text-center font-bold">
                  Unità = (Glicemia - Target 120) ÷ 40–45
                </div>
                <div className="text-[11px] text-gray-200 space-y-1">
                  <div>• <strong className="text-white">Esempio a 240 mg/dL (target 120):</strong></div>
                  <div>• <span className="font-mono text-emerald-300 font-bold">240 - 120 = 120 punti ➔ 120 ÷ 40 = 3 U</span></div>
                  <div className="text-[10px] text-gray-400">Verifica sempre se hai ancora insulina attiva sul microinfusore!</div>
                </div>
              </div>
            </div>

            {/* Quando il Rapporto Cambia */}
            <div className="p-3.5 rounded-2xl bg-black/70 border border-amber-500/35 space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 block">
                Quando I Numeri Si Spostano (Attenzione!)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                  <strong className="text-emerald-300 block">Palestra / Movimento</strong>
                  <span className="text-gray-200">Muscoli "spugne": <code className="text-white">1:10 ➔ 1:12 o 1:15</code> (serve MENO insulina).</span>
                </div>
                <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/30">
                  <strong className="text-rose-300 block">Stress / Studio / Cortisolo</strong>
                  <span className="text-gray-200">Più resistenza: <code className="text-white">1:10 ➔ 1:8</code> (serve PIÙ insulina).</span>
                </div>
                <div className="p-2.5 rounded-xl bg-orange-950/30 border border-orange-500/30">
                  <strong className="text-orange-300 block">Grassi &amp; Cordon Bleu</strong>
                  <span className="text-gray-200">Digestione in 3–4h ("Onda Lunga"): controllo spia a 3 ore.</span>
                </div>
              </div>
            </div>

            {/* Frase pronta per il Diabetologo */}
            <div className="p-3.5 rounded-2xl bg-yellow-950/30 border border-yellow-400/45 text-xs space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-yellow-300 block">
                Da Chiedere al Controllo in Ospedale / Diabetologo
              </span>
              <p className="text-gray-100 italic leading-relaxed">
                "Ho visto che la mia insulina totale si aggira sulle 40-45 unità: verifichiamo insieme se il mio ICR e il mio fattore di correzione sul microinfusore sono tarati esattamente su questi valori?"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* NOTA IMPORTANTE: CALCOLO INSULINA (ICR, REGOLA 500 & 1800)    */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'calcolo_insulina') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-2 pl-1 border-b border-yellow-400/30 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-yellow-400 text-black font-black">★ IMPORTANTE</span>
                  Pilastro Fondamentale • Microinfusore &amp; Autonomia Pasti
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  🧮 Calcolo Insulina: Rapporto I:C (ICR), Regola 500 &amp; 1800
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleSelectTab('calcoli_importanti')}
                className="flex items-center space-x-1 py-1.5 px-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-400 hover:text-black text-cyan-300 border border-cyan-400/40 text-[11px] font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Solo Calcoli</span>
              </button>
              {activeTab === 'calcolo_insulina' && (
                <button
                  type="button"
                  onClick={() => setActiveTab('tutta')}
                  className="flex items-center space-x-1 py-1.5 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Torna alla Guida</span>
                </button>
              )}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-yellow-400/60 space-y-4 bg-gradient-to-br from-yellow-950/30 via-black/85 to-cyan-950/25 shadow-[0_0_35px_rgba(250,204,21,0.2)]">
            {/* 1. Cos'è il Rapporto Insulina/Carboidrati (I:C o ICR) */}
            <div className="p-4 rounded-2xl bg-black/70 border border-cyan-500/35 space-y-2.5">
              <span className="text-xs font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-cyan-400" />
                1. Cos'è Scientificamente il Rapporto Insulina/Carboidrati (I:C o ICR)?
              </span>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                È il calcolo esatto usato dai diabetologi per darti autonomia nei pasti: ti dice <strong className="text-white">quanti grammi di carboidrati vengono coperti da 1 sola unità di insulina rapida</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1">
                  <strong className="text-cyan-300 font-bold block">Esempio Rapporto 1:10</strong>
                  <p className="text-gray-300 leading-relaxed">
                    1 unità copre 10 g di carboidrati. Se mangi un piatto di pasta con <strong className="text-white">40 g di carboidrati</strong>: <strong className="text-cyan-300 font-mono">40 ÷ 10 = 4 unità</strong>.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 space-y-1">
                  <strong className="text-purple-300 font-bold block">Esempio Rapporto 1:5</strong>
                  <p className="text-gray-300 leading-relaxed">
                    Se in quel momento della giornata hai sensibilità insulinica più bassa, per gli stessi <strong className="text-white">40 g di carboidrati</strong> servono <strong className="text-purple-300 font-mono">40 ÷ 5 = 8 unità</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Dati Reali del Tuo Microinfusore + Regola 500 + Regola 1800 */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-950/35 via-black/80 to-emerald-950/30 border-2 border-yellow-400/50 space-y-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-yellow-400" />
                  2. I Tuoi Dati Reali dal Microinfusore (40–45 U/die • 75 kg)
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-yellow-400/20 text-yellow-200 border border-yellow-400/40 font-mono">
                  Storico: 45U • 40.6U • 41.4U • 50.7U
                </span>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed">
                Dallo storico dei tuoi display (somma di basale + boli dei pasti: <strong className="text-white">45 U</strong> schermata principale, <strong className="text-white">40.6 U</strong> il 14 nov, <strong className="text-white">41.4 U</strong> il 12 nov, <strong className="text-white">50.7 U</strong> l'8 nov), la tua media giornaliera è <strong className="text-yellow-300">40–45 unità al giorno</strong> (su <strong className="text-white">75 kg</strong> di peso).
              </p>

              {/* Regola dei 500 */}
              <div className="p-3.5 rounded-xl bg-black/75 border border-cyan-400/40 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <strong className="text-cyan-300 font-black uppercase text-[11px]">
                    A. "Regola dei 500" ➔ Rapporto I:C (ICR)
                  </strong>
                  <span className="text-[10px] font-mono text-cyan-200 bg-cyan-500/15 px-2 py-0.5 rounded">
                    500 ÷ Totale Giornaliero
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Con un totale medio di <strong className="text-white">40–45 U/giorno</strong> (esempio teorico con 40 U: <code className="text-gray-200">500 ÷ 40 = 12,5 g</code>):
                </p>
                <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 font-mono text-[11px] text-cyan-200 space-y-1">
                  <div>• <strong>500 ÷ 40–45 ≈ 11–12 g</strong> ➔ Rapporto teorico <strong>~1:11 / 1:12</strong></div>
                  <div>• <strong>Esempio Pasta 60g pesati (~45g carboidrati):</strong> 45 ÷ 11,5 ≈ <strong>4 unità</strong></div>
                </div>
              </div>

              {/* Regola dei 1800 */}
              <div className="p-3.5 rounded-xl bg-black/75 border border-emerald-400/40 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <strong className="text-emerald-300 font-black uppercase text-[11px]">
                    B. "Regola dei 1800" ➔ Fattore di Correzione
                  </strong>
                  <span className="text-[10px] font-mono text-emerald-200 bg-emerald-500/15 px-2 py-0.5 rounded">
                    1800 ÷ Totale Giornaliero
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Indica di quanti mg/dL scende la glicemia con <strong className="text-white">1 unità di insulina rapida</strong> sul microinfusore:
                </p>
                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 font-mono text-[11px] text-emerald-200 space-y-1">
                  <div>• <strong>1800 ÷ 40–45 ≈ 40–45 mg/dL</strong> abbassati per ogni 1 unità</div>
                  <div>• <strong>Esempio a 240 mg/dL (target sicuro 120):</strong> 240 - 120 = 120 punti ➔ 120 ÷ 40 = <strong>3 unità</strong></div>
                </div>
              </div>
            </div>

            {/* 3. Perché non è mai fisso al 100% */}
            <div className="p-4 rounded-2xl bg-black/70 border border-amber-500/35 space-y-2.5">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                3. Perché Questo Numero NON È Fisso al 100%?
              </span>
              <div className="space-y-2 text-[11px] text-gray-300">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-emerald-500/25">
                  <strong className="text-emerald-300">• Palestra e movimento:</strong> I muscoli diventano "spugne" super sensibili; quel 1:10 può diventare <strong className="text-white">1:12 o 1:15</strong> (ti serve meno insulina per gli stessi carboidrati, altrimenti rischi l'ipoglicemia!). Cambia anche tra mattina e sera.
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-orange-500/25">
                  <strong className="text-orange-300">• Grassi e proteine (es. cordon bleu e patate):</strong> Non basta contare solo i carboidrati; i grassi rallentano lo svuotamento gastrico e richiedono la gestione dei tempi ("Onda Lunga" a 3 ore).
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-rose-500/25">
                  <strong className="text-rose-300">• Stress, studio intenso e ormoni:</strong> Il cortisolo alza la resistenza all'insulina; quel 1:10 può temporaneamente diventare <strong className="text-white">1:8</strong> (serve più insulina).
                </div>
              </div>
            </div>

            {/* 4. Riepilogo Dati Pronti & Dialogo col Diabetologo */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-950/40 via-black/80 to-cyan-950/35 border border-yellow-400/50 space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-yellow-300 flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-yellow-400" />
                4. Riepilogo Numeri Teorici &amp; Cosa Chiedere al Diabetologo
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-black/70 border border-white/15">
                  <span className="text-gray-400 block text-[10px] font-bold uppercase">Totale Medio Giornaliero</span>
                  <strong className="text-white font-black">~40–45 unità/die</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-black/70 border border-cyan-500/30">
                  <span className="text-cyan-400 block text-[10px] font-bold uppercase">ICR Teorico</span>
                  <strong className="text-white font-black">~1:11 / 1:12 (11-12g CHO/U)</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-black/70 border border-emerald-500/30">
                  <span className="text-emerald-400 block text-[10px] font-bold uppercase">Fattore Correzione</span>
                  <strong className="text-white font-black">~40–45 mg/dL per 1 U</strong>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] text-gray-200">
                <div className="p-2.5 rounded-xl bg-black/60 border border-yellow-500/30 italic">
                  <strong className="text-yellow-300 not-italic block text-[10px] uppercase mb-0.5">Per impostare i parametri sul tuo peso (75 kg) e palestra:</strong>
                  "Vorrei impostare il mio Rapporto Insulina/Carboidrati (ICR) e il mio Fattore di Correzione, così posso calcolare le unità esatte pesando i carboidrati del piatto."
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-cyan-500/30 italic">
                  <strong className="text-cyan-300 not-italic block text-[10px] uppercase mb-0.5">Verifica taratura microinfusore al controllo:</strong>
                  "Ho visto che la mia insulina totale si aggira sulle 40-45 unità: verifichiamo insieme se il mio ICR e il mio fattore di correzione sul microinfusore sono tarati esattamente su questi valori?"
                </div>
              </div>
            </div>

            {activeTab === 'calcolo_insulina' && (
              <div className="pt-2 flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSelectTab('calcoli_importanti')}
                  className="py-3 px-5 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Vedi Solo Calcoli Importanti</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('tutta')}
                  className="py-3 px-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
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
      {/* SETTIMA NOTA: PICCO RITARDATO "ONDA LUNGA" (GRASSI & IMPANATI)*/}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'onda_lunga') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-orange-500/20 text-orange-300 border border-orange-500/30">
                <Clock className="w-4 h-4 text-orange-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-orange-400">
                  Settima Nota Specifica • Effetto "Onda Lunga" (Mensa &amp; Impanati)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  🌊 Picco Ritardato a 3 Ore: Cordon Bleu, Patate &amp; Grassi
                </h2>
              </div>
            </div>
            {activeTab === 'onda_lunga' ? (
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Torna alla Guida Completa</span>
              </button>
            ) : (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-orange-500/15 text-orange-300 border border-orange-500/30">
                Nuova Aggiunta
              </span>
            )}
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-orange-400/50 space-y-4 bg-gradient-to-br from-orange-950/35 via-black/85 to-amber-950/25 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
            {/* Caso pratico introduttivo */}
            <div className="p-3.5 rounded-2xl bg-black/60 border border-orange-500/30 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-orange-400">
                  Il "Grande Classico": Effetto Onda Lunga (Picco Tardivo)
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-500/20 text-red-300 border border-red-500/30 font-mono">
                  12:45 ➔ 16:00 (280 mg/dL)
                </span>
              </div>
              <p className="text-gray-200 leading-relaxed font-medium">
                Mangi alle <strong className="text-white">12:45</strong> (es. patate + cordon bleu in mensa) con le tue solite <strong className="text-white">8 unità</strong> di insulina rapida e la glicemia schizza a <strong className="text-red-300">280 mg/dL verso le 16:00</strong> (più di 3 ore dopo). Non hai sbagliato dose: quelle 8 unità erano tarate sulla normale velocità di digestione (tipo pasta in bianco), ma il cibo ha fatto un vero e proprio <strong className="text-orange-300">"ritardo di consegna"</strong> nell'intestino.
              </p>
            </div>

            {/* 1. Meccanismo Scientifico */}
            <div className="p-4 rounded-2xl bg-black/70 border border-amber-500/30 space-y-3">
              <div className="flex items-center space-x-2 text-amber-300 font-black uppercase text-xs tracking-wider">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>1. Perché Sale Così Tardi (3+ Ore Dopo)?</span>
              </div>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                  <strong className="text-white block font-bold text-[11px]">
                    • Finestra della tua insulina rapida (8 UI):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Il picco massimo dell'insulina rapida si concentra tra <strong className="text-amber-300">1 ora e mezza e 2 ore</strong> dopo l'iniezione, per poi esaurirsi intorno alle 3 ore.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-orange-500/25 space-y-1">
                  <strong className="text-orange-300 block font-bold text-[11px]">
                    • L'effetto "Grassi e Proteine" (Cordon Bleu &amp; Impanati):
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Un cordon bleu unisce <strong className="text-white">panatura</strong> (amido di farina/pangrattato + olio di cottura/frittura) e <strong className="text-white">prosciutto + formaggio</strong> (proteine e grassi pesanti). Grassi e proteine rallentano drasticamente lo svuotamento gastrico: il cibo resta <strong className="text-orange-300">"parcheggiato" nello stomaco</strong> molto più a lungo e scende nell'intestino a goccia a goccia. Inoltre una parte di grassi e proteine viene convertita lentamente in glucosio dal fegato (<strong className="text-white">gluconeogenesi</strong>).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-red-500/25 space-y-1">
                  <strong className="text-red-300 block font-bold text-[11px]">
                    • Il mix letale con le Patate + Seconda Ondata:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Le patate (al forno o fritte) hanno indice glicemico alto: la prima quota di zuccheri viene coperta dalle tue 8 unità iniziali. Ma proprio dopo le 3 ore, quando l'insulina ha ormai terminato il turno, la <strong className="text-white">seconda ondata di grassi, panatura e carboidrati</strong> entra in circolo tutta insieme. Risultato: <strong className="text-red-300">insulina esaurita + cibo tardivo = picco a 280 mg/dL</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Cibi Specialisti & Segnali d'Allarme */}
            <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/35 space-y-2">
              <div className="flex items-center space-x-2 text-amber-300 font-black uppercase text-xs tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>2. I "Segnali d'Allarme" nel Piatto (Digestione in 3–4 Ore)</span>
              </div>
              <p className="text-[11px] text-gray-200 leading-relaxed">
                Tutti i cibi impanati, fritti o ripieni sono gli <strong className="text-white">"specialisti" del picco glicemico ritardato</strong>: <strong className="text-amber-300">cordon bleu, cotolette, nuggets, panzerotti, fast food</strong>, fritture, panature spesse, formaggi fusi o carni elaborate. Quando li vedi nel piatto, sai già che non verranno digeriti in 2 ore ma in <strong className="text-white">3–4 ore</strong>.
              </p>
            </div>

            {/* 3. Perché NON Aumentare Subito la Dose Iniziale */}
            <div className="p-4 rounded-2xl bg-red-950/35 border-2 border-red-500/45 space-y-2.5">
              <div className="flex items-center space-x-2 text-red-300 font-black uppercase text-xs tracking-wider">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span>3. Perché Fare Più Unità Subito (es. 8 ➔ 10 UI) È un Errore Pericoloso</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                <div className="p-3 rounded-xl bg-black/60 border border-red-500/30 space-y-1">
                  <strong className="text-red-300 block font-bold">1. Ipoglicemia immediata (60–90 min):</strong>
                  <p className="text-gray-300 leading-relaxed">
                    La rapida entra subito in azione mentre il cibo è ancora bloccato nello stomaco dai grassi. Senza zucchero da abbassare, rischi un crollo glicemico pesante a 1 ora dal pasto.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-rose-500/30 space-y-1">
                  <strong className="text-rose-300 block font-bold">2. Le "Montagne Russe" perfette:</strong>
                  <p className="text-gray-300 leading-relaxed">
                    Per salvarti dall'ipoglicemia iniziale devi prendere bustine di zucchero. Poi, 3 ore dopo, cordon bleu e patate si digeriscono comunque e schizzi a <strong className="text-white">270 mg/dL</strong>: ipo all'inizio + iper alla fine!
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Protocollo Pratico & Tempi di Controllo */}
            <div className="p-4 rounded-2xl bg-black/70 border border-cyan-500/35 space-y-3">
              <div className="flex items-center space-x-2 text-cyan-300 font-black uppercase text-xs tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>4. Protocollo Pratico per Gestire l'Onda Lunga in Sicurezza</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-white block text-[11px]">Controllo Standard (1h – 2h dopo il pasto)</strong>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Verifica come ha lavorato il bolo iniziale. <strong className="text-cyan-300">Attenzione:</strong> leggere 130–140 mg/dL qui NON significa che il pericolo sia scampato.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-orange-950/30 border border-orange-500/35 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-orange-500/20 text-orange-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-orange-300 block text-[11px]">Il Controllo "Spia" Fondamentale (A 3 Ore dal Pasto)</strong>
                    <p className="text-[11px] text-gray-200 leading-relaxed">
                      È il momento chiave in cui grassi e panatura finiscono di svuotarsi dallo stomaco e parte il picco. Misurarla a 3 ore ti permette di <strong className="text-white">beccare la salita sul nascere</strong> prima che arrivi a 280–300 mg/dL.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/35 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-emerald-300 block text-[11px]">Opzione 1 • Micro-Correzione Mirata (Se sale a 3 ore)</strong>
                    <p className="text-[11px] text-gray-200 leading-relaxed">
                      Se a 3 ore sta risalendo (es. da 130 verso 180–200 mg/dL in salita), fai una <strong className="text-white">piccola correzione di insulina rapida</strong> basata esclusivamente sul tuo <strong className="text-emerald-300">fattore di correzione stabilito dal medico</strong> (es. 1–2 UI al massimo). Mai a occhio né dosi grosse che farebbero crollare la glicemia la sera!
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/35 flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-purple-300 block text-[11px]">Opzione 2 • Prevenzione &amp; Diabetologo ("Bolo Sdoppiato")</strong>
                    <p className="text-[11px] text-gray-200 leading-relaxed">
                      Annota questi episodi e parlane col diabetologo: per pasti grassi/impanati si può valutare il <strong className="text-white">bolo doppio/quadrato</strong> (microinfusore) o la divisione in due iniezioni (una parte subito e una piccola quota dopo 1h–1h30). <strong className="text-rose-300">Mai farlo da solo senza indicazione medica.</strong> Una <strong className="text-purple-200">passeggiata leggera</strong> post-pranzo aiuta inoltre i muscoli ad assorbire il glucosio lento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Checklist Rapida */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-orange-950/45 to-amber-950/35 border border-orange-400/40 text-[11px] text-gray-200 space-y-1">
                <strong className="text-orange-300 font-black uppercase tracking-wider block text-[10px]">
                  Checklist Rapida Pasto Grasso / Impanato
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-0.5">
                  <div>1. Bolo standard iniziale (non aumentare a caso)</div>
                  <div>2. Controllo a 1–2 ore (vedi l'avvio)</div>
                  <div>3. Controllo "spia" a 3 ore (becca l'onda lunga)</div>
                  <div>4. Micro-correzione medica solo se sale davvero</div>
                </div>
              </div>
            </div>

            {activeTab === 'onda_lunga' && (
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('tutta')}
                  className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-300 hover:to-amber-300 text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-neon flex items-center justify-center gap-2"
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
      {/* OTTAVA NOTA: FRULLATO MATTUTINO (40-41g CHO) & ANALISI 7,5 U  */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'frullato_bolo') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <Coffee className="w-4 h-4 text-sky-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400">
                  Nota 8 • Colazione Liquida &amp; Farmacocinetica Bolus
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  🥤 Frullato Mattutino (40–41g CHO), Rapporto I:C &amp; Analisi 7,5 U
                </h2>
              </div>
            </div>
            {activeTab === 'frullato_bolo' && (
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Chiudi</span>
              </button>
            )}
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-sky-400/50 space-y-4 bg-gradient-to-br from-sky-950/30 via-black/85 to-cyan-950/20">
            {/* 1. Conteggio Carboidrati */}
            <div className="p-4 rounded-2xl bg-black/70 border border-sky-500/30 space-y-2 text-xs">
              <strong className="text-sky-300 uppercase tracking-wider text-[11px] block">
                1. Composizione Reale del Frullato (~40–41 g Carboidrati)
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <strong className="text-white block">Latte Parz. Scremato (200–250 ml)</strong>
                  <span className="text-sky-300 font-bold">~10–12 g CHO</span> (lattosio + proteine/grassi moderati)
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <strong className="text-white block">1 Banana Media Matura</strong>
                  <span className="text-amber-300 font-bold">~25–28 g CHO</span> (frullata = assorbimento rapido!)
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                  <strong className="text-white block">Proteine Whey (1 misurino)</strong>
                  <span className="text-emerald-300 font-bold">~1–2 g CHO</span> (ma lieve risposta insulinotropica/coda proteica)
                </div>
              </div>
              <p className="text-[11px] text-gray-300 pt-1">
                <strong>Nota fisica chiave:</strong> frullare la banana rompe meccanicamente le fibre vegetali e trasforma il pasto in liquido, velocizzando lo svuotamento gastrico rispetto a masticarla intera.
              </p>
            </div>

            {/* 2. Rapporto I:C Teorico vs Ipotetico Bolo 7,5 U */}
            <div className="p-4 rounded-2xl bg-black/70 border border-amber-500/35 space-y-2.5 text-xs">
              <strong className="text-amber-300 uppercase tracking-wider text-[11px] block">
                2. Rapporto I:C Teorico (1:11–12) vs Resistenza Mattutina vs Ipotetiche 7,5 U
              </strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1">
                  <strong className="text-cyan-300 block">Calcolo Teorico (Regola 500 su 40–45 U/die)</strong>
                  <p className="text-gray-200 leading-relaxed">
                    Con I:C teorico <strong>~1:11 / 1:12</strong>:<br />
                    <span className="font-mono text-white font-bold">40 g ÷ 11,5 ≈ 3,5 U</span>.<br />
                    Tuttavia al mattino (cortisolo + GH dell&apos;alba) molti ragazzi hanno temporanea insulino-resistenza mattutina e richiedono un rapporto più forte (es. <span className="font-mono text-cyan-200">1:7</span> o <span className="font-mono text-cyan-200">1:8</span> → ~5–6 U), sempre da validare col diabetologo.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/35 space-y-1">
                  <strong className="text-rose-300 block">Analisi di Un&apos;Ipotetica Dose da 7,5 U</strong>
                  <p className="text-gray-200 leading-relaxed">
                    <span className="font-mono text-white font-bold">40 g ÷ 7,5 U ≈ 5,3 g/U (rapporto ~1:5,3)</span>.<br />
                    È oltre il <strong>doppio del teorico</strong>! Salvo altissima insulino-resistenza mattutina documentata dal medico, 7,5 U su 40 g espongono a rischio reale di calo brusco entro 60–120 min (specialmente camminando verso scuola!).
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Farmacocinetica 0-20 / 30-90 / 2-4h */}
            <div className="p-4 rounded-2xl bg-black/70 border border-purple-500/30 space-y-2.5 text-xs">
              <strong className="text-purple-300 uppercase tracking-wider text-[11px] block">
                3. Farmacocinetica Ora per Ora (Liquidi Frullati vs Insulina Rapida + Control-IQ)
              </strong>
              <div className="space-y-2 text-[11px] text-gray-200">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <strong className="text-amber-300 block">0–20 minuti (Latenza Insulina vs Zucchero Liquido):</strong>
                  Lo zucchero liquido del frullato inizia a salire quasi subito se non fai pre-bolo (o se il tempo di attesa è 0 min), mentre l&apos;analogo rapido inizia appena a entrare nel sottocute.
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-rose-500/25">
                  <strong className="text-rose-300 block">30–90 minuti (Scontro di Picco + Movimento GLUT4):</strong>
                  Qui esplode il picco d&apos;azione dell&apos;insulina rapida mentre cammini verso scuola/fermata (muscoli attivi che tirano glucosio!). Se il bolo era troppo grande (es. 7,5 U ipotetiche), qui può avvenire un crollo rapido verso l&apos;ipoglicemia.
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-cyan-500/25">
                  <strong className="text-cyan-300 block">2–4 ore (Coda IOB &amp; Intervento Control-IQ):</strong>
                  Il microinfusore registra insulina attiva residua (IOB): se vede discesa rapida sospende la basale (rischiando poi un rimbalzo a metà mattina), mentre se invece resti alto per rapporto insufficiente può erogare micro-boli automatici di correzione.
                </div>
              </div>
            </div>

            {/* 4. Riepilogo per il Diabetologo */}
            <div className="p-3.5 rounded-2xl bg-sky-950/35 border border-sky-400/40 text-[11px] text-gray-200 space-y-1">
              <strong className="text-sky-300 uppercase tracking-wider block text-[10px]">
                📋 Riepilogo Pronto per il Diabetologo (Colazione con Frullato)
              </strong>
              <p className="italic">
                &quot;La mia colazione fissa con frullato (latte parzialmente scremato + banana + whey) ha circa 40–41 g di carboidrati in forma liquida. Con la mia media di 40–45 U/die il teorico sarebbe ~1:11–12 (~3,5 U), ma vista la resistenza mattutina qual è il rapporto I:C mattutino corretto da impostare sul microinfusore (es. 1:7 / 1:8 / 1:9) e quanti minuti prima dovrei fare il bolo?&quot;
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* NONA NOTA: MATTINA SENZA COLAZIONE (~120 mg/dL, DAWN EFFECT)  */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'mattina_digiuno') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-lime-500/20 text-lime-300 border border-lime-500/30">
                <Sun className="w-4 h-4 text-lime-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-lime-400">
                  Nota 9 • Uscire a Digiuno, Dawn Effect &amp; Grasso Corporeo
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  ☀️ Mattina Senza Colazione (~120 mg/dL, Alba &amp; Bilancio Grasso)
                </h2>
              </div>
            </div>
            {activeTab === 'mattina_digiuno' && (
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Chiudi</span>
              </button>
            )}
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-lime-400/50 space-y-4 bg-gradient-to-br from-lime-950/25 via-black/85 to-emerald-950/20 text-xs text-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="p-3.5 rounded-2xl bg-black/65 border border-lime-500/30 space-y-1.5">
                <strong className="text-lime-300 block">1. Perché al mattino senza mangiare resta stabile (~120 mg/dL)?</strong>
                <p className="text-gray-300 leading-relaxed">
                  Al risveglio parte l&apos;<strong>Effetto Alba (Dawn Effect)</strong>: cortisolo, GH e catecolamine ordinano al fegato di rilasciare glucosio (<em>glicogenolisi + gluconeogenesi</em>). Se la tua basale / Control-IQ è ben tarata e fai due passi verso scuola (lieve consumo muscolare GLUT4), l&apos;insulina basale bilancia esattamente l&apos;uscita epatica mantenendo la curva piatta intorno a <strong className="text-white">~120 mg/dL</strong> (diverso dal caso patologico in cui la basale è scarsa e schizza a 180!).
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-black/65 border border-emerald-500/30 space-y-1.5">
                <strong className="text-emerald-300 block">2. Saltare la colazione fa dimagrire di più?</strong>
                <p className="text-gray-300 leading-relaxed">
                  A digiuno l&apos;ossidazione dei grassi momentanea è un po&apos; più alta perché l&apos;insulina è solo basale. Tuttavia <strong>la perdita reale di grasso corporeo dipende dal bilancio calorico totale delle 24 ore</strong>: se salti la colazione ma poi recuperi le stesse calorie a merenda/pranzo/cena, perdi esattamente lo stesso grasso; aiuta a dimagrire solo se rende più facile mantenere il deficit calorico senza fame nervosa né sbalzi glicemici.
                </p>
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-black/60 border border-white/10 text-[11px] text-gray-300">
              <strong className="text-amber-300">Regola pratica scuola:</strong> se esci senza colazione intorno a ~120 mg/dL, tieni comunque 1–2 bustine di zucchero nello zaino (in caso di camminata veloce o calo imprevisto) e ricorda che il primo spuntino di metà mattina troverà una leggera resistenza residua del cortisolo mattutino (e se non hai avuto ipoglicemie notturne Somogyi!).
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* DECIMA NOTA: TIMING FRULLATO, DESTINO PROTEINE & FINESTRA     */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'proteine_finestra') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                <Flame className="w-4 h-4 text-indigo-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400">
                  Nota 10 • Biochimica Proteica, Timing Mer/Gio/Ven &amp; Verità Finestra Anabolica
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  🧬 Timing Frullato (Mer/Gio/Ven), Destino delle Proteine &amp; Finestra Anabolica
                </h2>
              </div>
            </div>
            {activeTab === 'proteine_finestra' && (
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Chiudi</span>
              </button>
            )}
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-indigo-400/50 space-y-4 bg-gradient-to-br from-indigo-950/30 via-black/85 to-purple-950/20 text-xs text-gray-200">
            {/* 1. Timing Frullato Mer/Gio/Ven */}
            <div className="p-4 rounded-2xl bg-black/65 border border-indigo-500/30 space-y-2">
              <strong className="text-indigo-300 uppercase tracking-wider text-[11px] block">
                1. Frullato Mattutino Fisso vs Spostato Post-Workout (Mercoledì, Giovedì, Venerdì)
              </strong>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Spostare lo stesso frullato (latte + banana + whey) dalla mattina a subito dopo l&apos;allenamento <strong>NON cambia di per sé il dimagrimento né la crescita muscolare</strong> a parità di calorie e proteine totali nelle 24h. Ciò che cambia davvero è la <strong className="text-white">gestione glicemica</strong>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <strong className="text-cyan-300 block">Se lo prendi fisso al Mattino:</strong>
                  Comodità di routine, spegne eventuale stimolo dell&apos;alba, ma trovi la resistenza mattutina al bolo e serve precisione sull&apos;I:C per i 40 g CHO liquidi.
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-950/25 border border-emerald-500/30">
                  <strong className="text-emerald-300 block">Se lo prendi Post-Palestra (Mer/Gio/Ven):</strong>
                  I muscoli hanno appena aperto i canali <strong>GLUT4</strong>: i ~40 g di carboidrati vanno diritti a ricaricare glicogeno muscolare con bisogno di insulina ridotto (meno rischi picchi mattutini, attenzione solo a calibrare il bolo ridotto col medico per non fare ipoglicemia).
                </div>
              </div>
            </div>

            {/* 2. Destino delle Proteine (Smentita al prof) */}
            <div className="p-4 rounded-2xl bg-black/65 border border-purple-500/30 space-y-2">
              <strong className="text-purple-300 uppercase tracking-wider text-[11px] block">
                2. Cosa Succede Davvero Alle Proteine Nel Corpo (Mito Smentito!)
              </strong>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                L&apos;idea (a volte ripetuta in palestra o a scuola) che le proteine bevute la mattina &quot;aspettino nel sangue fino alle 18:00&quot; o che vadano &quot;dirette dentro il bicipite come mattoni interi&quot; è <strong>biologicamente falsa</strong>:
              </p>
              <ol className="space-y-1.5 list-decimal pl-5 text-[11px] text-gray-200">
                <li>
                  <strong>Digestione e Vena Porta:</strong> nello stomaco (HCl + pepsina) e nell&apos;intestino tenue (proteasi) ogni proteina viene smontata in <strong>singoli aminoacidi e di/tri-peptidi</strong> che entrano nella vena porta epatica e poi nel sangue.
                </li>
                <li>
                  <strong>Pool Sistemico &amp; Priorità Vitali:</strong> gli aminoacidi entrano in un &quot;pool circolante&quot; comune. Il corpo dà priorità a intestino, sistema immunitario, enzimi, collagene, neurotrasmettitori e ormoni; il resto alimenta la sintesi muscolare o viene ossidato per energia.
                </li>
                <li>
                  <strong>Sintesi Proteica Muscolare (MPS) Estesa 24–48 Ore:</strong> dopo un allenamento con i pesi, il muscolo mantiene la sintesi proteica elevata per <strong className="text-white">24–48 ore</strong>! Ecco perché contano i grammi totali di proteine distribuiti in tutta la giornata (~1,6–2,0 g/kg = ~115–135 g/die su 75 kg), non solo un singolo shake.
                </li>
              </ol>
            </div>

            {/* 3. Verità sulla Finestra Anabolica */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/35 to-cyan-950/25 border border-indigo-400/40 space-y-2 text-[11px]">
              <strong className="text-cyan-300 uppercase tracking-wider block">
                3. La Verità Scientifica Sulla &quot;Finestra Anabolica&quot; (mTOR, MPS &amp; GLUT4)
              </strong>
              <p className="text-gray-200 leading-relaxed">
                La famosa finestra obbligatoria di 30–60 minuti post-palestra nacque da vecchi studi svolti su persone allenate <strong>completamente a digiuno dalla notte prima</strong>. Se invece hai mangiato pranzo o uno spuntino proteico nelle 3–5 ore precedenti, hai già aminoacidi in circolo quando finisci l&apos;allenamento: la reale finestra di massima efficienza di mTOR e MPS copre comodamente <strong>4–6 ore attorno alla seduta</strong> (e si protrae per 24–48 ore)!
              </p>
              <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 text-gray-200">
                <strong className="text-white block mb-1">Gerarchia Reale delle Priorità (Dal Più Importante al Meno):</strong>
                1) <strong>Proteine totali delle 24h</strong> + 2) <strong>Bilancio calorico</strong> + 3) <strong>Progressione &amp; tecnica in palestra + Sonno</strong> + 4) <strong>Sicurezza CGM/Microinfusore</strong>. Il minuto esatto in cui bevi lo shake vale meno del 5% rispetto a questi 4 pilastri!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* NOTA 11: ANALISI DATI REALI 19/11 (FRULLATO 6U+3U & MENSA 16,5U) */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'dati_reali_19nov') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                  Nota 11 • Analisi Cronologica Reale (19/11)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Boli Manuali Reali: Frullato (6U + 3U) &amp; Mensa (9U + 4U + 3,5U / Insulin Stacking)
                </h2>
              </div>
            </div>
            {activeTab === 'dati_reali_19nov' && (
              <button
                type="button"
                onClick={() => setActiveTab('tutta')}
                className="flex items-center space-x-1 py-1.5 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Chiudi</span>
              </button>
            )}
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-rose-400/50 space-y-4 bg-gradient-to-br from-rose-950/35 via-black/85 to-amber-950/20 text-xs text-gray-200">
            {/* 0. Chiarimento Numeri Display vs Boli Manuali */}
            <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/35 space-y-1.5 text-[11px]">
              <strong className="text-cyan-300 uppercase tracking-wider block">
                Chiarimento Fondamentale: Boli Manuali vs Somme Control-IQ (7,17 U / 4,75 U)
              </strong>
              <p className="text-gray-200 leading-relaxed">
                I numeri frazionari come <strong>7,17 U</strong> o <strong>4,75 U</strong> visibili nel report del microinfusore sommano i micro-boli basali e le correzioni automatiche erogati dall&apos;algoritmo <strong>Control-IQ</strong>. Analizzando invece <strong className="text-white">esclusivamente le tue unità manuali reali</strong> comunicate ora per ora, emergono con precisione chirurgica il &quot;quando&quot; e il &quot;quanto&quot; sia sul frullato sia sulla mensa.
              </p>
            </div>

            {/* 1. ANALISI MATTINA: 6U + 3U */}
            <div className="p-4 rounded-2xl bg-black/65 border border-amber-500/35 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <strong className="text-amber-300 uppercase tracking-wider text-[11px]">
                  1. Il Frullato (Mattina): 6 U alle 07:51 e Correzione 3 U alle 09:25 → 152 mg/dL
                </strong>
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  9 U Totali (07:51 → 12:50)
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <strong className="text-white block">07:51 · Bolo Iniziale 6 U</strong>
                  Hai fatto <strong className="text-amber-300">6 U</strong> manuali per il frullato (latte, banana, proteine: ~<strong>40–41 g</strong> di carboidrati).
                </div>
                <div className="p-2.5 rounded-xl bg-rose-950/25 border border-rose-500/30">
                  <strong className="text-rose-300 block">09:25 · Picco 281 mg/dL (+3 U)</strong>
                  La curva era salita a <strong>281 mg/dL</strong> e hai erogato <strong className="text-rose-200">3 U</strong> di correzione manuale.
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-950/25 border border-emerald-500/30">
                  <strong className="text-emerald-300 block">12:50 · Arrivo a 152 mg/dL</strong>
                  Con <strong>9 U totali</strong> in tutta la mattina sei arrivato a pranzo a <strong className="text-white">152 mg/dL</strong> puliti.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/25 space-y-2 text-[11px]">
                <strong className="text-amber-300 block uppercase">Analisi Scientifica del &quot;Quando&quot; e del &quot;Quanto&quot;:</strong>
                <ul className="space-y-1.5 list-disc pl-5 text-gray-200">
                  <li>
                    <strong>Il Momento del Bolo (Gara di Velocità — il &quot;Quando&quot;):</strong> frullando banana e latte rompi meccanicamente le fibre vegetali: gli zuccheri semplici (<em>glucosio, fruttosio e lattosio</em>) in forma liquida superano il piloro ed entrano nel sangue in <strong>20–30 minuti</strong>. L&apos;insulina rapida sottocutanea invece impiega <strong>15–20 minuti</strong> solo per iniziare ad assorbirsi dai capillari e <strong>oltre 1 ora</strong> per toccare il picco massimo. Se fai le 6 U esattamente mentre bevi (07:51), lo zucchero vince la gara e schizzi a 281 alle 09:25. Chiedi alla dottoressa se puoi anticipare con un <strong>pre-bolo di 10–15 minuti</strong> prima di bere (sempre verificando la glicemia di partenza).
                  </li>
                  <li>
                    <strong>Le Unità (Resistenza Mattutina — il &quot;Quanto&quot;):</strong> hai usato <strong>6 U</strong> per ~40 g CHO (rapporto reale iniziale di <strong>~1:6,5 / 1:7</strong>, già molto più spinto del tuo 1:11–1:12 teorico da 3,5 U!), più altre <strong>3 U</strong> alle 09:25 = <strong>9 U complessive</strong> per chiudere a 152 alle 12:50. Fisiologicamente accade per il picco circadiano di <strong>cortisolo e GH</strong> nella fascia <strong>07:00–12:00</strong> che riduce temporaneamente la sensibilità insulinica muscolare: è un dato d&apos;oro per farti calibrare dal medico l&apos;I:C dedicato alla mattina.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. ANALISI MENSA & POMERIGGIO: 9U + 4U + 3,5U = 16,5 U (STACKING!) */}
            <div className="p-4 rounded-2xl bg-black/65 border border-rose-500/40 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <strong className="text-rose-300 uppercase tracking-wider text-[11px]">
                  2. La Mensa (Pranzo): 9 U (12:50) + 4 U (14:03) + 3,5 U (14:39) = 16,5 U (Stacking!)
                </strong>
                <span className="text-[10px] font-black px-2 py-0.5 rounded bg-rose-500/25 text-rose-200 border border-rose-400/40">
                  36 Minuti tra Correzioni
                </span>
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed">
                Partenza alle 12:50 a <strong>152 mg/dL</strong> con un pranzo composto da carboidrati rapidi/medi + grassi lenti (<strong>pasta al pesce, due bruschette piccole e piatto impanato</strong>):
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <strong className="text-cyan-300 block">12:50 · 152 mg/dL (+9 U)</strong>
                  Erogate <strong className="text-white">9 U</strong> per pasta al pesce, 2 bruschette piccole e piatto impanato.
                </div>
                <div className="p-2.5 rounded-xl bg-orange-950/25 border border-orange-500/35">
                  <strong className="text-orange-300 block">14:03 · 252 mg/dL (+4 U)</strong>
                  Dopo 1h13 aggiunte <strong className="text-white">4 U</strong> mentre le 9 U delle 12:50 erano ancora in pieno effetto.
                </div>
                <div className="p-2.5 rounded-xl bg-rose-950/35 border border-rose-500/45">
                  <strong className="text-rose-300 block">14:39 · 321 mg/dL (+3,5 U)</strong>
                  Appena <strong>36 minuti dopo</strong> hai fatto altre <strong className="text-white">3,5 U</strong> (totale <strong className="text-rose-200">16,5 U in &lt;2 ore</strong>)!
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-950/25 border border-rose-500/35 space-y-2 text-[11px]">
                <strong className="text-rose-300 block uppercase">Fisica dell&apos;Insulin Stacking (36 Minuti) &amp; Crollo in Palestra (355 → 80–90):</strong>
                <ul className="space-y-1.5 list-disc pl-5 text-gray-200">
                  <li>
                    <strong>Il Nodo Critico dei 36 Minuti (14:03 → 14:39):</strong> l&apos;insulina rapida sottocutanea rimane biologicamente attiva nel corpo per <strong>3,5–4 ore reali</strong> (<em>IOB — Insulin On Board</em>). A distanza di soli <strong>36 minuti</strong> dalle 14:03, le 4 U avevano appena iniziato ad entrare in circolo (~10–15% dell&apos;assorbimento) e non avevano ancora potuto frenare la salita da pasta, pane e panatura.
                  </li>
                  <li>
                    <strong>Digestione Doppia (Onda Lunga della Panatura):</strong> la pasta e il pane delle bruschette spingono subito in alto la glicemia; contemporaneamente i grassi dell&apos;impanato stimolano la <em>colecistochinina (CCK)</em> rallentando lo svuotamento gastrico e prolungando il rilascio di glucosio fino alle 15:00–16:00 (picco a <strong>355 mg/dL</strong>).
                  </li>
                  <li>
                    <strong>L&apos;Effetto Valanga in Palestra (16,5 U Sovrapposte + GLUT4):</strong> mettendo in corpo <strong>9 + 4 + 3,5 = 16,5 U</strong> in meno di due ore, le tre curve d&apos;azione a campana si sono sommate raggiungendo tutte insieme la massima potenza proprio mentre andavi ad allenarti! In palestra la contrazione muscolare attiva l&apos;enzima <strong>AMPK</strong> aprendo i canali <strong>GLUT4 insulino-indipendenti</strong>: la spugna muscolare + l&apos;accumulo delle 16,5 U hanno buttato giù la curva da 355 fino a <strong>80–90 mg/dL</strong> in serata.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. RIASSUNTO PRATICO PER LA DOTTORESSA */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-2.5 text-[11px]">
              <strong className="text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-emerald-400 shrink-0" />
                Riassunto Pratico dei Tuoi Numeri Da Portare Alla Dottoressa
              </strong>
              <div className="space-y-2 text-gray-200">
                <div className="p-3 rounded-xl bg-black/60 border border-amber-500/30">
                  <strong className="text-amber-300 block">1. Colazione (07:51) — Frullato (~40–41 g CHO):</strong>
                  <p className="mt-0.5">
                    <strong>6 U iniziali + 3 U alle 09:25 (su 281) = 9 U totali</strong> per arrivare a <strong>152</strong> alle 12:50. <br />
                    <em className="text-cyan-200">Domanda chiave:</em> &quot;Devo anticipare i tempi del bolo di 10–15 minuti rispetto al frullato liquido o alzare il rapporto I:C del mattino (fascia 07:00–12:00) rispetto all&apos;1:11–1:12?&quot;
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-rose-500/30">
                  <strong className="text-rose-300 block">2. Pranzo Mensa (12:50) — Pasta al pesce + 2 bruschette + piatto impanato:</strong>
                  <p className="mt-0.5">
                    <strong>9 U iniziali (da 152) + 4 U alle 14:03 (a 252) + 3,5 U alle 14:39 (a 321) = 16,5 U in meno di 2 ore</strong> → picco 355 e crollo 80–90 verso la palestra. <br />
                    <em className="text-cyan-200">Domanda chiave:</em> &quot;Quando in mensa c&apos;è un piatto impanato e parto da 9 U, quanto tempo minimo devo aspettare prima di una eventuale correzione per non fare stacking, e come posso impostare un bolo esteso per la panatura evitando di toccare 321–355 prima della palestra?&quot;
                  </p>
                </div>
              </div>
            </div>
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
