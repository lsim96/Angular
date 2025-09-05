import { Component, inject, OnInit } from '@angular/core';
import { MovieForm } from '../movie-form/movie-form';
import { MoviesService } from '../../../../core/services/movies-service';
import { ActivatedRoute } from '@angular/router';
import { ReviewFormValue } from '../../models/movie-model';

@Component({
  selector: 'app-edit-movie',
  imports: [MovieForm],
  templateUrl: './edit-movie.html',
  styleUrl: './edit-movie.scss',
})
export class EditMovie implements OnInit {
  private movieService = inject(MoviesService);
  private route = inject(ActivatedRoute);

  selectedMovie = this.movieService.selectedMovie;

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];

    this.movieService.getMovieById(id);
  }

  onEditMovie(value: ReviewFormValue) {
    console.log('Edit submitted');
    this.movieService.updateMovie(this.selectedMovie().id, value);
  }
}
