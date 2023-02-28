import { getTrendingMovies } from '../../utils/API';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}> {title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
