import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom';

const FooterNav = () => {
    return (
        <nav className="footer__nav">
            <ul className="footer__menu">
                <li className="footer__item">
                <Link to="/">
                    <Button className="footer__button">Главная</Button>
                </Link>
                </li>
                <li className="footer__item">
                <a href="/#map">
                    <Button className="footer__button">Карта</Button>
                </a>
                </li>
                <li className="footer__item">
                <Link to="/Attraction">
                    <Button className="footer__button">Достопримечательности</Button>
                </Link>
                </li>
                <li className="footer__item">
                <Link to="/about">
                    <Button className="footer__button">Контакты</Button>
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default FooterNav