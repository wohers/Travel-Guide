import '../header.scss';

import logo from '../../assets/images/main-logo.png'
export const Header = () => {

    return (
        <header id="header">
            <div className="container">
                <div className="header__wrap">
                    <img src={logo} alt="Logo" className="header__logo"/>
                    <div className="header__box">
                        <div className="header__menu-toggle" id="menu-toggle">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__menu" id="menu">
                                <li className="header__item">
                                    <a href="#" className="header__link">Главная</a>
                                </li>
                                <li className="header__item">
                                    <a href="#map" className="header__link">Карта</a>
                                </li>
                                <li className="header__item">   
                                    <a href="#" className="header__link">Достопримечательности</a>
                                </li>
                                <li className="header__item">
                                    <a href="#" className="header__link">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;