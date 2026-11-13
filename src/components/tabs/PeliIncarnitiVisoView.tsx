import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Sun,
  Scissors,
  Info,
  Droplet,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Zap,
  RefreshCw,
  HeartPulse,
  Layers,
  XCircle,
  Sliders,
  BookOpen,
  Ban,
  Compass,
  Moon
} from 'lucide-react';
import { scrollToTop, scrollToElement } from '../../utils/scrollHelper';

interface PeliIncarnitiVisoViewProps {
  onBack: () => void;
}

export const PeliIncarnitiVisoView: React.FC<PeliIncarnitiVisoViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutte' | 'mattina' | 'barba' | 'informazioni' | 'metodo_diviso'>('tutte');
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
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-emerald-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>
        <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Skincare & Rasatura
        </span>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-emerald-500/30 relative overflow-hidden space-y-3 bg-gradient-to-br from-emerald-950/40 via-black/85 to-teal-950/30 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase tracking-widest border border-emerald-500/30 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            ★ Note Scritte Da Me
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Cura del Viso & Prevenzione</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
          <span>Peli incarniti viso</span>
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Guida pratica e strutturata divisa in 4 parti: massaggio mattutino preparatorio, routine completa per la rasatura della barba a prova di irritazioni, informazioni sui tempi reali di guarigione e turnover cellulare della pelle, e il metodo diviso per zone con la Guida Definitiva per la rasatura perfetta.
        </p>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => handleSelectTab('tutte')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutte'
                ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutte le 4 Parti
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('mattina')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'mattina'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            1. Massaggio Mattina
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('barba')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'barba'
                ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            2. Barba (Rasatura)
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('informazioni')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'informazioni'
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            3. Informazioni & Tempi
          </button>
          <button
            type="button"
            onClick={() => handleSelectTab('metodo_diviso')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'metodo_diviso'
                ? 'bg-emerald-400 text-black shadow-md shadow-emerald-400/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            4. Metodo Diviso & Guida Definitiva
          </button>
        </div>
      </div>

      <div ref={noteContentRef} className="scroll-mt-16" />

      {/* ============================================================= */}
      {/* SEZIONE 1: MASSAGGIO DI MATTINA                              */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'mattina') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Sun className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Parte 1 • Risveglio & Preparazione
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Massaggio di Mattina (La Mattina in Generale)
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              30-60 Secondi
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-amber-500/30 space-y-4 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <p className="text-xs text-gray-200 leading-relaxed font-medium bg-amber-950/20 p-3.5 rounded-2xl border border-amber-500/30">
              Esatto. Quando usi l'acqua tiepida/calda la mattina prima o durante il lavaggio, fai questo <strong className="text-amber-200">massaggio di 30-60 secondi</strong> per preparare la pelle e liberare i pori:
            </p>

            <div className="space-y-3 text-xs text-gray-300">
              {/* Movimenti circolari verso l'alto */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  Movimenti circolari verso l'alto:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Usa i polpastrelli (senza usare le unghie) e fai piccoli cerchi partendo dal mento e dalla mascella, risalendo verso le guance.
                </p>
              </div>

              {/* Pressione delicata sulla zona barba */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  Pressione delicata sulla zona barba:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Nei punti dove senti piccoli noduli o dove i peli tendono a incarnarsi, fai una leggera pressione facendo piccolissimi movimenti a "zig-zag". Questo aiuta a muovere la pelle attorno al follicolo e ad ammorbidire il "tappo" di sebo con l'aiuto dell'acqua calda.
                </p>
              </div>

              {/* Non strofinare con forza */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-red-300 block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  Non strofinare con forza:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  L'obiettivo è stimolare la pelle ed essere delicati, non "grattare". La forza eccessiva infiamma i follicoli.
                </p>
              </div>
            </div>

            {/* Chiusura della routine mattina */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-black/60 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed font-medium space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Sequenza Mattutina Corretta:
              </span>
              <p className="text-[11px] text-gray-300">
                1. <strong className="text-white">Detergente</strong> (con acqua tiepida) ➔ 2. <strong className="text-white">Bottiglia di ghiaccio</strong> (avvolta nel panno per sgonfiare e spegnere rossori) ➔ 3. <strong className="text-white">Crema idratante + Massaggio linfatico</strong> (insieme per non creare attrito) ➔ 4. <strong className="text-white">Crema solare</strong> (scudo finale senza più sfregare).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 2: ROUTINE PER QUANDO SI FA LA BARBA                 */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'barba') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Scissors className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  Parte 2 • Gestione Rasatura
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Routine per Quando si fa la Barba
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              6 Step
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Ecco il riassunto completo e strutturato di tutto quello che ci siamo detti, passo dopo passo, concentrandoci sulla gestione dei peli incarniti e sulla rasatura della barba:
          </p>

          <div className="space-y-3.5">
            {/* 1. Il fattore principale: Dimagrire il grasso facciale */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-cyan-500/30 space-y-2.5 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  1. Il fattore principale: Dimagrire il grasso facciale
                </h3>
              </div>
              <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1.5 pl-2">
                <li>
                  <strong className="text-cyan-200">Distensione cutanea:</strong> Ridurre la percentuale di grasso sul viso distende la pelle e riduce le micro-pieghe naturali.
                </li>
                <li>
                  <strong className="text-cyan-200">Decompressione follicolare:</strong> Con meno tessuto adiposo, i follicoli sono meno compressi: il pelo trova una traiettoria più dritta ed esce facilmente in superficie senza piegarsi sotto la cute.
                </li>
              </ul>
            </div>

            {/* 2. Preparazione prima della barba */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-cyan-500/30 space-y-2.5 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  2. Preparazione prima della barba
                </h3>
              </div>
              <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1.5 pl-2">
                <li>
                  <strong className="text-cyan-200">Acqua calda:</strong> Fondamentale prima di rasarsi per ammorbidire la cheratina del pelo e sciogliere il sebo nei pori.
                </li>
                <li>
                  <strong className="text-cyan-200">Detergente:</strong> Se lo hai già usato la mattina presto e la pelle è pulita, non serve riutilizzarlo. Se invece ti radi più tardi o la pelle ha accumulato sporco, fai una rapida detersione con acqua calda prima di applicare i prodotti da barba.
                </li>
              </ul>
            </div>

            {/* 3. Scelta della crema da barba */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-cyan-500/30 space-y-2.5 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  3. Scelta della crema da barba
                </h3>
              </div>
              <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1.5 pl-2">
                <li>
                  La tua <strong className="text-white">crema Nivea</strong> (in tubetto o vaso, non in bomboletta) è un'ottima scelta rispetto alla classica schiuma.
                </li>
                <li>
                  Crea uno strato denso, lubrificante e protettivo.
                </li>
                <li className="text-cyan-300 font-semibold">
                  <strong>Consiglio chiave:</strong> Applicala e lasciala agire per 2-3 minuti prima di passare la lama, così ammorbidisce al massimo i peli più duri.
                </li>
              </ul>
            </div>

            {/* 4. Confronto Lamette e Tecnica di Rasatura */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-cyan-500/30 space-y-3.5 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  4. Confronto Lamette e Tecnica di Rasatura
                </h3>
              </div>

              {/* Sub-box: Lamette attuali BIC */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <strong className="text-amber-300 block font-bold text-xs">
                  Le lamette attuali (BIC a 3 lame):
                </strong>
                <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1 pl-2">
                  <li>
                    <strong className="text-white">Come funzionano:</strong> Sfruttano l'effetto "tira e taglia". La prima lama tira il pelo e le successive lo tagliano sotto la superficie della pelle. Quando il pelo rientra, risalendo buca il tessuto e si incarna.
                  </li>
                  <li>
                    <strong className="text-amber-200">Come usarle al meglio (se continui a usarle):</strong>
                    <div className="mt-1 pl-3 space-y-0.5 text-gray-300">
                      <div>• Passa solo verso il basso (a favore di pelo).</div>
                      <div>• Per rifinire o rimuovere eventuali residui, fai una seconda passata delicata di lato (da destra verso sinistra o viceversa), ma <strong className="text-red-400">MAI contro pelo</strong> (dal basso verso l'alto).</div>
                      <div>• Non tirare o tendere la pelle con la mano mentre passi la lama.</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Sub-box: Alternativa Rasoio di Sicurezza Monolama */}
              <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-400/40 space-y-2 shadow-sm">
                <strong className="text-cyan-200 block font-bold text-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  L'alternativa economica e risolutiva: Rasoio di sicurezza (Monolama)
                </strong>
                <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-200 space-y-1.5 pl-2">
                  <li>
                    <strong className="text-white">Perché è migliore:</strong> Usa una singola lama affilata che taglia il pelo perfettamente a filo della pelle, senza tirarlo in profondità.
                  </li>
                  <li>
                    <strong className="text-white">Economicità:</strong> Il rasoio si compra una sola volta (10-15 €), mentre i pacchetti da 100 lamette di ricambio costano pochissimi euro (circa 10 centesimi a lametta) e durano oltre un anno.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Risciacquo finale */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-cyan-500/30 space-y-2.5 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  5. Risciacquo finale
                </h3>
              </div>
              <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1.5 pl-2">
                <li>
                  Subito dopo la rasatura, <strong className="text-cyan-200">risciacqua il viso con acqua fredda</strong>.
                </li>
                <li>
                  L'acqua fredda rimuove i residui di crema Nivea, tonifica la pelle, dà una sferzata di energia e riduce l'infiammazione e i rossori post-rasatura.
                </li>
              </ul>
            </div>

            {/* 6. Post-rasatura e Idratazione */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-cyan-500/30 space-y-2.5 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <h3 className="text-sm font-extrabold text-white">
                  6. Post-rasatura e Idratazione
                </h3>
              </div>
              <ul className="list-disc list-inside text-[11px] leading-relaxed text-gray-300 space-y-1.5 pl-2">
                <li>
                  Asciuga il viso <strong className="text-white">tamponando delicatamente</strong> con un asciugamano pulito (senza strofinare).
                </li>
                <li>
                  Applica la tua <strong className="text-white">crema idratante Garnier con acido salicilico</strong> su tutto il viso e la zona barba.
                </li>
                <li>
                  L'acido salicilico lavora liberando i pori da sebo e cellule morte, prevenendo l'insorgere di nuovi peli incarniti per tutta la giornata.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 3: INFORMAZIONI & TEMPI DI GUARIGIONE                 */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'informazioni') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Clock className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  Parte 3 • Rigenerazione Cutanea
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Informazioni: Tempi di Guarigione & Rigenerazione
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
              Dermatologia
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            I tempi di guarigione e rigenerazione della pelle dipendono da come si rinnovano le tue cellule e dal tipo di lesione che hai sul viso. Ecco cosa aspettarsi punto per punto e la tempistica reale dei risultati:
          </p>

          {/* LA TEMPISTICA DEI RISULTATI */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-purple-500/30 space-y-4 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
            <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                La Tempistica dei Risultati
              </h3>
            </div>

            <div className="space-y-3 text-xs text-gray-300">
              {/* 1. Nelle prime 24-48 ore */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <strong className="text-purple-300 block font-bold text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    1. Nelle prime 24-48 ore (Sollievo Immediato):
                  </strong>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Giorno 1-2
                  </span>
                </div>
                <div className="pl-3.5 space-y-1 text-[11px]">
                  <p>
                    <strong className="text-white">Cosa noti:</strong> Meno bruciore, meno prurito e assenza di nuove irritazioni acute subito dopo la rasatura.
                  </p>
                  <p className="text-gray-400">
                    <strong className="text-purple-200">Perché:</strong> Smettendo di tagliare il pelo sotto pelle (con la giusta tecnica) e raffreddando il viso alla fine con acqua fredda, spegni sul nascere l'infiammazione immediata.
                  </p>
                </div>
              </div>

              {/* 2. Dopo 2-3 settimane */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <strong className="text-purple-300 block font-bold text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    2. Dopo 2-3 settimane (Stop ai nuovi peli incarniti):
                  </strong>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Settimana 2-3
                  </span>
                </div>
                <div className="pl-3.5 space-y-1 text-[11px]">
                  <p>
                    <strong className="text-white">Cosa noti:</strong> Non si formano più nuovi brufoletti o punti rossi rilevati nella zona barba.
                  </p>
                  <p className="text-gray-400">
                    <strong className="text-purple-200">Perché:</strong> È il tempo necessario all'acido salicilico per iniziare a pulire in profondità i pori e liberare i condotti follicolari. I peli che crescono incontrano la via libera ed escono dritti.
                  </p>
                </div>
              </div>

              {/* 3. Dopo 1-2 mesi */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <strong className="text-purple-300 block font-bold text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    3. Dopo 1-2 mesi (Guarigione completa della pelle):
                  </strong>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Mese 1-2
                  </span>
                </div>
                <div className="pl-3.5 space-y-1 text-[11px]">
                  <p>
                    <strong className="text-white">Cosa noti:</strong> I vecchi pallini rossi, i piccoli noduli sottocutanei e le macchiette scure rimaste dai vecchi peli incarniti iniziano a scomparire quasi del tutto, rendendo la pelle visibilmente più liscia e omogenea.
                  </p>
                  <p className="text-gray-400">
                    <strong className="text-purple-200">Perché:</strong> Il ciclo di turnover cellulare della pelle umana (il tempo necessario all'epidermide per rinnovare completamente tutti i suoi strati) dura in media 28-40 giorni. Ci vogliono quindi circa 1-2 cicli di rinnovo cellulare affinché i macrofagi riassorbano le vecchie lesioni profonde e la pelle nuova sostituisca quella danneggiata.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IL TRUCCO PER LA COSTANZA */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-purple-950/40 via-black/85 to-indigo-950/30 border-2 border-purple-400/50 space-y-3 shadow-neon">
            <span className="text-xs font-black text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-purple-400" />
              Il "Trucco" per la Costanza
            </span>

            <p className="text-xs text-gray-200 leading-relaxed font-medium">
              Se applichi questa routine ogni giorno, vedrai già un <strong className="text-purple-300">cambiamento netto a 30 giorni (1 mese)</strong> e il <strong className="text-purple-300">risultato definitivo a 60 giorni (2 mesi)</strong>.
            </p>

            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-gray-300 leading-relaxed">
              <strong className="text-white block font-bold mb-1">📌 La regola d'oro in dermatologia è la costanza:</strong>
              Non interrompere la crema all'acido salicilico appena vedi i primi miglioramenti, perché continua a prevenire la formazione dei "tappi" nei pori giorno dopo giorno.
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 4: METODO DIVISO PER ZONE & GUIDA DEFINITIVA          */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'metodo_diviso') && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Layers className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Parte 4 • Nuova Nota Strategica
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Metodo Diviso per Zone & Guida Definitiva Rasatura
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              Zero Stress • Anti-Cocci
            </span>
          </div>

          {/* BOX DI PRIORITÀ: PAUSA 2-3 GIORNI */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-emerald-950/50 via-teal-950/40 to-black/85 border-2 border-emerald-400/60 shadow-[0_0_25px_rgba(16,185,129,0.2)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-emerald-400" />
                Fase Attuale: 2-3 Giorni di Pausa Totale
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase tracking-wider border border-emerald-500/30">
                Fai Guarire la Pelle
              </span>
            </div>

            <p className="text-xs text-gray-200 leading-relaxed font-medium">
              Ora fai fare solo <strong className="text-white">2 o 3 giorni di pausa totale</strong> a tutta la faccia: fai guarire quei rossori con <strong className="text-emerald-300">detergente delicato</strong> e <strong className="text-emerald-300">crema solare</strong>, e alla prossima rasatura prova questo metodo diviso!
            </p>

            <div className="p-3 rounded-2xl bg-black/60 border border-white/10 text-[11px] text-gray-300 space-y-1">
              <strong className="text-emerald-400 block font-bold">💡 Perché la pausa è fondamentale:</strong>
              Rasare sopra una cute già irritata o arrossata impedisce al film idrolipidico di rimarginarsi e aumenta a dismisura il rischio di peli incarniti. Dare 48-72 ore di respiro spegne l'infiammazione e prepara il terreno per una rasatura perfetta.
            </div>
          </div>

          {/* METODO DIVISO: LE 2 ZONE PRINCIPALI */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-emerald-500/30 space-y-4 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-gray-200 leading-relaxed font-medium">
              Dividere le zone in questo modo ti permette di <strong className="text-emerald-300">sfruttare il punto di forza di ogni strumento</strong> ed <strong className="text-emerald-300">evitare di stressare inutilmente la pelle</strong>:
            </div>

            {/* LE 2 ZONE CHIAVE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* 1. GUANCE */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs font-black">
                      1
                    </span>
                    <h3 className="text-xs sm:text-sm font-black text-white">
                      Guance <span className="text-gray-400 text-xs font-medium">(Zone piane e facili)</span>
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Monolama Gillette
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed pl-8">
                  Usa il <strong className="text-white">monolama Gillette</strong> (quando la pelle sarà guarita). Lì è facile mantenere l'inclinazione a <strong className="text-emerald-300">30 gradi senza premere</strong> e ti darà il risultato più pulito e preciso.
                </p>

                <div className="ml-8 mt-2 p-2.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-gray-400 font-medium">Gestione Schiuma:</span>
                  <span className="font-extrabold text-emerald-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    SÌ, SEMPRE con schiuma o gel da barba
                  </span>
                </div>
              </div>

              {/* 2. BAFFI */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-cyan-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-black">
                      2
                    </span>
                    <h3 className="text-xs sm:text-sm font-black text-white">
                      Baffi <span className="text-gray-400 text-xs font-medium">(Zona sensibile e angusta)</span>
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Rifinitore Nikai (Foto 2)
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed pl-8">
                  Usa il <strong className="text-white">rifinitore Nikai (Foto 2)</strong>. Le lame regolabarba accorciano la barba senza sfiorare a fondo la pelle, così non rischi di tagliarti o fare follicolite sopra il labbro.
                </p>

                <div className="ml-8 mt-2 p-2.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-gray-400 font-medium">Gestione Schiuma:</span>
                  <span className="font-extrabold text-cyan-300 flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5 text-cyan-400" />
                    NO, A SECCO su pelle asciutta
                  </span>
                </div>
              </div>
            </div>

            {/* REGOLA FONDAMENTALE ZERO SOVRAPPOSIZIONE */}
            <div className="p-4 rounded-2xl bg-red-950/30 border-2 border-red-500/40 space-y-2">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-xs font-black text-red-300 uppercase tracking-wider">
                  Regola Fondamentale: Non Sovrapporre gli Strumenti!
                </span>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                L'unica cosa fondamentale da ricordare è <strong className="text-white underline decoration-red-400">non sovrapporre gli strumenti</strong>: usa <strong className="text-red-300">un solo strumento per ogni zona</strong> nella stessa rasatura (ad esempio non passare prima il rasoio elettrico e poi il monolama nello stesso punto).
              </p>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Passare due strumenti consecutivi moltiplica i passaggi, rimuove lo strato corneo protettivo della pelle e finisce per tagliare il pelo troppo in profondità, facendolo incurvare sotto pelle.
              </p>
            </div>

            {/* GUIDA ALLA SCHIUMA PER LE DUE MODALITÀ */}
            <div className="pt-2 border-t border-white/10 space-y-2.5">
              <span className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                <Droplet className="w-4 h-4 text-cyan-400" />
                Guida alla Schiuma: Come Regolarsi
              </span>
              <p className="text-xs text-gray-300 font-medium">
                No, non su tutti nello stesso modo. Di seguito come gestire la schiuma:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Monolama Gillette (Guance)</span>
                    <span className="text-[10px] font-black text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      SÌ, SEMPRE
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Sempre con schiuma o gel da barba. La lama necessita del cuscino lubrificante protettivo per scorrere senza intaccare la cute.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Rifinitore Nikai (Baffi)</span>
                    <span className="text-[10px] font-black text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded-md border border-cyan-500/30">
                      NO, A SECCO
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-300">
                    Rigorosamente a secco su pelle asciutta. La schiuma farebbe impastare e appiccicare i peli tagliati, frenando le lame.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================= */}
          {/* GUIDA DEFINITIVA: GESTIONE PELLE E RASATURA PERFETTA         */}
          {/* ============================================================= */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-indigo-950/50 via-black/90 to-purple-950/40 border-2 border-indigo-400/60 shadow-[0_0_35px_rgba(99,102,241,0.25)] space-y-5">
            <div className="flex items-center justify-between border-b border-indigo-400/20 pb-3">
              <div className="flex items-center space-x-2.5">
                <span className="p-2 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                </span>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400 block">
                    Protocollo Completo & Riferimento Scientifico
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-white">
                    Guida Definitiva: Gestione Pelle e Rasatura Perfetta
                  </h3>
                </div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hidden sm:inline-block">
                Tutto in Ordine
              </span>
            </div>

            {/* 1. IL MECCANISMO SCIENTIFICO */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-indigo-500/30 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-black text-xs">
                  1
                </span>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  Il Meccanismo Scientifico: Perché Si Formano i "Cocci"
                </h4>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                I brufoli e la follicolite non sono inevitabili; nascono dall'interazione tra la struttura del pelo, il sebo e il taglio errato:
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-indigo-300 font-bold block flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    Predisposizione Genetica:
                  </strong>
                  <p className="text-[11px] text-gray-300 pl-3.5 leading-relaxed">
                    I tuoi peli hanno una crescita inclinata/curva e i pori tendono ad accumulare sebo. Chi fa il contropelo senza problemi ha peli dritti e pelle poco reattiva.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-rose-500/30 space-y-1">
                  <strong className="text-rose-300 font-bold block flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                    Effetto Contropelo:
                  </strong>
                  <p className="text-[11px] text-gray-300 pl-3.5 leading-relaxed">
                    Tagliare dal basso verso l'alto spinge la lama sotto il livello dell'epidermide. Quando la pelle si riassesta, la punta del pelo sprofonda sotto la cute e, trovando il poro ostruito dal sebo, si piega verso l'interno scatenando l'infiammazione (pelo incarnito).
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/30 space-y-1">
                  <strong className="text-emerald-300 font-bold block flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Fase di Purging (Spurgo):
                  </strong>
                  <p className="text-[11px] text-gray-300 pl-3.5 leading-relaxed">
                    L'acido salicilico sta liberando i pori dall'interno. Questa fase di sfogo è temporanea: una volta riassorbita l'infiammazione e liberati i pori, la pelle tornerà pulita.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. STRUMENTI E ROUTINE COMBINATA (TABELLA) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-cyan-500/30 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-xs">
                  2
                </span>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  Strumenti e Routine Combinata
                </h4>
              </div>

              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Per ridurre al minimo lo stress cutaneo, ogni strumento va usato solo nella zona in cui è più efficace, senza mai sovrapporli nella stessa sessione:
              </p>

              {/* Tabella Styled */}
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs text-gray-300 border-collapse">
                  <thead className="bg-white/[0.05] text-[10px] font-black uppercase text-gray-300 border-b border-white/10">
                    <tr>
                      <th className="p-3">Strumento</th>
                      <th className="p-3">Zona del Viso</th>
                      <th className="p-3">Modalità d'Uso</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[11px]">
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-bold text-cyan-300 flex items-center gap-1.5">
                        <Scissors className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        Nikai (Regolabarba)
                      </td>
                      <td className="p-3 text-white font-medium">
                        Baffi e rifiniture di precisione
                      </td>
                      <td className="p-3 text-gray-300">
                        <span className="text-cyan-300 font-bold">A secco.</span> Taglia in superficie senza micro-lesioni.
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-bold text-emerald-300 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        Monolama Gillette (Rasoio di sicurezza)
                      </td>
                      <td className="p-3 text-white font-medium">
                        Guance e zone ampie
                      </td>
                      <td className="p-3 text-gray-300">
                        <span className="text-emerald-300 font-bold">Con schiuma/gel.</span> Inclinazione a 30°, pressione zero.
                      </td>
                    </tr>
                    <tr className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-bold text-amber-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        Shaver Elettrico Squadrato
                      </td>
                      <td className="p-3 text-white font-medium">
                        Sottomento e collo
                      </td>
                      <td className="p-3 text-gray-300">
                        <span className="text-amber-300 font-bold">A secco.</span> Raschia il pelo vicino alla cute senza tagliarlo sotto-cuticola.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. TECNICA DI RASATURA PER ZONA */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-emerald-500/30 space-y-3.5">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black text-xs">
                  3
                </span>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  Tecnica di Rasatura per Zona
                </h4>
              </div>

              {/* Sottozona A: Guance */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-black text-emerald-300 uppercase tracking-wider">
                    A. Guance (Monolama Gillette)
                  </h5>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-md">
                    Inclinazione 30°
                  </span>
                </div>

                <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                  Per ottenere una pelle liscia senza ricorrere al contropelo diretto (dal basso verso l'alto, che è vietato):
                </p>

                <div className="space-y-1.5 text-xs text-gray-300 pl-2">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-0.5">
                    <strong className="text-white block font-bold text-[11px]">
                      • Primo Passaggio - Verso del pelo (WTG):
                    </strong>
                    <ul className="text-[11px] text-gray-300 space-y-0.5 pl-3 list-disc">
                      <li>Muovi il rasoio dall'alto verso il basso (dallo zigomo alla mascella).</li>
                      <li>Mantieni un'inclinazione di 30° sfruttando il peso del rasoio, senza premere.</li>
                    </ul>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-0.5">
                    <strong className="text-white block font-bold text-[11px]">
                      • Secondo Passaggio - Di traverso (XTG):
                    </strong>
                    <ul className="text-[11px] text-gray-300 space-y-0.5 pl-3 list-disc">
                      <li>Riapplica la schiuma da barba.</li>
                      <li>Muovi il rasoio in orizzontale (dall'orecchio verso la bocca/naso), mantenendo l'impugnatura verticale e parallela al pavimento.</li>
                    </ul>
                  </div>

                  <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/30 flex items-center gap-2">
                    <Ban className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="text-[11px] text-red-200 font-bold">
                      Divieto Assoluto: Mai salire dal basso verso l'alto (contropelo puro).
                    </span>
                  </div>
                </div>
              </div>

              {/* Sottozona B: Sottomento e Collo */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <h5 className="text-xs font-black text-amber-300 uppercase tracking-wider">
                    B. Sottomento e Collo (Gestione della Zona Difficile)
                  </h5>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-md">
                    2 Opzioni
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {/* Opzione Consigliata */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-emerald-500/30 space-y-1">
                    <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-md inline-block">
                      Opzione Consigliata
                    </span>
                    <strong className="text-white block font-bold text-[11px]">
                      Shaver Elettrico:
                    </strong>
                    <p className="text-[11px] text-gray-300 leading-relaxed">
                      Usa lo shaver a secco con micro-movimenti circolari o lineari veloci. È la scelta migliore per ridurre a zero i peli incarniti nelle pieghe del collo.
                    </p>
                  </div>

                  {/* Opzione Secondaria */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10 space-y-1.5">
                    <span className="text-[10px] font-black uppercase text-gray-400 bg-white/10 px-2 py-0.5 rounded-md inline-block">
                      Opzione Secondaria (Solo a Pelle Totalmente Guarita)
                    </span>
                    <strong className="text-white block font-bold text-[11px]">
                      Monolama Gillette:
                    </strong>
                    <ul className="text-[11px] text-gray-300 space-y-1 pl-3 list-disc">
                      <li>
                        <strong className="text-gray-200">Mappatura (Grain Mapping):</strong> Tocca i peli per capire la direzione di crescita (spesso dall'alto verso il basso, dal mento al pomo d'Adamo).
                      </li>
                      <li>
                        <strong className="text-gray-200">Passaggio 1 (WTG):</strong> Scendi dritto verso la base del collo seguendo il verso del pelo.
                      </li>
                      <li>
                        <strong className="text-gray-200">Passaggio 2 (XTG):</strong> Riapplica la schiuma e muovi il rasoio in orizzontale (dal centro del collo verso l'esterno/mascella), parallelo al terreno.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. FLUSSO DI LAVORO PRATICO */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-purple-500/30 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-black text-xs">
                  4
                </span>
                <h4 className="text-sm font-black text-white uppercase tracking-wider">
                  Flusso di Lavoro Pratico
                </h4>
              </div>

              <div className="space-y-2.5 text-xs">
                {/* Fase 1 */}
                <div className="p-3 rounded-xl bg-black/60 border border-amber-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-amber-300 font-bold block text-xs">
                      Fase 1: Riposo e Guarigione (2-3 Giorni)
                    </strong>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-md">
                      Pausa Totale
                    </span>
                  </div>
                  <ul className="text-[11px] text-gray-300 space-y-0.5 pl-3 list-disc">
                    <li>Sospendi completamente rasoio e acido salicilico.</li>
                    <li>Detergi delicatamente il viso e applica la crema solare la mattina.</li>
                  </ul>
                </div>

                {/* Fase 2 */}
                <div className="p-3 rounded-xl bg-black/60 border border-cyan-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <strong className="text-cyan-300 font-bold block text-xs">
                      Fase 2: Giorno della Rasatura
                    </strong>
                    <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded-md">
                      Procedura Corretta
                    </span>
                  </div>
                  <ul className="text-[11px] text-gray-300 space-y-0.5 pl-3 list-disc">
                    <li>Passa il Nikai a secco sui baffi e nei punti di precisione.</li>
                    <li>Passa lo shaver elettrico a secco su sottomento e collo.</li>
                    <li>Bagna il viso e applica la schiuma/gel sulle guance.</li>
                    <li>Passa il Gillette monolama (passaggio 1 in verticale verso il basso; passaggio 2 in orizzontale da orecchio a bocca).</li>
                    <li>Sciacqua con acqua fredda per richiudere i pori.</li>
                  </ul>
                </div>

                {/* Fase 3 */}
                <div className="p-3 rounded-xl bg-black/60 border border-purple-500/30 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <strong className="text-purple-300 font-bold block text-xs flex items-center gap-1.5">
                      <Moon className="w-3.5 h-3.5 text-purple-400" />
                      Fase 3: Post-Rasatura e Cura Notturna
                    </strong>
                    <span className="text-[10px] font-bold text-purple-400 bg-purple-500/20 px-2 py-0.5 rounded-md">
                      Leave-On Notturno
                    </span>
                  </div>
                  <ul className="text-[11px] text-gray-300 space-y-1 pl-3 list-disc">
                    <li>La sera, a pelle pulita e asciutta, applica la crema all'acido salicilico.</li>
                    <li>
                      <strong className="text-white">Proprietà Leave-On:</strong> La crema <strong className="text-purple-300">NON va risciacquata</strong>; deve rimanere sulla pelle per agire tutta la notte liberando i pori in profondità.
                    </li>
                  </ul>
                </div>
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
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs transition-all shadow-lg hover:shadow-emerald-500/25 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a Tutte le Note</span>
        </button>
      </div>
    </div>
  );
};
