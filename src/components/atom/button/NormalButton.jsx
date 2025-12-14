import React from 'react';
import './button.css';

const NormalButton = ({ label, onClickHandel, disabled }) => {
  return (
    <button
      className='button-normal'
      id={label}
      onClick={onClickHandel}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default NormalButton;
