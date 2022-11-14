// import { useEffect, useState } from 'react';

// import { fetchGenres } from '../API/FilmsAPI';

export default function FilmPage({ film }) {
  //     const [genres, setGenre] = useState([]);

  //   useEffect(() => {
  //     fetchGenres().then(genre => setGenre(genre.data.genres));
  // console.log(film);
  //   }, []);

  return (
    <>
      {film.map(
        ({ title, id, poster_path, vote_average, overview, genre_ids }) => {
          //   console.log('genre_ids', genre_ids);
          //   console.log('genres', genres);

          //   let genresOnScreen = genre_ids.map(id => {
          //     if (id === genres) {
          //       console.log(genres);
          //       console.log(id);
          //     }
          //   });
          //   console.log(genresOnScreen);

          // let genres = film.genre_ids.map(id => {
          //   if (film.genre_ids?.length === 0) return;
          //   let genresArray = API.getGeneresLS().genres?.find(
          //     obj => obj.id === id
          //   );

          //   return genresArray.name;
          // });

          return (
            <div key={id}>
              <img src={poster_path} alt={title} />
              <h1>{title}</h1>
              <p>User Score: {vote_average * 10 + '%'}</p>
              <h2>Owerview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <p>{}</p>
              {/* <p>{genre_ids.map(genre => genre.name + ' ')}</p> */}
            </div>
          );
        }
      )}
    </>
  );
}

//               <Link to="/">Назад<Link/>
