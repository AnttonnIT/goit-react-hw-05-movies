import PropTypes from 'prop-types';
import { useState } from 'react';

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleQuerySearch = e => {
    setQuery(e.target.value.trim().toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSearch(query);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="query" onChange={handleQuerySearch} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
