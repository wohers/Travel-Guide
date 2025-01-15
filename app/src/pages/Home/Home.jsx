import React from 'react';
import Header from '../../components/Header/Header';
import { Slider } from './Slider/Slider';
import { CityInfo } from './CityInfo/CityInfo';
import { CityCenter } from './CityCenter/CityCenter';
import { Map } from './Map/Map';
import { Footer } from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <CityInfo />
      <CityCenter />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
