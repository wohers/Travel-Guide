import React from 'react';

const FilterButton = ({ onClick, children }) => {
    return (
        <button className="filter__container-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default FilterButton;