import React from 'react';
import '../components.css';
import { useDispatch } from 'react-redux';
import { setCurrentUnit } from '../../redux/actions/opActions';

const DetectionZone = ({ name, state }) => {
  const dispatch = useDispatch();

  return (
    <div className={`dz dz-${state}`}>
      <label
        className='dzLabel'
        onClick={() => dispatch(setCurrentUnit(name, 'dz'))}
      >
        {name}
      </label>
    </div>
  );
};

export default DetectionZone;
