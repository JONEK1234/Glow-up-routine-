import React, { useState } from 'react';
import {
  ArrowLeft,
  Gift,
  ExternalLink,
  Sparkles,
  Scissors,
  CheckCircle2,
  AlertTriangle,
  Info,
  Maximize2,
  X,
  Droplets,
  Bed,
  Layers,
  ShoppingBag,
  ShieldCheck,
  Check
} from 'lucide-react';

interface CoseDaComprareRegaliViewProps {
  onBack: () => void;
}

export const CoseDaComprareRegaliView: React.FC<CoseDaComprareRegaliViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'tutti' | 'rasatura' | 'seta' | 'guida'>('tutti');
  const [fullscreenImage, setFullscreenImage] = useState<{ url: string; title: string } | null>(null);

  return (
    <div className="space-y-5 pb-24 pt-1 animate-in fade-in duration-200">
      {/* Lightbox a schermo intero per le foto dei prodotti */}
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-3 animate-in fade-in duration-200 cursor-pointer"
        >
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setFullscreenImage(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-3 cursor-default"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/50 shadow-2xl max-h-[75vh]">
              <img
                src={fullscreenImage.url}
                alt={fullscreenImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain mx-auto rounded-xl"
              />
            </div>
            <p className="text-sm font-bold text-white text-center px-4 py-1.5 rounded-full bg-black/60 border border-white/15">
              {fullscreenImage.title}
            </p>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <div className="flex items-center justify-between sticky top-0 z-30 bg-[#0B0F17]/95 backdrop-blur-md py-2 -mx-4 px-4 border-b border-white/10">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1.5 py-2 px-3 rounded-2xl bg-white/5 hover:bg-white/10 text-emerald-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tutte le Note</span>
        </button>
        <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/20 flex items-center gap-1.5">
          <Gift className="w-3.5 h-3.5 text-emerald-400" />
          I Miei Regali di Natale
        </span>
      </div>

      {/* Hero Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl glass-card border border-emerald-500/30 relative overflow-hidden space-y-3 bg-gradient-to-br from-emerald-950/40 via-black/85 to-teal-950/30 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase tracking-widest border border-emerald-500/30 flex items-center gap-1">
            <Gift className="w-3 h-3 text-emerald-400" />
            ★ Wishlist Ufficiale
          </span>
          <span className="text-[10px] text-gray-400 font-semibold">Amazon & Offtopic</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-black text-white leading-tight uppercase tracking-tight flex items-center gap-2">
          <span>Cose da comprare (i miei regali di natale)</span>
        </h1>

        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          La lista aggiornata, pulita e con i link diretti per consultare le schede prodotto, prezzi fissi e immagini ufficiali: il set rasatura di sicurezza anti-peli incarniti su Amazon e la federa in pura seta Mulberry 22 Momme su Offtopic.
        </p>

        {/* Tab Filters */}
        <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('tutti')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tutti'
                ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Tutti i Regali (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('rasatura')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'rasatura'
                ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            1. Rasoio & Lamette (Amazon)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('guida')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'guida'
                ? 'bg-amber-500 text-black shadow-md shadow-amber-500/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            2. Come Usarli Insieme
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('seta')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'seta'
                ? 'bg-sky-400 text-black shadow-md shadow-sky-400/30 font-extrabold'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            <Bed className="w-3.5 h-3.5" />
            3. Federa Pura Seta 49€ (Offtopic)
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* SEZIONE 1: IL RASOIO & LE LAMETTE (AMAZON)                     */}
      {/* ============================================================= */}
      {(activeTab === 'tutti' || activeTab === 'rasatura') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Scissors className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400">
                  Da comprare su Amazon
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  1. Rasoio di Sicurezza & Lamette Ricambio
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              Amazon
            </span>
          </div>

          {/* CARD 1: IL RASOIO (IL MANICO) */}
          <div className="p-4 sm:p-5 rounded-3xl glass-card border border-cyan-500/30 space-y-3 bg-black/75">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  1. Il Rasoio (Il Manico)
                </span>
                <h3 className="text-base font-black text-white">
                  King C. Gillette Rasoio di Sicurezza (Double Edge)
                </h3>
                <p className="text-xs text-gray-300">
                  <strong className="text-white">Cosa include:</strong> Manico in metallo cromato + 5 lamette di ricambio incluse nella scatola.
                </p>
              </div>

              <a
                href="https://www.amazon.it/s?k=King+C.+Gillette+Rasoio+di+Sicurezza+Double+Edge"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95 shrink-0"
              >
                <span>Scheda su Amazon</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                Il peso del metallo cromato permette di radere senza premere, eliminando follicolite e peli incarniti.
              </span>
            </div>
          </div>

          {/* CARD 2: LE LAMETTE DI RICAMBIO CON FOTO E PREZZO FISSO 15€ */}
          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-cyan-400/50 space-y-4 bg-gradient-to-br from-cyan-950/30 via-black/85 to-black shadow-[0_0_25px_rgba(6,182,212,0.15)]">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    2. Le Lamette di Ricambio (Lame Monolama)
                  </span>
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-500 text-black shadow-neon">
                    Prezzo lametta: 15 €
                  </span>
                </div>
                <h3 className="text-base font-black text-white">
                  Confezione Lamette di Ricambio Platino
                </h3>
                <p className="text-xs text-gray-300">
                  Da comprare su Amazon per avere sempre il taglio chirurgico e proteggere la pelle.
                </p>
              </div>

              <span className="text-[11px] font-bold text-gray-400 self-start">
                Spesa: ~15 €
              </span>
            </div>

            {/* Immagine Ufficiale Lamette Amazon con click per ingrandire */}
            <div
              onClick={() =>
                setFullscreenImage({
                  url: 'https://m.media-amazon.com/images/I/81z9BH2yUXL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlock',
                  title: 'Lamette di Ricambio Platinum (Prezzo ~15 €) • Amazon'
                })
              }
              className="group relative rounded-2xl overflow-hidden border border-white/20 bg-black cursor-pointer aspect-video sm:aspect-[21/9] max-h-64 shadow-xl transition-all hover:border-cyan-400"
            >
              <img
                src="https://m.media-amazon.com/images/I/81z9BH2yUXL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlock"
                alt="Lamette di Ricambio su Amazon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2.5 right-2.5 p-2 rounded-xl bg-black/70 hover:bg-black text-white group-hover:text-cyan-300 border border-white/20 backdrop-blur-md transition-all">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-bold text-white">
                  Foto Prodotto Amazon (Tocca per ingrandire)
                </span>
                <span className="text-[10px] font-extrabold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-400/30">
                  15 €
                </span>
              </div>
            </div>

            {/* Le 2 Opzioni: Scelta Primaria vs Alternativa Gillette */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Opzione 1: Astra Superior Platinum */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Scelta Primaria (Consigliata)
                  </span>
                  <span className="text-[10px] font-bold text-gray-400">~15 €</span>
                </div>
                <h4 className="text-xs font-black text-white">
                  Astra Superior Platinum ("Astra Verdi")
                </h4>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  <strong className="text-emerald-300">Perché:</strong> Lamette in acciaio con rivestimento in platino, perfette per evitare peli incarniti e arrossamenti.
                </p>
                <a
                  href="https://www.amazon.it/s?k=Astra+Superior+Platinum+lamette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <span>Scheda Astra su Amazon</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Opzione 2: King C. Gillette Ricambi */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-cyan-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Alternativa Gillette
                  </span>
                  <span className="text-[10px] font-bold text-gray-400">~15 €</span>
                </div>
                <h4 className="text-xs font-black text-white">
                  King C. Gillette Lamette da Barba di Ricambio
                </h4>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  <strong className="text-cyan-300">Perché:</strong> Sono esattamente le stesse lamette ricoperte in platino fornite nella confezione originale del rasoio.
                </p>
                <a
                  href="https://www.amazon.it/s?k=King+C.+Gillette+Lamette+da+Barba+di+Ricambio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <span>Scheda Ricambi King C. su Amazon</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 2: COME USARLI INSIEME (PROTOCOLLO RASATURA)          */}
      {/* ============================================================= */}
      {(activeTab === 'tutti' || activeTab === 'guida') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                  Protocollo Pratico
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  Come Usarli Insieme
                </h2>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
              4 Fasi
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl bg-black/80 border border-amber-500/30 space-y-3.5 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <p className="text-xs text-amber-200 leading-relaxed font-semibold bg-amber-950/30 p-3 rounded-2xl border border-amber-500/30">
              Segui rigorosamente questi 4 passaggi per ottenere una rasatura perfetta senza peli incarniti né bruciori:
            </p>

            <div className="space-y-2.5 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <span className="w-6 h-6 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-white text-xs">Inserisci la lametta</h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Inserisci una lametta nuova (Astra Platinum o King C. Gillette) nel rasoio di sicurezza King C. Gillette e serra la testa senza forzare.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <span className="w-6 h-6 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-white text-xs">Prepara la pelle</h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Bagna il viso con abbondante acqua tiepida per ammorbidire il pelo e applica la crema/gel Nivea Men Sensitive creando un film protettivo scivoloso.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <span className="w-6 h-6 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-white text-xs">Solo a favore di pelo (Zero pressione)</h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Raditi <strong className="text-white">solo a favore di pelo</strong>, senza fare pressione (lascia che sia il peso del metallo a scorrere da solo). Mai fare contropelo aggressivo.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                <span className="w-6 h-6 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-white text-xs">Risciacquo e bottiglia di ghiaccio</h4>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-0.5">
                    Risciacqua con acqua fresca e usa la <strong className="text-white">bottiglietta di ghiaccio</strong> (avvolta nella maglietta di cotone) per chiudere i pori e lenire istantaneamente la pelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* SEZIONE 3: FEDERA IN PURA SETA MULBERRY 22 MOMME (OFFTOPIC)   */}
      {/* ============================================================= */}
      {(activeTab === 'tutti' || activeTab === 'seta') && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pl-1 border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <Bed className="w-4 h-4 text-sky-400" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400">
                  Offtopic Brand • Prezzo Fisso 49 €
                </span>
                <h2 className="text-base sm:text-lg font-black text-white">
                  3. Federa in 100% Pura Seta Mulberry (Offtopic)
                </h2>
              </div>
            </div>
            <span className="text-xs font-black px-3 py-1 rounded-xl bg-sky-400 text-black shadow-neon">
              49 €
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-3xl glass-card border-2 border-sky-400/50 space-y-4 bg-gradient-to-br from-sky-950/30 via-black/85 to-black shadow-[0_0_25px_rgba(56,189,248,0.15)]">
            {/* Header Prodotto + Link Shop */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Investimento per Cute & Capelli
                </span>
                <h3 className="text-lg font-black text-white">
                  Federa di Seta Azzurra 22 Momme (Grado 6A)
                </h3>
                <p className="text-xs text-gray-300">
                  100% Pura Seta Mulberry naturale al massimo grado qualitativo sul mercato.
                </p>
              </div>

              <a
                href="https://offtopicbrand.com/products/federa-di-seta-azzurra"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 text-black font-black text-xs flex items-center gap-2 transition-all shadow-neon active:scale-95 shrink-0"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Link Shop Offtopic (49 €)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Immagine Benefici Federa di Seta con click per ingrandire */}
            <div
              onClick={() =>
                setFullscreenImage({
                  url: 'https://offtopicbrand.com/cdn/shop/files/azzurrabenefici.png?v=1720875098&width=1100',
                  title: 'Federa di Seta Azzurra 22 Momme • Benefici Ufficiali (49 €) • Offtopic'
                })
              }
              className="group relative rounded-2xl overflow-hidden border border-white/20 bg-black cursor-pointer aspect-video sm:aspect-[21/9] max-h-72 shadow-xl transition-all hover:border-sky-400"
            >
              <img
                src="https://offtopicbrand.com/cdn/shop/files/azzurrabenefici.png?v=1720875098&width=1100"
                alt="Federa di Seta Benefici Offtopic"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2.5 right-2.5 p-2 rounded-xl bg-black/70 hover:bg-black text-white group-hover:text-sky-300 border border-white/20 backdrop-blur-md transition-all">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-bold text-white">
                  Infografica Benefici Offtopic (Tocca per ingrandire)
                </span>
                <span className="text-[10px] font-black text-sky-300 bg-sky-950/80 px-2.5 py-0.5 rounded-md border border-sky-400/40">
                  Prezzo Fisso 49 €
                </span>
              </div>
            </div>

            {/* Caratteristiche Tecniche */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
                📋 Caratteristiche Tecniche
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-gray-400 text-[10px] block">Materiale</span>
                  <strong className="text-white text-xs">100% Pura Seta Mulberry</strong>
                  <span className="text-[10px] text-sky-300 block">Grado 6A (massima qualità)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-gray-400 text-[10px] block">Densità</span>
                  <strong className="text-white text-xs">22 Momme</strong>
                  <span className="text-[10px] text-sky-300 block">Spessa, resistente e duratura</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                  <span className="text-gray-400 text-[10px] block">Prezzo Ufficiale</span>
                  <strong className="text-emerald-400 text-sm font-black">49 €</strong>
                  <span className="text-[10px] text-gray-400 block">Investimento salute cute</span>
                </div>
              </div>
            </div>

            {/* Vantaggi Principali */}
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                ✨ Vantaggi Principali
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <strong className="text-white font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Zero Attrito Meccanico:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    La superficie scivolosa impedisce al ciuffo di annodarsi o schiacciarsi storto la notte, mantenendo la piega fatta il giorno prima o con la polverina.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <strong className="text-white font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Termoregolatrice e Traspirante:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Non soffoca la cute come il raso sintetico (poliestere); mantiene la testa fresca ed evita l'effetto serra che fa sudare e aumenta la forfora.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <strong className="text-white font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Non Assorbe i Prodotti:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    A differenza del cotone, non "succhia" l'idratazione della pelle né i prodotti per lo styling, lasciando la cute equilibrata.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                  <strong className="text-white font-bold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Ipoallergenica e Antibatterica:
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    Contrasta l'accumulo di acari e batteri, risultando ideale per chi ha la cute sensibile o soggetta ad arrossamenti.
                  </p>
                </div>
              </div>
            </div>

            {/* Svantaggi e Manutenzione */}
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                Svantaggi e Manutenzione (Come Trattarla)
              </span>
              <ul className="space-y-1.5 text-[11px] text-gray-300 pl-1">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong className="text-white">Asciugatura Obbligatoria all'Ombra:</strong> Non va mai stesa al sole diretto o sopra i termosifoni, perché i raggi UV e il calore forte seccano le fibre naturali della seta, facendole perdere lucentezza e rendendole rigide. Va fatta asciugare sempre all'aria in una zona d'ombra.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong className="text-white">Lavaggio Delicato:</strong> Richiede lavaggio a mano (o ciclo seta a freddo/30°C in lavatrice dentro il sacchetto protettivo) e mai in asciugatrice.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong className="text-white">Costo Iniziale:</strong> Rispetto al cotone ha un prezzo di 49 €, ma rappresenta un vero e proprio investimento per la cura dei capelli e della pelle.
                  </span>
                </li>
              </ul>
            </div>

            {/* Come Gestire la Lavanderia (Rotazione) */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/30 via-emerald-950/30 to-black/70 border border-sky-400/30 space-y-2 text-xs">
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-sky-400" />
                Come Gestire la Lavanderia (Rotazione Intelligente)
              </span>
              <div className="space-y-1.5 text-[11px] text-gray-300">
                <p>
                  • <strong className="text-white">Notti chiave:</strong> Usala nelle notti chiave (specie post-palestra o quando vuoi il ciuffo perfetto la mattina dopo a scuola).
                </p>
                <p>
                  • <strong className="text-white">Rotazione col cotone:</strong> Quando la lavi e la lasci asciugare all'ombra, usane una classica in 100% Cotone pulito, così mantieni sempre la regola di non dormire mai più notti consecutive sul sudore residuo.
                </p>
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
          className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs transition-all shadow-lg hover:shadow-emerald-500/25 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3]" />
          <span>Torna a Tutte le Note</span>
        </button>
      </div>
    </div>
  );
};
