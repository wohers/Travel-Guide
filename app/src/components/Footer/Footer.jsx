import React from 'react';
import '../Footer/footer.scss';
import tg from '../../assets/images/tg-icon.png';
import inst from '../../assets/images/ins-icon.png';
import vk from '../../assets/images/vk-icon.png';
import logo from '../../assets/images/main-logo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-cont">
          <img src={logo} alt="FooterLogo" className="footer__logo" />
          <p className="footer__p">© 2006-2024 All Rights Reserved</p>
        </div>
        <nav className="footer__nav">
          <ul className="footer__menu">
            <li className="footer__item">
              <a href="#header" className="header__link_home">
                Главная
              </a>
            </li>
            <li className="footer__item">
              <a href="#map" className="header__link_home">
                Карта
              </a>
            </li>
            <li className="footer__item">
              <a href="/attractions" className="footer__link_katalog">
                Достопримечательности
              </a>
            </li>
            <li className="footer__item">
              <a href="/about" className="footer__link_comment">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
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
      </div>
    </footer>
  );
};