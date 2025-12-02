import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Show } from '../../models/show.interface';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './show_card.component.html',
  styleUrl: './show_card.component.scss',
})
export class ShowCardComponent {
  @Input() show!: Show;

  constructor(private favoritesService: FavoritesService) {}

  isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.show.id);
  }

  toggleFavorite(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.favoritesService.toggleFavorite(this.show);
  }
}
