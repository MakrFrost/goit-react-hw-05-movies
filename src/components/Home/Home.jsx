import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../API/FilmsAPI';

const Homepage = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    API.getTrandingFilms().then(film => setFilm(film.data.results));
  }, []);

  if (!film) {
    return;
  }

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
};
export default Homepage;
