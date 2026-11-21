import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Layers,
  Utensils,
  HeartPulse,
  Dumbbell,
  Droplets,
  Flame,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Leaf,
  Bone
} from 'lucide-react';
import { scrollToTop, scrollToElement } from '../../utils/scrollHelper';

interface PrevenzioneMicronutrientiMassaViewProps {
  onBack: () => void;
  initialTab?: string;
  onOpenPrevenzioneEta?: () => void;
}

type MicronutrientiTabId =
  | 'tutte'
  | 'frutta_verdura'
  | 'semi_grassi'
  | 'brodo_densi'
  | 'mappa_bersagli'
  | 'piano_pratico'
  | 'diabete_digestione';

const TAB_CONFIG: { id: MicronutrientiTabId; label: string }[] = [
  { id: 'tutte', label: 'Tutte (6)' },
  { id: 'frutta_verdura', label: '1. Frutta & Verdura' },
  { id: 'semi_grassi', label: '2. Semi & Grassi Buoni' },
  { id: 'brodo_densi', label: '3. Brodo d\'Ossa & Extra' },
  { id: 'mappa_bersagli', label: '4. Pelle, Capelli & Muscoli' },
  { id: 'piano_pratico', label: '5. Rotazione Pratica' },
  { id: 'diabete_digestione', label: '6. Glicemia & Intestino' }
];

function normalizeTabId(raw?: string): MicronutrientiTabId {
  if (!raw) return 'tutte';
  const valid = TAB_CONFIG.some((t) => t.id === raw);
  return valid ? (raw as MicronutrientiTabId) : 'tutte';
}

export const PrevenzioneMicronutrientiMassaView: React.FC<
  PrevenzioneMicronutrientiMassaViewProps
> = ({ onBack, initialTab, onOpenPrevenzioneEta }) => {
  const [activeTab, setActiveTab] = useState<MicronutrientiTabId>(() =>
    normalizeTabId(initialTab)
  );
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (tab: MicronutrientiTabId) => {
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

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Top Navigation */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-emerald-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>

        {onOpenPrevenzioneEta ? (
          <button
            type="button"
            onClick={onOpenPrevenzioneEta}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-lime-500/20 hover:bg-lime-500/30 text-lime-200 border border-lime-400/40 text-[11px] font-bold transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-lime-300" />
            <span>Prevenzione Età</span>
          </button>
        ) : (
          <span className="text-[11px] font-bold text-emerald-300 flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            Prevenzione · Fase Massa
          </span>
        )}
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-emerald-400/35 relative overflow-hidden space-y-3 bg-gradient-to-br from-emerald-950/45 via-black/85 to-lime-950/30 shadow-[0_0_30px_rgba(16,185,129,0.16)]">
        <div className="text-[11px] font-semibold text-emerald-300 flex flex-wrap items-center gap-2">
          <span>★ Prevenzione &amp; Nutrizione Avanzata</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-lime-300">Da Giugno in Poi (Fase Massa)</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-amber-300">Pelle, Capelli, Corpo &amp; Muscoli</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
          Tutti i Micronutrienti Una Volta Che Si Inizia la Massa e la Crescita di Muscoli
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Quando finirai la fase di perdita grasso e ricomposizione corporea e alzerai le calorie per iniziare la <strong className="text-emerald-300">crescita muscolare (da giugno in poi)</strong>, avrai molto più spazio nel budget giornaliero per inserire cibi densi di <strong className="text-white">vitamine, minerali, fibre, collagene (brodo d&apos;ossa) e grassi buoni</strong> per nutrire <strong className="text-lime-300">pelle, capelli, corpo, ossa e muscoli</strong> senza sacrificare proteine né recupero.
        </p>

        {/* Tabs */}
        <div className="pt-2.5 flex flex-wrap gap-1.5 border-t border-white/10">
          {TAB_CONFIG.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleSelectTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-emerald-400 text-black font-black shadow-md shadow-emerald-400/25'
                  : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              {tab.id === 'tutte' && <Layers className="w-3.5 h-3.5" />}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div ref={contentRef} className="space-y-6 scroll-mt-16">
        {/* Intro Principio Base */}
        <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 text-xs text-gray-200 leading-relaxed">
          <strong className="text-emerald-300 block mb-1 uppercase tracking-wider text-[11px]">
            Principio Chiave della Fase Massa (Zero Lista da Farmacista)
          </strong>
          Non esiste un singolo alimento &quot;miracoloso&quot;, ma combinare diverse famiglie di cibi ti permette di coprire praticamente <strong className="text-white">tutti i micronutrienti essenziali</strong> in modo naturale e pratico, costruendo muscolo pulito mentre proteggi pelle, follicoli, tendini e salute metabolica.
        </div>

        {/* ================================================================= */}
        {/* 1. FRUTTA E VERDURA RICCHE DI VITAMINE E ANTIOSSIDANTI             */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'frutta_verdura') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-lime-500/20 text-lime-300 border border-lime-500/30">
                <Leaf className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-lime-400 block">
                  Famiglia 1 · Vitamine, Antiossidanti &amp; Precursori
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  1. Frutta e Verdura Ricche di Vitamine e Antiossidanti (Base + Extra)
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-lime-500/35 space-y-3 bg-gradient-to-br from-lime-950/25 via-black/85 to-emerald-950/20 text-xs text-gray-200 leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3.5 rounded-2xl bg-black/55 border border-lime-400/25 space-y-1">
                  <strong className="text-lime-300 block">🥝 Kiwi</strong>
                  <p>
                    Ottima fonte di <strong>vitamina C</strong> (anche più delle arance a parità di peso), potassio e fibre solubili + actinidina (enzima digestivo). Indispensabile per supporto immunitario, <strong>sintesi del collagene</strong> (pelle e tendini) e regolarità intestinale.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-purple-400/25 space-y-1">
                  <strong className="text-purple-300 block">🫐 Frutti di Bosco (Mirtilli, Fragole, Lamponi)</strong>
                  <p>
                    Ricchi di <strong>polifenoli, antociani e antiossidanti</strong> che proteggono i microcapillari (pelle, retina, follicoli) con un <strong>impatto glicemico contenuto</strong> rispetto ad altra frutta molto zuccherina.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-amber-400/25 space-y-1">
                  <strong className="text-amber-300 block">🍊 Agrumi (Arance, Mandarini, Limoni)</strong>
                  <p>
                    Apportano vitamina C, potassio, esperidina e composti vegetali utili per il recupero muscolare e per <strong>moltiplicare l&apos;assorbimento del ferro non-eme</strong> (vegetale, es. da legumi e spinaci).
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-yellow-400/25 space-y-1">
                  <strong className="text-yellow-300 block">🍌 Banane</strong>
                  <p>
                    Pratiche e caloricamente comode in massa, ottime per il <strong>potassio</strong> (contrazione muscolare e idratazione intracellulare), vitamina B6 e carboidrati veloci/intermedi intorno agli allenamenti.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-emerald-400/30 space-y-1">
                <strong className="text-emerald-300 block">🥬 Verdure a Foglia Verde Scuro (Spinaci, Bietole, Rucola, Broccoli, Cavolo Nero)</strong>
                <p>
                  Ricche di <strong>folati (vitamina B9)</strong>, <strong>vitamina K1</strong>, <strong>magnesio</strong> (al centro della molecola di clorofilla!), luteina e fitonutrienti come il sulforafano (nei broccoli) per la detossificazione cellulare e la salute vascolare.
                </p>
              </div>

              {/* TANTI ALTRI EXTRA VEGETALI */}
              <div className="p-3.5 rounded-2xl bg-emerald-950/35 border border-emerald-400/40 space-y-2">
                <strong className="text-emerald-200 block uppercase tracking-wider text-[11px]">
                  + Tanti Altri Extra Fondamentali Per Pelle, Capelli &amp; Muscoli
                </strong>
                <ul className="list-disc pl-5 space-y-1.5 text-[11px]">
                  <li>
                    <strong className="text-white">Carote, Zucca &amp; Melone / Albicocche:</strong> pieni di <strong>beta-carotene (pro-vitamina A)</strong> che regola il ricambio cellulare della pelle (anti-ispessimento dei pori) e protegge le mucose.
                  </li>
                  <li>
                    <strong className="text-white">Peperoni rossi/gialli &amp; Pomodori cotti (con olio EVO):</strong> i peperoni hanno una densità altissima di vitamina C per il collagene; i pomodori cotti rilasciano <strong>licopene</strong>, scudo naturale della pelle contro lo stress ossidativo da raggi UV.
                  </li>
                  <li>
                    <strong className="text-white">Barbabietole rosse &amp; Rucola:</strong> ricchissime di <strong>nitrati naturali</strong> che il corpo converte in <strong>ossido nitrico (NO)</strong> → migliorano il flusso sanguigno verso i muscoli in palestra, l&apos;ossigenazione e l&apos;arrivo di nutrienti ai bulbi dei capelli.
                  </li>
                  <li>
                    <strong className="text-white">Funghi (esposti al sole/UV, Shiitake, Champignon):</strong> apportano vitamine B2, B3, B5, rame, selenio, ergotioneina (&quot;vitamina della longevità&quot;) e beta-glucani immunitari.
                  </li>
                  <li>
                    <strong className="text-white">Aglio, Cipolla, Porri &amp; Cavoli (Brassicacee):</strong> ricchi di <strong>composti solforati (zolfo organico)</strong> — mattoni chiave insieme agli aminoacidi solforati per sintetizzare cheratina (capelli/unghie), collagene e glutatione antiossidante.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 2. SEMI, FRUTTA SECCA E GRASSI BUONI                              */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'semi_grassi') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                  Famiglia 2 · Minerali, Vitamina E &amp; Grassi Strutturali
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  2. Semi, Frutta Secca e Grassi Buoni (Base + Extra)
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-amber-500/35 space-y-3 bg-gradient-to-br from-amber-950/25 via-black/85 to-orange-950/20 text-xs text-gray-200 leading-relaxed">
              <p>
                Quando hai più calorie a disposizione in massa, diventano facilissimi da inserire senza &quot;pesare&quot; troppo sullo stomaco:
              </p>

              <div className="space-y-2.5">
                <div className="p-3.5 rounded-2xl bg-black/55 border border-amber-400/30 space-y-1">
                  <strong className="text-amber-300 block">🎃 Semi di Zucca</strong>
                  <p>
                    Tra le fonti vegetali più interessanti di <strong>zinco</strong> e <strong>magnesio</strong>, oltre a ferro e grassi insaturi. Fondamentali per recupero muscolare, regolazione del sebo cutaneo, salute follicolare, funzione immunitaria e supporto ormonale/metabolico generale.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-cyan-400/25 space-y-1">
                  <strong className="text-cyan-300 block">🌱 Semi di Chia, Lino (tritati), Girasole &amp; Canapa</strong>
                  <p>
                    Ottimi per fibre prebiotiche, <strong>omega-3 (ALA)</strong> (soprattutto chia, canapa e lino macinati al momento), <strong>vitamina E</strong> (girasole, protettiva delle membrane cellulari di pelle e muscoli) e minerali traccia (manganese, rame, fosforo).
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-orange-400/25 space-y-1">
                  <strong className="text-orange-300 block">🥜 Mandorle, Noci, Nocciole &amp; Pistacchi</strong>
                  <p>
                    Buona fonte di <strong>vitamina E</strong>, <strong>magnesio</strong>, <strong>rame</strong>, <strong>boro</strong> (minerale alleato di ossa e metabolismo ormonale) e grassi monoinsaturi/polinsaturi. Basta una manciata (es. <strong>15–30 g</strong>) per aggiungere calorie pulite e densità nutrizionale.
                  </p>
                </div>
              </div>

              {/* EXTRA GRASSI BUONI E FRUTTA SECCA */}
              <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-400/40 space-y-2">
                <strong className="text-amber-200 block uppercase tracking-wider text-[11px]">
                  + Extra Chiave Tra Grassi Buoni &amp; Semi
                </strong>
                <ul className="list-disc pl-5 space-y-1.5 text-[11px]">
                  <li>
                    <strong className="text-white">Noci Brasiliane (1–2 al giorno, non di più!):</strong> bastano letteralmente 1–2 noci al giorno per coprire il 100% del fabbisogno di <strong>selenio</strong> (cruciale per tiroide, difesa antiossidante glutatione, capelli e recupero).
                  </li>
                  <li>
                    <strong className="text-white">Olio Extravergine d&apos;Oliva (EVO a crudo):</strong> acido oleico monoinsaturo, vitamina E e polifenoli potenti (<em>oleocantale</em>, anti-infiammatorio). In più fa da veicolo per assorbire le vitamine liposolubili <strong>A, D, E, K</strong> delle verdure e rallenta l&apos;assorbimento dei carboidrati nel pasto.
                  </li>
                  <li>
                    <strong className="text-white">Avocado:</strong> ricco di potassio (più della banana!), folati, vitamina E, vitamina K, luteina e fibre solubili — eccellente per elasticità della pelle e sazietà pulita senza picchi glicemici.
                  </li>
                  <li>
                    <strong className="text-white">Cacao Amaro Puro / Cioccolato Fondente 85%+:</strong> uno dei cibi più ricchi in assoluto di <strong>magnesio, ferro, rame, manganese</strong> e <strong>flavanoli</strong> (che migliorano elasticità dei vasi sanguigni e flusso al cervello/muscoli).
                  </li>
                  <li>
                    <strong className="text-white">Semi di Sesamo / Tahina:</strong> fonte top di <strong>calcio</strong> vegetale, rame e lignani antiossidanti (sesamina).
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 3. BRODO D'OSSA & ALTRI ALIMENTI AD ALTA DENSITÀ                  */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'brodo_densi') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Utensils className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400 block">
                  Famiglia 3 · Collagene, Proteine Nobili, Minerali &amp; Fermentati
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  3. Brodo d&apos;Ossa &amp; Altri Alimenti ad Alta Densità di Micronutrienti
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-teal-500/35 space-y-3 bg-gradient-to-br from-teal-950/25 via-black/85 to-cyan-950/20 text-xs text-gray-200 leading-relaxed">
              {/* ★ BRODO D'OSSA IN PRIMO PIANO */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 via-black/75 to-teal-950/35 border-2 border-amber-400/50 space-y-2">
                <strong className="text-amber-300 flex items-center gap-1.5 uppercase tracking-wider text-xs">
                  <Bone className="w-4 h-4 text-amber-400 shrink-0" />
                  ★ Brodo d&apos;Ossa (Bone Broth) — Il Jolly Per Pelle, Tendini, Intestino &amp; Articolazioni
                </strong>
                <p>
                  Quando aumenti i carichi in massa, i muscoli crescono più velocemente di tendini e legamenti: il brodo d&apos;ossa (fatto sobbollendo lentamente ossa ricche di cartilagine/midollo per ore con un goccio di limone o aceto per estrarre i minerali) ti dà un pacchetto unico:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-[11px]">
                  <li>
                    <strong className="text-white">Peptidi naturali di Collagene (Tipo I, II, III):</strong> fornisce <strong>glicina, prolina e idrossiprolina</strong> — gli aminoacidi specifici usati per rigenerare <strong>derma (pelle compatta), tendini, legamenti, cartilagini e matrice ossea</strong>, che mancano nei tagli magri di solo petto di pollo o negli shake whey!
                  </li>
                  <li>
                    <strong className="text-amber-200">Glicosaminoglicani (Condroitina, Glucosamina &amp; Acido Ialuronico):</strong> lubrificano le articolazioni sotto carico pesante e migliorano idratazione ed elasticità della pelle.
                  </li>
                  <li>
                    <strong className="text-emerald-300">L-Glutammina &amp; Glicina:</strong> nutrono le cellule della parete intestinale (riducendo permeabilità e migliorando l&apos;assorbimento di tutti gli altri micronutrienti in massa!) e migliorano qualità del sonno/recupero se bevuto tiepido la sera.
                  </li>
                  <li>
                    <strong className="text-cyan-300">Elettroliti e minerali:</strong> calcio, fosforo, magnesio e potassio in forma liquida altamente digeribile (quasi zero carboidrati e zero picchi glicemici!).
                  </li>
                </ul>
              </div>

              {/* ALTRI ALIMENTI RICHIESTI */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                  <strong className="text-teal-300 block">🫘 Legumi (Lenticchie, Ceci, Fagioli, Piselli)</strong>
                  <p>
                    Ottimi per <strong>ferro, zinco, folati, potassio, magnesio</strong> e fibre prebiotiche, oltre a dare una mano sulle proteine complessive e sui carboidrati a rilascio lento.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                  <strong className="text-amber-200 block">🍠 Cereali Integrali &amp; Patate / Patate Dolci</strong>
                  <p>
                    Avena, riso integrale/basmati, farro, grano saraceno, patate e patate dolci: sostengono il glicogeno degli allenamenti e apportano <strong>vitamine gruppo B (B1, B2, B3, B5, B6)</strong>, manganese e magnesio rispetto alle farine raffinate.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-sky-400/25 space-y-1">
                  <strong className="text-sky-300 block">🐟 Pesce Azzurro / Grasso (Sgombro, Sardine, Salmone, Alici)</strong>
                  <p>
                    Porta <strong>omega-3 (EPA e DHA)</strong> già pronti per cervello, pelle e riduzione infiammazione post-workout, insieme a <strong>vitamina D, vitamina B12, iodio e selenio</strong> (le sardine con lisca morbida danno anche tantissimo calcio!).
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-yellow-400/25 space-y-1">
                  <strong className="text-yellow-300 block">🥚 Uova Intere &amp; Fegato / Frattaglie (Occasionalmente)</strong>
                  <p>
                    Il tuorlo è ricco di <strong>colina</strong> (sistema nervoso/fegato), <strong>biotina (B7)</strong> per i capelli (sempre albume cotto!), vitamina A, D, E, K e luteina; il fegato (ogni tanto) è il &quot;multivitaminico&quot; naturale più denso di vitamina A, B12, folati, rame e ferro eme.
                  </p>
                </div>
              </div>

              {/* TANTI ALTRI EXTRA ESSENZIALI */}
              <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-400/35 space-y-2">
                <strong className="text-cyan-200 block uppercase tracking-wider text-[11px]">
                  + Tanti Altri Alimenti Densi di Micronutrienti da Aggiungere in Massa
                </strong>
                <ul className="list-disc pl-5 space-y-1.5 text-[11px]">
                  <li>
                    <strong className="text-white">Molluschi &amp; Crostacei (Cozze, Vongole, Calamari, Gamberi) + Carne Rossa Magra / Tacchino:</strong> le vongole e le cozze sono campioni assoluti di <strong>zinco, ferro eme, vitamina B12, rame e manganese</strong>; la carne rossa magra 1–2 volte a settimana mantiene alti <strong>ferritina</strong> (ossigeno a muscoli e capelli), <strong>creatina, carnosina</strong> e taurina naturali.
                  </li>
                  <li>
                    <strong className="text-white">Kefir, Yogurt Greco &amp; Cibi Fermentati (Crauti / Kimchi crudi):</strong> oltre a proteine nobili e <strong>calcio biodisponibile</strong>, forniscono probiotici per il microbiota (asse intestino-pelle) e <strong>vitamina K2</strong> che indirizza il calcio dentro le ossa anziché nei vasi sanguigni.
                  </li>
                  <li>
                    <strong className="text-white">Formaggi Stagionati (es. Parmigiano / Grana, dosati con moderazione):</strong> calcio molto concentrato, fosforo, zinco, vitamina A e K2 (e pochissimo lattosio).
                  </li>
                  <li>
                    <strong className="text-white">Germe di Grano &amp; Lievito Alimentare in Scaglie:</strong> bastano 1–2 cucchiaini per avere un boost massiccio di <strong>vitamine B1, B2, B3, B5, B6</strong>, vitamina E e zinco.
                  </li>
                  <li>
                    <strong className="text-white">Sale Iodato (in dosi normali) &amp; Alghe / Pesce Bianco:</strong> garantiscono lo <strong>iodio</strong> necessario alla tiroide per regolare metabolismo, energia e crescita dei capelli.
                  </li>
                  <li>
                    <strong className="text-white">Acqua Minerale Ricca di Calcio/Magnesio, Tè Verde &amp; Spezie (Curcuma + Pepe Nero, Zenzero, Cannella, Rosmarino):</strong> zero calorie ma potentissimo effetto antiossidante e <strong>anti-glicazione (anti-AGEs)</strong>, preziosissimo per proteggere collagene e vasi con il diabete.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 4. MAPPA COMPLETA PER BERSAGLIO: PELLE, CAPELLI, CORPO & MUSCOLI  */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'mappa_bersagli') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Dumbbell className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 block">
                  Mappa Scientifica Completa
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  4. Ogni Micronutriente Essenziale Diviso Per Obiettivo (Pelle · Capelli · Corpo · Muscoli)
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-200 leading-relaxed">
              {/* Pelle */}
              <div className="p-4 rounded-3xl glass-card border border-rose-400/35 bg-gradient-to-br from-rose-950/25 via-black/85 to-slate-950/30 space-y-1.5">
                <strong className="text-rose-300 uppercase tracking-wider text-[11px] block">
                  ✨ Pelle Compatta, Pulita &amp; Elastica
                </strong>
                <ul className="list-disc pl-4 space-y-1 text-[11px]">
                  <li><strong>Vitamina C + Rame + Glicina/Prolina:</strong> triade obbligatoria per fabbricare nuovo collagene (kiwi, peperoni, agrumi, brodo d&apos;ossa, cacao).</li>
                  <li><strong>Vitamina A / Beta-carotene:</strong> regola turnover cellulare ed evita cheratinizzazione dei pori (carote, zucca, tuorlo).</li>
                  <li><strong>Zinco + Omega-3 EPA/DHA + Vitamina E:</strong> modulano sebo e infiammazione, proteggono la barriera lipidica (semi zucca, pesce azzurro, olio EVO, mandorle).</li>
                  <li><strong>Licopene + Polifenoli:</strong> difesa foto-ossidativa (pomodori cotti, frutti di bosco, tè verde).</li>
                </ul>
              </div>

              {/* Capelli */}
              <div className="p-4 rounded-3xl glass-card border border-teal-400/35 bg-gradient-to-br from-teal-950/25 via-black/85 to-slate-950/30 space-y-1.5">
                <strong className="text-teal-300 uppercase tracking-wider text-[11px] block">
                  💇 Capelli Forti, Spessi &amp; Follicoli Attivi
                </strong>
                <ul className="list-disc pl-4 space-y-1 text-[11px]">
                  <li><strong>Ferro (Ferritina) + Vitamina C:</strong> porta ossigeno alle cellule in rapida divisione del bulbo (carne magra, cozze, legumi + limone).</li>
                  <li><strong>Biotina (B7) + Aminoacidi Solforati (Cisteina/Metionina):</strong> struttura fisica della cheratina (uova sempre ben cotte, carne, pesce, cipolle/aglio).</li>
                  <li><strong>Zinco + Selenio + Iodio:</strong> dividono le cellule follicolari e sostengono la tiroide (semi zucca, 1–2 noci brasiliane, pesce, sale iodato).</li>
                  <li><strong>Vitamina D3 + Rame:</strong> attivano la fase Anagen di crescita e la pigmentazione (sole sicuro/pesce grasso, cacao, nocciole).</li>
                </ul>
              </div>

              {/* Muscoli & Crescita */}
              <div className="p-4 rounded-3xl glass-card border border-orange-400/35 bg-gradient-to-br from-orange-950/25 via-black/85 to-slate-950/30 space-y-1.5">
                <strong className="text-orange-300 uppercase tracking-wider text-[11px] block">
                  💪 Muscoli, Forza &amp; Crescita in Massa
                </strong>
                <ul className="list-disc pl-4 space-y-1 text-[11px]">
                  <li><strong>Magnesio + Potassio:</strong> produzione ATP, contrazione/rilascio, stoccaggio del glicogeno intramuscolare e zero crampi (spinaci, semi zucca, banane, patate, cacao).</li>
                  <li><strong>Complesso B (B1, B2, B3, B5, B6, B9, B12):</strong> convertono carboidrati e aminoacidi in energia e sintesi proteica (cereali integrali, uova, carne, legumi, lievito alimentare).</li>
                  <li><strong>Vitamina D3 + Zinco:</strong> recettori muscolari VDR per reclutamento fibre rapide, forza e assetto anabolico naturale.</li>
                  <li><strong>Nitrati + Ferri Eme:</strong> pompa ematica e trasporto ossigeno (rucola, barbabietola, carne magra).</li>
                </ul>
              </div>

              {/* Corpo, Ossa & Tendini */}
              <div className="p-4 rounded-3xl glass-card border border-lime-400/35 bg-gradient-to-br from-lime-950/25 via-black/85 to-slate-950/30 space-y-1.5">
                <strong className="text-lime-300 uppercase tracking-wider text-[11px] block">
                  🦴 Ossa, Tendini, Sistema Nervoso &amp; Difese
                </strong>
                <ul className="list-disc pl-4 space-y-1 text-[11px]">
                  <li><strong>Calcio + Vitamina D3 + Vitamina K2 + Magnesio:</strong> mineralizzazione ossea e fissazione sicura del calcio nello scheletro (sardine, yogurt greco/kefir, verdure verdi, semi di sesamo).</li>
                  <li><strong>Collagene / GAGs / Silicio / Manganese:</strong> tenuta meccanica di tendini e cartilagini mentre salgono i carichi (brodo d&apos;ossa, avena integrale, frutta secca).</li>
                  <li><strong>Colina + Omega-3 DHA:</strong> trasmissione neuromuscolare (unità motorie), memoria e recupero SNC (tuorli d&apos;uovo, pesce azzurro).</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 5. COME INSERIRLI SENZA COMPLICARTI LA VITA IN MASSA              */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'piano_pratico') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block">
                  Organizzazione Pratica
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  5. Come Inserirli Senza Complicarti la Vita in Massa
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/35 space-y-3 bg-gradient-to-br from-cyan-950/25 via-black/85 to-slate-950/30 text-xs text-gray-200 leading-relaxed">
              <ul className="space-y-2.5 list-disc pl-5">
                <li>
                  <strong className="text-white">Non serve mangiarli tutti ogni giorno:</strong> puntare sulla <strong className="text-emerald-300">rotazione settimanale</strong> (es. alternare kiwi e agrumi, variare frutta secca e semi, alternare pesce grasso/carne/uova/legumi, tenere sempre una porzione di verdura e una di frutta) è molto più sostenibile che fare un miscuglio fisso ogni mattina.
                </li>
                <li>
                  <strong className="text-white">Aggiungili dove ti tornano comodi:</strong> una manciata di semi di zucca o frutta secca + 1 noce brasiliana nello yogurt/shake o a fine pasto; un kiwi o una banana dopo l&apos;allenamento; verdure colorate con olio EVO a pranzo e cena; una tazza di <strong className="text-amber-300">brodo d&apos;ossa</strong> caldo prima della cena o nei giorni pesanti di palestra.
                </li>
                <li>
                  <strong className="text-white">Sfrutta gli abbinamenti furbi:</strong> metti sempre succo di limone su spinaci/legumi (Vitamina C × Ferro), aggiungi sempre olio EVO sulle verdure (grassi buoni × Vitamine A/D/E/K + Licopene) e cuoci sempre gli albumi per sbloccare la biotina delle uova.
                </li>
              </ul>
            </div>
          </section>
        )}

        {/* ================================================================= */}
        {/* 6. OCCHIO A DIGESTIONE E GLICEMIA (DIABETE IN MASSA)              */}
        {/* ================================================================= */}
        {(activeTab === 'tutte' || activeTab === 'diabete_digestione') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <HeartPulse className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 block">
                  Gestione Diabete &amp; Intestino in Massa
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  6. Occhio Alla Digestione e Alla Glicemia Quando Aumenti Tutto
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-rose-500/35 space-y-3 bg-gradient-to-br from-rose-950/25 via-black/85 to-amber-950/20 text-xs text-gray-200 leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-black/55 border border-amber-400/30 space-y-1.5">
                <strong className="text-amber-300 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  Aumenta Fibre, Semi e Frutta in Modo Graduale
                </strong>
                <p>
                  Passare di colpo da poche fibre a tantissimi legumi, semi di chia/lino e frutta crea fermentazione, gonfiore e può alterare i tempi di svuotamento gastrico. Aumenta una porzione ogni 4–5 giorni bevendo sempre <strong className="text-white">2,5–3 litri d&apos;acqua</strong> al giorno (fondamentale affinché le fibre scorrano bene senza bloccare l&apos;intestino!).
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-rose-400/35 space-y-1.5">
                <strong className="text-rose-300 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <Droplets className="w-4 h-4 text-rose-400 shrink-0" />
                  Controllo della Risposta Glicemica in Massa (Con il Diabete)
                </strong>
                <ul className="list-disc pl-5 space-y-1 text-[11px]">
                  <li>
                    <strong>Ordine del piatto anti-picco:</strong> inizia con verdure (o brodo d&apos;ossa), poi proteine e grassi buoni (EVO/semi/pesce) e lascia i carboidrati complessi o la frutta a fine pasto — riduci il picco post-prandiale e previeni la glicazione del collagene (<em>AGEs</em>).
                  </li>
                  <li>
                    <strong>Frutta intelligente:</strong> usa <strong>frutti di bosco e kiwi</strong> nei pasti tranquilli per il loro impatto glicemico contenuto, e tieni la <strong>banana</strong> soprattutto vicino o subito dopo l&apos;allenamento con i pesi (quando i recettori <em>GLUT4</em> dei muscoli assorbono glucosio come spugne).
                  </li>
                  <li>
                    <strong>Pasti densi di grassi + carboidrati in massa:</strong> quando aggiungi più frutta secca/olio/formaggi a un pasto ricco di carboidrati, ricorda che i grassi rallentano l&apos;assorbimento creando una coda glicemica più lunga (<em>onda lunga</em> 2–4 ore dopo), quindi monitora il sensore per calibrare eventuale bolo doppio/esteso!
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {onOpenPrevenzioneEta && (
          <button
            type="button"
            onClick={onOpenPrevenzioneEta}
            className="w-full p-4 rounded-2xl bg-lime-500/15 hover:bg-lime-500/25 border border-lime-400/40 flex items-center justify-between text-xs font-black text-lime-200 transition-all cursor-pointer active:scale-98"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-lime-300" />
              <span>Vai alla Guida Principale Prevenzione Età, Ossa, Collagene &amp; Diabete</span>
            </span>
            <ChevronRight className="w-4 h-4 text-lime-300" />
          </button>
        )}
      </div>
    </div>
  );
};
