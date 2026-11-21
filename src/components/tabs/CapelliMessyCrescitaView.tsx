import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  TrendingUp,
  Sparkles,
  Layers,
  CheckCircle2,
  Droplets,
  Atom,
  Target,
  AlertTriangle,
  ChevronRight,
  Wind
} from 'lucide-react';
import { scrollToTop, scrollToElement } from '../../utils/scrollHelper';

interface CapelliMessyCrescitaViewProps {
  onBack: () => void;
  initialTab?: string;
  onOpenMulletGuide?: () => void;
}

type CrescitaTabId =
  | 'tutte'
  | 'cose_in_piu'
  | 'risultati_migliori'
  | 'fase_intermedia'
  | 'crema_arricciante';

const TAB_CONFIG: { id: CrescitaTabId; label: string }[] = [
  { id: 'tutte', label: 'Tutte (4)' },
  { id: 'cose_in_piu', label: '1. Cosa Fai in Più' },
  { id: 'risultati_migliori', label: '2. Risultati Migliori' },
  { id: 'fase_intermedia', label: '3. Fase Intermedia' },
  { id: 'crema_arricciante', label: '4. Crema Arricciante' }
];

function normalizeTabId(raw?: string): CrescitaTabId {
  if (!raw) return 'tutte';
  const valid = TAB_CONFIG.some((t) => t.id === raw);
  return valid ? (raw as CrescitaTabId) : 'tutte';
}

export const CapelliMessyCrescitaView: React.FC<CapelliMessyCrescitaViewProps> = ({
  onBack,
  initialTab,
  onOpenMulletGuide
}) => {
  const [activeTab, setActiveTab] = useState<CrescitaTabId>(() => normalizeTabId(initialTab));
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (tab: CrescitaTabId) => {
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

        {onOpenMulletGuide ? (
          <button
            type="button"
            onClick={onOpenMulletGuide}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 border border-teal-400/40 text-[11px] font-bold transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
          >
            <Wind className="w-3.5 h-3.5 text-teal-300" />
            <span>Guida Messy Mullet</span>
          </button>
        ) : (
          <span className="text-[11px] font-bold text-emerald-300 flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            Messy Hair · Crescita 2B
          </span>
        )}
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-emerald-400/35 relative overflow-hidden space-y-3 bg-gradient-to-br from-emerald-950/40 via-black/85 to-teal-950/30 shadow-[0_0_30px_rgba(16,185,129,0.16)]">
        <div className="text-[11px] font-semibold text-emerald-300 flex flex-wrap items-center gap-2">
          <span>★ Nota Messy Hair</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-teal-300">Fisica della Crescita</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-cyan-300">Onde 2B &amp; Crema Ricci</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
          Messy Hair Quando Crescono: Cosa Cambia &amp; Crema Ricci
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Quando i capelli crescono (soprattutto davanti sulla frangia, sui lati superiori e dietro nel mullet), cambia completamente la <strong className="text-emerald-300">fisica del capello</strong>: più lunghezza significa più <strong className="text-white">peso e più &quot;leva&quot;</strong> per formare onde vere, anziché restare dritto o arricciarsi a spillo.
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
        {/* 1. COSA POTRAI FARE IN PIU QUANDO CRESCONO */}
        {(activeTab === 'tutte' || activeTab === 'cose_in_piu') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <TrendingUp className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                  Punto 1 · Nuove Possibilità Con Più Lunghezza
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Cosa Potrai Fare IN PIÙ Quando Crescono
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-emerald-500/35 space-y-3 bg-gradient-to-br from-emerald-950/25 via-black/85 to-slate-950/30 text-xs text-gray-200 leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                <strong className="text-emerald-300 block">1. Dare vero scrunch e definizione anche davanti</strong>
                <p>
                  Ora la frangia è corta e sfoltita, quindi se fai lo scrunch o metti sale/prodotti rischia di aprirsi in punte rigide o sparare in alto. Quando sarà più lunga, il capello mosso (<strong className="text-white">2B</strong>) avrà abbastanza centimetri per fare un&apos;onda morbida o un leggero riccio a <strong>&quot;S&quot;</strong> che scende naturalmente verso gli occhi/sopracciglia.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                <strong className="text-cyan-300 block">2. Sfruttare la gravità per il volume (senza &quot;fili sparati&quot;)</strong>
                <p>
                  Con più lunghezza, la <strong className="text-white">forza di gravità</strong> tira verso il basso la punta della ciocca. Anche se alzi la radice o metti un po&apos; di texture, la punta si piega ad arco invece di restare dritta in aria come fa spesso un capello corto.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                <strong className="text-teal-300 block">3. Chiudere i buchini laterali in modo quasi automatico</strong>
                <p>
                  Quando i capelli sopra le tempie e dietro l&apos;orecchio si allungano, ricadono per gravità sopra la sfumatura creando uno strato più fitto e continuo. Avrai bisogno di molto meno &quot;aggiustaggio manuale&quot; per coprire i varchi.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                <strong className="text-amber-300 block">4. Aumentare il volume e il movimento dietro/mullet</strong>
                <p>
                  Più lunghezza dietro significa ciocche più pesanti e mosse che si muovono a onde ampie e piene, non solo &quot;ciuffetti&quot; corti. Puoi far crescere quel contrasto tra parte alta/posteriore voluminosa e lati sfumati, rendendo il mullet più strutturato e d&apos;impatto.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                <strong className="text-lime-300 block">5. Sperimentare varianti di styling</strong>
                <p>
                  Con qualche centimetro in più potrai scegliere tra frangia più piena e compatta, ciuffo/frangia leggermente spostata o aperta a tendina morbida, oppure un effetto più mosso/spettinato su tutta la testa.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 2. CHE RISULTATO MIGLIORE OTTIENI RISPETTO A ORA */}
        {(activeTab === 'tutte' || activeTab === 'risultati_migliori') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400 block">
                  Punto 2 · Differenza Allo Specchio
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Che Risultato MIGLIORE Ottieni Rispetto a Ora
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-teal-500/35 space-y-2.5 bg-gradient-to-br from-teal-950/25 via-black/85 to-cyan-950/25 text-xs text-gray-200 leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3.5 rounded-2xl bg-black/55 border border-teal-400/25 space-y-1">
                  <strong className="text-teal-300 block">Più densità visiva e meno &quot;effetto buchi&quot;</strong>
                  <p>La frangia e i lati risultano più pieni perché ci sono più strati di capelli che si sovrappongono l&apos;uno sull&apos;altro.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-cyan-400/25 space-y-1">
                  <strong className="text-cyan-300 block">Onde più morbide, fluide e tridimensionali</strong>
                  <p>Invece di punte corte che a volte sembrano &quot;spezzate&quot; o ribelli, ottieni onde più larghe, armoniose e &quot;vive&quot; quando cammini o ti muovi.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-emerald-400/25 space-y-1">
                  <strong className="text-emerald-300 block">Meno fatica quotidiana</strong>
                  <p>Con la lunghezza giusta il capello tende già a cadere nel verso giusto quasi da solo; l&apos;asciugatura e la cera opaca servono più a definire e rifinire che a &quot;costringere&quot; ciocche troppo corte a stare giù.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/55 border border-amber-400/25 space-y-1">
                  <strong className="text-amber-300 block">Più margine di manovra con i prodotti</strong>
                  <p>Potrai dosare meglio spray al sale marino e cera opaca (anche su qualche centimetro in più di lunghezza) senza che il capello si secchi o perda forma subito.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. CONSIGLIO PRATICO FASE INTERMEDIA */}
        {(activeTab === 'tutte' || activeTab === 'fase_intermedia') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Target className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                  Punto 3 · Errore Da Evitare Dal Barbiere
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Consiglio Pratico Mentre Crescono (Fase Intermedia)
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-amber-400/45 bg-gradient-to-br from-amber-950/30 via-black/85 to-orange-950/20 text-xs text-gray-200 leading-relaxed space-y-2">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <p>
                  Durante la fase di crescita intermedia (quando sono un po&apos; più lunghi di ora ma non ancora al massimo), <strong className="text-amber-200">non avere fretta di accorciare la frangia o i lati superiori</strong>: spesso è proprio quel <strong className="text-white">mezzo centimetro in più</strong> a fare la differenza tra una ciocca che &quot;spara&quot; e una che finalmente &quot;cade&quot; chiudendo il viso in modo naturale.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 4. CREMA ARRICCIANTE QUANDO CRESCONO */}
        {(activeTab === 'tutte' || activeTab === 'crema_arricciante') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Droplets className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block">
                  Punto 4 · Come Cambia La Routine Sul Mosso 2B Lungo
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Crema Arricciante (Curl Cream): Quando Serve &amp; Quando Farne a Meno
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/35 space-y-3.5 bg-gradient-to-br from-cyan-950/25 via-black/85 to-slate-950/30 text-xs text-gray-200 leading-relaxed">
              <p>
                Non è obbligatoria, ma può diventare un&apos;opzione utile quando i capelli si allungano, a seconda di come si comporta la tua onda <strong className="text-cyan-300">2B</strong> e dell&apos;effetto che vuoi ottenere:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-950/25 border border-emerald-500/35 space-y-2">
                  <strong className="text-emerald-300 block uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    Quando Ti Può Servire Una Crema Arricciante
                  </strong>
                  <ul className="list-disc pl-4 space-y-1.5 text-[11px]">
                    <li>
                      <strong className="text-white">Se il capello lungo diventa secco o crespo:</strong> quando si allungano (specie dietro e sopra/frangia), le punte sono più lontane dal sebo naturale della cute e tendono a seccarsi o fare crespo a chiazze. Una crema leggera aiuta a idratare e ammorbidire la fibra.
                    </li>
                    <li>
                      <strong className="text-white">Se vuoi onde più morbide, sciolte ed &quot;elastiche&quot;:</strong> dà idratazione e scorrevolezza, così le onde si formano in modo più fluido e meno rigido rispetto a quando usi solo prodotti asciuganti.
                    </li>
                    <li>
                      <strong className="text-white">Se la sola cera opaca rende i capelli troppo &quot;secchi&quot; o duri da lunghi:</strong> più lunghezza c&apos;è, più la cera può sembrare secca se manca un minimo di idratazione di base.
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-rose-950/25 border border-rose-500/35 space-y-2">
                  <strong className="text-rose-300 block uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Atom className="w-3.5 h-3.5 shrink-0" />
                    Quando Puoi Farne a Meno (O Usarla Pochissimo)
                  </strong>
                  <ul className="list-disc pl-4 space-y-1.5 text-[11px]">
                    <li>
                      <strong className="text-white">Se il capello tende già ad appesantirsi o diventare molle:</strong> molte creme contengono oli e burri che pesano. Su una base mossa già folta/densa come la tua (specie su frangia o vicino radici), troppa crema toglie volume e fa scendere i capelli piatti o lucidi.
                    </li>
                    <li>
                      <strong className="text-white">Se preferisci un look strutturato, opaco e &quot;squadrato&quot;:</strong> se punti ad avere volume alto/dietro, tenuta e definizione asciutta con la <strong>cera opaca</strong>, la cera resta il prodotto principale; al massimo la crema si usa prima (su capelli umidi, in quantità minuscola, <strong>mai sulla frangia</strong> se vuoi tenerla leggera) solo per nutrire le lunghezze.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-950/35 border border-teal-400/40 space-y-1">
                <strong className="text-teal-300 block uppercase tracking-wider text-[11px]">
                  Regola Pratica Quando Crescono
                </strong>
                <p className="text-[11px]">
                  Non comprarla già pensando sia indispensabile: fai crescere i capelli e guarda come reagiscono. Se noti che diventano secchi, crespi o difficili da far ondeggiare in modo morbido, prova una crema arricciante <strong>leggera</strong> (non pesante/burrosa) con parsimonia; se invece con l&apos;asciugatura e la cera opaca ti danno già la forma e il volume che ti piacciono, non ti serve aggiungerne un&apos;altra.
                </p>
              </div>
            </div>
          </section>
        )}

        {onOpenMulletGuide && (
          <button
            type="button"
            onClick={onOpenMulletGuide}
            className="w-full p-4 rounded-2xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/40 flex items-center justify-between text-xs font-black text-teal-200 transition-all cursor-pointer active:scale-98"
          >
            <span className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-teal-300" />
              <span>Torna alla Guida Definitiva Textured Messy Mullet (Lavaggio &amp; Diffusore)</span>
            </span>
            <ChevronRight className="w-4 h-4 text-teal-300" />
          </button>
        )}
      </div>
    </div>
  );
};
