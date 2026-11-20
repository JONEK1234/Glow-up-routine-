export type NoteSectionViewId =
  | 'bussola_mente'
  | 'studia_oggi'
  | 'asimmetria'
  | 'asimmetria_masticazione'
  | 'asimmetria_grasso_viso'
  | 'postura_occhi'
  | 'sonno_posizioni'
  | 'peli_incarniti'
  | 'shampoo_texture'
  | 'capelli_texture'
  | 'capelli_mullet'
  | 'palestra_grasso'
  | 'regali_natale'
  | 'diabete_glicemia'
  | 'prevenzione_eta';

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
  // 0. LA MIA BUSSOLA & DA STUDIARE OGGI
  // =========================================================================
  {
    id: 'bussola_mente_master',
    viewId: 'bussola_mente',
    sectionTitle: 'La Mia Bussola: Tranquillità & Versione Migliore',
    sectionBadgeColor: 'emerald',
    subTitle: 'Obiettivo Pace, Anti-Paranoie, Cortisolo & 6 Pilastri (Zero Fissa Sodio)',
    text: 'Tranquillità pace interiore smarrito paranoie ansia versione migliore organizzazione asse HPA cortisolo aldosterone ritenzione idrica acne salicilico SPF acqua 2.5 3 litri senza fissazione sodio 10000 passi messy wavy dimagrire asimmetria.'
  },
  {
    id: 'studia_oggi_19nov',
    viewId: 'studia_oggi',
    sectionTitle: 'Da Studiare Oggi (19 Nov)',
    sectionBadgeColor: 'amber',
    subTitle: 'Riepilogo Unico Modifiche e Aggiunte di Oggi (19 Novembre · 14 Schede)',
    text: 'Da studiare oggi modifiche aggiunte ripasso 19 novembre bussola tranquillità asimmetria taglio corto 1600 kcal diabete stacking 6U 3U 9U 4U 3.5U flessioni pump 2 fasi ossa piezoelettricità sole vitamina D Henneman pochi kg leve lunghe momento torcente curl manubri cavi spalla alzata micromovimenti schiena AMPK mTOR camminata stesso giorno repeated bout effect crampi giorno 1 rate coding sussulti al limite cedimento terza serie lavoro manuale.'
  },

  // =========================================================================
  // 1. LA MIA ASIMMETRIA & ORTODONZIA
  // =========================================================================
  {
    id: 'asimmetria_generale',
    viewId: 'asimmetria',
    sectionTitle: 'La mia asimmetria',
    sectionBadgeColor: 'cyan',
    subTitle: 'Analisi Facciale, Test Masseteri, Grasso, Postura & 13 Foto Aggiornate',
    text: 'Analisi e piano integrato per la simmetria facciale strategia invertita test al tatto masseteri denti stretti lato destro forte lato sinistro fino debole quale lato sviluppare vs definire molari leva corta ipertrofia tetto genetico ATM lipolisi compartimenti adiposi facciali guance pre-auricolare sottomentoniera postura cranio-cervicale chin tucks neck curls ritenzione idrica sodio potassio 3 fasi 13 foto aggiornamento.'
  },
  {
    id: 'asimmetria_grasso_taglio',
    viewId: 'asimmetria_grasso_viso',
    sectionTitle: 'La mia asimmetria • Grasso & Taglio',
    sectionBadgeColor: 'cyan',
    subTitle: 'Pinch Test (1,75 m / 73 kg), Taglio Corto, Alfa-2/Beta-2 & Strategia "Faccia Fine" (Giugno)',
    text: 'Test del pizzico pinch test grasso sottocutaneo acqua extracellulare glicogeno 3 grammi guancia bassa sottomento addome basso recettori adrenergici alfa 2 beta 2 cAMP HSL lipasi 1.75 m 73 kg taglio corto low fade illusione ottica visual framing Delboeuf cornice faccia fine 1600 kcal 115 120 g proteine mTORC1 TEF 10000 passi NEAT beta ossidazione zero cortisolo sleeper build giugno 16 anni elastina collagene GH IGF-1.'
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
    id: 'peli_strategia_10_giorni',
    viewId: 'peli_incarniti',
    sectionTitle: 'Peli incarniti viso',
    sectionBadgeColor: 'emerald',
    subTabId: 'strategia_10_giorni',
    subTitle: '6. Cadenza 7–10 Giorni, Meccanica Nikai (Baffetti), Diabete & Mantenimento',
    text: 'Diabete rigenerazione cicatrizzazione pelle lenti microlesione lama ogni 7-10 giorni settimana e mezza 3 volte al mese confronto 3-4 giorni pelo lungo morbido intasa testina accorcia prima Nikai a secco poi Gillette monolama dall alto verso basso zero pressione zero contropelo due testine dentate forbice meccanica 0.4 0.5 mm punta fuori poro baffetti labbro superiore piatto senza premere no 90 gradi 30 gradi brufoletto acne giovanile zigomi guance alte collo mascella mese completo 28-30 giorni cheratinociti cutibacterium acnes pH fase mantenimento acido salicilico 2-3 sere settimana crema solare ogni 2-3 giorni Nikai liscio perfetto ritorni fiamma brufoli isolati 2-3 giorni.'
  },
  {
    id: 'peli_foto_rasatura',
    viewId: 'peli_incarniti',
    sectionTitle: 'Peli incarniti viso',
    sectionBadgeColor: 'emerald',
    subTabId: 'foto_rasatura',
    subTitle: '7. Foto Prima & Dopo Rasatura (Sinistro, Frontale, Destro + Backup)',
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
  // 6B. CAPELLI MOSSI TEXTURED MESSY MULLET
  // =========================================================================
  {
    id: 'mullet_fisica_spessore',
    viewId: 'capelli_mullet',
    sectionTitle: 'Capelli mossi Textured Messy Mullet',
    sectionBadgeColor: 'teal',
    subTabId: 'fisica_spessore',
    subTitle: '1. Fisica Mosso 2B, Capelli Fini Più Spessi & Piano Alimentare Pratico',
    text: 'Capelli mossi tipo 2B sezione ovale ponti disolfuro legami a idrogeno memoria training 3 4 settimane bubble hair capelli fini spessi pantenolo vitamina B5 proteine idrolizzate cheratina colazione pranzo spuntino cena uova cotte yogurt greco limone vitamina C ferro ferritina semi di zucca zinco noci brasiliane selenio salmone sgombro omega 3 acqua sonno cortisolo.'
  },
  {
    id: 'mullet_crescita_buchi',
    viewId: 'capelli_mullet',
    sectionTitle: 'Capelli mossi Textured Messy Mullet',
    sectionBadgeColor: 'teal',
    subTabId: 'crescita_buchi',
    subTitle: '2. Crescita, "Buchi" Davanti, Copertura Fronte & Obiettivo Massimo',
    text: 'Buchi davanti spazi vuoti sfoltitura forbici sfoltitrici effetto a ciabatta dietro promosso crescita 1 1.2 cm mese 2 3 settimane transizione 1.5 2 cm peso gravitazionale tenda tegola coprire fronte volume spaziale obiettivo massimo non toccare ciuffo.'
  },
  {
    id: 'mullet_taglio_barbiere',
    viewId: 'capelli_mullet',
    sectionTitle: 'Capelli mossi Textured Messy Mullet',
    sectionBadgeColor: 'teal',
    subTabId: 'taglio_barbiere',
    subTitle: '3. Taglio Textured Messy Mullet (Wash-and-Wear) & Copione Barbiere',
    text: 'Textured Messy Mullet Textured Wavy Crop Surf-Style Messy Cut Wash-and-Wear Bedhead Texture barbiere scalatura strategica point cutting evitare forbici sfoltitrici davanti sudore palestra casco.'
  },
  {
    id: 'mullet_prodotti_scienza',
    viewId: 'capelli_mullet',
    sectionTitle: 'Capelli mossi Textured Messy Mullet',
    sectionBadgeColor: 'teal',
    subTabId: 'prodotti_scienza',
    subTitle: '4. Prodotti, Dosi Esatte, Opaco vs Bagnato & Tecnica Ibrida',
    text: 'Balsamo Pantene con o senza risciacquo crema ricci spray sale marino solfato magnesio cloruro sodio crema finale pasta modellante lucida pomade base acqua cera opaca caolino bentonite polvere volumizzante silice sililata ottica luce clumping tecnica ibrida compromesso perfetto dosi pisello chicco di riso.'
  },
  {
    id: 'mullet_lavaggio_asciugatura',
    viewId: 'capelli_mullet',
    sectionTitle: 'Capelli mossi Textured Messy Mullet',
    sectionBadgeColor: 'teal',
    subTabId: 'lavaggio_asciugatura',
    subTitle: '5. Guida Minuto per Minuto: Doccia, Pettine Denti Larghi, Calore/Velocità & Diffusore',
    text: 'Shampoo acqua tiepida balsamo tamponare maglietta cotone scrunching pettine a denti larghi solo bagnati umidi mai asciutti hover diffusing testa in giù velocità 1 minima calore medio dorso mano 3 5 cm colpo aria fredda 5 secondi trucco pantene chicco di riso 2 3 gocce acqua cremina trasparente pettine a pinza 3D.'
  },
  {
    id: 'mullet_mattina_secco',
    viewId: 'capelli_mullet',
    sectionTitle: 'Capelli mossi Textured Messy Mullet',
    sectionBadgeColor: 'teal',
    subTabId: 'mattina_secco',
    subTitle: '6. Mattina a Secco (Senza Lavarli): Balsamo+Acqua, Polvere & Durata 16h',
    text: 'Mattina a secco senza lavare balsamo con acqua effetto bagnato chicco riso 3 5 gocce emulsione mani umide spruzzino polvere volumizzante a secco radici corona combo mattutina durata tutto il giorno post casco vento palestra mani via.'
  },
  {
    id: 'mullet_cute_forfora',
    viewId: 'capelli_mullet',
    sectionTitle: 'Capelli mossi Textured Messy Mullet',
    sectionBadgeColor: 'teal',
    subTabId: 'cute_forfora',
    subTitle: '7. Salute Cute, Calendario Settimanale Lavaggi, Forfora vs Buildup',
    text: 'Forfora cute sebo Malassezia più aria meno calore irritante finta forfora buildup cera polvere spray sale marino secchezza Head and Shoulders massaggio polpastrelli calendario settimanale 2 3 shampoo settimana solo acqua post palestra.'
  },
  {
    id: 'mullet_video_ispirazione',
    viewId: 'capelli_mullet',
    sectionTitle: 'Capelli mossi Textured Messy Mullet',
    sectionBadgeColor: 'teal',
    subTabId: 'video_ispirazione',
    subTitle: '8. Tutti i 6 Video TikTok di Riferimento',
    text: '6 link video TikTok taglio stile diffusore ordine prodotti cera spray pettine phon senza beccuccio.'
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
  {
    id: 'palestra_flessioni_pump',
    viewId: 'palestra_grasso',
    sectionTitle: 'Palestra e organizzazione per perdere grasso',
    sectionBadgeColor: 'orange',
    subTabId: 'flessioni_riposo',
    subTitle: '12# Info: Flessioni Giorni Off — Pump vs Ipertrofia, SNC & Protocollo 2 Fasi',
    text: 'Flessioni piegamenti giorni off riposo richiamo sanguigno pump iperemia ossido nitrico vs ipertrofia miofibrillare mTORC1 MPS 48h sistema nervoso centrale SNC gomiti spalle tendini protocollo 2 fasi casa 3 5 ripetizioni 4 5 RIR scapole spinta palestra.'
  },
  {
    id: 'palestra_henneman_leve',
    viewId: 'palestra_grasso',
    sectionTitle: 'Palestra e organizzazione per perdere grasso',
    sectionBadgeColor: 'orange',
    subTabId: 'henneman_leve_compensi',
    subTitle: '13# Info: Principio di Henneman ("Pochi kg"), Curl Manubri vs Cavi & Leve Lunghe/Compensi',
    text: 'Principio di Henneman size principle pochi kg peso massimo autoregolazione unità motorie alta soglia curl manubri curl cavi carrucola curva resistenza gravità eccentrica momento torcente forza braccio di leva arti braccia lunghe spalla di alzata elevazione scapolare trapezio micromovimenti schiena estensione lombare slancio inerziale volante tecnica.'
  },
  {
    id: 'palestra_stesso_giorno',
    viewId: 'palestra_grasso',
    sectionTitle: 'Palestra e organizzazione per perdere grasso',
    sectionBadgeColor: 'orange',
    subTabId: 'pesi_camminata_giorno',
    subTitle: '14# Info: Stesso Giorno Pesi + Camminata — AMPK vs mTOR, Timing & Limite Recupero',
    text: 'Stesso giorno pesi e camminata concurrent training effetto interferenza AMPK mTORC1 zero blocco crescita fibre tipo I acidi grassi GLUT4 ritorno venoso pulizia articolare dopo i pesi prima riscaldamento 10 minuti mattina sera separati ricomposizione.'
  },
  {
    id: 'palestra_rbe_terza_serie',
    viewId: 'palestra_grasso',
    sectionTitle: 'Palestra e organizzazione per perdere grasso',
    sectionBadgeColor: 'orange',
    subTabId: 'rbe_limite_terza_serie',
    subTitle: '15# Info: Crampi Giorno 1 (RBE), Tecnica Filtro, Sussulti Rate Coding & Cedimento 3ª Serie',
    text: 'Primo giorno esplosivo crampi contratture riflesse repeated bout effect RBE adattamento strutturale tecnica filtro tendini gomiti colonna sussulti di sforzo al limite rate coding frequenza motoneuroni ioni idrogeno H fosfato inorganico Pi calcio Ca2+ fatica centrale periferica cedimento solo terza serie prima seconda buffer 1 2 ripetizioni.'
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
  },
  {
    id: 'diabete_frullato_bolo',
    viewId: 'diabete_glicemia',
    sectionTitle: 'Diabete, glicemia e palestra',
    sectionBadgeColor: 'rose',
    subTabId: 'frullato_bolo',
    subTitle: 'Nota 8: Frullato Mattutino (40-41g CHO), I:C & Analisi Bolo 7,5 U',
    text: 'Frullato mattutino latte parzialmente scremato banana whey 40 41 grammi carboidrati I:C teorico 1:11 1:12 3.5 U resistenza mattutina cortisolo 7.5 U 5.3 farmacocinetica latenza 0-20 min picco 30-90 min Control-IQ IOB diabetologo.'
  },
  {
    id: 'diabete_mattina_digiuno',
    viewId: 'diabete_glicemia',
    sectionTitle: 'Diabete, glicemia e palestra',
    sectionBadgeColor: 'rose',
    subTabId: 'mattina_digiuno',
    subTitle: 'Nota 9: Mattina Senza Colazione (~120 mg/dL, Dawn Effect) & Grasso',
    text: 'Mattina senza colazione digiuno 120 mg/dL effetto alba dawn effect cortisolo GH glicogenolisi gluconeogenesi basale GLUT4 perdita grasso bilancio calorico 24h scuola bustine.'
  },
  {
    id: 'diabete_proteine_finestra',
    viewId: 'diabete_glicemia',
    sectionTitle: 'Diabete, glicemia e palestra',
    sectionBadgeColor: 'rose',
    subTabId: 'proteine_finestra',
    subTitle: 'Nota 10: Timing Frullato (Mer/Gio/Ven), Destino Proteine & Finestra Anabolica',
    text: 'Timing frullato mercoledì giovedì venerdì post workout GLUT4 destino delle proteine smentita prof vena porta aminoacidi pool sistemico MPS sintesi proteica muscolare 24 48 ore finestra anabolica mTOR.'
  },
  {
    id: 'diabete_dati_reali_19nov',
    viewId: 'diabete_glicemia',
    sectionTitle: 'Diabete, glicemia e palestra',
    sectionBadgeColor: 'rose',
    subTabId: 'dati_reali_19nov',
    subTitle: 'Nota 11: Dati Reali 19/11 — Frullato (6U+3U) & Mensa (9U+4U+3,5U · 36 min Stacking)',
    text: 'Dati reali 19 novembre boli manuali Control-IQ 7.17 4.75 07:51 6U frullato glucosio fruttosio lattosio 20-30 min 09:25 281 +3U 12:50 152 rapporto 1:6.5 1:7 1:11 1:12 07:00 12:00 pre-bolo 10-15 min mensa pasta pesce 2 bruschette piatto impanato CCK colecistochinina 9U 14:03 252 +4U 14:39 321 36 minuti +3.5U 16.5U insulin stacking IOB onda lunga AMPK GLUT4 picco 355 crollo 80 90 palestra dottoressa.'
  },

  // =========================================================================
  // 10. PREVENZIONE ETÀ, OSSA, OSSIGENO, CAPELLI, COLLAGENE & DIABETE
  // =========================================================================
  {
    id: 'prevenzione_eta_articolazioni',
    viewId: 'prevenzione_eta',
    sectionTitle: 'Prevenzione età, ossa, collagene & diabete',
    sectionBadgeColor: 'lime',
    subTabId: 'eta_articolazioni',
    subTitle: '1. Ossa Fortificate Negli Anni (Wolff & Piezoelettricità), Mionuclei & Schiena',
    text: 'Prevenzione età articolazioni ossa fortificate vecchio collagene tipo I idrossiapatite calcio fosfato osteoblasti osteoclasti meccanotrasduzione legge di Wolff micro-deformazione potenziale elettrico piezoelettrico canalicoli osteociti sclerostina osso corticale trabecolare picco massa ossea 16 30 anni osteopatia diabetica AGEs vitamina D3 K2 magnesio sarcopenia osteopenia super-aging mionuclei schiena osmosi 10000 passi.'
  },
  {
    id: 'prevenzione_massa_lavoro',
    viewId: 'prevenzione_eta',
    sectionTitle: 'Prevenzione età, ossa, collagene & diabete',
    sectionBadgeColor: 'lime',
    subTabId: 'massa_lavoro',
    subTitle: '2. Organizzazione: Mantenere Massa, Lavoro Manuale (Fibre IIx) & 3 Età',
    text: 'Organizzazione mantenere massa lavoro manuale pesante palestra principio SAID economia energetica capillari angiogenesi mitocondri fibre tipo I fibre rapide IIa IIx mionuclei memoria muscolare diabete ipoglicemia ritardata microinfusore basale zuccheri rapidi cortisolo usura asimmetrica cedimento vietato richiamo minimo minimum effective dose 2-3 sedute brevi giovane adulto anziano.'
  },
  {
    id: 'prevenzione_diabete_scienza',
    viewId: 'prevenzione_eta',
    sectionTitle: 'Prevenzione età, ossa, collagene & diabete',
    sectionBadgeColor: 'lime',
    subTabId: 'diabete_prevenzione',
    subTitle: '3. Diabete Sul Lungo Periodo: AGEs, Microcircolo, GLUT4 & Controlli',
    text: 'Diabete tipo 1 lungo periodo Time in Range variabilità glicemica glicazione collagene AGEs microcircolazione capillari ossido nitrico NO guarigione muscolo spugna metabolica GLUT4 indipendente insulina sensibilità 24-48 ore controlli annuali TSH ferritina vitamina D microalbuminuria.'
  },
  {
    id: 'prevenzione_ossigeno_bici',
    viewId: 'prevenzione_eta',
    sectionTitle: 'Prevenzione età, ossa, collagene & diabete',
    sectionBadgeColor: 'lime',
    subTabId: 'ossigeno_bici',
    subTitle: '4. Ossigeno, Saturazione (SpO2 vs VO2max), Diabete & Perché i Vecchi Durano in Bici',
    text: 'Ossigeno saturazione SpO2 saturimetro 95 99 VO2max catena ossigeno polmoni cuore capillari mitocondri angiogenesi biogenesi mitocondriale HbA1c emoglobina glicata rilascio ossigeno ossido nitrico respirazione nasale diaframmatica zona 2 perché i vecchi durano più in bici fibre tipo I lente ossidative fibre tipo II rapide economia grassi glicogeno paradosso solo bici GLUT4.'
  },
  {
    id: 'prevenzione_capelli_eta',
    viewId: 'prevenzione_eta',
    sectionTitle: 'Prevenzione età, ossa, collagene & diabete',
    sectionBadgeColor: 'lime',
    subTabId: 'capelli_prevenzione',
    subTitle: '5. Prevenzione Capelli Negli Anni: Follicoli, Microcircolo & Diabete',
    text: 'Capelli prevenzione età follicolo papilla dermica ciclo anagen catagen telogen fibrosi perifollicolare DHT miniaturizzazione microcircolazione capillari diabete AGEs tiroide TSH ferritina vitamina D massaggio polpastrelli calore no fumo dermatologo tricologo.'
  },
  {
    id: 'prevenzione_collagene_dieta',
    viewId: 'prevenzione_eta',
    sectionTitle: 'Prevenzione età, ossa, collagene & diabete',
    sectionBadgeColor: 'lime',
    subTabId: 'collagene_dieta',
    subTitle: '6. Collagene Scientifico, Tutti gli Alimenti & Dieta Pratica Anti-AGEs',
    text: 'Collagene cos è scientificamente tripla elica glicina prolina idrossiprolina tipo I II III assorbimento fibroblasti vitamina C rame zinco zolfo brodo d ossa ossobuco pesce pelle salmone sardine uova cotte kiwi peperoni semi di zucca noci brasiliane omega 3 olio evo cotture umide limone aceto spezie curcuma rosmarino ordine piatto fibre proteine carboidrati peptidi idrolizzati.'
  },
  {
    id: 'prevenzione_luce_vitamina_d',
    viewId: 'prevenzione_eta',
    sectionTitle: 'Prevenzione età, ossa, collagene & diabete',
    sectionBadgeColor: 'lime',
    subTabId: 'luce_vitamina_d',
    subTitle: '7. Digiuno Mattutino, Luce Solare & Vitamina D Sicura (UVB vs UVA)',
    text: 'Digiuno mattutino uscire senza colazione cortisolo GH lipolisi camminata GLUT4 diabete luce solare mattina occhi ipRGCs SCN ritmo circadiano melatonina sonno vitamina D UVB 280 315 nm UVA 315 400 nm 7-deidrocolesterolo colecalciferolo 25 OH D calcitriolo magnesio K2 auto-limitazione lumisterolo tachisterolo regola ombra protezione SPF 30 50 inverno ottobre marzo.'
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
