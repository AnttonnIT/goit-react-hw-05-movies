import { getMovieReviews } from 'utils/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    getCast();
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <b> Author: {author}</b> <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
