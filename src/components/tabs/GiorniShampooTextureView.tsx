import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Calendar,
  Clock,
  Droplets,
  Wind,
  CheckCircle2,
  Dumbbell,
  ShieldCheck,
  Zap,
  Info,
  Layers,
  Flame,
  Sun,
  Moon,
  Sparkle
} from 'lucide-react';

interface GiorniShampooTextureViewProps {
  onBack: () => void;
}

const WEEK_DAYS = [
  {
    day: 'Lunedì',
    short: 'Lun',
    type: 'shampoo',
    badge: 'Palestra + Shampoo',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    morning: 'Sistemazione del ciuffo, idratazione texture',
    morningDetails: 'Lavori di precisione sul ciuffo, tocco di idratazione e polverina strategica senza appesantire la cute per la scuola.',
    evening: 'Palestra ➔ SHAMPOO SERA (Head & Shoulders). Asciugatura al 100%.',
    notes: 'Zero sudore a letto: shampoo serale dopo la palestra.'
  },
  {
    day: 'Martedì',
    short: 'Mar',
    type: 'texture',
    badge: 'Restyling Texture',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    morning: 'Restyling texture',
    morningDetails: 'Capello pulitissimo dalla sera prima: azzera la piega del cuscino con mani umide, phon dal basso per volume e polverina.',
    evening: 'Doccia rapida la sera solo corpo (testa asciutta)',
    notes: 'Cute pulita, non bagnare i capelli.'
  },
  {
    day: 'Mercoledì',
    short: 'Mer',
    type: 'shampoo',
    badge: 'Palestra + Shampoo & Balsamo',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    morning: 'Sistemazione del ciuffo, idratazione texture',
    morningDetails: 'Dettagli frontali sul ciuffo, morbidezza/idratazione leggera e polverina calibrata per reggere fino a sera.',
    evening: 'Palestra ➔ SHAMPOO SERA (+ Balsamo Mousse Pantene). Asciugatura al 100%.',
    notes: 'Nutrimento con Balsamo Mousse Pantene dopo la palestra.'
  },
  {
    day: 'Giovedì',
    short: 'Gio',
    type: 'texture',
    badge: 'Restyling Texture',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    morning: 'Restyling texture',
    morningDetails: 'Capelli leggeri e morbidi: mani umide contro la piega del cuscino, phon dal basso e polverina per massima struttura.',
    evening: 'Doccia rapida la sera solo corpo',
    notes: 'Mantieni la testa all asciutto sotto la doccia.'
  },
  {
    day: 'Venerdì',
    short: 'Ven',
    type: 'shampoo',
    badge: 'Palestra + Shampoo',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    morning: 'Sistemazione del ciuffo, idratazione texture',
    morningDetails: 'Focus sul ciuffo, idratazione leggera per la scuola e polverina per arrivare perfetto all allenamento serale.',
    evening: 'Palestra ➔ SHAMPOO SERA (Head & Shoulders). Asciugatura al 100%.',
    notes: 'Ultimo allenamento della settimana: cute pulita e asciugata al 100%.'
  },
  {
    day: 'Sabato',
    short: 'Sab',
    type: 'texture',
    badge: 'Restyling / Weekend',
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
    morning: 'Restyling texture (o styling per il weekend)',
    morningDetails: 'Capelli puliti dallo shampoo del venerdì sera: styling dinamico con phon e polverina per le uscite del sabato.',
    evening: 'Uscita / Relax (Eventuale shampoo la sera se esci)',
    notes: 'Serata libera: valuta lo shampoo la sera solo se necessario.'
  },
  {
    day: 'Domenica',
    short: 'Dom',
    type: 'relax',
    badge: 'Pausa Styling (Cute Libera)',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    morning: 'PAUSA STYLING (Lascia respirare la cute)',
    morningDetails: 'Nessun prodotto pesante o polverina: lascia che il cuoio capelluto riposi e respiri in modo naturale.',
    evening: 'Relax',
    notes: 'Riposo totale in vista del nuovo ciclo settimanale.'
  }
];

export const GiorniShampooTextureView: React.FC<GiorniShampooTextureViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutte' | 'tabella' | 'significato' | 'informazioni'>('tutte');
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
          Capelli & Routine
        </span>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-cyan-500/30 relative overflow-hidden space-y-3 bg-gradient-to-br from-cyan-950/40 via-black/85 to-blue-950/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-black uppercase tracking-widest border border-cyan-500/30 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            ★ Note Scritte Da Me
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Routine Settimanale Definitiva</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
          <span>Giorni di shampoo e giorni texture</span>
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Lo schema aggiornato con le indicazioni esatte per ogni mattina (scuola) e pomeriggio/sera (palestra & shampoo serale), il significato pratico dei passaggi e la spiegazione di perché questa logica funziona al 100%.
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
            1. Routine Settimanale
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('significato')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'significato'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Sparkle className="w-3.5 h-3.5" />
            2. Significato Passaggi
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('informazioni')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'informazioni'
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            3. Informazioni & Logica
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* SEZIONE 1: LA ROUTINE SETTIMANALE DEFINITIVA                  */}
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
                  Tabella Orari & Attività
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  La Routine Settimanale Definitiva
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Lun - Dom
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Ecco lo schema aggiornato con le indicazioni esatte per ogni mattina e sera:
          </p>

          {/* TABELLA DESKTOP / CARD MOBILE */}
          <div className="overflow-hidden rounded-3xl border border-cyan-500/30 bg-black/75 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            {/* Header Tabella */}
            <div className="hidden sm:grid grid-cols-12 gap-3 p-3.5 bg-cyan-950/40 border-b border-white/10 text-[11px] font-black uppercase tracking-wider text-cyan-300">
              <div className="col-span-2">Giorno</div>
              <div className="col-span-5 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                Mattina (Scuola)
              </div>
              <div className="col-span-5 flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                Pomeriggio / Sera
              </div>
            </div>

            {/* Righe Settimanali */}
            <div className="divide-y divide-white/5">
              {WEEK_DAYS.map((item, index) => {
                const isSelected = selectedDayIndex === index;
                const isShampoo = item.type === 'shampoo';
                const isTexture = item.type === 'texture';

                return (
                  <div
                    key={item.day}
                    onClick={() => setSelectedDayIndex(isSelected ? null : index)}
                    className={`p-4 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-950/30'
                        : isShampoo
                        ? 'hover:bg-cyan-500/5'
                        : isTexture
                        ? 'hover:bg-amber-500/5'
                        : 'hover:bg-emerald-500/5'
                    }`}
                  >
                    {/* Visualizzazione Mobile & Desktop Responsive */}
                    <div className="space-y-2.5 sm:space-y-0 sm:grid sm:grid-cols-12 sm:gap-3 sm:items-center">
                      {/* Colonna Giorno */}
                      <div className="sm:col-span-2 flex items-center justify-between sm:block">
                        <div className="flex items-center space-x-2">
                          <span className={`w-2 h-2 rounded-full ${
                            isShampoo ? 'bg-cyan-400 animate-pulse' : isTexture ? 'bg-amber-400' : 'bg-emerald-400'
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
                      <div className="sm:col-span-5 p-2.5 sm:p-0 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0 space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-300 uppercase tracking-wider sm:hidden">
                          <Sun className="w-3 h-3 text-amber-400" /> Mattina (Scuola)
                        </div>
                        <p className="text-xs font-semibold text-gray-100">
                          {item.morning}
                        </p>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                          {item.morningDetails}
                        </p>
                      </div>

                      {/* Colonna Pomeriggio / Sera */}
                      <div className="sm:col-span-5 p-2.5 sm:p-0 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0 space-y-1">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-cyan-300 uppercase tracking-wider sm:hidden">
                          <Moon className="w-3 h-3 text-cyan-400" /> Pomeriggio / Sera
                        </div>
                        <p className="text-xs font-semibold text-gray-100 flex items-center gap-1.5">
                          {isShampoo && <Dumbbell className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                          <span>{item.evening}</span>
                        </p>
                        <p className="text-[11px] text-cyan-200/80 leading-relaxed font-medium">
                          💡 {item.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Recap Badge Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5" /> Giorni Shampoo (3)
              </span>
              <p className="text-[11px] text-gray-300 font-medium">
                <strong className="text-white">Lunedì, Mercoledì, Venerdì:</strong> palestra e shampoo la sera prima di dormire.
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Giorni Texture (3)
              </span>
              <p className="text-[11px] text-gray-300 font-medium">
                <strong className="text-white">Martedì, Giovedì, Sabato:</strong> capello pulito, solo restyling con phon e polverina.
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Pausa Styling (1)
              </span>
              <p className="text-[11px] text-gray-300 font-medium">
                <strong className="text-white">Domenica:</strong> nessun prodotto, cuoio capelluto libero di respirare.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 2: SIGNIFICATO DEI PASSAGGI DELLA MATTINA             */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'significato') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Sun className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Cosa Fare la Mattina
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Significato dei Passaggi della Mattina
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              Guida Pratica
            </span>
          </div>

          <div className="space-y-3.5">
            {/* 1. Restyling texture */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-amber-500/30 space-y-3 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
              <div className="flex items-start justify-between border-b border-white/10 pb-2.5">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                    Martedì • Giovedì • Sabato
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Restyling Texture
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Giorno post-shampoo
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200 leading-relaxed font-medium">
                È il giorno subito dopo lo shampoo della sera prima. I capelli sono pulitissimi.
              </div>

              <div className="space-y-2 text-xs text-gray-300">
                <strong className="text-white block font-bold text-xs">
                  I 3 passaggi chiave per la mattina di scuola:
                </strong>
                <div className="grid grid-cols-1 gap-2 pl-1">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
                    <span className="text-[11px] leading-relaxed text-gray-300">
                      <strong className="text-white">Azzera la piega del cuscino:</strong> inumidisci leggermente le mani con acqua e passa le dita tra i capelli per togliere ogni segno del sonno.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
                    <span className="text-[11px] leading-relaxed text-gray-300">
                      <strong className="text-white">Phon dal basso per il volume:</strong> passa velocemente il phon orientando il getto d aria verso l alto per rialzare le radici in pochi secondi.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
                    <span className="text-[11px] leading-relaxed text-gray-300">
                      <strong className="text-white">Polverina per texture:</strong> applica una leggera spolverata di polverina volumizzante/texturizzante per dare definizione e tenuta naturale per tutta la giornata.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Sistemazione del ciuffo, idratazione texture */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-cyan-500/30 space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
              <div className="flex items-start justify-between border-b border-white/10 pb-2.5">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                    Lunedì • Mercoledì • Venerdì
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-cyan-400" />
                    Sistemazione del Ciuffo, Idratazione Texture
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Giorno di palestra & lavaggio
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-200 leading-relaxed font-medium">
                È la mattina del giorno in cui la sera farai la palestra e lo shampoo.
              </div>

              <div className="space-y-2 text-xs text-gray-300">
                <strong className="text-white block font-bold text-xs">
                  I passaggi strategici per la mattina:
                </strong>
                <div className="grid grid-cols-1 gap-2 pl-1">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[11px] shrink-0">•</span>
                    <span className="text-[11px] leading-relaxed text-gray-300">
                      <strong className="text-white">Lavori di precisione sul ciuffo:</strong> concentrati solo sulla parte frontale e sulla silhouette visibile del capello senza toccare troppo la nuca.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[11px] shrink-0">•</span>
                    <span className="text-[11px] leading-relaxed text-gray-300">
                      <strong className="text-white">Tocco di idratazione e leggerezza:</strong> mantieni il capello morbido senza ungere o appesantire la radice.
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[11px] shrink-0">•</span>
                    <span className="text-[11px] leading-relaxed text-gray-300">
                      <strong className="text-white">Polverina senza esagerare:</strong> usa la polverina in quantità moderata e strategica per arrivare perfetto a sera fino all'allenamento in palestra.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 3: INFORMAZIONI & LOGICA DELLA ROUTINE                */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'informazioni') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Info className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  Approfondimento Tecnico
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Informazioni: Perché Questa Routine Funziona
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
              Logica Perfetta
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-purple-500/30 space-y-4 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
            <p className="text-xs text-purple-200 leading-relaxed font-semibold bg-purple-950/30 p-3.5 rounded-2xl border border-purple-500/30">
              Sì, ci sta benissimo! Ha perfettamente senso perché rispecchia la condizione esatta del capello in quel momento della settimana:
            </p>

            <div className="space-y-3 text-xs text-gray-300">
              {/* Box 1: Restyling texture */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-amber-300 block font-bold text-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Restyling texture (il giorno subito dopo lo shampoo):
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-200 pl-3">
                  Il capello è leggero, soffice e perfettamente pulito dalla sera prima. Ti serve solo azzerare la piega del cuscino, rialzare la radice col phon e applicare la polverina per dare la struttura (texture) che ti piace.
                </p>
              </div>

              {/* Box 2: Sistemazione del ciuffo */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <strong className="text-cyan-300 block font-bold text-xs flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                  Sistemazione del ciuffo, idratazione texture (il giorno del lavaggio la sera):
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-200 pl-3">
                  Il capello ha già sulle spalle una giornata intera, quindi la mattina non devi stravolgerlo o riempirlo di troppa roba. Ti concentri sui dettagli frontali (il ciuffo), mantieni la morbidezza/idratazione senza appesantire la cute e dai quel tocco di polverina strategico per farlo reggere fino alla palestra della sera.
                </p>
              </div>
            </div>

            {/* Sintesi Finale */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-cyan-950/30 to-black/70 border-2 border-purple-400/40 space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-purple-400" />
                La Sintesi Vincente:
              </span>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                È una logica chiarissima e pratica: hai coperto sia la <strong className="text-cyan-300">salute del cuoio capelluto</strong> (zero sudore a letto) sia la <strong className="text-amber-300">resa estetica per la scuola</strong>. Se segui questi passaggi vai sul sicuro!
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
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs transition-all shadow-lg hover:shadow-cyan-500/25 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a Tutte le Note</span>
        </button>
      </div>
    </div>
  );
};
