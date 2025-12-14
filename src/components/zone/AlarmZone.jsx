import React from 'react';
import '../components.css';
import { useDispatch } from 'react-redux';
import { setCurrentUnit } from '../../redux/actions/opActions';

const AlarmZone = ({ azNum, state }) => {
  const dispatch = useDispatch();

  return (
    <div className={`az az-${state}`}>
      <label
        className='azLabel'
        onClick={() => dispatch(setCurrentUnit(`AZ-${azNum}`, 'az'))}
      >{`AZ-${azNum}`}</label>
    </div>
  );
};

export default AlarmZone;
