import React, { useState } from 'react';
import {
  ArrowLeft,
  Moon,
  Wind,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  Layers,
  Eye,
  Heart,
  Compass,
  Zap,
  Bed,
  Smile,
  ShieldCheck,
  ChevronDown,
  Image as ImageIcon,
  Maximize2,
  X
} from 'lucide-react';

interface SonnoPosizioniViewProps {
  onBack: () => void;
}

export const SonnoPosizioniView: React.FC<SonnoPosizioniViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutte' | 'schiena' | 'lato'>('tutte');
  const [fullscreenImage, setFullscreenImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Top Navigation */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-indigo-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>
        <span className="text-[11px] font-bold text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-xl border border-indigo-500/20 flex items-center gap-1.5">
          <Moon className="w-3.5 h-3.5 text-indigo-400" />
          Riposo & Postura
        </span>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 📸 FOTO PROPRIO IN ALTO: ASSETTO POSTURALE & CUSCINO          */}
      {/* ------------------------------------------------------------- */}
      <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-indigo-400/40 bg-gradient-to-br from-indigo-950/30 via-black/85 to-purple-950/20 space-y-3 shadow-neon">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <ImageIcon className="w-4 h-4 text-indigo-400" />
            </span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400">
                Guida Fotografica • In Primo Piano
              </span>
              <h2 className="text-sm sm:text-base font-extrabold text-white">
                Riferimenti Visivi Postura & Cuscino
              </h2>
            </div>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
            2 Foto
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
          {/* FOTO 1 */}
          <div
            onClick={() => setFullscreenImage({ url: '/uploads/sonno_postura_1.jpg', title: 'Postura Notturna - Riferimento 1' })}
            className="group relative rounded-2xl overflow-hidden border border-indigo-500/30 bg-black/60 aspect-[4/3] sm:aspect-[3/2] cursor-pointer hover:border-indigo-400 transition-all shadow-md hover:shadow-indigo-500/25"
          >
            <img
              src="/uploads/sonno_postura_1.jpg"
              onError={(e) => {
                e.currentTarget.src = 'https://i.ibb.co/YFgX6mz2/1790514973388.jpg';
              }}
              alt="Postura notturna riferimento 1"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs">
              <span className="px-2.5 py-0.5 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-bold text-white border border-white/10 flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                Riferimento 1
              </span>
              <span className="p-1.5 rounded-xl bg-black/70 text-indigo-300 border border-white/10 group-hover:bg-indigo-500 group-hover:text-black transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* FOTO 2 */}
          <div
            onClick={() => setFullscreenImage({ url: '/uploads/sonno_postura_2.jpg', title: 'Postura Notturna - Riferimento 2' })}
            className="group relative rounded-2xl overflow-hidden border border-purple-500/30 bg-black/60 aspect-[4/3] sm:aspect-[3/2] cursor-pointer hover:border-purple-400 transition-all shadow-md hover:shadow-purple-500/25"
          >
            <img
              src="/uploads/sonno_postura_2.jpg"
              onError={(e) => {
                e.currentTarget.src = 'https://i.ibb.co/gbtWF2JW/1790514968582.jpg';
              }}
              alt="Postura notturna riferimento 2"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs">
              <span className="px-2.5 py-0.5 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-bold text-white border border-white/10 flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                Riferimento 2
              </span>
              <span className="p-1.5 rounded-xl bg-black/70 text-purple-300 border border-white/10 group-hover:bg-purple-500 group-hover:text-black transition-all">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-gray-400 text-center font-medium">
          👆 Tocca una foto per ingrandirla a schermo intero
        </p>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SOTTO: TITOLO NOTA "SONNO E POSIZIONI" E TASTI TOGGLE         */}
      {/* ------------------------------------------------------------- */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-indigo-500/30 relative overflow-hidden space-y-3 bg-gradient-to-br from-indigo-950/40 via-black/85 to-purple-950/30 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase tracking-widest border border-indigo-500/30 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-400" />
            ★ Note Scritte Da Me
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Tecniche & Test Pratici</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
          <span>Sonno e posizioni</span>
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Raccolta completa aggiornata delle tecniche posturali per la notte: test di verifica istantanea a pancia in su (respiro, rilascio muscolare totale, deglutizione, cuscino) e assetto perfetto di lato (asse naso-ombelico, spalla libera e cuscino tra le ginocchia).
        </p>

        {/* Tasti Toggle per cambiare Pancia in Su / Di Lato */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('tutte')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutte'
                ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutte le Tecniche
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('schiena')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'schiena'
                ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Bed className="w-4 h-4" />
            <span>A Pancia in Su</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('lato')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'lato'
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Di Lato</span>
          </button>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
          onClick={() => setFullscreenImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <span className="text-xs font-bold px-3 py-1 rounded-xl bg-white/10 border border-white/10">
                {fullscreenImage.title}
              </span>
              <button
                type="button"
                onClick={() => setFullscreenImage(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={fullscreenImage.url}
              alt={fullscreenImage.title}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain border border-white/10 shadow-2xl"
            />
            <span className="text-[10px] text-gray-400 mt-2">
              Tocca fuori per chiudere
            </span>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 1: A PANCIA IN SU                                     */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'schiena') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                <Bed className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-400">
                  Posizione 1 • Schiena
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  A Pancia in Su (Dormire di Schiena)
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
              3 Blocchi
            </span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Ecco la raccolta completa aggiornata, con l'aggiunta della tecnica della respirazione e del rilascio totale (il trucco del respiro profondo con "svuotamento"):
          </p>

          {/* 1. I Test Pratici Immediati */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-indigo-500/30 space-y-4 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                1. I Test Pratici Immediati
              </h3>
            </div>

            <div className="space-y-3 text-xs text-gray-300">
              {/* Il trucco del respiro e svuotamento */}
              <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-500/40 space-y-1.5 shadow-sm">
                <strong className="text-indigo-200 block font-bold text-xs flex items-center gap-1.5">
                  <Wind className="w-4 h-4 text-indigo-400" />
                  Il trucco del respiro e svuotamento (Rilascio totale):
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-200 pl-1">
                  Sdraiati, fa un <strong className="text-white">respiro grandissimo con il naso</strong> riempiendo completamente i polmoni e poi <strong className="text-white">espira fuori tutta l'aria lentamente dalla bocca</strong>. Mentre svuoti l'aria, immagina di "spegnere" tutti i muscoli e lascia che la testa, le spalle e la schiena sprofondino pesantemente sul cuscino e sul materasso. Se dopo l'espirazione la testa rimane lì senza che nessun muscolo la stia sorreggendo, la posizione è perfetta.
                </p>
              </div>

              {/* Il test del sacco morto */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Il test del sacco morto:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Sdraiati e abbandona completamente il peso del corpo sul cuscino. Non fare alcuna forza con il collo, le spalle o il mento. Se la testa appoggia pesante e non stai usando i muscoli per mantenerla in posizione, sei messo bene.
                </p>
              </div>

              {/* Il test della deglutizione */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Il test della deglutizione (Saliva):
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Sdraiati e inghiotti la saliva:
                </p>
                <div className="grid grid-cols-1 gap-1.5 pl-3.5 text-[11px]">
                  <div className="p-2 rounded-xl bg-red-950/20 border border-red-500/20 text-red-200 flex items-start gap-2">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span><strong>Se deglutisci a fatica:</strong> la testa è troppo alta e il mento è troppo schiacciato.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-950/20 border border-amber-500/20 text-amber-200 flex items-start gap-2">
                    <span className="text-amber-400 font-bold shrink-0">▲</span>
                    <span><strong>Se senti tirare la gola verso l'alto:</strong> la testa è troppo bassa.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-950/25 border border-emerald-500/30 text-emerald-200 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">✓</span>
                    <span><strong>Se deglutisci in modo fluido e naturale:</strong> la testa è perfettamente allineata.</span>
                  </div>
                </div>
              </div>

              {/* Il test delle 4 dita */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Il test delle 4 dita (o della mela):
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  A pancia in su, metti la mano di taglio tra la base del collo (sopra le clavicole) e la punta del mento. Lo spazio ideale equivale a <strong className="text-white">circa 4 dita affiancate</strong>, senza che il mento le schiacci e senza dover piegare la testa all'indietro.
                </p>
              </div>

              {/* Il test della gola libera */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Il test della gola libera:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Fai un'inspirazione profonda con il naso. Se l'aria entra liscia senza rumori, ostacoli o sensazione di gola "strozzata", la pervietà delle vie aeree e la posizione della testa sono corrette.
                </p>
              </div>

              {/* Il test dello sguardo */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-indigo-400" />
                  Il test dello sguardo:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Sdraiati a pancia in su e rilassa gli occhi:
                </p>
                <div className="grid grid-cols-1 gap-1.5 pl-3.5 text-[11px]">
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 text-gray-300 flex items-start gap-2">
                    <span className="text-gray-400 font-bold shrink-0">•</span>
                    <span><strong>Sguardo sui piedi o ginocchia:</strong> il cuscino è troppo alto.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 text-gray-300 flex items-start gap-2">
                    <span className="text-gray-400 font-bold shrink-0">•</span>
                    <span><strong>Sguardo verso la parete dietro di te:</strong> il cuscino è troppo basso.</span>
                  </div>
                  <div className="p-2 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-indigo-200 flex items-start gap-2">
                    <span className="text-indigo-400 font-bold shrink-0">✓</span>
                    <span><strong>Sguardo dritto al soffitto:</strong> l'altezza è corretta.</span>
                  </div>
                </div>
              </div>

              {/* Il test dei 10 secondi */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Il test dei 10 secondi:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Resta immobile a letto per 10 secondi e chiediti: <em>"C'è qualche muscolo del collo o delle spalle che sta lavorando adesso?"</em> Se la risposta è <strong className="text-indigo-300">no</strong>, la posizione è quella giusta.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Controllo degli Spazi Vuoti e del Cuscino */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-indigo-500/30 space-y-3.5 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                2. Controllo degli Spazi Vuoti e del Cuscino
              </h3>
            </div>

            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  La regola della mano dietro il collo:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Fai scivolare la mano aperta nella rientranza tra la nuca e il materasso. Il cuscino deve riempire completamente quel vuoto sostenendo la curva naturale del collo, senza spingere la testa in avanti.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Il test del peso della testa:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Sentire la testa "pesante" sulla nuca non è un errore, ma la conferma che i muscoli del collo si sono completamente disattivati e stanno scaricando l'intero peso (circa 4-5 kg) direttamente sul cuscino.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Regole per l'Allineamento del Corpo */}
          <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-indigo-500/30 space-y-3.5 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
            <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                3. Regole per l'Allineamento del Corpo
              </h3>
            </div>

            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Zero sforzo attivo:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Non devi mai tirare indietro le spalle, spingere il busto o incassare il mento con la forza di volontà. Qualsiasi movimento attivo mantiene i muscoli contratti durante la notte.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  Spalle e corpo a pancia in su:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Le spalle devono semplicemente "cadere" all'indietro per gravità sul materasso, senza essere forzate.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  L'aiuto del cuscino sotto le ginocchia:
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Mettere un piccolo cuscino sotto le ginocchia quando si dorme di schiena aiuta a far appoggiare automaticamente le spalle e la zona lombare al materasso, riducendo le tensioni.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                  L'aiuto del cuscino tra le gambe (se dormi di fianco):
                </strong>
                <p className="text-[11px] leading-relaxed text-gray-300 pl-3.5">
                  Mettere un cuscino tra le ginocchia evita la rotazione del bacino e mantiene la colonna vertebrale dritta senza dover sforzare il busto.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 2: DI LATO                                            */}
      {/* ============================================================= */}
      {(activeTab === 'tutte' || activeTab === 'lato') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Compass className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">
                  Posizione 2 • Fianco
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Di Lato (Dormire sul Fianco)
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30">
              3 Trucchi Chiave
            </span>
          </div>

          {/* Regola d'oro card */}
          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/40 text-xs text-purple-200 leading-relaxed font-medium space-y-1 shadow-sm">
            <span className="text-xs font-black text-purple-300 flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Regola d'Oro del Fianco:
            </span>
            <p>
              Quando sei di fianco, la regola d'oro è ancora più semplice: <strong className="text-white">la testa e il collo devono rimanere perfettamente in linea con la spina dorsale</strong>, senza pendere verso il basso e senza essere piegati verso l'alto.
            </p>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium pl-1">
            Ecco i 3 trucchi pratici per capire subito se sei messo bene quando dormi di lato:
          </p>

          {/* I 3 TRUCCHI PRATICI */}
          <div className="space-y-3">
            {/* 1. Il trucco del "Naso - Ombelico" */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-purple-500/30 space-y-3.5 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                <h3 className="text-sm sm:text-base font-extrabold text-white">
                  1. Il trucco del "Naso - Ombelico" (Linea Dritta)
                </h3>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed font-medium">
                Chiediti o immagina una linea retta che parte dalla punta del tuo naso, passa per la gola e arriva all'ombelico:
              </p>

              <div className="grid grid-cols-1 gap-2 text-xs">
                <div className="p-3 rounded-2xl bg-red-950/20 border border-red-500/20 text-red-200 space-y-1">
                  <strong className="block font-bold text-xs flex items-center gap-1.5 text-red-300">
                    <span>✕</span> Testa pendente (cuscino troppo basso):
                  </strong>
                  <p className="text-[11px] leading-relaxed text-red-200/90 pl-4">
                    Senti che l'orecchio rivolto verso il materasso ci schiaccia sopra e la testa "cade".
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-500/20 text-amber-200 space-y-1">
                  <strong className="block font-bold text-xs flex items-center gap-1.5 text-amber-300">
                    <span>▲</span> Testa piegata in alto (cuscino troppo alto):
                  </strong>
                  <p className="text-[11px] leading-relaxed text-amber-200/90 pl-4">
                    Senti il lato del collo verso il soffitto tirare o allungarsi.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 text-emerald-200 space-y-1">
                  <strong className="block font-bold text-xs flex items-center gap-1.5 text-emerald-300">
                    <span>✓</span> Posizione corretta:
                  </strong>
                  <p className="text-[11px] leading-relaxed text-emerald-200/90 pl-4">
                    Il naso punta dritto davanti a te (non verso il materasso né verso il soffitto) e il collo è rilassato su entrambi i lati.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Il trucco della spalla sotto */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-purple-500/30 space-y-3 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                <h3 className="text-sm sm:text-base font-extrabold text-white">
                  2. Il trucco della spalla sotto ("Spalla incastrata vs libera")
                </h3>
              </div>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <strong className="text-red-300 block font-bold text-xs flex items-center gap-1.5">
                    <span>⚠</span> Errore comune:
                  </strong>
                  <p className="text-[11px] leading-relaxed text-gray-300 pl-4">
                    Molti schiacciano la spalla inferiore direttamente sotto il corpo, restandoci sopra con tutto il peso. Questo porta a spingere il collo male e a far formicolare il braccio.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-purple-950/30 border border-purple-500/40 space-y-1">
                  <strong className="text-purple-300 block font-bold text-xs flex items-center gap-1.5">
                    <span>✓</span> Come sistemarla:
                  </strong>
                  <p className="text-[11px] leading-relaxed text-gray-200 pl-4">
                    Fai scivolare la spalla inferiore leggermente in avanti sul materasso, non direttamente sotto il torso. Il cuscino deve occupare lo spazio esatto che c'è tra la parte esterna della tua spalla e la guancia.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Il trucco del cuscino tra le ginocchia */}
            <div className="p-4 sm:p-5 rounded-3xl bg-black/70 border border-purple-500/30 space-y-3 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                <h3 className="text-sm sm:text-base font-extrabold text-white">
                  3. Il trucco del cuscino tra le ginocchia (FONDAMENTALE)
                </h3>
              </div>

              <p className="text-xs text-purple-300 font-bold">
                Questo è il trucco regina per chi dorme di fianco:
              </p>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <p className="text-[11px] leading-relaxed text-gray-300">
                    Quando ti metti di fianco, la gamba sopra tende a scivolare in avanti, facendo ruotare il bacino e storcendo la schiena.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-purple-950/30 border border-purple-500/40 space-y-1">
                  <strong className="text-white block font-bold text-xs flex items-center gap-1.5">
                    <span>💡</span> Soluzione:
                  </strong>
                  <p className="text-[11px] leading-relaxed text-gray-200 pl-4">
                    Metti un cuscino (anche un semplice cuscino da divano o piegato) in mezzo alle ginocchia.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 space-y-1">
                  <strong className="text-emerald-300 block font-bold text-xs flex items-center gap-1.5">
                    <span>⚡</span> Perché funziona:
                  </strong>
                  <p className="text-[11px] leading-relaxed text-emerald-200/90 pl-4">
                    Tiene le anche e il bacino dritti in automatico. Appena lo metti, sentirai le spalle e il collo rilassarsi da soli, senza che tu debba fare nulla per "tenerti dritto".
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RECAP IN 5 SECONDI */}
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-purple-950/40 to-black/80 border-2 border-purple-400/50 space-y-3 shadow-neon">
            <span className="text-xs font-black text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-purple-400" />
              Per riassumere in 5 secondi quando sei di fianco:
            </span>

            <div className="space-y-1.5 text-xs text-gray-200">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03]">
                <span className="w-5 h-5 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-[11px]">1</span>
                <span>Metti il cuscino tra le ginocchia.</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03]">
                <span className="w-5 h-5 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-[11px]">2</span>
                <span>Porta la spalla sotto leggermente in avanti.</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03]">
                <span className="w-5 h-5 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-[11px]">3</span>
                <span>Se il cuscino sotto la testa riempie lo spazio senza piegarti il collo verso l'alto o verso il basso, <strong className="text-purple-300">sei perfetto!</strong></span>
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
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-black font-extrabold text-xs transition-all shadow-lg hover:shadow-indigo-500/25 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a Tutte le Note</span>
        </button>
      </div>
    </div>
  );
};
