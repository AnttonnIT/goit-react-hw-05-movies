import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { getQueryMovies } from 'utils/API';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [moviesDontFind, setMoviesDontFind] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getMovies = async () => {
      try {
        setLoading(true);
        setMoviesDontFind(false);
        const response = await getQueryMovies(query);
        if (!response.results.length) {
          setMoviesDontFind(true);
        }

        setMovies(response.results);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [query]);

  const onSearch = newQuery => {
    if (newQuery === '') return;

    setSearchParams({ query: newQuery });
  };

  return (
    <section>
      <SearchBar onSearch={onSearch} />
      {loading && <Loader />}
      {error && <h2>Oops, something went wrong... </h2>}
      {movies.length > 0 && <MovieList movies={movies} />}
      {moviesDontFind && <h2>no films found for this query - {query}</h2>}
    </section>
  );
}
