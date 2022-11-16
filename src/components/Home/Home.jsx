// import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../API/FilmsAPI';

export default function Homepage() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    API.getTrandingFilms().then(film => setFilm(film.data.results));
  }, []);

  if (!film) {
    return;
  }

  // console.log(film);

  return (
    <>
      <h1>Trending now!</h1>
      <div className="wrap-home">
        {film.length > 0 &&
          film.map(({ title, id }) => (
            <React.Fragment key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </React.Fragment>
          ))}
      </div>
    </>
  );
}
