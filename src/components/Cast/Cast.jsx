import { getMovieCast } from 'utils/API';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await getMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={name}
          />
          <p> {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
