import React from 'react';
import './label.css';

const EditLabel = ({ name, value, onChange }) => {
  return (
    <div className='label-container'>
      <label className='label-name'>{name}</label>
      <input
        className='label-input'
        value={value}
        type='number'
        min='0'
        max='999'
        onChange={onChange}
      />
    </div>
  );
};

export default EditLabel;
