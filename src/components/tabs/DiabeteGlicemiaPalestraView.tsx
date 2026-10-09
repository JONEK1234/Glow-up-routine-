import React, { useState } from 'react';
import {
  ArrowLeft,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  Info,
  ShieldAlert,
  Flame,
  Moon,
  Sun,
  Coffee,
  Stethoscope,
  HeartPulse,
  TrendingUp,
  TrendingDown,
  Check,
  X
} from 'lucide-react';

interface DiabeteGlicemiaPalestraViewProps {
  onBack: () => void;
}

export const DiabeteGlicemiaPalestraView: React.FC<DiabeteGlicemiaPalestraViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutta' | 'palestra' | 'notte' | 'colazione' | 'succo' | 'protocollo'>('tutta');

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-rose-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>

        <span className="text-[11px] font-bold text-rose-300 bg-rose-500/10 px-3 py-1 rounded-xl border border-rose-500/20 flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-rose-400" />
          Nota Medica & Glicemia
        </span>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border-2 border-rose-500/40 relative overflow-hidden space-y-3 bg-gradient-to-br from-rose-950/40 via-black/85 to-red-950/30 shadow-[0_0_35px_rgba(244,63,94,0.2)]">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-black uppercase tracking-widest border border-rose-500/40 flex items-center gap-1">
            <HeartPulse className="w-3 h-3 text-rose-400" />
            Guida Fisiologica & Metabolica
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Allenamento Serale & Notte</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
          <span>Diabete, glicemia e palestra</span>
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Analisi completa e scientifica su cosa accade nel corpo dopo la palestra serale: assorbimento del glicogeno, effetto "spugna" per 12-24 ore, distinzione tra Fenomeno dell'Alba ed Effetto Somogyi (il crollo notturno con rimbalzo a 120 e 180), l'errore del succo di frutta e le colazioni strategiche per stabilizzare i livelli.
        </p>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('tutta')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutta'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutta la Nota
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('palestra')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'palestra'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            1. Palestra la Sera
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notte')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'notte'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            2. Somogyi vs Alba
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('colazione')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'colazione'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            3. Salto Colazione (180 mg/dL)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('succo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'succo'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Coffee className="w-3.5 h-3.5" />
            4. Succo vs Colazione Protetta
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('protocollo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'protocollo'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" />
            5. Protocollo & Medico
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* SEZIONE 1: COSA ACCADE CON LA PALESTRA LA SERA                 */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'palestra') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <Flame className="w-4 h-4 text-rose-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                  Fisiologia dell'Esercizio • Sezione 1
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  1. Allenamento Serale: I 2 Meccanismi Chiave
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30">
              Muscoli & Glucosio
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-rose-500/30 space-y-4 bg-black/75">
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              Quando ti alleni in palestra, soprattutto in orario serale, il tuo corpo avvia due processi fisiologici primari che continuano ad agire per tutta la notte e nelle prime ore del giorno dopo:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center font-black text-xs shrink-0">1</span>
                  <h3 className="font-bold text-white text-xs">Ripristino Riserve di Glicogeno</h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Durante gli esercizi con i pesi e l'alta intensità, i muscoli bruciano il loro carburante primario: il <strong>glicogeno</strong> (lo zucchero immagazzinato nelle fibre). A fine sessione, i muscoli non si fermano: continuano ad assorbire glucosio dal sangue per ore ininterrottamente per ricaricare i serbatoi, <strong>tirando giù la glicemia</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-xs shrink-0">2</span>
                  <h3 className="font-bold text-white text-xs">Effetto "Spugna" (Sensibilità all'Insulina 12-24h)</h3>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  L'attività fisica rende le cellule muscolari straordinariamente sensibili all'insulina, capaci di captare glucosio anche in via <em>insulino-indipendente</em>. Questa condizione di "spugna metabolica" si protrae per <strong>12–24 ore post-workout</strong>, moltiplicando il rischio di <strong>ipoglicemie notturne</strong> se la terapia o l'alimentazione non vengono calibrate.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 2: I FENOMENI NOTTURNI (ALBA vs EFFETTO SOMOGYI)       */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'notte') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Moon className="w-4 h-4 text-purple-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  La Notte • Sezione 2
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  2. Iperglicemia al Risveglio: Fenomeno dell'Alba vs Effetto Somogyi
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
              Notte & Risveglio
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-purple-500/40 space-y-4 bg-gradient-to-br from-purple-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(168,85,247,0.15)]">
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              Svegliarsi con la glicemia alta dopo una seduta in palestra è frequente. Tuttavia, può accadere per due motivi diametralmente opposti ed è fondamentale distinguerli:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Fenomeno dell'Alba */}
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    Fenomeno dell'Alba
                  </span>
                  <span className="text-[10px] font-bold text-gray-400">Fisiologico</span>
                </div>
                <h4 className="text-xs font-black text-white">La Sveglia Naturale degli Ormoni</h4>
                <ul className="space-y-1.5 text-[11px] text-gray-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Orario:</strong> Tra le 4:00 e le 8:00 del mattino mentre si dorme.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Cosa accade:</strong> Il cervello rilascia cortisolo, GH (ormone della crescita) e adrenalina per predisporre alla veglia.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Ruolo del fegato:</strong> Gli ormoni stimolano il fegato a rilasciare glucosio nel sangue per dare energia al risveglio.</span>
                  </li>
                </ul>
              </div>

              {/* Effetto Somogyi */}
              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-red-400" />
                    Effetto Somogyi (Il Trabocchetto)
                  </span>
                  <span className="text-[10px] font-bold text-red-300 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">Rimbalzo</span>
                </div>
                <h4 className="text-xs font-black text-white">Il Rimbalzo di Difesa Post-Palestra</h4>
                <ul className="space-y-1.5 text-[11px] text-gray-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Crollo invisibile alle 2:00-3:00:</strong> I muscoli svuotati dalla palestra continuano a succhiare glucosio; si scende a 60–70 mg/dL nel sonno.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Allarme d'emergenza:</strong> Il corpo avverte il pericolo cerebrale e scatena una tempesta di glucagone e adrenalina.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-red-400 font-bold">•</span>
                    <span><strong>Rimbalzo epatico:</strong> Il fegato scarica violentemente tutte le sue riserve per salvarti: ti svegli a 120+ solo a causa del crollo precedente!</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Test delle 3:00 di notte */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
              <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                Come Capire Qual è il Tuo Caso? (Il Test delle 3:00 di Notte)
              </h4>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Mettendo una sveglia alle 3:00 di notte o verificando lo storico sul sensore continuo (Dexcom / FreeStyle Libre):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <strong className="text-amber-300 block">Se alle 3:00 è NORMALE o ALTA (100–130) e sale ancora:</strong>
                  <span className="text-gray-300">Si tratta del <strong>Fenomeno dell'Alba</strong> puro.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <strong className="text-red-300 block">Se alle 3:00 è BASSA (&lt; 70 mg/dL) e poi la trovi alta:</strong>
                  <span className="text-gray-300">È l'<strong>Effetto Somogyi</strong> (rimbalzo post-ipoglicemia da palestra serale).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 3: PERCHÉ SALE A 180 SE SALTI LA COLAZIONE?           */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'colazione') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <TrendingUp className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Il Paradosso del Mattino • Sezione 3
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  3. Da 120 a 180 mg/dL: Perché Saltare la Colazione Peggiora Tutto?
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              Digiuno & Fegato
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-amber-500/40 space-y-4 bg-gradient-to-br from-amber-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(245,158,11,0.15)]">
            <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-1 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Il Paradosso Metabolico
              </span>
              <p className="text-[11px] text-gray-200 leading-relaxed">
                Può sembrare inspiegabile: non hai mangiato nulla dalla sera prima, al risveglio eri a 120 mg/dL, esci di casa a digiuno e a metà mattina ti ritrovi a 180 mg/dL.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <strong className="text-amber-400 font-bold block">1. Il fegato continua a pompare glucosio:</strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Il corpo non sa che sei a digiuno per scelta. Vedendo che non entra cibo, il fegato percepisce una condizione di carenza e, alimentato dal picco mattutino di cortisolo, continua a immettere autonomamente zucchero nel flusso sanguigno per "salvaguardarti".
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 space-y-1.5">
                <strong className="text-cyan-300 font-bold block">2. Manca il segnale metabolico di "stop":</strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Consumare un pasto bilanciato al mattino segnala al fegato che i nutrienti sono arrivati, <strong>spegnendo la gluconeogenesi epatica</strong> (la produzione autonoma di zucchero) e consentendo ai valori di stabilizzarsi.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-gray-300 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>La catena esatta:</strong> Palestra serale ➔ Crollo a 60-70 alle 3:00 (Somogyi) ➔ Risveglio a 120 (rimbalzo) ➔ Salto colazione o digiuno ➔ Picco a 180 a metà mattina.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 4: L'ERRORE DEL SUCCO DI FRUTTA & COLAZIONE STRATEGICA */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'succo') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                <Coffee className="w-4 h-4 text-rose-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                  Nutrizione del Mattino • Sezione 4
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  4. Il Succo alla Pesca: Perché Schizza a 180 e Cosa Mangiare
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30">
              Scelte al Risveglio
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-rose-500/40 space-y-4 bg-gradient-to-br from-rose-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(244,63,94,0.15)]">
            {/* Box Errore Succo */}
            <div className="p-4 rounded-2xl bg-red-950/30 border border-red-500/30 space-y-2 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <X className="w-3.5 h-3.5 text-red-400" />
                Bere Solo un Succo di Frutta (Brick alla Pesca): L'Errore N°1
              </span>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                I succhi di frutta confezionati nei brick sono <strong>zuccheri semplici liquidi ad assorbimento ultra-rapido</strong>, totalmente privi di fibre:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                  <strong className="text-red-300 block">Assorbimento Istantaneo:</strong>
                  <span className="text-gray-300">Lo stomaco non deve fare alcuno sforzo digestivo; gli zuccheri entrano nel circolo in pochi minuti.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                  <strong className="text-red-300 block">Doppio Segnale al Fegato:</strong>
                  <span className="text-gray-300">Il fegato stava già rilasciando glucosio (alba + rimbalzo); l'iniezione liquida fa impennare la curva sopra 180.</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5">
                  <strong className="text-red-300 block">Assenza Totale di "Freni":</strong>
                  <span className="text-gray-300">Mancano fibre, proteine e grassi sani che rallentano l'indice glicemico del pasto.</span>
                </div>
              </div>
            </div>

            {/* Alternativa Veloce in 30 Secondi */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-2.5 text-xs">
              <div className="flex items-center space-x-2">
                <span className="p-1 rounded-lg bg-emerald-500/20 text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                </span>
                <h4 className="font-bold text-white text-xs">
                  La Colazione Protetta Pronta in 30 Secondi (Con i "Freni" Glicemici)
                </h4>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed">
                Se la mattina hai fretta, abbina <strong>proteine + grassi buoni + carboidrati a lento rilascio</strong>:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/20 space-y-1">
                  <strong className="text-emerald-300 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Opzione A (Ultra-Veloce al Cucchiaio):
                  </strong>
                  <p className="text-gray-300">
                    • 1 Yogurt greco al naturale (o latte scremato / vegetale senza zuccheri aggiunti)<br />
                    • 3–4 noci o mandorle (grassi sani che frenano la digestione)
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/20 space-y-1">
                  <strong className="text-emerald-300 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Opzione B (Croccante & Sostanziosa):
                  </strong>
                  <p className="text-gray-300">
                    • 2 Fette biscottate integrali con un velo di burro d'arachidi 100%<br />
                    • Tazza di tè verde o caffè non zuccherato
                  </p>
                </div>
              </div>
              <p className="text-[10px] text-emerald-300 font-semibold bg-black/40 p-2 rounded-lg border border-emerald-500/20">
                ✨ Risultato: spegni la produzione epatica di zucchero senza creare picchi e mantieni la glicemia stabile fino a pranzo.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 5: PROTOCOLLO PRATICO & DIALOGO COL DIABETOLOGO       */}
      {/* ============================================================= */}
      {(activeTab === 'tutta' || activeTab === 'protocollo') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Stethoscope className="w-4 h-4 text-cyan-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  Sicurezza Clinica • Sezione 5
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  5. Protocollo Pratico & Cosa Mostrare al Medico
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Checklist Clinica
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-cyan-400/40 space-y-4 bg-gradient-to-br from-cyan-950/20 via-black/85 to-black shadow-[0_0_25px_rgba(6,182,212,0.15)]">
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-2xl bg-black/60 border border-white/10 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">1</span>
                <div>
                  <h5 className="font-bold text-white text-xs">Spuntino Pre-Nanna nei Giorni di Palestra Serale</h5>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Se eviti che la glicemia crolli a 60–70 mg/dL alle 3:00, il fegato non scatenerà il rimbalzo d'emergenza. Valuta con il medico uno spuntino pre-sonno a base di carboidrati complessi a rilascio lento e una quota proteica (es. fetta biscottata integrale con parmigiano o yogurt greco).
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-black/60 border border-white/10 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">2</span>
                <div>
                  <h5 className="font-bold text-white text-xs">Zuccheri Rapidi Sempre sul Comodino</h5>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Tieni sempre a portata di mano zuccheri a rapido assorbimento (bustine di zucchero, succo di frutta d'emergenza, pastiglie di glucosio) vicino al letto, pronti in caso di sintomi o allarmi di ipoglicemia notturna.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-black/60 border border-white/10 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">3</span>
                <div>
                  <h5 className="font-bold text-white text-xs">I Valori Chiave da Mostrare al Diabetologo</h5>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Segna su un diario o esporta dal sensore questi dati specifici:
                  </p>
                  <div className="p-2.5 rounded-xl bg-black/80 border border-rose-500/30 text-[11px] text-rose-200 font-mono mt-1 space-y-0.5">
                    <div>• <strong>03:00 AM:</strong> 60–70 mg/dL (Ipoglicemia post-allenamento)</div>
                    <div>• <strong>07:30 AM:</strong> ~120 mg/dL (Risveglio / Rimbalzo Somogyi)</div>
                    <div>• <strong>10:30 AM:</strong> ~180 mg/dL (A digiuno prolungato o post-succo)</div>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Questi 3 numeri sono preziosissimi per permettere al diabetologo di calibrare perfettamente l'insulina basale o la terapia dei giorni di allenamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-xs text-cyan-200 leading-relaxed space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" /> Nota di Responsabilità Medica
              </span>
              <p className="text-[11px] text-gray-200">
                Questa scheda spiega i meccanismi fisiologici ed è una guida personale di riferimento. Qualsiasi variazione nei dosaggi dell'insulina basale, dell'insulina rapida o della terapia orale va sempre concordata e validata con il proprio diabetologo o medico curante.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="pt-4 text-center">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-rose-500 hover:bg-rose-400 text-white font-extrabold text-xs transition-all shadow-lg hover:shadow-rose-500/25 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a Tutte le Note</span>
        </button>
      </div>
    </div>
  );
};
