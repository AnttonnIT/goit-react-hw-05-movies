import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getQueryMovies } from 'utils/API';

export function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getMovies = async () => {
      const response = await getQueryMovies(query);
      setMovies(response.results);
    };
    getMovies();
  }, [query]);
  //
  const onSearch = query => {
    setQuery(query);
  };
  return (
    <>
      <SearchBar onSearch={onSearch} />
      {movies.length > 0 && <MovieList location={location} movies={movies} />}
    </>
  );
}
