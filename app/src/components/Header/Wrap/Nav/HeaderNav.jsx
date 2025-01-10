import React from 'react';
import Button from '../../../Button/Button';

const HeaderNav = ({ isMenuOpen }) => {
  return (
    <nav className="header__nav">
      <ul className={`header__menu ${isMenuOpen ? 'active' : ''}`} id="menu">
        <li className="header__item">
          <Button className="header__link">Главная</Button>
        </li>   
        <li className="header__item">
          <Button className="header__link">Карта</Button>
        </li>
        <li className="header__item">
          <Button className="header__link">Достопримечательности</Button>
        </li>
        <li className="header__item">
          <Button className="header__link">Контакты</Button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;