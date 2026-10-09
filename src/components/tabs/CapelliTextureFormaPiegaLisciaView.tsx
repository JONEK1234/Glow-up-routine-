import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Wind,
  Droplets,
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
  X
} from 'lucide-react';

interface CapelliTextureFormaPiegaLisciaViewProps {
  onBack: () => void;
}

export const CapelliTextureFormaPiegaLisciaView: React.FC<CapelliTextureFormaPiegaLisciaViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutta' | 'diagnosi' | 'regole_cima' | 'routine_4passi' | 'polverina' | 'giorno_dopo' | 'fisica'>('tutta');

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
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

        <span className="text-[11px] font-bold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-xl border border-cyan-500/20 flex items-center gap-1.5">
          <Wind className="w-3.5 h-3.5 text-cyan-400" />
          Nota Tecnica Capelli
        </span>
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
                ? 'bg-cyan-400 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Repeat className="w-3.5 h-3.5" />
            5. Il Giorno Dopo (30s)
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
      {/* SEZIONE 5: IL GIORNO DOPO (MARTEDÌ MATTINA IN 30 SECONDI)     */}
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
                  Tenuta & Risveglio • Sezione 5
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  5. Gestione del Giorno Dopo (Martedì Mattina in 30 Secondi)
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-sky-500/15 text-sky-300 border border-sky-500/30">
              30 Secondi
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-sky-500/40 space-y-3 bg-gradient-to-br from-sky-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(56,189,248,0.15)]">
            <div className="p-3 rounded-2xl bg-red-950/20 border border-red-500/30 text-xs">
              <strong className="text-red-300 block font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                Regola di Tenuta: NON aggiungere altro prodotto!
              </strong>
              <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                La polverina è ancora sui capelli: la notte l'ha solo schiacciata contro il cuscino. Se aggiungi altra polvere il secondo giorno, appesantisci la fibra creando un blocco pastoso. Va solo <strong>riattivata</strong>.
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">1</span>
                <div>
                  <h5 className="font-bold text-white text-xs">Testa in Giù (10 secondi)</h5>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Mettiti a testa in giù e passa le dita tra le radici strofinando leggermente il cuoio capelluto. Questo scolla la polvere adagiata sulla cute e ridà subito il volume base.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">2</span>
                <div>
                  <h5 className="font-bold text-white text-xs">"Graffia" a Secco (10 secondi)</h5>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Torna su con la testa. Usa solo i polpastrelli ad artiglio infilandoli da davanti verso dietro per separare le ciocche. La polvere rimasta farà presa all'istante, ricreando i mazzetti definiti.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">3</span>
                <div>
                  <h5 className="font-bold text-white text-xs">Soffio di Aria Fredda / Tiepida se C'è una Piega Strana (10 secondi)</h5>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Se vedi una piega anomala dovuta alla posizione sul cuscino, dai una scaldata rapidissima di 5 secondi ad aria tiepida tenendo il ciuffo in posizione con le dita, e fissa subito con 5 secondi di aria fredda.
                  </p>
                </div>
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
