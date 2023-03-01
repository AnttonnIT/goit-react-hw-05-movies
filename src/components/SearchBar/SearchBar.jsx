import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function SearchBar({ onSearch }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [query, setQuery] = useState(searchQuery ?? '');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    onSearch(searchQuery);
  }, [onSearch, searchQuery]);

  const handleQuerySearch = e => {
    setQuery(e.target.value.trim().toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ query });
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
