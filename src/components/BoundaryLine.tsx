import React from 'react';

const BoundaryLine = ({ receipt }: { receipt?: boolean }) => {
  return (
    <div
      style={{ width: receipt ? '262px' : ' 390px', height: '1px', margin: '10px 0px', border: '1px solid #E6E6E6' }}
    ></div>
  );
};

export default BoundaryLine;
