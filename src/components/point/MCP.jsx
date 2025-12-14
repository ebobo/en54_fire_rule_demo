import React from 'react';
import '../components.css';
import BF300 from '../../icons/BF300.png';
import { useDispatch } from 'react-redux';
import { setCurrentUnit } from '../../redux/actions/opActions';

const MCP = ({ style, name }) => {
  const dispatch = useDispatch();
  return (
    <img
      style={style}
      className='mcp'
      key={name}
      src={BF300}
      alt='MCP'
      onClick={() => dispatch(setCurrentUnit(name, 'point'))}
    />
  );
};

export default MCP;
