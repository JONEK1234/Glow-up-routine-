import React, { useState, useEffect } from 'react';
import {
  Snowflake,
  Eye,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Video,
  Image as ImageIcon,
  ExternalLink,
  X,
  Maximize2,
  ShieldAlert,
  ListOrdered
} from 'lucide-react';

export const OrdineTab: React.FC = () => {
  // Lightbox modal state
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // 1. ICE ROUTINE STATE
  const [iceTimer, setIceTimer] = useState(120); // 2 minutes = 120s
  const [isIceRunning, setIsIceRunning] = useState(false);
  const [isIceVideoOpen, setIsIceVideoOpen] = useState(false);

  // 2. EYE EXERCISES STATE
  const [spoonTimer, setSpoonTimer] = useState(120); // 2 minutes = 120s
  const [isSpoonRunning, setIsSpoonRunning] = useState(false);

  // Video toggles for Eye Exercises
  const [activeEyeVideo, setActiveEyeVideo] = useState<'squeeze' | 'one_eye' | 'w_eye' | 'spoon' | null>(null);

  // Ice Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (isIceRunning && iceTimer > 0) {
      interval = setInterval(() => setIceTimer((prev) => prev - 1), 1000);
    } else if (iceTimer === 0) {
      setIsIceRunning(false);
    }
    return () => clearInterval(interval);
  }, [isIceRunning, iceTimer]);

  // Spoon Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (isSpoonRunning && spoonTimer > 0) {
      interval = setInterval(() => setSpoonTimer((prev) => prev - 1), 1000);
    } else if (spoonTimer === 0) {
      setIsSpoonRunning(false);
    }
    return () => clearInterval(interval);
  }, [isSpoonRunning, spoonTimer]);

  return (
    <div className="space-y-5 pb-24 pt-2 animate-in fade-in duration-200">
      {/* SECTION HEADER BANNER */}
      <div className="p-4 rounded-3xl glass-card relative overflow-hidden border border-[#00FFD1]/30 shadow-2xl space-y-2">
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#00FFD1]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center space-x-2 text-cyan-300 text-[10px] font-extrabold tracking-widest uppercase">
          <ListOrdered className="w-4 h-4 text-cyan-300" />
          <span>Sequenza Ordinata Personalizzata</span>
        </div>
        <h2 className="text-xl font-extrabold text-white leading-snug">
          Esercizi in Ordine Guidato
        </h2>
        <p className="text-xs text-gray-300 leading-relaxed font-medium">
          Segui i passaggi in sequenza rigida: <strong className="text-cyan-300">1. Ice Routine</strong>, poi <strong className="text-purple-300">2. Esercizi per gli Occhi</strong> e infine <strong className="text-emerald-300">3. Mewing</strong>.
        </p>
      </div>

      {/* =========================================================================
          PASSAGGIO 1: ICE ROUTINE (Crioterapia, Ice Dunking, Video & Guida)
         ========================================================================= */}
      <div className="p-5 rounded-3xl glass-card border border-cyan-500/30 space-y-4 relative overflow-hidden shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-neon">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-extrabold text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded-full border border-cyan-500/30 uppercase tracking-wider">
                  Passaggio 1
                </span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Crioterapia</span>
              </div>
              <h3 className="text-base font-extrabold text-white">Ice Routine completa</h3>
            </div>
          </div>
        </div>

        {/* Ice Dunking Timer */}
        <div className="p-4 rounded-2xl bg-black/50 border border-cyan-500/20 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">🧊 Ice Dunking & Crioterapia</h4>
              <p className="text-[10px] text-gray-400">Timer consigliato: 2 Minuti</p>
            </div>
            <div className="text-lg font-mono font-extrabold text-cyan-300 bg-black/80 px-3.5 py-1 rounded-xl border border-cyan-500/30 shadow-neon">
              {Math.floor(iceTimer / 60)}:{iceTimer % 60 < 10 ? '0' : ''}{iceTimer % 60}
            </div>
          </div>

          <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
            Immergi il viso in una ciotola con acqua fredda e ghiaccio per brevi sessioni da 10-15 secondi ciascuna. Vasocostringe i vasi sanguigni, riduce i gonfiori mattutini, chiude i pori e dona un immediato effetto de-puffing.
          </p>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsIceRunning(!isIceRunning)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-extrabold text-xs border border-cyan-500/40 flex items-center justify-center space-x-2 uppercase tracking-wider cursor-pointer transition-all active:scale-95 shadow-neon"
            >
              {isIceRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isIceRunning ? 'Pausa' : 'Avvia Timer Ice Routine (2 Min)'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsIceRunning(false);
                setIceTimer(120);
              }}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Azzera Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Ice Massaggio con Cubetto */}
        <div className="p-3.5 rounded-2xl bg-black/30 border border-white/5 space-y-1.5">
          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
            <span>❄️ Massaggio Linfatico con Cubetto (Ice Roller)</span>
          </h4>
          <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
            Fai scorrere il cubetto di ghiaccio avvolto in un panno sottile partendo dal centro del viso verso gli zigomi e la linea mandibolare per stimolare il drenaggio linfatico.
          </p>
        </div>

        {/* Video Dimostrativi Ice Routine Toggle */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setIsIceVideoOpen(!isIceVideoOpen)}
            className="w-full p-3 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-extrabold text-xs flex items-center justify-between transition-all active:scale-98 cursor-pointer group"
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                <Video className="w-4 h-4" />
              </div>
              <span>{isIceVideoOpen ? 'Nascondi Video Ice Routine' : 'Guarda Video Dimostrativi Ice Routine'}</span>
            </div>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-xl border border-cyan-500/30 font-bold uppercase tracking-wider">
              {isIceVideoOpen ? 'Chiudi' : '2 Video HD'}
            </span>
          </button>

          {isIceVideoOpen && (
            <div className="mt-3 space-y-4 p-4 rounded-2xl bg-black/60 border border-cyan-500/20 animate-in fade-in duration-200">
              {/* Video 1 */}
              <div className="space-y-1.5">
                <h5 className="text-xs font-bold text-white">Video 1: Tecnica Immersione & Ice Dunking</h5>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/LS_WNu18x40"
                    title="Ice Routine Video 1"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://youtube.com/shorts/LS_WNu18x40?is=sav2WHq4nAtVRSj4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:underline font-semibold pt-0.5"
                >
                  <span>Apri Video 1 su YouTube Shorts</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Video 2 */}
              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <h5 className="text-xs font-bold text-white">Video 2: Guida Crioterapia & Massaggio Viso</h5>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/BZTKMwRaopo"
                    title="Ice Routine Video 2"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://youtube.com/shorts/BZTKMwRaopo?is=50jtk1R0U-SZM_2a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:underline font-semibold pt-0.5"
                >
                  <span>Apri Video 2 su YouTube Shorts</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          PASSAGGIO 2: ESERCIZI PER GLI OCCHI (Squeeze, Hunter Eyes, Spoon Method)
         ========================================================================= */}
      <div className="p-5 rounded-3xl glass-card border border-purple-500/30 space-y-4 relative overflow-hidden shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/30 shadow-neon">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-extrabold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full border border-purple-500/30 uppercase tracking-wider">
                  Passaggio 2
                </span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Orbicolari & Sguardo</span>
              </div>
              <h3 className="text-base font-extrabold text-white">Esercizi per gli Occhi</h3>
            </div>
          </div>
        </div>

        {/* 1. Spoon Method for Eyes */}
        <div className="p-4 rounded-2xl bg-black/50 border border-indigo-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs font-bold text-white">🥄 1. Spoon Method (Cucchiai Freddi Perioculari)</h4>
              <p className="text-[10px] text-gray-400">Elimina borse ed occhiaie</p>
            </div>
            <div className="text-sm font-mono font-extrabold text-indigo-300 bg-black/80 px-3 py-1 rounded-xl border border-indigo-500/30">
              {Math.floor(spoonTimer / 60)}:{spoonTimer % 60 < 10 ? '0' : ''}{spoonTimer % 60}
            </div>
          </div>

          <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
            Raffredda due cucchiai in freezer per 5-10 minuti. Applica delicatamente la parte concava sotto gli occhi e sulle palpebre per 2 minuti per drenare i liquidi.
          </p>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsSpoonRunning(!isSpoonRunning)}
              className="flex-1 py-2 px-3 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold text-xs border border-indigo-500/40 flex items-center justify-center space-x-1.5 uppercase tracking-wider cursor-pointer hover:bg-indigo-500/30 transition-colors"
            >
              {isSpoonRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isSpoonRunning ? 'Pausa' : 'Timer Cucchiai (2 Min)'}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsSpoonRunning(false);
                setSpoonTimer(120);
              }}
              className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Video Toggle for Spoon Method */}
          <button
            type="button"
            onClick={() => setActiveEyeVideo(activeEyeVideo === 'spoon' ? null : 'spoon')}
            className="w-full p-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 font-semibold text-xs flex items-center justify-between border border-indigo-500/20 cursor-pointer mt-1"
          >
            <div className="flex items-center space-x-2">
              <Video className="w-4 h-4" />
              <span>Video Spoon Method</span>
            </div>
            <span className="text-[10px] uppercase font-bold">{activeEyeVideo === 'spoon' ? 'Nascondi' : 'Mostra Video'}</span>
          </button>

          {activeEyeVideo === 'spoon' && (
            <div className="pt-2 space-y-2 animate-in fade-in duration-200">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/TlSFUTAnkjE"
                  title="Spoon Method Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <a
                href="https://youtube.com/shorts/TlSFUTAnkjE?is=A45xn2oKTcdgCZGC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-indigo-400 hover:underline font-semibold"
              >
                <span>Apri Video su YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* 2. Squeeze Occhi */}
        <div className="p-4 rounded-2xl bg-black/50 border border-purple-500/20 space-y-3">
          <div>
            <h4 className="text-xs font-bold text-white">👀 2. Squeeze Occhi (Contrazione Orbicolari)</h4>
            <p className="text-[10px] text-purple-400 uppercase font-semibold">Target: 10 Ripetizioni Controllate</p>
          </div>

          <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
            Stringi le palpebre con forza per 3 secondi attivando i muscoli orbicolari perioculari, quindi rilascia lentamente. Rafforza il contorno occhi e tonifica le palpebre.
          </p>

          <button
            type="button"
            onClick={() => setActiveEyeVideo(activeEyeVideo === 'squeeze' ? null : 'squeeze')}
            className="w-full p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-semibold text-xs flex items-center justify-between border border-purple-500/20 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <Video className="w-4 h-4" />
              <span>Video Squeeze Occhi</span>
            </div>
            <span className="text-[10px] uppercase font-bold">{activeEyeVideo === 'squeeze' ? 'Nascondi' : 'Mostra Video'}</span>
          </button>

          {activeEyeVideo === 'squeeze' && (
            <div className="pt-2 space-y-2 animate-in fade-in duration-200">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/3e6BSzJ6rAU"
                  title="Squeeze Occhi Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <a
                href="https://youtube.com/shorts/3e6BSzJ6rAU?is=KO7evwTVExgm8uDm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-purple-400 hover:underline font-semibold"
              >
                <span>Apri Video su YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* 3. One Eye Hunter */}
        <div className="p-4 rounded-2xl bg-black/50 border border-purple-500/20 space-y-3">
          <div>
            <h4 className="text-xs font-bold text-white">🎯 3. One Eye Hunter (Sguardo Hunter)</h4>
            <p className="text-[10px] text-purple-400 uppercase font-semibold">Target: 10 Ripetizioni per Occhio</p>
          </div>

          <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
            Metti in tensione la palpebra inferiore di un solo occhio mantenendo lo sguardo fisso in avanti, per allenare il controllo isolato dei muscoli e migliorare la canthopexy naturale.
          </p>

          <button
            type="button"
            onClick={() => setActiveEyeVideo(activeEyeVideo === 'one_eye' ? null : 'one_eye')}
            className="w-full p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-semibold text-xs flex items-center justify-between border border-purple-500/20 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <Video className="w-4 h-4" />
              <span>Video One Eye Hunter</span>
            </div>
            <span className="text-[10px] uppercase font-bold">{activeEyeVideo === 'one_eye' ? 'Nascondi' : 'Mostra Video'}</span>
          </button>

          {activeEyeVideo === 'one_eye' && (
            <div className="pt-2 space-y-2 animate-in fade-in duration-200">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/ZYs3TpXuB4Q"
                  title="One Eye Hunter Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <a
                href="https://youtube.com/shorts/ZYs3TpXuB4Q?is=szvBHfeAZpN1a6w_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-purple-400 hover:underline font-semibold"
              >
                <span>Apri Video su YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* 4. W Eye Hunter */}
        <div className="p-4 rounded-2xl bg-black/50 border border-purple-500/20 space-y-3">
          <div>
            <h4 className="text-xs font-bold text-white">⚡ 4. W Eye Hunter (Attivazione Bilaterale)</h4>
            <p className="text-[10px] text-purple-400 uppercase font-semibold">Target: 20 Ripetizioni</p>
          </div>

          <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
            Attiva simultaneamente la parte inferiore delle palpebre formando uno sguardo socchiuso ad "Hunter Eye" ben bilanciato, contraendo per 2 secondi ogni volta.
          </p>

          <button
            type="button"
            onClick={() => setActiveEyeVideo(activeEyeVideo === 'w_eye' ? null : 'w_eye')}
            className="w-full p-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-semibold text-xs flex items-center justify-between border border-purple-500/20 cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <Video className="w-4 h-4" />
              <span>Video W Eye Hunter</span>
            </div>
            <span className="text-[10px] uppercase font-bold">{activeEyeVideo === 'w_eye' ? 'Nascondi' : 'Mostra Video'}</span>
          </button>

          {activeEyeVideo === 'w_eye' && (
            <div className="pt-2 space-y-2 animate-in fade-in duration-200">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/nVA5NJIgbcw"
                  title="W Eye Hunter Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <a
                href="https://youtube.com/shorts/nVA5NJIgbcw?is=potzJc19D3GmSmIC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-purple-400 hover:underline font-semibold"
              >
                <span>Apri Video su YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          PASSAGGIO 3: MEWING (Posizione Lingua, Masticazione, Foto Guida, Regole)
         ========================================================================= */}
      <div className="p-5 rounded-3xl glass-card border border-emerald-500/30 space-y-4 relative overflow-hidden shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-neon">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-extrabold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30 uppercase tracking-wider">
                  Passaggio 3
                </span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Mascella & Palato</span>
              </div>
              <h3 className="text-base font-extrabold text-white">Mewing & Masticazione</h3>
            </div>
          </div>
        </div>

        {/* Mewing Title Header */}
        <div className="p-3.5 rounded-2xl bg-black/50 border border-emerald-500/20">
          <h4 className="text-xs font-bold text-white">👅 Posizione Corretta della Lingua</h4>
          <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Postura Linguale Costante</p>
        </div>

        {/* Do's & Don'ts */}
        <div className="grid grid-cols-1 gap-2.5 text-xs">
          <div className="p-3.5 rounded-2xl bg-[#00FFD1]/10 border border-[#00FFD1]/30 space-y-1.5">
            <span className="font-bold text-cyan-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              <CheckCircle2 className="w-4 h-4 text-cyan-300" /> COSA FARE (Linea Guida Corretta):
            </span>
            <ul className="list-disc list-inside text-[11px] text-gray-200 space-y-1.5 pl-1 font-medium">
              <li>Incolla l’intero corpo della lingua al palato (compresa la parte posteriore e il terzo posteriore).</li>
              <li>Mantieni le labbra delicatamente sigillate con respirazione esclusivamente nasale.</li>
              <li>Denti a contatto sfiorato o a un solo millimetro di distanza senza serrarli.</li>
              <li>Crea un vuoto d'aria inghiottendo la saliva per mantenere la lingua adesa senza sforzo.</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-1.5">
            <span className="font-bold text-rose-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              <ShieldAlert className="w-4 h-4 text-rose-400" /> ERRORI GRAVI DA EVITARE:
            </span>
            <ul className="list-disc list-inside text-[11px] text-gray-200 space-y-1.5 pl-1 font-medium">
              <li>NON spingere la punta della lingua con forza contro i denti anteriori (evita l'affollamento dentale).</li>
              <li>NON serrare i denti con forza o digrignare la mascella durante il giorno (bruxismo).</li>
              <li>Evita assolutamente la respirazione orale che causa l'allungamento della fascia facciale.</li>
            </ul>
          </div>
        </div>

        {/* Masticazione Gomma da Masticare */}
        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1.5 text-xs">
          <span className="font-bold text-amber-300 block uppercase tracking-wider text-[11px]">🍬 Gomma da Masticare (Masticazione Guidata):</span>
          <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
            Mastica gomma dura (es. gomma di mastice o chewing-gum denso) per <strong>15-20 minuti al giorno</strong>. Alterna regolarmente il lato sinistro e destro ogni 2 minuti per sviluppare i muscoli masseteri in modo perfettamente simmetrico. Interrompi immediatamente se avverti scatti o dolori all'articolazione temporo-mandibolare (TMJ).
          </p>
        </div>

        {/* Photo Guida Mewing Lightbox */}
        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-300">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Foto Guida Posizione Lingua (Mewing)</h4>
              <p className="text-[10px] text-gray-400">Clicca per ingrandire a schermo intero</p>
            </div>
          </div>

          <div
            onClick={() => setFullscreenImage('https://i.ibb.co/mCxmy8DK/KM7-OC2-BLFVAD5-C3-JHBZT7-WTBCM.jpg')}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-emerald-500/50 hover:shadow-neon"
          >
            <img
              src="https://i.ibb.co/mCxmy8DK/KM7-OC2-BLFVAD5-C3-JHBZT7-WTBCM.jpg"
              alt="Guida Mewing"
              referrerPolicy="no-referrer"
              className="w-full h-60 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-3 pointer-events-none">
              <span className="text-xs font-bold text-white">Anatomia & Posizione Mewing</span>
              <span className="p-1.5 rounded-lg bg-black/60 text-emerald-300 border border-white/20">
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* THUMB PULLING MEWING (ESERCIZIO AVANZATO) */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-black/70 to-cyan-950/30 border border-cyan-400/40 space-y-4 shadow-xl">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-black uppercase tracking-wider border border-cyan-400/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Esercizio Aggiunto
                </span>
                <span className="text-[10px] text-emerald-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Espansione Palatina & Simmetria
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-black text-white uppercase tracking-wide">
                Thumbpulling Mewing (Thumpulling)
              </h4>
              <p className="text-[11px] text-gray-300 font-medium leading-relaxed">
                Esercizio ortopedico di spinta manuale con i pollici per allargare l'arcata palatina, stimolare la sutura mediana e favorire l'avanzamento mandibolare e zigomatico.
              </p>
            </div>
          </div>

          {/* TikTok Video Connection */}
          <div className="p-3.5 rounded-2xl bg-black/70 border border-cyan-400/30 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block">Video Tutorial TikTok</span>
                  <h5 className="text-xs font-bold text-white">Guida Visiva all'Esecuzione Corretta</h5>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-gray-300">TikTok</span>
            </div>

            <p className="text-[11px] text-gray-300 leading-relaxed font-normal">
              Guarda come posizionare i pollici e come imprimere la spinta verso l'esterno:
            </p>

            <a
              href="https://vm.tiktok.com/ZN8jNd7JF/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-[#00FFD1]/15 hover:bg-[#00FFD1]/25 text-cyan-200 border border-[#00FFD1]/40 transition-all group active:scale-98 cursor-pointer shadow-neon"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded-lg bg-[#00FFD1] text-black">
                  <Play className="w-3.5 h-3.5 fill-black" />
                </div>
                <div>
                  <span className="text-xs font-black text-white block">Apri Video su TikTok</span>
                  <span className="text-[10px] text-cyan-300 font-mono">https://vm.tiktok.com/ZN8jNd7JF/</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-cyan-300 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Step-by-Step Instructions */}
          <div className="space-y-2 text-xs">
            <span className="text-[11px] font-black text-cyan-300 uppercase tracking-wider block">
              📋 Come Eseguirlo - Passaggi Dettagliati:
            </span>

            {/* Step 1 */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-2.5">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">1</span>
              <div>
                <strong className="text-white block text-[11px]">Igiene e Preparazione:</strong>
                <span className="text-gray-300 text-[11px] leading-relaxed">
                  Lavati a fondo le mani con acqua calda e sapone igienizzante. Taglia le unghie dei pollici corte e lisce per non ferire il palato.
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-2.5">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">2</span>
              <div>
                <strong className="text-white block text-[11px]">Posizionamento dei Pollici (Premolari/Molari):</strong>
                <span className="text-gray-300 text-[11px] leading-relaxed">
                  Inserisci entrambi i pollici in bocca con i polpastrelli appoggiati piatti sulla volta del palato duro (zona premolari e molari). <strong className="text-rose-400">NON toccare e non spingere MAI sugli incisivi</strong>.
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-2.5">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">3</span>
              <div>
                <strong className="text-white block text-[11px]">Pressione Laterale ed Espansiva:</strong>
                <span className="text-gray-300 text-[11px] leading-relaxed">
                  Esercita una spinta graduale e costante verso l'esterno (in direzione delle orecchie/guance) e leggermente verso l'alto. Usa le dita esterne poggiate sul mento come perno stabile.
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-2.5">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">4</span>
              <div>
                <strong className="text-white block text-[11px]">Tenuta (30-45s) e Respirazione Nasale:</strong>
                <span className="text-gray-300 text-[11px] leading-relaxed">
                  Mantieni la spinta fissa per <strong>30-45 secondi</strong> respirando regolarmente con il naso. Esegui <strong>3-4 serie</strong> al giorno.
                </span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start space-x-2.5">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">5</span>
              <div>
                <strong className="text-white block text-[11px]">Vacuum Mewing Immediato:</strong>
                <span className="text-gray-300 text-[11px] leading-relaxed">
                  Rilascia delicatamente i pollici e risucchia immediatamente l'intera lingua (specialmente la base posteriore) contro il palato per "fissare" l'espansione.
                </span>
              </div>
            </div>

            {/* Step 6 Caution */}
            <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-start space-x-2.5">
              <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 font-black text-[11px] flex items-center justify-center shrink-0 mt-0.5">!</span>
              <div>
                <strong className="text-rose-300 block text-[11px]">Sicurezza Articolazione ATM:</strong>
                <span className="text-gray-300 text-[11px] leading-relaxed">
                  Non forzare a scatti o in modo doloroso. Se provi fastidio all'articolazione o alla mascella, interrompi subito e riposa.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {fullscreenImage && (
        <div
          onClick={() => setFullscreenImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-200 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={() => setFullscreenImage(null)}
            className="absolute top-5 right-5 p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={fullscreenImage}
            alt="Foto Schermo Intero"
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
