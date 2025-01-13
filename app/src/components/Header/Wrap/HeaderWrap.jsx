import React, { useState } from 'react';
import logo from '../../../assets/images/main-logo.png';
import HeaderNav from './Nav/HeaderNav';
import HeaderLogo from './Nav/HeaderLogo';


const HeaderWrap = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className="header__wrap">
      <HeaderLogo src={logo} alt="Logo" className="header__logo" />
      <div className="header__box">
        <div className="header__menu-toggle" id="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <HeaderNav isMenuOpen={isMenuOpen} /> 
      </div>
    </div>
  );
};

export default HeaderWrap;