import React, { useState, useEffect } from 'react';
import { Sparkles, Play, Pause, RotateCcw, CheckCircle2, Eye, Activity, ShieldAlert, Snowflake, Video, Image as ImageIcon, ExternalLink, X, ArrowLeft, Maximize2, Moon, Sun } from 'lucide-react';

export const LookmaxingTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'mewing' | 'collo_mento' | 'body_posture' | 'eyes' | 'ice' | 'lymphatic' | 'sleep'>('mewing');

  // Full menu for Chin Tucks, Neck Curls, Front Neck, Squeeze Occhi, Hunter Eyes & Spoon Method media
  const [isChinMediaOpen, setIsChinMediaOpen] = useState(false);
  const [isNeckMediaOpen, setIsNeckMediaOpen] = useState(false);
  const [isFrontNeckMediaOpen, setIsFrontNeckMediaOpen] = useState(false);
  const [isEyeSqueezeMediaOpen, setIsEyeSqueezeMediaOpen] = useState(false);
  const [isOneEyeHunterMediaOpen, setIsOneEyeHunterMediaOpen] = useState(false);
  const [isWEyeHunterMediaOpen, setIsWEyeHunterMediaOpen] = useState(false);
  const [isSpoonMediaOpen, setIsSpoonMediaOpen] = useState(false);
  const [isIceMediaOpen, setIsIceMediaOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Exercise Counters & Timers
  // Chin Tucks state: completed sets (0, 1, or 2)
  const [chinCompletedSets, setChinCompletedSets] = useState(0);

  // Neck Curls state: completed sets (0, 1, or 2)
  const [neckCompletedSets, setNeckCompletedSets] = useState(0);

  // Front Neck state: completed sets (0, 1, or 2)
  const [frontNeckCompletedSets, setFrontNeckCompletedSets] = useState(0);

  // Cold Spoon Timer (120 seconds = 2 min)
  const [spoonTimer, setSpoonTimer] = useState(120);
  const [isSpoonRunning, setIsSpoonRunning] = useState(false);

  // Ice Routine Timer (120 seconds = 2 min)
  const [iceTimer, setIceTimer] = useState(120);
  const [isIceRunning, setIsIceRunning] = useState(false);

  // Spoon timer effect
  useEffect(() => {
    let interval: any = null;
    if (isSpoonRunning && spoonTimer > 0) {
      interval = setInterval(() => setSpoonTimer(p => p - 1), 1000);
    } else if (spoonTimer === 0) {
      setIsSpoonRunning(false);
    }
    return () => clearInterval(interval);
  }, [isSpoonRunning, spoonTimer]);

  // Ice timer effect
  useEffect(() => {
    let interval: any = null;
    if (isIceRunning && iceTimer > 0) {
      interval = setInterval(() => setIceTimer(p => p - 1), 1000);
    } else if (iceTimer === 0) {
      setIsIceRunning(false);
    }
    return () => clearInterval(interval);
  }, [isIceRunning, iceTimer]);

  if (isChinMediaOpen) {
    return (
      <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
        {/* Back button */}
        <button
          type="button"
          onClick={() => setIsChinMediaOpen(false)}
          className="flex items-center space-x-2 py-2 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a Collo / Mento</span>
        </button>

        {/* Header */}
        <div className="p-5 rounded-3xl glass-card relative overflow-hidden border border-cyan-500/30 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Video & Foto Chin Tucks</h2>
              <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Guida Postura & Esercizi Collo</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Video Dimostrativi</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/0trf-UzJFMo"
                  title="Chin Tucks Video 1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <a
                href="https://youtube.com/shorts/0trf-UzJFMo?is=HRB-zSzTAJ3NZdbJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:underline font-semibold pt-1.5"
              >
                <span>Apri video 1 su YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/_ETedzDIDUw"
                  title="Chin Tucks Video 2"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <a
                href="https://youtube.com/shorts/_ETedzDIDUw?is=XAnclVb3keYshgDB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:underline font-semibold pt-1.5"
              >
                <span>Apri video 2 su YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Foto Guida (Clicca per Schermo Intero)</h3>
              <p className="text-[10px] text-gray-400">Anteprima immediata degli esercizi</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Image 1 */}
            <div
              onClick={() => setFullscreenImage("https://www.audleyvillages.co.uk/sites/audleyvillages/files/hub_story_image/physio-chin-tucks.jpg")}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-cyan-500/50 hover:shadow-neon"
            >
              <img
                src="https://www.audleyvillages.co.uk/sites/audleyvillages/files/hub_story_image/physio-chin-tucks.jpg"
                alt="Physio Chin Tucks Guida 1"
                referrerPolicy="no-referrer"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-3">
                <span className="text-xs font-bold text-white">Posizione Chin Tuck</span>
                <span className="p-1.5 rounded-lg bg-black/60 text-cyan-300 border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Image 2 */}
            <div
              onClick={() => setFullscreenImage("https://cdn.sanity.io/images/du1q6xmq/production/f2e2950557e9253b063e44b530d4674bf301f867-404x404.jpg")}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-cyan-500/50 hover:shadow-neon"
            >
              <img
                src="https://cdn.sanity.io/images/du1q6xmq/production/f2e2950557e9253b063e44b530d4674bf301f867-404x404.jpg"
                alt="Chin Tucks Guida 2"
                referrerPolicy="no-referrer"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-3">
                <span className="text-xs font-bold text-white">Tecnica Esecuzione</span>
                <span className="p-1.5 rounded-lg bg-black/60 text-cyan-300 border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
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
  }

  if (isNeckMediaOpen) {
    return (
      <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
        {/* Back button */}
        <button
          type="button"
          onClick={() => setIsNeckMediaOpen(false)}
          className="flex items-center space-x-2 py-2 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a Collo / Mento</span>
        </button>

        {/* Header */}
        <div className="p-5 rounded-3xl glass-card relative overflow-hidden border border-cyan-500/30 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Video & Foto Neck Curls</h2>
              <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Guida Flessioni del Collo</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Video Dimostrativi</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/0trf-UzJFMo"
                  title="Neck Curls Video 1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <a
                href="https://youtube.com/shorts/0trf-UzJFMo?is=HRB-zSzTAJ3NZdbJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:underline font-semibold pt-1.5"
              >
                <span>Apri video 1 su YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/5EmazujWhYk"
                  title="Neck Curls Video 2"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <a
                href="https://youtube.com/shorts/5EmazujWhYk?is=wzDN79Jdo2st_Fjq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:underline font-semibold pt-1.5"
              >
                <span>Apri video 2 su YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Foto Guida (Clicca per Schermo Intero)</h3>
              <p className="text-[10px] text-gray-400">Anteprima immediata dell'esercizio</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-1">
            {/* Image 1 */}
            <div
              onClick={() => setFullscreenImage("https://i.ibb.co/XrqL2C2F/1785274124111.png")}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-cyan-500/50 hover:shadow-neon"
            >
              <img
                src="https://i.ibb.co/XrqL2C2F/1785274124111.png"
                alt="Neck Curls Guida"
                referrerPolicy="no-referrer"
                className="w-full h-64 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-3 pointer-events-none">
                <span className="text-xs font-bold text-white">Tecnica Neck Curls</span>
                <span className="p-1.5 rounded-lg bg-black/60 text-cyan-300 border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
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
  }

  if (isFrontNeckMediaOpen) {
    return (
      <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
        {/* Back button */}
        <button
          type="button"
          onClick={() => setIsFrontNeckMediaOpen(false)}
          className="flex items-center space-x-2 py-2 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a Collo / Mento</span>
        </button>

        {/* Header */}
        <div className="p-5 rounded-3xl glass-card relative overflow-hidden border border-cyan-500/30 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Video & Foto Front Neck</h2>
              <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Guida Front Neck (tutti i lati)</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Video Dimostrativo</h3>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/pOpHI6Rey50"
              title="Front Neck Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a
            href="https://youtube.com/shorts/pOpHI6Rey50?is=SS1kG-4t6IVWX2q_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:underline font-semibold pt-1"
          >
            <span>Apri video su YouTube Shorts</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Photo Gallery Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Foto Guida (Clicca per Schermo Intero)</h3>
              <p className="text-[10px] text-gray-400">Anteprima immediata dell'esercizio</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-1">
            {/* Image 1 */}
            <div
              onClick={() => setFullscreenImage("https://i.ibb.co/rGx9Wzj1/1785319886428.png")}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-cyan-500/50 hover:shadow-neon"
            >
              <img
                src="https://i.ibb.co/rGx9Wzj1/1785319886428.png"
                alt="Front Neck Guida"
                referrerPolicy="no-referrer"
                className="w-full h-64 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-3 pointer-events-none">
                <span className="text-xs font-bold text-white">Tecnica Front Neck</span>
                <span className="p-1.5 rounded-lg bg-black/60 text-cyan-300 border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
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
  }

  if (isEyeSqueezeMediaOpen) {
    return (
      <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
        {/* Back button */}
        <button
          type="button"
          onClick={() => setIsEyeSqueezeMediaOpen(false)}
          className="flex items-center space-x-2 py-2 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-purple-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a Occhi</span>
        </button>

        {/* Header */}
        <div className="p-5 rounded-3xl glass-card relative overflow-hidden border border-purple-500/30 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/30">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Video & Foto Squeeze Occhi</h2>
              <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Guida Allenamento Orbicolari</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-300">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Video Dimostrativo</h3>
          </div>
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
            className="inline-flex items-center space-x-1.5 text-xs text-purple-400 hover:underline font-semibold pt-1"
          >
            <span>Apri video su YouTube Shorts</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Fullscreen Lightbox Modal */}
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
  }

  if (isOneEyeHunterMediaOpen) {
    return (
      <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
        {/* Back button */}
        <button
          type="button"
          onClick={() => setIsOneEyeHunterMediaOpen(false)}
          className="flex items-center space-x-2 py-2 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-purple-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a Occhi</span>
        </button>

        {/* Header */}
        <div className="p-5 rounded-3xl glass-card relative overflow-hidden border border-purple-500/30 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/30">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Video One Eye Hunter</h2>
              <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Guida Allenamento Sguardo Hunter</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-300">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Video Dimostrativo</h3>
          </div>
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
            className="inline-flex items-center space-x-1.5 text-xs text-purple-400 hover:underline font-semibold pt-1"
          >
            <span>Apri video su YouTube Shorts</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  if (isWEyeHunterMediaOpen) {
    return (
      <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
        {/* Back button */}
        <button
          type="button"
          onClick={() => setIsWEyeHunterMediaOpen(false)}
          className="flex items-center space-x-2 py-2 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-purple-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a Occhi</span>
        </button>

        {/* Header */}
        <div className="p-5 rounded-3xl glass-card relative overflow-hidden border border-purple-500/30 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-300 border border-purple-500/30">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Video W Eye Hunter</h2>
              <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Guida Allenamento Sguardo Hunter</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-300">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Video Dimostrativo</h3>
          </div>
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
            className="inline-flex items-center space-x-1.5 text-xs text-purple-400 hover:underline font-semibold pt-1"
          >
            <span>Apri video su YouTube Shorts</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  if (isSpoonMediaOpen) {
    return (
      <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
        {/* Back button */}
        <button
          type="button"
          onClick={() => setIsSpoonMediaOpen(false)}
          className="flex items-center space-x-2 py-2 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-indigo-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a Occhi</span>
        </button>

        {/* Header */}
        <div className="p-5 rounded-3xl glass-card relative overflow-hidden border border-indigo-500/30 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Video Spoon Method</h2>
              <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">Guida Cucchiai Freddi per Borse e Occhiaie</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-300">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Video Dimostrativo</h3>
          </div>
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
            className="inline-flex items-center space-x-1.5 text-xs text-indigo-400 hover:underline font-semibold pt-1"
          >
            <span>Apri video su YouTube Shorts</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  if (isIceMediaOpen) {
    return (
      <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
        {/* Back button */}
        <button
          type="button"
          onClick={() => setIsIceMediaOpen(false)}
          className="flex items-center space-x-2 py-2 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna a Ice Routine</span>
        </button>

        {/* Header */}
        <div className="p-5 rounded-3xl glass-card relative overflow-hidden border border-cyan-500/30 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Video Ice Routine</h2>
              <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Guida Crioterapia & Ice Dunking</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="p-5 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Video Dimostrativi</h3>
          </div>
          <div className="space-y-4">
            <div>
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
                className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:underline font-semibold pt-1.5"
              >
                <span>Apri video 1 su YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
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
                className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:underline font-semibold pt-1.5"
              >
                <span>Apri video 2 su YouTube Shorts</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
      {/* Sub-navigation tabs */}
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 p-1.5 rounded-2xl glass-card border border-white/10">
        {[
          { id: 'mewing', label: '👅 Mewing', desc: 'Mascella' },
          { id: 'collo_mento', label: '🦒 Collo', desc: 'Esercizi' },
          { id: 'body_posture', label: '🧍 Postura', desc: 'Corpo' },
          { id: 'eyes', label: '👀 Occhi', desc: 'Orbicolari' },
          { id: 'ice', label: '🧊 Ghiaccio', desc: 'Ice Routine' },
          { id: 'lymphatic', label: '🌅 Linfatico', desc: '5 min Viso' },
          { id: 'sleep', label: '🛌 Sonno', desc: 'Postura Notte' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveSection(tab.id as any)}
            className={`py-2 px-1 rounded-xl text-center transition-all ${
              activeSection === tab.id
                ? 'bg-neon text-black font-extrabold shadow-neon'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="text-[11px] sm:text-xs block font-bold leading-none">{tab.label}</span>
            <span className={`text-[8px] sm:text-[9px] block mt-1 uppercase tracking-wider font-semibold truncate ${activeSection === tab.id ? 'text-black' : 'text-gray-500'}`}>
              {tab.desc}
            </span>
          </button>
        ))}
      </div>

      {/* SECTION 1: MEWING & MASTICAZIONE */}
      {activeSection === 'mewing' && (
        <div className="space-y-3">
          <div className="p-4 rounded-3xl glass-card space-y-3">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              1. Posizione Lingua (Mewing) & Masticazione
            </h3>

            {/* Do's and Don'ts */}
            <div className="grid grid-cols-1 gap-2 text-xs">
              <div className="p-3 rounded-2xl bg-[#00FFD1]/10 border border-[#00FFD1]/30 space-y-1">
                <span className="font-bold text-cyan-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300" /> COSA FARE (Linea Guida Corretta):
                </span>
                <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-1 pl-1">
                  <li>Incolla l’intero corpo della lingua al palato (compresa la parte posteriore).</li>
                  <li>Mantiere labbra sigillate senza sforzo con respirazione esclusivamente nasale.</li>
                  <li>Denti delicatamente a contatto sfiorato o a un millimetro di distanza.</li>
                </ul>
              </div>

              <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 space-y-1">
                <span className="font-bold text-rose-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <ShieldAlert className="w-4 h-4 text-rose-400" /> ERRORI DA EVITARE:
                </span>
                <ul className="list-disc list-inside text-[11px] text-gray-300 space-y-1 pl-1">
                  <li>NON spingere la lingua con forza sui denti anteriori.</li>
                  <li>NON serrare i denti o digrignare la mascella (bruxismo).</li>
                  <li>Evita assolutamente la respirazione orale.</li>
                </ul>
              </div>
            </div>

            {/* Chewing Gum Rules */}
            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1 text-xs">
              <span className="font-bold text-amber-400 block uppercase tracking-wider text-[10px]">🍬 Gomma da Masticare (Masticazione):</span>
              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Mastica gomma dura per <strong>15-20 minuti al giorno</strong>. Alterna regolarmente il lato per sviluppare i masseteri in modo simmetrico. Interrompi in caso di dolore alla TMJ.
              </p>
            </div>

            {/* Photo Guida Mewing */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Foto Guida Posizione Lingua (Mewing)</h4>
                  <p className="text-[10px] text-gray-400">Clicca per visualizzare a schermo intero</p>
                </div>
              </div>

              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/mCxmy8DK/KM7-OC2-BLFVAD5-C3-JHBZT7-WTBCM.jpg")}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-cyan-500/50 hover:shadow-neon"
              >
                <img
                  src="https://i.ibb.co/mCxmy8DK/KM7-OC2-BLFVAD5-C3-JHBZT7-WTBCM.jpg"
                  alt="Guida Mewing"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-3 pointer-events-none">
                  <span className="text-xs font-bold text-white">Posizione Corretta Lingua (Mewing)</span>
                  <span className="p-1.5 rounded-lg bg-black/60 text-cyan-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: COLLO / MENTO */}
      {activeSection === 'collo_mento' && (
        <div className="space-y-3">
          <div className="p-4 rounded-3xl glass-card space-y-3">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-300" />
              2. Esercizi Collo & Mento
            </h3>

            {/* Interactive Chin Tucks Exercise Card */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">Chin Tucks (Doppio Mento Controllato)</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Target: 2 Serie</p>
                </div>
                <button
                  type="button"
                  onClick={() => setChinCompletedSets(s => (s + 1) % 3)}
                  className={`text-xs font-bold px-3 py-1 rounded-full border transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer ${
                    chinCompletedSets === 2
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-neon'
                      : chinCompletedSets === 1
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-white/10 text-cyan-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  {chinCompletedSets === 2 ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Serie 2/2 Completate</span>
                    </>
                  ) : chinCompletedSets === 1 ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                      <span>Serie 1/2 Completata</span>
                    </>
                  ) : (
                    <span>Serie 0/2 (Clicca per completare)</span>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Retrai il mento all’indietro come se dovessi fare un doppio mento, mantenendo lo sguardo orizzontale. Mantieni per 2s e rilascia.
              </p>

              <button
                type="button"
                onClick={() => setIsChinMediaOpen(true)}
                className="w-full p-3 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-xs flex items-center justify-between transition-all active:scale-98 cursor-pointer group"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="font-bold">Video e Foto Chin Tucks</span>
                </div>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-xl border border-cyan-500/30 font-bold uppercase tracking-wider">
                  Apri Menu
                </span>
              </button>
            </div>

            {/* Interactive Neck Curls Exercise Card */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">Neck Curls (Flessioni del Collo)</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Target: 2 Serie</p>
                </div>
                <button
                  type="button"
                  onClick={() => setNeckCompletedSets(s => (s + 1) % 3)}
                  className={`text-xs font-bold px-3 py-1 rounded-full border transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer ${
                    neckCompletedSets === 2
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-neon'
                      : neckCompletedSets === 1
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-white/10 text-cyan-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  {neckCompletedSets === 2 ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Serie 2/2 Completate</span>
                    </>
                  ) : neckCompletedSets === 1 ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                      <span>Serie 1/2 Completata</span>
                    </>
                  ) : (
                    <span>Serie 0/2 (Clicca per completare)</span>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Sdraiati sul letto a pancia in su con la testa fuori dal bordo. Fletti delicatamente il mento verso il petto contrando i muscoli del collo.
              </p>

              <button
                type="button"
                onClick={() => setIsNeckMediaOpen(true)}
                className="w-full p-3 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-xs flex items-center justify-between transition-all active:scale-98 cursor-pointer group"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="font-bold">Video e Foto Neck Curls</span>
                </div>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-xl border border-cyan-500/30 font-bold uppercase tracking-wider">
                  Apri Menu
                </span>
              </button>
            </div>

            {/* Interactive Front Neck Exercise Card */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">Front Neck (tutti i lati)</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Target: 2 Serie</p>
                </div>
                <button
                  type="button"
                  onClick={() => setFrontNeckCompletedSets(s => (s + 1) % 3)}
                  className={`text-xs font-bold px-3 py-1 rounded-full border transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer ${
                    frontNeckCompletedSets === 2
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-neon'
                      : frontNeckCompletedSets === 1
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-white/10 text-cyan-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  {frontNeckCompletedSets === 2 ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Serie 2/2 Completate</span>
                    </>
                  ) : frontNeckCompletedSets === 1 ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                      <span>Serie 1/2 Completata</span>
                    </>
                  ) : (
                    <span>Serie 0/2 (Clicca per completare)</span>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Lavora sui muscoli anteriori e laterali del collo eseguendo flessioni e inclinazioni controllate per tutti i lati.
              </p>

              <button
                type="button"
                onClick={() => setIsFrontNeckMediaOpen(true)}
                className="w-full p-3 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-xs flex items-center justify-between transition-all active:scale-98 cursor-pointer group"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="font-bold">Video e Foto Front Neck</span>
                </div>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-xl border border-cyan-500/30 font-bold uppercase tracking-wider">
                  Apri Menu
                </span>
              </button>
            </div>

            {/* Posture checklist alignment */}
            <div className="p-3 rounded-2xl bg-black/40 border border-white/5 text-xs space-y-1">
              <span className="font-bold text-gray-200 block text-xs">📐 Allineamento Spalle & Petto:</span>
              <p className="text-[11px] text-gray-400 font-medium">
                Testa allineata sopra le spalle, scapole leggermente addotte all’indietro, petto aperto e bacino neutro.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: POSTURA CORPO */}
      {activeSection === 'body_posture' && (
        <div className="space-y-3">
          <div className="p-4 rounded-3xl glass-card space-y-3">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400" />
              3. Postura del Corpo & Allineamento Colonna
            </h3>

            {/* Scapular Retraction Card */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">🦴 Retrazione Scapolare (Spalle Aperte)</h4>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">
                  3 Serie x 10-12 Reps
                </span>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Adduci le scapole l'una verso l'altra spingendo le spalle all'indietro e verso il basso. Mantieni la contrazione per 5 secondi prima di rilasciare. Elimina l'atteggiamento ingobbito (rounded shoulders).
              </p>
            </div>

            {/* Wall Angels Card */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">🧗 Wall Angels (Reset alla Parete)</h4>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-lg border border-cyan-500/20">
                  2 Serie x 10 Reps
                </span>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Posizionati contro un muro adesi con nuca, zona dorsale, glutei e gomiti. Fai scivolare lentamente le braccia in alto formando una "W" e poi una "V" mantenendo il contatto costante con la parete.
              </p>

              {/* Embedded Video for Wall Angels */}
              <div className="space-y-1.5 pt-1">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video relative shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/y2ZUHmx-IFY"
                    title="Wall Angels Video Tutorial"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <a
                  href="https://youtu.be/y2ZUHmx-IFY?si=ZB2jNQ3lslQQf-sx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:underline font-semibold"
                >
                  <span>Apri Video Tutorial Wall Angels su YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Forward Head Posture Correction */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-white">📐 Correzione Testa in Avanti (Forward Head)</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Controlla che il meato acustico (orecchio) sia perfettamente allineato al centro della spalla. Spostare la testa in avanti di soli 2.5 cm aumenta la pressione sulla colonna cervicale di ben 4.5 kg!
              </p>
            </div>

            {/* Anterior Pelvic Tilt / Core */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-white">⚖️ Allineamento Pelvico & Core (Tilt Neutro)</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                In caso di bacino ruotato in avanti (iperlordosi/anterior pelvic tilt), attiva leggermente i glutei ed il trasverso dell'addome per riportare la colonna in curva fisiologica neutra.
              </p>
            </div>

            {/* Digital Ergonomics */}
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
              <span className="text-xs font-bold text-emerald-300 block">📱 Ergonomia Digitale & Tech Neck</span>
              <p className="text-[11px] text-gray-300 font-medium">
                Solleva lo smartphone all'altezza degli occhi invece di piegare il collo verso il basso. Regola l'altezza del monitor del PC in modo che la parte superiore dello schermo sia al livello dello sguardo.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: OCCHI & ORBICOLARI */}
      {activeSection === 'eyes' && (
        <div className="space-y-3">
          <div className="p-4 rounded-3xl glass-card space-y-3">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
              <Eye className="w-4 h-4 text-purple-400" />
              4. Routine Occhi, Orbicolari & Sguardo
            </h3>

            {/* 20-20-20 Rule */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1">
              <h4 className="text-xs font-bold text-white">Regola 20-20-20 per Schermi</h4>
              <p className="text-[11px] text-gray-300 font-medium">Guarda a 6m per 20 secondi</p>
            </div>

            {/* Orbicularis Workout List */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-3 text-xs">
              <h4 className="font-bold text-purple-300 uppercase tracking-wider text-[11px] block">👁️ Allenamento Orbicolari (5 min):</h4>
              
              {/* Exercise 1 */}
              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs">1. Squeeze Occhi (Stringi palpebre)</span>
                  <span className="font-extrabold text-purple-300 text-xs bg-purple-500/10 px-2 py-0.5 rounded-lg border border-purple-500/20">10 Reps</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEyeSqueezeMediaOpen(true)}
                  className="w-full p-3 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 font-semibold text-xs flex items-center justify-between transition-all active:scale-98 cursor-pointer group"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 group-hover:scale-110 transition-transform">
                      <Video className="w-4 h-4" />
                    </div>
                    <span className="font-bold">Video e Foto Squeeze Occhi</span>
                  </div>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-xl border border-purple-500/30 font-bold uppercase tracking-wider">
                    Apri Menu
                  </span>
                </button>
              </div>

              {/* Exercise 2 */}
              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs">2. One Eye Hunter</span>
                  <span className="font-extrabold text-purple-300 text-xs bg-purple-500/10 px-2 py-0.5 rounded-lg border border-purple-500/20">10 Reps</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOneEyeHunterMediaOpen(true)}
                  className="w-full p-3 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 font-semibold text-xs flex items-center justify-between transition-all active:scale-98 cursor-pointer group"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 group-hover:scale-110 transition-transform">
                      <Video className="w-4 h-4" />
                    </div>
                    <span className="font-bold">Video One Eye Hunter</span>
                  </div>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-xl border border-purple-500/30 font-bold uppercase tracking-wider">
                    Apri Menu
                  </span>
                </button>
              </div>

              {/* Exercise 3 */}
              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs">3. W Eye Hunter</span>
                  <span className="font-extrabold text-purple-300 text-xs bg-purple-500/10 px-2 py-0.5 rounded-lg border border-purple-500/20">20 Reps</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsWEyeHunterMediaOpen(true)}
                  className="w-full p-3 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 font-semibold text-xs flex items-center justify-between transition-all active:scale-98 cursor-pointer group"
                >
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 group-hover:scale-110 transition-transform">
                      <Video className="w-4 h-4" />
                    </div>
                    <span className="font-bold">Video W Eye Hunter</span>
                  </div>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-xl border border-purple-500/30 font-bold uppercase tracking-wider">
                    Apri Menu
                  </span>
                </button>
              </div>

              {/* Exercise 4 */}
              <div className="p-3 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="font-bold text-white text-xs">4. Rilassamento Sguardo Orizzonte</span>
                <span className="font-extrabold text-purple-300 text-xs bg-purple-500/10 px-2 py-0.5 rounded-lg border border-purple-500/20">2 Minuti</span>
              </div>
            </div>

            {/* 🥄 Spoon Method (Cold Spoons) */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">🥄 Spoon Method (Cucchiai Freddi)</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Per eliminare borse ed occhiaie</p>
                </div>
                <div className="text-sm font-mono font-extrabold text-indigo-300 bg-black/60 px-3 py-1 rounded-xl border border-white/10">
                  {Math.floor(spoonTimer / 60)}:{spoonTimer % 60 < 10 ? '0' : ''}{spoonTimer % 60}
                </div>
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Raffredda due cucchiai in freezer per 5-10 minuti. Applica sotto le orbite premendo delicatamente per stimolare la vasocostrizione.
              </p>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsSpoonRunning(!isSpoonRunning)}
                  className="flex-1 py-2 px-3 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold text-xs border border-indigo-500/40 flex items-center justify-center space-x-1.5 uppercase tracking-wider"
                >
                  {isSpoonRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isSpoonRunning ? 'Pausa' : 'Avvia Timer Cucchiai (2 min)'}</span>
                </button>
                <button
                  onClick={() => {
                    setIsSpoonRunning(false);
                    setSpoonTimer(120);
                  }}
                  className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white border border-white/10"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsSpoonMediaOpen(true)}
                className="w-full p-3 rounded-2xl bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-semibold text-xs flex items-center justify-between transition-all active:scale-98 cursor-pointer group mt-2"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300 group-hover:scale-110 transition-transform">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="font-bold">Video Spoon Method</span>
                </div>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-xl border border-indigo-500/30 font-bold uppercase tracking-wider">
                  Apri Menu
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: ICE ROUTINE & CRIOTERAPIA */}
      {activeSection === 'ice' && (
        <div className="space-y-3">
          <div className="p-4 rounded-3xl glass-card space-y-3">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-cyan-400" />
              5. Ice Routine & Crioterapia Facciale
            </h3>

            {/* Ice Dunking Card */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">🧊 Ice Dunking (Immersione in Acqua e Ghiaccio)</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Tonificazione & Drenaggio Viso</p>
                </div>
                <div className="text-sm font-mono font-extrabold text-cyan-300 bg-black/60 px-3 py-1 rounded-xl border border-white/10">
                  {Math.floor(iceTimer / 60)}:{iceTimer % 60 < 10 ? '0' : ''}{iceTimer % 60}
                </div>
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Riempi una ciotola con acqua fredda e cubetti di ghiaccio. Immergi il viso per brevi intervalli (10-15 secondi per volta) per un totale di 1-2 minuti. Aiuta a restringere i pori, ridurre i gonfiori e risvegliare la microcircolazione.
              </p>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setIsIceRunning(!isIceRunning)}
                  className="flex-1 py-2 px-3 rounded-xl bg-cyan-500/20 text-cyan-300 font-bold text-xs border border-cyan-500/40 flex items-center justify-center space-x-1.5 uppercase tracking-wider cursor-pointer hover:bg-cyan-500/30 transition-colors"
                >
                  {isIceRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isIceRunning ? 'Pausa' : 'Avvia Timer Ice Dunking (2 min)'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsIceRunning(false);
                    setIceTimer(120);
                  }}
                  className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Video Button */}
              <button
                type="button"
                onClick={() => setIsIceMediaOpen(true)}
                className="w-full p-3 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-xs flex items-center justify-between transition-all active:scale-98 cursor-pointer group mt-2"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="font-bold">Video Dimostrativi Ice Routine</span>
                </div>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-xl border border-cyan-500/30 font-bold uppercase tracking-wider">
                  Apri Video
                </span>
              </button>
            </div>

            {/* Ice Rolling / Cubetto Card */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-white">❄️ Massaggio con Cubetto di Ghiaccio (Ice Roller)</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Passa delicatamente un cubetto avvolto in un panno sottile lungo la mandibola, zigomi e fronte dal centro verso l'esterno per guidare il drenaggio linfatico.
              </p>
              <button
                type="button"
                onClick={() => setIsIceMediaOpen(true)}
                className="w-full p-3 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-xs flex items-center justify-between transition-all active:scale-98 cursor-pointer group mt-1"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="font-bold">Guarda Video Crioterapia</span>
                </div>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-xl border border-cyan-500/30 font-bold uppercase tracking-wider">
                  Apri Video
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6: MASSAGGIO LINFATICO DEL VISO AL MATTINO */}
      {activeSection === 'lymphatic' && (
        <div className="space-y-3">
          <div className="p-4 rounded-3xl glass-card space-y-3">
            {/* Title Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-400" />
                6. 🌅 Massaggio Linfatico del Viso al Mattino — 5 Minuti
              </h3>
            </div>

            {/* Step-by-Step Massage Routine */}
            <div className="space-y-2.5">
              <span className="font-bold text-amber-300 uppercase tracking-wider text-[11px] block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Sequenza dei 5 Passaggi del Massaggio:
              </span>

              {/* 1. Collo */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-[11px] font-black">
                      1
                    </span>
                    Collo
                  </h4>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                    5–10 volte per lato
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed font-medium pl-7">
                  Con le dita piatte, fai movimenti molto delicati dalla zona sotto le orecchie verso le clavicole. Ripeti 5–10 volte per lato.
                </p>
              </div>

              {/* 2. Clavicole */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-[11px] font-black">
                      2
                    </span>
                    Clavicole
                  </h4>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                    5–10 volte
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed font-medium pl-7">
                  Appoggia delicatamente le dita sopra le clavicole e fai piccoli movimenti verso il basso. Ripeti 5–10 volte.
                </p>
              </div>

              {/* 3. Mandibola */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-[11px] font-black">
                      3
                    </span>
                    Mandibola
                  </h4>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                    5–10 volte
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed font-medium pl-7">
                  Parti dal centro del mento e fai scorrere delicatamente le dita lungo la mandibola verso le orecchie. Ripeti 5–10 volte.
                </p>
              </div>

              {/* 4. Guance */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-[11px] font-black">
                      4
                    </span>
                    Guance
                  </h4>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                    5–10 volte
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed font-medium pl-7">
                  Partendo dai lati del naso, fai scorrere le dita verso l'esterno, in direzione delle orecchie. Ripeti 5–10 volte.
                </p>
              </div>

              {/* 5. Fronte */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-[11px] font-black">
                      5
                    </span>
                    Fronte
                  </h4>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                    5–10 volte
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed font-medium pl-7">
                  Dal centro della fronte, porta delicatamente le dita verso le tempie. Poi scendi lungo i lati del viso fino al collo e termina verso le clavicole.
                </p>
              </div>
            </div>

            {/* ⚠️ Importante Warning Box */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-amber-400" /> ⚠️ Importante
              </span>
              <p className="text-[11px] text-gray-200 leading-relaxed font-medium">
                La pressione deve essere molto leggera e lenta: il drenaggio linfatico non richiede di massaggiare forte. Puoi farlo dopo aver lavato il viso, con un po' di crema o siero per far scorrere meglio le dita.
              </p>
            </div>

            {/* Image Guide Banner at the End */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-300">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Mappa Drenaggio Linfatico Viso</h4>
                  <p className="text-[10px] text-gray-400">Clicca sull'immagine per ingrandirla a schermo intero</p>
                </div>
              </div>

              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/kVHmVkPt/file-00000000f3d0821082fed711fb1298b6.png")}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-amber-500/50 hover:shadow-neon"
              >
                <img
                  src="https://i.ibb.co/kVHmVkPt/file-00000000f3d0821082fed711fb1298b6.png"
                  alt="Mappa Massaggio Linfatico Viso"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-3 pointer-events-none">
                  <span className="text-xs font-bold text-white">Guida Visiva Punti & Direzioni Linfatiche</span>
                  <span className="p-1.5 rounded-lg bg-black/60 text-amber-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 7: POSIZIONE PER DORMIRE */}
      {activeSection === 'sleep' && (
        <div className="space-y-3">
          <div className="p-4 rounded-3xl glass-card space-y-3">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
              <Moon className="w-4 h-4 text-indigo-400" />
              7. Posizione per Dormire & Postura Notturna
            </h3>

            {/* Back Sleeping Card */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">👑 Dormire Supino (A Pancia in Su)</h4>
                <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-lg border border-indigo-500/20">
                  Posizione d'Oro
                </span>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Dormire sulla schiena elimina la pressione asimmetrica sul viso. Previene la formazione di rughe da compressione, evita le asimmetrie ossee e muscolari della mascella e garantisce l'allineamento neutro di testa e colonna.
              </p>
            </div>

            {/* Pillow Choice Card */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-white">🛏️ Altezza del Cuscino & Supporto Cervicale</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Usa un cuscino ortopedico a memoria di forma o di altezza contenuta. Un cuscino troppo alto spinge il mento verso il petto creando pieghe sul collo e doppio mento; un cuscino troppo basso iper-estende il collo.
              </p>
            </div>

            {/* Silk Pillowcase Card */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white">✨ Federa in Seta o Satèn</h4>
                <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20">
                  Anti-Attrito
                </span>
              </div>
              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                La seta riduce drasticamente la frizione meccanica su cute e capelli rispetto al cotone comune. Previene irritazioni cutanee, pieghe di compressione sulla pelle e mantiene l'idratazione naturale dell'epidermide.
              </p>
            </div>

            {/* Lymphatic Drainage & Head Elevation */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <h4 className="text-xs font-bold text-white">🌊 Drenaggio Linfatico & Sollevamento della Testa</h4>
              <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                Mantieni la testa leggermente sollevata (2-3 cm) rispetto al cuore per facilitare il naturale deflusso dei liquidi venosi e linfatici durante le 7-8 ore di sonno, eliminando il gonfiore alle palpebre al mattino.
              </p>
            </div>

            {/* Avoid Stomach Sleeping Warning */}
            <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-1">
              <span className="text-xs font-bold text-rose-300 block">⚠️ Evita di Dormire Prono (Pancia in Giù)</span>
              <p className="text-[11px] text-gray-300 font-medium">
                Schiacciare il viso sul cuscino per ore perverte la struttura mandibolare, comprime i bulbi oculari alterando la circolazione della zona perioculare e crea torsioni dannose alle vertebre cervicali.
              </p>
            </div>

            {/* Photo Guida Posizione Sonno */}
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-300">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Foto Guida Posizione Sonno</h4>
                  <p className="text-[10px] text-gray-400">Clicca per visualizzare a schermo intero</p>
                </div>
              </div>

              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/jZVTnXCg/Picsart-26-07-29-15-25-36-617.png")}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-indigo-500/50 hover:shadow-neon"
              >
                <img
                  src="https://i.ibb.co/jZVTnXCg/Picsart-26-07-29-15-25-36-617.png"
                  alt="Guida Posizione Sonno"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-3 pointer-events-none">
                  <span className="text-xs font-bold text-white">Guida Visiva Postura Notturna</span>
                  <span className="p-1.5 rounded-lg bg-black/60 text-indigo-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
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

