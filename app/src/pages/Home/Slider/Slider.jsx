import React, { useState } from 'react';
import './slider.scss';
import nk1 from '../../../assets/images/nk1.jpg';
import nk3 from '../../../assets/images/nk3.jpg';
import nk6 from '../../../assets/images/nk6.jpg';
import SliderImage from './SllideComponents/SliderImages';
import SlideControle from './SllideComponents/SlideControle';
import SlideTitle from './SllideComponents/SlideTitle';

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    nk1,
    'https://upload.wikimedia.org/wikipedia/commons/c/c8/Nizhnekamsk._Kama_River_P6263326_2575.jpg',
    nk3,
    'https://www.tatar-inform.ru/resize/shd/images/uploads/news/2023/9/13/bde5b47471ed53cbc7fd34fce25b1a34.jpg',
    nk6,
    'https://transphoto.org/photo/19/52/09/1952093.jpg',
  ];

  const showPreviousSlide = () => {
    setSlideIndex(prevIndex =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const showNextSlide = () => {
    setSlideIndex(prevIndex =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="slider">
      <SlideTitle className="slider__title">Нижнекамск</SlideTitle>
      <div className="slider__container">
        <SliderImage src={slides[slideIndex]} alt={`Slide ${slideIndex + 1}`} />
        <SlideControle onPrevious={showPreviousSlide} onNext={showNextSlide} />
      </div>
    </main>
  );
};
