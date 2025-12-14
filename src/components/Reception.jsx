import React from 'react';
import './components.css';
import DetectionZone from './zone/DetectionZone';

const Reception = () => (
  <div className='room reception'>
    <label className='label roomLabel'>Reception</label>
    <DetectionZone name='DZ-3' />
  </div>
);

export default Reception;
