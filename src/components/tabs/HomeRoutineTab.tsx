import React, { useState, useEffect } from 'react';
import { WaterLog } from '../../types';
import { storageHelper } from '../../utils/storage';
import { Droplets, Sun, Activity, Sparkles, Utensils, Moon, Play, Pause, RotateCcw, Check, ChevronRight, Plus, Trash2, Clock, Video, ArrowLeft, Dumbbell, Image as ImageIcon, Maximize2, X, ExternalLink, Zap } from 'lucide-react';
import { DynamicStretchingView } from './DynamicStretchingView';

export const HomeRoutineTab: React.FC = () => {
  // Water state
  const [water, setWater] = useState<WaterLog>(() => storageHelper.getWaterLog());
  const [waterInput, setWaterInput] = useState<string>('');
  const [waterUnit, setWaterUnit] = useState<'ml' | 'l'>('ml');

  // Sleep time state
  const [sleepTime, setSleepTime] = useState<string>('23:00');

  // Stretching accordion & lightbox state
  const [isStretchingOpen, setIsStretchingOpen] = useState<boolean>(false);
  const [isDynamicStretchingOpen, setIsDynamicStretchingOpen] = useState<boolean>(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenTitle, setFullscreenTitle] = useState<string | null>(null);

  // Skincare steps completion state
  const [skincareDone, setSkincareDone] = useState<{ [key: string]: boolean }>({
    step1: false,
    step_spoon: false,
    step2: false,
    step3: false
  });

  // Save water updates
  useEffect(() => {
    storageHelper.saveWaterLog(water);
  }, [water]);

  const addWater = (amountLiters: number) => {
    setWater(prev => {
      const updated = Math.min(Math.max(0, parseFloat((prev.currentLiters + amountLiters).toFixed(2))), 10.0);
      const historyEntry = { time: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }), amount: amountLiters };
      return {
        ...prev,
        currentLiters: updated,
        history: [historyEntry, ...(prev.history || [])].slice(0, 10)
      };
    });
  };

  const handleCustomWaterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(waterInput.replace(',', '.'));
    if (isNaN(val) || val <= 0) return;

    // Convert to liters
    const amountInLiters = waterUnit === 'ml' ? val / 1000 : val;
    addWater(amountInLiters);
    setWaterInput('');
  };

  const resetWater = () => {
    setWater({
      currentLiters: 0,
      targetLiters: 3.0,
      history: []
    });
  };

  const waterPercentage = Math.min(Math.round((water.currentLiters / water.targetLiters) * 100), 100);

  const toggleSkincare = (stepKey: string) => {
    setSkincareDone(prev => ({ ...prev, [stepKey]: !prev[stepKey] }));
  };

  const setNowSleepTime = () => {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    setSleepTime(`${h}:${m}`);
  };

  const getWakeTimes = () => {
    if (!sleepTime) return null;
    const parts = sleepTime.split(':');
    if (parts.length !== 2) return null;
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    if (isNaN(hours) || isNaN(minutes)) return null;

    const addMinutes = (addMins: number) => {
      const totalMins = (hours * 60 + minutes + addMins) % (24 * 60);
      const h = Math.floor(totalMins / 60);
      const m = totalMins % 60;
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    };

    return {
      time7h30: addMinutes(450), // 7 ore e 30 min
      time8h00: addMinutes(480), // 8 ore
    };
  };

  const wakeTimes = getWakeTimes();

  if (isDynamicStretchingOpen) {
    return <DynamicStretchingView onClose={() => setIsDynamicStretchingOpen(false)} />;
  }

  if (isStretchingOpen) {
    return (
      <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
        {/* Back button header */}
        <button
          type="button"
          onClick={() => setIsStretchingOpen(false)}
          className="flex items-center space-x-2 py-2 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna alla Routine</span>
        </button>

        {/* Main Header Card */}
        <div className="p-5 rounded-3xl glass-card relative overflow-hidden border border-emerald-500/30 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Stretching Statico</h2>
              <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">8 Esercizi Sequenziali con Foto & Guida</p>
            </div>
          </div>
        </div>

        {/* Exercises Section */}
        <div className="p-4 sm:p-5 rounded-3xl glass-card space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Dumbbell className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Scheda Esercizi Mattutina</h3>
            </div>
            <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              8 Passaggi
            </span>
          </div>

          <div className="space-y-4">
            {/* EXERCISE 1 */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">Esercizio 1 di 8</span>
                  <h4 className="text-sm font-extrabold text-white">Stretching del Deltoide Posteriore</h4>
                  <p className="text-[11px] text-gray-400 font-medium italic">Cross-Body Shoulder Stretch</p>
                </div>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20 shrink-0">
                  ⏱️ 20-30 sec / lato
                </span>
              </div>

              {/* 3 Trucchi Veloci */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
                <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                  <li><strong className="text-white">Spalla bassa:</strong> Non alzare la spalla verso l'orecchio mentre tiri.</li>
                  <li><strong className="text-white">Busto fermo:</strong> Non ruotare il tronco; mantieni il petto dritto in avanti.</li>
                  <li><strong className="text-white">Niente gomito:</strong> Spingi sul tricipite o sull'avambraccio, mai direttamente sul gomito.</li>
                </ul>
              </div>

              <div className="text-[11px] text-emerald-300 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 font-medium">
                <strong>Esecuzione:</strong> Tieni la posizione per 20-30 secondi per lato, senza molleggiare.
              </div>

              {/* Image */}
              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/Kj0bd0V3/stretching-deltoidi-braccio-avanti-collo-ag.png")}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-emerald-500/50"
              >
                <img
                  src="https://i.ibb.co/Kj0bd0V3/stretching-deltoidi-braccio-avanti-collo-ag.png"
                  alt="Stretching Deltoide Posteriore"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                  <span className="text-[11px] font-bold text-white">Ingrandisci Foto</span>
                  <span className="p-1 rounded-lg bg-black/60 text-emerald-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* EXERCISE 2 */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">Esercizio 2 di 8</span>
                  <h4 className="text-sm font-extrabold text-white">Stretching del Quadricipite in Piedi</h4>
                  <p className="text-[11px] text-gray-400 font-medium italic">Standing Quadriceps Stretch</p>
                </div>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20 shrink-0">
                  ⏱️ 20-30 sec / gamba
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
                <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                  <li><strong className="text-white">Ginocchia vicine:</strong> Tieni il ginocchio che pieghi ben allineato all'altro, non allargarlo all'esterno.</li>
                  <li><strong className="text-white">Bacino retroverso:</strong> Contrai il gluteo e "appiattisci" la zona lombare (spingi il bacino in avanti) per allungare davvero la coscia senza inarcare la schiena.</li>
                  <li><strong className="text-white">Busto dritto:</strong> Mantieni la schiena dritta e usa la mano libera contro un muro se perdi l'equilibrio.</li>
                </ul>
              </div>

              <div className="text-[11px] text-emerald-300 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 font-medium">
                <strong>Esecuzione:</strong> Tieni la posizione per 20-30 secondi per gamba, respirando lentamente.
              </div>

              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/ynBbyGTr/images-10.jpg")}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-emerald-500/50"
              >
                <img
                  src="https://i.ibb.co/ynBbyGTr/images-10.jpg"
                  alt="Stretching Quadricipite in Piedi"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                  <span className="text-[11px] font-bold text-white">Ingrandisci Foto</span>
                  <span className="p-1 rounded-lg bg-black/60 text-emerald-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* EXERCISE 3 */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">Esercizio 3 di 8</span>
                  <h4 className="text-sm font-extrabold text-white">Stretching Gran Dorsale & Tricipite con Inclinazione</h4>
                  <p className="text-[11px] text-gray-400 font-medium italic">Overhead Triceps & Lat Side Stretch</p>
                </div>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20 shrink-0">
                  ⏱️ 20-30 sec / lato
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
                <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                  <li><strong className="text-white">Non spingere la testa in avanti:</strong> Mantieni il collo allineato con la spina dorsale e lo sguardo in avanti, senza schiacciare il mento sul petto.</li>
                  <li><strong className="text-white">Fianchi stabili:</strong> Inclina solo il busto lateralmente; evita di sbilanciare eccessivamente il bacino verso l'esterno.</li>
                  <li><strong className="text-white">Tira delicatamente dal gomito:</strong> Usa la mano opposta per afferrare il gomito sopra la testa e guidare la flessione laterale senza forzare l'articolazione.</li>
                </ul>
              </div>

              <div className="text-[11px] text-emerald-300 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 font-medium space-y-1">
                <div><strong>Esecuzione:</strong> Tieni la posizione per 20-30 secondi per lato, respirando in modo profondo e regolare.</div>
                <div className="text-[10px] text-cyan-300 pt-1 border-t border-emerald-500/20">
                  📌 <strong>3) Muscoli del tronco (fianco e dorsali):</strong> Piegare il bacino verso destra, alzando un braccio e flettendo l'avambraccio dietro la nuca. Tenere il gomito con la mano opposta. Ripetere a sinistra.
                </div>
              </div>

              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/hxgrZBTm/IMG-20260729-155900.jpg")}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-emerald-500/50"
              >
                <img
                  src="https://i.ibb.co/hxgrZBTm/IMG-20260729-155900.jpg"
                  alt="Stretching Gran Dorsale e Tricipite"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                  <span className="text-[11px] font-bold text-white">Ingrandisci Foto</span>
                  <span className="p-1 rounded-lg bg-black/60 text-emerald-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* EXERCISE 4 */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">Esercizio 4 di 8</span>
                  <h4 className="text-sm font-extrabold text-white">Stretching Flessori del Polso & Avambraccio</h4>
                  <p className="text-[11px] text-gray-400 font-medium italic">Wrist Flexor Stretch</p>
                </div>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20 shrink-0">
                  ⏱️ 20-30 sec / braccio
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
                <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                  <li><strong className="text-white">Gomito ben disteso:</strong> Tieni il braccio completamente dritto davanti a te per allungare tutta la catena muscolare dell'avambraccio.</li>
                  <li><strong className="text-white">Prendi anche il pollice:</strong> Usa l'altra mano per tirare indietro delicatamente tutte le dita, <strong>compreso il pollice</strong>, per un allungamento completo.</li>
                  <li><strong className="text-white">Spalle rilassate:</strong> Non alzare la spalla verso l'orecchio; mantienila bassa e rilassata mentre tiri le dita verso di te.</li>
                </ul>
              </div>

              <div className="text-[11px] text-emerald-300 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 font-medium space-y-1">
                <div><strong>Esecuzione:</strong> Tieni la posizione per 20-30 secondi per braccio, senza scatti e senza forzare il polso.</div>
                <div className="text-[10px] text-cyan-300 pt-1 border-t border-emerald-500/20">
                  📌 <strong>6) Avambraccio, polso e mano:</strong> Con il braccio teso in avanti, tirare delicatamente le dita verso di sé, con il palmo rivolto in avanti.
                </div>
              </div>

              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/5XDyXxpq/IMG-20260729-155942.jpg")}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-emerald-500/50"
              >
                <img
                  src="https://i.ibb.co/5XDyXxpq/IMG-20260729-155942.jpg"
                  alt="Stretching Flessori Polso e Avambraccio"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                  <span className="text-[11px] font-bold text-white">Ingrandisci Foto</span>
                  <span className="p-1 rounded-lg bg-black/60 text-emerald-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* EXERCISE 5 */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">Esercizio 5 di 8</span>
                  <h4 className="text-sm font-extrabold text-white">Stretching Pettorali & Spalle in Flessione Busto</h4>
                  <p className="text-[11px] text-gray-400 font-medium italic">Standing Chest Opener / Forward Fold</p>
                </div>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20 shrink-0">
                  ⏱️ 20-30 sec
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
                <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                  <li><strong className="text-white">Mani ben intrecciate:</strong> Intreccia saldamente le dita dietro la schiena e lascia cadere le braccia verso l'alto/in avanti sfruttando la gravità.</li>
                  <li><strong className="text-white">Ginocchia sbloccate:</strong> Mantieni le ginocchia leggermente piegate per proteggere la zona lombare e la parte posteriore delle cosce.</li>
                  <li><strong className="text-white">Collo rilassato:</strong> Lascia che la testa e il collo pendano liberamente verso il basso, scaricando la tensione cervicale.</li>
                </ul>
              </div>

              <div className="text-[11px] text-emerald-300 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 font-medium space-y-1">
                <div><strong>Esecuzione:</strong> Tieni la posizione per 20-30 secondi, respirando lentamente e risalendo srotolando la colonna.</div>
                <div className="text-[10px] text-cyan-300 pt-1 border-t border-emerald-500/20">
                  📌 <strong>7 & 8) Spalle e pettorali:</strong> Con il braccio teso ruotare il tronco oppure appoggiare le mani sopra i glutei e spingere i gomiti all'indietro.
                </div>
              </div>

              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/7h0Zrz2/IMG-20260729-160038.png")}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-emerald-500/50"
              >
                <img
                  src="https://i.ibb.co/7h0Zrz2/IMG-20260729-160038.png"
                  alt="Stretching Pettorali e Spalle in Flessione Busto"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                  <span className="text-[11px] font-bold text-white">Ingrandisci Foto</span>
                  <span className="p-1 rounded-lg bg-black/60 text-emerald-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* EXERCISE 6 */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">Esercizio 6 di 8</span>
                  <h4 className="text-sm font-extrabold text-white">Posizione del Cammello</h4>
                  <p className="text-[11px] text-gray-400 font-medium italic">Ustrasana / Kneeling Camel Stretch</p>
                </div>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20 shrink-0">
                  ⏱️ 20-30 sec
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
                <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                  <li><strong className="text-white">Spingi il bacino in avanti:</strong> Cosce perpendicolari al pavimento, spingi le anche in avanti per allungare i quadricipiti anziché caricare la lombare.</li>
                  <li><strong className="text-white">Apri il petto:</strong> Estendi la colonna partendo dall'apertura del torace e dai glutei ben contratti per proteggere la schiena.</li>
                  <li><strong className="text-white">Attento al collo:</strong> Non far crollare la testa all'indietro se avverti tensione; mantieni la nuca sostenuta.</li>
                </ul>
              </div>

              <div className="text-[11px] text-emerald-300 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 font-medium space-y-1">
                <div><strong>Esecuzione:</strong> Tieni la posizione per 20-30 secondi, respirando con calma e senza scatti nell'uscire.</div>
                <div className="text-[10px] text-cyan-300 pt-1 border-t border-emerald-500/20">
                  📌 <strong>13) Muscoli delle gambe (quadricipiti):</strong> In ginocchio, piegare la schiena all'indietro con le cosce ad angolo retto e appoggiare le mani vicine ai piedi.
                </div>
              </div>

              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/s9VfpN8w/image.jpg")}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-emerald-500/50"
              >
                <img
                  src="https://i.ibb.co/s9VfpN8w/image.jpg"
                  onError={(e) => {
                    // Fallback URL if direct image format differs
                    (e.target as HTMLImageElement).src = "https://ibb.co/s9VfpN8w";
                  }}
                  alt="Posizione del Cammello"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                  <span className="text-[11px] font-bold text-white">Ingrandisci Foto</span>
                  <span className="p-1 rounded-lg bg-black/60 text-emerald-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* EXERCISE 7 */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">Esercizio 7 di 8</span>
                  <h4 className="text-sm font-extrabold text-white">Stretching Adduttori & Ischiocrurali Divaricate</h4>
                  <p className="text-[11px] text-gray-400 font-medium italic">Seated Wide-Legged Straddle Reach</p>
                </div>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20 shrink-0">
                  ⏱️ 20-30 sec / lato
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
                <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                  <li><strong className="text-white">Piega dal bacino:</strong> Ruota le anche in avanti per allungarti verso la gamba, mantenendo la colonna distesa anziché ingobbire la schiena.</li>
                  <li><strong className="text-white">Piedi a martello:</strong> Punte dei piedi e rotule rivolte verso il soffitto per evitare rotazioni interne.</li>
                  <li><strong className="text-white">Progressione graduale:</strong> Allungati fin dove arrivi comodamente; l'obiettivo è allungare cosce e fianco, non toccare per forza i piedi.</li>
                </ul>
              </div>

              <div className="text-[11px] text-emerald-300 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 font-medium space-y-1">
                <div><strong>Esecuzione:</strong> Tieni la posizione per 20-30 secondi per lato, respirando profondo a ogni espirazione.</div>
                <div className="text-[10px] text-cyan-300 pt-1 border-t border-emerald-500/20">
                  📌 <strong>9 & 10) Adduttori e schiena:</strong> Da seduti unisci le piante dei piedi portando le ginocchia in basso e poi piega il busto in avanti.
                </div>
              </div>

              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/7tqk2KR0/stretching-per-la-schiena.jpg")}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-emerald-500/50"
              >
                <img
                  src="https://i.ibb.co/7tqk2KR0/stretching-per-la-schiena.jpg"
                  alt="Stretching Adduttori e Ischiocrurali"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                  <span className="text-[11px] font-bold text-white">Ingrandisci Foto</span>
                  <span className="p-1 rounded-lg bg-black/60 text-emerald-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* EXERCISE 8 */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">Esercizio 8 di 8</span>
                  <h4 className="text-sm font-extrabold text-white">Stretching Addome / Posizione del Cobra</h4>
                  <p className="text-[11px] text-gray-400 font-medium italic">Cobra Stretch / Bhujangasana</p>
                </div>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20 shrink-0">
                  ⏱️ 20-30 sec
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
                <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                  <li><strong className="text-white">Spalle basse e aperte:</strong> Allontana le spalle dalle orecchie e spingi il petto in avanti, senza incassare il collo.</li>
                  <li><strong className="text-white">Proteggi la zona lombare:</strong> Mantieni il bacino a contatto con il pavimento e attiva i glutei; non forzare se senti pizzicare la bassa schiena.</li>
                  <li><strong className="text-white">Gomiti morbidi:</strong> Non iperestendere rigidamente le braccia se avverti tensione; puoi tenere i gomiti leggermente piegati.</li>
                </ul>
              </div>

              <div className="text-[11px] text-emerald-300 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20 font-medium">
                <strong>Esecuzione:</strong> Tieni la posizione per 20-30 secondi, respirando lentamente ed espandendo la pancia ad ogni inspirazione.
              </div>

              <div
                onClick={() => setFullscreenImage("https://i.ibb.co/DfFWWXDW/images-11.jpg")}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all hover:border-emerald-500/50"
              >
                <img
                  src="https://i.ibb.co/DfFWWXDW/images-11.jpg"
                  alt="Posizione del Cobra"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-2.5 pointer-events-none">
                  <span className="text-[11px] font-bold text-white">Ingrandisci Foto</span>
                  <span className="p-1 rounded-lg bg-black/60 text-emerald-300 border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {fullscreenImage && (
          <div
            onClick={() => {
              setFullscreenImage(null);
              setFullscreenTitle(null);
            }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-200 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => {
                setFullscreenImage(null);
                setFullscreenTitle(null);
              }}
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

  return (
    <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
      {/* Hero Welcome Banner */}
      <div className="p-4 rounded-3xl glass-card relative overflow-hidden shadow-2xl border border-white/10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FFD1]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center space-x-2 text-cyan-300 text-[10px] font-bold tracking-widest uppercase mb-1">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Vista Sequenziale Giornaliera</span>
        </div>
        <h2 className="text-lg font-extrabold text-white leading-snug">
          Trasforma le azioni in abitudini
        </h2>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed font-medium">
          Segui la sequenza consigliata della mattina e mantieni la disciplina durante la giornata.
        </p>
      </div>

      {/* SECTION 1: MATTINA */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
            <Sun className="w-4 h-4 text-amber-400" />
            1. Routine Mattutina
          </h3>
          <span className="text-[10px] font-extrabold text-cyan-300 bg-[#00FFD1]/10 px-2.5 py-0.5 rounded-full border border-[#00FFD1]/30 shadow-neon">
            Passo 1 di 3
          </span>
        </div>

        {/* 💧 WATER TRACKER CARD */}
        <div className="p-4 rounded-3xl glass-card space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-neon">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Tracciatore Acqua (Somma Automatico)</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                  Totale: {(water.currentLiters * 1000).toFixed(0)} ml ({water.currentLiters.toFixed(2)} L)
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-base font-extrabold text-cyan-300 block">
                {water.currentLiters.toFixed(2)} / {water.targetLiters.toFixed(1)} L
              </span>
              <button
                onClick={resetWater}
                className="text-[10px] text-gray-400 hover:text-rose-400 transition-colors font-medium underline flex items-center justify-end gap-0.5 ml-auto mt-0.5"
                title="Azzera conteggio"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Azzera</span>
              </button>
            </div>
          </div>

          {/* Progress Glass Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-wider font-bold">
              <span>Livello Idratazione</span>
              <span className="text-cyan-300 font-extrabold">{waterPercentage}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-black/60 p-0.5 border border-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-neon shadow-neon transition-all duration-300"
                style={{ width: `${waterPercentage}%` }}
              />
            </div>
          </div>

          {/* Custom Water Quantity Input Form */}
          <form onSubmit={handleCustomWaterSubmit} className="space-y-2 pt-1">
            <label className="text-[10px] font-bold text-gray-300 uppercase tracking-wider block">
              Inserisci quantita da sommare:
            </label>
            <div className="flex items-center space-x-1.5">
              <input
                type="number"
                step="any"
                min="1"
                placeholder={waterUnit === 'ml' ? "Es. 300 (ml)" : "Es. 0.5 (L)"}
                value={waterInput}
                onChange={e => setWaterInput(e.target.value)}
                className="flex-1 py-2 px-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-[#00FFD1] placeholder-gray-500"
              />

              {/* Unit Switcher: ML vs L */}
              <div className="flex p-0.5 rounded-xl bg-black/60 border border-white/10 shrink-0">
                <button
                  type="button"
                  onClick={() => setWaterUnit('ml')}
                  className={`px-2.5 py-1.5 rounded-lg text-[10px] font-extrabold transition-all uppercase tracking-wider ${
                    waterUnit === 'ml'
                      ? 'bg-neon text-black shadow-neon'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  ml
                </button>
                <button
                  type="button"
                  onClick={() => setWaterUnit('l')}
                  className={`px-2.5 py-1.5 rounded-lg text-[10px] font-extrabold transition-all uppercase tracking-wider ${
                    waterUnit === 'l'
                      ? 'bg-neon text-black shadow-neon'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  L
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!waterInput || parseFloat(waterInput) <= 0}
                className="py-2 px-3.5 rounded-xl bg-neon text-black font-extrabold text-xs flex items-center space-x-1 shadow-neon transition-all active:scale-95 disabled:opacity-40 shrink-0 uppercase tracking-wider"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Somma</span>
              </button>
            </div>
          </form>

          {/* Quick Preset Buttons */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <button
              onClick={() => addWater(0.1)}
              className="py-2.5 px-2 rounded-xl bg-white/5 hover:bg-[#00FFD1]/10 border border-white/10 hover:border-[#00FFD1]/40 text-cyan-300 font-bold text-xs flex items-center justify-center transition-all active:scale-95"
            >
              + 100ml
            </button>
            <button
              onClick={() => addWater(0.3)}
              className="py-2.5 px-2 rounded-xl bg-white/5 hover:bg-[#00FFD1]/10 border border-white/10 hover:border-[#00FFD1]/40 text-cyan-300 font-bold text-xs flex items-center justify-center transition-all active:scale-95"
            >
              + 300ml
            </button>
            <button
              onClick={() => addWater(0.5)}
              className="py-2.5 px-2 rounded-xl bg-[#00FFD1]/20 hover:bg-[#00FFD1]/30 border border-[#00FFD1]/50 text-black font-extrabold text-xs flex items-center justify-center transition-all active:scale-95 shadow-neon"
            >
              + 500ml
            </button>
          </div>
        </div>

        {/* 🧴 SKINCARE MATTUTINA (Step Sequenziali) */}
        <div className="p-4 rounded-3xl glass-card space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Skincare Mattutina Sequenziale</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">4 Step Fondamentali</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {[
              {
                key: 'step1',
                num: '1',
                title: 'Detergente Delicato',
                productLabel: 'Detergente',
                note: 'Rimuove il sebo notturno senza alterare la barriera cutanea',
                image: 'https://i.ibb.co/VYdfZy24/Screenshot-2026-09-12-16-02-46-987-com-amazon-m-Shop-android-shopping-edit.jpg'
              },
              {
                key: 'step_spoon',
                num: '2',
                title: 'Spoon Method (Cucchiai Freddi)',
                productLabel: 'Spoon Method',
                note: 'Decongestiona borse ed occhiaie per uno sguardo riposato ed energico'
              },
              {
                key: 'step2',
                num: '3',
                title: 'Crema Idratante Leggera',
                productLabel: 'Crema Idratante',
                note: 'Applica su pelle umida per trattenere l’idratazione',
                image: 'https://i.ibb.co/vW8YMcm/Screenshot-2026-09-12-16-03-16-323-com-amazon-m-Shop-android-shopping-edit.jpg'
              },
              {
                key: 'step3',
                num: '4',
                title: 'Protezione Solare SPF 30-50',
                productLabel: 'Crema Solare',
                note: 'Indispensabile per prevenire macchie e invecchiamento',
                image: 'https://i.ibb.co/jPzRZth0/Screenshot-2026-09-12-16-04-07-095-com-amazon-m-Shop-android-shopping-edit.jpg'
              }
            ].map(step => {
              const isDone = skincareDone[step.key];
              return (
                <div
                  key={step.key}
                  onClick={() => toggleSkincare(step.key)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isDone
                      ? 'bg-[#00FFD1]/15 border-[#00FFD1]/40 text-cyan-300 shadow-neon'
                      : 'bg-black/40 border-white/5 text-gray-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {step.image ? (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setFullscreenImage(step.image);
                          setFullscreenTitle(step.productLabel);
                        }}
                        className="w-8 h-8 rounded-xl overflow-hidden border border-white/20 bg-black/60 shrink-0 cursor-zoom-in hover:scale-105 transition-transform"
                        title="Tocca per ingrandire la foto"
                      >
                        <img
                          src={step.image}
                          alt={step.productLabel || step.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-8 h-8 rounded-xl font-extrabold text-xs flex items-center justify-center shrink-0 ${
                        isDone ? 'bg-neon text-black shadow-neon' : 'bg-white/10 text-gray-400'
                      }`}>
                        {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : step.num}
                      </div>
                    )}
                    <div>
                      <h5 className="text-xs font-bold text-white">{step.title}</h5>
                      <p className="text-[10px] text-gray-400 mt-0.5">{step.note}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500 shrink-0" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ☀️ LUCE SOLARE MATTUTINA CARD */}
        <div className="p-4 rounded-3xl glass-card space-y-3">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Luce Solare Mattutina</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">2-3 Minuti all'aperto</p>
            </div>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed font-medium bg-black/40 p-3 rounded-2xl border border-white/5">
            Sincronizza il ritmo circadiano, blocca la melatonina e stimola la produzione naturale di dopamina.
          </p>
        </div>

        {/* 🤸 STRETCHING CARD */}
        <div className="p-4 rounded-3xl glass-card space-y-3">
          <button
            type="button"
            onClick={() => setIsStretchingOpen(true)}
            className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Stretching Statico</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Apri menu esercizi e video</p>
              </div>
            </div>
            <div className="p-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-emerald-400 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* ⚡ STRETCHING DINAMICO CARD */}
        <div className="p-4 rounded-3xl glass-card space-y-3">
          <button
            type="button"
            onClick={() => setIsDynamicStretchingOpen(true)}
            className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Stretching Dinamico</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">5 Esercizi di mobilità e attivazione</p>
              </div>
            </div>
            <div className="p-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-amber-400 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>

      {/* SECTION 2: SONNO */}
      <div className="p-4 rounded-3xl glass-card space-y-3">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            <Moon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest">Recupero & Sonno</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Calcola orario sveglia ideale</p>
          </div>
        </div>

        {/* Calcolatore Orario Sveglia */}
        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ora addormentamento:</span>
            </span>
            <button
              type="button"
              onClick={setNowSleepTime}
              className="py-1 px-2.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95 flex items-center gap-1"
            >
              <Clock className="w-3 h-3" />
              <span>Usa ora attuale</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="time"
              value={sleepTime}
              onChange={e => setSleepTime(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-black/60 border border-white/10 text-cyan-300 font-mono text-sm font-bold focus:outline-none focus:border-indigo-400 text-center"
            />
          </div>

          {wakeTimes && (
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-center space-y-0.5">
                <span className="text-[9px] font-bold text-indigo-300 uppercase tracking-wider block">
                  Sveglia a 7h 30m
                </span>
                <span className="text-base font-extrabold font-mono text-cyan-300 block">
                  {wakeTimes.time7h30}
                </span>
                <span className="text-[9px] text-gray-400 block font-medium">5 cicli da 90 min</span>
              </div>

              <div className="p-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-center space-y-0.5">
                <span className="text-[9px] font-bold text-indigo-300 uppercase tracking-wider block">
                  Sveglia a 8h 00m
                </span>
                <span className="text-base font-extrabold font-mono text-indigo-300 block">
                  {wakeTimes.time8h00}
                </span>
                <span className="text-[9px] text-gray-400 block font-medium">Riposo completo</span>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px] uppercase tracking-wider font-bold">
          <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-center">
            🌙 No schermi 1h prima
          </div>
          <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-center">
            ❄️ Stanza fresca (18-20°C)
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal per le foto Skincare & Routine */}
      {fullscreenImage && (
        <div
          onClick={() => {
            setFullscreenImage(null);
            setFullscreenTitle(null);
          }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div className="relative max-w-sm w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-full flex items-center justify-between pb-2">
              <span className="text-sm text-cyan-300 font-extrabold tracking-wide">
                {fullscreenTitle || 'Foto Prodotto'}
              </span>
              <button
                type="button"
                onClick={() => {
                  setFullscreenImage(null);
                  setFullscreenTitle(null);
                }}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={fullscreenImage}
              alt={fullscreenTitle || 'Foto Prodotto'}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-white/15 shadow-2xl bg-black"
            />
            <p className="text-[11px] text-gray-400 mt-2 text-center">
              Tocca la X o fuori dal riquadro per chiudere
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

