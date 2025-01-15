import React, { useState } from 'react';
import SortButton from './SortButton';
import SortDropdown from './SortDropdown';

const Sort = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortItems = [
    { children: 'Все статьи', dataCategory: 'all' },
    { children: 'Парки', dataCategory: 'parks' },
    { children: 'Музеи', dataCategory: 'monuments' },
    { children: 'Церкви', dataCategory: 'churches' },
    { children: 'Памятники', dataCategory: 'landmark' },
    { children: 'База отдыха', dataCategory: 'base' },
  ];

  const handleItemClick = category => {
    console.log('Выбрана категория:', category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__container">
        <SortButton
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          children="Сортировать"
        />
        <div
          className={`sort__container-dropdown ${isDropdownOpen ? 'show' : ''}`}
        >
          <SortDropdown items={sortItems} onItemClick={handleItemClick} />
        </div>
      </div>
    </div>
  );
};

export default Sort;
