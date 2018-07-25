import { Routes } from "@angular/router";
import { MyMovieComponentComponent } from '../my-movie-component/my-movie-component.component';
import{ MyHomeComponentComponent } from '../my-home-component/my-home-component.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent }
];