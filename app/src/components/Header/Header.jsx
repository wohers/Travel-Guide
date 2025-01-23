import React from 'react';
import '../Header/header.scss';
import HeaderWrap from './Wrap/HeaderWrap';

export const Header = ({ id }) => {
  return (
    <header id={id}>
      <div className="container">
        <HeaderWrap />
      </div>
    </header>
  );
};

export default Header;
