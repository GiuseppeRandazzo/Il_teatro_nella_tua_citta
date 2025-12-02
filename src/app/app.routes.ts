import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home_page/home_page.component';
import { ShowDetailPageComponent } from './pages/show_detail_page/show_detail_page.component';
import { FavoritesPageComponent } from './pages/favorites_page/favorites_page.component';
import { SearchPageComponent } from './pages/search_page/search_page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'spettacolo/:id', component: ShowDetailPageComponent },
  { path: 'preferiti', component: FavoritesPageComponent },
  { path: 'ricerca', component: SearchPageComponent },
  { path: '**', redirectTo: '' },
];
