import { Routes, Route } from 'react-router-dom';

import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { MoviesPage } from './MoviesPage/MoviesPage';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import {
//   getTrendingMovies,
//   getQueryMovies,
//   getMovieDetails,
//   getMovieCredits,
//   getMovieReviews,
// } from '../utils/API';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
