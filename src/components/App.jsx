import { Routes, Route } from 'react-router-dom';

// import Navigation from './Navigation/Navigation';
// import Movie from './Movie/Movie';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

//! сделать главную хомпейдж, которая принимает все фильмы топовые, обернуть их всех в ссылки,
//! при клике на которую осуществляется переход на films page, туда с этим фильмом передавать данные, жанры, и т.д.
//! *лядская машрутизация
//! сделать кнопку => назад

// // Get all movie enpoint
// const APIURL =
//   'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

// // start api fetch here, followed by show movies data
// getApiData(APIURL, showMovies);

// /**
//  * Get Api Date
//  * param {string} url   Apo endpoint url
//  * param {function} cb  callback function after api fetched
//  */
// async function getApiData(url, cb) {
//   const resp = await fetch(url);
//   const respData = await resp.json();
//   // console.log(respData);
//   cb(respData);
// }

// /**
//  * Show all Movies from api fetch
//  * param {array}    Araay of movies data
//  */
// function showMovies(movies) {
//   movies.results.forEach((movie, i) => {
//     const { id, poster_path, title, vote_average, overview, genre_ids } = movie;

//     showMovie(i, id, title);
//   });
// }

// /**
//  * Show a single movie from api fetch single movie
//  * param {number} i movies array index
//  * param {number} id    a movie id
//  * param {string} title current movie title
//  */
// function showMovie(i, id, title) {
//   const movApi = `https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1`;
//   getApiData(movApi, movie => showGenres.call(null, movie, i, id, title));
// }

// /**
//  * Show all Genres information of a movie
//  * param {object} single movie object
//  * param {number} i movies array index
//  * param {number} id    a movie id
//  * param {string} title current movie title
//  */
// function showGenres(movie, i, id, title) {
//   console.log('\n' + (i + 1) + '.');
//   console.log('movie id: ' + id + ', movie title: ' + title);

//   movie.genres.forEach(genre => {
//     const { id, name } = genre;
//     console.log('genre id: ' + id + ', genre name: ' + name);
//   });
// }

//
