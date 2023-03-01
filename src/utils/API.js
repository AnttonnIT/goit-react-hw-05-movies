import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '30b387244ee5c8a51c0c80e828c65743';
const END_POINT = {
  trending: '/trending/movie/week',
  searchQuery: '/search/movie',
  movieDetails: '/movie',
  movieCast: '/credits',
  movieReviews: '/reviews',
};

export const getTrendingMovies = async (page = 1) => {
  const { data } = await axios.get(
    `${END_POINT.trending}?api_key=${API_KEY}&page=${page}`
  );

  return data;
};

export const getQueryMovies = async (query, page = 1) => {
  const { data } = await axios.get(
    `${END_POINT.searchQuery}?api_key=${API_KEY}&page=${page}&query=${query}`
  );

  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(
    `${END_POINT.movieDetails}/${id}?api_key=${API_KEY}`
  );

  const posterPath = data.poster_path;
  const posterUrl = `https://image.tmdb.org/t/p/w400/${posterPath}`;
  return { ...data, posterUrl };
};

export const getMovieCast = async id => {
  const { data } = await axios.get(
    `/movie/${id}${END_POINT.movieCast}?api_key=${API_KEY}`
  );

  return data.cast.slice(0, 10);
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `/movie/${id}${END_POINT.movieReviews}?api_key=${API_KEY}`
  );

  return data;
};
