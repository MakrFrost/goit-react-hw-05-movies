import { Routes, Route } from 'react-router-dom';
import Movie from './Movie/Movie';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Movie />} />
    </Routes>
  );
};
