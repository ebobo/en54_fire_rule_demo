import React from 'react';
import DetectionZone from './zone/DetectionZone';
import './components.css';

const Office = () => {
  return (
    <div className='room office'>
      <label className='label roomLabel'>Office</label>
      <DetectionZone name='DZ-5' />
    </div>
  );
};

export default Office;
