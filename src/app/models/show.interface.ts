export interface Show {
  id: number;
  titolo: string;
  descrizione: string;
  genere: string;
  teatro: string;
  citta: string;
  cast: string[];
  date: string[];
  prezzoMin: number;
  prezzoMax: number;
  immagine: string;
  inEvidenza: boolean;
}
