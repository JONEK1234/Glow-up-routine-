import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  Layers,
  Moon,
  Droplets,
  CheckCircle2,
  ChevronRight,
  Wind
} from 'lucide-react';
import { scrollToTop, scrollToElement } from '../../utils/scrollHelper';

interface CapelliCeraCuteForforaViewProps {
  onBack: () => void;
  initialTab?: string;
  onOpenMulletGuide?: () => void;
}

type CeraCuteTabId =
  | 'tutte'
  | 'forfora_falsa'
  | 'viso_cuscino'
  | 'come_evitare'
  | 'solo_cera';

const TAB_CONFIG: { id: CeraCuteTabId; label: string }[] = [
  { id: 'tutte', label: 'Tutte (4)' },
  { id: 'forfora_falsa', label: '1. Forfora vs Cera' },
  { id: 'viso_cuscino', label: '2. Viso & Cuscino' },
  { id: 'come_evitare', label: '3. 3 Regole Pratiche' },
  { id: 'solo_cera', label: '4. Solo Cera (Senza Sale/Polvere)' }
];

function normalizeTabId(raw?: string): CeraCuteTabId {
  if (!raw) return 'tutte';
  const valid = TAB_CONFIG.some((t) => t.id === raw);
  return valid ? (raw as CeraCuteTabId) : 'tutte';
}

export const CapelliCeraCuteForforaView: React.FC<CapelliCeraCuteForforaViewProps> = ({
  onBack,
  initialTab,
  onOpenMulletGuide
}) => {
  const [activeTab, setActiveTab] = useState<CeraCuteTabId>(() => normalizeTabId(initialTab));
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSelectTab = (tab: CeraCuteTabId) => {
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
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-rose-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
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
          <span className="text-[11px] font-bold text-rose-300 flex items-center gap-1.5 whitespace-nowrap shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
            Cera, Cute &amp; Notte
          </span>
        )}
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-rose-400/35 relative overflow-hidden space-y-3 bg-gradient-to-br from-rose-950/35 via-black/85 to-amber-950/25 shadow-[0_0_30px_rgba(244,63,94,0.15)]">
        <div className="text-[11px] font-semibold text-rose-300 flex flex-wrap items-center gap-2">
          <span>★ Nota Cute &amp; Prodotti</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-amber-300">Cera Opaca &amp; Argille</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-cyan-300">Pelle, Cuscino &amp; Lavaggio</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight">
          Cera Opaca, Cuoio Capelluto, Falsa Forfora &amp; Routine Serale
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          La cera opaca <strong className="text-emerald-300">non è una causa diretta di forfora vera</strong> (che nasce da squilibri del cuoio capelluto, lieviti come la <em>Malassezia</em> o irritazioni), ma argille, cere pesanti, profumi o ingredienti occlusivi lasciati sulla cute per molte ore o di notte possono dare fastidi precisi se non gestiti bene.
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
                  ? 'bg-rose-400 text-black font-black shadow-md shadow-rose-400/25'
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
        {/* 1 & 2. COSA PUO SUCCEDERE SE LA TIENI FINO A SERA O CI DORMI SOPRA */}
        {(activeTab === 'tutte' || activeTab === 'forfora_falsa' || activeTab === 'viso_cuscino') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <AlertTriangle className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                  Effetti di Residui, Ore Prolungate &amp; Notte Sul Cuscino
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Cosa Può Succedere Se La Tieni Su Fino a Sera o Ci Dormi Sopra
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-xs text-gray-200 leading-relaxed">
              {(activeTab === 'tutte' || activeTab === 'forfora_falsa') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-3xl glass-card border border-amber-500/35 bg-gradient-to-br from-amber-950/25 via-black/85 to-slate-950/30 space-y-1.5">
                    <strong className="text-amber-300 block uppercase tracking-wider text-[11px]">
                      1. Falsa Forfora (Accumulo e Desquamazione)
                    </strong>
                    <p>
                      Se metti troppa cera o la applichi troppo vicino alla cute, i residui possono seccarsi o mescolarsi al sebo formando piccole <strong className="text-white">scaglie bianche/grigie</strong>. A occhio sembra forfora, ma in realtà è residuo di prodotto secco o pelle disidratata.
                    </p>
                  </div>

                  <div className="p-4 rounded-3xl glass-card border border-rose-500/35 bg-gradient-to-br from-rose-950/25 via-black/85 to-slate-950/30 space-y-1.5">
                    <strong className="text-rose-300 block uppercase tracking-wider text-[11px]">
                      2. Prurito e Irritazione Cutanea
                    </strong>
                    <p>
                      Alcune cere/paste, specie se profumate o usate tutti i giorni senza lavare bene la testa, possono irritare o far prudere la cute, portandoti a grattarti e a creare <strong className="text-white">micro-desquamazioni</strong>.
                    </p>
                  </div>
                </div>
              )}

              {(activeTab === 'tutte' || activeTab === 'viso_cuscino') && (
                <div className="p-4 sm:p-5 rounded-3xl glass-card border border-indigo-400/40 bg-gradient-to-br from-indigo-950/30 via-black/85 to-rose-950/20 space-y-2">
                  <strong className="text-indigo-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                    <Moon className="w-4 h-4 text-indigo-400 shrink-0" />
                    3. Pori Ostruiti o Brufoletti Sull&apos;Attaccatura / Viso (Effetto Federa)
                  </strong>
                  <p>
                    Se tieni la cera su fino a sera e poi appoggi la testa sul cuscino, il prodotto può trasferirsi dai capelli sulla <strong className="text-white">federa</strong> e poi direttamente sulla pelle di <strong className="text-amber-200">fronte, tempie, guance o collo</strong>, favorendo qualche impurità, brufoletto o punto nero (soprattutto se hai già la pelle sensibile o a tendenza acneica).
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 3. COME EVITARLO SENZA FARSI PROBLEMI */}
        {(activeTab === 'tutte' || activeTab === 'come_evitare') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                  Prevenzione Semplice
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Come Evitarlo Senza Farti Problemi (3 Regole)
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-emerald-500/35 space-y-2.5 bg-gradient-to-br from-emerald-950/25 via-black/85 to-teal-950/20 text-xs text-gray-200 leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                <strong className="text-emerald-300 block">1. Usane pochissima (e lontana dalla pelle)</strong>
                <p>
                  Una <strong className="text-white">micro-punta</strong> scaldata bene tra le mani fino a farla sparire, concentrata sulle <strong className="text-emerald-200">ciocche e sulle punte</strong> anziché spalmarla a piene mani sulla cute.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                <strong className="text-cyan-300 block">2. Non andarci a dormire</strong>
                <p>
                  Se l&apos;hai messa durante il giorno, la sera (specie se hai usato anche sale marino o polvere volumizzante) è sempre meglio <strong className="text-white">lavare i capelli prima di dormire</strong>, così non lasci residui sul cuscino né sulla cute per tutta la notte.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/55 border border-white/10 space-y-1">
                <strong className="text-sky-300 block">3. Lavaggio pulito ma delicato</strong>
                <p>
                  Quando la lavi, fai una bella passata di shampoo massaggiando con i <strong className="text-white">polpastrelli (MAI con le unghie!)</strong> per sciogliere bene le cere senza aggredire o irritare la cute.
                </p>
              </div>

              <p className="text-[11px] text-amber-200 bg-amber-500/10 border border-amber-500/25 rounded-xl p-2.5">
                <strong>Se hai già la cute sensibile o che si desquama facilmente:</strong> all&apos;inizio fai una prova mettendone un velo minimo e controllando a fine giornata se senti prurito o residui.
              </p>
            </div>
          </section>
        )}

        {/* 4. SOLO CERA SENZA SALE E SENZA POLVERE */}
        {(activeTab === 'tutte' || activeTab === 'solo_cera') && (
          <section className="space-y-3">
            <div className="flex items-center space-x-2.5 pl-1 border-b border-white/10 pb-2">
              <span className="p-1.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30">
                <Droplets className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-400 block">
                  Routine Leggera
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Se Usi SOLO la Cera Opaca (Senza Sale Né Polvere)
                </h2>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-3xl glass-card border border-teal-500/35 space-y-3 bg-gradient-to-br from-teal-950/25 via-black/85 to-slate-950/30 text-xs text-gray-200 leading-relaxed">
              <p>
                Usare <strong className="text-teal-300">solo la cera opaca</strong> senza aggiungere né spray al sale né polvere volumizzante alleggerisce moltissimo il carico sulla testa e rende tutto molto più &quot;pulito&quot;. Vale comunque la stessa logica pratica:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-white">Se ne metti poca:</strong> il rischio di residui bianchi o di irritare la cute è <strong className="text-emerald-300">bassissimo</strong>, soprattutto se non la spiaccichi proprio a piene mani sulla pelle della testa.
                </li>
                <li>
                  <strong className="text-white">La sera / prima di dormire:</strong> anche senza sale o polvere, la cera resta comunque un prodotto <strong className="text-amber-300">filmogeno / ceroso</strong> sui capelli. Se la togli la sera con una lavata veloce (o almeno eviti di appoggiare i capelli carichi di cera direttamente sul cuscino), eviti di trasferire residui sul viso e sulla federa per tutta la notte.
                </li>
                <li>
                  <strong className="text-white">Quando metterla:</strong> perfetta quando esci / sei in giro (e la sera la lavi via, zero problemi); nei giorni in cui resti tutto il giorno in casa puoi tranquillamente farne a meno per lasciare capelli e cute ancora più liberi.
                </li>
              </ul>
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
              <span>Torna alla Guida Definitiva Textured Messy Mullet</span>
            </span>
            <ChevronRight className="w-4 h-4 text-teal-300" />
          </button>
        )}
      </div>
    </div>
  );
};
