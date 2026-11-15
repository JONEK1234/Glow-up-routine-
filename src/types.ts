export type NavTab = 'home' | 'checklist' | 'lookmaxing' | 'note';

export interface UserNote {
  id: string;
  title: string;
  date: string;
  category: 'asimmetria' | 'percorso' | 'allenamento' | 'dieta' | 'mentale' | 'generale' | 'postura';
  content: string;
  isPinned?: boolean;
}

export interface PostureComparisonData {
  normalPhotoUrl: string;
  normalPhotoUrl2?: string;
  goodPhotoUrl: string;
  goodPhotoUrl2?: string;
  updatedAt?: string;
  notes?: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  type: 'info' | 'success' | 'warn' | 'error' | 'fallback';
  message: string;
  details?: any;
}

export interface UploadResult {
  url: string;
  provider: 'firebase' | 'express-local' | 'imgur' | 'pixeldrain' | 'tmpfiles' | 'unsplash-fallback';
  timeTakenMs: number;
  message: string;
}

export interface WaterLog {
  currentLiters: number;
  targetLiters: number;
  history: { time: string; amount: number }[];
}

export interface ChecklistItem {
  id: string;
  title: string;
  category: 'sleep' | 'hydration' | 'skincare' | 'hair' | 'face' | 'posture' | 'eyes' | 'diet';
  completed: boolean;
  timeCompleted?: string;
  isCustom?: boolean;
}

export interface ProgressPhoto {
  id: string;
  date: string;
  title: string;
  url: string;
  provider: string;
  category: 'mewing' | 'posture' | 'eyes' | 'skin' | 'general';
  notes?: string;
}

export interface MediaLink {
  id: string;
  title: string;
  url: string;
  platform: 'tiktok' | 'youtube' | 'instagram' | 'image' | 'other';
  embedUrl?: string;
  category: 'mewing' | 'posture' | 'eyes' | 'skincare' | 'store' | 'general';
  description?: string;
  addedAt: string;
}

export interface StoreProductVideo {
  id: string;
  title: string;
  productName: string;
  price?: string;
  videoUrl: string;
  embedUrl?: string;
  thumbnailUrl?: string;
  platform: 'tiktok' | 'youtube' | 'other';
  category: 'skincare' | 'posture' | 'mewing' | 'fitness' | 'lifestyle';
  shopLink: string;
  badge?: string;
  highlights: string[];
  conversionCta: string;
}

export type ShavingAngle = 'left' | 'front' | 'right';

export interface ShavingPhotoSlot {
  id?: string;
  dataUrl: string;
  uploadedAtIso: string;
  dayLabel: string;
  dateStr: string;
  timeStr: string;
  caption?: string;
}

export interface ShavingAnglePhotos {
  before?: ShavingPhotoSlot;
  after?: ShavingPhotoSlot;
  beforeList?: ShavingPhotoSlot[];
  afterList?: ShavingPhotoSlot[];
}

export interface ShavingExtraShot {
  id: string;
  label: string;
  beforeList: ShavingPhotoSlot[];
  afterList: ShavingPhotoSlot[];
}

export interface ShavingSession {
  id: string;
  createdAtIso: string;
  updatedAtIso: string;
  dayLabel: string;
  dateStr: string;
  timeStr: string;
  title: string;
  notes?: string;
  photos: {
    left: ShavingAnglePhotos;
    front: ShavingAnglePhotos;
    right: ShavingAnglePhotos;
  };
  extraShots?: ShavingExtraShot[];
}

export interface ShavingBackupBundle {
  app: 'glowup-peli-incarniti-backup';
  version: 1;
  exportedAtIso: string;
  sessions: ShavingSession[];
}

