import { useState } from 'react';

export default function Movie({ onSearch }) {
  const [value, setValue] = useState('');

  const submitOnForm = event => {
    event.preventDefault();

    if (value.trim() === '') {
      alert('Write field to search films!');
      return;
    }

    onSearch(value);
    setValue('');
  };
  const onInputChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  return (
    <form onSubmit={submitOnForm}>
      <button type="submit"> Find film!</button>

      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        onChange={onInputChange}
        value={value}
      />
    </form>
  );
}
