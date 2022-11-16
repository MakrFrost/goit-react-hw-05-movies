import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import SearchMovie from '../SearchMovie/SearchMovie';
import * as API from '../API/FilmsAPI';

export default function Movie() {
  const [film, setFilm] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const location = useLocation();

  const searchFilm = value => {
    setSearchParam({ query: value });
  };

  useEffect(() => {
    const query = searchParam.get('query') ?? '';
    if (query) {
      API.fetchMovieQuery(query).then(setFilm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParam]);

  return (
    <>
      <SearchMovie onSearch={searchFilm} />

      {film.length > 0 ? (
        <div className="wrap-films">
          {film.map(({ title, id }) => (
            <Link key={id} to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          ))}
        </div>
      ) : (
        <p>Enter movie name, try again</p>
      )}
    </>
  );
}

// Sorry no movies
// Try again
