import React from 'react';
import '../components.css';
import BHH320 from '../../icons/BHH320.png';
import { useDispatch } from 'react-redux';
import { setCurrentUnit } from '../../redux/actions/opActions';

const Detector = ({ style, name, state }) => {
  const dispatch = useDispatch();

  return (
    <div
      className='detector'
      key={name}
      style={style}
      onClick={() => dispatch(setCurrentUnit(name, 'point'))}
    >
      <img className='detector-image' src={BHH320} alt='Detector' />
      <div className={`detector-led detector-${state}`} />
    </div>
  );
};

export default Detector;
