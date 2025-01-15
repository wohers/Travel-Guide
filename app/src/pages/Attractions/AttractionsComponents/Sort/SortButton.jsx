import React from 'react';

const SortButton = ({ onClick, children }) => {
  return (
    <button className="sort__container-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default SortButton;
