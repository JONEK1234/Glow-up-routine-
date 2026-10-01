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
  Droplet
} from 'lucide-react';

interface PalestraPerditaGrassoViewProps {
  onBack: () => void;
}

export const PalestraPerditaGrassoView: React.FC<PalestraPerditaGrassoViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutte' | 'palestra' | 'deficit' | 'biologia' | 'sessione' | 'nutrizione' | 'informazioni'>('tutte');

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

        {/* Tasto Informazioni Rapido (Richiesto) */}
        <div
          onClick={() => setActiveTab('informazioni')}
          className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/50 via-indigo-950/40 to-black/70 border border-purple-500/40 hover:border-purple-400 transition-all cursor-pointer group flex items-center justify-between shadow-md hover:shadow-purple-500/20"
        >
          <div className="flex items-center space-x-3">
            <span className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 group-hover:bg-purple-500 group-hover:text-black transition-all">
              <Info className="w-4 h-4" />
            </span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Approfondimento Scientifico
              </span>
              <h3 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-purple-200 transition-colors">
                Tasto Informazioni: Solo Palestra vs Pesi + Stretching • Flessioni & Verticale
              </h3>
            </div>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 group-hover:bg-purple-500 group-hover:text-black transition-all shrink-0">
            Leggi ➔
          </span>
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
            1. Palestra & Esercizi
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
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'informazioni'
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/30 font-extrabold'
                : 'bg-purple-500/10 text-purple-300 hover:text-white border border-purple-500/30'
            }`}
          >
            <Info className="w-3.5 h-3.5 text-purple-400" />
            6. Informazioni
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
