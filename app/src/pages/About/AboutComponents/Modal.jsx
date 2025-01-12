import React from 'react';

const Modal = ({ className, id, children, openModal }) => {
  return (
    <div id={id} className={`${className} ${openModal ? 'modal--open' : ''}`}>
      {children}
    </div>
  );
};

export default Modal;