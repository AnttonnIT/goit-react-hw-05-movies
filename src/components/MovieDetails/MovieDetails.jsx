import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'utils/API';

export function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie(movieId);
  }, [movieId]);

  const { title, vote_average, overview, posterUrl, genres, id } = movie;
  return (
    <>
      {id && (
        <div style={{ display: 'flex' }}>
          <div>
            <img src={posterUrl} alt={title} />
          </div>
          <div>
            <h1>{title}</h1>

            <p>
              <b> User score:</b> {vote_average}
            </p>
            <p>{overview}</p>
            <p>
              <b>Genres:</b> {genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
        </div>
      )}

      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>

        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
