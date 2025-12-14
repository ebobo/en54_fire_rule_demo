import React, { useState, useEffect } from 'react';
import './label.css';

const EditLabelWithTimer = ({
  name,
  value,
  onChange,
  timerState,
  onTimeOut,
}) => {
  const [seconds, setSeconds] = useState(value);

  useEffect(() => {
    let timeout = null;
    if (seconds > 0 && timerState === 'Activated') {
      timeout = setTimeout(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearTimeout(timeout);
      setSeconds(value);
      if (seconds === 0 && timerState === 'Activated') {
        onTimeOut();
      }
    }
    return () => clearTimeout(timeout);
  }, [seconds, timerState, value, onTimeOut]);

  return (
    <div className='label-container-button'>
      <label className='label-name'>{name}</label>
      <input
        className='label-input'
        value={value}
        type='number'
        min='0'
        max='999'
        disabled={timerState === 'Activated'}
        onChange={onChange}
      />
      {timerState === 'Activated' && (
        <label className='label-number'>{seconds}</label>
      )}
    </div>
  );
};

export default EditLabelWithTimer;
