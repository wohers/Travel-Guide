import React from 'react';

const Iframe = ({ src, title, className }) => {
  return <iframe src={src} title={title} className={className} />;
};

export default Iframe;
