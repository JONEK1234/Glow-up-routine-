import React, { useState } from 'react';
import { ArrowLeft, Zap, Dumbbell, Video } from 'lucide-react';

interface DynamicStretchingViewProps {
  onClose: () => void;
}

interface DynamicExercise {
  id: string;
  num: string;
  stepText: string;
  title: string;
  subtitle: string;
  target: string;
  execution: string;
  tips: { label: string; text: string }[];
  embedId?: string;
}

const DYNAMIC_EXERCISES: DynamicExercise[] = [
  {
    id: 'circonduzioni',
    num: '1',
    stepText: 'Esercizio 1 di 5',
    title: 'Circonduzioni delle braccia',
    subtitle: 'Arm Circles • Spalle & Cingolo Scapolare',
    target: '10 avanti + 10 indietro',
    execution: 'Esegui 10 circonduzioni lente e controllate in avanti (in senso orario), poi inverti subito eseguendo 10 circonduzioni indietro (in senso antiorario).',
    tips: [
      { label: 'Ampiezza graduale', text: 'Inizia con cerchi di media grandezza e aumenta progressivamente il raggio del movimento.' },
      { label: 'Busto compatto', text: 'Mantieni l\'addome attivo e non inarcare la zona lombare durante le rotazioni.' },
      { label: 'Braccia distese', text: 'Tieni i gomiti quasi del tutto estesi e le spalle lontane dalle orecchie.' }
    ],
    embedId: 'w0LA6gKvlrI'
  },
  {
    id: 'slanci_gambe',
    num: '2',
    stepText: 'Esercizio 2 di 5',
    title: 'Slanci delle gambe (Leg Swings)',
    subtitle: 'Pendulum Swings • Flessori, Femorali & Adduttori',
    target: '10-12 per gamba',
    execution: 'Esegui 10-12 oscillazioni avanti/dietro a pendolo per gamba, seguite da 10 oscillazioni laterali sul piano frontale.',
    tips: [
      { label: 'Punto di appoggio', text: 'Appoggia una mano a una parete o sedia per restare eretto e concentrarti sul movimento.' },
      { label: 'Movimento fluido', text: 'Non forzare l\'estensione massima al primo slancio; lascia lavorare l\'inerzia naturale.' },
      { label: 'Bacino fermo', text: 'Evita di ruotare eccessivamente il bacino o piegare il busto in avanti.' }
    ]
  },
  {
    id: 'affondi_rotazione',
    num: '3',
    stepText: 'Esercizio 3 di 5',
    title: 'Affondi camminati con rotazione del busto',
    subtitle: 'Walking Lunges with Twist • Catena Cinetica & Torace',
    target: '10-12 passi totali',
    execution: 'Fai un ampio passo in avanti scendendo in affondo a 90°, ruota il tronco e le braccia verso la gamba anteriore, torna al centro e avanza con l\'altra gamba.',
    tips: [
      { label: 'Ginocchio a 90°', text: 'Il ginocchio anteriore deve rimanere in linea con la caviglia senza oltrepassare la punta del piede.' },
      { label: 'Torsione controllata', text: 'Ruota partendo dalla gabbia toracica mantenendo il bacino ben orientato in avanti.' },
      { label: 'Spinta sul tallone', text: 'Spingi con decisione attraverso il tallone anteriore per risollevarti in modo fluido.' }
    ]
  },
  {
    id: 'corsa_calciata',
    num: '4',
    stepText: 'Esercizio 4 di 5',
    title: 'Corsa calciata (Butt Kicks)',
    subtitle: 'Active Butt Kicks • Quadricipiti & Attivazione',
    target: '20–30 secondi',
    execution: 'Esegui una corsa ritmata sul posto portando alternativamente i talloni verso i glutei per 20–30 secondi consecutivi.',
    tips: [
      { label: 'Avampiede elastico', text: 'Atterra delicatamente sull\'avampiede senza battere pesantemente i talloni a terra.' },
      { label: 'Busto inclinato', text: 'Mantieni il busto leggermente proteso in avanti in posizione atletica naturale.' },
      { label: 'Respirazione ritmata', text: 'Coordina il movimento delle braccia e mantieni un respiro profondo e continuo.' }
    ]
  },
  {
    id: 'aperture_anche',
    num: '5',
    stepText: 'Esercizio 5 di 5',
    title: 'Aperture e chiusure delle anche',
    subtitle: 'Hip Openers • Articolazione Coxo-Femorale',
    target: '8 per lato',
    execution: 'Solleva il ginocchio a 90° ed esegui 8 ampie aperture circolari verso l\'esterno; inverti poi la traiettoria con 8 chiusure dall\'esterno verso il centro.',
    tips: [
      { label: 'Ginocchio alto', text: 'Porta il ginocchio all\'altezza del bacino prima di iniziare la rotazione circolare verso l\'esterno.' },
      { label: 'Gamba d\'appoggio solida', text: 'Tieni la gamba a terra leggermente sbloccata con il piede ben saldo al pavimento.' },
      { label: 'Controllo del core', text: 'Non oscillare lateralmente con la schiena per compensare la rotazione dell\'anca.' }
    ]
  }
];

export const DynamicStretchingView: React.FC<DynamicStretchingViewProps> = ({ onClose }) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  return (
    <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
      {/* Back button header */}
      <button
        type="button"
        onClick={onClose}
        className="flex items-center space-x-2 py-2 px-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 text-xs font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Torna alla Routine</span>
      </button>

      {/* Main Header Card - identica struttura allo stretching statico */}
      <div className="p-5 rounded-3xl glass-card relative overflow-hidden border border-amber-500/30 space-y-2">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-white">Stretching Dinamico</h2>
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
              5 Esercizi Sequenziali di Mobilità & Attivazione
            </p>
          </div>
        </div>
      </div>

      {/* Exercises Section - identico allo stretching statico */}
      <div className="p-4 sm:p-5 rounded-3xl glass-card space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <Dumbbell className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Scheda Esercizi Dinamici</h3>
          </div>
          <span className="text-[10px] font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
            5 Passaggi
          </span>
        </div>

        <div className="space-y-4">
          {DYNAMIC_EXERCISES.map((exercise) => {
            return (
              <div
                key={exercise.id}
                className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3"
              >
                {/* Header Esercizio: Esercizio X di 5, titolo, sottotitolo e target */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block">
                      {exercise.stepText}
                    </span>
                    <h4 className="text-sm font-extrabold text-white">{exercise.title}</h4>
                    <p className="text-[11px] text-gray-400 font-medium italic">{exercise.subtitle}</p>
                  </div>
                  <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg border border-cyan-500/20 shrink-0">
                    ⏱️ {exercise.target}
                  </span>
                </div>

                {/* 3 Trucchi Veloci / Consigli */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                    💡 3 Trucchi Veloci
                  </span>
                  <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside font-medium">
                    {exercise.tips.map((tip, idx) => (
                      <li key={idx}>
                        <strong className="text-white">{tip.label}:</strong> {tip.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Esecuzione */}
                <div className="text-[11px] text-amber-300 bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 font-medium">
                  <strong>Esecuzione:</strong> {exercise.execution}
                </div>

                {/* Video Tutorial con avvio immediato (senza scritte o link esterni YouTube) */}
                {exercise.embedId && (
                  <div className="space-y-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setShowVideo(!showVideo)}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer"
                    >
                      <Video className="w-4 h-4" />
                      <span>{showVideo ? 'Nascondi Video Tutorial' : 'Guarda Video Tutorial'}</span>
                    </button>

                    {showVideo && (
                      <div className="rounded-xl overflow-hidden border border-amber-500/30 bg-black aspect-video relative animate-in fade-in duration-200">
                        <iframe
                          src={`https://www.youtube.com/embed/${exercise.embedId}?autoplay=1&rel=0&modestbranding=1`}
                          title={exercise.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
