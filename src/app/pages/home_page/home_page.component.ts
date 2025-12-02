import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { ShowsService } from '../../services/shows.service';
import { CityService } from '../../services/city.service';
import { Show } from '../../models/show.interface';
import { ShowCardComponent } from '../../components/show_card/show_card.component';
import { CitySelectorComponent } from '../../components/city_selector/city_selector.component';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ShowCardComponent, CitySelectorComponent],
  templateUrl: './home_page.component.html',
  styleUrl: './home_page.component.scss',
})
export class HomePageComponent implements OnInit, OnDestroy {
  shows: Show[] = [];
  filteredShows: Show[] = [];
  loading: boolean = true;
  selectedCity: string = 'Tutte';
  private routerSubscription?: Subscription;

  constructor(
    private showsService: ShowsService,
    private cityService: CityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Resetta la città a "Tutte" ogni volta che si carica la home
    this.cityService.setCity('Tutte');

    this.loadShows();

    // Ascolta i cambiamenti di città
    this.cityService.getSelectedCity().subscribe((city) => {
      this.selectedCity = city;
      this.filterShowsByCity();
    });

    // Ascolta i click sulla stessa route per resettare il filtro
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url === '/' || event.url === '') {
          this.cityService.setCity('Tutte');
        }
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
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
