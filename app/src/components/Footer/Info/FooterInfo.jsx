import React from 'react'

import tg from '../../../assets/images/tg-icon.png';
import inst from '../../../assets/images/ins-icon.png';
import vk from '../../../assets/images/vk-icon.png';

const FooterInfo = () => {
  return (
    <div className="footer__info">
        <div className="footer__icon">
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <img src={vk} alt="VK" className="footer__icon-vk" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={inst} alt="Instagram" className="footer__icon-inst" />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <img src={tg} alt="Telegram" className="footer__icon-tg" />
        </a>
        </div>
        <p className="footer__number">8 (499) 923-22-78</p>
        <p className="footer__mail">pochtasaita@gmail.com</p>
    </div>
  )
}

export default FooterInfo