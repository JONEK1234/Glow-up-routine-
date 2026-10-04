import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Calendar,
  Droplets,
  Dumbbell,
  ShieldCheck,
  Zap,
  Info,
  Sun,
  Moon,
  AlertTriangle,
  Bed,
  CheckCircle2,
  Wind
} from 'lucide-react';

interface GiorniShampooTextureViewProps {
  onBack: () => void;
}

interface RoutineDay {
  day: string;
  badge: string;
  badgeColor: string;
  morning: string;
  evening: string;
  nightNote: string;
  isNightWarning?: boolean;
  isShampooMorning?: boolean;
  isShampooEvening?: boolean;
}

const WEEK_DAYS: RoutineDay[] = [
  {
    day: 'Domenica',
    badge: 'SHAMPOO MATTINA',
    badgeColor: 'border-cyan-500/40 bg-cyan-500/15 text-cyan-300',
    morning: 'SHAMPOO (Head & Shoulders)',
    evening: 'Relax / Uscita',
    nightNote: 'Dormi con la cute pulita.',
    isShampooMorning: true
  },
  {
    day: 'Lunedì',
    badge: 'Texture + Palestra',
    badgeColor: 'border-amber-500/40 bg-amber-500/15 text-amber-300',
    morning: 'Texture (Polverina / Styling)',
    evening: 'Palestra ➔ Doccia SERA solo corpo (senza bagnare i capelli)',
    nightNote: 'Attenzione: Dormi con il sudore/prodotto del lunedì sul cuscino.',
    isNightWarning: true
  },
  {
    day: 'Martedì',
    badge: 'SHAMPOO MATTINA',
    badgeColor: 'border-cyan-500/40 bg-cyan-500/15 text-cyan-300',
    morning: 'SHAMPOO MATTINA',
    evening: 'Giornata standard',
    nightNote: 'Dormi con la cute pulita.',
    isShampooMorning: true
  },
  {
    day: 'Mercoledì',
    badge: 'Texture + Palestra',
    badgeColor: 'border-amber-500/40 bg-amber-500/15 text-amber-300',
    morning: 'Texture (Polverina / Styling)',
    evening: 'Palestra ➔ Doccia SERA normale/solo corpo',
    nightNote: 'Attenzione: Dormi con il sudore/prodotto del mercoledì sul cuscino.',
    isNightWarning: true
  },
  {
    day: 'Giovedì',
    badge: 'SHAMPOO MATTINA + Balsamo',
    badgeColor: 'border-cyan-500/40 bg-cyan-500/15 text-cyan-300',
    morning: 'SHAMPOO MATTINA (+ Balsamo Mousse Pantene)',
    evening: 'Giornata standard',
    nightNote: 'Dormi con la cute pulita e idratata.',
    isShampooMorning: true
  },
  {
    day: 'Venerdì',
    badge: 'Texture + SHAMPOO SERA',
    badgeColor: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300',
    morning: 'Texture (Polverina / Styling)',
    evening: 'Palestra ➔ SHAMPOO SERA',
    nightNote: 'Ottimo: Pulisci via palestra e polverina prima di dormire (asciuga al 100%).',
    isShampooEvening: true
  },
  {
    day: 'Sabato',
    badge: 'Texture Weekend',
    badgeColor: 'border-purple-500/40 bg-purple-500/15 text-purple-300',
    morning: 'Texture (Restyling rapido)',
    evening: 'Uscita / Relax',
    nightNote: 'Dormi con la cute leggera.'
  },
  {
    day: 'Domenica',
    badge: 'Ricomincia il Ciclo',
    badgeColor: 'border-cyan-500/40 bg-cyan-500/15 text-cyan-300',
    morning: 'SHAMPOO MATTINA',
    evening: '(Ricomincia il ciclo continuo)',
    nightNote: 'Dormi con la cute pulita.',
    isShampooMorning: true
  }
];

export const GiorniShampooTextureView: React.FC<GiorniShampooTextureViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutte' | 'tabella' | 'notti' | 'polverina'>('tutte');
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Top Navigation */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>
        <span className="text-[11px] font-bold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-xl border border-cyan-500/20 flex items-center gap-1.5">
          <Droplets className="w-3.5 h-3.5 text-cyan-400" />
          Capelli, Scuola & Palestra
        </span>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-cyan-500/30 relative overflow-hidden space-y-3 bg-gradient-to-br from-cyan-950/40 via-black/85 to-blue-950/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-black uppercase tracking-widest border border-cyan-500/30 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            ★ Note Scritte Da Me
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Ciclo Continuo</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
          <span>Giorni di shampoo e giorni texture</span>
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Tabella organizzata con i lavaggi distribuiti tra mattina e sera per stare sempre a posto con i capelli, la scuola e la palestra, inclusa la gestione delle notti critiche per il cuscino e la guida all'uso ottimale della polverina texturizzante.
        </p>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('tutte')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutte'
                ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutta la Guida
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tabella')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'tabella'
                ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            1. Tabella Settimanale
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notti')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'notti'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Bed className="w-3.5 h-3.5" />
            2. Notti Critiche & Cuscino
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('polverina')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'polverina'
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            3. Guida Polverina
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* SEZIONE 1: TABELLA ROUTINE SETTIMANALE (CICLO CONTINUO)        */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'tabella') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Calendar className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  Ciclo Continuo
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Tabella Routine Settimanale
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Mattina & Sera
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Ecco la tabella organizzata esattamente secondo i tuoi passaggi, con i lavaggi distribuiti tra mattina e sera per farti stare sempre a posto con i capelli e la scuola:
          </p>

          {/* TABELLA DESKTOP / CARD MOBILE */}
          <div className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-black/80 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            {/* Header Tabella Desktop */}
            <div className="hidden sm:grid grid-cols-12 gap-3 p-3.5 bg-cyan-950/50 border-b border-white/10 text-[11px] font-black uppercase tracking-wider text-cyan-300">
              <div className="col-span-2">Giorno</div>
              <div className="col-span-3 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                Mattina (Scuola)
              </div>
              <div className="col-span-4 flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                Pomeriggio / Sera
              </div>
              <div className="col-span-3 flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-rose-400" />
                Note Notte (Cuscino & Cute)
              </div>
            </div>

            {/* Righe Settimanali */}
            <div className="divide-y divide-white/5">
              {WEEK_DAYS.map((item, index) => {
                const isSelected = selectedDayIndex === index;

                return (
                  <div
                    key={`${item.day}-${index}`}
                    onClick={() => setSelectedDayIndex(isSelected ? null : index)}
                    className={`p-3.5 sm:p-4 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-950/30'
                        : item.isNightWarning
                        ? 'hover:bg-amber-500/5'
                        : item.isShampooEvening
                        ? 'hover:bg-emerald-500/5'
                        : item.isShampooMorning
                        ? 'hover:bg-cyan-500/5'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    {/* Visualizzazione Responsive */}
                    <div className="space-y-2.5 sm:space-y-0 sm:grid sm:grid-cols-12 sm:gap-3 sm:items-center">
                      {/* Colonna Giorno */}
                      <div className="sm:col-span-2 flex items-center justify-between sm:block">
                        <div className="flex items-center space-x-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${
                            item.isNightWarning
                              ? 'bg-amber-400 ring-2 ring-amber-400/40'
                              : item.isShampooEvening
                              ? 'bg-emerald-400 ring-2 ring-emerald-400/40'
                              : item.isShampooMorning
                              ? 'bg-cyan-400 ring-2 ring-cyan-400/40'
                              : 'bg-purple-400'
                          }`} />
                          <span className="font-extrabold text-sm text-white tracking-tight">
                            {item.day}
                          </span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border sm:mt-1 inline-block ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Colonna Mattina (Scuola) */}
                      <div className="sm:col-span-3 p-2.5 sm:p-0 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0 space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-300 uppercase tracking-wider sm:hidden">
                          <Sun className="w-3 h-3 text-amber-400" /> Mattina (Scuola)
                        </div>
                        <p className={`text-xs font-bold ${item.isShampooMorning ? 'text-cyan-300' : 'text-gray-100'}`}>
                          {item.morning}
                        </p>
                      </div>

                      {/* Colonna Pomeriggio / Sera */}
                      <div className="sm:col-span-4 p-2.5 sm:p-0 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0 space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-indigo-300 uppercase tracking-wider sm:hidden">
                          <Moon className="w-3 h-3 text-indigo-400" /> Pomeriggio / Sera
                        </div>
                        <p className={`text-xs font-semibold ${item.isShampooEvening ? 'text-emerald-300 font-bold' : 'text-gray-200'}`}>
                          {item.evening}
                        </p>
                      </div>

                      {/* Colonna Note Notte */}
                      <div className="sm:col-span-3 p-2.5 sm:p-0 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0 space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-rose-300 uppercase tracking-wider sm:hidden">
                          <Bed className="w-3 h-3 text-rose-400" /> Note Notte
                        </div>
                        <p className={`text-[11px] leading-relaxed font-medium ${
                          item.isNightWarning
                            ? 'text-amber-200 font-semibold'
                            : item.isShampooEvening
                            ? 'text-emerald-200/90'
                            : 'text-gray-300'
                        }`}>
                          {item.nightNote}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 2: CONSIGLIO PRATICO PER LE NOTTI CRITICHE            */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'notti') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Bed className="w-4 h-4 text-amber-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Lunedì & Mercoledì Notte
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Consiglio Pratico per le Notti Critiche
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              Cuscino & Cute
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/80 border border-amber-500/30 space-y-3.5 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <p className="text-xs text-amber-200 leading-relaxed font-medium bg-amber-950/30 p-3.5 rounded-2xl border border-amber-500/30">
              Visto che il <strong>lunedì</strong> e il <strong>mercoledì sera</strong> vai a dormire con i capelli che hanno accumulato la palestra e la polverina della mattina, adotta queste due abitudini fondamentali:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-amber-500/20 space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </span>
                  <strong className="text-white font-bold text-xs">
                    Gira o cambia la federa del cuscino:
                  </strong>
                </div>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-8">
                  Fallo il <strong className="text-amber-300">martedì mattina</strong>, così quando dormi il martedì sera con i capelli appena lavati non li riappoggi sul sudore e sui residui della notte prima.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-amber-500/20 space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </span>
                  <strong className="text-white font-bold text-xs">
                    Pochissima polverina al mattino:
                  </strong>
                </div>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-8">
                  Usa <strong className="text-amber-300">pochissima polverina</strong> il lunedì e il mercoledì mattina: in questo modo la notte la cute "soffre" e suda molto meno durante il sonno.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 3: LA FUNZIONE "MAGICA" DELLA POLVERE TEXTURIZZANTE    */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'polverina') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  Come Funziona
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  La Funzione "Magica" della Polvere Texturizzante
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
              Spugna Microscopica
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/80 border border-purple-500/30 space-y-4 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
            <p className="text-xs text-purple-200 leading-relaxed font-semibold bg-purple-950/30 p-3.5 rounded-2xl border border-purple-500/30">
              Hai colto esattamente la funzione "magica" della polvere texturizzante (volumizzante): è formulata principalmente a base di micro-particelle opacizzanti (spesso silice sferica o amido) che funzionano come una <strong className="text-white">vera e propria spugna microscopica</strong>.
            </p>

            <div className="space-y-2.5 text-xs text-gray-300">
              <strong className="text-white block font-bold text-xs">
                Cosa succede quando la metti a secco sui capelli:
              </strong>

              <div className="space-y-2">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-cyan-300 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-cyan-400" />
                    <span>Assorbe l'unto e il sudore residuo</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-gray-300 pl-6">
                    Cattura l'eccesso di sebo e l'umidità della notte, opacizzando il capello e togliendo quell'effetto lucido/pesante da "capello da lavare".
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-purple-300 font-bold">
                    <Zap className="w-4 h-4 shrink-0 text-purple-400" />
                    <span>Dà spinta e volume immediato</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-gray-300 pl-6">
                    Si deposita tra i singoli steli e crea una micro-frizione. Invece di scivolare e appiattirsi uno sull'altro, i capelli si "agganciano" tra loro, sollevando la radice al centro e sul ciuffo.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-emerald-300 font-bold">
                    <Wind className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Mantiene il controllo senza appesantire</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-gray-300 pl-6">
                    A differenza di gel o cere oleose, non incolla la chioma e ti permette di modellare il ciuffo con le dita anche durante la mattinata a scuola.
                  </p>
                </div>
              </div>
            </div>

            {/* Banner Alleata Lunedì & Mercoledì */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-cyan-950/30 to-black/70 border border-purple-400/30 text-xs text-gray-200 leading-relaxed font-medium">
              💡 <strong>Perché è la tua alleata n°1 il lunedì e mercoledì:</strong> ti permette di passare la giornata a scuola con un look pulito, pieno e strutturato, rimandando lo shampoo senza che nessuno noti la differenza, per poi fare il lavaggio profondo la mattina successiva!
            </div>
          </div>

          {/* ============================================================= */}
          {/* SOTTO-SEZIONE: COME FARLA FRUTTARE AL MASSIMO                */}
          {/* ============================================================= */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/80 border border-cyan-500/30 space-y-4 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Info className="w-4 h-4 text-cyan-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  Applicazione Perfetta
                </span>
                <h3 className="text-sm sm:text-base font-black text-white">
                  Sembra che Scompaia tra le Mani? Ecco il Segreto
                </h3>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-medium">
              È una sensazione normalissima: quando sfregi la polverina tra le mani sembra che "scompaia", ma in realtà si è distribuita in una <strong>pellicola microscopica sulle palme e sulle dita</strong>. Non è sparita nel nulla, è solo pronta all'uso! Il calore e l'umidità naturale della pelle la fanno aderire subito ai palmi.
            </p>

            <div className="space-y-2.5">
              <strong className="text-white block font-bold text-xs uppercase tracking-wider text-cyan-300">
                Come farla fruttare al massimo (Senza sprecarla):
              </strong>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-white font-bold">
                    <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-[11px] shrink-0 font-black">
                      1
                    </span>
                    <span>Non strofinare troppo le mani tra loro</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-gray-300 pl-7">
                    Quando la versi sul palmo, dai solo un paio di colpi leggeri con l'altro palmo per allargarla, senza sfregare forte. Non devi "farla assorbire" dalle mani, ma solo distribuirla prima di infilare le dita tra i capelli.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-white font-bold">
                    <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-[11px] shrink-0 font-black">
                      2
                    </span>
                    <span>Usa le mani come un rastrello</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-gray-300 pl-7">
                    Appena l'hai sulle dita, infila subito le mani dentro i capelli andando ad agganciare le radici, non rimanere solo sulle punte. Deve essere il capello ad "assorbire" la polvere dalle tue dita.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-white font-bold">
                    <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-[11px] shrink-0 font-black">
                      3
                    </span>
                    <span>Mani ben asciutte (Fondamentale!)</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-gray-300 pl-7">
                    Assicurati che prima di mettere la polverina le mani siano completamente asciutte. Se hai le mani anche solo leggermente umide dopo esserti lavato il viso o le mani, la polvere si impacca e si scioglie sulla pelle prima ancora di toccare i capelli.
                  </p>
                </div>
              </div>

              {/* Risultato finale */}
              <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed font-medium mt-2">
                ✨ <strong>Risultato:</strong> Facendo così, anche se ti sembra che sulle mani non ci sia più niente, appena entri nella chioma sentirai subito i capelli che prendono aderenza, volume e texture solida!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="pt-4 text-center">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs transition-all shadow-lg hover:shadow-cyan-500/25 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a Tutte le Note</span>
        </button>
      </div>
    </div>
  );
};
