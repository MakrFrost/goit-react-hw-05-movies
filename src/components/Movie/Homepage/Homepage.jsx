export default function Homepage({ films }) {
  console.log(films);
  return (
    <>
      {films.map(({ title, id }) => (
        <h2 key={id}>{title}</h2>
      ))}
    </>
  );
}
