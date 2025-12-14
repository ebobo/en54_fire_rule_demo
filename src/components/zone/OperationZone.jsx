import React from 'react';
import '../components.css';

const OperationZone = ({ ozNum }) => {
  return (
    <div className='oz'>
      <label className='ozLabel'>{`OZ-${ozNum}`}</label>
    </div>
  );
};

export default OperationZone;
