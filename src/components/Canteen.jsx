import React from 'react';
import './components.css';
import DetectionZone from './zone/DetectionZone';
import Detector from '../components/point/Detector';
import MCP from '../components/point/MCP';
import Bell from '../components/FAD/Bell';
import { useSelector } from 'react-redux';
import RoomIcon from './atom/icon/RoomIcon';

const Canteen = ({ dzNum, showAZ, showOZ }) => {
  const dzState = useSelector((state) => state.dz[dzNum]);
  const Points = useSelector((state) => state.point);

  return (
    <div className='room canteen'>
      <label className='label roomLabel'>canteen</label>
      {!dzState.show && !showAZ && !showOZ && (
        <RoomIcon name={'canteen'} style={{ top: '45%', left: '45%' }} />
      )}
      {dzState.show && (
        <DetectionZone name={dzState.name} state={dzState.presentation_state} />
      )}
      {dzState.show && (
        <Detector
          style={{ top: '15%', left: '18%' }}
          name='A0101'
          state={Points.find((pnt) => pnt.name === 'A0101').alarm_state}
        />
      )}
      {dzState.show && (
        <Detector
          style={{ bottom: '20%', right: '20%' }}
          name='A0102'
          state={Points.find((pnt) => pnt.name === 'A0102').alarm_state}
        />
      )}
      {showAZ && <Bell style={{ bottom: '8%', left: '10%' }} name='A0105' />}
      {dzState.show && <MCP style={{ top: '8%', right: '10%' }} name='A0103' />}
    </div>
  );
};

export default Canteen;
