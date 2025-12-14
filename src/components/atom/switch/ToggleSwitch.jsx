import React from 'react';
import './switch.css';

const ToggleSwitch = ({
  inputName,
  label,
  status,
  onChangeHandel,
  nightMode,
}) => {
  return (
    <div className='switch-container'>
      <label className={nightMode ? 'switch-label-night' : 'switch-label'}>
        {label}
      </label>
      <label className='switch'>
        <input
          id={inputName}
          type='checkbox'
          // checked={status === 'on' ? true : false}
          onChange={onChangeHandel}
        />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
