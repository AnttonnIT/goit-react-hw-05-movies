import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function MovieList({ movies, location }) {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    state: PropTypes.object,
  }).isRequired,
};
