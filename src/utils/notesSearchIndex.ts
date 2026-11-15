export type NoteSectionViewId =
  | 'asimmetria'
  | 'asimmetria_masticazione'
  | 'postura_occhi'
  | 'sonno_posizioni'
  | 'peli_incarniti'
  | 'shampoo_texture'
  | 'capelli_texture'
  | 'palestra_grasso'
  | 'regali_natale'
  | 'diabete_glicemia';

export interface NoteSearchEntry {
  id: string;
  viewId: NoteSectionViewId;
  sectionTitle: string;
  sectionBadgeColor: string;
  subTabId?: string;
  subTitle: string;
  text: string;
}

export interface SubNoteMatch {
  entry: NoteSearchEntry;
  snippet: string;
  matchCount: number;
}

export interface GroupedNoteSearchResult {
  viewId: NoteSectionViewId;
  sectionTitle: string;
  sectionBadgeColor: string;
  totalMatches: number;
  subMatches: SubNoteMatch[];
}

export const NOTES_SEARCH_INDEX: NoteSearchEntry[] = [
  // =========================================================================
  // 1. LA MIA ASIMMETRIA & ORTODONZIA
  // =========================================================================
  {
    id: 'asimmetria_generale',
    viewId: 'asimmetria',
    sectionTitle: 'La mia asimmetria',
    sectionBadgeColor: 'cyan',
    subTitle: 'Analisi Facciale, Test Masseteri & Strategia Invertita',
    text: 'Analisi e piano integrato per la simmetria facciale strategia invertita test al tatto masseteri denti stretti lato destro forte lato sinistro fino debole masticazione 60% 65% a sinistra riposo a destra jawline simmetrica entro giugno percorso naturale 8-12 mesi foto viso attuale definito nota le differenze schema asse facciale deviazione mediana arcata destra espansa arcata sinistra compressa dimagrimento drenaggio sodio acqua.'
  },
  {
    id: 'asimmetria_ortodonzia',
    viewId: 'asimmetria',
    sectionTitle: 'La mia asimmetria',
    sectionBadgeColor: 'cyan',
    subTitle: 'Ortodonzia, Gnatologia, Bite & Espansione Palato (RPE/MSE)',
    text: 'Ortodonzia gnatologo bite deprogrammante placca resina espansione del palato RPE MSE allineamento denti 18-30 mesi spostamento attivo mandibola articolazione temporo-mandibolare ATM click scatti infiammazione.'
  },
  {
    id: 'asimmetria_masticazione_tabella',
    viewId: 'asimmetria_masticazione',
    sectionTitle: 'La mia asimmetria • Masticazione',
    sectionBadgeColor: 'amber',
    subTabId: 'tabella',
    subTitle: 'Dieta Moderna & Gomme Dure per Definizione',
    text: 'Dieta moderna cibi morbidi gomme dure masticazione falim mastica greca jawliner forza masticatoria ipertrofia masseteri definizione angolo mandibolare.'
  },
  {
    id: 'asimmetria_masticazione_protocollo',
    viewId: 'asimmetria_masticazione',
    sectionTitle: 'La mia asimmetria • Masticazione',
    sectionBadgeColor: 'amber',
    subTabId: 'protocollo',
    subTitle: 'Protocollo Pratico da 10 Minuti (65% Sinistra)',
    text: 'Protocollo 10 minuti gomma da masticare 65% lato sinistro massetere sinistro piatto asimmetria muscolare recuperare spessore senza sovraccaricare mandibola.'
  },
  {
    id: 'asimmetria_masticazione_anatomia',
    viewId: 'asimmetria_masticazione',
    sectionTitle: 'La mia asimmetria • Masticazione',
    sectionBadgeColor: 'amber',
    subTabId: 'anatomia',
    subTitle: 'Anatomia Masseteri & Spiegazione al Tatto',
    text: 'Massetere destro gonfio forte sporgente grasso sottocutaneo lato destro lato sinistro sottile osso piatto spiegazione al tatto.'
  },

  // =========================================================================
  // 2. MENTO, POSTURA E OCCHI
  // =========================================================================
  {
    id: 'postura_occhi_confronto',
    viewId: 'postura_occhi',
    sectionTitle: 'Mento, postura e occhi',
    sectionBadgeColor: 'amber',
    subTitle: 'Confronto Foto Postura Normale vs Buona & Occhi',
    text: 'Mento postura e occhi confronto fotografico postura normale abituale vs postura buona da mantenere sguardo sclera visibilità palpebre hooded eyes sopracciglia hunter eyes rilassamento tensione armonia.'
  },
  {
    id: 'postura_occhi_chintuck',
    viewId: 'postura_occhi',
    sectionTitle: 'Mento, postura e occhi',
    sectionBadgeColor: 'amber',
    subTitle: 'Retroposizione del Capo (Chin Tuck) & 3 Tecniche Scoperte',
    text: 'Chin tuck retroposizione capo nuca dritta mento rientrato petto aperto spalle indietro memoria muscolare assetto corporeo banco scuola presenza corpo apertura toracica lato a favore.'
  },

  // =========================================================================
  // 3. SONNO E POSIZIONI
  // =========================================================================
  {
    id: 'sonno_schiena',
    viewId: 'sonno_posizioni',
    sectionTitle: 'Sonno e posizioni',
    sectionBadgeColor: 'indigo',
    subTabId: 'schiena',
    subTitle: 'A Pancia in Su (Posizione Supina)',
    text: 'Dormire a pancia in su posizione supina respiro profondo rilascio muscolare totale deglutizione cuscino sottile cervicale simmetria viso zero schiacciamento guance ritenzione liquidi.'
  },
  {
    id: 'sonno_lato',
    viewId: 'sonno_posizioni',
    sectionTitle: 'Sonno e posizioni',
    sectionBadgeColor: 'indigo',
    subTabId: 'lato',
    subTitle: 'Assetto Corretto Di Lato (Fianco)',
    text: 'Dormire di lato fianco linea naso ombelico spalla libera cuscino alto tra le ginocchia federa seta evitare compressione mascella asimmetria.'
  },

  // =========================================================================
  // 4. PELI INCARNITI VISO
  // =========================================================================
  {
    id: 'peli_mattina',
    viewId: 'peli_incarniti',
    sectionTitle: 'Peli incarniti viso',
    sectionBadgeColor: 'emerald',
    subTabId: 'mattina',
    subTitle: '1. Massaggio Mattina & Sequenza Detersione',
    text: 'Massaggio mattutino 30 60 secondi acqua tiepida calda movimenti circolari polpastrelli pressione zig-zag pori tappo sebo detergente delicato bottiglia ghiaccio crema idratante massaggio linfatico crema solare.'
  },
  {
    id: 'peli_barba',
    viewId: 'peli_incarniti',
    sectionTitle: 'Peli incarniti viso',
    sectionBadgeColor: 'emerald',
    subTabId: 'barba',
    subTitle: '2. Routine Barba (Rasatura, Nivea, Lamette & Salicilico)',
    text: 'Routine rasatura barba dimagrire grasso facciale decompressione follicolare acqua calda crema Nivea tubetto vaso lasciare agire 2-3 minuti lamette BIC 3 lame rasoio sicurezza monolama Gillette mai contropelo risciacquo acqua fredda crema idratante Garnier acido salicilico.'
  },
  {
    id: 'peli_informazioni',
    viewId: 'peli_incarniti',
    sectionTitle: 'Peli incarniti viso',
    sectionBadgeColor: 'emerald',
    subTabId: 'informazioni',
    subTitle: '3. Informazioni, Turnover Cellulare & Tempi di Guarigione',
    text: 'Tempi guarigione rigenerazione pelle 24-48 ore sollievo immediato 2-3 settimane stop nuovi peli incarniti acido salicilico 1-2 mesi 28-40 giorni turnover cellulare macrofagi macchiette scure noduli sottocutanei costanza 30 giorni 60 giorni.'
  },
  {
    id: 'peli_metodo_diviso',
    viewId: 'peli_incarniti',
    sectionTitle: 'Peli incarniti viso',
    sectionBadgeColor: 'emerald',
    subTabId: 'metodo_diviso',
    subTitle: '4. Metodo Diviso per Zone & Guida Definitiva Rasatura',
    text: 'Pausa totale 2-3 giorni detergente delicato crema solare guance monolama Gillette inclinazione 30 gradi senza premere con schiuma gel baffi rifinitore Nikai a secco non sovrapporre strumenti shaver elettrico sottomento collo WTG dall alto verso basso XTG di traverso effetto contropelo purging spurgo leave-on notturno non risciacquare acido salicilico.'
  },
  {
    id: 'peli_razor_burn',
    viewId: 'peli_incarniti',
    sectionTitle: 'Peli incarniti viso',
    sectionBadgeColor: 'emerald',
    subTabId: 'razor_burn_strategia',
    subTitle: '5. Razor Burn Follicolare Immediato & Strategia Pelle',
    text: 'Puntini rossi usciti subito dopo rasoio razor burn follicolare irritazione meccanica acuta da lama micro-abrasione poro vasodilatazione istamina mascella sottomento si sgonfia 12-24 ore non mettere acido salicilico stasera lenitivo idratante guance alte zigomo acne purging Nikai a secco brufoli attivi 3-4 settimane taglio pulito.'
  },
  {
    id: 'peli_foto_rasatura',
    viewId: 'peli_incarniti',
    sectionTitle: 'Peli incarniti viso',
    sectionBadgeColor: 'emerald',
    subTabId: 'foto_rasatura',
    subTitle: '6. Foto Prima & Dopo Rasatura (Sinistro, Frontale, Destro + Backup)',
    text: 'Diario fotografico rasatura foto prima e dopo ogni rasatura laterale sinistro frontale laterale destro differenze giorno ora automatici salvataggio memoria telefono IndexedDB salva progresso peli incarniti carica progresso backup trasferimento altro telefono.'
  },

  // =========================================================================
  // 5. GIORNI DI SHAMPOO E GIORNI TEXTURE
  // =========================================================================
  {
    id: 'shampoo_tabella',
    viewId: 'shampoo_texture',
    sectionTitle: 'Giorni di shampoo e giorni texture',
    sectionBadgeColor: 'cyan',
    subTabId: 'tabella',
    subTitle: 'Tabella Ciclo Continuo Settimanale (Scuola & Palestra)',
    text: 'Ciclo continuo lunedì martedì mercoledì giovedì venerdì sabato domenica shampoo mattina sera palestra sudore giorni texture lavaggi cute pulita.'
  },
  {
    id: 'shampoo_notti',
    viewId: 'shampoo_texture',
    sectionTitle: 'Giorni di shampoo e giorni texture',
    sectionBadgeColor: 'cyan',
    subTabId: 'notti',
    subTitle: 'Notti Critiche & Federa Cuscino',
    text: 'Federa cuscino seta pulizia cambio notti critiche sebo sudore post palestra dormire cute pulita senza rovinare piega.'
  },
  {
    id: 'shampoo_polverina',
    viewId: 'shampoo_texture',
    sectionTitle: 'Giorni di shampoo e giorni texture',
    sectionBadgeColor: 'cyan',
    subTabId: 'polverina',
    subTitle: 'Guida Polverina Texturizzante',
    text: 'Polverina texturizzante radici volume tenuta capelli fini senza appesantire quando usarla giorni no shampoo rimozione.'
  },
  {
    id: 'shampoo_refresh',
    viewId: 'shampoo_texture',
    sectionTitle: 'Giorni di shampoo e giorni texture',
    sectionBadgeColor: 'cyan',
    subTabId: 'refresh',
    subTitle: 'Considerazioni Finali — Refresh Mattutino & Scienza del Capello',
    text: 'Refresh mattutino senza shampoo cosa succede durante la notte sudore cuscino legami a idrogeno cheratina bagnare capelli acqua micro-goccia balsamo cuticole film idrolipidico.'
  },

  // =========================================================================
  // 6. CAPELLI TEXTURE FORMA PIEGA LISCIA
  // =========================================================================
  {
    id: 'capelli_diagnosi',
    viewId: 'capelli_texture',
    sectionTitle: 'Capelli texture forma piega liscia',
    sectionBadgeColor: 'sky',
    subTabId: 'diagnosi',
    subTitle: 'Diagnosi Reale Capelli Tipo 2B & Regole',
    text: 'Diagnosi capelli tipo 2B mossi piega liscia naturale spazzola phon getto freddo temperatura regole asciugatura verso crescita.'
  },
  {
    id: 'capelli_routine',
    viewId: 'capelli_texture',
    sectionTitle: 'Capelli texture forma piega liscia',
    sectionBadgeColor: 'sky',
    subTabId: 'routine_4passi',
    subTitle: 'Routine 4 Passi, Progressi & Primo Risultato (16 Foto)',
    text: 'Progresso N 1 7 foto primo risultato 16 foto piega spazzola sopra ciuffo graffiato tutorial routine 4 passi asciugatura liscia.'
  },
  {
    id: 'capelli_giorno_dopo',
    viewId: 'capelli_texture',
    sectionTitle: 'Capelli texture forma piega liscia',
    sectionBadgeColor: 'sky',
    subTabId: 'giorno_dopo',
    subTitle: 'Reset Giorno Dopo, Taglio Graffiato & Spray Sale Marino',
    text: 'Reset giorno dopo se persa piega taglio graffiato 1 mese confronto liscio forzato vs mosso 2B spray sale marino sea salt spray legami idrogeno fisica.'
  },
  {
    id: 'capelli_shampoo_balsamo',
    viewId: 'capelli_texture',
    sectionTitle: 'Capelli texture forma piega liscia',
    sectionBadgeColor: 'sky',
    subTabId: 'shampoo_vs_balsamo',
    subTitle: '7. Solo Shampoo vs. Shampoo + Balsamo (Effetto Sale Marino & Mosso)',
    text: 'Solo shampoo vs balsamo tensioattivo pH cuticola squame film idrolipidico carica elettrica negativa molecole cationiche positive pellicola protettiva effetto sale marino rigido grip attrito meccanico micro-goccia Pantene leave-in buildup risciacquo punte lunghezze mosso 2B crespo crunch mani diffusore aria senza beccuccio.'
  },
  {
    id: 'capelli_spruzzino_mullet',
    viewId: 'capelli_texture',
    sectionTitle: 'Capelli texture forma piega liscia',
    sectionBadgeColor: 'sky',
    subTabId: 'spruzzino_mullet',
    subTitle: '8. Fisica dello Spruzzino, Diluizione Balsamo & Parte Dietro Mullet',
    text: 'Spruzzino nebulizza superficie radice rompere legami a idrogeno piega notturna ciocche storte rigide mezzo asciutti pesante satura a zone solleva capelli strati interni fredda fradicia distribuisci mani pettine denti larghi micro-goccia balsamo dentro acqua spruzzino agita bene condizionata capelli dietro parte bassa mullet non bagnare ciuffo frontale corona sfumare passaggio beccuccio dita colpo aria volume lucentezza.'
  },

  // =========================================================================
  // 7. PALESTRA E ORGANIZZAZIONE PER PERDERE GRASSO
  // =========================================================================
  {
    id: 'palestra_deficit',
    viewId: 'palestra_grasso',
    sectionTitle: 'Palestra e organizzazione per perdere grasso',
    sectionBadgeColor: 'orange',
    subTabId: 'deficit',
    subTitle: 'Deficit Calorico, Ricomposizione (75 kg) & TDEE',
    text: 'Palestra organizzazione perdere grasso 16 anni 1.75 m 75 kg TDEE 2200 2400 calorie deficit infrasettimanale 700-900 kcal 1400-1600 kcal ricomposizione corporea skinny-fat.'
  },
  {
    id: 'palestra_proteine_grassi',
    viewId: 'palestra_grasso',
    sectionTitle: 'Palestra e organizzazione per perdere grasso',
    sectionBadgeColor: 'orange',
    subTabId: 'proteine_scienza',
    subTitle: 'Proteine (115-120g), Grassi & Bustine 120-130 kcal',
    text: 'Proteine 115-120g al giorno sintesi proteica grassi essenziali ormoni testosterone bustine spuntino 120-130 calorie nutrimento palestra.'
  },
  {
    id: 'palestra_strategia_volume',
    viewId: 'palestra_grasso',
    sectionTitle: 'Palestra e organizzazione per perdere grasso',
    sectionBadgeColor: 'orange',
    subTabId: 'strategia_personale',
    subTitle: 'Strategia Personale, Gestione Serie, Cortisolo & Calisthenics',
    text: 'Strategia personale 9 kg x 12 blocco 6 vs 14 warm-up bicipiti flessioni piegamenti calisthenics giorni off cortisolo catabolismo volume extra danno muscolare sistema nervoso.'
  },
  {
    id: 'palestra_pap',
    viewId: 'palestra_grasso',
    sectionTitle: 'Palestra e organizzazione per perdere grasso',
    sectionBadgeColor: 'orange',
    subTabId: 'pap_seconda_serie',
    subTitle: 'Perché la 2ª Serie è Più Leggera (PAP, Pump & Regola 3 Serie)',
    text: 'Seconda serie più leggera potenziamento post-attivazione PAP reclutamento neurale fibre rapide viscosità liquida pump vasodilatazione regola delle 3 serie efficienza.'
  },

  // =========================================================================
  // 8. COSE DA COMPRARE (I MIEI REGALI DI NATALE)
  // =========================================================================
  {
    id: 'regali_rasatura',
    viewId: 'regali_natale',
    sectionTitle: 'Cose da comprare (regali di Natale)',
    sectionBadgeColor: 'teal',
    subTabId: 'rasatura',
    subTitle: '1. Rasoio King C. Gillette + Lamette Platino (15 €)',
    text: 'Regalo natale Amazon rasoio di sicurezza King C. Gillette monolama lamette platino 15 euro rasatura senza peli incarniti.'
  },
  {
    id: 'regali_seta',
    viewId: 'regali_natale',
    sectionTitle: 'Cose da comprare (regali di Natale)',
    sectionBadgeColor: 'teal',
    subTabId: 'seta',
    subTitle: '2. Federa 100% Pura Seta Mulberry 22 Momme (49 €)',
    text: 'Federa cuscino 100% pura seta Mulberry 22 momme 49 euro Offtopic attrito zero capelli piega pelle acido salicilico.'
  },
  {
    id: 'regali_diffusore_gomme',
    viewId: 'regali_natale',
    sectionTitle: 'Cose da comprare (regali di Natale)',
    sectionBadgeColor: 'teal',
    subTabId: 'diffusore',
    subTitle: '3 & 4. Diffusore per Phon & Gomme Mewing',
    text: 'Diffusore per phon fisica micro-flussi asciugatura capelli legami a idrogeno gomme da masticare mewing alta resistenza masseteri.'
  },

  // =========================================================================
  // 9. DIABETE, GLICEMIA E PALESTRA
  // =========================================================================
  {
    id: 'diabete_calcolo_insulina',
    viewId: 'diabete_glicemia',
    sectionTitle: 'Diabete, glicemia e palestra',
    sectionBadgeColor: 'rose',
    subTabId: 'calcolo_insulina',
    subTitle: '★ IMPORTANTE: Calcolo Insulina (I:C, Regola 500 & Regola 1800)',
    text: 'Calcolo insulina rapporto insulina carboidrati I:C ICR 1:10 1:5 40 grammi carboidrati regola dei 500 totale insulina giornaliera 40-45 U/die microinfusore 40.6 41.4 50.7 1:11 1:12 60 g pasta 45 g CHO 4 unità regola dei 1800 fattore sensibilità correzione 40-45 mg/dL 240 a 120 3 unità palestra effetto spugna cortisolo stress.'
  },
  {
    id: 'diabete_calcoli_importanti',
    viewId: 'diabete_glicemia',
    sectionTitle: 'Diabete, glicemia e palestra',
    sectionBadgeColor: 'rose',
    subTabId: 'calcoli_importanti',
    subTitle: '⚡ Solo Calcoli Importanti (Numeri & Formule Rapide)',
    text: 'Solo calcoli importanti formule rapide rapporto 1:11 1:12 correzione 40-45 mg/dL media giornaliera 40-45 UI domanda diabetologo.'
  },
  {
    id: 'diabete_onda_lunga',
    viewId: 'diabete_glicemia',
    sectionTitle: 'Diabete, glicemia e palestra',
    sectionBadgeColor: 'rose',
    subTabId: 'onda_lunga',
    subTitle: 'Nota 7: Picco Ritardato "Onda Lunga" (3 Ore • Cordon Bleu)',
    text: 'Picco ritardato onda lunga 3 ore mensa 12:45 16:00 280 mg/dL patate cordon bleu impanati grassi proteine digestione lenta svuotamento gastrico errore 10 UI subito bolo sdoppiato onda doppia controllo spia 3 ore.'
  },
  {
    id: 'diabete_brucia_grassi_bustine',
    viewId: 'diabete_glicemia',
    sectionTitle: 'Diabete, glicemia e palestra',
    sectionBadgeColor: 'rose',
    subTabId: 'brucia_grassi',
    subTitle: 'Note 2 & 3: Glicemia 80-90 Brucia-Grassi & Bustine vs Cibo Vero',
    text: 'Glicemia 80-90 70-100 brucia-grassi chetosi leggera lipolisi insulina bassa bustine zucchero succo vs cibo vero spuntino pre palestra.'
  },
  {
    id: 'diabete_correggi_iper',
    viewId: 'diabete_glicemia',
    sectionTitle: 'Diabete, glicemia e palestra',
    sectionBadgeColor: 'rose',
    subTabId: 'correggi_vs_non',
    subTitle: 'Note 4, 5 & 6: Correggi 50-60, Iperglicemia >180 & Variabilità',
    text: 'Correzione 50-60 mg/dL iperglicemia sopra 180 deviazione standard variabilità glicemica dimagrimento microinfusore insulino-resistenza.'
  },
  {
    id: 'diabete_palestra_notte',
    viewId: 'diabete_glicemia',
    sectionTitle: 'Diabete, glicemia e palestra',
    sectionBadgeColor: 'rose',
    subTabId: 'palestra',
    subTitle: 'Allenamento Serale, Effetto Spugna & Notte / Colazione',
    text: 'Palestra glicogeno effetto spugna sensibilità insulinica 12-24 ore ipoglicemia notturna colazione succo protocollo.'
  }
];

function normalizeForSearch(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function buildExcerpt(entry: NoteSearchEntry, rawQuery: string): string {
  const source = `${entry.subTitle} — ${entry.text}`;
  const normSource = normalizeForSearch(source);
  const tokens = normalizeForSearch(rawQuery)
    .split(/\s+/)
    .filter((t) => t.length > 0);

  let firstIdx = -1;
  for (const token of tokens) {
    const idx = normSource.indexOf(token);
    if (idx !== -1 && (firstIdx === -1 || idx < firstIdx)) {
      firstIdx = idx;
    }
  }

  if (firstIdx === -1) {
    return source.slice(0, 125) + (source.length > 125 ? '...' : '');
  }

  const start = Math.max(0, firstIdx - 36);
  const end = Math.min(source.length, firstIdx + 100);
  const prefix = start > 0 ? '...' : '';
  const suffix = end < source.length ? '...' : '';
  return `${prefix}${source.slice(start, end)}${suffix}`;
}

export function searchNotesIndex(query: string): GroupedNoteSearchResult[] {
  const clean = normalizeForSearch(query.trim());
  if (!clean) return [];

  const tokens = clean.split(/\s+/).filter((t) => t.length > 0);
  if (tokens.length === 0) return [];

  const groupedMap = new Map<NoteSectionViewId, GroupedNoteSearchResult>();

  for (const entry of NOTES_SEARCH_INDEX) {
    const haystack = normalizeForSearch(`${entry.sectionTitle} ${entry.subTitle} ${entry.text}`);
    const allMatch = tokens.every((token) => haystack.includes(token));
    if (!allMatch) continue;

    let count = 0;
    for (const token of tokens) {
      let pos = haystack.indexOf(token);
      while (pos !== -1) {
        count += 1;
        pos = haystack.indexOf(token, pos + token.length);
      }
    }

    const subMatch: SubNoteMatch = {
      entry,
      snippet: buildExcerpt(entry, query),
      matchCount: Math.max(1, count)
    };

    const existing = groupedMap.get(entry.viewId);
    if (existing) {
      existing.subMatches.push(subMatch);
      existing.totalMatches += subMatch.matchCount;
    } else {
      groupedMap.set(entry.viewId, {
        viewId: entry.viewId,
        sectionTitle: entry.sectionTitle,
        sectionBadgeColor: entry.sectionBadgeColor,
        totalMatches: subMatch.matchCount,
        subMatches: [subMatch]
      });
    }
  }

  return Array.from(groupedMap.values()).sort((a, b) => b.totalMatches - a.totalMatches);
}
