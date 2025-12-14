import React from 'react';
import '../components.css';
import BBR200 from '../../icons/BBR200.png';
import { useDispatch } from 'react-redux';
import { setCurrentUnit } from '../../redux/actions/opActions';

const Sounder = ({ style, name }) => {
  const dispatch = useDispatch();
  return (
    <img
      style={style}
      className='sounder'
      key={name}
      src={BBR200}
      alt='Sounder'
      onClick={() => dispatch(setCurrentUnit(name, 'fad'))}
    />
  );
};

export default Sounder;
