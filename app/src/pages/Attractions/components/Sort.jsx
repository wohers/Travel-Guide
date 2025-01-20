import React from 'react';
import { useState } from 'react';
import Button from '../../../components/Button/Button';

const Sort = ({ onSortChange }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="sort">
      <div className="sort__container">
        <Button className="sort__container-button" onClick={toggleDropdown}>
          Сортировать
        </Button>
        <div
          className={`sort__container-dropdown${isDropdownVisible ? ' sort__container-dropdown-show' : ''}`}
        >
          <ul className="sort__container-ul">
            {['all', 'parks', 'monuments', 'churches', 'landmark', 'base'].map(
              (category) => (
                <li key={category}>
                  <Button
                    className="sort__container-link"
                    onClick={(e) => {
                      e.preventDefault();
                      onSortChange(category);
                      setDropdownVisible(false);
                    }}
                  >
                    {category === 'all'
                      ? 'Все статьи'
                      : category === 'parks'
                        ? 'Парки'
                        : category === 'monuments'
                          ? 'Музеи'
                          : category === 'churches'
                            ? 'Церкви'
                            : category === 'landmark'
                              ? 'Памятники'
                              : 'База отдыха'}
                  </Button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sort;
