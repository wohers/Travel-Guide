import React from 'react';
import FilterItem from './FilterItem';

const FilterDropdown = ({ items, onItemClick }) => {
    return (
        <ul className="filter__container-ul">
            {items.map((item, index) => (
                <FilterItem
                    key={index}
                    children={item.children}
                    dataOrder={item.dataOrder}
                    onClick={() => onItemClick(item.dataOrder)}
                />
            ))}
        </ul>
    );
};

export default FilterDropdown;