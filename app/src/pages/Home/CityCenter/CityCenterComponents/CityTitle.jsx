import React from 'react';

const GridTitle = ({ className, children }) => {
  return (
    <div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default GridTitle;
