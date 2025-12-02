import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private storageKey = 'selectedCity';
  private citySubject: BehaviorSubject<string>;

  // Lista delle città disponibili
  readonly availableCities = ['Tutte', 'Milano', 'Roma', 'Torino', 'Napoli', 'Firenze', 'Udine', 'Trieste'];

  constructor() {
    // Carica la città salvata o usa 'Tutte' come default
    const savedCity = localStorage.getItem(this.storageKey) || 'Tutte';
    this.citySubject = new BehaviorSubject<string>(savedCity);
  }

  // Observable per la città corrente
  getSelectedCity(): Observable<string> {
    return this.citySubject.asObservable();
  }

  // Ottieni la città corrente (valore sincrono)
  getCurrentCity(): string {
    return this.citySubject.value;
  }

  // Imposta una nuova città
  setCity(city: string): void {
    localStorage.setItem(this.storageKey, city);
    this.citySubject.next(city);
  }
}
