import PropTypes from 'prop-types';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  AdditionalInformationContainer,
  MovieDetailsContainer,
  MovieDetailsContent,
} from './MovieDetails.styled';

export function MovieDetails({ movie }) {
  const location = useLocation();
  const { title, vote_average, overview, posterUrl, genres, release_date } =
    movie;
  return (
    <>
      <MovieDetailsContainer>
        <div>
          <img src={posterUrl} alt={title} width={'400px'} height={'500px'} />
        </div>
        <MovieDetailsContent>
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
        </MovieDetailsContent>
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
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    posterUrl: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ).isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};
