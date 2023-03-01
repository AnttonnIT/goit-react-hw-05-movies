import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'utils/API';
import { Loader } from 'components/Loader/Loader';
import {
  AdditionalInformationContainer,
  MovieDetailsContainer,
} from './MovieDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';

export function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const response = await getMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getMovie(movieId);
  }, [movieId]);

  const { title, vote_average, overview, posterUrl, genres, id, release_date } =
    movie;

  return (
    <>
      <section>
        {loading && <Loader />}
        {error && <h2>Oops, something went wrong... </h2>}
        {id && (
          <>
            <BackLink to={backLinkHref} />
            <MovieDetailsContainer>
              <div>
                <img
                  src={posterUrl}
                  alt={title}
                  width={'400px'}
                  height={'500px'}
                />
              </div>
              <div>
                <h1>
                  {title} ({release_date.slice(0, 4)})
                </h1>

                <p>
                  <b> User score:</b> {vote_average}
                </p>
                <p>{overview}</p>
                <p>
                  <b>Genres:</b> {genres.map(genre => genre.name).join(', ')}
                </p>
              </div>
            </MovieDetailsContainer>
            <AdditionalInformationContainer>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link to="cast" state={location.state}>
                    cast
                  </Link>
                </li>

                <li>
                  <Link to="reviews" state={location.state}>
                    reviews
                  </Link>
                </li>
              </ul>
            </AdditionalInformationContainer>
            <Outlet />
          </>
        )}
      </section>
    </>
  );
}
