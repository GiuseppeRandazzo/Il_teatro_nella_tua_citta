import { Injectable } from '@angular/core';
import { Show } from '../models/show.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private storageKey = 'teatroFavorites';

  constructor() {}

  // Ottieni tutti i preferiti
  getFavorites(): Show[] {
    const favorites = localStorage.getItem(this.storageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  // Aggiungi uno spettacolo ai preferiti
  addFavorite(show: Show): void {
    const favorites = this.getFavorites();
    if (!this.isFavorite(show.id)) {
      favorites.push(show);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  // Rimuovi uno spettacolo dai preferiti
  removeFavorite(showId: number): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter((show) => show.id !== showId);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  // Verifica se uno spettacolo è nei preferiti
  isFavorite(showId: number): boolean {
    const favorites = this.getFavorites();
    return favorites.some((show) => show.id === showId);
  }

  // Toggle preferito (aggiungi/rimuovi)
  toggleFavorite(show: Show): void {
    if (this.isFavorite(show.id)) {
      this.removeFavorite(show.id);
    } else {
      this.addFavorite(show);
    }
  }
}
