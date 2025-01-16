import React from 'react';

const SliderImage = ({ src, alt }) => {
  return (
    <div className="slider__sliders">
      <img src={src} alt={alt} />
    </div>
  );
};

export default SliderImage;
