import React from 'react';
import Header from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import '../Attractions/Attractions.scss';
import Main from './AttractionsComponents/Main';

const Attractions = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Attractions;
