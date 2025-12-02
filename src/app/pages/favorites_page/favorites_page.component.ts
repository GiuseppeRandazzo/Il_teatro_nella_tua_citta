import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { Show } from '../../models/show.interface';
import { ShowCardComponent } from '../../components/show_card/show_card.component';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ShowCardComponent],
  templateUrl: './favorites_page.component.html',
  styleUrl: './favorites_page.component.scss',
})
export class FavoritesPageComponent implements OnInit {
  favorites: Show[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  // Ricarica i preferiti quando si torna sulla pagina
  ngDoCheck(): void {
    const currentFavorites = this.favoritesService.getFavorites();
    if (currentFavorites.length !== this.favorites.length) {
      this.favorites = currentFavorites;
    }
  }
}
