import React from 'react';

import tg from '../../../assets/images/tg-icon.png';
import inst from '../../../assets/images/ins-icon.png';
import vk from '../../../assets/images/vk-icon.png';
import Img from '../../../components/ImgComponents/Img';
import Text from '../../../components/Text/Text';

const FooterInfo = () => {
  return (
    <div className="footer__info">
      <div className="footer__icon">
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
          <Img src={vk} alt="VK" className="footer__icon-vk" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src={inst} alt="Instagram" className="footer__icon-inst" />
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img src={tg} alt="Telegram" className="footer__icon-tg" />
        </a>
      </div>
      <Text className="footer__number">8 (499) 923-22-78</Text>
      <Text className="footer__mail">pochtasaita@gmail.com</Text>
    </div>
  );
};

export default FooterInfo;
