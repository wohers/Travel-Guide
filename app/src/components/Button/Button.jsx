import React from 'react';

const Button = ({ children, className , id, type}) => {
  return (
    <button className={className} id={id} type={type}>
      {children}
    </button>
  );
};

export default Button;