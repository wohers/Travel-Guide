import React from 'react'

const FooterNav = () => {
  return (
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
  )
}

export default FooterNav