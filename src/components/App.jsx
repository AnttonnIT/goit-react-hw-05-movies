import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
