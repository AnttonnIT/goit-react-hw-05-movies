import { getMovieCast } from 'utils/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const response = await getMovieCast(movieId);
        setCast(response);
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
      {cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
              width={'200px'}
              height={'300px'}
            />
          )}

          <p> {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
