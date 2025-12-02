import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsService } from '../../services/shows.service';
import { CityService } from '../../services/city.service';
import { Show } from '../../models/show.interface';
import { ShowCardComponent } from '../../components/show_card/show_card.component';
import { CitySelectorComponent } from '../../components/city_selector/city_selector.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ShowCardComponent, CitySelectorComponent],
  templateUrl: './home_page.component.html',
  styleUrl: './home_page.component.scss',
})
export class HomePageComponent implements OnInit {
  shows: Show[] = [];
  filteredShows: Show[] = [];
  loading: boolean = true;
  selectedCity: string = 'Tutte';

  constructor(private showsService: ShowsService, private cityService: CityService) {}

  ngOnInit(): void {
    this.loadShows();

    // Ascolta i cambiamenti di città
    this.cityService.getSelectedCity().subscribe((city) => {
      this.selectedCity = city;
      this.filterShowsByCity();
    });
  }

  loadShows(): void {
    this.loading = true;
    this.showsService.getAllShows().subscribe({
      next: (data) => {
        this.shows = data;
        this.filterShowsByCity();
        this.loading = false;
      },
      error: (error) => {
        console.error('Errore nel caricamento degli spettacoli:', error);
        this.loading = false;
      },
    });
  }

  filterShowsByCity(): void {
    if (this.selectedCity === 'Tutte') {
      this.filteredShows = this.shows;
    } else {
      this.filteredShows = this.shows.filter((show) => show.citta === this.selectedCity);
    }
  }
}
