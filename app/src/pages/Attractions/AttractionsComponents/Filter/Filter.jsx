import React, { useState } from 'react';
import FilterButton from './FilterButton';
import FilterDropdown from './FilterDropdown';

const Filter = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filterItems = [
        { children: 'Лайки ↑', dataOrder: 'desc' },
        { children: 'Лайки ↓', dataOrder: 'asc' },
    ];

    const handleItemClick = (order) => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="filter">
            <div className="filter__container">
                <FilterButton
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    children="Фильтр"
                />
                <div
                    className={`filter__container-dropdown ${isDropdownOpen ? 'show' : ''
                        }`}
                >
                    <FilterDropdown items={filterItems} onItemClick={handleItemClick} />
                </div>
            </div>
        </div>
    );
};

export default Filter;