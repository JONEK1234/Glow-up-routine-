import React, { useState } from 'react';
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
  HeartPulse
} from 'lucide-react';

interface PeliIncarnitiVisoViewProps {
  onBack: () => void;
}

export const PeliIncarnitiVisoView: React.FC<PeliIncarnitiVisoViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutte' | 'mattina' | 'barba' | 'informazioni'>('tutte');

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
          Guida pratica e strutturata divisa in 3 parti: massaggio mattutino preparatorio, routine completa per la rasatura della barba a prova di irritazioni e informazioni sui tempi reali di guarigione e turnover cellulare della pelle.
        </p>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('tutte')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutte'
                ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutte le 3 Parti
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('mattina')}
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
            onClick={() => setActiveTab('barba')}
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
            onClick={() => setActiveTab('informazioni')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'informazioni'
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            3. Informazioni & Tempi
          </button>
        </div>
      </div>

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
                <CheckCircle2 className="w-3.5 h-3.5" /> Conclusione del Lavaggio:
              </span>
              <p className="text-[11px] text-gray-300">
                Dopo questo breve massaggio, applichi il <strong className="text-white">detergente</strong>, sciacqui con l'<strong className="text-white">acqua fredda</strong> per svegliarti, asciughi tamponando e metti la tua <strong className="text-white">crema idratante</strong>.
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
