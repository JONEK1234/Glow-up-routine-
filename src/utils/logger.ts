import { LogEntry } from '../types';

type Listener = (logs: LogEntry[]) => void;

let logs: LogEntry[] = [
  {
    id: '1',
    timestamp: new Date().toLocaleTimeString(),
    type: 'info',
    message: 'Sistema di caricamento media e tracciamento routine avviato',
    details: { version: '1.0.0', architecture: 'Anti-Base64 Fallback Pipeline' }
  }
];

const listeners: Set<Listener> = new Set();

export const logger = {
  getLogs: (): LogEntry[] => [...logs],

  subscribe: (listener: Listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },

  addLog: (type: LogEntry['type'], message: string, details?: any) => {
    const entry: LogEntry = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      type,
      message,
      details
    };
    logs = [entry, ...logs].slice(0, 50); // Keep max 50 recent logs
    listeners.forEach(l => l([...logs]));
  },

  clear: () => {
    logs = [];
    listeners.forEach(l => l([]));
  }
};
