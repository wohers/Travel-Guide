import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { Slider } from './Slider/Slider';
import { CityInfo } from './CityInfo/CityInfo';
import { CityCenter } from './CityCenter/CityCenter';
import { Map } from './Map/Map';
import { Footer } from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const Home = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const scroll = () => {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    if (header && footer) {
      const headerRect = header.getBoundingClientRect();

      if (headerRect.top >= 0 && headerRect.bottom <= window.innerHeight) {
        footer.scrollIntoView({ behavior: 'smooth' });
        setIsHeaderVisible(false);
      } else {
        header.scrollIntoView({ behavior: 'smooth' });
        setIsHeaderVisible(true);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        const headerRect = header.getBoundingClientRect();
        setIsHeaderVisible(
          headerRect.top >= 0 && headerRect.bottom <= window.innerHeight
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header id="header" />
      <Slider />
      <CityInfo />
      <CityCenter />
      <Map />
      <Footer id="footer" />
      <Button className="yakor__btn" onClick={scroll}>
        {isHeaderVisible ? '↓' : '↑'}
      </Button>
    </div>
  );
};

export default Home;
