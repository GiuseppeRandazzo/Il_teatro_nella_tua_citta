import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../models/show.interface';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  private apiUrl = 'http://localhost:3000/spettacoli';

  constructor(private http: HttpClient) {}

  getAllShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.apiUrl);
  }

  getShowById(id: number): Observable<Show> {
    return this.http.get<Show>(`${this.apiUrl}/${id}`);
  }

  getFeaturedShows(): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.apiUrl}?inEvidenza=true`);
  }

  getShowsByCity(citta: string): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.apiUrl}?citta=${citta}`);
  }

  getShowsByGenre(genere: string): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.apiUrl}?genere=${genere}`);
  }
}
