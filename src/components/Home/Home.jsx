import { getTrendingMovies } from '../../utils/API';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

export function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error && <h2>Oops, something went wrong... </h2>}
      <MovieList movies={movies} location={location} />
    </section>
  );
}
