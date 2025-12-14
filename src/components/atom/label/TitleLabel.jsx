import React from 'react';
import ThumbtackIcon from '../icon/ThumbtackIcon';
import './label.css';

const TitleLabel = ({ icon, name, fixed, onClick }) => {
  return (
    <div className='title-container'>
      <div className='clear-icon'>
        {icon && <img className='content-icon' src={icon} alt='' />}
      </div>
      <label className='label-title'>{name}</label>
      <div className='tack-icon' onClick={onClick}>
        <ThumbtackIcon fixed={fixed} />
      </div>
    </div>
  );
};

export default TitleLabel;
