import React from 'react';
import './label.css';

const TextLabel = ({ name, content }) => {
  return (
    <div className='label-container'>
      <label className='label-name'>{name}</label>
      <label className='label-content'>{content}</label>
    </div>
  );
};

export default TextLabel;
