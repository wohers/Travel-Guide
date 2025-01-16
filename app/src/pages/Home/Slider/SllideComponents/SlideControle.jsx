import React from 'react';

const SliderControls = ({ onPrevious, onNext }) => {
  return (
    <>
      <button
        className="slider__prev-button"
        onClick={onPrevious}
        aria-label="Посмотреть предыдущий слайд"
      >
        &lt;
      </button>
      <button
        className="slider__next-button"
        onClick={onNext}
        aria-label="Посмотреть следующий слайд"
      >
        &gt;
      </button>
    </>
  );
};

export default SliderControls;
