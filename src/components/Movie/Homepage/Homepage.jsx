export default function Homepage({ films }) {
  console.log(films);
  return (
    <>
      <h1>Trending now!</h1>
      {films.map(({ title, id }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </>
  );
}
