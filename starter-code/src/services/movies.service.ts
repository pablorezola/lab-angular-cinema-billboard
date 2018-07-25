import { Injectable } from '@angular/core';
import {movies} from "../../src/sample-movies";
export interface Movies {
  id: Number,
  title: String,
  poster: String,
  synopsis: String,
  genres: Array <String>,
  director: String,
  actors: Array<String>,
  hours: Array<String>,
  room: Number
}

@Injectable()
export class MoviesService {
   Movies: Array<object> = movies

  constructor() { }

  getMovies(){
    return this.Movies;
  }

  getMovie(id){
    return this.Movies[id];

  }

}
