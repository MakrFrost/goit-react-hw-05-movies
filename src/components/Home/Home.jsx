// import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getTrandingFilms from '../API/FilmsAPI';

export default function Homepage() {
  const [film, setFilm] = useState('');

  useEffect(() => {
    getTrandingFilms().then(film => setFilm(film.data.results));
  }, []);

  // console.log(genre_ids.name);
  // console.log(film[0].genre_ids);
  // console.log(film);

  if (!film) {
    return;
  }

  // console.log(film);
  return (
    <>
      <h1>Trending now!</h1>
      {film.map(({ title, id }) => (
        <>
          <Link to={`movies/${id}`}>
            <li key={id}>{title}</li>
          </Link>
        </>
      ))}
    </>
  );
}
