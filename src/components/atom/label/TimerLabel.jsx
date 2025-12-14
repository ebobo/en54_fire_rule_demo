import React, { useState, useEffect } from 'react';
import './label.css';

const TimerLabel = ({ name, sec, handleTimeOut }) => {
  const [seconds, setSeconds] = useState(sec);

  useEffect(() => {
    let timeout = null;
    if (seconds > 0) {
      timeout = setTimeout(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearTimeout(timeout);
      handleTimeOut();
    }
    return () => clearTimeout(timeout);
  }, [seconds, handleTimeOut]);

  return (
    <div className='timer-container'>
      <label className='timer-name'>{`${name}: `}</label>
      <label className='timer-second'>{seconds}</label>
    </div>
  );
};

export default TimerLabel;
