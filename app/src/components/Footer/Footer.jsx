import React from 'react';
import '../Footer/footer.scss';

import FooterNav from './Navigation/FooterNav';
import FooterInfo from './Info/FooterInfo';
import FooterLogo from './Logo/FooterLogo';

export const Footer = ({ id }) => {
  return (
    <footer className="footer" id={id}>
      <div className="footer__container">
        <FooterLogo />
        <FooterNav />
        <FooterInfo />
      </div>
    </footer>
  );
};
