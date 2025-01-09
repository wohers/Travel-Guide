import React, { useState } from "react";
import './slider.scss'
import nk1 from '../../../assets/images/nk1.jpg';
import nk3 from '../../../assets/images/nk3.jpg';
import nk6 from '../../../assets/images/nk6.jpg';

export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const slides = [
        nk1,
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Nizhnekamsk._Kama_River_P6263326_2575.jpg",
        nk3,
        "https://www.tatar-inform.ru/resize/shd/images/uploads/news/2023/9/13/bde5b47471ed53cbc7fd34fce25b1a34.jpg",
        nk6,
        "https://transphoto.org/photo/19/52/09/1952093.jpg",
    ];

    const showPreviousSlide = () => {
        setSlideIndex((prevIndex) => {
            if(prevIndex === 0){
                return slides.length - 1 
            }
            else{
                return prevIndex - 1
            }
        });
    };

    const showNextSlide = () => {
        setSlideIndex((prevIndex) => {
            if (prevIndex === slides.length - 1){
                return 0
            }
            else{
                return prevIndex + 1
            }
        });
    };

    return (
        <main className="slider">
            <h1 className="slider__title">Нижнекамск</h1>
            <div className="slider__container">
                <div className="slider__sliders">
                    {}
                    <img src={slides[slideIndex]} alt={`Slide ${slideIndex + 1}`} />
                </div>
                <button
                    className="slider__prev-button"
                    onClick={showPreviousSlide}
                    aria-label="Посмотреть предыдущий слайд"
                >
                    &lt;
                </button>
                <button
                    className="slider__next-button"
                    onClick={showNextSlide}
                    aria-label="Посмотреть следующий слайд"
                >
                    &gt;
                </button>
            </div>
        </main>
    );
};