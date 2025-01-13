import React from 'react';

const SearchInput = ({ placeholder }) => {
    return (
        <input
            type="text"
            id="searchInput"
            className="main__search-input"
            placeholder={placeholder}
        />
    );
};

export default SearchInput;