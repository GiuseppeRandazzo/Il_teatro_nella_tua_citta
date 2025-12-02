import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowsService } from '../../services/shows.service';
import { Show } from '../../models/show.interface';
import { ShowCardComponent } from '../../components/show_card/show_card.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ShowCardComponent],
  templateUrl: './search_page.component.html',
  styleUrl: './search_page.component.scss',
})
export class SearchPageComponent implements OnInit {
  allShows: Show[] = [];
  filteredShows: Show[] = [];

  // Filtri
  searchText: string = '';
  selectedGenre: string = '';
  selectedCity: string = '';
  selectedTeatro: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;

  // Liste per i dropdown
  genres: string[] = [];
  cities: string[] = [];
  teatri: string[] = [];

  loading: boolean = true;
  hasSearched: boolean = false;

  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {
    this.loadShows();
  }

  loadShows(): void {
    this.loading = true;
    this.showsService.getAllShows().subscribe({
      next: (data) => {
        this.allShows = data;
        this.extractFilters();
        this.loading = false;
      },
      error: (error) => {
        console.error('Errore nel caricamento degli spettacoli:', error);
        this.loading = false;
      },
    });
  }

  extractFilters(): void {
    // Estrai generi unici
    this.genres = [...new Set(this.allShows.map((show) => show.genere))].sort();

    // Estrai città uniche
    this.cities = [...new Set(this.allShows.map((show) => show.citta))].sort();

    // Estrai teatri unici
    this.teatri = [...new Set(this.allShows.map((show) => show.teatro))].sort();
  }

  search(): void {
    this.hasSearched = true;
    this.filteredShows = this.allShows.filter((show) => {
      // Filtro testo (cerca in titolo e descrizione)
      const matchesText =
        !this.searchText ||
        show.titolo.toLowerCase().includes(this.searchText.toLowerCase()) ||
        show.descrizione.toLowerCase().includes(this.searchText.toLowerCase());

      // Filtro genere
      const matchesGenre = !this.selectedGenre || show.genere === this.selectedGenre;

      // Filtro città
      const matchesCity = !this.selectedCity || show.citta === this.selectedCity;

      // Filtro teatro
      const matchesTeatro = !this.selectedTeatro || show.teatro === this.selectedTeatro;

      // Filtro prezzo minimo
      const matchesMinPrice = this.minPrice === null || show.prezzoMax >= this.minPrice;

      // Filtro prezzo massimo
      const matchesMaxPrice = this.maxPrice === null || show.prezzoMin <= this.maxPrice;

      return (
        matchesText &&
        matchesGenre &&
        matchesCity &&
        matchesTeatro &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  }

  resetFilters(): void {
    this.searchText = '';
    this.selectedGenre = '';
    this.selectedCity = '';
    this.selectedTeatro = '';
    this.minPrice = null;
    this.maxPrice = null;
    this.filteredShows = [];
    this.hasSearched = false;
  }
}
