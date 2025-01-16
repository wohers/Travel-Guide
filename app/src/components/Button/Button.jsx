import React from 'react';

const Button = ({ children, className, id, type = 'button', onClick }) => {
  return (
    <button className={className} id={id} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
