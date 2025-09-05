import { Component, inject } from '@angular/core';
import { MoviesService } from '../../../../core/services/movies-service';

import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-movie-details',
  imports: [ButtonComponent],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails {
  private moviesService = inject(MoviesService);

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    console.log(this.route.snapshot);

    const movieId: string = this.route.snapshot.params['id'];

    this.moviesService.getMovieById(movieId);
  }

  selectedMovie = this.moviesService.selectedMovie;

  onClickLikeDislike(type: 'LIKE' | 'DISLIKE') {
    this.moviesService.addLikeDislike(type);
  }

  goToEditMovie() {
    this.router.navigate(['edit-movie', this.selectedMovie().id]);
  }
}
