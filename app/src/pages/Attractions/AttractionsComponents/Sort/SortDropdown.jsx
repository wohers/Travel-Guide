import React from 'react';
import SortItem from './SortItem';

const SortDropdown = ({ items, onItemClick }) => {
    return (
        <ul className="sort__container-ul">
            {items.map((item, index) => (
                <SortItem
                    key={index}
                    children={item.children}
                    dataCategory={item.dataCategory}
                    onClick={() => onItemClick(item.dataCategory)}
                />
            ))}
        </ul>
    );
};

export default SortDropdown;