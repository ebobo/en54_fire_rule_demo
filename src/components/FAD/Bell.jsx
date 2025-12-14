import React from 'react';
import '../components.css';
import BBR24 from '../../icons/BBR24.png';
import { useDispatch } from 'react-redux';
import { setCurrentUnit } from '../../redux/actions/opActions';

const Bell = ({ style, name }) => {
  const dispatch = useDispatch();

  return (
    <img
      style={style}
      className='bell'
      key={name}
      src={BBR24}
      alt='Bell'
      onClick={() => dispatch(setCurrentUnit(name, 'fad'))}
    />
  );
};

export default Bell;
