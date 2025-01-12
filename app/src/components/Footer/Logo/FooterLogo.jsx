import React from 'react'

import logo from '../../../assets/images/main-logo.png';
import Img from '../../ImgComponents/Img';
import Text from '../../../components/Text/Text';

const FooterLogo = () => {
  return (
    <div className="footer__logo-cont">
      <Img src={logo} alt="FooterLogo" className="footer__logo" ></Img>
      <Text className="footer__p">© 2006-2024 All Rights Reserved</Text>
    </div>
  )
}

export default FooterLogo