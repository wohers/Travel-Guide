import React from 'react';
import Button from '../../../Button/Button';
import { Link } from 'react-router-dom';

const HeaderNav = ({ isMenuOpen }) => {
  return (
    <nav className="header__nav">
      <ul className={`header__menu ${isMenuOpen ? 'active' : ''}`} id="menu">
        <li className="header__item">
          <Link to="/Travel-Guide">
            <Button className="header__link">Главная</Button>
          </Link>
        </li>
        <li className="header__item">
          <a href="/#map">
            <Button className="header__link">Карта</Button>
          </a>
        </li>
        <li className="header__item">
          <Link to="/attractions">
            <Button className="header__link">Достопримечательности</Button>
          </Link>
        </li>
        <li className="header__item">
          <Link to="/about">
            <Button className="header__link">Контакты</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
