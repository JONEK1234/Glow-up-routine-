import React, { useState, useEffect } from 'react';
import { ChecklistItem } from '../../types';
import { storageHelper } from '../../utils/storage';
import { CheckSquare, Plus, RotateCcw, Check, Flame, Sparkles, Trash2 } from 'lucide-react';

export const DailyChecklistTab: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>(() => storageHelper.getChecklist().items);
  const [streak, setStreak] = useState<number>(() => storageHelper.getStreak());
  const [newTitle, setNewTitle] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Save checklist whenever items change
  useEffect(() => {
    storageHelper.saveChecklist(items);

    // Calculate completion and update streak if 100%
    const total = items.length;
    const completedCount = items.filter(i => i.completed).length;
    if (total > 0 && completedCount === total) {
      // Completed all for today
      const currentStreak = storageHelper.getStreak();
      const newStreak = currentStreak + 1;
      storageHelper.saveStreak(newStreak);
      setStreak(newStreak);
    }
  }, [items]);

  const toggleItem = (id: string) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextState = !item.completed;
          return {
            ...item,
            completed: nextState,
            timeCompleted: nextState ? new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }) : undefined
          };
        }
        return item;
      })
    );
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem: ChecklistItem = {
      id: `custom_${Date.now()}`,
      title: newTitle.trim(),
      category: 'face',
      completed: false,
      isCustom: true
    };

    setItems(prev => [...prev, newItem]);
    setNewTitle('');
    setShowAddModal(false);
  };

  const deleteCustomItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const resetToday = () => {
    setItems(prev => prev.map(i => ({ ...i, completed: false, timeCompleted: undefined })));
  };

  const completedCount = items.filter(i => i.completed).length;
  const totalCount = items.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
      {/* Progress & Stats Card */}
      <div className="p-4 rounded-3xl glass-card border border-white/10 shadow-2xl space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-2xl bg-[#00FFD1]/10 text-cyan-300 border border-[#00FFD1]/30 shadow-neon">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Checklist Giornaliera</h2>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Spunta le tue abitudini</p>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-extrabold text-xs">
            <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
            <span>{streak}d Combo</span>
          </div>
        </div>

        {/* Circular Progress & Percentage */}
        <div className="p-3 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Progresso di Oggi</div>
            <div className="text-base font-extrabold text-white flex items-center gap-1.5">
              <span>{completedCount} su {totalCount} completati</span>
            </div>
            {progressPercent === 100 && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-cyan-300 bg-[#00FFD1]/10 px-2.5 py-0.5 rounded-full border border-[#00FFD1]/30 shadow-neon">
                <Sparkles className="w-3 h-3 text-cyan-300" /> Tutte le routine completate!
              </span>
            )}
          </div>

          <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
            <svg className="w-14 h-14 transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="currentColor"
                strokeWidth="4"
                className="text-white/10"
                fill="transparent"
              />
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="#00FFD1"
                strokeWidth="4"
                className="transition-all duration-500"
                fill="transparent"
                strokeDasharray={138}
                strokeDashoffset={138 - (138 * progressPercent) / 100}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-xs font-extrabold text-cyan-300">
              {progressPercent}%
            </span>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-neon text-black font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-neon uppercase tracking-wider transition-all active:scale-95"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Aggiungi Azione</span>
          </button>
          <button
            onClick={resetToday}
            className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-xs flex items-center justify-center space-x-1 border border-white/10 uppercase tracking-wider transition-colors"
            title="Azzera per oggi"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Checklist items list */}
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between shadow-sm select-none ${
              item.completed
                ? 'bg-[#00FFD1]/15 border-[#00FFD1]/40 text-cyan-200 shadow-neon'
                : 'glass-card border-white/5 text-gray-200 hover:border-white/20'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all shrink-0 ${
                  item.completed
                    ? 'bg-neon border-neon text-black shadow-neon'
                    : 'border-white/20 bg-black/40'
                }`}
              >
                {item.completed && <Check className="w-4 h-4 stroke-[3]" />}
              </div>
              <div>
                <span className={`text-xs font-bold block ${item.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                  {item.title}
                </span>
                {item.completed && item.timeCompleted && (
                  <span className="text-[10px] text-cyan-300 font-semibold uppercase tracking-wider">
                    Completato alle {item.timeCompleted}
                  </span>
                )}
              </div>
            </div>

            {item.isCustom && (
              <button
                onClick={(e) => deleteCustomItem(item.id, e)}
                className="p-1.5 rounded-xl bg-white/5 text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors shrink-0"
                title="Elimina voce personalizzata"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Modal to add custom action */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card border border-white/10 rounded-3xl p-5 w-full max-w-sm space-y-4 shadow-2xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Aggiungi Nuova Azione Quotidiana</h3>
            <form onSubmit={handleAddItem} className="space-y-3">
              <input
                type="text"
                placeholder="Es. Massaggio facciale 3 min..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00FFD1]"
                autoFocus
              />
              <div className="flex items-center space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 text-gray-300 font-bold text-xs hover:bg-white/10 uppercase tracking-wider transition-colors"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-neon text-black font-extrabold text-xs uppercase tracking-wider shadow-neon transition-colors"
                >
                  Salva Azione
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

