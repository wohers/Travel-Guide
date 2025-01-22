import React from 'react';

const SliderControls = ({ onPrevious, onNext }) => {
  return (
    <>
      <button className="slider__prev-button" onClick={onPrevious}>
        &lt;
      </button>
      <button className="slider__next-button" onClick={onNext}>
        &gt;
      </button>
    </>
  );
};

export default SliderControls;
