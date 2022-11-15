import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <Link to="/">Home Page</Link>
      <Link to="/movies">Find Film</Link>
    </>
  );
}
