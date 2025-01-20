import React from 'react';
import '../Header/header.scss';
import HeaderWrap from './Wrap/HeaderWrap';
import Button from '../../components/Button/Button';

export const Header = () => {
  const scroll = () => {
    const header = document.getElementById('header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header id="header">
        <div className="container">
          <HeaderWrap />
        </div>
      </header>
      <Button className="yakor__btn" onClick={scroll}>
        ↑
      </Button>
    </>
  );
};

export default Header;
