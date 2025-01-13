import React from 'react';

const FilterItem = ({ children, dataOrder, onClick }) => {
    return (
        <li>
            <a href="#" className="filter__container-link" data-order={dataOrder} onClick={onClick}>
                {children}
            </a>
        </li>
    );
};

export default FilterItem;