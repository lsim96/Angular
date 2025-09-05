import { Component, inject } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';
import { ReviewFormValue } from '../../models/movie-model';
import { MovieForm } from '../movie-form/movie-form';

@Component({
  selector: 'app-add-movie',
  imports: [MovieForm],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.scss',
})
export class AddMovie {
  private movieService = inject(MoviesService);

  onAddMovie(value: ReviewFormValue) {
    console.log('From the add movie parent', value);
    this.movieService.createMovie(value);
  }
}
