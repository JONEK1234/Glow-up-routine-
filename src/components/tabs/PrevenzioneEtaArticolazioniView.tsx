import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Bone,
  Dumbbell,
  Activity,
  Briefcase,
  HeartPulse,
  Flame,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Layers
} from 'lucide-react';
import { scrollToTop, scrollToElement } from '../../utils/scrollHelper';

interface PrevenzioneEtaArticolazioniViewProps {
  onBack: () => void;
  initialTab?: string;
}

export const PrevenzioneEtaArticolazioniView: React.FC<PrevenzioneEtaArticolazioniViewProps> = ({
  onBack,
  initialTab
}) => {
  type TabId = 'tutte' | 'eta_articolazioni' | 'massa_lavoro';
  const [activeTab, setActiveTab] = useState<TabId>((initialTab as TabId) || 'tutte');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    if (tab !== 'tutte') {
      scrollToElement(contentRef.current, 68);
    }
  };

  React.useEffect(() => {
    if (initialTab && initialTab !== 'tutte') {
      setActiveTab(initialTab as TabId);
      setTimeout(() => scrollToElement(contentRef.current, 68), 80);
    } else {
      scrollToTop();
    }
  }, [initialTab]);

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Top Navigation */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-lime-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>
        <span className="text-[11px] font-bold text-lime-300 bg-lime-500/10 px-3 py-1 rounded-xl border border-lime-500/20 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
          Prevenzione &amp; Longevità
        </span>
      </div>

      {/* Hero Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-lime-500/30 relative overflow-hidden space-y-3 bg-gradient-to-br from-lime-950/35 via-black/85 to-emerald-950/30 shadow-[0_0_30px_rgba(132,204,22,0.12)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-lime-500/20 text-lime-300 text-[10px] font-black uppercase tracking-widest border border-lime-500/30 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-lime-400" />
            ★ Note Scritte Da Me
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">
            Assicurazione Biologica • 2 Note Complete
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
          Prevenzione Età e Articolazioni
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Come quello che costruisci oggi a 16 anni (pesi, 10.000 passi, calisthenics e mobilità) crea una corazza permanente per ossa, muscoli, mionuclei e schiena — e come organizzare il mantenimento della massa anche con un lavoro manuale faticoso.
        </p>

        {/* Tasti Rapidi per le 2 Note */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => handleSelectTab('eta_articolazioni')}
            className="p-3 rounded-2xl bg-gradient-to-r from-lime-950/60 via-emerald-950/40 to-black/70 border border-lime-500/40 hover:border-lime-400 transition-all cursor-pointer group flex items-center justify-between text-left"
          >
            <div className="flex items-center space-x-2.5 min-w-0">
              <span className="p-2 rounded-xl bg-lime-500/20 text-lime-300 border border-lime-500/30 group-hover:bg-lime-400 group-hover:text-black transition-all shrink-0">
                <Bone className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <span className="text-[10px] font-black uppercase tracking-wider text-lime-400 block">
                  Nota 1 • Longevità &amp; Schiena
                </span>
                <span className="text-xs font-extrabold text-white block truncate">
                  Età, Ossa, Mionuclei &amp; Articolazioni
                </span>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-lime-500/20 text-lime-300 shrink-0 ml-2">
              Apri →
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('massa_lavoro')}
            className="p-3 rounded-2xl bg-gradient-to-r from-amber-950/60 via-orange-950/40 to-black/70 border border-amber-500/40 hover:border-amber-400 transition-all cursor-pointer group flex items-center justify-between text-left"
          >
            <div className="flex items-center space-x-2.5 min-w-0">
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 group-hover:bg-amber-400 group-hover:text-black transition-all shrink-0">
                <Briefcase className="w-4 h-4" />
              </span>
              <div className="min-w-0">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                  Nota 2 • Lavoro &amp; Palestra
                </span>
                <span className="text-xs font-extrabold text-white block truncate">
                  Mantenere Massa con Lavoro Pesante
                </span>
              </div>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 ml-2">
              Apri →
            </span>
          </button>
        </div>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-1.5 bg-black/60 p-1.5 rounded-2xl border border-white/10">
        <button
          type="button"
          onClick={() => handleSelectTab('tutte')}
          className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === 'tutte'
              ? 'bg-lime-400 text-black shadow-sm'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Tutte (2)</span>
        </button>
        <button
          type="button"
          onClick={() => handleSelectTab('eta_articolazioni')}
          className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === 'eta_articolazioni'
              ? 'bg-emerald-400 text-black shadow-sm'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>1. Età &amp; Articolazioni</span>
        </button>
        <button
          type="button"
          onClick={() => handleSelectTab('massa_lavoro')}
          className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === 'massa_lavoro'
              ? 'bg-amber-400 text-black shadow-sm'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>2. Massa &amp; Lavoro</span>
        </button>
      </div>

      <div ref={contentRef} className="space-y-6">
        {/* ================================================================= */}
        {/* NOTA 1: PREVENZIONE ETÀ, OSSA, SUPER-AGING, MIONUCLEI & SCHIENA   */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'eta_articolazioni') && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-lime-500/20 text-lime-300 border border-lime-500/30">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-lime-400 block">
                  Nota 1 • Assicurazione Biologica a Lungo Termine
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Prevenzione Età, Articolazioni, Super-Aging, Memoria Muscolare &amp; Schiena
                </h2>
              </div>
            </div>

            {/* BLOCCO 1: LA DISCESA BIOLOGICA + BANCA MUSCOLI/OSSA + MOBILITÀ */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-lime-500/30 space-y-4 bg-gradient-to-br from-lime-950/20 via-black/80 to-emerald-950/20">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-lime-400">
                  Parte 1 • Costruire l&apos;Assicurazione Biologica dai 16 Anni
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  La &quot;Banca dei Muscoli e delle Ossa&quot; e il Ruolo della Mobilità
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Analisi scientifica di cosa succede al corpo invecchiando e perché il lavoro che fai oggi a 16 anni ti proteggerà per tutta la vita.
                </p>
              </div>

              {/* 1. Discesa biologica */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2.5">
                <h4 className="text-xs font-black text-rose-300 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                  1. Cosa succede scientificamente dai 30–35 anni (La discesa biologica)
                </h4>
                <div className="space-y-2 text-xs text-gray-200 leading-relaxed">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <strong className="text-white block mb-0.5">• Sarcopenia (Perdita di muscolo):</strong>
                    Anno dopo anno, se non stimolate, le fibre muscolari tendono a ridursi di numero e di volume. Il corpo diventa meno efficiente nel sintetizzare le proteine.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <strong className="text-white block mb-0.5">• Osteopenia e Osteoporosi (Perdita di densità ossea):</strong>
                    Le ossa sono come un palazzo in continua ristrutturazione. Con l&apos;età (e il calo ormonale), la demolizione ossea supera la costruzione, rendendo le ossa più fragili.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <strong className="text-white block mb-0.5">• Perdita di elasticità dei tessuti:</strong>
                    Tendini, legamenti e cartilagine perdono acqua e collagene, diventando più rigidi. È per questo che gli anziani tendono a muoversi in modo più &quot;legnoso&quot; e perdono fluidità.
                  </div>
                </div>
              </div>

              {/* 2. Banca muscoli e ossa */}
              <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-2">
                <h4 className="text-xs font-black text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Bone className="w-4 h-4 text-emerald-400 shrink-0" />
                  2. La tua &quot;Banca dei Muscoli e delle Ossa&quot; (Picco tra 16 e 25–30 anni)
                </h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Più muscoli, forza e densità ossea accumuli adesso (tra i 16 e i 25–30 anni), più alto sarà il tuo <strong>&quot;punto di partenza&quot;</strong> quando inizierà la discesa naturale.
                </p>
                <p className="text-xs text-gray-200 leading-relaxed">
                  È come mettere soldi in un conto in banca: se arrivi a 30 anni con un capitale enorme di muscoli e ossa forti, quando a 70 anni inizierai a perderne una percentuale, avrai comunque una riserva talmente alta da muoverti, sollevare la spesa, correre e vivere con la forza, l&apos;agilità e l&apos;autonomia di un cinquantenne. Chi non ha mai fatto nulla, a 70 anni si ritrova &quot;a zero&quot; sul conto e fa fatica a fare le scale. <strong className="text-emerald-300">I pesi che sollevi oggi e le proteine che mangi sono il cemento armato del tuo scheletro futuro.</strong>
                </p>
              </div>

              {/* 3. Stretching e Mobilità */}
              <div className="p-3.5 rounded-2xl bg-cyan-950/25 border border-cyan-500/30 space-y-2">
                <h4 className="text-xs font-black text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-cyan-400 shrink-0" />
                  3. Stretching e Mobilità Articolare Attiva (Servono davvero?)
                </h4>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Lo stretching classico (mantenere un allungamento per un minuto) serve ad allungare temporaneamente il muscolo, ma la vera chiave per non diventare rigidi da anziani è la <strong className="text-cyan-300">mobilità articolare attiva</strong>:
                </p>
                <ul className="text-xs text-gray-200 space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">Cosa succede ai tessuti:</strong> Con l&apos;età, la <em>fascia</em> (il tessuto connettivo che avvolge i muscoli) tende a &quot;incollarsi&quot; se non viene mossa attraverso tutto il suo arco di movimento.
                  </li>
                  <li>
                    <strong className="text-white">Come agire:</strong> Movimenti controllati delle articolazioni, rotazioni e piegamenti fluidi mantengono attivo il <strong className="text-cyan-300">liquido sinoviale</strong> dentro le articolazioni e impediscono al corpo di &quot;arrugginirsi&quot;. Non devi diventare un contorsionista, ma insegnare alle articolazioni a muoversi libere ora.
                  </li>
                </ul>
              </div>

              {/* 4 Pilastri */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-lime-500/30 space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-lime-300 block">
                  I 4 Pilastri per diventare un 50–60enne &quot;Inossidabile&quot;
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <strong className="text-lime-300 block">1. Sollevare i pesi (Ipertrofia &amp; Forza)</strong>
                    <span className="text-gray-300">Stimola ossa dense e muscoli strutturati: unico vero scudo contro osteoporosi e sarcopenia.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <strong className="text-emerald-300 block">2. Corpo magro ed efficiente</strong>
                    <span className="text-gray-300">Evitare l&apos;accumulo cronico di grasso viscerale protegge cuore e metabolismo.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <strong className="text-cyan-300 block">3. Mobilità e stretching regolari</strong>
                    <span className="text-gray-300">Mantiene elastici tendini e articolazioni, prevenendo la rigidità cronica.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <strong className="text-amber-300 block">4. Proteine e nutrizione di qualità</strong>
                    <span className="text-gray-300">Garantiscono i &quot;mattoni&quot; per la manutenzione continua lungo i decenni.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCCO 2: SUPER-AGING E REGOLA SOSTENIBILITÀ */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-emerald-500/30 space-y-3.5 bg-gradient-to-br from-emerald-950/25 via-black/80 to-cyan-950/20">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  Parte 2 • Il Piano a Lungo Termine
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  &quot;Super-Aging&quot;: Il Divario Abissale tra Te e la Media
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Mantenendo pesi intelligenti, <strong className="text-white">10.000 passi quotidiani (anche con pendenza)</strong>, calisthenics, nutrizione e stretching crei una protezione biologica permanente rispetto a chi a 40–50 anni perde il fiato dopo due rampe di scale.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 text-xs text-gray-200">
                <div className="p-3 rounded-2xl bg-black/50 border border-white/10">
                  <strong className="text-emerald-300 block mb-0.5">• Densità ossea fortissima:</strong>
                  Grazie ai pesi e agli impatti della camminata, ossa spesse e resistenti (rischio osteoporosi ridotto al minimo).
                </div>
                <div className="p-3 rounded-2xl bg-black/50 border border-white/10">
                  <strong className="text-cyan-300 block mb-0.5">• Sistema cardiovascolare di ferro:</strong>
                  Grazie ai 10.000 passi e cardio costante: cuore efficiente, pressione sotto controllo e metabolismo attivo.
                </div>
                <div className="p-3 rounded-2xl bg-black/50 border border-white/10">
                  <strong className="text-lime-300 block mb-0.5">• Postura e agilità da ventenne (Successful Aging):</strong>
                  Con calisthenics e mobilità mantieni forza relativa ed elasticità alte; anche dopo i 60–70 anni parti da un livello così alto da sembrare quasi di non invecchiare.
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/35 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-300">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Unica Regola d&apos;Oro: La Sostenibilità (La Maratona, non lo Scatto)</span>
                </div>
                <p className="text-xs text-gray-200 leading-relaxed">
                  Evita gli infortuni stupidi: spaccarsi schiena o articolazioni nelle giornate storte non serve. Il segreto dei <em>long-runner</em> è l&apos;intelligenza costante: spingere forte quando il corpo è pronto, ma saper ascoltare tendini, serie di avvicinamento e recupero quando serve.
                </p>
              </div>
            </div>

            {/* BLOCCO 3: MEMORIA MUSCOLARE (MIONUCLEI) & CAMBIO OBIETTIVO CON L'ETÀ */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/30 space-y-3.5 bg-gradient-to-br from-cyan-950/25 via-black/80 to-indigo-950/25">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
                  Parte 3 • Biologia Cellulare &amp; Anni Futuri
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  La &quot;Memoria Muscolare&quot; (Mionuclei Permanenti) &amp; Cosa Succede Rallentando da Anziani
                </h3>
              </div>

              <div className="p-3.5 rounded-2xl bg-cyan-950/35 border border-cyan-400/35 space-y-2 text-xs text-gray-200 leading-relaxed">
                <strong className="text-cyan-300 block uppercase tracking-wider text-[11px]">
                  1. I Nuclei Cellulari che Non Se Ne Vanno Mai (Mionuclei)
                </strong>
                <p>
                  Quando oggi costruisci muscolo con pesi pesanti e proteine, le fibre non si limitano a gonfiarsi: creano nuovi nuclei cellulari chiamati <strong className="text-white">mionuclei</strong> grazie alle cellule staminali del muscolo.
                </p>
                <p>
                  Questi nuclei <strong className="text-cyan-200">non muoiono mai</strong>, nemmeno se smetti per anni o rallenti da anziano: appena riprendi un minimo di movimento leggero, il corpo ricostruisce tonicità in un attimo perché &quot;struttura e permessi di costruzione&quot; sono già lì per sempre. Non riparti mai da zero.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2 text-xs text-gray-200 leading-relaxed">
                <strong className="text-white block">
                  2. Se a 60–70 anni non puoi più sollevare i pesoni di adesso:
                </strong>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    Perdi un po&apos; di volume estremo e pienezza massima (calo del testosterone naturale e assenza di carichi massimali), <strong className="text-emerald-300">MA NON torni mai come un sedentario</strong>: il tuo &quot;pavimento&quot; di partenza resta altissimo.
                  </li>
                  <li>
                    <strong className="text-amber-300">Regola &quot;Usa o perdi&quot; con intelligenza (50–60+ anni):</strong> L&apos;obiettivo passa da &quot;crescere a tutti i costi / cedimento distruttivo&quot; a <strong>preservare e difendere il capitale accumulato</strong>. Basteranno carichi moderati, elastici, esercizi controllati di spinta/trazione a corpo libero e camminate in pendenza per tenere intatto il <strong>70–80% del lavoro di una vita</strong> con molta meno fatica.
                  </li>
                </ul>
              </div>
            </div>

            {/* BLOCCO 4: PREVENZIONE MAL DI SCHIENA & ARTICOLAZIONI AL LAVORO */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-purple-500/30 space-y-3.5 bg-gradient-to-br from-purple-950/25 via-black/80 to-slate-950/30">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-400">
                  Parte 4 • Colonna Vertebrale &amp; Articolazioni
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  Perché Viene il Mal di Schiena agli Adulti (e Come Blindarti per Sempre)
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  La maggior parte delle persone soffre di mal di schiena cronico non per troppi sforzi, ma per l&apos;opposto: pochi sforzi intelligenti e troppe ore fisse nella stessa posizione.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-rose-950/25 border border-rose-500/30 space-y-1.5">
                  <span className="text-[11px] font-black text-rose-300 uppercase block">
                    Perché viene alla gente comune
                  </span>
                  <ul className="space-y-1.5 text-gray-200 list-disc pl-4">
                    <li><strong>Stabilizzatori spenti:</strong> senza allenare il <em>core</em> (addome profondo, lombari, glutei), il corsetto naturale della colonna si atrofizza.</li>
                    <li><strong>Dischi schiacciati:</strong> stare seduti ore o alzare pesi male scarica tutto sulle vertebre logorando i dischi.</li>
                    <li><strong>La schiena compensa:</strong> glutei addormentati + flessori dell&apos;anca corti fanno lavorare e infiammare la zona lombare a ogni movimento.</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 space-y-1.5">
                  <span className="text-[11px] font-black text-emerald-300 uppercase block">
                    La tua armatura protettiva
                  </span>
                  <ul className="space-y-1.5 text-gray-200 list-disc pl-4">
                    <li><strong>Corsetto d&apos;acciaio:</strong> muscoli forti assorbono l&apos;urto degli sforzi lavorativi al posto delle vertebre.</li>
                    <li><strong>Nutrimento per osmosi (10.000 passi):</strong> i dischi intervertebrali si nutrono alternando compressione e decompressione camminando ogni giorno, restando idratati ed elastici.</li>
                    <li><strong>Consapevolezza posturale:</strong> impari a sollevare usando gambe e tecnica invece di piegare la schiena.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* NOTA 2: ORGANIZZAZIONE MANTENERE MASSA & LAVORO MANUALE/PESANTE    */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'massa_lavoro') && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Briefcase className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                  Nota 2 • Organizzazione Pratica
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Organizzazione: Mantenere Massa Muscolare &amp; Lavoro Manuale / Pesante
                </h2>
              </div>
            </div>

            {/* BLOCCO 1: LAVORO MANUALE VS PALESTRA */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-amber-500/35 space-y-4 bg-gradient-to-br from-amber-950/25 via-black/80 to-orange-950/20">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                  Attività Lavorativa vs Allenamento Strutturato
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  Se Smetti la Palestra e Fai Solo un Lavoro Manuale, Perdi Massa?
                </h3>
                <p className="text-xs text-gray-200 leading-relaxed">
                  <strong className="text-amber-300">Risposta breve:</strong> Se smetti completamente i pesi e fai solo un lavoro manuale (anche faticoso), tenderai a perdere una parte della massa muscolare &quot;piena&quot; e della forza massimale, pur restando asciutto, funzionale e resistente.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2 text-xs text-gray-200 leading-relaxed">
                <strong className="text-cyan-300 block uppercase tracking-wider text-[11px]">
                  1. Il Principio dell&apos;Adattamento (Perché il Lavoro Non È Palestra)
                </strong>
                <p>
                  Il muscolo cresce e resta voluminoso solo con <strong>tensione meccanica elevata e progressiva</strong> (vicino al cedimento con i pesi). Un lavoro manuale (scatole, muratura, campi, spingere) è invece uno sforzo di <strong>resistenza e fatica cronica a bassa intensità</strong>.
                </p>
                <p>
                  Il corpo è pigro ed efficiente: se non deve più sollevare carichi massimali, riduce leggermente il volume estetico inutile mantenendo invece la densità ossea, i tendini forti e i mionuclei costruiti in gioventù (fisico più asciutto, &quot;nervoso&quot; e resistente, meno gonfio da bodybuilding).
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-950/25 border border-rose-500/35 space-y-2 text-xs text-gray-200">
                <strong className="text-rose-300 block uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  2. I 2 Veri Pericoli del Lavoro Manuale Senza Allenamento Mirato
                </strong>
                <ul className="space-y-1.5 list-disc pl-5 leading-relaxed">
                  <li>
                    <strong className="text-white">Stress e Cortisolo alto:</strong> Lavoro stancante e ripetitivo alza il cortisolo; se mangi male o non recuperi, rischi di accumulare grasso e infiammare le articolazioni invece di dimagrire pulito.
                  </li>
                  <li>
                    <strong className="text-white">Usura Asimmetrica:</strong> Sul lavoro usi spesso sempre lo stesso braccio, spalla o lato. Senza palestra/esercizi compensativi per bilanciare la postura, si creano squilibri e dolori cronici (soprattutto alla schiena).
                  </li>
                </ul>
              </div>
            </div>

            {/* BLOCCO 2: STRATEGIA DEL RICHIAMO MINIMO QUANDO SEI DISTRUTTO DAL LAVORO */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-orange-500/35 space-y-4 bg-gradient-to-br from-orange-950/25 via-black/80 to-emerald-950/20">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-400">
                  Strategia Pratica Quando Arrivi a Casa &quot;Stangato&quot;
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  Lavoro Pesante &amp; Corpo Libero: La Strategia del &quot;Richiamo Minimo&quot;
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Quando arrivi a sera distrutto con braccia pesanti e schiena affaticata, mettersi a fare 100 flessioni o trazioni a cedimento è l&apos;errore peggiore.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-1.5 text-xs text-gray-200">
                <strong className="text-rose-300 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-rose-400 shrink-0" />
                  1. Regola d&apos;Oro: Nei giorni di lavoro pesante, il cedimento è VIETATO
                </strong>
                <p className="leading-relaxed">
                  Il lavoro manuale consuma già il sistema nervoso e riempie i muscoli di acido lattico e fatica sistemica. Aggiungere cedimento estremo fa schizzare il cortisolo alle stelle e rovina il recupero per il giorno dopo.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-2.5 text-xs text-gray-200 leading-relaxed">
                <strong className="text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  2. Minimum Effective Dose (Dose Minima Efficace / Richiamo Minimo)
                </strong>
                <p>
                  Dato che durante il lavoro i muscoli subiscono già tensione continua, per non perdere neanche un grammo di massa costruita non servono 2 ore di palestra né sessioni distruttive:
                </p>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-black/50 border border-white/10">
                    <strong className="text-white block">• Sfrutta il lavoro come Cardio &amp; 10.000 Passi:</strong>
                    Il lavoro attivo copre già il dispendio calorico e la resistenza cardiovascolare quotidiana.
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/50 border border-white/10">
                    <strong className="text-white block">• 2–3 Richiami Brevi e Puliti a Settimana:</strong>
                    Anche a casa (due manubri o calisthenics controllato con ampio margine dalle 2–3 serie fatte bene, senza sfinirti) per dare al muscolo il segnale di <em>tensione pesante</em> e riequilibrare le asimmetrie del lavoro.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-black/60 border border-white/10 flex items-start gap-2 text-xs text-lime-200">
                <HeartPulse className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>
                  <strong>In sintesi:</strong> il lavoro manuale ti rende forte e resistente; pochi richiami intelligenti settimanali + proteine adeguate proteggono tutta la tua massa estetica, le asimmetrie e le articolazioni senza bruciarti.
                </span>
              </div>
            </div>

            {/* BLOCCO 3: DIFFERENZA TRA TE ORA GIOVANE, ADULTO E ANZIANO NEL LAVORO */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/35 space-y-4 bg-gradient-to-br from-cyan-950/25 via-black/80 to-lime-950/20">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
                  Confronto nelle 3 Fasi della Vita
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  Come Gestire Lavoro &amp; Massa: Giovane vs Adulto vs Anziano
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Lo stesso lavoro faticoso ha un impatto completamente diverso sul corpo e sull&apos;organizzazione dell&apos;allenamento a seconda dell&apos;età in cui ti trovi:
                </p>
              </div>

              <div className="space-y-3">
                {/* 1. ORA DA GIOVANE */}
                <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-400/40 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                      1. Tu Ora da Giovane (16–25 anni)
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 shrink-0">
                      Costruzione + Lavoro
                    </span>
                  </div>
                  <ul className="text-xs text-gray-200 space-y-1.5 list-disc pl-5 leading-relaxed">
                    <li>
                      <strong className="text-white">Recupero fulmineo &amp; picco ormonale:</strong> il tuo corpo recupera molto più in fretta rispetto a un adulto. Anche se fai un lavoro manuale (estivo o fisso), puoi ancora <strong>costruire nuova massa, ossa dense e mionuclei permanenti</strong> (&quot;mettere soldi in banca&quot;).
                    </li>
                    <li>
                      <strong className="text-white">Come organizzarti:</strong> fai 2–3 sedute brevi ma intense nei giorni più scarichi o liberi. Nelle sere in cui rientri stanco marcio, <em>niente cedimento distruttivo</em>: mangia proteine a sufficienza e dormi per far lavorare il recupero.
                    </li>
                  </ul>
                </div>

                {/* 2. DA ADULTO */}
                <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-400/40 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-amber-400 shrink-0" />
                      2. Tu da Adulto (30–50 anni)
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-200 border border-amber-400/30 shrink-0">
                      Difesa Massa &amp; Schiena
                    </span>
                  </div>
                  <ul className="text-xs text-gray-200 space-y-1.5 list-disc pl-5 leading-relaxed">
                    <li>
                      <strong className="text-white">Cortisolo più alto &amp; meno tempo:</strong> tra lavoro, orari stretti e responsabilità, il recupero si accorcia e l&apos;usura ripetitiva di spalle, polsi e zona lombare si fa sentire se non la compensi.
                    </li>
                    <li>
                      <strong className="text-white">Come organizzarti:</strong> usi il lavoro come movimento quotidiano (cardio/passi), e tieni <strong>2–3 Richiami Minimi a settimana (25–35 min)</strong> con esercizi controllati + rinforzo di <em>core, glutei e dorso</em> per annullare le asimmetrie lavorative ed evitare il mal di schiena cronico.
                    </li>
                  </ul>
                </div>

                {/* 3. DA ANZIANO */}
                <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-400/40 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                      3. Tu da Anziano (60–70+ anni)
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 shrink-0">
                      Rendita &amp; Zero Usura
                    </span>
                  </div>
                  <ul className="text-xs text-gray-200 space-y-1.5 list-disc pl-5 leading-relaxed">
                    <li>
                      <strong className="text-white">Vivi di rendita biologica:</strong> non devi più rincorrere pesoni o sfinirti dopo una giornata pesante. Qui scatta l&apos;effetto dei mionuclei e della densità ossea costruiti da giovane: il tuo punto di partenza resta enormemente sopra la media.
                    </li>
                    <li>
                      <strong className="text-white">Come organizzarti:</strong> zero massimali e zero cedimento. Bastano stimoli leggeri ma regolari (pesi moderati, elastici, corpo libero dolce, mobilità articolare attiva e camminate) per proteggere le articolazioni, tenere fluido il liquido sinoviale e conservare il <strong>70–80% della struttura</strong> restando forte e autonomo.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
