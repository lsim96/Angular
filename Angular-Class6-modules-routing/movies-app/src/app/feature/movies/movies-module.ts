import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing-module';
import { AddMovie } from './components/add-movie/add-movie';
import { MovieDetails } from './components/movie-details/movie-details';
import { MovieItem } from './components/movie-item/movie-item';
import { MovieList } from './components/movie-list/movie-list';


@NgModule({
  declarations: [
    AddMovie,
    MovieDetails,
    MovieItem,
    MovieList
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
