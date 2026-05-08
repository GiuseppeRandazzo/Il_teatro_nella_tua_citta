# Il teatro nella tua Città

🌍 **[Live Demo: Visita l'applicazione live su GitHub Pages](https://giusepperandazzo.github.io/Il_teatro_nella_tua_citta/)**

Applicazione web Angular per la scoperta e gestione di spettacoli teatrali nelle principali città italiane.

## Descrizione

**Il teatro nella tua Città** è un'applicazione moderna e responsive sviluppata con Angular 21 che permette agli utenti di:

- Esplorare spettacoli teatrali in programmazione
- Filtrare gli spettacoli per città, genere, teatro e fascia di prezzo
- Salvare i propri spettacoli preferiti
- Visualizzare informazioni dettagliate su cast, date e location
- Effettuare ricerche avanzate con criteri multipli

## Funzionalità Principali

- **Homepage**: Visualizzazione di tutti gli spettacoli con filtro rapido per città
- **Dettaglio Spettacolo**: Informazioni complete su cast, date disponibili, teatro e prezzi
- **Preferiti**: Sistema di salvataggio locale degli spettacoli preferiti (localStorage)
- **Ricerca Avanzata**: Form con filtri multipli per trovare lo spettacolo perfetto
- **Design Responsive**: Ottimizzato per desktop, tablet e mobile
- **Tema Teatrale**: Palette colori FireBrick e OrangeRed con font eleganti

## Tecnologie Utilizzate

- **Angular 21.0.0** - Framework principale con architettura standalone components
- **TypeScript 5.9.2** - Linguaggio di programmazione
- **RxJS 7.8.0** - Gestione asincrona con Observable
- **json-server 1.0.0-beta.3** - Mock REST API per il backend
- **SCSS** - Styling avanzato con preprocessore CSS
- **Google Fonts** - Playfair Display e Lato
- **LocalStorage API** - Persistenza dei preferiti

## Installazione e Avvio

### Prerequisiti

- Node.js (versione 18 o superiore)
- npm o yarn

### Clona il Repository

```bash
git clone https://github.com/GiuseppeRandazzo/teatro_in_citta_progetto_finale_angular_its.git
cd teatro_in_citta_progetto_finale_angular_its
```

### Installa le Dipendenze

```bash
npm install
```

### Avvia il Server JSON (Backend Mock)

```bash
npm run server
```

Il server sarà disponibile su `http://localhost:3000`

### Avvia l'Applicazione Angular

In un nuovo terminale:

```bash
npm start
```

L'applicazione sarà disponibile su `http://localhost:4200`

## Struttura del Progetto

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/              # Barra di navigazione
│   │   ├── show_card/           # Card riutilizzabile per spettacoli
│   │   └── city_selector/       # Selettore città
│   ├── pages/
│   │   ├── home_page/           # Homepage con griglia spettacoli
│   │   ├── show_detail_page/    # Pagina dettaglio spettacolo
│   │   ├── favorites_page/      # Lista preferiti
│   │   └── search_page/         # Ricerca avanzata
│   ├── services/
│   │   ├── shows.service.ts     # Gestione chiamate API
│   │   ├── favorites.service.ts # Gestione preferiti
│   │   └── city.service.ts      # Gestione filtro città
│   └── models/
│       └── show.interface.ts    # Interfaccia TypeScript
└── db.json                      # Database mock con spettacoli

```

## Palette Colori

- **FireBrick (#B22222)** - Colore principale (navbar, pulsanti, accenti)
- **OrangeRed (rgba(255, 69, 0))** - Link attivi nella navbar
- **Gold (#DAA520)** - Prezzi e dettagli
- **Dark Red (#8B0000)** - Sfumature e gradienti

## Città Disponibili

Milano • Roma • Torino • Napoli • Firenze • Udine • Trieste

## Scripts Disponibili

- `npm start` - Avvia il server di sviluppo Angular
- `npm run server` - Avvia json-server sulla porta 3000
- `npm run build` - Compila il progetto per la produzione
- `npm test` - Esegue i test unitari

## Configurazione

### Modifica del Database

Per aggiungere o modificare spettacoli, edita il file `db.json` e riavvia json-server.

### Aggiunta Nuove Città

Modifica l'array `availableCities` in `src/app/services/city.service.ts`

## Responsive Design

L'applicazione è completamente responsive con breakpoint a 768px per una visualizzazione ottimale su:

- Desktop (layout a griglia multipla)
- Tablet (layout a 2 colonne)
- Mobile (layout singola colonna)

## Contributi

Questo è un progetto finale per ITS. Per suggerimenti o segnalazioni, apri una issue su GitHub.

## Autore

**Giuseppe Randazzo**

## Licenza

Progetto realizzato per scopi didattici - ITS

## Ringraziamenti

Progetto sviluppato come lavoro finale del corso Angular presso ITS.
