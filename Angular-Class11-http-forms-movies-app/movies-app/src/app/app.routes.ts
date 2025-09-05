import { Routes } from '@angular/router';
import { Home } from './feature/home/home';
import { About } from './feature/about/about';
import { MovieDetails } from './feature/movies/components/movie-details/movie-details';
import { MovieList } from './feature/movies/components/movie-list/movie-list';
import { AddMovie } from './feature/movies/components/add-movie/add-movie';
import { NotFound } from './core/components/not-found/not-found';
import { EditMovie } from './feature/movies/components/edit-movie/edit-movie';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'movies',
    //The import must be a correct path to the component ts file
    loadComponent: () =>
      import('./feature/movies/components/movie-list/movie-list').then(
        //The callback here needs to return the component class declaration
        (c) => c.MovieList,
      ),
  },
  {
    path: 'movies/:id',
    //Lazy loading done by loadComponent. It prevents loading all components if the client doesnt request them
    loadComponent: () =>
      import('./feature/movies/components/movie-details/movie-details').then(
        (c) => c.MovieDetails,
      ),
  },
  {
    path: 'add-movie',
    component: AddMovie,
  },
  {
    path: 'edit-movie/:id',
    component: EditMovie,
  },
  {
    // ** --> means catch all routes that weren't matched above
    path: '**',
    component: NotFound,
  },
];
