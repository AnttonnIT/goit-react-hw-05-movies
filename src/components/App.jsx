import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyledLink } from './App.styled';
import { Home } from './Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Movies } from './Movies/Movies';

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
