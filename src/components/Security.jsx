import React from 'react';
import Detector from '../components/point/Detector';
import Sounder from '../components/FAD/Sounder';
import DetectionZone from './zone/DetectionZone';
import AlarmZone from './zone/AlarmZone';
import RoomIcon from './atom/icon/RoomIcon';
import PanelIcon from './atom/icon/PanelIcon';
import './components.css';
import { useSelector } from 'react-redux';

const Security = ({ dzNum, azNum, showOZ }) => {
  const dzState = useSelector((state) => state.dz[dzNum]);
  const azState = useSelector((state) => state.az[azNum]);
  const Points = useSelector((state) => state.point);

  return (
    <div className={`room security`}>
      <label className='label roomLabel'>security</label>
      {!dzState.show && !azState.show && !showOZ && (
        <RoomIcon name={'security'} style={{ top: '40%', left: '35%' }} />
      )}
      {azState.show && <AlarmZone azNum={azNum + 1} state={azState.state} />}
      {dzState.show && (
        <DetectionZone name={dzState.name} state={dzState.presentation_state} />
      )}
      {dzState.show && (
        <Detector
          style={{ top: '35%', left: '15%' }}
          name='B0105'
          state={Points.find((pnt) => pnt.name === 'B0105').alarm_state}
        />
      )}
      {azState.show && (
        <Sounder style={{ top: '20%', right: '15%' }} name='B0106' />
      )}
      {showOZ && <PanelIcon />}
    </div>
  );
};

export default Security;
