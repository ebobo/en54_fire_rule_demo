import React from 'react';
import Detector from '../components/point/Detector';
import Sounder from '../components/FAD/Sounder';
import DetectionZone from './zone/DetectionZone';
import AlarmZone from './zone/AlarmZone';
import RoomIcon from './atom/icon/RoomIcon';
import './components.css';
import { useSelector } from 'react-redux';

const Room = ({ name, dzNum, azNum, showOZ, detector, fad }) => {
  const dzState = useSelector((state) => state.dz[dzNum]);
  const azState = useSelector((state) => state.az[azNum]);
  const Points = useSelector((state) => state.point);

  return (
    <div className={`room ${name}`}>
      <label className='label roomLabel'>{name}</label>
      {!dzState.show && !azState.show && !showOZ && (
        <RoomIcon name={name} style={{ top: '40%', left: '35%' }} />
      )}
      {azState.show && <AlarmZone azNum={azNum + 1} state={azState.state} />}
      {dzState.show && (
        <DetectionZone name={dzState.name} state={dzState.presentation_state} />
      )}
      {azState.show && (
        <Sounder style={{ top: '20%', right: '15%' }} name={fad} />
      )}
      {dzState.show && (
        <Detector
          style={{ top: '35%', left: '15%' }}
          name={detector}
          state={Points.find((pnt) => pnt.name === detector).alarm_state}
        />
      )}
    </div>
  );
};

export default Room;
