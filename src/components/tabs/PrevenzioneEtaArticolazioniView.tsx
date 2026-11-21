import React, { useState, useRef, useEffect } from 'react';
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
  Layers,
  Wind,
  Bike,
  Utensils,
  FlaskConical,
  ChevronRight,
  Sun
} from 'lucide-react';
import { scrollToTop, scrollToElement } from '../../utils/scrollHelper';

interface PrevenzioneEtaArticolazioniViewProps {
  onBack: () => void;
  initialTab?: string;
  onOpenMicronutrientiMassa?: () => void;
}

type TabId =
  | 'tutte'
  | 'eta_articolazioni'
  | 'massa_lavoro'
  | 'diabete_prevenzione'
  | 'ossigeno_bici'
  | 'capelli_prevenzione'
  | 'collagene_dieta'
  | 'luce_vitamina_d';

const TAB_CONFIG: { id: TabId; label: string }[] = [
  { id: 'tutte', label: 'Tutte (7)' },
  { id: 'eta_articolazioni', label: '1. Ossa & Età' },
  { id: 'massa_lavoro', label: '2. Massa & Lavoro' },
  { id: 'diabete_prevenzione', label: '3. Diabete & Corpo' },
  { id: 'ossigeno_bici', label: '4. Ossigeno & Bici' },
  { id: 'capelli_prevenzione', label: '5. Capelli & Età' },
  { id: 'collagene_dieta', label: '6. Collagene & Dieta' },
  { id: 'luce_vitamina_d', label: '7. Sole & Vitamina D' }
];

function normalizeTabId(raw?: string): TabId {
  if (!raw) return 'tutte';
  const valid = TAB_CONFIG.some((t) => t.id === raw);
  return valid ? (raw as TabId) : 'tutte';
}

export const PrevenzioneEtaArticolazioniView: React.FC<PrevenzioneEtaArticolazioniViewProps> = ({
  onBack,
  initialTab,
  onOpenMicronutrientiMassa
}) => {
  const [activeTab, setActiveTab] = useState<TabId>(() => normalizeTabId(initialTab));
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    if (tab !== 'tutte') {
      scrollToElement(contentRef.current, 68);
    } else {
      scrollToTop();
    }
  };

  useEffect(() => {
    const normalized = normalizeTabId(initialTab);
    if (initialTab && normalized !== 'tutte') {
      setActiveTab(normalized);
      setTimeout(() => scrollToElement(contentRef.current, 68), 80);
    } else {
      scrollToTop();
    }
  }, [initialTab]);

  const currentTabIndex = TAB_CONFIG.findIndex((t) => t.id === activeTab);
  const nextTab =
    activeTab !== 'tutte' && currentTabIndex > 0 && currentTabIndex < TAB_CONFIG.length - 1
      ? TAB_CONFIG[currentTabIndex + 1]
      : null;

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Top Navigation */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-lime-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>
        <span className="text-[11px] font-bold text-lime-300 flex items-center gap-1.5 whitespace-nowrap shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
          Longevità &amp; Diabete · 7 Sezioni
        </span>
      </div>

      {/* Hero Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-lime-500/30 relative overflow-hidden space-y-3 bg-gradient-to-br from-lime-950/35 via-black/85 to-emerald-950/30 shadow-[0_0_30px_rgba(132,204,22,0.12)]">
        <div className="text-[11px] font-semibold text-lime-300 flex flex-wrap items-center gap-2">
          <span>★ Manuale Scientifico di Longevità</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-rose-300">Calibrato sul Diabete</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-cyan-300">7 Sezioni Complete</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
          Prevenzione Età, Ossa, Ossigeno, Collagene, Sole &amp; Diabete
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Tutta la biologia reale di cosa succede negli anni a <strong className="text-white">ossa, muscoli, tendini, ossigenazione, cuore, capelli, collagene, luce solare e Vitamina D</strong>, spiegata in modo scientifico ma concreto per sapere esattamente <strong className="text-lime-300">cosa fare ogni giorno</strong> (allenamento, respirazione, cucina, esposizione al sole sicura e alimentazione anti-età), integrando sempre il fattore <strong className="text-rose-300">diabete ben gestito</strong>.
        </p>

        {/* Selector Tabs */}
        <div className="pt-2.5 flex flex-wrap gap-1.5 border-t border-white/10">
          <button
            type="button"
            onClick={() => handleSelectTab('tutte')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'tutte'
                ? 'bg-lime-400 text-black shadow-sm'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Tutte (7)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('eta_articolazioni')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'eta_articolazioni'
                ? 'bg-emerald-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Bone className="w-3.5 h-3.5" />
            <span>1. Ossa &amp; Età</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('massa_lavoro')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'massa_lavoro'
                ? 'bg-amber-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>2. Massa &amp; Lavoro</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('diabete_prevenzione')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'diabete_prevenzione'
                ? 'bg-rose-400 text-black font-black'
                : 'bg-white/5 text-rose-200 hover:text-white border border-white/10'
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5" />
            <span>3. Diabete &amp; Corpo</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('ossigeno_bici')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'ossigeno_bici'
                ? 'bg-sky-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Wind className="w-3.5 h-3.5" />
            <span>4. Ossigeno &amp; Bici</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('capelli_prevenzione')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'capelli_prevenzione'
                ? 'bg-teal-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>5. Capelli &amp; Età</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('collagene_dieta')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'collagene_dieta'
                ? 'bg-purple-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>6. Collagene &amp; Dieta</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('luce_vitamina_d')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'luce_vitamina_d'
                ? 'bg-yellow-400 text-black font-black'
                : 'bg-white/5 text-yellow-200 hover:text-white border border-white/10'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>7. Sole &amp; Vitamina D</span>
          </button>
        </div>
      </div>

      {onOpenMicronutrientiMassa && (
        <button
          type="button"
          onClick={onOpenMicronutrientiMassa}
          className="w-full p-4 rounded-3xl bg-gradient-to-r from-emerald-950/50 via-black/80 to-lime-950/40 hover:from-emerald-900/50 border-2 border-emerald-400/50 flex items-center justify-between gap-3 text-left transition-all cursor-pointer active:scale-98 shadow-neon"
        >
          <div className="space-y-0.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-emerald-400" />
              ★ Nuova Nota Collegata · Prevenzione &amp; Fase Massa (Da Giugno)
            </span>
            <strong className="text-xs sm:text-sm font-black text-white block">
              Tutti i Micronutrienti Una Volta Che Si Inizia la Massa e la Crescita di Muscoli
            </strong>
            <span className="text-[11px] text-gray-300 block">
              Frutta, verdura, semi, brodo d&apos;ossa, molluschi/fermentati/EVO e mappa completa per pelle, capelli, corpo &amp; muscoli (+ diabete).
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-emerald-300 shrink-0" />
        </button>
      )}

      <div ref={contentRef} className="space-y-6 scroll-mt-16">
        {/* ================================================================= */}
        {/* 1. OSSA FORTIFICATE NEGLI ANNI, ETÀ, MIONUCLEI & MAL DI SCHIENA   */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'eta_articolazioni') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-lime-500/20 text-lime-300 border border-lime-500/30">
                <Bone className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-lime-400 block">
                  Sezione 1 · Architettura Ossea, Muscoli &amp; Colonna
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Cosa Succede Alle Ossa Negli Anni (Perché Da Vecchio Restano Fortificate), Mionuclei &amp; Schiena
                </h2>
              </div>
            </div>

            {/* BLOCCO 1A: SCIENZA PROFONDA DELLE OSSA NEGLI ANNI */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-lime-500/30 space-y-4 bg-gradient-to-br from-lime-950/20 via-black/80 to-emerald-950/20 text-xs text-gray-200 leading-relaxed">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-lime-400">
                  Parte 1 · Meccanica Biologica dello Scheletro (16 → 80 anni)
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  Come Funziona Davvero l&apos;Osso &amp; Perché Quello Che Costruisci Ora Dura Tutta la Vita
                </h3>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2.5">
                <strong className="text-emerald-300 block uppercase tracking-wider text-[11px]">
                  1. L&apos;Osso È Tessuto Vivo (Non Pietra Morta): Collagene + Idrossiapatite
                </strong>
                <p>
                  Molti pensano che le ossa siano pezzi di gesso fermi. In realtà ogni tuo osso è un cantiere attivo al <strong className="text-white">100% vivo</strong> composto da due materiali precisi:
                </p>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-cyan-300">~30–35% Matrice Organica (Collagene di Tipo I):</strong> funge da &quot;ferro elastico&quot; dentro il cemento armato. È ciò che permette all&apos;osso di assorbire un salto o un peso senza spezzarsi di colpo.
                  </li>
                  <li>
                    <strong className="text-amber-300">~65–70% Matrice Minerale (Cristalli di Idrossiapatite = Calcio + Fosfato):</strong> è il &quot;cemento&quot; che dà durezza e resistenza alla compressione verticale.
                  </li>
                  <li>
                    <strong className="text-white">Le 2 Squadre di Operai (Rimodellamento Osseo):</strong> gli <em>Osteoclasti</em> sciolgono e portano via l&apos;osso vecchio o danneggiato; gli <em>Osteoblasti</em> costruiscono nuovo collagene e ci depositano sopra nuovo calcio. Ogni ~10 anni gran parte del tuo scheletro viene completamente rinnovato!
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-2.5">
                <strong className="text-emerald-300 block uppercase tracking-wider text-[11px]">
                  2. Legge di Wolff &amp; Meccanotrasduzione: Perché i Pesi &quot;Fortificano&quot; l&apos;Osso per la Vecchiaia
                </strong>
                <p>
                  Quando sollevi un bilanciere, fai uno squat, spingi in palestra o fai 10.000 passi (soprattutto in salita o portando peso), l&apos;osso non resta rigido ma <strong>subisce una micro-deformazione elastica</strong> di pochi micron. Questa micro-flessione genera simultaneamente due segnali fisici precisi: (1) un minuscolo <strong>potenziale elettrico piezoelettrico</strong> dentro i cristalli di idrossiapatite e le fibre di collagene, e (2) lo scorrimento ad alta pressione del fluido dentro i microscopici tunnel chiamati <strong>canalicoli</strong>. Insieme risvegliano le cellule sensore dell&apos;osso (gli <strong className="text-white">Osteociti</strong>):
                </p>
                <ol className="space-y-1.5 list-decimal pl-5">
                  <li>
                    Gli osteociti abbassano una proteina-freno chiamata <strong>Sclerostina</strong> e inviano un segnale biochimico agli <strong>Osteoblasti</strong>: <em>&quot;Qui c&apos;è carico meccanico reale, rinforzate e mineralizzate esattamente lungo questa linea di forza!&quot;</em>.
                  </li>
                  <li>
                    <strong className="text-cyan-300">Ispessimento Corticale (Diametro Esterno):</strong> la corteccia esterna dell&apos;osso si allarga verso l&apos;esterno. In fisica strutturale, un tubo con diametro esterno leggermente più largo ha una resistenza alla rottura enormemente maggiore.
                  </li>
                  <li>
                    <strong className="text-lime-300">Architettura Trabecolare Interna:</strong> dentro le vertebre, il femore e le articolazioni c&apos;è una rete spugnosa di travi (<em>trabecole</em>). Sotto carico meccanico, queste travi si orientano e si ispessiscono esattamente lungo le linee di forza dove serve reggere il peso.
                  </li>
                </ol>
                <p className="text-emerald-200 bg-black/50 border border-emerald-400/25 rounded-xl p-2.5">
                  <strong>Perché da vecchio restano fortificate (Il Segreto del Picco di Massa Ossea 16–30 anni):</strong> circa il <strong className="tabular-nums">90%</strong> del tuo capitale osseo massimo si costruisce entro i 25–30 anni. Dopo i 35–40 anni gli osteoclasti iniziano a demolire leggermente più in fretta (~0,5–1% l&apos;anno). Chi non ha fatto nulla parte da una &quot;casa di cartongeso&quot; e a 70 anni finisce in osteoporosi. Chi invece tra i 16 e i 30 anni ha costruito ossa larghe e trabecole spesse parte da un &quot;bunker&quot;: anche perdendo una piccola percentuale da anziano, <strong>la geometria esterna allargata e la densità di base restano altissime</strong>, tenendo lo scheletro fortificato e resistente alle fratture fino a 80+ anni!
                </p>
              </div>

              {/* Fattore Diabete sulle ossa + protocollo pratico */}
              <div className="p-3.5 rounded-2xl bg-rose-950/30 border border-rose-500/35 space-y-2">
                <strong className="text-rose-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <HeartPulse className="w-4 h-4 text-rose-400 shrink-0" />
                  3. Cosa Succede Alle Tue Ossa Con il Diabete (e Come Ribaltarlo al 100%)
                </strong>
                <p>
                  Nel diabete (specialmente Tipo 1 di lunga durata) c&apos;è un dettaglio scientifico che quasi nessuno spiega: gli esami della densità minerale (MOC) a volte sembrano normali, ma se la glicemia resta alta per anni gli zuccheri in eccesso si attaccano proprio al <strong>35% di collagene elastico dentro l&apos;osso</strong> (formando AGEs). Inoltre l&apos;insulina funziona anche da segnale anabolico per gli osteoblasti. Se un diabetico è sedentario e scompensato, l&apos;osso diventa mineralizzato ma &quot;secco/rigido&quot; (<em>osteopatia diabetica</em>).
                </p>
                <p className="text-emerald-200 font-semibold">
                  La tua contromossa vincente: mantenendo una buona glicemia + sollevando pesi e camminando ogni giorno, obblighi l&apos;osso a fare ricambio continuo (gli osteoclasti eliminano il collagene vecchio/glicato e gli osteoblasti ne fabbricano di nuovo elastico e giovane!).
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-lime-500/35 space-y-2.5">
                <strong className="text-lime-300 block uppercase tracking-wider text-[11px]">
                  4. Cosa Cambia Tra Pesi, Camminate e Lavoro Manuale (e Cosa Mettere in Pratica Adesso)
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <strong className="text-orange-300 block mb-0.5">Pesi (Spinte &amp; Trazioni)</strong>
                    Generano trazioni muscolari forti e rapide sull&apos;inserzione del tendine sull&apos;osso: è lo stimolo più potente per alzare la densità minerale ossea (BMD) nei distretti caricati.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <strong className="text-emerald-300 block mb-0.5">Camminate &amp; Impatto al Suolo</strong>
                    Creano un carico ciclico e ripetuto su piedi, caviglie, femori, anche e colonna: mantengono attivo il rimodellamento senza stress articolare eccessivo.
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <strong className="text-amber-300 block mb-0.5">Lavoro Manuale Quotidiano</strong>
                    Se attivo mantiene carico costante, ma se ripetitivo/asimmetrico rinforza solo gli angoli abituali senza lo stimolo globale e variato dei pesi.
                  </div>
                </div>
                <ul className="space-y-1 list-disc pl-5">
                  <li>
                    <strong className="text-white">Carichi assiali &amp; multiarticolari:</strong> squat, affondi, pressa, stacchi tecnici, spinte sopra la testa, rematori e trazioni trasmettono forza diretta attraverso colonna, bacino, femore e polsi (la bici e il nuoto da soli NON caricano abbastanza le ossa perché manca la gravità!).
                  </li>
                  <li>
                    <strong className="text-white">Impatti quotidiani controllati:</strong> i 10.000 passi (meglio con salite/discese) danno migliaia di micro-impatti al giorno che mantengono svegli gli osteociti di gambe e colonna.
                  </li>
                  <li>
                    <strong className="text-white">I 5 Mattoni Chimici dell&apos;Osso:</strong> <strong>Proteine</strong> (per il collagene osseo), <strong>Calcio</strong> (yogurt greco, formaggi, acque ricche di calcio, mandorle, verdure), <strong>Vitamina D3</strong> (sole su braccia/viso + verifica negli esami del sangue), <strong>Vitamina K2</strong> (dirige il calcio dentro le ossa anziché nei vasi: tuorli d&apos;uovo, formaggi stagionati, verdure verdi) e <strong>Magnesio</strong> (necessario per attivare la Vitamina D: semi di zucca, frutta secca, cacao).
                  </li>
                  <li>
                    <strong className="text-cyan-300">Regola di Recupero &amp; Sonno:</strong> l&apos;osso NON si fortifica nell&apos;istante in cui posi il bilanciere, ma nei giorni successivi mentre riposi e dormi. Caricare troppo senza sonno e nutrienti crea solo infiammazioni tendinee o micro-sovraccarichi.
                  </li>
                </ul>
              </div>
            </div>

            {/* BLOCCO 1B: DISCESA BIOLOGICA + MOBILITÀ + SUPER-AGING */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-emerald-500/30 space-y-4 bg-gradient-to-br from-emerald-950/25 via-black/80 to-cyan-950/20 text-xs text-gray-200 leading-relaxed">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  Parte 2 · Sarcopenia, Mobilità &amp; Super-Aging
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  La Discesa Dai 30–35 Anni, Mobilità Articolare Attiva &amp; Il Divario del &quot;Super-Aging&quot;
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="p-3 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                  <strong className="text-rose-300 block">Sarcopenia (Muscoli)</strong>
                  Dai 30–35 anni senza stimolo perdi fibre muscolari (soprattutto le rapide Tipo II) e il corpo sintetizza proteine con meno efficienza.
                </div>
                <div className="p-3 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                  <strong className="text-amber-300 block">Osteopenia (Ossa)</strong>
                  Senza carichi meccanici, la demolizione supera la costruzione rendendo trabecole e corteccia più sottili.
                </div>
                <div className="p-3 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                  <strong className="text-cyan-300 block">Rigidità Fasciale</strong>
                  Tendini, cartilagini e fascia perdono acqua e si incollano, togliendo fluidità ai movimenti e riducendo il liquido sinoviale.
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-cyan-950/25 border border-cyan-500/30 space-y-2">
                <strong className="text-cyan-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <Activity className="w-4 h-4 text-cyan-400 shrink-0" />
                  Mobilità Articolare Attiva vs Stretching Statico
                </strong>
                <p>
                  Lo stretching passivo rilassa il muscolo sul momento, ma è la <strong className="text-white">mobilità articolare attiva</strong> (ruotare spalle, bacino, caviglie, colonna e scendere in squat profondi controllati) che spreme e rinnova il <strong className="text-cyan-300">liquido sinoviale</strong> dentro le capsule articolari e impedisce alla fascia connettivale di incollarsi. Mantenere pesi intelligenti + 10.000 passi + calisthenics + mobilità crea il cosiddetto <em>Successful / Super-Aging</em>: a 60–70 anni hai forza, postura e fiato molto superiori alla media dei 40enni sedentari.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/35 space-y-1">
                <div className="flex items-center gap-1.5 font-black text-amber-300">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Unica Regola d&apos;Oro: Sostenibilità (La Maratona, non lo Scatto)</span>
                </div>
                <p>
                  Evita infortuni stupidi caricando a freddo nelle giornate storte: i <em>long-runner</em> vincono proteggendo tendini, facendo serie di avvicinamento e ascoltando i segnali di recupero.
                </p>
              </div>
            </div>

            {/* BLOCCO 1C: MIONUCLEI & MAL DI SCHIENA */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/30 space-y-4 bg-gradient-to-br from-cyan-950/25 via-black/80 to-indigo-950/25 text-xs text-gray-200 leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-cyan-950/35 border border-cyan-400/35 space-y-2">
                <strong className="text-cyan-300 block uppercase tracking-wider text-[11px]">
                  Parte 3 · Memoria Muscolare Permanente (Mionuclei) &amp; Anni Futuri
                </strong>
                <p>
                  Quando oggi alleni i muscoli con pesi e proteine, le cellule staminali satellite aggiungono nuovi nuclei cellulari (<strong className="text-white">Mionuclei</strong>) dentro le fibre. Questi nuclei <strong className="text-cyan-200">restano per sempre</strong>, anche se per periodi della vita rallenti o ti fermi: quando riprendi anche con carichi moderati o elastici a 60–70 anni, ricostruisci tonicità in un lampo e conservi il <strong className="tabular-nums">70–80%</strong> della tua struttura senza mai ripartire da zero.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-rose-950/25 border border-rose-500/30 space-y-1.5">
                  <span className="text-[11px] font-black text-rose-300 uppercase block">
                    Perché viene il Mal di Schiena agli adulti
                  </span>
                  <ul className="space-y-1 list-disc pl-4">
                    <li><strong>Core e glutei spenti:</strong> senza corsetto muscolare, ogni sforzo scarica sui dischi vertebrali.</li>
                    <li><strong>Ore seduti:</strong> comprimono i dischi togliendo idratazione e accorciando i flessori dell&apos;anca.</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 space-y-1.5">
                  <span className="text-[11px] font-black text-emerald-300 uppercase block">
                    La tua armatura protettiva
                  </span>
                  <ul className="space-y-1 list-disc pl-4">
                    <li><strong>Nutrimento per osmosi:</strong> i 10.000 passi alternano compressione e decompressione idratando i dischi intervertebrali.</li>
                    <li><strong>Tecnica + Core forte:</strong> addome profondo, lombari e glutei assorbono i carichi al posto delle vertebre.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 2. ORGANIZZAZIONE MANTENERE MASSA & LAVORO MANUALE/PESANTE        */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'massa_lavoro') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Briefcase className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                  Sezione 2 · Organizzazione Pratica
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Mantenere Massa, Lavoro Manuale &amp; Strategia nelle 3 Età (con Diabete)
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-amber-500/35 space-y-4 bg-gradient-to-br from-amber-950/25 via-black/80 to-orange-950/20 text-xs text-gray-200 leading-relaxed">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-black text-white">
                  Se Smetti la Palestra e Fai Solo un Lavoro Manuale, Perdi Massa?
                </h3>
                <p>
                  <strong className="text-amber-300">Risposta scientifica (Principio SAID — Adattamento Specifico allo Stimolo):</strong> sì, perdi il picco massimo di volume estetico costruito in sala pesi perché il lavoro fisico quotidiano è uno sforzo di <strong>resistenza continua a bassa-media intensità ed economia energetica</strong>, mentre l&apos;ipertrofia massimale richiede <strong>tensione meccanica elevata sulle fibre rapide (Tipo IIa / IIx)</strong> vicine al cedimento. Ecco cosa succede esattamente al corpo se passi solo al lavoro fisico:
                </p>
                <ul className="space-y-1.5 list-disc pl-5 pt-1 text-[11px] text-gray-200">
                  <li>
                    <strong className="text-cyan-300">Più Capillari &amp; Mitocondri (Economia Energetica):</strong> per farti reggere 8 ore senza crollare, il corpo potenzia le fibre lente ossidative (Tipo I), moltiplica i capillari (<em>angiogenesi</em>) e i mitocondri. Diventi molto più resistente alla fatica e al consumo glucidico.
                  </li>
                  <li>
                    <strong className="text-amber-300">Ridimensionamento Fibre Tipo IIx &amp; Stato Asciutto:</strong> senza carichi pesanti progressivi, il corpo &quot;snellisce&quot; leggermente le fibre esplosive troppo costose da mantenere, ma resti <strong>molto asciutto, definito, con ossa dense e tendini d&apos;acciaio</strong>.
                  </li>
                  <li>
                    <strong className="text-emerald-300">Scudo Permanente dei Mionuclei (Memoria Muscolare):</strong> tutto il lavoro fatto in palestra da giovane ha inserito nuovi nuclei cellulari (<em>mionuclei</em>) dentro le tue fibre muscolari. Questi mionuclei <strong>non spariscono mai</strong>: se torni a fare un richiamo coi pesi anche dopo anni di solo lavoro manuale, riprendi la massa piena in poche settimane anziché in anni!
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-950/25 border border-rose-500/35 space-y-2">
                <strong className="text-rose-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  I 2 Pericoli del Lavoro Manuale Senza Richiami Mirati
                </strong>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">Cortisolo cronico &amp; fatica nervosa:</strong> nei giorni in cui rientri stanco morto dal lavoro, fare 100 flessioni o serie a cedimento è <strong>vietato</strong> (alza cortisolo, peggiora la glicemia e blocca il recupero).
                  </li>
                  <li>
                    <strong className="text-white">Usura Asimmetrica:</strong> sul lavoro usi sempre più un lato. Servono esercizi compensativi puliti per bilanciare spalle e schiena.
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-2">
                <strong className="text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  La Strategia del &quot;Richiamo Minimo&quot; (Minimum Effective Dose)
                </strong>
                <p>
                  Il lavoro attivo copre già i 10.000 passi e il cardio. Ti bastano <strong>2–3 richiami brevi a settimana (25–35 min)</strong> con carichi controllati (manubri o corpo libero a 2–3 ripetizioni di margine dal cedimento) per dare il segnale di tensione pesante e salvare massa, forza e simmetria senza bruciarti.
                </p>
              </div>

              {/* 3 Età */}
              <div className="space-y-2.5 pt-1">
                <strong className="text-cyan-300 block uppercase tracking-wider text-[11px]">
                  Come Cambia la Gestione nelle 3 Fasi della Vita (con Diabete)
                </strong>

                <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-400/40 space-y-1">
                  <strong className="text-emerald-300 block">1. Giovane (16–25 anni · Costruzione + Picco Osseo)</strong>
                  Recupero fulmineo e picco ormonale: costruisci mionuclei e capitale osseo permanente. Col lavoro fisico tieni zuccheri rapidi a portata di mano per prevenire ipoglicemie ritardate ed evita il cedimento distruttivo quando sei già sfinito.
                </div>

                <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-400/40 space-y-1">
                  <strong className="text-amber-300 block">2. Adulto (30–50 anni · Difesa Massa, Tendini &amp; Cortisolo)</strong>
                  Lo stress lavorativo alza cortisolo e glicemia; usa il lavoro come consumo glucidico quotidiano + 2–3 richiami brevi settimanali + mobilità attiva e core/glutei per blindare schiena e tendini.
                </div>

                <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-400/40 space-y-1">
                  <strong className="text-cyan-300 block">3. Anziano (60–70+ anni · Rendita Biologica &amp; Zero Usura)</strong>
                  Niente massimali né cedimenti: bastano pesi moderati, elastici, mobilità e camminate/bici per tenere elastico il collagene, aperta la microcircolazione e sfruttare i muscoli costruiti da giovane come scudo salva-glicemia (70–80% della struttura intatta).
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 3. DIABETE SUL LUNGO PERIODO: COSA SUCCEDE SCIENTIFICAMENTE        */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'diabete_prevenzione') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <HeartPulse className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 block">
                  Sezione 3 · Scienza Specifica per Chi Ha il Diabete
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Cosa Succede Col Diabete Nel Lungo Periodo (Controllo Buono vs Sbalzi) &amp; Scudi Biologici
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-rose-500/35 space-y-4 bg-gradient-to-br from-rose-950/25 via-black/80 to-amber-950/20 text-xs text-gray-200 leading-relaxed">
              <p>
                Con il diabete, la differenza tra invecchiare fragili e invecchiare al top dipende da due parole chiave: <strong className="text-white">Time in Range (ore passate in glicemia buona)</strong> e <strong className="text-emerald-300">variabilità glicemica bassa</strong> (pochi picchi violenti su e giù). Se mantieni la glicemia ben gestita, la stragrande maggioranza dei rischi cronici si riduce quasi al livello di una persona senza diabete — e con lo sport superi nettamente qualsiasi sedentario! Ecco i 4 meccanismi reali da conoscere:
              </p>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-rose-500/30 space-y-1.5">
                <strong className="text-rose-300 block uppercase tracking-wider text-[11px]">
                  1. Glicazione del Collagene (AGEs) — L&apos;Effetto &quot;Caramello&quot; su Tendini, Ossa &amp; Pelle
                </strong>
                <p>
                  Quando lo zucchero nel sangue resta alto per tante ore, si lega spontaneamente alle proteine del collagene formando <strong>AGEs (Advanced Glycation End-products)</strong>: ponti rigidi che irrigidiscono tendini, spalle, mani, fascia plantare, dischi della schiena e matrice ossea.
                  <br />
                  <strong className="text-emerald-300">Come lo blocchi:</strong> evitando picchi prolungati sopra i <span className="tabular-nums">180 mg/dL</span> + facendo movimento e mobilità articolare che accelerano il ricambio del collagene vecchio.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-amber-500/30 space-y-1.5">
                <strong className="text-amber-300 block uppercase tracking-wider text-[11px]">
                  2. Microcircolazione, Endotelio &amp; Tempi di Recupero
                </strong>
                <p>
                  Gli sbalzi glicemici generano stress ossidativo che riduce l&apos;<strong>Ossido Nitrico (NO)</strong>, la molecola che tiene dilatati i capillari microscopici (occhi, reni, nervi periferici, cuoio capelluto, gengive e pelle). Con il diabete la riparazione di micro-ferite o tendini infiammati richiede un filo più di rispetto nei tempi di recupero.
                  <br />
                  <strong className="text-emerald-300">Come lo blocchi:</strong> i <strong>10.000 passi quotidiani e l&apos;allenamento aerobico</strong> stimolano proprio la produzione di Ossido Nitrico e mantengono puliti ed elastici tutti i capillari!
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-1.5">
                <strong className="text-emerald-300 block uppercase tracking-wider text-[11px]">
                  3. Il Superpotere del Muscolo: Trasportatori GLUT4 Indipendenti dall&apos;Insulina
                </strong>
                <p>
                  Quando un muscolo si contrae (pesi, calisthenics, camminata, bici), porta in superficie i trasportatori <strong>GLUT4</strong> che assorbono glucosio dal sangue <strong>senza aver bisogno di insulina</strong>, aumentando la sensibilità insulinica per <strong className="tabular-nums">24–48 ore</strong>. Più muscoli mantieni da adulto e da anziano, più grande è il tuo &quot;serbatoio spugna&quot; anti-picchi.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5">
                <strong className="text-cyan-300 block uppercase tracking-wider text-[11px]">
                  4. Variabilità Glicemica &amp; Controlli Medici Furbi Nel Tempo
                </strong>
                <p>
                  Non conta solo la media (HbA1c), conta anche avere meno &quot;montagne russe&quot; tra ipo e iperglicemie (perché gli sbalzi rapidi creano più stress ossidativo cellulare). Nel diabete autoimmune (Tipo 1) è inoltre utile controllare negli esami annuali di routine con il diabetologo anche <strong>Vitamina D, Ferritina, Funzione Tiroidea (TSH), B12, Microalbuminuria e Fondo Oculare</strong>: così previeni qualsiasi carenza silenziosa decenni prima che dia fastidio.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 4. OSSIGENO, SATURAZIONE & PERCHÉ I VECCHI DURANO PIÙ IN BICI     */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'ossigeno_bici') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <Wind className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
                  Sezione 4 · Respirazione, Catena dell&apos;Ossigeno &amp; Fisiologia Bici
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Ossigeno, Saturazione (SpO₂ vs VO₂max), Diabete &amp; Perché gli Anziani Durano in Bici
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-sky-500/35 space-y-4 bg-gradient-to-br from-sky-950/25 via-black/80 to-indigo-950/20 text-xs text-gray-200 leading-relaxed">
              {/* 4.1 Ossigeno e Saturazione */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-sky-400/30 space-y-2.5">
                <strong className="text-sky-300 block uppercase tracking-wider text-[11px]">
                  4.1 Ossigeno e Saturazione: La Differenza Tra SpO₂ (Saturimetro) e Vero Ossigeno Nei Muscoli
                </strong>
                <p>
                  Molti guardano solo la <strong className="text-white">Saturazione (SpO₂)</strong> sul dito (valore normale sano <strong className="tabular-nums text-emerald-300">95% – 99%</strong>), che misura quanta <em>emoglobina</em> nel sangue ha caricato ossigeno dai polmoni. Ma avere 98% sul dito è solo il &quot;camion carico&quot;: per far arrivare energia alle cellule con l&apos;età serve che funzioni tutta la catena a 4 anelli:
                </p>
                <ol className="space-y-1 list-decimal pl-5">
                  <li><strong>Polmoni (Ventilazione):</strong> scambiano ossigeno negli alveoli ed espellono CO₂.</li>
                  <li><strong>Cuore (Gittata Cardiaca):</strong> pompa il sangue ossigenato; se è allenato pompa più sangue a ogni battito (frequenza a riposo più bassa e cuore forte).</li>
                  <li><strong>Capillari &amp; Rilascio Emoglobina (Microcircolo):</strong> i vasi devono dilatarsi grazie all&apos;Ossido Nitrico e l&apos;emoglobina deve cedere facilmente l&apos;ossigeno alle fibre.</li>
                  <li><strong>Mitocondri (Centrali Energetiche):</strong> usano quell&apos;ossigeno per produrre energia pulita (ATP) senza accumulare acido lattico.</li>
                </ol>
                <p className="text-cyan-200 bg-cyan-500/10 border border-cyan-500/25 rounded-xl p-2.5">
                  <strong>Cosa succede con l&apos;età (e cosa fa l&apos;allenamento):</strong> nei sedentari la capacità massima di usare ossigeno (VO₂max) crolla di circa il <strong className="tabular-nums">10% ogni 10 anni</strong> dopo i 30 anni perché diminuiscono capillari e mitocondri. In chi cammina 10.000 passi e fa cardio costante avviene il processo opposto: <strong>angiogenesi</strong> (nascita di nuovi capillari) e <strong>biogenesi mitocondriale</strong> (molti più mitocondri nelle cellule), mantenendo a 65 anni l&apos;ossigenazione di un giovane!
                </p>
              </div>

              {/* 4.2 Diabete + Ossigeno */}
              <div className="p-3.5 rounded-2xl bg-rose-950/30 border border-rose-500/35 space-y-2">
                <strong className="text-rose-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <HeartPulse className="w-4 h-4 text-rose-400 shrink-0" />
                  4.2 Fattore Diabete su Emoglobina (HbA1c), Capillari &amp; Ossigeno
                </strong>
                <p>
                  L&apos;esame più famoso del diabete, l&apos;<strong>emoglobina glicata (HbA1c)</strong>, misura proprio quanto zucchero si è legato all&apos;emoglobina che trasporta l&apos;ossigeno:
                </p>
                <ul className="space-y-1 list-disc pl-5">
                  <li>
                    Se un diabetico ha HbA1c molto alta per anni, l&apos;emoglobina glicata trattiene l&apos;ossigeno un po&apos; più stretto cedendolo con più fatica ai muscoli, e l&apos;iperglicemia restringe i micro-capillari abbassando l&apos;Ossido Nitrico.
                  </li>
                  <li>
                    <strong className="text-emerald-300">Perché tu tenendola buona stai protetto:</strong> con una HbA1c ben controllata e cardio regolare, la tua saturazione e il rilascio di ossigeno ai tessuti restano identici a quelli di un atleta non diabetico, tenendo tutti i capillari dilatati, puliti ed efficienti.
                  </li>
                </ul>
              </div>

              {/* 4.3 Perché i vecchi sembrano durare più in bici */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-emerald-400/35 space-y-2.5">
                <strong className="text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <Bike className="w-4 h-4 text-emerald-400 shrink-0" />
                  4.3 Perché i &quot;Vecchi&quot; Sembrano Durare Più in Bici? (Spiegazione Scientifica Reale)
                </strong>
                <p>
                  Non è una tua impressione: in fisiologia dello sport è un fatto noto! Ecco i <strong>4 motivi scientifici precisi</strong> per cui un 60–70enne allenato in bici spesso stacca o resiste più ore di un ventenne:
                </p>
                <ol className="space-y-1.5 list-decimal pl-5">
                  <li>
                    <strong className="text-white">Fibre Lente (Tipo I) immuni all&apos;età vs Fibre Rapide (Tipo II):</strong> invecchiando il corpo perde soprattutto le fibre muscolari rapide ed esplosive (quelle dello scatto o del salto), mentre le <strong>fibre lente ossidative di Tipo I</strong> — ricchissime di mitocondri e usate nella pedalata costante — resistono incredibilmente anche oltre i 70 anni!
                  </li>
                  <li>
                    <strong className="text-cyan-300">Motore a Grassi &amp; Risparmio di Glicogeno (Adattamento di decenni):</strong> chi pedala da 20–40 anni ha sviluppato una rete enorme di capillari e mitocondri che permette di bruciare prevalentemente <strong>acidi grassi</strong> a ritmo sostenuto invece di bruciare subito gli zuccheri. Il giovane inesperto spinge troppo, accumula acido lattico, finisce le scorte di glicogeno muscolare e &quot;scoppia&quot; dopo un&apos;ora; l&apos;anziano esperto va avanti 4 ore con lo stesso passo fluido.
                  </li>
                  <li>
                    <strong className="text-amber-300">Zero Impatto Articolare + Pacing Mentale:</strong> sulla sella il peso del corpo non grava su ginocchia e caviglie come nella corsa, e gli anziani conoscono esattamente la propria soglia restando appena sotto al limite aerobico senza strappi inutili.
                  </li>
                  <li>
                    <strong className="text-rose-300">⚠️ Attenzione al &quot;Paradosso del Solo Bici&quot; (Perché TU devi fare SIA pesi SIA cardio):</strong> molti ciclisti anziani hanno gambe infinite in sella e cuore d&apos;acciaio, ma se fanno <em>solo</em> bici (zero pesi) hanno parte superiore debole, fibre Tipo II atrofizzate e ossa della colonna/femore meno dense perché in bici manca il carico di gravità! Tu combinando <strong>Pesi (ossa + fibre Tipo II) + Passi/Bici (mitocondri + capillari)</strong> costruisci il corpo completo al 100%.
                  </li>
                </ol>
                <p className="text-[11px] text-rose-200 bg-rose-500/10 border border-rose-500/25 rounded-xl p-2">
                  <strong>Nota Bici + Diabete:</strong> pedalare per 1–3 ore attiva continuamente i trasportatori GLUT4 senza insulina, abbassando la glicemia sia durante sia nelle ore dopo. Con il microinfusore serve pianificare con attenzione (riduzione basale temporanea se indicata dal tuo schema medico + controllo CGM frequente + carboidrati rapidi pronti in tasca).
                </p>
              </div>

              {/* 4.4 Protocollo Pratico Ossigenazione */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-sky-400/35 space-y-1.5">
                <strong className="text-sky-300 block uppercase tracking-wider text-[11px]">
                  4.4 Cosa Mettere in Pratica Ogni Settimana per Ossigeno e Capillari al Top
                </strong>
                <ul className="space-y-1 list-disc pl-5">
                  <li>
                    <strong className="text-white">Cardio in &quot;Zona 2&quot; + 10.000 Passi:</strong> almeno 2–3 volte a settimana fai 30–45 minuti di camminata veloce in pendenza, bici o cyclette a ritmo costante in cui riesci ancora a parlare ma con respiro profondo. È la zona esatta che moltiplica i mitocondri e apre nuovi capillari!
                  </li>
                  <li>
                    <strong className="text-white">Respira dal Naso (Produzione Naturale di Ossido Nitrico):</strong> durante la giornata, camminando e finché riesci nell&apos;allenamento aerobico, respira dal naso (non a bocca aperta): i seni paranasali producono naturalmente <strong>Ossido Nitrico (NO)</strong> che viene aspirato nei polmoni dilatando bronchi e vasi e migliorando l&apos;assorbimento di ossigeno fino al 10–15%.
                  </li>
                  <li>
                    <strong className="text-white">Zero Fumo / Zero Svapo &amp; Controllo Ferro:</strong> il monossido di carbonio occupa i posti dell&apos;ossigeno sull&apos;emoglobina (cosa doppiamente dannosa per i capillari di chi ha il diabete), e senza buona ferritina l&apos;emoglobina cala.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 5. PREVENZIONE CAPELLI NEGLI ANNI (FOLLICOLI, MICROCIRCOLO & DIABETE) */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'capelli_prevenzione') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400 block">
                  Sezione 5 · Salute Follicolare a Lungo Termine
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Prevenzione Capelli Negli Anni: Cosa Succede ai Follicoli, Diabete &amp; Protocollo Pratico
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-teal-500/35 space-y-4 bg-gradient-to-br from-teal-950/25 via-black/80 to-cyan-950/20 text-xs text-gray-200 leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2">
                <strong className="text-teal-300 block uppercase tracking-wider text-[11px]">
                  5.1 Cosa Succede Scientificamente ai Capelli Invecchiando
                </strong>
                <p>
                  Ogni follicolo pilifero è alimentato alla base da un minuscolo gomitolo di capillari chiamato <strong>papilla dermica</strong> e attraversa cicli continui: <em>Anagen</em> (crescita, 2–6 anni), <em>Catagen</em> (transizione) e <em>Telogen</em> (riposo/caduta fisiologica). Con il passare dei decenni avvengono 3 fenomeni fisiologici:
                </p>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">Riduzione della fase Anagen &amp; del diametro:</strong> con l&apos;età le cellule della matrice si dividono più lentamente, la fase di crescita si accorcia e il diametro del singolo fusto può assottigliarsi gradualmente (senescenza follicolare).
                  </li>
                  <li>
                    <strong className="text-white">Microcircolo e fibrosi perifollicolare:</strong> se la guaina di collagene attorno al follicolo si irrigidisce o arrivano meno sangue e ossigeno ai capillari del cuoio capelluto, il bulbo riceve meno aminoacidi, ferro e ossigeno.
                  </li>
                  <li>
                    <strong className="text-white">Fattore genetico (DHT) vs Telogen Effluvium:</strong> se in famiglia c&apos;è predisposizione genetica all&apos;alopecia androgenetica, il DHT miniaturizza progressivamente i follicoli di tempie/vertex (che è diverso dalla caduta temporanea da stress/carenze, dove invece il follicolo è vivo e recuperabile).
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-950/30 border border-rose-500/35 space-y-2">
                <strong className="text-rose-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <HeartPulse className="w-4 h-4 text-rose-400 shrink-0" />
                  5.2 Fattore Diabete sui Capelli (Cosa Cambia per Te)
                </strong>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">Capillari della testa &amp; AGEs:</strong> la papilla dermica è fatta di micro-capillari delicatissimi e circondata da collagene. Glicemie alte croniche riducono il flusso di sangue alla radice e irrigidiscono la guaina del follicolo via AGEs, portando nei diabetici scompensati a capelli più fini e crescita più lenta.
                  </li>
                  <li>
                    <strong className="text-white">Collegamento Tiroide / Ferritina / Vitamina D:</strong> nel Diabete Tipo 1 è clinicamente molto importante controllare ogni anno nelle analisi TSH (tiroide), Ferritina e Vitamina D, perché eventuali carenze o sbalzi tiroidei si riflettono subito su densità e spessore dei capelli.
                  </li>
                  <li>
                    <strong className="text-emerald-300">Perché tu parti avvantaggiato:</strong> tenendo la glicemia ben gestita, camminando/allenandoti ogni giorno (ossido nitrico nei capillari) e mangiando proteine adeguate, proteggi la papilla dermica esattamente come quella di un non diabetico!
                  </li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-teal-400/35 space-y-2">
                <strong className="text-teal-300 block uppercase tracking-wider text-[11px]">
                  5.3 Protocollo Pratico di Prevenzione Capelli per Tutta la Vita
                </strong>
                <ol className="space-y-1.5 list-decimal pl-5">
                  <li>
                    <strong className="text-white">Stimolazione Vascolare Semplice (Zero Costi):</strong> 2–3 volte a settimana (o mentre fai lo shampoo), fai <strong>2–3 minuti di massaggio lento coi polpastrelli</strong> muovendo la pelle del cuoio capelluto (senza sfregare con le unghie!) per aumentare il flusso locale di sangue ed elasticità della guaina.
                  </li>
                  <li>
                    <strong className="text-white">Cute sempre pulita, zero infiammazione:</strong> evita accumuli di cere/polveri per troppi giorni (usando il tuo Head &amp; Shoulders nei giorni di lavaggio) e non puntare mai aria bollente diretta sulla pelle della testa.
                  </li>
                  <li>
                    <strong className="text-white">Nutrizione &amp; No Fumo:</strong> garantisci sempre proteine/cisteina, ferro + Vitamina C, zinco, biotina, Omega-3 e sonno da 8 ore; la nicotina restringe brutalmente i micro-capillari del cuoio capelluto accelerando la miniaturizzazione.
                  </li>
                  <li>
                    <strong className="text-amber-300">Regola d&apos;oro se un domani notassi stempiatura/diradamento reale:</strong> se dopo i 20–25 anni dovessi mai vedere arretramento progressivo delle tempie o della corona rispetto alle foto di oggi, non perdere anni dietro a lozioni inutili da supermercato: vai subito da un <strong>dermatologo tricologo</strong> per una tricoscopia (prima si interviene sui follicoli ancora attivi, più risultati si salvano).
                  </li>
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 6. COLLAGENE TOTALE, ALIMENTI DI OGNI TIPO & DIETA ANTI-ETÀ       */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'collagene_dieta') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Utensils className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 block">
                  Sezione 6 · Scienza del Collagene, Tutti gli Alimenti &amp; Piano Pratico
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Cos&apos;è Davvero il Collagene, Tutti gli Alimenti Chiave &amp; Come Seguire la Dieta (con Diabete)
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-purple-500/35 space-y-4 bg-gradient-to-br from-purple-950/25 via-black/80 to-indigo-950/20 text-xs text-gray-200 leading-relaxed">
              {/* 6.1 Cos'è scientificamente il collagene */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-purple-400/35 space-y-2.5">
                <strong className="text-purple-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <FlaskConical className="w-4 h-4 text-purple-400 shrink-0" />
                  6.1 Cos&apos;è Scientificamente il Collagene (e Perché Regge Tutto il Corpo)
                </strong>
                <p>
                  Il <strong className="text-white">Collagene</strong> è la proteina strutturale più abbondante del tuo corpo (rappresenta circa il <strong className="tabular-nums">30%</strong> di tutte le proteine umane!). Immaginalo come le corde d&apos;acciaio flessibili e la &quot;colla biologica&quot; che tengono insieme ogni tessuto:
                </p>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-cyan-300">Struttura a Tripla Elica:</strong> tre filamenti proteici attorcigliati stretti tra loro come una corda da alpinismo, ricchissimi di tre aminoacidi rari nelle normali bistecche di muscolo: <strong>Glicina (~33%)</strong>, <strong>Prolina</strong> e <strong>Idrossiprolina</strong>.
                  </li>
                  <li>
                    <strong className="text-white">I 3 Tipi Principali nel Tuo Corpo:</strong> <strong>Tipo I</strong> (~90% del totale: pelle, tendini, legamenti, 35% dell&apos;osso elastico, guaina dei capelli); <strong>Tipo II</strong> (cartilagine ammortizzante di ginocchia, spalle e dischi vertebrali); <strong>Tipo III</strong> (pareti elastiche di arterie, vasi sanguigni e pelle giovane).
                  </li>
                  <li>
                    <strong className="text-rose-300">Cosa lo distrugge con l&apos;età + Diabete:</strong> dai 25 anni la sintesi cala di circa l&apos;<strong className="tabular-nums">1%</strong> ogni anno; sole UV senza protezione, fumo, cortisolo cronico e soprattutto la <strong>glicazione (AGEs da glicemie alte o cibi bruciacchiati)</strong> incollano tra loro le corde della tripla elica rendendo tendini rigidi, pelle meno elastica e vasi più duri.
                  </li>
                </ul>
              </div>

              {/* 6.2 Come funziona l'assorbimento */}
              <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-400/35 space-y-2">
                <strong className="text-indigo-300 block uppercase tracking-wider text-[11px]">
                  6.2 Come Viene Assorbito Davvero (La Verità Scientifica su Cibo, Brodo &amp; Vitamina C)
                </strong>
                <p>
                  Quando mangi collagene (es. brodo d&apos;ossa, pelle di pesce, cartilagini o peptidi), il tuo intestino non lo manda intero nel ginocchio: lo spezza in singoli aminoacidi (Glicina/Prolina) e in piccoli frammenti di 2–3 aminoacidi (<em>dipeptidi/tripeptidi</em> come Prolina-Idrossiprolina). Questi frammenti arrivano nel sangue e danno ai <strong>fibroblasti</strong> (le fabbriche cellulari di tendini, ossa e pelle) sia i mattoni sia l&apos;ordine chimico di produrre nuovo collagene!
                </p>
                <p className="text-amber-200 bg-amber-500/10 border border-amber-500/30 rounded-xl p-2.5">
                  <strong>⚠️ Regola Biochimica Obbligatoria:</strong> per chiudere e stabilizzare la tripla elica del collagene serve l&apos;enzima <em>prolil-idrossilasi</em>, che funziona <strong>SOLO in presenza di Vitamina C</strong> (e di <strong>Rame + Zinco</strong> per l&apos;enzima <em>lisil-ossidasi</em> che cuce le fibre tra loro). Mangiare proteine o collagene senza Vitamina C fresca è come avere i mattoni senza il cemento!
                </p>
              </div>

              {/* 6.3 Tutti gli Alimenti di Ogni Tipo */}
              <div className="space-y-2.5">
                <strong className="text-purple-300 block uppercase tracking-wider text-[11px] pl-1">
                  6.3 Enciclopedia di Tutti gli Alimenti Chiave (Collagene, Ossa, Capelli, Ossigeno &amp; Anti-AGEs)
                </strong>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-black/55 border border-purple-500/30 space-y-1">
                    <strong className="text-purple-300 block">1. Fonti Dirette di Collagene &amp; Glicina</strong>
                    <p>
                      <strong>Brodo d&apos;ossa lento</strong> (ossa con midollo/articolazioni cotte 6–12h con 1 cucchiaio di aceto per estrarre minerali e gelatina), tagli con tessuto connettivo (ossobuco, spezzatino, fusi/sovracosce di pollo con pelle), <strong>pesce con pelle</strong> o lische morbide (salmone con pelle, sardine), gelatina alimentare pura (senza zucchero).
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-black/55 border border-emerald-500/30 space-y-1">
                    <strong className="text-emerald-300 block">2. Proteine Nobili (Prolina, Lisina &amp; Zolfo)</strong>
                    <p>
                      <strong>Uova intere ben cotte</strong> (ricchissime nella membrana/albume di prolina, lisina, zolfo e nel tuorlo di Vit. K2 e biotina), pollo/tacchino, carne rossa magra (1 volta/sett. per ferro eme + carnosina anti-glicazione!), yogurt greco/ricotta/parmigiano, legumi (lenticchie, ceci).
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-black/55 border border-amber-500/30 space-y-1">
                    <strong className="text-amber-300 block">3. Attivatori Obbligatori (Vit. C, Rame, Zinco, K2)</strong>
                    <p>
                      <strong>Vitamina C:</strong> kiwi, peperoni crudi, agrumi, fragole, broccoli al vapore, succo di limone fresco.
                      <br />
                      <strong>Zinco &amp; Rame:</strong> semi di zucca, cacao amaro 85%+, anacardi, molluschi, 1–2 noci brasiliane (selenio).
                      <br />
                      <strong>Zolfo vegetale:</strong> aglio, cipolla, cavolfiore, rucola, broccoli (proteggono sia collagene sia cheratina dei capelli).
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-black/55 border border-cyan-500/30 space-y-1">
                    <strong className="text-cyan-300 block">4. Grassi Anti-Infiammatori &amp; Protettori Vascolari</strong>
                    <p>
                      <strong>Omega-3 (EPA/DHA):</strong> salmone, sgombro, alici/sardine 2–3 volte a settimana, più noci e semi di chia/lino.
                      <br />
                      <strong>Olio EVO a crudo</strong> (polifenoli che difendono le arterie e la pelle dallo stress ossidativo) + avocado.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6.4 Cottura e Regole Anti-AGEs per chi ha il Diabete */}
              <div className="p-3.5 rounded-2xl bg-rose-950/25 border border-rose-400/35 space-y-2">
                <strong className="text-rose-300 block uppercase tracking-wider text-[11px]">
                  6.4 Segreto Fondamentale Col Diabete: Come Cucinare &amp; Spezie Anti-Glicazione (Meno AGEs nel Piatto)
                </strong>
                <p>
                  Gli AGEs che rovinano il collagene non vengono solo dalla glicemia alta, ma anche da come cucini! Carne o cibi bruciacchiati alla griglia ad altissime temperature a secco o fritti contengono già miliardi di AGEs pronti a entrare nel sangue.
                </p>
                <ul className="space-y-1 list-disc pl-5">
                  <li>
                    <strong className="text-white">Preferisci cotture umide o dolci:</strong> bollitura, vapore, forno coperto, padella a fuoco medio-basso o stufato (riducono gli AGEs del cibo fino al <strong className="tabular-nums">70–80%</strong> rispetto al bruciacchiato/fritto!).
                  </li>
                  <li>
                    <strong className="text-emerald-300">Trucco del Limone / Aceto prima di cuocere:</strong> marinare carne o pesce con succo di limone o aceto prima della cottura dimezza la formazione di AGEs sulla superficie.
                  </li>
                  <li>
                    <strong className="text-amber-300">Spezie ed Erbe Anti-AGEs:</strong> rosmarino, origano, timo, curcuma + pizzico di pepe nero e cannella contengono polifenoli naturali che rallentano la glicazione del collagene.
                  </li>
                </ul>
              </div>

              {/* 6.5 Come seguire l'alimentazione nella vita reale */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-lime-400/35 space-y-2.5">
                <strong className="text-lime-300 block uppercase tracking-wider text-[11px]">
                  6.5 Come Seguire Questa Alimentazione Ogni Giorno (Schema Pratico + Ordine Anti-Picco)
                </strong>
                <p>
                  <strong className="text-white">La regola più potente a ogni pasto (Sequenza nel Piatto):</strong> mangia prima una piccola porzione di <strong>Verdure/Fibre</strong>, poi <strong>Proteine e Grassi sani</strong>, e per ultimi i <strong>Carboidrati</strong> (pasta, riso, pane, patate). Questo semplice ordine rallenta l&apos;assorbimento dello zucchero nell&apos;intestino, appiattisce il picco glicemico dopo mangiato (molti meno AGEs su collagene, ossa ed emoglobina!) e rende più facile gestire il bolo!
                </p>

                <div className="space-y-1.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <strong className="text-white block">☀️ Colazione:</strong> 2–3 uova intere cotte (proteine, prolina, biotina, K2) oppure yogurt greco + avena/pane integrale + 1 kiwi o agrume (Vitamina C per il collagene e i vasi).
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <strong className="text-white block">🍽️ Pranzo:</strong> Verdure di stagione con olio EVO a crudo e limone → carne magra/pollo/legumi → pasta/riso in porzione calcolata per la tua glicemia (evita caffè attaccato al pranzo per non bloccare il ferro).
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <strong className="text-white block">⚡ Spuntino:</strong> 15–20g semi di zucca (zinco/magnesio) + 1–2 noci brasiliane (selenio) o noci normali + yogurt greco o fonte proteica leggera; 1 quadratino di cioccolato fondente 85%+ (rame e polifenoli per l&apos;ossido nitrico).
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <strong className="text-white block">🌙 Cena:</strong> 2–3 sere/sett. pesce grasso con pelle (salmone, sgombro, sardine per Omega-3 + collagene marino + Vit. D); altre sere tagli lenti/spezzatino/pollo con cartilagine o brodo d&apos;ossa caldo + verdure ricche di Vit. C/zolfo (broccoli, peperoni, cavolfiore).
                  </div>
                </div>

                <p className="text-[11px] text-purple-200 bg-purple-500/10 border border-purple-500/25 rounded-xl p-2.5">
                  <strong>E sugli integratori di Collagene Idrolizzato?</strong> Se già mangi abbastanza proteine totali, carne/pesce con connettivo/pelle e Vitamina C, non sono obbligatori. La ricerca sportiva mostra comunque che <strong className="tabular-nums">10–15g</strong> di peptidi di collagene idrolizzato (senza zuccheri aggiunti) + <strong className="tabular-nums">50mg</strong> di Vitamina C presi 30–60 minuti prima di allenamenti per tendini/mobilità stimolano la sintesi di collagene tendineo; prima di aggiungere qualsiasi integratore fisso, confrontati sempre col tuo diabetologo.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 7. DIGIUNO MATTUTINO, LUCE SOLARE & VITAMINA D SICURA             */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'luce_vitamina_d') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                <Sun className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-yellow-400 block">
                  Sezione 7 · Cronobiologia, Ormoni Mattutini &amp; Fotoprotezione
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Digiuno Mattutino, Luce Solare &amp; Vitamina D Sicura (Senza Rovinare la Pelle)
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-yellow-500/35 space-y-4 bg-gradient-to-br from-yellow-950/20 via-black/80 to-amber-950/20 text-xs text-gray-200 leading-relaxed">
              {/* 7.1 Uscire al mattino senza colazione */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-amber-400/35 space-y-2">
                <strong className="text-amber-300 block uppercase tracking-wider text-[11px]">
                  7.1 Cosa Succede Quando Esci la Mattina Senza Colazione (Fisiologia + Diabete)
                </strong>
                <p>
                  Quando ti svegli dopo 8–10 ore di digiuno notturno ed esci di casa a piedi senza fare colazione, il tuo corpo attiva una cascata ormonale precisa:
                </p>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">Cortisolo &amp; GH mattutini (CAR — Cortisol Awakening Response):</strong> tra le 6:00 e le 8:30 il cortisolo e l&apos;ormone della crescita (GH) salgono naturalmente per svegliare il sistema nervoso, aumentare la pressione arteriosa e liberare grassi dal tessuto adiposo (<strong className="text-emerald-300">lipolisi mattutina</strong>) + glucosio dal fegato.
                  </li>
                  <li>
                    <strong className="text-cyan-300">Camminata leggera a digiuno (GLUT4):</strong> andare a scuola/muoversi a passo normale a digiuno usa principalmente acidi grassi come carburante e stimola lievemente i trasportatori muscolari GLUT4, aiutando a smaltire eventuali picchi dell&apos;alba senza alzare lo stress (a patto di avere sonno adeguato).
                  </li>
                  <li>
                    <strong className="text-rose-300">Cosa cambia col Diabete Tipo 1:</strong> in una persona non diabetica il pancreas copre automaticamente il glucosio rilasciato dal fegato al mattino; col Tipo 1, invece, è la tua <strong>insulina basale / Control-IQ</strong> a dover bilanciare la spinta epatica mattutina (altrimenti resti attorno a ~120 o sali lentamente verso metà mattina — vedi guida Diabete per i dettagli completi!). Inoltre, tieni sempre 1–2 bustine di zucchero in tasca durante il tragitto a piedi nel caso il sensore scendesse.
                  </li>
                </ul>
              </div>

              {/* 7.2 Luce solare mattutina & ritmo circadiano */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-yellow-400/35 space-y-2">
                <strong className="text-yellow-300 block uppercase tracking-wider text-[11px]">
                  7.2 Luce Solare Mattutina, Occhi &amp; Orologio Biologico (Melatonina &amp; GH Notturno)
                </strong>
                <p>
                  Prendere luce naturale esterna entro <strong className="tabular-nums">30–60 minuti</strong> dal risveglio (bastano anche <strong className="tabular-nums">10–15 minuti</strong> all&apos;aperto, anche con cielo nuvoloso!) è uno dei segnali biologici più potenti per longevità, ormoni e glicemia:
                </p>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">Fotorecettori Melanopsinici (ipRGCs) &amp; SCN:</strong> all&apos;aperto arrivano <span className="tabular-nums">10.000–30.000+ lux</span> anche col nuvoloso (contro soli ~200–400 lux in casa!). Questa luce colpisce cellule specifiche della retina che avvisano il <strong>Nucleo Soprachiasmatico (SCN)</strong> dell&apos;ipotalamo: <em>&quot;È giorno, sincronizza tutti gli orologi di fegato, muscoli e cellule!&quot;</em>.
                  </li>
                  <li>
                    <strong className="text-emerald-300">Timer del Sonno, Melatonina &amp; GH Notturno:</strong> quel picco di luce mattutina alza subito vigilanza e serotonina e fa partire un conto alla rovescia di ~14–16 ore per rilasciare puntualmente la <strong>Melatonina</strong> la sera. Dormire profondo significa massimo picco notturno di <strong>GH (riparazione tessuti, ossa, collagene)</strong> e sensibilità insulinica molto migliore il giorno dopo!
                  </li>
                  <li>
                    <strong className="text-amber-300">Regola pratica sugli occhi:</strong> NON guardare mai direttamente il sole (danneggia la retina!). Basta camminare normalmente all&apos;aperto senza occhiali da sole scuri (gli occhiali da vista trasparenti vanno bene; attraverso i vetri di casa/auto invece l&apos;effetto è molto ridotto perché il vetro filtra parte dello spettro e dimezza i lux).
                  </li>
                </ul>
              </div>

              {/* 7.3 Chimica reale della Vitamina D: UVB vs UVA */}
              <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-400/35 space-y-2.5">
                <strong className="text-indigo-300 block uppercase tracking-wider text-[11px]">
                  7.3 Scienza Pura della Vitamina D: Raggi UVB (280–315 nm) vs Raggi UVA (315–400 nm)
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/30 space-y-1">
                    <strong className="text-emerald-300 block">☀️ Raggi UVB (280–315 nm) — Fabbrica Vitamina D</strong>
                    <p>
                      Colpiscono il <strong>7-deidrocolesterolo</strong> nella pelle trasformandolo in Pre-Vitamina D₃ → <strong>Colecalciferolo (D₃)</strong>. Poi il fegato lo converte in <strong>25(OH)D</strong> (quello che misuri nel sangue) e i reni (grazie al <strong>Magnesio</strong>) nell&apos;ormone attivo <strong>Calcitriolo (1,25(OH)₂D)</strong> che fissa il calcio nelle ossa e modula il sistema immunitario.
                    </p>
                    <p className="text-amber-200 font-semibold pt-0.5">
                      ⚠️ I vetri di casa e delle finestre bloccano il 100% degli UVB! Inoltre gli UVB passano bene solo quando il sole è abbastanza alto nel cielo.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 border border-rose-500/30 space-y-1">
                    <strong className="text-rose-300 block">🔴 Raggi UVA (315–400 nm) — Zero Vitamina D, Danni al Collagene</strong>
                    <p>
                      Presenti dall&apos;alba al tramonto tutto l&apos;anno (passano anche attraverso nuvole e vetri!). Penetrano in profondità nel derma dove attivano gli enzimi <strong>MMP</strong> che tagliano il <strong>collagene</strong> (foto-invecchiamento precoce, macchie scure e danno ossidativo al DNA), ma producono <strong>ZERO Vitamina D</strong>.
                    </p>
                    <p className="text-cyan-200 font-semibold pt-0.5">
                      💡 Ecco perché prendere sole presto alle 7:00 o tardi alle 18:00 ti dà luce circadiana ma NON sintetizza quasi nessuna Vitamina D!
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/35 text-amber-100">
                  <strong>🔬 Perché Bruciarsi NON Fa Produrre Più Vitamina D (Meccanismo di Auto-Limitazione):</strong> dopo appena 10–20 minuti di UVB su braccia/gambe, la pelle satura il meccanismo e devia la Pre-Vitamina D₃ in eccesso verso isomeri inattivi (<em>lumisterolo</em> e <em>tachisterolo</em>). Restare 2 ore sotto il sole cocente non crea più Vitamina D, ma moltiplica esponenzialmente danni al DNA, distruzione del collagene e rischio melanoma!
                </div>
              </div>

              {/* 7.4 Protocollo pratico sicuro senza rovinare la pelle */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-yellow-400/40 space-y-2">
                <strong className="text-yellow-300 block uppercase tracking-wider text-[11px]">
                  7.4 Protocollo Pratico: Vitamina D al Massimo Con Pelle Protetta Tutta la Vita
                </strong>
                <ol className="space-y-1.5 list-decimal pl-5">
                  <li>
                    <strong className="text-white">Viso Sempre Protetto (Specialmente con Salicilico!):</strong> applica sempre la crema solare <strong>SPF 30–50+</strong> sul viso (e collo), perché il viso ha la pelle più esposta al foto-invecchiamento e all&apos;iperpigmentazione post-brufoli. La Vitamina D prendila esponendo invece <strong>avambracci e polpacci/gambe</strong>!
                  </li>
                  <li>
                    <strong className="text-white">La &quot;Regola dell&apos;Ombra&quot; (Aprile – Settembre):</strong> gli UVB arrivano al suolo solo quando la tua ombra è <strong>più corta o uguale alla tua altezza</strong> (tarda mattinata / fascia centrale). Fai lì <strong>10–15 minuti</strong> (pelle chiara/media) o <strong>15–25 minuti</strong> (pelle olivastra/scura) su braccia e gambe senza crema solare, fermandoti SEMPRE molto prima di qualsiasi rossore (zero eritema!), poi metti SPF 30–50+ o maglietta/ombra.
                  </li>
                  <li>
                    <strong className="text-cyan-300">Il Buco Invernale (Ottobre – Marzo in Italia):</strong> in inverno i raggi del sole arrivano troppo inclinati e l&apos;atmosfera assorbe quasi tutti gli UVB: <strong>anche stando fuori 2 ore al freddo d&apos;inverno non fabbrichi Vitamina D</strong>. In quei mesi contano le scorte estive + pesce grasso (salmone, sgombro, sardine) + tuorlo d&apos;uovo + eventuale integrazione mirata.
                  </li>
                  <li>
                    <strong className="text-emerald-300">Cofattori Obbligatori &amp; Controllo Annuale Col Diabetologo:</strong> per far funzionare la Vitamina D servono <strong>Magnesio</strong> (semi di zucca, mandorle, verdure verdi — senza magnesio la Vitamina D resta bloccata in forma inattiva!) e <strong>Vitamina K2</strong> (tuorli, formaggi stagionati — per mandare il calcio nelle ossa). Inserisci sempre il dosaggio ematico <strong className="text-white">25-OH-Vitamina D</strong> nelle analisi annuali col diabetologo: mantenere livelli ottimali (<strong className="tabular-nums">30–50 ng/mL</strong>) protegge ossa, immunità autoimmune e sensibilità insulinica senza mai rischiare eccessi da fai-da-te.
                  </li>
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* Quick Point-to-Point Footer Navigation when viewing a single section */}
        {activeTab !== 'tutte' && (
          <div className="pt-2 flex items-center justify-between gap-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => handleSelectTab('tutte')}
              className="py-2 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Vedi Tutte le 7 Sezioni
            </button>
            {nextTab && (
              <button
                type="button"
                onClick={() => handleSelectTab(nextTab.id)}
                className="py-2 px-3.5 rounded-xl bg-lime-500/20 hover:bg-lime-500/30 border border-lime-400/40 text-xs font-bold text-lime-200 transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap"
              >
                <span>Prossima: {nextTab.label}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
