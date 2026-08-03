import React, { useState } from 'react';
import { LogEntry } from '../types';
import { Terminal, X, Trash2, CheckCircle2, AlertTriangle, XCircle, RefreshCw, Layers } from 'lucide-react';

interface DebugConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  logs: LogEntry[];
  onClear: () => void;
}

export const DebugConsole: React.FC<DebugConsoleProps> = ({
  isOpen,
  onClose,
  logs,
  onClear
}) => {
  const [filter, setFilter] = useState<'all' | 'fallback' | 'error' | 'success'>('all');

  if (!isOpen) return null;

  const filteredLogs = logs.filter(log => {
    if (filter === 'all') return true;
    if (filter === 'fallback') return log.type === 'fallback';
    if (filter === 'error') return log.type === 'error';
    if (filter === 'success') return log.type === 'success';
    return true;
  });

  const getLogIcon = (type: LogEntry['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />;
      case 'fallback':
        return <RefreshCw className="w-4 h-4 text-amber-400 shrink-0 animate-spin" style={{ animationDuration: '4s' }} />;
      case 'warn':
        return <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-rose-400 shrink-0" />;
      default:
        return <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />;
    }
  };

  const getBadgeStyle = (type: LogEntry['type']) => {
    switch (type) {
      case 'success':
        return 'bg-[#00FFD1]/10 text-cyan-300 border-[#00FFD1]/30';
      case 'fallback':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'warn':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'error':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      default:
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-end max-w-md mx-auto animate-in fade-in duration-200">
      <div className="glass-card border-t border-white/10 rounded-t-3xl h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Console Header */}
        <div className="p-3.5 border-b border-white/10 bg-black/40 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-xl bg-[#00FFD1]/10 text-cyan-300 border border-[#00FFD1]/30 shadow-neon">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                Console Debug System
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-cyan-300 border border-[#00FFD1]/20">
                  {logs.length} Eventi
                </span>
              </h2>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium mt-0.5">
                Tracciamento upload media & fallback
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onClear}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-rose-500/20 text-gray-400 hover:text-rose-400 transition-colors"
              title="Pulisci log"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-1.5 p-2 bg-black/30 border-b border-white/5 overflow-x-auto text-xs">
          {[
            { id: 'all', label: 'Tutti' },
            { id: 'fallback', label: 'Fallback / Retry' },
            { id: 'success', label: 'Successi' },
            { id: 'error', label: 'Errori' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-3 py-1 rounded-xl text-[10px] font-bold tracking-wider uppercase transition-all shrink-0 ${
                filter === btn.id
                  ? 'bg-[#00FFD1]/20 text-cyan-300 border border-[#00FFD1]/40 shadow-neon'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Pipeline Architecture Banner */}
        <div className="p-2.5 bg-black/50 border-b border-white/5 text-[11px] text-gray-300 flex items-start gap-2">
          <Layers className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-cyan-300 uppercase tracking-wider text-[10px]">Catena Anti-Base64:</span>
            <span className="text-gray-400 text-[11px] ml-1.5">
              Firebase (Timeout 2.2s) → Express (/api/upload) → Imgur → Pixeldrain → TmpFiles → Unsplash Placeholder
            </span>
          </div>
        </div>

        {/* Logs List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 font-mono text-[11px]">
          {filteredLogs.length === 0 ? (
            <div className="text-center py-12 text-gray-500 italic">
              Nessun evento registrato per questo filtro.
            </div>
          ) : (
            filteredLogs.map(log => (
              <div
                key={log.id}
                className="p-2.5 rounded-2xl glass-card border border-white/5 space-y-1 hover:border-[#00FFD1]/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    {getLogIcon(log.type)}
                    <span className={`px-1.5 py-0.5 rounded-lg text-[10px] font-bold border ${getBadgeStyle(log.type)} uppercase tracking-wider`}>
                      {log.type}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500">{log.timestamp}</span>
                </div>

                <p className="text-gray-200 font-sans text-xs leading-relaxed pl-5">
                  {log.message}
                </p>

                {log.details && (
                  <div className="ml-5 p-2 rounded-xl bg-black/40 border border-white/5 text-[10px] text-gray-400 overflow-x-auto">
                    <pre>{JSON.stringify(log.details, null, 2)}</pre>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 bg-black/60 border-t border-white/5 text-[10px] text-gray-500 text-center uppercase tracking-widest font-semibold">
          Console Debug Live - Monitoraggio Real-time Memoria & Upload
        </div>
      </div>
    </div>
  );
};

