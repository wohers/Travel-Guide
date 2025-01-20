import React from 'react';

const Modal = ({ className, id, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div id={id} className={className}>
      <div className="modalContact__overlay" onClick={onClose}></div>
      <div className="modalContact__content">{children}</div>
    </div>
  );
};

export default Modal;
