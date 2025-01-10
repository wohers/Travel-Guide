import React from 'react'

import logo from '../../../assets/images/main-logo.png';

const FooterLogo = () => {
  return (
    <div className="footer__logo-cont">
        <img src={logo} alt="FooterLogo" className="footer__logo" />
        <p className="footer__p">© 2006-2024 All Rights Reserved</p>
  </div>
  )
}

export default FooterLogo