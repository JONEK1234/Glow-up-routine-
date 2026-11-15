import { ShavingSession } from '../types';
import { shavingPhotoDb } from './shavingPhotoDb';

export interface FullAppBackupBundle {
  app: 'glowup-full-backup';
  version: 1;
  exportedAtIso: string;
  localStorageData: Record<string, string>;
  shavingSessions: ShavingSession[];
}

export interface BackupSummaryStats {
  hasStartDate: boolean;
  startDateIso: string | null;
  startDateFormatted: string | null;
  daysElapsed: number;
  streakDays: number;
  userNotesCount: number;
  shavingSessionsCount: number;
  shavingPhotosCount: number;
  lookmaxingPhotosCount: number;
  hasPosturePhotos: boolean;
}

export function parseLocalDateFromIso(startIso: string | null): Date | null {
  if (!startIso) return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(startIso.trim());
  let d: Date;
  if (match) {
    d = new Date(parseInt(match[1], 10), parseInt(match[2], 10) - 1, parseInt(match[3], 10));
  } else {
    d = new Date(startIso);
  }
  if (Number.isNaN(d.getTime())) return null;
  d.setHours(0, 0, 0, 0);
  return d;
}

export function formatDateItFromIso(startIso: string | null): string | null {
  const d = parseLocalDateFromIso(startIso);
  if (!d) return null;
  return d.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

export function calcDaysElapsedFromIso(startIso: string | null): number {
  const start = parseLocalDateFromIso(startIso);
  if (!start) return 1;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  today.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - start.getTime();
  const days = Math.floor(diffTime / (1000 * 3600 * 24)) + 1;
  return days > 0 ? days : 1;
}

export function calcStartIsoFromDaysElapsed(daysCount: number): string {
  const safeDays = Math.max(1, Math.min(36500, Math.floor(daysCount) || 1));
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() - (safeDays - 1));
  const year = target.getFullYear();
  const month = String(target.getMonth() + 1).padStart(2, '0');
  const day = String(target.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function notifyAppDataUpdated(): void {
  if (typeof window === 'undefined') return;
  try {
    window.dispatchEvent(new Event('glowup-data-restored'));
    window.dispatchEvent(new Event('storage'));
  } catch {
    // ignore
  }
}

export const fullAppBackup = {
  getCurrentStats: async (): Promise<BackupSummaryStats> => {
    const startIso =
      typeof window !== 'undefined' ? window.localStorage.getItem('glowup_ordine_start_date_v1') : null;
    const startDateFormatted = formatDateItFromIso(startIso);
    const daysElapsed = calcDaysElapsedFromIso(startIso);

    const streakRaw =
      typeof window !== 'undefined' ? window.localStorage.getItem('glowup_streak_v1') : null;
    const streakDays = streakRaw ? parseInt(streakRaw, 10) || 1 : 1;

    let userNotesCount = 0;
    try {
      const notesRaw = window.localStorage.getItem('glowup_user_notes_v1');
      if (notesRaw) {
        const parsed = JSON.parse(notesRaw);
        if (Array.isArray(parsed)) userNotesCount = parsed.length;
      }
    } catch {
      // ignore
    }

    let lookmaxingPhotosCount = 0;
    try {
      const photosRaw = window.localStorage.getItem('glowup_photos_v1');
      if (photosRaw) {
        const parsed = JSON.parse(photosRaw);
        if (Array.isArray(parsed)) lookmaxingPhotosCount = parsed.length;
      }
    } catch {
      // ignore
    }

    let hasPosturePhotos = false;
    try {
      const postureRaw = window.localStorage.getItem('glowup_posture_comparison_v1');
      if (postureRaw) {
        const parsed = JSON.parse(postureRaw);
        hasPosturePhotos = Boolean(
          parsed?.normalPhotoUrl || parsed?.goodPhotoUrl || parsed?.normalPhotoUrl2 || parsed?.goodPhotoUrl2
        );
      }
    } catch {
      // ignore
    }

    let shavingSessions: ShavingSession[] = [];
    try {
      shavingSessions = await shavingPhotoDb.getAllSessions();
    } catch {
      shavingSessions = [];
    }

    const shavingPhotosCount = shavingSessions.reduce(
      (acc, s) => acc + shavingPhotoDb.countPhotos(s),
      0
    );

    return {
      hasStartDate: Boolean(startIso),
      startDateIso: startIso,
      startDateFormatted,
      daysElapsed,
      streakDays,
      userNotesCount,
      shavingSessionsCount: shavingSessions.length,
      shavingPhotosCount,
      lookmaxingPhotosCount,
      hasPosturePhotos
    };
  },

  buildFullBackupBundle: async (): Promise<FullAppBackupBundle> => {
    const localStorageData: Record<string, string> = {};
    if (typeof window !== 'undefined' && window.localStorage) {
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (key) {
          const val = window.localStorage.getItem(key);
          if (val !== null) {
            localStorageData[key] = val;
          }
        }
      }
    }

    let shavingSessions: ShavingSession[] = [];
    try {
      shavingSessions = await shavingPhotoDb.getAllSessions();
    } catch {
      shavingSessions = [];
    }

    return {
      app: 'glowup-full-backup',
      version: 1,
      exportedAtIso: new Date().toISOString(),
      localStorageData,
      shavingSessions
    };
  },

  importFullBackupContent: async (
    rawText: string
  ): Promise<{
    type: 'full' | 'shaving-only';
    localStorageKeysRestored: number;
    shavingSessionsRestored: number;
    shavingPhotosRestored: number;
    restoredDaysElapsed: number;
    restoredStartDateFormatted: string | null;
  }> => {
    const parsed = JSON.parse(rawText);

    // 1. Backup completo di tutta l'app
    if (parsed && parsed.app === 'glowup-full-backup') {
      let keysRestored = 0;
      if (
        parsed.localStorageData &&
        typeof parsed.localStorageData === 'object' &&
        typeof window !== 'undefined' &&
        window.localStorage
      ) {
        for (const [key, value] of Object.entries(parsed.localStorageData)) {
          if (typeof key === 'string' && typeof value === 'string') {
            window.localStorage.setItem(key, value);
            keysRestored += 1;
          }
        }
      }

      let shavingSessionsRestored = 0;
      let shavingPhotosRestored = 0;
      if (Array.isArray(parsed.shavingSessions) && parsed.shavingSessions.length > 0) {
        const normalized = shavingPhotoDb.parseBackupFileContent(
          JSON.stringify(parsed.shavingSessions)
        );
        await shavingPhotoDb.importSessions(normalized);
        await shavingPhotoDb.requestPersistentStorage();
        shavingSessionsRestored = normalized.length;
        shavingPhotosRestored = normalized.reduce(
          (acc, s) => acc + shavingPhotoDb.countPhotos(s),
          0
        );
      }

      const startIso =
        typeof window !== 'undefined' ? window.localStorage.getItem('glowup_ordine_start_date_v1') : null;
      const restoredDaysElapsed = calcDaysElapsedFromIso(startIso);
      const restoredStartDateFormatted = formatDateItFromIso(startIso);

      notifyAppDataUpdated();

      return {
        type: 'full',
        localStorageKeysRestored: keysRestored,
        shavingSessionsRestored,
        shavingPhotosRestored,
        restoredDaysElapsed,
        restoredStartDateFormatted
      };
    }

    // 2. Fallback compatibile: se l'utente carica un file backup di soli peli incarniti
    const shavingOnlySessions = shavingPhotoDb.parseBackupFileContent(rawText);
    await shavingPhotoDb.importSessions(shavingOnlySessions);
    await shavingPhotoDb.requestPersistentStorage();
    const startIso =
      typeof window !== 'undefined' ? window.localStorage.getItem('glowup_ordine_start_date_v1') : null;

    notifyAppDataUpdated();

    return {
      type: 'shaving-only',
      localStorageKeysRestored: 0,
      shavingSessionsRestored: shavingOnlySessions.length,
      shavingPhotosRestored: shavingOnlySessions.reduce(
        (acc, s) => acc + shavingPhotoDb.countPhotos(s),
        0
      ),
      restoredDaysElapsed: calcDaysElapsedFromIso(startIso),
      restoredStartDateFormatted: formatDateItFromIso(startIso)
    };
  }
};
