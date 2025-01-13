import '../Header/header.scss';
import HeaderWrap from './Wrap/HeaderWrap';

export const Header = () => {

    return (
        <header id="header">
            <div className="container">
                <HeaderWrap />
            </div>
        </header>
    );
};

export default Header;