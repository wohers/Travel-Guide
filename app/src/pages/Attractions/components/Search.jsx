import React from "react";

const Search = ({ searchQuery, onSearchChange }) => {
    return (
        <div className="main__search">
            <form className="main__search-form">
                <input
                    type="text"
                    id="searchInput"
                    className="main__search-input"
                    placeholder="Искать здесь..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Search; // Убедитесь, что используется default export