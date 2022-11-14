import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=ab5292459fe4dd5c494b0166be76ca45';

// export const FilmAPI = () => {
//   return <div>kino</div>;
// };

export default function getTrandingFilms() {
  const responce = axios.get(`${API_URL}/trending/movie/week?${API_KEY}`);
  return responce;
}

export const fetchGenres = () => {
  const responceGenres = axios.get(
    `${API_URL}genre/movie/list?${API_KEY}&language=en-US`
  );
  // .then(responceGenres => {
  //   if (!responceGenres.ok) {
  //     throw new Error(responceGenres.status);
  //   }
  //   return responceGenres.json();
  // })
  // .catch(error => {
  //   error;
  // });
  return responceGenres;
};

// export const fetchGenres = () => {
//   const responceGenres = axios.get(
//     `${API_URL}genre/movie/list?${API_KEY}&language=en-US`
//   );
// .then(responceGenres => {
//   if (!responceGenres.ok) {
//     throw new Error(responceGenres.status);
//   }
//   return responceGenres.json();
// })
// .catch(error => {
//   error;
// });
//   return responceGenres;
// };

// function FetchPixabay(find, page) {
//   const responce = axios.get(
//     `${API_URL}?q=${find}&page=${page}&key=${API_KEY}&${API_SETTINGS}`
//   );
//   return responce;
// }
