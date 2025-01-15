import React from 'react';

const CardLink = ({ href, target, rel, className, children }) => {
  return (
    <a href={href} target={target} rel={rel} className={className}>
      {children}
    </a>
  );
};

export default CardLink;
