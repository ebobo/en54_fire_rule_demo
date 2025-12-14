import React from 'react';
import Canteen from './Canteen';
import Kitchen from './Kitchen';
import Security from './Security';
import Room from './Room';
import AlarmZone from './zone/AlarmZone';
import OperationZone from './zone/OperationZone';
import './components.css';
import { useSelector } from 'react-redux';

const House = () => {
  const azState = useSelector((state) => state.az[0]);
  const ozState = useSelector((state) => state.oz[0]);

  return (
    <div className='house'>
      {ozState.show && <OperationZone ozNum={1} />}
      <div className='row75'>
        {azState.show && <AlarmZone azNum={1} state={azState.state} />}
        <Canteen dzNum={0} showAZ={azState.show} showOZ={ozState.show} />
        <Kitchen dzNum={1} showAZ={azState.show} showOZ={ozState.show} />
      </div>
      <div className='row25'>
        <Room
          name='reception'
          dzNum={4}
          azNum={3}
          showOZ={ozState.show}
          detector='B0109'
          fad='B0110'
        />
        <Room
          name='office'
          dzNum={3}
          azNum={2}
          showOZ={ozState.show}
          detector='B0107'
          fad='B0108'
        />
        <Security dzNum={2} azNum={1} showOZ={ozState.show} />
      </div>
    </div>
  );
};

export default House;
