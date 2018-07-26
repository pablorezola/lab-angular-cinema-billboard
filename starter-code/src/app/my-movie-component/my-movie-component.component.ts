import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movie
    constructor(public getM: MoviesService, public route: ActivatedRoute) { }
  
  ngOnInit() {
      this.route.params
        .subscribe((params) => this.movie = this.getM.getMovie(Number(params.id)))
    }
  
  }
