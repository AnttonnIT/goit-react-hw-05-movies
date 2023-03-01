import { getMovieReviews } from 'utils/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <ul>
      {loading && <Loader />}
      {error && <h2>Oops, something went wrong... </h2>}

      {reviews &&
        reviews.length > 0 &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <b> Author: {author}</b> <p>{content}</p>
          </li>
        ))}
      {reviews && reviews.length === 0 && (
        <p>We don`t have any reviews for this movie</p>
      )}
    </ul>
  );
}
