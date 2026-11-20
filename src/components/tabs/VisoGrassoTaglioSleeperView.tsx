import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Scale,
  Eye,
  Flame,
  Footprints,
  Dumbbell,
  Clock,
  Scissors,
  CheckCircle2,
  Zap,
  ShieldCheck,
  TrendingDown,
  Info
} from 'lucide-react';
import { scrollToTop, scrollToElement } from '../../utils/scrollHelper';

export type VisoGrassoTabId =
  | 'tutte'
  | 'grasso_taglio'
  | 'biologia_73kg'
  | 'faccia_fine'
  | 'piano_giugno'
  | 'sinistra_fino_destra';

interface VisoGrassoTaglioSleeperViewProps {
  onBack: () => void;
  initialTab?: string;
}

export const VisoGrassoTaglioSleeperView: React.FC<VisoGrassoTaglioSleeperViewProps> = ({
  onBack,
  initialTab
}) => {
  const [activeTab, setActiveTab] = useState<VisoGrassoTabId>(
    (initialTab as VisoGrassoTabId) || 'tutte'
  );
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (tab: VisoGrassoTabId) => {
    setActiveTab(tab);
    if (tab !== 'tutte') {
      scrollToElement(contentRef.current, 68);
    }
  };

  useEffect(() => {
    if (initialTab && initialTab !== 'tutte') {
      setActiveTab(initialTab as VisoGrassoTabId);
      setTimeout(() => scrollToElement(contentRef.current, 68), 80);
    } else {
      scrollToTop();
    }
  }, [initialTab]);

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Top Sticky Bar */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a La Mia Asimmetria</span>
        </button>

        <span className="text-[11px] font-bold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-xl border border-cyan-500/25 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          Nuova Nota · Grasso &amp; Taglio
        </span>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border-2 border-cyan-400/50 relative overflow-hidden space-y-3 bg-gradient-to-br from-cyan-950/45 via-black/90 to-emerald-950/30 shadow-[0_0_35px_rgba(6,182,212,0.2)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Nota Dedicata nella Sezione Asimmetria
          </span>
          <span className="text-[10px] text-gray-300 font-semibold">
            1,75 m × 73 kg · Età 16 Anni · Obiettivo Giugno
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
          Grasso Facciale (Pinch Test), Illusione Ottica Taglio Corto &amp; Strategia &quot;Faccia Fine&quot;
        </h1>

        <p className="text-xs text-gray-200 leading-relaxed font-medium">
          Spiegazione scientifica completa senza filtri: perché allo specchio vedi guance piene e contorni &quot;sfumati&quot; nonostante tu pesi 73 kg su 1,75 m, il ruolo ottico del taglio corto (<em>low-fade</em> vs chioma lunga), la biochimica dei recettori del grasso ostinato e i 3 fronti pratici (Deficit <strong>~1.600 kcal</strong> + <strong>10.000</strong> passi + Masseteri/Palestra) per la trasformazione entro Giugno.
        </p>

        {/* Sub-tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-white/10">
          {[
            { id: 'tutte', label: 'Tutta la Nota' },
            { id: 'grasso_taglio', label: '1. Verità Grasso & Taglio Corto' },
            { id: 'biologia_73kg', label: '2. Perché Succede (1,75m / 73kg)' },
            { id: 'faccia_fine', label: '3. Strategia "Faccia Fine" (3 Fronti)' },
            { id: 'piano_giugno', label: '4. 16 Anni & Risultato Giugno' },
            { id: 'sinistra_fino_destra', label: '5. Lato Sinistro "Fino" vs Destro' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleSelectTab(tab.id as VisoGrassoTabId)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-cyan-400 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                  : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div ref={contentRef} className="scroll-mt-16" />

      {/* ===================================================================== */}
      {/* SEZIONE 1: LA VERITÀ SUL GRASSO NEL VISO & EFFETTO TAGLIO CORTO       */}
      {/* ===================================================================== */}
      {(activeTab === 'tutte' || activeTab === 'grasso_taglio') && (
        <div className="space-y-3.5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Eye className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Diagnosi Onesta &amp; Ottica Visiva • Sezione 1
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  1. La Verità sul Grasso nel Viso &amp; L&apos;Effetto del Taglio Corto
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              Pinch Test &amp; Framing
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-amber-500/35 bg-black/75 space-y-4 text-xs text-gray-200 leading-relaxed">
            {/* A. Grasso Sottocutaneo e Ritenzione */}
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-300 font-black uppercase text-[11px]">
                <Info className="w-4 h-4 shrink-0" />
                <span>A. Grasso Sottocutaneo, Test del Pizzico (Pinch Test) &amp; Ritenzione Idrica</span>
              </div>
              <p>
                Guardando le foto con totale onestà: sì, c&apos;è un margine di miglioramento molto ampio sulla definizione del viso e della mascella. Le guance mostrano una struttura morbida e i contorni di mandibola e mento risultano &quot;sfumati&quot; da un doppio velo sovrapposto all&apos;osso:
              </p>
              <ul className="space-y-1.5 list-disc pl-5 text-[11px] text-gray-200">
                <li>
                  <strong className="text-white">Tessuto Adiposo Sottocutaneo (Visibile al Pinch Test):</strong> quando pizzichi o tiri leggermente la pelle della guancia bassa o sotto il mento, senti chiaramente uno spessore morbido tra le dita. È la prova diretta che lo smussamento <strong className="text-amber-300">non è osso largo o &quot;faccia difettosa&quot;</strong>, ma un cuscinetto di trigliceridi superficiali (compartimenti adiposi buccali, malari e sottomentali) che copre gli spigoli dell&apos;osso mandibolare sottostante.
                </li>
                <li>
                  <strong className="text-cyan-300">Ritenzione Idrica Extracellulare (Oscillazioni Giorno per Giorno):</strong> sopra al grasso si accumula spesso acqua extracellulare nello spazio interstiziale tra derma e muscoli mimici. Quando nei giorni precedenti hai assunto un po&apos; più di sale o molti carboidrati (ricordati che ogni grammo di glicogeno lega circa <strong>3 grammi d&apos;acqua</strong>) o hai dormito meno, l&apos;osmolalità richiama liquidi e il viso appare ancora più &quot;gonfio&quot; al mattino. Non si mette grasso in 24 ore: è quasi sempre acqua!
                </li>
              </ul>
            </div>

            {/* B. Effetto Ottico del Taglio Corto */}
            <div className="p-4 rounded-2xl bg-cyan-950/25 border border-cyan-500/35 space-y-2.5">
              <div className="flex items-center gap-2 text-cyan-300 font-black uppercase text-[11px]">
                <Scissors className="w-4 h-4 shrink-0" />
                <span>B. La Scienza Ottica del Taglio Corto &amp; Low-Fade (Perché Ti Sembri Più Pieno)</span>
              </div>
              <p className="text-[11px] text-gray-200">
                Hai notato una cosa psicologica e ottica verissima: tagliare i capelli corti sui lati (<em>low-fade</em>) e accorciarli sopra cambia completamente il modo in cui il cervello legge le proporzioni del viso:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <strong className="text-emerald-300 block">Con Chioma Più Lunga &amp; Mossa (Effetto Cornice)</strong>
                  <p className="text-gray-300">
                    In ottica visiva il volume laterale e superiore dei capelli crea un <strong>&quot;framing&quot; (cornice geometrica)</strong> più ampio in alto. Per illusione di contrasto (<em>Illusione di Delboeuf / Ebbinghaus</em>), una zona superiore ampia fa percepire automaticamente il terzo inferiore (guance e mascella) più stretto, allungato e affusolato.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-cyan-500/25 space-y-1">
                  <strong className="text-rose-300 block">Con Taglio Corto &amp; Low-Fade (Viso Scoperto)</strong>
                  <p className="text-gray-300">
                    Eliminando la massa ai lati e riducendo l&apos;altezza sopra la fronte, la cornice scompare e tutta la luce frontale colpisce in primo piano gli zigomi bassi e le guance. Ecco perché <strong>da un giorno all&apos;altro i tratti pieni risaltano molto di più</strong> anche se il tuo grasso corporeo è identico al giorno prima!
                  </p>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-[11px] text-cyan-200">
                💡 <strong>Buona notizia doppia:</strong> il taglio intanto ricresce in 3–5 settimane ridandoti cornice e volume sopra (Messy Mullet), mentre il deficit calorico svuota realmente lo spessore sotto la pelle.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* SEZIONE 2: PERCHÉ SUCCEDE ANCHE A 1,75 m PER 73 kg                    */}
      {/* ===================================================================== */}
      {(activeTab === 'tutte' || activeTab === 'biologia_73kg') && (
        <div className="space-y-3.5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Scale className="w-4 h-4 text-purple-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  Biologia del Grasso Ostinato • Sezione 2
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  2. Perché Succede Questo (Anche a 1,75 m × 73 kg)?
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
              Recettori Alfa-2 vs Beta-2
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-purple-500/35 bg-black/75 space-y-3.5 text-xs text-gray-200 leading-relaxed">
            <p>
              Molti pensano che pesare <strong className="text-white">73 kg per 1,75 m</strong> (normopeso sulla bilancia) implichi automaticamente avere il viso scavato e gli addominali a vista. In fisiologia della composizione corporea, però, lo stesso peso può corrispondere a due fisici opposti:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="p-3.5 rounded-2xl bg-purple-950/25 border border-purple-500/30 space-y-1.5">
                <strong className="text-purple-300 block uppercase">1. Rapporto Massa Muscolare vs Massa Grassa</strong>
                <p className="text-gray-300">
                  Se la massa muscolare scheletrica è ancora in fase di costruzione e c&apos;è una percentuale di grasso corporeo intorno al <strong>18–22%</strong>, quei ~13–15 kg di lipidi vengono distribuiti secondo la mappa ormonale maschile (androide). Con l&apos;allenamento costante puoi restare intorno a un peso simile ma con <strong>molti più muscoli e metà del grasso</strong> (ricomposizione).
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-950/25 border border-rose-500/30 space-y-1.5">
                <strong className="text-rose-300 block uppercase">2. Le 3 Zone &quot;Casseforti&quot; Maschili (Ultimo Grasso a Scendere)</strong>
                <p className="text-gray-300">
                  Nell&apos;uomo, per evoluzione ormonale, le ultime riserve che l&apos;organismo difende e svuota per ultime sono esattamente tre: <strong className="text-white">viso (guance basse), sottomento e addome basso</strong>. Ecco perché le braccia o il petto si asciugano prima mentre la guancia resta ancora morbida!
                </p>
              </div>
            </div>

            {/* Spiegazione Molecolare Alfa-2 vs Beta-2 */}
            <div className="p-4 rounded-2xl bg-black/65 border border-cyan-500/30 space-y-2 text-[11px]">
              <strong className="text-cyan-300 uppercase tracking-wider block">
                🔬 Meccanismo Molecolare Esatto: Perché il Grasso del Viso e Basso Addome Resiste di Più?
              </strong>
              <p className="text-gray-200">
                Per far uscire i trigliceridi da un adipocita servono gli ormoni adrenalina/noradrenalina che si legano a due tipi opposti di &quot;serrature&quot; (recettori) sulla membrana della cellula grassa:
              </p>
              <ul className="space-y-1.5 list-disc pl-5 text-gray-300">
                <li>
                  <strong className="text-emerald-300">Recettori Beta-2 (L&apos;Acceleratore della Lipolisi):</strong> quando si attivano, alzano il messaggero interno <em>cAMP</em> e accendono l&apos;enzima <em>HSL (Lipasi Ormono-Sensibile)</em> che taglia i grassi e li manda nel sangue per essere bruciati. Spalle, petto alto e avambracci ne sono pieni, quindi dimagriscono subito.
                </li>
                <li>
                  <strong className="text-rose-300">Recettori Alfa-2 (Il Freno Biologico) + Scarso Flusso Sanguigno:</strong> i compartimenti adiposi ostinati (guance, sottomento, basso ventre) hanno un rapporto altissimo di recettori <strong>Alfa-2</strong> (che spengono l&apos;adenilato ciclasi bloccando <em>cAMP</em> e lipolisi) e una microcircolazione capillare più lenta. Inoltre l&apos;insulina alta ne frena l&apos;apertura. Finché non accumuli settimane di deficit calorico pulito, il corpo brucia tutto il resto prima di svuotare queste &quot;ultime casseforti&quot;.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* SEZIONE 3: STRATEGIA "FACCIA FINE, FINE" — I 3 FRONTI UNITI           */}
      {/* ===================================================================== */}
      {(activeTab === 'tutte' || activeTab === 'faccia_fine') && (
        <div className="space-y-3.5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Flame className="w-4 h-4 text-emerald-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                  Combinazione Vincente • Sezione 3
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  3. Come Arrivare a Una &quot;Faccia Fine, Fine&quot;: I 3 Fronti Scientifici Uniti
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              Dieta + Passi + Struttura
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-emerald-500/40 bg-gradient-to-br from-emerald-950/25 via-black/85 to-black space-y-3.5 text-xs text-gray-200 leading-relaxed">
            <p>
              Per trasformare il viso da morbido a fine, scolpito e definito non esistono scorciatoie magiche né esercizi miracolosi per &quot;dimagrire localmente&quot;: devi attaccare il grasso ostinato contemporaneamente su tutti e 3 i fronti biologici.
            </p>

            {/* Fronte 1: Deficit Calorico */}
            <div className="p-4 rounded-2xl bg-black/65 border border-orange-500/35 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-orange-300 uppercase text-[11px] flex items-center gap-1.5">
                  <TrendingDown className="w-4 h-4 text-orange-400" />
                  1. Il Deficit Calorico Pulito — Fa il 70% del Lavoro (~1.600 kcal &amp; 115–120 g Proteine)
                </strong>
                <span className="text-[10px] font-black text-orange-200 bg-orange-500/20 px-2 py-0.5 rounded">
                  Motore Principale
                </span>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-[11px] text-gray-300">
                <li>
                  <strong className="text-white">Prima Legge Termodinamica + Lipolisi Sistemica:</strong> senza un deficit energetico costante rispetto al tuo dispendio (TDEE), l&apos;enzima lipasi negli adipociti non riceve il segnale netto di svuotare le scorte. Con <strong>~1.600 kcal giornaliere pulite</strong> nei giorni infrasettimanali costringi il corpo a intaccare settimana dopo settimana anche le riserve finali di guance e sottomento, facendo letteralmente aderire la pelle allo scheletro facciale.
                </li>
                <li>
                  <strong className="text-orange-200">Perché 115–120 g di Proteine sono Obbligatori:</strong> ~1,6 g di proteine per kg di peso mantengono attivo il segnale anabolico (<em>mTORC1</em>) proteggendo i muscoli di braccia, schiena e torace durante il dimagrimento (evitando di diventare &quot;skinny/svuotato&quot;) e sfruttando il massimo <strong>Effetto Termico del Cibo (TEF)</strong>: il corpo spende circa il 20–30% delle calorie proteiche solo per digerirle!
                </li>
              </ul>
            </div>

            {/* Fronte 2: 10.000 Passi */}
            <div className="p-4 rounded-2xl bg-black/65 border border-cyan-500/35 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-cyan-300 uppercase text-[11px] flex items-center gap-1.5">
                  <Footprints className="w-4 h-4 text-cyan-400" />
                  2. I 10.000 Passi al Giorno — Il Consumo Invisibile (NEAT Senza Cortisolo)
                </strong>
                <span className="text-[10px] font-black text-cyan-200 bg-cyan-500/20 px-2 py-0.5 rounded">
                  Arma Silenziosa
                </span>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-[11px] text-gray-300">
                <li>
                  <strong className="text-white">Ossidazione dei Grassi a Bassa Intensità (Zona 1–2):</strong> la camminata quotidiana a buon ritmo (o leggera pendenza sul tapis roulant) usa prevalentemente il sistema aerobico mitocondriale bruciando <strong className="text-cyan-300">acidi grassi liberi</strong> (~300–450 kcal extra pulite ogni giorno, pari a 1 kg di grasso vero bruciato in più ogni ~2,5–3 settimane solo camminando!).
                </li>
                <li>
                  <strong className="text-emerald-300">Zero Cortisolo &amp; Zero Ritenzione sul Viso (Differenza rispetto a Corsa Estrema):</strong> correre troppo forte o fare cardio estenuante in deficit alza il cortisolo, divora glicogeno e spesso fa gonfiare le guance di acqua da stress. Camminare <strong>non stressa il sistema nervoso centrale (SNC)</strong>, non ruba recupero alle gambe per la palestra, non scatena fame compulsiva e — grazie alle contrazioni ripetute dei polpacci e quadricipiti — apre i trasportatori <strong>GLUT4</strong> stabilizzando anche la glicemia del diabete!
                </li>
              </ul>
            </div>

            {/* Fronte 3: Struttura + Masseteri + Capelli */}
            <div className="p-4 rounded-2xl bg-black/65 border border-emerald-500/35 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-emerald-300 uppercase text-[11px] flex items-center gap-1.5">
                  <Dumbbell className="w-4 h-4 text-emerald-400" />
                  3. La Combinazione Strutturale (Sleeper Build + Masseteri + Ricrescita Taglio)
                </strong>
                <span className="text-[10px] font-black text-emerald-200 bg-emerald-500/20 px-2 py-0.5 rounded">
                  Effetto Moltiplicatore
                </span>
              </div>
              <ul className="space-y-1.5 list-disc pl-5 text-[11px] text-gray-300">
                <li>
                  <strong className="text-white">Sotto Mentre Svuoti Sopra:</strong> mentre deficit + passi svuotano il tessuto adiposo sottocutaneo del viso, i <strong>pesi in palestra</strong> costruiscono spalle larghe, dorso e collo muscoloso (<em>Sleeper Build</em>: asciutto nei vestiti, scolpito senza maglietta) e allungano la silhouette del collo con <em>Chin Tucks</em> + <em>Neck Curls</em>.
                </li>
                <li>
                  <strong className="text-cyan-300">Angolo Mandibolare &amp; Masseteri:</strong> la masticazione controllata sui molari con cibi duri o gomma dedicata (focus 60–65% sul lato sinistro fino/cedevole) dà densità muscolare all&apos;angolo goniaco. Quando il grasso sopra cala e il muscolo sotto è equilibrato e tonico, la pelle si tende come un guanto disegnando la linea pulita.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* SEZIONE 4: 16 ANNI, ELASTICITÀ PELLE & ORIZZONTE GIUGNO               */}
      {/* ===================================================================== */}
      {(activeTab === 'tutte' || activeTab === 'piano_giugno') && (
        <div className="space-y-3.5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-lime-500/20 text-lime-300 border border-lime-500/30">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-lime-400">
                  Biologia a 16 Anni &amp; Pazienza • Sezione 4
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  4. Hai 16 Anni: Perché La Tua Trasformazione Entro Giugno Sarà Radicale
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-lime-500/15 text-lime-300 border border-lime-500/30">
              Base → Giugno
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-lime-400/45 bg-gradient-to-br from-lime-950/30 via-black/90 to-cyan-950/25 space-y-3.5 text-xs text-gray-200 leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="p-3.5 rounded-2xl bg-black/65 border border-lime-500/30 space-y-1.5">
                <strong className="text-lime-300 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 shrink-0" />
                  Vantaggio Biologico dei 16 Anni (Elastina &amp; GH)
                </strong>
                <p className="text-gray-300">
                  A 16 anni hai il massimo picco fisiologico di <strong>ormone della crescita (GH), IGF-1 e metabolismo basale</strong>, oltre a fibroblasti nel derma che producono <strong>elastina e collagene Tipo I/III</strong> a ritmi velocissimi. Questo significa che man mano che il grasso di guance e sottomento si svuota, la tua pelle <strong className="text-white">si ritira e aderisce perfettamente sull&apos;osso</strong> senza alcun rischio di pelle cadente!
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/65 border border-cyan-500/30 space-y-1.5">
                <strong className="text-cyan-300 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  Come Misurare i Progressi Senza Sconforto Allo Specchio
                </strong>
                <p className="text-gray-300">
                  Il viso di oggi nello specchio <strong>non è il tuo punto di arrivo</strong>: è soltanto il punto di partenza prima che il deficit faccia il suo corso sui compartimenti adiposi finali. Gli adipociti richiedono <strong>mesi biologici reali</strong> (non 3 giorni) per svuotarsi: se oggi sembri un pelo più gonfio è acqua, non grasso nuovo.
                </p>
              </div>
            </div>

            {/* Checklist Finale */}
            <div className="p-4 rounded-2xl bg-black/75 border border-white/15 space-y-2 text-[11px]">
              <strong className="text-white uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Checklist Semplice Da Qui a Giugno (Zero Inventarsi Cose Strane):
              </strong>
              <ul className="space-y-1 list-disc pl-5 text-gray-200">
                <li><strong>Deficit Calorico Pulito:</strong> ~1.600 kcal giornaliere con 115–120 g proteine (fa il 70% del risultato).</li>
                <li><strong>10.000 Passi + Cardio Leggero:</strong> brucia grasso ostinato ogni giorno senza stress sul sistema nervoso.</li>
                <li><strong>Palestra 3x + Postura:</strong> costruisci lo <em>sleeper build</em> e tieni collo/testa dritti (<em>Chin Tucks</em>).</li>
                <li><strong>Masticazione &amp; Capelli:</strong> focus a sinistra sui molari (60–65%) + lascia ricrescere il ciuffo sopra per la cornice.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* SEZIONE 5: LATO SINISTRO "FINO" VS LATO DESTRO MENO DEFINITO (19 NOV) */}
      {/* ===================================================================== */}
      {(activeTab === 'tutte' || activeTab === 'sinistra_fino_destra') && (
        <div className="space-y-3.5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <Scale className="w-4 h-4 text-sky-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400">
                  Cuscino Adiposo vs Muscolo • Sezione 5 (19 Nov)
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  5. Lato Sinistro &quot;Fino&quot; (Più Visibile) vs Lato Destro &quot;Meno Definito&quot;: Perché Basta Svuotare il Grasso
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-sky-500/15 text-sky-300 border border-sky-500/30">
              Copertura &amp; Contorni
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-sky-400/45 bg-gradient-to-br from-sky-950/30 via-black/90 to-cyan-950/20 space-y-3.5 text-xs text-gray-200 leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
              <div className="p-3.5 rounded-2xl bg-black/65 border border-sky-500/30 space-y-1.5">
                <strong className="text-sky-300 block uppercase">
                  1. Il &quot;Cuscino&quot; Sopra il Muscolo (Spiegazione Diretta)
                </strong>
                <p className="text-gray-300">
                  I muscoli masticatori possono essere presenti e contrarsi bene su entrambi i lati: però dove lo strato superficiale è più <strong className="text-white">sottile/fino (sinistra)</strong>, il profilo e le contrazioni del muscolo si leggono subito attraverso la pelle. Dove invece c&apos;è un leggero <strong>cuscino di grasso sottocutaneo e ritenzione idrica (destra)</strong>, quel velo fa da filtro ottico e &quot;sfuma&quot; la linea, facendolo sembrare meno definito.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/65 border border-emerald-500/30 space-y-1.5">
                <strong className="text-emerald-300 block uppercase">
                  2. Perché Perdere Grasso È La Chiave N° 1 Per Il Lato Destro
                </strong>
                <p className="text-gray-300">
                  Puoi anche allenare i masseteri sui molari all&apos;infinito, ma se sopra resta uno spessore adiposo più morbido, la linea continua a sembrare arrotondata. Con il <strong className="text-white">deficit calorico costante (~1.600 kcal) + 10.000 passi + 2,5–3 L acqua</strong> lo strato di grasso tra pelle e muscolo si assottiglia, facendo emergere i contorni reali anche sul lato meno definito.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-cyan-950/25 border border-cyan-500/35 space-y-1.5 text-[11px]">
              <strong className="text-cyan-300 uppercase block">
                3. Regole Pratiche Per Non Sbilanciarti Mentre Dimagrisci:
              </strong>
              <ul className="list-disc pl-5 space-y-1 text-gray-200">
                <li><strong>Non ipertrofizzare all&apos;infinito il lato già netto:</strong> se un lato appare già stretto/definito, non caricarlo con sessioni estreme; tieni i <strong>molari equilibrati</strong> senza forzare l&apos;articolazione (ATM) e lascia che il calo del grasso pulisca la visuale su tutto il viso.</li>
                <li><strong>Zero paranoie giorno per giorno:</strong> luce del bagno, angolo della camera, sale/carboidrati della sera prima e sonno cambiano l&apos;acqua sul viso ogni mattina. Confronta foto con la stessa luce di mese in mese fino a Giugno.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Return Button */}
      <div className="pt-2 text-center">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs transition-all cursor-pointer inline-flex items-center justify-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a La Mia Asimmetria</span>
        </button>
      </div>
    </div>
  );
};
