import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowsService } from '../../services/shows.service';
import { FavoritesService } from '../../services/favorites.service';
import { Show } from '../../models/show.interface';

@Component({
  selector: 'app-show-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show_detail_page.component.html',
  styleUrl: './show_detail_page.component.scss',
})
export class ShowDetailPageComponent implements OnInit {
  show: Show | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private showsService: ShowsService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadShow(id);
  }

  loadShow(id: number): void {
    this.loading = true;
    this.showsService.getShowById(id).subscribe({
      next: (data) => {
        this.show = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Errore nel caricamento dello spettacolo:', error);
        this.loading = false;
        this.router.navigate(['/']);
      },
    });
  }

  isFavorite(): boolean {
    return this.show ? this.favoritesService.isFavorite(this.show.id) : false;
  }

  toggleFavorite(): void {
    if (this.show) {
      this.favoritesService.toggleFavorite(this.show);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
