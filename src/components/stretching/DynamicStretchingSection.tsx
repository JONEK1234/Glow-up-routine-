import React, { useState, useEffect } from 'react';
import { Zap, Play, Pause, RotateCcw, Video, ExternalLink, Activity, Clock, Check } from 'lucide-react';

export const DynamicStretchingSection: React.FC = () => {
  // Timer for Corsa Calciata (25 seconds)
  const [timerSeconds, setTimerSeconds] = useState<number>(25);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerCompleted, setTimerCompleted] = useState<boolean>(false);

  // Video embed player toggle
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            setTimerCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(25);
    setTimerCompleted(false);
  };

  return (
    <div className="space-y-4">
      {/* Category Section Header */}
      <div className="p-4 sm:p-5 rounded-3xl glass-card space-y-4 border border-amber-500/25 bg-gradient-to-br from-amber-500/5 via-black/40 to-black/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2.5 rounded-2xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Categoria 2
                </span>
                <h3 className="text-base font-extrabold text-white">Stretching Dinamico</h3>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">Mobilità attiva, riscaldamento articolare e attivazione neuromuscolare</p>
            </div>
          </div>
          <span className="text-[10px] font-extrabold text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-full border border-amber-500/30 shrink-0">
            5 Esercizi
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-[11px] text-gray-300 space-y-1">
          <strong className="text-amber-300 font-bold block">⚡ Perché lo Stretching Dinamico?</strong>
          <p>
            A differenza dello stretching statico che allunga i muscoli a riposo, lo stretching dinamico riscalda le articolazioni mediante movimenti controllati e fluidi, migliorando l'afflusso di sangue e la coordinazione.
          </p>
        </div>

        <div className="space-y-4 pt-1">
          {/* DYNAMIC EXERCISE 1: Circonduzioni delle braccia */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 hover:border-amber-500/30 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                  Dinamico 1 di 5
                </span>
                <h4 className="text-sm font-extrabold text-white">Circonduzioni delle Braccia</h4>
                <p className="text-[11px] text-gray-400 font-medium italic">Arm Circles (Mobilità Spalle & Cingolo Scapolare)</p>
              </div>
              <span className="text-[10px] font-bold text-amber-300 bg-amber-500/15 px-2 py-1 rounded-lg border border-amber-500/30 shrink-0">
                🔁 10 avanti + 10 indietro
              </span>
            </div>

            {/* 3 Trucchi Veloci */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
              <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                <li><strong className="text-white">Cerchi ampi e fluidi:</strong> Tieni le braccia tese senza piegare i gomiti, disegnando cerchi ampi senza scatti violenti.</li>
                <li><strong className="text-white">Busto e addome saldi:</strong> Non inarcare la schiena mentre ruoti le braccia; mantieni il core attivo e le gambe stabili.</li>
                <li><strong className="text-white">Inversione di direzione:</strong> Completa 10 giri ampi in avanti, fermati un istante e procedi con 10 giri all'indietro.</li>
              </ul>
            </div>

            <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 font-medium">
              <strong>Esecuzione:</strong> Piedi alla larghezza delle spalle. Esegui 10 rotazioni complete in avanti a velocità controllata, poi inverti la direzione per altre 10 rotazioni all'indietro.
            </div>

            {/* YouTube Video Player & Link */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/60 p-3 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-red-600/20 text-red-400 border border-red-500/30">
                    <Video className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Video Dimostrativo</span>
                    <span className="text-[10px] text-gray-400">Guarda la corretta esecuzione del movimento</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5">
                  <button
                    type="button"
                    onClick={() => setIsVideoOpen(!isVideoOpen)}
                    className="flex items-center space-x-1 text-[11px] font-bold py-1 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
                  >
                    <span>{isVideoOpen ? 'Nascondi Video' : 'Apri Video'}</span>
                  </button>

                  <a
                    href="https://youtu.be/w0LA6gKvlrI?si=T6VjrJKRstSwBH66"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-red-600/30 hover:bg-red-600/50 text-red-200 border border-red-500/40 transition-all cursor-pointer"
                    title="Apri su YouTube"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {isVideoOpen ? (
                <div className="relative pt-[56.25%] w-full rounded-xl overflow-hidden bg-black border border-white/10 mt-2">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/w0LA6gKvlrI?rel=0"
                    title="Circonduzioni braccia"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div
                  onClick={() => setIsVideoOpen(true)}
                  className="relative h-28 rounded-xl overflow-hidden bg-gradient-to-r from-red-950/40 via-black/80 to-black/90 border border-red-500/20 flex items-center justify-center cursor-pointer group"
                >
                  <div className="text-center space-y-1.5">
                    <div className="w-10 h-10 mx-auto rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-300 block group-hover:text-white transition-colors">
                      Tocca per visualizzare il video YouTube
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* DYNAMIC EXERCISE 2: Slanci delle gambe */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 hover:border-amber-500/30 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                  Dinamico 2 di 5
                </span>
                <h4 className="text-sm font-extrabold text-white">Slanci delle Gambe</h4>
                <p className="text-[11px] text-gray-400 font-medium italic">Leg Swings (Frontali & Laterali)</p>
              </div>
              <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/15 px-2 py-1 rounded-lg border border-cyan-500/30 shrink-0">
                🔁 10 per gamba
              </span>
            </div>

            {/* 3 Trucchi Veloci */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
              <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                <li><strong className="text-white">Ampiezza progressiva:</strong> Inizia con oscillazioni basse e morbide, aumentando gradualmente l'altezza dello slancio mano a mano che l'articolazione si scalda.</li>
                <li><strong className="text-white">Appoggio saldo:</strong> Appoggia una mano a una parete o sedia per mantenere il tronco dritto ed evitare di sbilanciare la schiena.</li>
                <li><strong className="text-white">Gamba d'appoggio sbloccata:</strong> Non bloccare il ginocchio della gamba di terra in iperestensione; tienilo leggermente morbido.</li>
              </ul>
            </div>

            <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 font-medium">
              <strong>Esecuzione:</strong> Esegui 10 slanci avanti e indietro a pendolo controllato per gamba, seguiti da 10 slanci laterali incrociando davanti al corpo.
            </div>
          </div>

          {/* DYNAMIC EXERCISE 3: Affondi camminati con rotazione del busto */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 hover:border-amber-500/30 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                  Dinamico 3 di 5
                </span>
                <h4 className="text-sm font-extrabold text-white">Affondi Camminati con Rotazione del Busto</h4>
                <p className="text-[11px] text-gray-400 font-medium italic">Walking Lunges with Torso Twist</p>
              </div>
              <span className="text-[10px] font-bold text-amber-300 bg-amber-500/15 px-2 py-1 rounded-lg border border-amber-500/30 shrink-0">
                🔁 10–12 passi (5–6 per lato)
              </span>
            </div>

            {/* 3 Trucchi Veloci */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
              <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                <li><strong className="text-white">Passo lungo e ginocchio a 90°:</strong> Fai un passo ampio; il ginocchio anteriore deve piegarsi a 90° senza superare eccessivamente la punta del piede.</li>
                <li><strong className="text-white">Ruota verso la gamba avanzata:</strong> Quando scendi nell'affondo, ruota il busto verso il lato della coscia che si trova davanti per liberare la colonna toracica.</li>
                <li><strong className="text-white">Spinta sul tallone:</strong> Risali facendo forza sul tallone del piede anteriore e passa subito al passo successivo in modo fluido.</li>
              </ul>
            </div>

            <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 font-medium">
              <strong>Esecuzione:</strong> Fai un passo in avanti in affondo, ruota lentamente il torace verso la gamba piegata, torna al centro e risali compiendo il passo successivo con l'altra gamba.
            </div>
          </div>

          {/* DYNAMIC EXERCISE 4: Corsa calciata (20-30 sec) */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 hover:border-amber-500/30 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                  Dinamico 4 di 5
                </span>
                <h4 className="text-sm font-extrabold text-white">Corsa Calciata</h4>
                <p className="text-[11px] text-gray-400 font-medium italic">Butt Kicks (Attivazione Femorali & Cardiovascolare)</p>
              </div>
              <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/15 px-2 py-1 rounded-lg border border-cyan-500/30 shrink-0">
                ⏱️ 20–30 secondi
              </span>
            </div>

            {/* 3 Trucchi Veloci */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
              <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                <li><strong className="text-white">Talloni ai glutei:</strong> Porta i talloni a sfiorare i glutei con un movimento rapido ed elastico delle gambe.</li>
                <li><strong className="text-white">Molleggio sull'avampiede:</strong> Atterra leggero sulla parte anteriore del piede senza sbattere pesantemente i talloni a terra.</li>
                <li><strong className="text-white">Busto leggermente proteso:</strong> Mantieni il busto leggermente inclinato in avanti e coordina le braccia a 90° con la falcata.</li>
              </ul>
            </div>

            <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 font-medium">
              <strong>Esecuzione:</strong> Corri sul posto a ritmo sostenuto ma sciolto, portando i talloni indietro verso i glutei per 20–30 secondi continui.
            </div>

            {/* Interactive Timer for Corsa Calciata */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-2.5">
                <div className={`p-2 rounded-xl transition-colors ${timerCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-cyan-500/15 text-cyan-400'}`}>
                  {timerCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : <Clock className="w-4 h-4" />}
                </div>
                <div>
                  <span className="text-[11px] font-extrabold text-white block">
                    {timerCompleted ? '✅ Esercizio Completato!' : 'Cronometro Rapido (25s)'}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    {timerCompleted ? 'Ottimo lavoro! Passa al prossimo esercizio.' : 'Avvia il conto alla rovescia per la corsa calciata'}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-lg font-mono font-black text-cyan-300 px-3 py-1 rounded-xl bg-black/60 border border-white/10 min-w-[58px] text-center">
                  00:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
                </span>

                <button
                  type="button"
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isTimerRunning
                      ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                      : 'bg-[#00FFD1] text-black shadow-neon hover:bg-[#00FFD1]/90'
                  }`}
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-black" />
                      <span>Pausa</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>{timerSeconds === 0 ? 'Ripeti' : 'Avvia'}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleResetTimer}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 border border-white/10 transition-all cursor-pointer"
                  title="Resetta Timer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* DYNAMIC EXERCISE 5: Aperture e chiusure delle anche */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 hover:border-amber-500/30 transition-all">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                  Dinamico 5 di 5
                </span>
                <h4 className="text-sm font-extrabold text-white">Aperture e Chiusure delle Anche</h4>
                <p className="text-[11px] text-gray-400 font-medium italic">Hip Openers & Closers (Inside-Out & Outside-In)</p>
              </div>
              <span className="text-[10px] font-bold text-amber-300 bg-amber-500/15 px-2 py-1 rounded-lg border border-amber-500/30 shrink-0">
                🔁 8 per lato
              </span>
            </div>

            {/* 3 Trucchi Veloci */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">💡 3 Trucchi Veloci</span>
              <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                <li><strong className="text-white">Ginocchio a 90° alto:</strong> Solleva la coscia all'altezza dell'ombelico prima di iniziare la rotazione verso l'esterno.</li>
                <li><strong className="text-white">Bacino frontale:</strong> Non ruotare il torso o i fianchi; isola il movimento nell'articolazione dell'anca mantenendo la postura dritta.</li>
                <li><strong className="text-white">Entrambi i versi:</strong> Esegui 8 aperture (da dentro verso l'esterno) e 8 chiusure (dall'esterno verso il centro) per ciascuna gamba.</li>
              </ul>
            </div>

            <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 font-medium">
              <strong>Esecuzione:</strong> In piedi, solleva il ginocchio piegato a 90° davanti a te, aprilo verso l'esterno e riappoggia il piede (apertura). Poi fai il percorso inverso dall'esterno verso l'interno (chiusura). 8 ripetizioni per lato.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
