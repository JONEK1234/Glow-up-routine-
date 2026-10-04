import React, { useState } from 'react';
import {
  ArrowLeft,
  Info,
  Sparkles,
  ShieldAlert,
  Clock,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Zap,
  Activity,
  Layers,
  Eye,
  Check,
  Scale
} from 'lucide-react';

interface MasticazioneMasseteriViewProps {
  onBack: () => void;
}

export const MasticazioneMasseteriView: React.FC<MasticazioneMasseteriViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutte' | 'tabella' | 'protocollo' | 'anatomia' | 'visivo'>('tutte');

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-amber-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a La Mia Asimmetria</span>
        </button>

        <span className="text-[11px] font-bold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-amber-400" />
          Sezione Informativa
        </span>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border-2 border-amber-500/40 relative overflow-hidden space-y-3 bg-gradient-to-br from-amber-950/40 via-black/85 to-purple-950/30 shadow-[0_0_35px_rgba(245,158,11,0.2)]">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase tracking-widest border border-amber-500/40 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Approfondimento Scientifico
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Masticazione & Muscoli Masseteri</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
          <span>Dieta Moderna, Gomme Dure per Definizione & Allenamento Massetere Sinistro</span>
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          La spiegazione scientifica e anatomica completa: la fisica delle gomme ad alta resistenza (jawline / mastice naturale), la protezione dell'articolazione temporo-mandibolare (ATM), il protocollo di allenamento da 10 minuti (65% sinistra / 35% destra), la spiegazione del perché a sinistra "si schiaccia" e la regola d'oro della simmetria visiva allo specchio.
        </p>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('tutte')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutte'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutta la Sezione
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tabella')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'tabella'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            1. Meccanica Gomme
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('protocollo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'protocollo'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            2. Protocollo 10 Min (65/35)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('anatomia')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'anatomia'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            3. Spiegazione Al Tatto & Timeline
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('visivo')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'visivo'
                ? 'bg-amber-400 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            4. Regola Visiva vs Tatto
          </button>
        </div>
      </div>

      {/* PREMESSA EVOLUTIVA */}
      <div className="p-4 sm:p-5 rounded-3xl bg-black/75 border border-amber-500/30 space-y-2.5 text-xs text-amber-200 leading-relaxed font-medium shadow-[0_0_20px_rgba(245,158,11,0.1)]">
        <div className="flex items-center space-x-2 text-amber-400 font-extrabold uppercase text-[10px] tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Premessa Fisiologica: La Dieta Moderna</span>
        </div>
        <p className="text-gray-200">
          Hai fatto un'osservazione acutissima: la <strong>dieta moderna è ricca di cibi morbidi e ultra-processati</strong>, ed è proprio la mancanza di cibi che richiedono uno sforzo masticatorio ad aver portato, negli ultimi decenni, a un minore sviluppo dei muscoli della mascella (masseteri).
        </p>
        <p className="text-gray-300">
          Mangiare <strong>croste di pane duro o cibi fibrosi</strong> è una forma di allenamento funzionale del tutto naturale e sicura. Riguardo alle <strong>gomme da masticare per la definizione</strong> (come le jawline chewing gum o gomme ad alta durezza/resistenza, spesso a base di mastice naturale o silicone alimentare), la differenza rispetto alle gomme da masticare classiche del supermercato è quasi interamente meccanica e strutturale.
        </p>
      </div>

      {/* ============================================================= */}
      {/* 1. LA DIFFERENZA SCIENTIFICO-MECCANICA (TABELLA)               */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'tabella') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Scale className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Confronto Meccanico
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  1. La Differenza Scientifico-Meccanica
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              Gomme Dure vs Normali
            </span>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/80 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-[10px] font-black uppercase tracking-wider text-amber-300">
                    <th className="p-3.5 sm:p-4">Caratteristica</th>
                    <th className="p-3.5 sm:p-4 text-gray-300">Gomme da Masticare Classiche</th>
                    <th className="p-3.5 sm:p-4 text-cyan-300">Gomme Specifiche per Definizione (Hard/Mastic)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[11px] text-gray-300">
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-3.5 sm:p-4 font-extrabold text-white whitespace-nowrap">Resistenza al Morso (Durezza)</td>
                    <td className="p-3.5 sm:p-4 text-gray-400">Molto bassa. Si ammorbidiscono in pochi secondi a contatto con la saliva.</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-cyan-200">Fino a 10-15 volte più dure delle gomme comuni; mantengono la consistenza elastica a lungo.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-3.5 sm:p-4 font-extrabold text-white whitespace-nowrap">Reclutamento Muscolare</td>
                    <td className="p-3.5 sm:p-4 text-gray-400">Stimolano principalmente le ghiandole salivari e solo minimamente il massetere.</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-cyan-200">Reclutano le fibre muscolari del massetere ad alta soglia di attivazione, inducendo un reale lavoro di resistenza.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-3.5 sm:p-4 font-extrabold text-white whitespace-nowrap">Tipo di Ipertrofia</td>
                    <td className="p-3.5 sm:p-4 text-gray-400">Nessun impatto visibile sulla massa muscolare.</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-cyan-200">Stimolano l'ipertrofia del muscolo massetere, aumentandone la densità e il volume all'angolo della mascella.</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02]">
                    <td className="p-3.5 sm:p-4 font-extrabold text-white whitespace-nowrap">Durata dell'Esercizio</td>
                    <td className="p-3.5 sm:p-4 text-gray-400">Nessun limite di tempo (se senza zucchero), ma con scarso valore meccanico.</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-cyan-200">Vanno trattate come un vero attrezzo da palestra (utilizzabili per brevi sessioni a tempo).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BOX PRO E CONTRO & SALVAGUARDIA ATM */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/75 border border-amber-500/30 space-y-3.5">
            <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              Te le Consiglio? Il Giudizio Scientifico: Sì, Ma Con Cautela
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              Le gomme dure funzionano davvero per ipertrofiare il massetere, ma <strong>la mascella non è un bilanciere</strong> e l'articolazione temporo-mandibolare (ATM) non è progettata per sollevare "carichi pesanti" per ore di fila.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  I Vantaggi
                </span>
                <ul className="space-y-1.5 text-[11px] text-gray-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>
                      <strong className="text-white">Focus sul lato lagging:</strong> nel tuo caso, ti permettono di applicare quella stimolazione mirata sul lato sinistro (quello meno denso) in modo controllato e pulito, senza dover caricare il lato destro.
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>
                      <strong className="text-white">Comodità:</strong> ti permettono di creare uno stimolo meccanico senza dover mangiare calorie extra.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  I Rischi se Usate Male
                </span>
                <ul className="space-y-1.5 text-[11px] text-gray-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>
                      <strong className="text-white">Disfunzione dell'ATM:</strong> usarle per mezz'ora o un'ora di fila può sovraccaricare il disco articolare della mandibola, causando schiocchi, dolore, infiammazione o acufeni.
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>
                      <strong className="text-white">Ipertrofia eccessiva o asimmetrica:</strong> se usi la gomma su tutti e due i lati allo stesso modo senza controllo, rischi di allargare anche il lato che ha già il massetere duro e la base del palato più grande.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-gray-200">
              🌿 <strong>In Sintesi Fisiologica:</strong> Continuare a mangiare cibi duri e naturali (come il pane duro, carote crude, carne fibrosa) resta la scelta più fisiologica e sicura in assoluto per la salute dei denti e della postura. Se vuoi usare le gomme dure come "integratore" per velocizzare il pareggio del massetere sinistro, usale con la testa: pochi minuti, focus sul lato debole e mai per ore.
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* 2. COME USARLE CORRETTAMENTE (PROTOCOLLO "PALESTRA")          */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'protocollo') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Clock className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Allenamento Mirato
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  2. Protocollo "Palestra" 10 Minuti (65% Sinistra / 35% Destra)
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              3-4 Volte a Settimana
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/75 border border-amber-500/30 space-y-4 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <p className="text-xs text-amber-200 leading-relaxed font-semibold bg-amber-950/30 p-3.5 rounded-2xl border border-amber-500/30">
              Trattare l'allenamento del massetere esattamente come un muscolo della palestra è l'approccio più intelligente in assoluto. Poiché il muscolo ha bisogno di sintesi proteica e riparazione per diventare più denso e duro, <strong>i giorni di riposo sono obbligatori</strong>, sia per le fibre muscolari che per l'articolazione (ATM).
            </p>

            {/* Frequenza e Giorni di Riposo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Frequenza Settimanale
                </span>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  <strong className="text-white">3-4 giorni a settimana massimo</strong> (es. Lunedì, Mercoledì, Venerdì e Domenica, oppure Lunedì, Martedì, Giovedì e Venerdì).
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Giorni di Riposo Totale
                </span>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  <strong className="text-white">2-3 giorni di riposo totale a settimana</strong> (es. il sabato e un paio di giorni infrasettimanali) in cui mastichi solo cibo normale senza forzare.
                </p>
              </div>
            </div>

            {/* Routine Minuto per Minuto */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-black/80 to-purple-950/30 border border-cyan-500/40 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                    Cronometro Ufficiale
                  </span>
                  <h4 className="text-sm font-black text-white flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    Routine da 10 Minuti Totali
                  </h4>
                </div>
                <span className="text-xs font-black text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-lg border border-cyan-400/30">
                  65% SX • 35% DX
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                <div className="p-3 rounded-xl bg-black/60 border border-cyan-500/30 space-y-1">
                  <span className="text-[10px] font-black text-cyan-300 block">1° Blocco • 4 min</span>
                  <strong className="text-white text-xs block">Focus Sinistro</strong>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Mastica esclusivamente sul lato sinistro. Morsi lenti, profondi e controllati.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-1">
                  <span className="text-[10px] font-black text-gray-400 block">2° Blocco • 2,5 min</span>
                  <strong className="text-white text-xs block">Masticazione Destra</strong>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Sposti la gomma sul lato destro per mantenere il tono senza ipertrofizzarlo oltre.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-cyan-500/30 space-y-1">
                  <span className="text-[10px] font-black text-cyan-300 block">3° Blocco • 2,5 min</span>
                  <strong className="text-white text-xs block">Focus Sinistro</strong>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Ritorni sul lato sinistro per dare il secondo stimolo di rafforzamento.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/30 space-y-1">
                  <span className="text-[10px] font-black text-emerald-300 block">Finale • 1 min</span>
                  <strong className="text-white text-xs block">Bilanciamento</strong>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Dividi o alterni al centro ad ogni morso per 1 minuto per defaticare l'articolazione in modo simmetrico.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/70 border border-white/5 text-[11px] text-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span>
                  <strong>Conteggio finale:</strong> Circa <strong>6 minuti e mezzo a sinistra (65%)</strong> e <strong>3 minuti e mezzo a destra (35%)</strong>.
                </span>
                <span className="text-amber-400 font-bold text-[10px] flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Stop se senti scatti, clic o dolore
                </span>
              </div>
            </div>

            {/* Come capire quando fermarsi o modificare */}
            <div className="space-y-2 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                Come Capire Quando Fermarsi o Modificare
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <strong className="text-white font-bold block text-xs">Affaticamento visibile (Pump):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Se dopo 8-10 minuti senti un leggero bruciore muscolare alla guancia sinistra (il classico "pump" da palestra), significa che il lavoro è stato efficace.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <strong className="text-white font-bold block text-xs">Il test di controllo (Ogni 14 giorni):</strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    A riposo, premi con le dita su entrambi i masseteri mentre stringi i denti. Quando sentirai che il lato sinistro è diventato compatto e duro quasi quanto il destro, <strong>passa alla routine 50/50</strong> (5 min a sinistra, 5 min a destra) per mantenere la simmetria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* 3. SPIEGAZIONE AL TATTO & TIMELINE                            */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'anatomia') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Activity className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Diagnosi Palpatoria
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  3. Perché a Sinistra Sembra che "Si Schiaccia"? & Timeline (4-8 Settimane)
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              Spessore vs Densità
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/75 border border-amber-500/30 space-y-4 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              La sensazione che descrivi è assolutamente normale e ha una spiegazione anatomica precisa: non è che il lato sinistro sia "mollo", ma c'è semplicemente una <strong>differenza di densità e spessore (volume)</strong> del muscolo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block">
                  Lato Destro (Più spesso / largo)
                </span>
                <p className="text-[11px] text-gray-200 leading-relaxed">
                  Il muscolo massetere è talmente fitto e ipertrofico che fa da <strong className="text-cyan-300">"muro"</strong>. Quando premi con le dita, trovi subito uno strato muscolare alto e denso che resiste alla pressione.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                  Lato Sinistro (Più fino)
                </span>
                <p className="text-[11px] text-gray-200 leading-relaxed">
                  Il muscolo è tonico (quindi duro quando lo contrai), ma avendo meno volume e meno spessore, quando fai una pressione decisa la pancia del muscolo <strong className="text-amber-300">cede leggermente di più</strong> sotto la spinta del dito prima di toccare la struttura ossea sottostante. È per questo che senti la sensazione che "si schiaccia".
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed font-medium">
              ✅ <strong>Cosa significa per la tua routine:</strong> Il muscolo sinistro risponderà benissimo perché non è affatto atrofizzato, ma solo meno spesso. Il lavoro mirato al 65% con la gomma dura o i cibi croccanti stimolerà il reclutamento di nuove fibre (ipertrofia miofibrillare). Con le sessioni da 10 minuti per 3-4 volte a settimana, accumulerà via via più densità fino a offrire la <strong>stessa identica resistenza a muro</strong> del lato destro.
            </div>

            {/* TIMELINE DELLE 4-8 SETTIMANE */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block">
                Timeline Fisiologica di Risposta (4-8 Settimane)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-black/60 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-cyan-300">Settimane 1-3</span>
                    <span className="text-[9px] font-bold text-gray-400">15-20 Giorni</span>
                  </div>
                  <strong className="text-white text-xs block">Risposta Nervosa & "Pump"</strong>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Nei primi 15-20 giorni non vedi ancora un vero aumento di massa, ma il sistema nervoso impara a reclutare più fibre a sinistra. Muscolo più pieno per qualche ora post-sessione (pump), a riposo la differenza permane.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/60 border border-amber-500/20 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-amber-300">Settimane 4-6</span>
                    <span className="text-[9px] font-bold text-gray-400">1° Mese</span>
                  </div>
                  <strong className="text-white text-xs block">Adattamento Miofibrillare</strong>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Inizia la vera ipertrofia e l'aumento di densità. Le fibre integrano nuove proteine per sostenere il 65% del carico. Al tatto, il lato sinistro smette di cedere e inizia a offrire resistenza solida a muro.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/60 border border-emerald-500/20 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-emerald-300">Settimane 6-8</span>
                    <span className="text-[9px] font-bold text-gray-400">2° Mese</span>
                  </div>
                  <strong className="text-white text-xs block">L'Equilibrio Completo</strong>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Il volume del muscolo sinistro recupera lo svantaggio e si allinea con quello destro. Quando premi con la stessa forza su entrambi i lati, percepisci una compattezza pressoché identica.
                  </p>
                </div>
              </div>
            </div>

            {/* Fattori che Possono Velocizzare il Processo */}
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-gray-300 space-y-1.5">
              <strong className="text-white font-bold block text-xs">Fattori che Possono Velocizzare il Processo:</strong>
              <p className="text-[11px] leading-relaxed">
                • <strong className="text-white">La Dieta (Proteine e Calorie):</strong> se stai già facendo palestra e assumi la giusta quota proteica, i masseteri avranno tutti i "mattoni" necessari per ripararsi e densificarsi rapidamente.
              </p>
              <p className="text-[11px] leading-relaxed">
                • <strong className="text-white">La Costanza:</strong> mantenere la frequenza di 3-4 sessioni a settimana (senza saltarle, ma senza nemmeno fare over-training senza riposo) è ciò che fa la vera differenza.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* 4. REGOLA D'ORO: SIMMETRIA VISIVA VS TATTO                    */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'visivo') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Eye className="w-4 h-4 text-purple-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  Verdetto Finale
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  4. Il Test Visivo Vince Sempre sul Test al Tatto
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
              No Sopraccompenso
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/75 border border-purple-500/40 space-y-4 shadow-[0_0_25px_rgba(168,85,247,0.15)]">
            <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-xs text-purple-200 leading-relaxed font-semibold">
              Hai centrato il punto più importante in assoluto: <strong>l'obiettivo finale è la simmetria visiva allo specchio, non una misurazione perfetta al tatto</strong>.
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Poiché esiste una piccola differenza nella base ossea (il lato destro ha una struttura leggermente più ampia), il tuo obiettivo non deve essere per forza rendere le due parti identiche spaccate al millimetro sotto le dita, ma equilibrare il volume complessivo per rendere il viso armonioso allo specchio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <strong className="text-white font-bold block text-xs">1. Il Tatto è un Indicatore:</strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Ti serve solo per capire se il muscolo di sinistra sta effettivamente prendendo tono e spessore (passando da quella sensazione di "cedevolezza" a una struttura più solida).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <strong className="text-emerald-300 font-bold block text-xs">2. Lo Specchio è il Verdetto:</strong>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Guarda il tuo viso alla luce naturale, a riposo e di fronte. Se visivamente i due lati del volto appaiono bilanciati e la mascella risulta definita e dritta, hai raggiunto il tuo obiettivo, anche se al tatto il lato destro (avendo più osso sotto) dovesse continuare a sembrarti un pelo più largo.
                </p>
              </div>
            </div>

            {/* Il Pericolo del Sopraccompenso */}
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2 text-xs">
              <strong className="text-amber-300 font-bold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Il Pericolo del "Sopraccompenso"
              </strong>
              <p className="text-[11px] text-gray-200 leading-relaxed">
                Se ti fissassi solo sul fare diventare il lato sinistro duro e largo esattamente quanto il destro al tatto, rischieresti di spingere la masticazione a sinistra oltre il necessario, finendo per ingrossare troppo il muscolo e creare una sproporzione opposta.
              </p>
            </div>

            {/* Come Regolarsi nella Pratica */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-cyan-950/30 to-black/70 border border-emerald-500/40 space-y-2 text-xs">
              <strong className="text-emerald-400 font-bold flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Check className="w-4 h-4 text-emerald-400" />
                Come Regolarsi nella Pratica
              </strong>
              <ul className="space-y-1.5 text-[11px] text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>
                    <strong className="text-white">Raggiungi il "Punto di Equilibrio Visivo":</strong> Continua con il lavoro mirato a sinistra (il 65% con cibi duri o gomma) finché noti che visivamente il riempimento della guancia e l'angolo della mascella si equivalgono.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>
                    <strong className="text-white">Passa subito al 50/50:</strong> Non appena lo specchio ti conferma che il viso è simmetrico e pulito, fermi il lavoro sbilanciato e passi a masticare in modo uguale (50% e 50%) sia a destra che a sinistra per mantenere la forma perfetta.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="pt-4 text-center">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs transition-all shadow-lg hover:shadow-amber-500/25 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a La Mia Asimmetria</span>
        </button>
      </div>
    </div>
  );
};
