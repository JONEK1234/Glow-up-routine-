import { ChecklistItem, ProgressPhoto, MediaLink, StoreProductVideo, WaterLog } from '../types';

const STORAGE_KEYS = {
  WATER: 'glowup_water_log_v1',
  CHECKLIST: 'glowup_checklist_v1',
  CHECKLIST_DATE: 'glowup_checklist_date_v1',
  PROGRESS_PHOTOS: 'glowup_photos_v1',
  MEDIA_LINKS: 'glowup_links_v1',
  STORE_PRODUCTS: 'glowup_store_v1',
  STREAK: 'glowup_streak_v1',
  ORDINE_START_DATE: 'glowup_ordine_start_date_v1'
};

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: 'c1', title: '8-9 ore di sonno', category: 'sleep', completed: false },
  { id: 'c2', title: "2-3 litri d'acqua", category: 'hydration', completed: false },
  { id: 'c3', title: 'Skincare (Mattina e Sera)', category: 'skincare', completed: false },
  { id: 'c5', title: 'Posizione della lingua sul palato (Mewing)', category: 'face', completed: false },
  { id: 'c6', title: 'Masticare gomma per 15/20 minuti', category: 'face', completed: false },
  { id: 'c7', title: 'Controllo postura quotidiano', category: 'posture', completed: false },
  { id: 'c9', title: 'Routine occhi/orbicolari (5 min)', category: 'eyes', completed: false },
  { id: 'c10', title: 'Regola 20-20-20 per schermi', category: 'eyes', completed: false },
  { id: 'c11', title: 'Alimentazione pulita', category: 'diet', completed: false }
];

export const DEFAULT_STORE_PRODUCTS: StoreProductVideo[] = [
  {
    id: 'sp1',
    title: 'Guida Video: Roller Facciale & Guasha per Depuffing',
    productName: 'Kit Guasha & Roller in Ossidiana',
    price: '€24.90',
    videoUrl: 'https://www.youtube.com/watch?v=17Ily34XJbE',
    embedUrl: 'https://www.youtube.com/embed/17Ily34XJbE',
    platform: 'youtube',
    category: 'skincare',
    shopLink: 'https://example.com/shop/guasha-kit',
    badge: '🔥 Best Seller',
    highlights: [
      'Drenaggio linfatico facciale immediato',
      'Definizione mascella e riduzione gonfiore',
      'Pietra di ossidiana naturale rinfrescante'
    ],
    conversionCta: 'Acquista Ora - Sconto 20%'
  },
  {
    id: 'sp2',
    title: 'Correttore Ergonomico Postura & Fascia Chin Tuck',
    productName: 'Supporto Posturale Neoprene Pro',
    price: '€29.99',
    videoUrl: 'https://www.youtube.com/watch?v=g-7ZW23S9_M',
    embedUrl: 'https://www.youtube.com/embed/g-7ZW23S9_M',
    platform: 'youtube',
    category: 'posture',
    shopLink: 'https://example.com/shop/posture-corrector',
    badge: '⭐ Consigliato Postura',
    highlights: [
      'Corregge la sindrome della testa in avanti',
      'Materiale traspirante ed invisibile sotto i vestiti',
      'Allena la memoria muscolare dorsale'
    ],
    conversionCta: 'Scopri di Più & Ordina'
  },
  {
    id: 'sp3',
    title: 'Masticatore Jawline Trainer Alimentare Certificato',
    productName: 'Jawline Exerciser Dual-Resistance',
    price: '€19.95',
    videoUrl: 'https://www.youtube.com/watch?v=0k73H3tW0K4',
    embedUrl: 'https://www.youtube.com/embed/0k73H3tW0K4',
    platform: 'youtube',
    category: 'mewing',
    shopLink: 'https://example.com/shop/jawline-trainer',
    badge: '💪 Risultati in 30 Giorni',
    highlights: [
      'Silicone di grado medico senza BPA',
      'Rafforza il muscolo massetere in 15 min/giorno',
      'Include custodia igienica da viaggio'
    ],
    conversionCta: 'Acquista Ora - Spedizione Rapida'
  }
];

export const DEFAULT_MEDIA_LINKS: MediaLink[] = [
  {
    id: 'm1',
    title: 'Tutorial Esecuzione Corretta Mewing & Tongue Posture',
    url: 'https://www.youtube.com/watch?v=MIn4x7Cylp4',
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/MIn4x7Cylp4',
    category: 'mewing',
    description: 'Guida passo passo per posizionare la parte posteriore della lingua sul palato.',
    addedAt: new Date().toLocaleDateString('it-IT')
  },
  {
    id: 'm2',
    title: 'Chin Tucks & Neck Curls per Eliminare il Doppio Mento',
    url: 'https://www.youtube.com/watch?v=48S8N66Xf04',
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/48S8N66Xf04',
    category: 'posture',
    description: 'Dimostrazione pratica per allineare il collo ed eliminare la postura da schermo.',
    addedAt: new Date().toLocaleDateString('it-IT')
  },
  {
    id: 'm3',
    title: 'Esercizi Orbicolari e Metodo Cucchiai Freddi per lo Sguardo',
    url: 'https://www.youtube.com/watch?v=1E4H4qC6g2s',
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/1E4H4qC6g2s',
    category: 'eyes',
    description: 'Massaggio ed allenamento perioculare per decontrarre lo sguardo e ridurre occhiaie.',
    addedAt: new Date().toLocaleDateString('it-IT')
  }
];

export const INITIAL_PROGRESS_PHOTOS: ProgressPhoto[] = [
  {
    id: 'p1',
    date: new Date().toLocaleDateString('it-IT'),
    title: 'Foto Base Giorno 1 - Postura e Mascella',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    provider: 'unsplash-placeholder',
    category: 'mewing',
    notes: 'Foto di riferimento iniziale per verificare progressi mascella e simmetria.'
  }
];

export const storageHelper = {
  // Water Log
  getWaterLog: (): WaterLog => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WATER);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return { currentLiters: 0, targetLiters: 2.5, history: [] };
  },
  saveWaterLog: (log: WaterLog) => {
    try {
      localStorage.setItem(STORAGE_KEYS.WATER, JSON.stringify(log));
    } catch (e) {}
  },

  // Checklist with daily auto-reset logic
  getChecklist: (): { items: ChecklistItem[]; date: string } => {
    const today = new Date().toISOString().split('T')[0];
    const savedDate = localStorage.getItem(STORAGE_KEYS.CHECKLIST_DATE);

    try {
      const data = localStorage.getItem(STORAGE_KEYS.CHECKLIST);
      if (data && savedDate === today) {
        let loadedItems: ChecklistItem[] = JSON.parse(data);
        // Clean up chin tucks, cura dei capelli, and update respirazione nasale if present from prior state
        loadedItems = loadedItems
          .filter(i => !i.title.toLowerCase().includes('chin tuck') && !i.title.toLowerCase().includes('cura dei capelli'))
          .map(i => i.title.toLowerCase().includes('respirazione nasale') ? { ...i, title: 'Masticare gomma per 15/20 minuti' } : i);
        return { items: loadedItems, date: today };
      }
    } catch (e) {}

    // Reset for a new day
    localStorage.setItem(STORAGE_KEYS.CHECKLIST_DATE, today);
    localStorage.setItem(STORAGE_KEYS.CHECKLIST, JSON.stringify(INITIAL_CHECKLIST));
    return { items: INITIAL_CHECKLIST, date: today };
  },

  saveChecklist: (items: ChecklistItem[]) => {
    try {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem(STORAGE_KEYS.CHECKLIST, JSON.stringify(items));
      localStorage.setItem(STORAGE_KEYS.CHECKLIST_DATE, today);
    } catch (e) {}
  },

  // Photos
  getProgressPhotos: (): ProgressPhoto[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROGRESS_PHOTOS);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return INITIAL_PROGRESS_PHOTOS;
  },
  saveProgressPhotos: (photos: ProgressPhoto[]) => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS_PHOTOS, JSON.stringify(photos));
    } catch (e) {}
  },

  // Media Links
  getMediaLinks: (): MediaLink[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MEDIA_LINKS);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return DEFAULT_MEDIA_LINKS;
  },
  saveMediaLinks: (links: MediaLink[]) => {
    try {
      localStorage.setItem(STORAGE_KEYS.MEDIA_LINKS, JSON.stringify(links));
    } catch (e) {}
  },

  // Store Products
  getStoreProducts: (): StoreProductVideo[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STORE_PRODUCTS);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return DEFAULT_STORE_PRODUCTS;
  },
  saveStoreProducts: (products: StoreProductVideo[]) => {
    try {
      localStorage.setItem(STORAGE_KEYS.STORE_PRODUCTS, JSON.stringify(products));
    } catch (e) {}
  },

  // Streak
  getStreak: (): number => {
    try {
      const val = localStorage.getItem(STORAGE_KEYS.STREAK);
      if (val) return parseInt(val, 10) || 1;
    } catch (e) {}
    return 1;
  },
  saveStreak: (streak: number) => {
    try {
      localStorage.setItem(STORAGE_KEYS.STREAK, streak.toString());
    } catch (e) {}
  },

  // Ordine Start Date (1D Counter)
  getOrdineStartDate: (): string | null => {
    try {
      return localStorage.getItem(STORAGE_KEYS.ORDINE_START_DATE);
    } catch (e) {
      return null;
    }
  },
  saveOrdineStartDate: (dateIso: string | null) => {
    try {
      if (dateIso) {
        localStorage.setItem(STORAGE_KEYS.ORDINE_START_DATE, dateIso);
      } else {
        localStorage.removeItem(STORAGE_KEYS.ORDINE_START_DATE);
      }
    } catch (e) {}
  }
};
