import React from 'react';
import Detector from '../components/point/Detector';
import DetectionZone from './zone/DetectionZone';
import RoomIcon from './atom/icon/RoomIcon';
import './components.css';
import { useSelector } from 'react-redux';

const Kitchen = ({ dzNum, showAZ, showOZ }) => {
  const dzState = useSelector((state) => state.dz[dzNum]);
  const Points = useSelector((state) => state.point);

  return (
    <div className='room kitchen'>
      <label className='label roomLabel'>kitchen</label>
      {!dzState.show && !showAZ && !showOZ && (
        <RoomIcon name={'kitchen'} style={{ top: '40%', left: '45%' }} />
      )}
      {dzState.show && (
        <DetectionZone name={dzState.name} state={dzState.presentation_state} />
      )}
      {dzState.show && (
        <Detector
          style={{ top: '38%', left: '20%' }}
          name='A0104'
          state={Points.find((pnt) => pnt.name === 'A0104').alarm_state}
        />
      )}
    </div>
  );
};

export default Kitchen;
