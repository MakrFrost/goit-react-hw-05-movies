import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ab5292459fe4dd5c494b0166be76ca45';

export const getTrandingFilms = async () => {
  const responce = await axios.get(
    `${API_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return responce;
};

export const fetchFilmById = async id => {
  const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchCast = async id => {
  const responce = await axios.get(
    `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return responce.data.cast;
};

export const fetchReviews = async id => {
  const responce = await axios.get(
    `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return responce.data.results;
};

export const fetchMovieQuery = async query => {
  const responce = await axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=true`
  );
  return responce.data.results;
};
