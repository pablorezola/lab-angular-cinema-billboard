import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'services/movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
    movies: any

  constructor(public movieService:MoviesService) { 
    this.movies = this.movieService.getMovies()

  
  }

  ngOnInit() {
  }

}
