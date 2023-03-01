import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'utils/API';
import { Loader } from 'components/Loader/Loader';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
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

  return (
    <>
      <section>
        {loading && <Loader />}
        {error && <h2>Oops, something went wrong... </h2>}
        <BackLink to={backLinkHref} />
        {movie.id && <MovieDetails movie={movie} />}
      </section>
    </>
  );
}
