import React, { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

const Search = ({ searchQuery, onSearchChange }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        onSearchChange(query);
      }, 1000),
    [onSearchChange]
  );

  const handleInputChange = (e) => {
    const query = e.target.value;
    setLocalQuery(query);
    debouncedSearch(query);
  };

  return (
    <div className="main__search">
      <form className="main__search-form">
        <input
          className="main__search-input"
          type="text"
          value={localQuery}
          onChange={handleInputChange}
          placeholder="Искать здесь..."
        />
      </form>
    </div>
  );
};

export default Search;
