import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city_selector.component.html',
  styleUrl: './city_selector.component.scss',
})
export class CitySelectorComponent implements OnInit {
  cities: string[] = [];
  filteredCities: string[] = [];
  searchText: string = '';
  selectedCity: string = 'Tutte';
  showError: boolean = false;

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cities = this.cityService.availableCities;
    this.filteredCities = this.cities;
    this.cityService.getSelectedCity().subscribe((city) => {
      this.selectedCity = city;
      // Non mostrare "Tutte" nella barra di ricerca
      if (city !== 'Tutte') {
        this.searchText = city;
      }
    });
  }

  onInputChange(): void {
    // Filtra i suggerimenti mentre scrivi
    const search = this.searchText.toLowerCase();
    this.filteredCities = this.cities.filter((city) => city.toLowerCase().includes(search));
    // Nascondi l'errore quando l'utente inizia a scrivere
    this.showError = false;
  }

  getAvailableCitiesText(): string {
    return this.cities.filter((city) => city !== 'Tutte').join(', ');
  }

  selectCity(): void {
    // Applica il filtro solo quando confermi (Invio o selezione)
    const search = this.searchText.trim();

    if (search === '') {
      this.cityService.setCity('Tutte');
      this.showError = false;
      return;
    }

    // Cerca corrispondenza esatta o parziale
    const exactMatch = this.cities.find((city) => city.toLowerCase() === search.toLowerCase());

    if (exactMatch) {
      this.cityService.setCity(exactMatch);
      this.searchText = exactMatch;
      this.showError = false;
    } else {
      // Mostra errore se la città non esiste
      this.showError = true;
    }
  }
}
