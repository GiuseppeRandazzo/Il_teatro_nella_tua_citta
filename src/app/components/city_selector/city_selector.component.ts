import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city_selector.component.html',
  styleUrl: './city_selector.component.scss',
})
export class CitySelectorComponent implements OnInit {
  cities: string[] = [];
  selectedCity: string = 'Tutte';

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cities = this.cityService.availableCities;
    this.cityService.getSelectedCity().subscribe((city) => {
      this.selectedCity = city;
    });
  }

  selectCity(city: string): void {
    this.cityService.setCity(city);
  }
}
