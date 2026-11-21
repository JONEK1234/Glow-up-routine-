import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Wind,
  Droplets,
  Layers,
  CheckCircle2,
  Scissors,
  Atom,
  Sun,
  Video,
  ExternalLink,
  TrendingUp,
  FlaskConical,
  ShieldCheck,
  Target,
  ChevronRight,
  AlertTriangle,
  Utensils,
  Clock
} from 'lucide-react';
import { scrollToTop, scrollToElement } from '../../utils/scrollHelper';

interface CapelliMossiTexturedMessyMulletViewProps {
  onBack: () => void;
  initialTab?: string;
  onOpenCrescitaNote?: () => void;
  onOpenCeraCuteNote?: () => void;
}

type MulletTabId =
  | 'tutte'
  | 'piano_azione_finale'
  | 'fisica_spessore'
  | 'crescita_buchi'
  | 'taglio_barbiere'
  | 'prodotti_scienza'
  | 'lavaggio_asciugatura'
  | 'mattina_secco'
  | 'cute_forfora'
  | 'video_ispirazione';

const TAB_CONFIG: { id: MulletTabId; label: string }[] = [
  { id: 'tutte', label: 'Tutte (9)' },
  { id: 'piano_azione_finale', label: '★ Piano d\'Azione Finale' },
  { id: 'fisica_spessore', label: '1. Spessore & Dieta' },
  { id: 'crescita_buchi', label: '2. Crescita & Buchi' },
  { id: 'taglio_barbiere', label: '3. Barbiere & Taglio' },
  { id: 'prodotti_scienza', label: '4. Prodotti & Dosi' },
  { id: 'lavaggio_asciugatura', label: '5. Doccia & Phon' },
  { id: 'mattina_secco', label: '6. Mattina a Secco' },
  { id: 'cute_forfora', label: '7. Cute & Settimana' },
  { id: 'video_ispirazione', label: '8. Video (6)' }
];

function normalizeTabId(raw?: string): MulletTabId {
  if (!raw) return 'tutte';
  const legacyMap: Record<string, MulletTabId> = {
    fisica_prodotti: 'fisica_spessore',
    giorno_lavaggio: 'lavaggio_asciugatura',
    diffusore_pettine: 'lavaggio_asciugatura',
    refresh_mattina: 'mattina_secco'
  };
  if (legacyMap[raw]) return legacyMap[raw];
  const valid = TAB_CONFIG.some((t) => t.id === raw);
  return valid ? (raw as MulletTabId) : 'tutte';
}

const TIKTOK_REFERENCE_GROUPS = [
  {
    groupTitle: 'Riferimenti Taglio, Stile & Diffusore',
    badge: 'Gruppo 1 · Stile & Texture',
    whatToWatch: 'Osserva come i lati siano puliti mentre sopra e dietro restano più lunghi e scalati, e guarda la distanza tra diffusore e testa.',
    links: [
      { label: 'Video Riferimento 1 (Textured Messy Mullet)', url: 'https://vm.tiktok.com/ZN8aJcgs9/' },
      { label: 'Video Riferimento 2 (Mosso & Volume)', url: 'https://vm.tiktok.com/ZN8aJEY9L/' },
      { label: 'Video Riferimento 3 (Forma & Scalatura)', url: 'https://vm.tiktok.com/ZN8aJvVkx/' }
    ]
  },
  {
    groupTitle: 'Ordine Prodotti, Cera / Spray & Pettine',
    badge: 'Gruppo 2 · Styling & Applicazione',
    whatToWatch: 'Guarda la quantità minuscola di prodotto sulle mani, come viene scaldato sui palmi e il movimento leggero solo sulle punte/ciocche esterne.',
    links: [
      { label: 'Video Riferimento 4 (Ordine Prodotti)', url: 'https://vm.tiktok.com/ZN8aJ3R2N/' },
      { label: 'Video Riferimento 5 (Tecnica di Styling)', url: 'https://vm.tiktok.com/ZN8aJCf5d/' }
    ]
  },
  {
    groupTitle: 'Phon Senza Beccuccio & Effetto Mosso Libero',
    badge: 'Gruppo 3 · Asciugatura Rapida',
    whatToWatch: 'Nota come il phon senza beccuccio muove l&apos;aria larga senza schiacciare né tirare il ciuffo dritto verso il basso.',
    links: [
      { label: 'Video Riferimento 6 (Phon Libero senza Beccuccio)', url: 'https://vm.tiktok.com/ZN8aJH8dY/' }
    ]
  }
];

export const CapelliMossiTexturedMessyMulletView: React.FC<
  CapelliMossiTexturedMessyMulletViewProps
> = ({ onBack, initialTab, onOpenCrescitaNote, onOpenCeraCuteNote }) => {
  const [activeTab, setActiveTab] = useState<MulletTabId>(() => normalizeTabId(initialTab));
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (tab: MulletTabId) => {
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
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-teal-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>
        <span className="text-[11px] font-bold text-teal-300 flex items-center gap-1.5 whitespace-nowrap shrink-0">
          <Wind className="w-3.5 h-3.5 text-teal-400" />
          Manuale Pratico · Mosso 2B
        </span>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-teal-400/35 relative overflow-hidden space-y-3 bg-gradient-to-br from-teal-950/40 via-black/85 to-cyan-950/30 shadow-[0_0_30px_rgba(20,184,166,0.16)]">
        <div className="text-[11px] font-semibold text-teal-300 flex flex-wrap items-center gap-2">
          <span>★ Manuale Operativo Completo</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-emerald-300">Capelli Fini Mossi 2B</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-cyan-300">Spiegazione Passo-Passo</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
          Capelli mossi Textured Messy Mullet
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Niente appunti sparsi o frasi vaghe: qui ogni punto ti spiega <strong className="text-teal-300">cosa fare esattamente, con quali gesti, in quale ordine, con che temperatura/velocità, quali dosi usare e cosa mangiare ogni giorno</strong> per avere volume spaziale sopra, fronte coperta senza &quot;buchi&quot; e onde morbide che durano tutto il giorno.
        </p>

        {/* Point Selector Tabs */}
        <div className="pt-2.5 flex flex-wrap gap-1.5 border-t border-white/10">
          <button
            type="button"
            onClick={() => handleSelectTab('tutte')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'tutte'
                ? 'bg-teal-400 text-black shadow-md shadow-teal-400/25'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Tutte (9)</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('piano_azione_finale')}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'piano_azione_finale'
                ? 'bg-gradient-to-r from-amber-300 to-emerald-300 text-black shadow-md shadow-amber-400/30'
                : 'bg-amber-500/20 text-amber-200 hover:bg-amber-500/30 border border-amber-400/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>★ Piano d&apos;Azione Finale</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('fisica_spessore')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'fisica_spessore'
                ? 'bg-cyan-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Atom className="w-3.5 h-3.5" />
            <span>1. Spessore &amp; Dieta</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('crescita_buchi')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'crescita_buchi'
                ? 'bg-emerald-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>2. Crescita &amp; Buchi</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('taglio_barbiere')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'taglio_barbiere'
                ? 'bg-teal-300 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>3. Barbiere &amp; Taglio</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('prodotti_scienza')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'prodotti_scienza'
                ? 'bg-amber-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5" />
            <span>4. Prodotti &amp; Dosi</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('lavaggio_asciugatura')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'lavaggio_asciugatura'
                ? 'bg-sky-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Droplets className="w-3.5 h-3.5" />
            <span>5. Doccia &amp; Phon</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('mattina_secco')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'mattina_secco'
                ? 'bg-lime-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>6. Mattina a Secco</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('cute_forfora')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'cute_forfora'
                ? 'bg-rose-400 text-black font-black'
                : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>7. Cute &amp; Settimana</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectTab('video_ispirazione')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              activeTab === 'video_ispirazione'
                ? 'bg-purple-400 text-black font-black'
                : 'bg-purple-500/15 text-purple-300 hover:text-white border border-purple-500/30'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>8. Video (6)</span>
          </button>
        </div>
      </div>

      <div ref={contentRef} className="space-y-6 scroll-mt-16">
        {/* ================================================================= */}
        {/* ★ PIANO D'AZIONE FINALE + TUTTE LE VARIE COSE (SCIENZA & BUCHINI) */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'piano_azione_finale') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-amber-400/30 pb-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/40">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                  ★ Guida Definitiva Aggiornata · Dal Lavaggio al Ritocco Finale
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Il Piano d&apos;Azione Finale (Sequenza Esatta + Chiusura Buchini Ai Lati) &amp; Scienza Reale
                </h2>
              </div>
            </div>

            {(onOpenCrescitaNote || onOpenCeraCuteNote) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {onOpenCrescitaNote && (
                  <button
                    type="button"
                    onClick={onOpenCrescitaNote}
                    className="p-3 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-between text-left transition-all cursor-pointer active:scale-98"
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 block">
                        Nota Dedicata
                      </span>
                      <span className="text-xs font-extrabold text-white">
                        Messy Hair Quando Crescono &amp; Crema Ricci
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-emerald-300 shrink-0" />
                  </button>
                )}
                {onOpenCeraCuteNote && (
                  <button
                    type="button"
                    onClick={onOpenCeraCuteNote}
                    className="p-3 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-400/40 flex items-center justify-between text-left transition-all cursor-pointer active:scale-98"
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-rose-300 block">
                        Nota Dedicata
                      </span>
                      <span className="text-xs font-extrabold text-white">
                        Cera Opaca, Cuoio Capelluto, Falsa Forfora &amp; Notte
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-rose-300 shrink-0" />
                  </button>
                )}
              </div>
            )}

            {/* BLOCCO 1: SEQUENZA COMPLETA PASSO PER PASSO */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-amber-400/55 space-y-4 bg-gradient-to-br from-amber-950/35 via-black/90 to-emerald-950/25 text-xs text-gray-200 leading-relaxed shadow-[0_0_25px_rgba(245,158,11,0.16)]">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                <strong className="text-amber-300 uppercase tracking-wider text-xs flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-amber-400" />
                  1. Sequenza Completa Passo per Passo (Lavaggio → Ritocco Finale)
                </strong>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-400 text-black">
                  Guida Definitiva
                </span>
              </div>

              <p>
                Divisione netta tra <strong className="text-cyan-300">dietro/sopra (volume pieno e &quot;squadrato&quot; con sale, scrunch, diffusore e polvere)</strong> e <strong className="text-amber-300">davanti/frangia + buchini ai lati (zero prodotti secchi, caduta pulita verso la fronte, diffusore dall&apos;alto a sfioro)</strong>:
              </p>

              {/* Step 1: Lavaggio e preparazione */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-emerald-500/35 space-y-2">
                <strong className="text-emerald-300 block uppercase tracking-wider text-[11px]">
                  1. Lavaggio e Preparazione (Da Bagnati / Tamponati)
                </strong>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">Shampoo &amp; Balsamo:</strong> fai lo shampoo come al solito (se usi il balsamo senza risciacquo, mettilo <strong>solo dietro e sulle lunghezze</strong>, <strong>MAI davanti sulla frangia</strong>).
                  </li>
                  <li>
                    <strong className="text-white">Tampona delicato:</strong> tampona i capelli con l&apos;asciugamano (o t-shirt di cotone) <strong>senza strofinarli forte</strong>, lasciandoli umidi.
                  </li>
                  <li>
                    <strong className="text-cyan-300">Spray al Sale Marino (SOLO dietro e sopra):</strong> spruzzalo solo dietro e sulla parte alta/corona (<strong>2 spruzzi</strong>). <strong>Non spruzzare niente sulla frangia davanti</strong>, così resta pulita e non si secca separandosi in fili.
                  </li>
                  <li>
                    <strong className="text-teal-300">Scrunch mirato:</strong> fai lo scrunch <strong>SOLO dove hai messo lo spray al sale marino (dietro e sopra)</strong>, stringendo piano le ciocche verso l&apos;alto per attivare l&apos;onda. <strong>NON fare scrunch sulla frangia davanti</strong> (eviti che le ciocche si aprano a casaccio o facciano fili ribelli).
                  </li>
                </ul>
              </div>

              {/* Step 2: Pettinatura, stacco radice & mani sui buchini */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-cyan-500/35 space-y-2.5">
                <strong className="text-cyan-300 block uppercase tracking-wider text-[11px]">
                  2. Pettinatura, Stacco Alla Radice &amp; Gesto Mani Sui Buchini Ai Lati (Da Umidi)
                </strong>
                <ol className="space-y-1.5 list-decimal pl-5">
                  <li>
                    <strong className="text-white">Pettine a denti larghi:</strong> porta tutti i capelli dalla corona/centro testa <strong>in avanti verso la fronte</strong> per metterli in ordine nella direzione giusta.
                  </li>
                  <li>
                    <strong className="text-emerald-300">Stacco alla radice davanti:</strong> subito dopo, infila un attimo le dita alla base dei capelli davanti e fai un <strong>piccolo movimento leggero per staccare le radici dalla pelle della fronte</strong> (senza tirare o spettinare le punte). Poi posa il pettine e non toccarli più finché non sono asciutti.
                  </li>
                  <li>
                    <strong className="text-amber-300">Chiusura buchini ai lati con le mani (sopra le tempie e vicino all&apos;orecchio):</strong>
                    <ul className="list-disc pl-4 mt-1 space-y-1 text-[11px]">
                      <li>Guarda ai lati dove vedi il buco o lo stacco con la sfumatura.</li>
                      <li>Metti le dita appena sopra quel buco (nella zona mossa superiore) e <strong>spingi/trascina quel blocco intero (&quot;ciuffetto&quot; di massa) verso il basso e un po&apos; in avanti</strong> finché copre il punto vuoto, poi lascialo lì fermo.</li>
                      <li><strong className="text-rose-300">NON fare:</strong> non tirare i capelli laterali dritti indietro verso l&apos;orecchio (allarga il buco) e non passarci le dita dentro a spettinare dopo averli spostati sul buco.</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* Step 3: Asciugatura col diffusore (Testa dritta davanti allo specchio) */}
              <div className="p-3.5 rounded-2xl bg-black/65 border-2 border-amber-400/45 space-y-2.5">
                <strong className="text-amber-300 block uppercase tracking-wider text-[11px]">
                  3. Asciugatura Col Diffusore — Testa DRITTA Davanti Allo Specchio (Calore Medio &amp; Velocità Bassa)
                </strong>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <strong className="text-white block">A. Dietro, Lati Posteriori &amp; Corona (Volume &quot;Squadrato&quot;):</strong>
                    <p>
                      Parti dalla rosa/attaccatura posteriore e asciuga <strong>dal basso verso l&apos;alto</strong> / verso la corona dando spinta alle radici (senza schiacciare la massa se parti da una base piatta), creando quel profilo pieno e &quot;squadrato&quot;.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-400/40 space-y-1">
                    <strong className="text-amber-200 block">B. Sopra &amp; Frangia Davanti (MAI a testa in giù per il davanti!):</strong>
                    <p>
                      Appoggia il diffusore <strong>dall&apos;alto (a sfioro / 1–2 cm, senza premere forte o affondare i denti nelle ciocche)</strong> per <strong>5–10 secondi per zona</strong>, spostandolo piano dalla cima della testa verso la fronte. Così l&apos;aria scende dall&apos;alto e asciuga le punte direzionate verso il basso, evitando che sparino in aria.
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-400/40 space-y-1">
                    <strong className="text-cyan-200 block">C. Sulla Zona Dei Buchini Ai Lati (Tempie / Vicino Orecchio):</strong>
                    <ul className="list-disc pl-4 space-y-1 text-[11px]">
                      <li><strong>Testa dritta</strong> (non piegata di lato o a testa in giù).</li>
                      <li>Porta il diffusore sopra il punto dove hai appoggiato la ciocca a coprire il buco, a <strong>1–2 cm di distanza</strong> (senza schiacciare e senza infilare i denti).</li>
                      <li>Tienilo <strong>fermo 5–8 secondi</strong> così l&apos;aria calda scende dall&apos;alto e &quot;incolla&quot; la ciocca in posizione verso il basso, poi spostati di un paio di centimetri e ripeti.</li>
                      <li><strong className="text-rose-300">NON fare:</strong> mai puntare il diffusore dal basso verso l&apos;alto sotto il buco (riapre il buco) e mai muoverlo veloce a zig-zag o in tondo sul lato.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4: Ritocco finale (100% asciutti) */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-teal-500/35 space-y-2.5">
                <strong className="text-teal-300 block uppercase tracking-wider text-[11px]">
                  4. Ritocco Finale (A Capelli Asciutti al 100%)
                </strong>
                <ul className="space-y-1.5 list-disc pl-5 text-[11px]">
                  <li>
                    <strong className="text-amber-300">Sulla cima / corona (dietro):</strong> se vedi la parte alta leggermente piatta, metti <strong>pochissima polvere volumizzante SOLO sulla corona/dietro</strong> (<strong>MAI davanti sulla frangia e MAI sui lati o sui buchini</strong>) e massaggia <strong>5 secondi</strong> con le punte delle dita alla radice per dare corpo e alzare la cupola.
                  </li>
                  <li>
                    <strong className="text-white">Sulla frangia davanti &amp; buchini ai lati (SENZA cera):</strong> appoggia il <strong>palmo della mano piatto e asciutto per 2–3 secondi</strong> sopra la frangia (e sopra la ciocca laterale del buco premendo piano verso il basso) per unire eventuali punte leggermente aperte, poi togli la mano e <strong>non toccare più</strong>.
                  </li>
                  <li>
                    <strong className="text-emerald-300">Appena avrai la Cera Opaca (Matte Clay / Paste):</strong> prendine una punta minuscola (<strong>meno di 1 chicco di riso</strong>), scaldala benissimo tra le dita finché sparisce. Passa un velo sulle radici dietro/corona per il volume posteriore, e usa la micro-punta residua sulle dita <strong>solo sulle punte della frangia</strong> per bloccarle compatte e per pizzicare con due dita la ciocca sul buco laterale tirandola leggermente verso il basso.
                  </li>
                  <li>
                    <strong className="text-rose-300">Regola chiave:</strong> non continuare a controllare e spostare le ciocche davanti o ai lati con le mani ogni due minuti — più le tocchi, più si aprono.
                  </li>
                </ul>

                <div className="p-2.5 rounded-xl bg-teal-500/15 border border-teal-400/40 text-[11px] text-teal-100">
                  <strong>Riassunto in 3 secondi per i buchini ai lati:</strong> Sposta la ciocca di sopra verso il basso sul buco → asciugala dall&apos;alto per 5–8 secondi senza schiacciare → fermala con 2 secondi di palmo (o micro-punta di cera) e non toccarla più.
                </div>
              </div>

              {/* Step 5: Giorno dopo */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-lime-500/35 space-y-1.5">
                <strong className="text-lime-300 block uppercase tracking-wider text-[11px]">
                  5. Routine Del Giorno Dopo (Mattina Senza Lavarli)
                </strong>
                <ul className="space-y-1 list-disc pl-4 text-[11px]">
                  <li><strong>NON lavarli tutti i giorni</strong> e <strong>NON mettere balsamo sui capelli asciutti della notte</strong> (sebo + balsamo li appiattisce subito a fili davanti).</li>
                  <li>Inumidisci con le dita bagnate d&apos;acqua solo i ciuffi piegati dal cuscino, asciuga 20–30 sec dall&apos;alto a testa dritta guidando verso la fronte e chiudi con 3 sec di palmo piatto (o micro-punta di cera sulle punte).</li>
                </ul>
              </div>
            </div>

            {/* BLOCCO 2: FISICA, CHIMICA DEI PRODOTTI, LEVA MECCANICA & DIAGNOSI */}
            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/35 space-y-4 bg-gradient-to-br from-cyan-950/25 via-black/85 to-slate-950/30 text-xs text-gray-200 leading-relaxed">
              <strong className="text-cyan-300 uppercase tracking-wider text-xs block border-b border-white/10 pb-2">
                2. Fisica &amp; Chimica Reale: Perché Funziona Così (Cera Opaca, Crema Ricci, Leva Meccanica &amp; Densità Dietro)
              </strong>

              <div className="space-y-3 text-[11px]">
                {/* Cera opaca vs polvere + Clumping */}
                <div className="p-3.5 rounded-2xl bg-black/60 border border-emerald-500/35 space-y-2">
                  <strong className="text-emerald-300 block">
                    A. Perché La Cera Opaca Fa Il Salto di Qualità (Dietro vs Frangia &amp; &quot;Clumping&quot;)
                  </strong>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong className="text-white">Dietro e sopra:</strong> la cera/argilla opaca contiene cere naturali (<em>cera d&apos;api</em> o <em>carnauba</em>) e argille minerali (<em>caolino</em> o <em>bentonite</em>). A differenza della polvere che secca e rende elettrico il capello, l&apos;argilla ispessisce il fusto e crea attrito flessibile sostenendo le ciocche lunghe in un volume &quot;spaziale&quot; scolpito che non collassa.
                    </li>
                    <li>
                      <strong className="text-cyan-300">Sulla frangia davanti (il segreto dei video):</strong> una micro-punta sulle punte davanti non alza l&apos;altezza, ma crea il <strong>clumping (aggregazione)</strong>: le cere uniscono 10–15 capelli vicini in una singola ciocca definita, opaca e con curvatura tridimensionale — esattamente quella separazione netta tra ciocche spesse e morbide che manca asciugando al naturale.
                    </li>
                    <li>
                      <strong className="text-amber-300">Cosa comprare (~4 €):</strong> cerca <em>Matte Clay / Texture Paste</em> (es. <em>L&apos;Oréal Studio Line Mineral &amp; Control Cera Opaca</em>, <em>Syoss Matt Fiber</em> o <em>Gatsby Moving Rubber</em>) — <strong>MAI gel né pomate lucide</strong>.
                    </li>
                  </ul>
                </div>

                {/* Crema ricci no davanti */}
                <div className="p-3.5 rounded-2xl bg-black/60 border border-rose-500/30 space-y-1.5">
                  <strong className="text-rose-300 block">
                    B. Perché NON Mettere la Crema Ricci Davanti (Oli, Burri &amp; Emollienti)
                  </strong>
                  <p>
                    La crema ricci idrata e fa scivolare le squame: su un riccio lungo (3A/3B) dà il peso necessario per non gonfiarsi. Sul tuo mosso <strong>2B ancora in crescita davanti</strong> lubrifica troppo e toglie attrito tra un capello e l&apos;altro: il risultato è una frangia lucida, pesante e &quot;incollata&quot; alla fronte che perde volume naturale. Puoi usarla giusto in quantità minima sulle punte dietro se secche, <strong>mai davanti</strong>.
                  </p>
                </div>

                {/* Perché agli altri funziona polvere davanti e a te no + cosa fa volumizzante */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-amber-950/25 border border-amber-500/30 space-y-1.5">
                    <strong className="text-amber-300 block">
                      C. Perché Agli Altri Funziona Polvere Davanti e a Te No
                    </strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>
                        <strong>Leva meccanica (Lunghezza &amp; Peso):</strong> un capello di <strong>10–12 cm</strong> davanti ha massa per far vincere la gravità: alzi la radice di 2 cm e il peso della punta la piega ad arco verso il basso. I tuoi davanti sono più corti e sfoltiti: se alzi troppo la radice con la polvere restano dritti a spillo verso l&apos;alto/esterno.
                      </li>
                      <li>
                        <strong>Asciugatura direzionale:</strong> asciugando dall&apos;alto hai bloccato i legami a idrogeno &quot;in avanti&quot;: metterci polvere sopra crea solo attrito e disordine senza alzare pulito.
                      </li>
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-teal-950/25 border border-teal-500/30 space-y-1.5">
                    <strong className="text-teal-300 block">
                      D. Cosa Fa Un Volumizzante (Silice / Sale) &amp; Perché Dietro Hai Tanta Massa
                    </strong>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>
                        <strong>Aumenta attrito e spacca l&apos;aggregazione:</strong> davanti su ciocche corte &quot;volume ≠ copertura&quot;: l&apos;espansione disordinata riapre gli spazi a spaghetti scoprendo la fronte.
                      </li>
                      <li>
                        <strong>Dietro/Corona invece funziona:</strong> hai forte <strong>densità follicolare + curvatura naturale</strong> (ogni onda fa una curva tridimensionale creando un &quot;cuscino&quot; folto): lì sale, diffusore e polvere reggono la forma piena e squadrata del mullet.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Diagnosi foto */}
                <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                  <strong className="text-white block">
                    E. Diagnosi Reale Dalle Foto (Low Fade, 3–4 Settimane &amp; Errori Risolti)
                  </strong>
                  <p>
                    La sfumatura bassa (<em>low fade</em>) è pulitissima e il profilo del mullet c&apos;è tutto. Davanti non hai diradamento: venendo dal ciuffo tirato indietro, era stato accorciato/sfoltito. Con <strong>+1 / 1,5 cm (3–4 settimane)</strong> le ciocche sopra avranno abbastanza massa da coprire piene la fronte. Evita sempre <em>acqua + balsamo senza shampoo</em> al mattino (su sebo notturno crea 4 fili appiattiti) e mai <em>testa in giù + polvere</em> davanti (crea spaghetti elettrici).
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* PUNTO 1. FISICA 2B, CAPELLI FINI PIÙ SPESSI & PIANO ALIMENTARE    */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'fisica_spessore') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Atom className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block">
                  Punto 1 · Come Funzionano i Tuoi Capelli &amp; Piano Alimentare Pratico
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Capelli Mossi 2B, Come Fare i Capelli Fini Più Spessi &amp; Cosa Mangiare Ogni Giorno
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/30 space-y-4 bg-gradient-to-br from-cyan-950/25 via-black/80 to-teal-950/20 text-xs text-gray-200 leading-relaxed">
              {/* 1.1 Come funziona il capello */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2.5">
                <strong className="text-cyan-300 block uppercase tracking-wider text-[11px]">
                  1.1 Perché Hai il Mosso Naturale e Perché Prima Ti Tornava Fuori Sempre
                </strong>
                <p>
                  Immagina ogni tuo capello come un piccolo filo di sezione <strong>ovale</strong> (a differenza del capello liscio asiatico che è perfettamente tondo). Dentro questo filo ci sono due &quot;molle&quot; invisibili:
                </p>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">La memoria fissa (Ponti Disolfuro):</strong> è permanente e vuole far piegare il capello a forma di <strong>&quot;S&quot;</strong>. Non sparisce mai finché cresce quel follicolo.
                  </li>
                  <li>
                    <strong className="text-white">La memoria temporanea (Legami a Idrogeno):</strong> si &quot;resetta&quot; ogni volta che il capello si bagna o prende umidità, e si &quot;congela&quot; nella forma in cui lo fai asciugare.
                  </li>
                </ul>
                <p className="text-emerald-200 bg-emerald-500/10 border border-emerald-500/25 rounded-xl p-2.5">
                  <strong>Cosa significa in pratica per te:</strong> quando li stiravi col phon e beccuccio, li forzavi dritti solo nella memoria temporanea. Appena sudavi in palestra o mettevi il casco, l&apos;umidità resettava i legami e il capello tornava a molla nella sua curva a &quot;S&quot; (e dietro già si vedevano mossi perché lì non li tiravi col beccuccio!). Adesso che li asciughi mossi per <strong>3–4 settimane di fila</strong>, alleni la superficie esterna (le cuticole) a restare ordinata lungo l&apos;onda: così anche solo inumidendoli al mattino prenderanno subito la forma giusta senza crespo.
                </p>
              </div>

              {/* 1.2 Come fare i capelli fini più spessi */}
              <div className="p-3.5 rounded-2xl bg-teal-950/30 border border-teal-500/30 space-y-2.5">
                <strong className="text-teal-300 block uppercase tracking-wider text-[11px]">
                  1.2 Capelli Fini: Come Farli Diventare Davvero Più Spessi e Pieni (Cosa Fare in Pratica)
                </strong>
                <p>
                  Diciamolo chiaro senza balle: la genetica decide quanto è largo il buco nella pelle da cui nasce il capello, quindi nessun prodotto cambia il tuo DNA. <strong className="text-white">Però puoi aumentare concretamente lo spessore reale del fusto idratato e raddoppiare il volume visivo</strong> facendo 4 cose precise ogni settimana:
                </p>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-black/55 border border-white/10 space-y-1">
                    <strong className="text-cyan-300 block">1. Elimina il getto caldo diretto del beccuccio</strong>
                    <p>
                      Il phon forte e bollente attaccato ai capelli fini fa bollire l&apos;acqua dentro il fusto (<em>bubble hair</em>), svuotandolo dall&apos;interno e rendendolo ancora più sottile e fragile. Passando al diffusore a <strong>calore medio e velocità minima</strong>, il capello resta pieno d&apos;acqua sana dentro e risulta visibilmente più elastico e grosso.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/55 border border-white/10 space-y-1">
                    <strong className="text-cyan-300 block">2. Cosa controllare sull&apos;etichetta quando compri prodotti</strong>
                    <p>
                      Cerca prodotti che contengono: <strong>Panthenol (Pro-Vitamina B5)</strong> perché entra nel capello e trattiene acqua gonfiando leggermente lo stelo; <strong>Hydrolyzed Rice / Wheat Protein</strong> (proteine idrolizzate) perché riparano i micro-buchi del capello fine dandogli sostegno; <strong>Kaolin / Silica Silylate</strong> (in argille e polveri) perché danno spessore ottico e attrito tra un capello e l&apos;altro.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/55 border border-white/10 space-y-1">
                    <strong className="text-cyan-300 block">3. Usa la tecnica del &quot;Raggruppamento&quot; (Clumping)</strong>
                    <p>
                      Un capello fine lasciato solo sembra trasparente e fa vedere la pelle sotto. Quando invece unisci 20–30 capelli insieme in una ciocca ondulata pulita (usando balsamo diluito o crema finale dopo l&apos;asciugatura), quella ciocca diventa scura, compatta e otticamente sembra 3 volte più folta.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/55 border border-amber-400/25 space-y-1">
                    <strong className="text-amber-300 block">4. Cosa NON fare mai sui capelli fini</strong>
                    <p>
                      Non mettere olio di cocco/ricino puro (incolla e schiaccia i capelli fini facendoli sembrare radi), non pettinarli da asciutti con pettini fitti (li spezzi a metà) e non credere al mito che rasarli li faccia crescere più spessi (la radice resta identica, cambia solo che la punta tagliata dritta sembra più piena per qualche settimana).
                    </p>
                  </div>
                </div>
              </div>

              {/* 1.3 Piano Alimentare Pratico Giornaliero */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-emerald-500/35 space-y-3">
                <strong className="text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <Utensils className="w-4 h-4 text-emerald-400 shrink-0" />
                  1.3 Come Integrare Tutto nella Tua Alimentazione (Menu Pratico Giorno per Giorno)
                </strong>
                <p>
                  Il capello è fatto all&apos;85–90% di una proteina chiamata <strong>cheratina</strong>. Se mangi male o stai troppo basso di calorie, il corpo usa le risorse per muscoli e organi e &quot;affama&quot; i bulbi producendo capelli più sottili. Ecco <strong>esattamente come tradurlo nei tuoi pasti reali</strong> (perfetto anche se fai palestra):
                </p>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <strong className="text-white block">☀️ Colazione (Mattoni della Cheratina + Biotina)</strong>
                    <p>
                      <strong>Cosa fare:</strong> 2–3 uova intere <strong>sempre ben cotte</strong> (tuorlo + albume; mai albume crudo perché blocca la biotina) oppure 170–200g di yogurt greco con un cucchiaio di fiocchi d&apos;avena + 1 frutto con <strong>Vitamina C</strong> (kiwi, arancia o fragole).
                      <br />
                      <span className="text-gray-400">Perché funziona: le uova danno aminoacidi solforati (cisteina e metionina) che costruiscono fisicamente il fusto del capello + biotina.</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <strong className="text-white block">🍽️ Pranzo (Ferro + Proteine + Assorbimento x2)</strong>
                    <p>
                      <strong>Cosa fare:</strong> pasta/riso + fonte proteica (pollo, tacchino, tonno o carne magra) + contorno di verdure verdi o legumi (lenticchie/ceci) <strong>conditi con succo di limone fresco sopra</strong> (o abbinati a peperoni).
                      <br />
                      <span className="text-gray-400">Trucco scientifico pratico: il limone (Vitamina C) raddoppia l&apos;assorbimento del ferro vegetale. Il ferro (ferritina) porta ossigeno al bulbo: se è basso, i capelli diventano subito più fini. Evita di bere caffè o tè subito attaccato al pranzo (aspetta 45–60 min, perché riducono l&apos;assorbimento del ferro).</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <strong className="text-white block">⚡ Spuntino Pomeridiano / Post-Palestra (Zinco &amp; Selenio)</strong>
                    <p>
                      <strong>Cosa fare:</strong> 15–20g di <strong>semi di zucca</strong> (una manciata piccola) + <strong>1–2 noci brasiliane</strong> (non di più, bastano 2 al giorno per coprire tutto il selenio!) oppure una manciata di noci normali + la tua quota proteica (yogurt greco / panino con fesa / shake se lo usi).
                      <br />
                      <span className="text-gray-400">Perché funziona: i semi di zucca sono tra gli alimenti più ricchi di Zinco naturale (ripara le cellule del follicolo e regola il sebo sulla cute).</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <strong className="text-white block">🌙 Cena (Omega-3 Anti-Infiammazione &amp; Vitamina D)</strong>
                    <p>
                      <strong>Cosa fare:</strong> 2–3 sere a settimana mangia pesce grasso (<strong>salmone, sgombro o sardine</strong>) con olio EVO a crudo + verdure; le altre sere carne magra (1 volta a settimana anche carne rossa magra per il ferro eme) o uova/latticini magri.
                      <br />
                      <span className="text-gray-400">Perché funziona: gli Omega-3 tengono elastica la pelle della testa e spengono la micro-infiammazione attorno al bulbo.</span>
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-200 space-y-1">
                  <strong>3 Regole Extra Fondamentali per Non Rallentare la Crescita:</strong>
                  <ul className="list-disc pl-4 space-y-0.5">
                    <li><strong>Acqua:</strong> bevi almeno <strong className="tabular-nums">2 – 2,5 litri</strong> al giorno (un corpo disidratato toglie acqua prima a pelle e capelli).</li>
                    <li><strong>Palestra e Dieta:</strong> se vuoi dimagrire, mai fare tagli estremi di calorie o scendere troppo con le proteine (tieni sempre la tua quota proteica adeguata al peso, es. ~1,6g per kg di peso corporeo).</li>
                    <li><strong>Sonno:</strong> dormi <strong className="tabular-nums">7,5 – 8,5 ore</strong>. Di notte si attiva l&apos;ormone della crescita (GH) che ripara e fa allungare il capello; dormire poco alza il cortisolo che dopo 2–3 mesi assottiglia i capelli.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* PUNTO 2. CRESCITA, "BUCHI" DAVANTI & OBIETTIVO MASSIMO            */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'crescita_buchi') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <TrendingUp className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                  Punto 2 · Diagnosi, Timeline Crescita &amp; Come Ottenere il Massimo
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  I &quot;Buchi&quot; Davanti: Perché Ci Sono, Come Si Chiuderanno &amp; Piano Copertura Fronte
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-emerald-500/35 space-y-4 bg-gradient-to-br from-emerald-950/25 via-black/80 to-teal-950/20 text-xs text-gray-200 leading-relaxed">
              {/* 2.1 Perché dietro sì e davanti no */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2">
                <strong className="text-emerald-300 block uppercase tracking-wider text-[11px]">
                  2.1 Situazione Attuale: Dietro Promosso 10/10, Davanti Perché Si Vedono gli Spazi
                </strong>
                <p>
                  <strong className="text-white">La parte dietro è già perfetta:</strong> ha movimento naturale, si unisce benissimo alla sfumatura pulita ai lati e valorizza la forma della testa.
                </p>
                <p>
                  Davanti e sopra invece vedi quei &quot;buchi&quot; (dove si intravede la cute) per <strong>3 motivi pratici precisi</strong>:
                </p>
                <ol className="space-y-1.5 list-decimal pl-5">
                  <li>
                    <strong className="text-amber-300">Sfoltitura con forbici sfoltitrici:</strong> il barbiere ha alleggerito sopra; sui capelli fini quelle forbici lasciano piccoli &quot;gradini&quot; tra una ciocca più corta e una più lunga.
                  </li>
                  <li>
                    <strong className="text-cyan-300">Capello fine + troppa cera o bagnato schiacciato:</strong> quando metti troppa cera (o non la scaldi bene) i capelli sottili si incollano a mazzetti rigidi (&quot;effetto a ciabatta&quot;), lasciando spazi vuoti tra un mazzetto e l&apos;altro.
                  </li>
                  <li>
                    <strong className="text-white">Capello ancora corto (transizione):</strong> passando dal liscio tirato al mosso, i capelli sopra sono ancora troppo leggeri per cadere giù da soli, quindi si aprono verso l&apos;alto o ai lati.
                  </li>
                </ol>
              </div>

              {/* 2.2 Timeline della crescita */}
              <div className="p-3.5 rounded-2xl bg-teal-950/30 border border-teal-400/35 space-y-2.5">
                <strong className="text-teal-300 block uppercase tracking-wider text-[11px]">
                  2.2 Cosa Succede Man Mano che Crescono (Settimana per Settimana)
                </strong>
                <p>
                  Un capello cresce circa <strong className="text-teal-300 tabular-nums">1 – 1,2 cm al mese</strong>. Ecco esattamente cosa cambia allo specchio e come devi comportarti in ogni fase:
                </p>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-black/55 border border-white/10 space-y-1">
                    <strong className="text-amber-300 block tabular-nums">Oggi → Settimana 3 (+0,7 / 1 cm): Fase di Chiusura Immediata</strong>
                    <p>
                      <strong>Cosa succede ai capelli:</strong> sono ancora leggeri, ma la parte sfoltita inizia a riempirsi da sotto.
                      <br />
                      <strong>Cosa devi fare tu adesso:</strong> smetti di tirarli dritti col beccuccio, pettinali in avanti verso la fronte solo da umidi (con leggero stacco delle radici con le dita), sposta i ciuffetti superiori sopra eventuali buchini laterali e asciuga a <strong>testa dritta davanti allo specchio</strong> (dal basso solo dietro/corona; dall&apos;alto a sfioro sulla frangia davanti e sui lati). Già così coprono molto di più!
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/55 border border-emerald-400/35 space-y-1">
                    <strong className="text-emerald-300 block tabular-nums">Settimana 4 → Settimana 8 (+1,5 / 2 cm): Svolta &quot;A Tenda&quot;</strong>
                    <p>
                      <strong>Cosa succede ai capelli:</strong> finalmente le ciocche sopra acquistano peso naturale. La gravità tira leggermente verso il basso l&apos;arco dell&apos;onda, quindi le ciocche si appoggiano <strong>l&apos;una sopra l&apos;altra &quot;a tenda / a tegola&quot;</strong>.
                      <br />
                      <strong>Risultato:</strong> i buchi spariscono da soli, la fronte resta coperta da onde morbide e piene, e non devi più stare lì a sistemarli ogni secondo perché si coprono da soli.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2.3 Obiettivo Massimo */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-lime-400/35 space-y-2">
                <strong className="text-lime-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <Target className="w-4 h-4 text-lime-400 shrink-0" />
                  2.3 Come Raggiungere il Tuo Obiettivo Massimo (Volume Sopra + Fronte Coperta + Zero Rovina)
                </strong>
                <p>Per avere il massimo risultato possibile devi mettere insieme queste <strong>4 regole fisse</strong>:</p>
                <ol className="space-y-1.5 list-decimal pl-5">
                  <li>
                    <strong className="text-white">Crea volume dietro/corona col diffusore e direzione pulita davanti:</strong> più prodotto metti sulle lunghezze davanti, più il capello fine si apre o appesantisce. Il volume nasce staccando le radici con le dita da umidi e asciugando dal basso <em>dietro/corona</em>, mentre <em>davanti e sui lati</em> tieni la testa dritta e asciughi dall&apos;alto a 1–2 cm senza schiacciare.
                  </li>
                  <li>
                    <strong className="text-white">Indirizza il ciuffo in avanti quando è ancora umido:</strong> con il pettine a denti larghi fai 2 passate portando i capelli sopra in avanti verso la fronte. Così quando si asciugano mossi scendono esattamente a coprire la fronte.
                  </li>
                  <li>
                    <strong className="text-white">Usa la Tecnica Ibrida + 5 secondi di aria fredda:</strong> il freddo finale blocca la piega per 12–16 ore; il pizzico di polvere alle radici tiene alto il volume sopra, mentre la micro-goccia di balsamo+acqua (o crema) sulle punte tiene le ciocche davanti unite senza buchi.
                  </li>
                  <li>
                    <strong className="text-rose-300">Regola d&apos;oro della mano: NON toccarti sempre la fronte!</strong> Ogni volta che passi la mano sul ciuffo davanti, il grasso naturale delle dita si attacca ai capelli fini, li divide e riapre i buchi. Se devi sistemarli, infila le dita solo <em>sotto</em> alle radici e scuoti piano verso l&apos;alto.
                  </li>
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* PUNTO 3. TAGLIO TEXTURED MESSY MULLET & COSA DIRE AL BARBIERE     */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'taglio_barbiere') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Scissors className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400 block">
                  Punto 3 · Guida Pratica Quando Sei dal Barbiere
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Taglio Textured Messy Mullet &amp; Cosa Dire Esattamente in Poltrona
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-teal-500/35 space-y-4 bg-gradient-to-br from-teal-950/25 via-black/80 to-emerald-950/20 text-xs text-gray-200 leading-relaxed">
              <p>
                Questo stile si chiama <strong className="text-emerald-300">Textured Messy Mullet</strong> (o <em>Wash-and-Wear / Bedhead Texture</em>): sfrutta il movimento disordinato ma studiato. I lati puliti evitano l&apos;effetto &quot;casco/fungo&quot;, la parte sopra scende mossa sulla fronte e dietro resta più lunga e naturale.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-950/35 border border-emerald-400/45 space-y-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Copione Esatto da Dire al Barbiere (Quando Ti Siedi)
                </span>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-white block">1. Per impostare o rifinire il taglio:</strong>
                  <p className="italic text-gray-100">
                    &quot;Ho i capelli leggermente mossi naturali e fini. Voglio mantenere un <strong>Textured Messy Mullet</strong> che funzioni da solo anche dopo palestra e casco: pulito e sfumato ai lati, più lungo e mosso dietro sul collo, e sopra abbastanza lungo da coprire bene la fronte scendendo a tenda.&quot;
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-amber-400/40 space-y-1">
                  <strong className="text-amber-300 block">2. Frase SALVA-CAPELLI (Dilla PRIMA che prenda le forbici sopra!):</strong>
                  <p className="italic text-amber-100">
                    &quot;Sopra e davanti li sto facendo crescere per avere volume pieno senza spazi vuoti: <strong>per favore NON usare le forbici sfoltitrici vicino alle radici o sul ciuffo davanti</strong>, perché ho il capello fine e mi si aprono dei buchi sulla pelle. Fai solo un po&apos; di taglio di punta (point cutting) leggero sulle punte per dare movimento, ma lascia piena la massa sopra!&quot;
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/55 border border-white/10 space-y-1">
                  <strong className="text-cyan-300 block">3. Cosa osservare mentre ti asciuga i capelli a fine taglio:</strong>
                  <ul className="list-disc pl-4 space-y-0.5 text-gray-300">
                    <li>Guarda quale prodotto mette sui capelli bagnati (crema o spray) e quanto ne prende sul dito.</li>
                    <li>Guarda a che distanza tiene il diffusore e come stringe le ciocche con l&apos;altra mano.</li>
                    <li>Guarda se mette qualcosa da asciutti alla fine (crema lucida o polvere): ti serve per capire cosa replicare a casa.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* PUNTO 4. PRODOTTI, DOSI VISIVE, OPACO VS BAGNATO & TECNICA IBRIDA */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'prodotti_scienza') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <FlaskConical className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                  Punto 4 · Cosa Mettere, Quanta Quantità, Dove &amp; Effetto Ibrido
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Tutti i Prodotti Spiegati con Dosi Esatte + Come Unire Volume e Effetto Bagnato
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-amber-500/35 space-y-4 bg-gradient-to-br from-amber-950/20 via-black/80 to-orange-950/20 text-xs text-gray-200 leading-relaxed">
              {/* 4.1 Scheda Pratica di ogni prodotto */}
              <div className="space-y-2.5">
                <strong className="text-amber-300 block uppercase tracking-wider text-[11px] pl-1">
                  4.1 Dizionario Pratico: Ogni Prodotto, La Dose Esatta e Come Applicarlo
                </strong>

                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-2xl bg-black/55 border border-teal-500/30 space-y-1.5">
                    <strong className="text-teal-300 block">🧴 Balsamo Pantene &quot;Con o Senza Risciacquo&quot; (Il Tuttofare)</strong>
                    <p>
                      <strong>Quando si usa:</strong> sia dopo lo shampoo (sui capelli umidi prima del phon) sia alla fine o la mattina a secco (diluito con acqua).
                      <br />
                      <strong>Dose esatta:</strong> da umidi pre-phon = <strong>1 pisello</strong>; da asciutti per effetto bagnato lucido = <strong>1 chicco di riso</strong> + <strong>2–3 gocce d&apos;acqua</strong> sul palmo, sfregati insieme finché diventa una cremina acquosa trasparente.
                      <br />
                      <strong>Dove va messo:</strong> SOLO sulle lunghezze e punte (soprattutto ciuffo davanti e punte dietro). <strong>Mai</strong> direttamente sulla pelle delle radici o appiattisce tutto.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/55 border border-cyan-500/30 space-y-1.5">
                    <strong className="text-cyan-300 block">🌊 Spray al Sale Marino / Crema Ricci Base</strong>
                    <p>
                      <strong>Quando si usa:</strong> SOLO sui capelli <strong>bagnati o umidi tamponati, PRIMA di asciugarli</strong>.
                      <br />
                      <strong>Cosa fa e dose:</strong> la crema ricci idrata e impedisce l&apos;effetto nuvola; se non la compri, la sostituisci perfettamente con il tuo balsamo Pantene (dose pisello) oppure con <strong>3–4 spruzzi di Spray al Sale Marino</strong> distribuiti con le mani sulle lunghezze. Il sale crea attrito tra i capelli dando corpo e tenuta all&apos;onda mentre l&apos;acqua evapora. <em>Non spruzzarlo attaccato alla cute tutti i giorni per non seccare la pelle.</em>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/55 border border-sky-500/30 space-y-1.5">
                    <strong className="text-sky-300 block">✨ Crema Finale / Pasta Lucida / Pomade Base d&apos;Acqua (Effetto Barbiere)</strong>
                    <p>
                      <strong>Quando si usa:</strong> SOLO a capelli <strong>100% asciutti</strong>, come ultimo tocco.
                      <br />
                      <strong>Dose e gesto:</strong> prendi la punta di un&apos;unghia (chicco di riso abbondante), spalma benissimo tra i palmi finché non vedi più bianco, e accarezza leggermente le ciocche esterne davanti e dietro. Chiude le cuticole, elimina il crespo e dà l&apos;effetto bagnato luminoso morbido senza incollare come il gel vecchio stile. <em>Finché non la compri, il trucco Pantene chicco di riso + 2–3 gocce d&apos;acqua fa esattamente lo stesso lavoro!</em>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/55 border border-emerald-500/30 space-y-1.5">
                    <strong className="text-emerald-300 block">🧱 Cera Opaca / Argilla (Matte Clay)</strong>
                    <p>
                      <strong>Quando si usa:</strong> SOLO a capelli <strong>95–100% asciutti</strong>. Se li tocchi con la cera mentre sono umidi fa effetto unto finto e schiaccia tutto.
                      <br />
                      <strong>Dose e gesto OBBLIGATORIO:</strong> punta di un&apos;unghia, poi sfrega fortissimo tra i palmi asciutti per <strong>5–10 secondi</strong> finché scalda e diventa invisibile (zero grumi bianchi!). Poi pizzica e muovi solo le punte per dare movimento opaco. Se ne metti troppa, incolla i capelli fini e apre i buchi!
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/55 border border-amber-500/30 space-y-1.5">
                    <strong className="text-amber-300 block">💨 Polvere Volumizzante (Silica Silylate)</strong>
                    <p>
                      <strong>Quando si usa:</strong> <strong>RIGOROSAMENTE a capelli 100% asciutti</strong> (se tocca l&apos;acqua diventa una colla!).
                      <br />
                      <strong>Dose e gesto:</strong> non metterla sulle mani! Solleva una ciocca sopra la testa, dai <strong>1 micro-soffio</strong> direttamente vicino alla radice (fai 2–3 punti sopra la corona, non sul ciuffo davanti), poi infila i polpastrelli e massaggia 3 secondi sollevando verso l&apos;alto. Risultato: spazio immediato tra i capelli, radici alte tutto il giorno e zero unto.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4.2 Confronto scientifico Opaco vs Bagnato */}
              <div className="space-y-2">
                <strong className="text-white block uppercase tracking-wider text-[11px] pl-1">
                  4.2 Effetto Voluminoso Opaco vs Effetto Bagnato: Cosa Cambia Davvero
                </strong>
                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/60">
                  <table className="w-full text-left border-collapse text-[11px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/[0.04] text-gray-300">
                        <th className="p-2.5 font-black">Aspetto</th>
                        <th className="p-2.5 font-black text-amber-300">Opaco (Polvere / Cera Matt)</th>
                        <th className="p-2.5 font-black text-cyan-300">Bagnato (Crema / Pantene+Acqua)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-gray-200">
                      <tr>
                        <td className="p-2.5 font-bold text-white">Come Riflette la Luce</td>
                        <td className="p-2.5">Assorbe la luce: aspetto asciutto, spesso, ruvido e molto voluminoso.</td>
                        <td className="p-2.5">Riflette la luce: aspetto sano, scuro, lucido e ordinato come dal barbiere.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-white">Effetto sui &quot;Buchi&quot;</td>
                        <td className="p-2.5">Benissimo alle radici; sulle punte corte può separare troppo lasciandole elettriche.</td>
                        <td className="p-2.5">Unisce le ciocche davanti chiudendo gli spazi vuoti e coprendo bene la fronte.</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-bold text-white">Dopo Casco o Sudore</td>
                        <td className="p-2.5">Infili le dita alle radici, scuoti 5 sec e il volume torna su subito.</td>
                        <td className="p-2.5">Resta morbido ed elastico: l&apos;umidità riattiva l&apos;onda senza sgretolarsi.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4.3 Tecnica Ibrida */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-teal-950/45 to-cyan-950/35 border border-teal-400/45 space-y-2">
                <strong className="text-teal-300 block uppercase tracking-wider text-[11px]">
                  4.3 La Tecnica Ibrida: Come Avere Sia Volume Spaziale Sopra Sia Effetto Bagnato Davanti
                </strong>
                <p>Il segreto è usare prodotti diversi su <strong>due zone diverse della testa</strong>:</p>
                <ol className="space-y-1 list-decimal pl-5">
                  <li>
                    <strong className="text-white">Zona Radici (sopra e corona):</strong> il volume lo crei asciugando a testa in giù + (se vuoi il massimo) 1 pizzico di <strong>Polvere Volumizzante solo alla base delle radici</strong>.
                  </li>
                  <li>
                    <strong className="text-white">Zona Punte &amp; Ciuffo Davanti:</strong> passi la micro-quantità di <strong>Crema Lucida o Pantene+Acqua</strong> sfiorando le onde esterne.
                  </li>
                </ol>
                <p className="text-emerald-200 font-semibold">
                  In questo modo sopra resti altissimo e arioso (non crolli!), mentre davanti le onde risultano piene, definite, lucide e coprenti sulla fronte.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* PUNTO 5. GUIDA MINUTO PER MINUTO: DOCCIA, PETTINE & PHON          */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'lavaggio_asciugatura') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <Droplets className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
                  Punto 5 · Guida Pratica Passo-Passo (Quando Li Lavi)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Dalla Doccia al Risultato Finale: Gesti Esatti, Calore, Velocità &amp; Pettine
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-sky-500/35 space-y-4 bg-gradient-to-br from-sky-950/25 via-black/80 to-indigo-950/20 text-xs text-gray-200 leading-relaxed">
              {/* Fase 1 */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2">
                <strong className="text-sky-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  Fase 1 · In Doccia (Minuti 0–3): Acqua Tiepida &amp; Solo Shampoo sulla Cute
                </strong>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">Temperatura acqua:</strong> usa acqua <strong>tiepida</strong> (mai bollente, perché l&apos;acqua troppo calda apre troppo le cuticole e rende i capelli fini crespi e secchi).
                  </li>
                  <li>
                    <strong className="text-white">Shampoo:</strong> metti una noce di shampoo (usa il tuo <em>Head &amp; Shoulders</em> quando hai usato cera/polvere nei giorni prima) e massaggia la pelle della testa con i <strong>polpastrelli</strong> per 40–60 secondi, poi risciacqua completamente.
                  </li>
                  <li>
                    <strong className="text-cyan-300">Balsamo Pantene (&quot;con o senza risciacquo&quot;) — scegli uno dei due modi:</strong>
                    <br />
                    • <em>Modo più veloce (consigliato):</em> in doccia fai solo shampoo, poi il Pantene lo metti fuori dalla doccia senza risciacquarlo (vedi Fase 3).
                    <br />
                    • <em>Modo classico:</em> se invece lo metti sotto la doccia sulle punte, passaci il pettine a denti larghi lì sotto, poi risciacqua veloce per soli <strong>5–10 secondi</strong> lasciandoli appena morbidi e scivolosi.
                  </li>
                </ul>
              </div>

              {/* Fase 2 */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2">
                <strong className="text-sky-300 uppercase tracking-wider text-[11px] block">
                  Fase 2 · Appena Uscito (Minuto 3–4): Come Tamponare Senza Rovinare l&apos;Onda
                </strong>
                <p>
                  Appena esci dalla doccia, <strong>NON sfregare mai l&apos;asciugamano avanti e indietro sulla testa</strong> (quello spezza i capelli fini e crea subito effetto paglia).
                </p>
                <p className="text-emerald-200">
                  <strong>Il gesto giusto:</strong> prendi un asciugamano morbido (o ancora meglio una maglietta di cotone pulita), appoggialo alle punte e <strong>stringi delicatamente verso l&apos;alto</strong> verso la testa per 2–3 volte su ogni lato. Devono restare <strong>umidi e morbidi</strong>, non che gocciolano sul pavimento.
                </p>
              </div>

              {/* Fase 3 */}
              <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-400/40 space-y-2.5">
                <strong className="text-amber-300 uppercase tracking-wider text-[11px] block">
                  Fase 3 · Prodotto Base &amp; Pettine a Denti Larghi (Minuto 4–5)
                </strong>
                <ol className="space-y-1.5 list-decimal pl-5">
                  <li>
                    <strong className="text-white">Metti il prodotto pre-asciugatura:</strong> se non hai messo il balsamo in doccia, metti sui palmi <strong>1 goccia grande quanto un pisello</strong> di Pantene (sfrega bene tra le mani) e passalo sulle lunghezze davanti e dietro evitando di schiacciarlo sulla cute. <em>(Oppure al suo posto 3–4 spruzzi di Spray al Sale Marino o una punta di Crema Ricci).</em>
                  </li>
                  <li>
                    <strong className="text-emerald-300">Adesso (SOLO ADESSO) usa il Pettine a Denti Larghi:</strong> fai 1–2 passate lente partendo dalle punte e salendo piano verso le radici per togliere nodi e dare la direzione esatta (tutti i capelli sopra indirizzati <strong>in avanti verso la fronte</strong>, quelli dietro verso il collo).
                  </li>
                  <li>
                    <strong className="text-rose-300">POSA IL PETTINE E NON TOCCARLO PIÙ:</strong> da questo momento in poi non devi più usarlo né mentre asciughi né alla fine da asciutti, altrimenti disfi tutte le onde che stai costruendo e fai venire fuori la nuvola crespa!
                  </li>
                </ol>
              </div>

              {/* Fase 4: Phon & Diffusore spiegati gesto per gesto */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-sky-500/35 space-y-3">
                <strong className="text-sky-300 uppercase tracking-wider text-[11px] block">
                  Fase 4 · Come Asciugarli col Phon e Diffusore (Minuto 5–10) — Gesto per Gesto
                </strong>

                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-400/35 space-y-1">
                  <strong className="text-white block">🎛️ Impostazione Esatta dei Tasti del Phon (PRIMA di accenderlo):</strong>
                  <ul className="list-disc pl-4 space-y-0.5">
                    <li><strong>Tasto Velocità Aria (Ventola):</strong> mettilo sul <strong>1 (MINIMO)</strong>. Se l&apos;aria soffia forte, spara i capelli in tutte le direzioni creando crespo e buchi.</li>
                    <li><strong>Tasto Temperatura (Calore):</strong> mettilo sul <strong>MEDIO</strong> (di solito il pallino centrale / tacca 2 su 3). Fai la prova sul dorso della mano: devi sentire un calore piacevole e tiepido, <strong>mai che scotta</strong>!</li>
                  </ul>
                </div>

                <ol className="space-y-2 list-decimal pl-5">
                  <li>
                    <strong className="text-white">Posizione testa (REGOLA AGGIORNATA):</strong> tieni la <strong>testa DRITTA davanti allo specchio</strong> per sopra, frangia e buchini ai lati (mai a testa in giù davanti finché la frangia è corta, altrimenti le punte sparano in aria!). Il sollevamento dal basso verso l&apos;alto fallo solo <strong>dietro/corona</strong> per dare volume pieno e &quot;squadrato&quot;.
                  </li>
                  <li>
                    <strong className="text-cyan-300">Sopra, Frangia &amp; Buchini ai Lati (Dall&apos;Alto a Sfioro):</strong> tieni la coppa del diffusore <strong>sopra i capelli a 1–2 cm (senza premere né affondare i denti)</strong> per <strong>5–10 secondi per zona</strong> spostandola dalla cima verso la fronte (e 5–8 sec fermi sopra i buchini ai lati). L&apos;aria calda scende dall&apos;alto e fissa la caduta naturale verso il basso.
                  </li>
                  <li>
                    <strong className="text-amber-300">Scrunch solo dietro e sulla corona:</strong> dove hai messo i 2 spruzzi di sale marino (dietro e parte alta), stringi piano con la mano dal basso verso la testa; <strong>mai fare scrunch sulla frangia davanti</strong> finché è corta.
                  </li>
                  <li>
                    <strong className="text-emerald-300">Dietro sul Mullet (Appoggio Delicato):</strong> dietro sulla nuca/corona puoi appoggiare delicatamente la coppa dal basso verso l&apos;alto per 10–15 secondi per sostenere la massa e costruire volume. <em>Se sei di fretta senza diffusore, tieni sempre aria al minimo/calore medio dall&apos;alto sul davanti.</em>
                  </li>
                  <li>
                    <strong className="text-lime-300">Quando fermarti e sigillare (all&apos;85–90% asciutti):</strong> i capelli devono sembrare quasi asciutti (non umidi da bagnare le dita, solo freschi). Rialza la testa con calma, dai 20 secondi dietro sul mullet guardando lo specchio, poi premi il tasto <strong>Aria Fredda (simbolo fiocco di neve / tasto cool) per 5 secondi pieni</strong> su tutta la testa: il freddo &quot;congela&quot; la curva a &quot;S&quot; così la piega non crolla in giornata!
                  </li>
                </ol>
              </div>

              {/* Fase 5 */}
              <div className="p-3.5 rounded-2xl bg-teal-950/35 border border-teal-400/40 space-y-2.5">
                <strong className="text-teal-300 uppercase tracking-wider text-[11px] block">
                  Fase 5 · Tocco Finale (Minuto 10–11) — SOLO Quando Sono Asciutti al 100%
                </strong>
                <p>
                  Aspetta 1–2 minuti dopo aver spento il phon finché sono <strong>asciutti al 100%</strong> (se li tocchi non devono essere freschi di umidità). Poi scegli il finish che preferisci:
                </p>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-black/55 border border-cyan-400/35 space-y-1">
                    <strong className="text-cyan-300 block">Opzione A (Consigliata Anti-Buchi) · Finitura Lucida / Effetto Barbiere (Trucco Pantene 2° Step o Pasta Lucida)</strong>
                    <p>
                      Prendi sul dito una punta minuscola (grande quanto <strong>1 chicco di riso</strong>) di Pantene. Mettici sopra <strong>2–3 gocce d&apos;acqua</strong> sul palmo e sfrega bene le mani insieme finché diventa una <strong>cremina acquosa quasi trasparente</strong>. Poi sfiora delicatamente con i palmi le ciocche esterne davanti e dietro stringendo piano dal basso verso l&apos;alto, senza schiacciare le radici in cima. Risultato: onde morbide, scure, lucide e chiuse sulla fronte!
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/55 border border-amber-400/35 space-y-1">
                    <strong className="text-amber-300 block">Opzione B · Finitura Opaca / Volume Estremo</strong>
                    <p>
                      Dai 1–2 micro-soffi di polvere volumizzante solo alle radici della parte alta e massaggia coi polpastrelli verso l&apos;alto. Poi scalda una micro-punta di cera opaca tra i palmi per <strong>10 secondi</strong> finché sparisce e pizzica le punte. Se vuoi separare qualche ciocca spessa in blocchi naturali, infila il <strong>pettine a pinza/forcina 3D</strong> vicino alle radici, stringi piano e tira verso l&apos;esterno senza tirare le punte!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* PUNTO 6. MATTINA A SECCO (SENZA LAVARLI)                          */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'mattina_secco') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-lime-500/20 text-lime-300 border border-lime-500/30">
                <Sun className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-lime-400 block">
                  Punto 6 · Cosa Fare Appena Ti Svegli (Senza Farti la Doccia)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Mattina a Secco: Balsamo + Acqua, Polvere a Secco &amp; Come Farli Durare 16 Ore
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-lime-500/35 space-y-4 bg-gradient-to-br from-lime-950/20 via-black/80 to-emerald-950/20 text-xs text-gray-200 leading-relaxed">
              <p>
                La mattina non devi lavarti i capelli tutti i giorni. Quando ti guardi allo specchio appena alzato, guarda come sono messi e applica esattamente <strong>una di queste 3 procedure pratiche</strong> (ci metti da 30 secondi a 2 minuti):
              </p>

              {/* 6.1 Balsamo + Acqua a secco */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-cyan-400/35 space-y-2.5">
                <strong className="text-cyan-300 block uppercase tracking-wider text-[11px]">
                  6.1 A Secco con Balsamo + Acqua (Per Avere l&apos;Effetto Bagnato Senza Lavarli)
                </strong>
                <p>
                  <strong className="text-white">Sì, funziona benissimo</strong>, ma devi farlo esattamente così altrimenti si ungono: <strong className="text-amber-300">non spalmare mai il balsamo puro sui capelli asciutti</strong>, perché senza acqua non scivola e incolla le ciocche in cordoncini sporchi.
                </p>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <strong className="text-cyan-200 block">Procedura A · Quando la forma c&apos;è già ma li vedi secchi (30 secondi)</strong>
                    <ol className="list-decimal pl-4 space-y-1">
                      <li>Bagna leggermente le mani sotto il rubinetto e scuoti via l&apos;acqua in eccesso (devono restare bagnate con qualche goccia, non grondare).</li>
                      <li>Metti sul palmo <strong>1 chicco di riso</strong> di Pantene e sfrega energicamente i palmi per 5 secondi finché si scioglie in un velo d&apos;acqua lattiginosa quasi trasparente.</li>
                      <li>Passa le mani sopra le ciocche esterne davanti e dietro, poi fai <strong>3–4 movimenti di scrunch</strong> (stringi piano le punte nel palmo dal basso verso la fronte).</li>
                      <li><strong>Non toccarli più per 2 minuti</strong> mentre asciugano all&apos;aria.</li>
                    </ol>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <strong className="text-emerald-200 block">Procedura B · Quando il cuscino te li ha schiacciati storti da un lato (60 secondi)</strong>
                    <ol className="list-decimal pl-4 space-y-1">
                      <li>Inumidisci solo con le mani bagnate (o 2–3 spruzzate d&apos;acqua) la zona schiacciata — <strong>senza inzuppare le radici</strong>, basta inumidire l&apos;esterno per resettare la piega del cuscino.</li>
                      <li>Strizza le ciocche verso l&apos;alto con la mano finché torna la curva a &quot;S&quot;.</li>
                      <li>Solo sulle punte davanti e dietro passa la micro-goccia di Pantene + 2 gocce d&apos;acqua per chiudere il crespo e dare l&apos;effetto bagnato luminoso.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* 6.2 Polvere a secco */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-amber-400/35 space-y-2">
                <strong className="text-amber-300 block uppercase tracking-wider text-[11px]">
                  6.2 A Secco con Polvere Volumizzante (Quando Li Vedi Piatti Sopra)
                </strong>
                <p>
                  Se invece al mattino sono <strong>100% asciutti</strong> ma schiacciati/piatti in cima alla testa, la polvere dà il massimo proprio a secco:
                </p>
                <ol className="space-y-1 list-decimal pl-5">
                  <li>
                    <strong>Controlla che siano asciutti al 100%</strong> (se li hai appena bagnati prima con l&apos;acqua, aspetta che asciughino o fa grumi!).
                  </li>
                  <li>
                    Apri una piccola riga sopra la testa con le dita, dai <strong>1 micro-soffio</strong> di polvere direttamente alla radice (ripeti in 2–3 punti sopra e dietro la corona, <strong>mai sulle punte davanti</strong>).
                  </li>
                  <li>
                    Infila i polpastrelli sotto alle radici e massaggia per 3 secondi sollevando i capelli verso l&apos;alto.
                  </li>
                </ol>
                <p className="text-amber-200 text-[11px]">
                  <strong>Cosa succede subito:</strong> la polvere assorbe il sebo leggero della notte, stacca i capelli dalla pelle e crea un volume enorme, asciutto e opaco che puoi ritoccare tutto il giorno infilando le dita alla base.
                </p>
              </div>

              {/* 6.3 La Combo Perfetta */}
              <div className="p-3.5 rounded-2xl bg-lime-950/35 border border-lime-400/45 space-y-2">
                <strong className="text-lime-300 block uppercase tracking-wider text-[11px]">
                  6.3 La Combo Perfetta della Mattina (Volume Spaziale Sopra + Fronte Coperta Lucida)
                </strong>
                <p>Questo è lo schema migliore per uscire di casa al top senza lavarli:</p>
                <ol className="space-y-1 list-decimal pl-5">
                  <li><strong>Prima le radici (a secco):</strong> 2 micro-pizzichi di <strong>Polvere Volumizzante</strong> solo alla base sopra la testa + massaggio di 3 sec verso l&apos;alto → hai creato lo spazio e il volume in cima.</li>
                  <li><strong>Poi il davanti e le punte:</strong> <strong>1 chicco di riso di Pantene + 3 gocce d&apos;acqua</strong> sfregati sui palmi e passati leggeri sulle punte davanti con scrunch → chiudi i buchi e hai l&apos;effetto mosso bagnato ordinato sulla fronte senza schiacciare il volume sopra!</li>
                </ol>
              </div>

              {/* 6.4 Tenuta in giornata */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1.5">
                <strong className="text-white block uppercase tracking-wider text-[11px]">
                  6.4 Cosa Fare Durante la Giornata (Scuola, Vento, Casco, Palestra)
                </strong>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-cyan-300">Quando togli il casco:</strong> NON schiacciarti i capelli giù col palmo piatto davanti allo specchio. Infila le punte delle dita vicino alle radici, scuoti piano verso l&apos;alto per 5 secondi per far entrare aria: la polvere (o la memoria del diffusore) li ritira subito su!
                  </li>
                  <li>
                    <strong className="text-emerald-300">Quando sudi in palestra:</strong> asciuga solo la pelle della fronte con l&apos;asciugamano senza strofinare i capelli. Appena il sudore si asciuga all&apos;aria, le onde prendono ancora più forma.
                  </li>
                  <li>
                    <strong className="text-rose-300">In classe / in giro:</strong> tieni le mani lontane dal ciuffo davanti. Più li tocchi con le dita, più i capelli fini si ungono e si aprono.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* PUNTO 7. SALUTE CUTE, FORFORA VS BUILDUP & CALENDARIO SETTIMANALE */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'cute_forfora') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 block">
                  Punto 7 · Routine Settimanale, Salute Cute &amp; Prevenzione Forfora
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Piano Settimanale Esatto dei Lavaggi, Forfora vs Residui &amp; Head &amp; Shoulders
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-rose-500/35 space-y-4 bg-gradient-to-br from-rose-950/20 via-black/80 to-slate-950/30 text-xs text-gray-200 leading-relaxed">
              {/* 7.1 Forfora vs Buildup */}
              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-2">
                <strong className="text-emerald-300 block uppercase tracking-wider text-[11px]">
                  7.1 Il Taglio Non Crea Forfora (Anzi Fa Respirare la Pelle)
                </strong>
                <p>
                  La forfora vera nasce dalla pelle della testa, dal sebo e da un lievito naturale chiamato <em>Malassezia</em>, mai da come tagli le punte. Anzi, questo stile ti aiuta perché la pelle prende più aria rispetto a prima e non le punti più addosso il getto rovente del beccuccio ogni mattina (che seccava e spellava la cute).
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-400/35 space-y-2">
                <strong className="text-amber-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  7.2 Come Distinguere la Forfora dai Residui di Prodotto (Buildup)
                </strong>
                <p>
                  Se usi polvere volumizzante o cera opaca per 4–5 giorni di fila senza lavarli via con lo shampoo, la polvere si impasta col sebo creando pallini o scaglie bianche che sembrano forfora (ma sono solo residui!). Anche lo spray al sale marino spruzzato ogni giorno attaccato alle radici può seccare la pelle.
                </p>
              </div>

              {/* 7.3 Calendario Settimanale Pratico */}
              <div className="p-3.5 rounded-2xl bg-black/60 border border-cyan-500/35 space-y-2.5">
                <strong className="text-cyan-300 block uppercase tracking-wider text-[11px]">
                  7.3 Calendario Settimanale Ideale (Come Gestire i 7 Giorni Senza Sbagliare)
                </strong>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>
                    <strong className="text-white">2–3 Giorni a Settimana (Lavaggio Completo con Shampoo):</strong> ad esempio Lunedì, Mercoledì/Giovedì e Sabato. Fai lo shampoo <strong>Head &amp; Shoulders</strong> massaggiando la cute per 60 secondi coi polpastrelli (mai graffiare con le unghie!) per sciogliere ogni residuo di polvere, cera o balsamo. Poi segui il Punto 5 (tampona → Pantene/spray → pettine denti larghi → diffusore a testa in giù → aria fredda 5 sec → finitura).
                  </li>
                  <li>
                    <strong className="text-white">Gli Altri 4 Giorni (Refresh a Secco al Mattino):</strong> NON usare shampoo. Al mattino guarda allo specchio e applica il Punto 6 (solo polvere alle radici e/o chicco di riso di Pantene + acqua sulle punte).
                  </li>
                  <li>
                    <strong className="text-emerald-300">Se hai fatto molta palestra e sudato tantissimo in un giorno NO-shampoo:</strong> puoi sciacquarli in doccia <strong>solo con acqua tiepida</strong> (senza shampoo!) per togliere il sudore, poi tamponi e asciughi 2 minuti col diffusore.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* PUNTO 8. LINK TIKTOK DI RIFERIMENTO (6 VIDEO)                     */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'video_ispirazione') && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Video className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 block">
                  Punto 8 · Archivio Video TikTok &amp; Cosa Guardare
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Tutti i 6 Video Riferimento (Taglio, Prodotti, Pettine &amp; Phon)
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {TIKTOK_REFERENCE_GROUPS.map((group) => (
                <div
                  key={group.groupTitle}
                  className="p-4 rounded-3xl glass-card border border-purple-500/30 space-y-2.5 bg-gradient-to-br from-purple-950/20 via-black/80 to-slate-950/30"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xs sm:text-sm font-black text-white">
                      {group.groupTitle}
                    </h3>
                    <span className="text-[11px] font-semibold text-purple-300">
                      {group.badge}
                    </span>
                  </div>

                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    <strong className="text-purple-200">Cosa guardare bene:</strong> {group.whatToWatch}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.links.map((item) => (
                      <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-2xl bg-black/60 hover:bg-purple-500/15 border border-white/10 hover:border-purple-400/50 transition-all flex items-center justify-between gap-2 group"
                      >
                        <div className="min-w-0">
                          <span className="text-xs font-extrabold text-white group-hover:text-purple-200 block truncate">
                            {item.label}
                          </span>
                          <span className="text-[10px] text-gray-400 block truncate">
                            {item.url}
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-purple-400 shrink-0 group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quick Point-to-Point Footer Navigation when viewing a single point */}
        {activeTab !== 'tutte' && (
          <div className="pt-2 flex items-center justify-between gap-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => handleSelectTab('tutte')}
              className="py-2 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              Vedi Tutti i 9 Punti
            </button>
            {nextTab && (
              <button
                type="button"
                onClick={() => handleSelectTab(nextTab.id)}
                className="py-2 px-3.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-xs font-bold text-teal-200 transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap"
              >
                <span>Prossimo: {nextTab.label}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
