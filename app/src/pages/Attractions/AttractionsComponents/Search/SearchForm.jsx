import React from 'react';
import SearchInput from './SearchInput';

const SearchForm = () => {
  return (
    <form className="main__search-form">
      <SearchInput placeholder="Искать здесь..." />
    </form>
  );
};

export default SearchForm;
