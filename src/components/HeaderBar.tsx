import React, { useState, useEffect, useMemo } from 'react';
import { Flame, Calendar, Clock, Rocket, Zap, PartyPopper, RotateCcw, X, Info, AlertTriangle, Check } from 'lucide-react';
import { storageHelper } from '../utils/storage';

interface HeaderBarProps {
  streak: number;
}

export const HeaderBar: React.FC<HeaderBarProps> = () => {
  const [startDate, setStartDate] = useState<string | null>(() => storageHelper.getOrdineStartDate());
  const [showStartModal, setShowStartModal] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [justReset, setJustReset] = useState<boolean>(false);

  // Poll/sync start date from storage periodically or on focus
  useEffect(() => {
    const handleStorageChange = () => {
      setStartDate(storageHelper.getOrdineStartDate());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Today formatted text
  const todayFormatted = useMemo(() => {
    return new Date().toLocaleDateString('it-IT', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  }, []);

  const todayFullText = useMemo(() => {
    return new Date().toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }, []);

  // Calculate elapsed days starting from 1D
  const daysElapsed = useMemo(() => {
    if (!startDate) return 1;
    const parts = startDate.split('-');
    let start: Date;
    if (parts.length === 3) {
      start = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    } else {
      start = new Date(startDate);
    }
    start.setHours(0, 0, 0, 0);

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    today.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - start.getTime();
    const days = Math.floor(diffTime / (1000 * 3600 * 24)) + 1;
    return days > 0 ? days : 1;
  }, [startDate]);

  const formatStartDateText = (startIso: string | null): string => {
    if (!startIso) return 'Non ancora avviato';
    const parts = startIso.split('-');
    let dateObj: Date;
    if (parts.length === 3) {
      dateObj = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    } else {
      dateObj = new Date(startIso);
    }
    return dateObj.toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getTodayIso = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handle1DClick = () => {
    if (!startDate) {
      const todayIso = getTodayIso();
      storageHelper.saveOrdineStartDate(todayIso);
      setStartDate(todayIso);
    }
    setJustReset(false);
    setShowStartModal(true);
  };

  const handleConfirmReset = () => {
    const todayIso = getTodayIso();
    storageHelper.saveOrdineStartDate(todayIso);
    setStartDate(todayIso);
    setShowResetConfirm(false);
    setShowInfoModal(false);
    setJustReset(true);
    setShowStartModal(true);

    // Notify other components if needed
    try {
      window.dispatchEvent(new Event('storage'));
    } catch (e) {}
  };

  return (
    <>
      <header className="sticky top-0 z-30 glass border-b border-white/10 px-4 py-3 max-w-md mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-[#00FFD1]/10 flex items-center justify-center border border-[#00FFD1]/30 shadow-neon">
              <div className="w-2.5 h-2.5 rounded-full bg-neon animate-pulse" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white tracking-wide leading-none flex items-center gap-1.5">
                Glow-Up Routine
              </h1>
              <p className="text-[10px] text-[#00FFD1] uppercase tracking-widest font-semibold mt-1">
                {todayFormatted}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* 1D / DAY COUNTER BADGE BUTTON */}
            <button
              type="button"
              onClick={handle1DClick}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/80 border border-[#00FFD1]/60 text-[#00FFD1] hover:bg-[#00FFD1]/10 text-xs font-black font-mono shadow-neon transition-all active:scale-95 cursor-pointer"
              title="Clicca per iniziare o vedere il progresso 1D"
            >
              <Flame className="w-3.5 h-3.5 text-[#00FFD1] animate-pulse" />
              <span>{daysElapsed}D</span>
            </button>

            {/* START DATE INFO BUTTON (Replaces console button) */}
            <button
              type="button"
              onClick={() => setShowInfoModal(true)}
              className="relative flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-[#00FFD1] hover:border-[#00FFD1]/40 transition-all active:scale-95 cursor-pointer"
              title="Visualizza Data di Inizio Percorso"
            >
              <Calendar className="w-4 h-4 text-[#00FFD1]" />
            </button>
          </div>
        </div>
      </header>

      {/* MODAL 1: 1D CLICK ACTIVATION / PROGRESS ANIMATION */}
      {showStartModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in zoom-in-95 fade-in duration-200">
          <div className="w-full max-w-sm glass-card p-6 rounded-3xl border-2 border-[#00FFD1] shadow-neon-lg text-center relative overflow-hidden space-y-4">
            <button
              onClick={() => setShowStartModal(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#00FFD1]/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

            <div className="relative inline-flex items-center justify-center p-4 rounded-3xl bg-[#00FFD1]/20 border border-[#00FFD1] text-[#00FFD1] shadow-neon animate-bounce">
              <Rocket className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center space-x-1 text-[#00FFD1] text-[10px] font-black uppercase tracking-widest">
                <PartyPopper className="w-3.5 h-3.5" />
                <span>{justReset ? 'Percorso Riavviato da Oggi!' : 'Routine Quotidiana Attiva'}</span>
                <PartyPopper className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-wide">
                Giorno {daysElapsed}D
              </h3>
            </div>

            <div className="py-3 px-6 rounded-2xl bg-black/80 border border-[#00FFD1]/60 inline-block shadow-neon">
              <span className="text-3xl font-black font-mono text-[#00FFD1] tracking-wider">
                {daysElapsed}D
              </span>
            </div>

            <p className="text-xs text-gray-200 font-medium leading-relaxed">
              {justReset ? (
                <span>Hai riavviato con successo il percorso da oggi (<strong className="text-white">{todayFullText}</strong>). Il contatore è ripartito da <strong className="text-[#00FFD1]">1D</strong>!</span>
              ) : (
                <span>Il tuo percorso è attivo! Oggi è <strong className="text-white">{todayFullText}</strong>. Ogni giorno il contatore avanzerà automaticamente (<strong className="text-[#00FFD1]">1D, 2D, 3D... 365D</strong>).</span>
              )}
            </p>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left text-[11px] space-y-1.5">
              <div className="flex justify-between items-center text-gray-300">
                <span>🗓️ Data Inizio:</span>
                <strong className="text-white font-bold">{formatStartDateText(startDate)}</strong>
              </div>
              <div className="flex justify-between items-center text-gray-300">
                <span>⚡ Giorni Trascorsi:</span>
                <strong className="text-[#00FFD1] font-bold">{daysElapsed} {daysElapsed === 1 ? 'Giorno' : 'Giorni'}</strong>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowStartModal(false)}
              className="w-full py-3 px-4 rounded-2xl bg-[#00FFD1] hover:bg-[#00FFD1]/90 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-neon transition-all active:scale-95 cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Continua la Routine</span>
            </button>

            {!justReset && (
              <button
                type="button"
                onClick={() => {
                  setShowStartModal(false);
                  setShowResetConfirm(true);
                  setShowInfoModal(true);
                }}
                className="text-[11px] text-gray-400 hover:text-rose-300 transition-colors flex items-center justify-center gap-1 mx-auto pt-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Riavvia percorso da oggi</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: START DATE INFO MODAL (Replaces Console) */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in zoom-in-95 fade-in duration-200">
          <div className="w-full max-w-sm glass-card p-6 rounded-3xl border border-[#00FFD1]/40 shadow-2xl relative overflow-hidden space-y-4">
            <button
              onClick={() => setShowInfoModal(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-3 text-left">
              <div className="p-3 rounded-2xl bg-[#00FFD1]/15 text-[#00FFD1] border border-[#00FFD1]/30 shadow-neon">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] text-[#00FFD1] font-black uppercase tracking-widest block">
                  Informazioni Percorso
                </span>
                <h3 className="text-base font-black text-white">
                  Giorno di Inizio
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-3 text-left">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-300" /> Data Inizio Percorso:
                </span>
                <p className="text-base font-black text-[#00FFD1]">
                  {formatStartDateText(startDate)}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/10">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-cyan-400" /> Data Odierna:
                </span>
                <p className="text-sm font-bold text-white">
                  {todayFullText}
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/10">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orange-400" /> Stato Progresso:
                </span>
                <p className="text-sm font-extrabold text-[#00FFD1] font-mono">
                  {daysElapsed}D ({daysElapsed} {daysElapsed === 1 ? 'giorno completato' : 'giorni completati'})
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              {showResetConfirm ? (
                <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-left space-y-2.5 animate-in fade-in duration-200">
                  <div className="flex items-center space-x-2 text-rose-300 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Confermi di voler riavviare il percorso?</span>
                  </div>
                  <p className="text-[11px] text-gray-200 leading-relaxed font-medium">
                    La data d'inizio verrà impostata su oggi (<strong className="text-white">{todayFullText}</strong>) e il contatore tornerà a <strong className="text-[#00FFD1] font-mono">1D</strong>.
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleConfirmReset}
                      className="flex-1 py-2 px-3 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-black text-xs transition-all active:scale-95 cursor-pointer shadow-md flex items-center justify-center space-x-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Sì, Riavvia da Oggi</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowResetConfirm(false)}
                      className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-semibold transition-all cursor-pointer"
                    >
                      Annulla
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowResetConfirm(true)}
                  className="w-full py-2.5 px-3 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 hover:text-rose-200 border border-rose-500/40 text-xs font-bold transition-all cursor-pointer flex items-center justify-center space-x-1.5 active:scale-95 shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
                  <span>Riavvia Percorso da Oggi (1D)</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  setShowResetConfirm(false);
                  setShowInfoModal(false);
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


