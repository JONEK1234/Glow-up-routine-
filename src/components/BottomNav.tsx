import React from 'react';
import { NavTab } from '../types';
import { Home, CheckSquare, Sparkles, BookOpen } from 'lucide-react';

interface BottomNavProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  unreadLogsCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onSelectTab
}) => {
  const tabs: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Routine', icon: <Home className="w-5 h-5" /> },
    { id: 'checklist', label: 'Checklist', icon: <CheckSquare className="w-5 h-5" /> },
    { id: 'lookmaxing', label: 'Glow-Up', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'note', label: 'Note', icon: <BookOpen className="w-5 h-5" /> }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-white/10 px-3 py-2 max-w-md mx-auto">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all duration-200 min-w-[68px] ${
                isActive
                  ? 'text-cyan-300 font-bold bg-[#00FFD1]/10 border border-[#00FFD1]/30 shadow-neon'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="relative">
                {tab.icon}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neon shadow-neon" />
                )}
              </div>
              <span className="text-[10px] mt-1 font-semibold tracking-wider uppercase">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

