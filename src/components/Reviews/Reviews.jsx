import { useState, useEffect } from 'react';
import * as API from '../API/FilmsAPI';
// import { Link } from 'react-router-dom';

export default function Reviews({ id }) {
  const [review, setRewiev] = useState(null);

  useEffect(() => {
    API.fetchReviews(id).then(setRewiev);
  }, [id]);

  return (
    <ul>
      {review &&
        review.map(({ id, author, content }) => (
          <li key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
}

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import * as API from '../API/FilmsAPI';

// export default function Cast({ id }) {
//   const [cast, setCast] = useState(null);

//   useEffect(() => {
//     API.fetchCast(id).then(setCast);
//   }, [id]);

//   return (
//     <>
//       {cast && (
//         <ul>
//           {cast.map(({ profile_path, name, character, id }) => (
//             <li key={id}>
//               {profile_path ? (
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
//                   alt={name}
//                 />
//               ) : (
//                 <img
//                   src="https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png"
//                   alt={name}
//                 />
//               )}
//               <p>{name}</p>
//               <p>{character}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }
