import React, { useState, useEffect } from 'react';
import { NavTab, LogEntry } from './types';
import { logger } from './utils/logger';
import { storageHelper } from './utils/storage';
import { HeaderBar } from './components/HeaderBar';
import { BottomNav } from './components/BottomNav';
import { DebugConsole } from './components/DebugConsole';
import { HomeRoutineTab } from './components/tabs/HomeRoutineTab';
import { DailyChecklistTab } from './components/tabs/DailyChecklistTab';
import { LookmaxingTab } from './components/tabs/LookmaxingTab';
import { OrdineTab } from './components/tabs/OrdineTab';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [streak, setStreak] = useState<number>(() => storageHelper.getStreak());
  const [isConsoleOpen, setIsConsoleOpen] = useState<boolean>(false);
  const [logs, setLogs] = useState<LogEntry[]>(() => logger.getLogs());

  // Subscribe to live log updates
  useEffect(() => {
    const unsubscribe = logger.subscribe((updatedLogs) => {
      setLogs(updatedLogs);
    });
    return unsubscribe;
  }, []);

  // Sync streak
  useEffect(() => {
    const current = storageHelper.getStreak();
    setStreak(current);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white flex justify-center selection:bg-[#00FFD1] selection:text-black">
      {/* Mobile Frame Container */}
      <div className="w-full max-w-md min-h-screen bg-[#0B0F17] border-x border-white/10 shadow-2xl flex flex-col relative overflow-x-hidden">
        {/* Header */}
        <HeaderBar streak={streak} />

        {/* Main Content Area */}
        <main className="flex-1 px-4 py-2">
          {activeTab === 'home' && <HomeRoutineTab />}
          {activeTab === 'checklist' && <DailyChecklistTab />}
          {activeTab === 'lookmaxing' && <LookmaxingTab />}
          {activeTab === 'ordine' && <OrdineTab />}
        </main>

        {/* Bottom Navigation */}
        <BottomNav
          activeTab={activeTab}
          onSelectTab={setActiveTab}
        />

        {/* Live Debug Console Modal */}
        <DebugConsole
          isOpen={isConsoleOpen}
          onClose={() => setIsConsoleOpen(false)}
          logs={logs}
          onClear={() => logger.clear()}
        />
      </div>
    </div>
  );
}
