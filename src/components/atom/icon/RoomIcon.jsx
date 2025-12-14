import React from 'react';
import '../../components.css';
import canteen from '../../../icons/canteen.png';
import kitchen from '../../../icons/kitchen.png';
import office from '../../../icons/office.png';
import security from '../../../icons/security.png';
import reception from '../../../icons/reception.png';

const RoomIcon = ({ name, style }) => {
  switch (name) {
    case 'canteen':
      return (
        <img
          className='room-icon'
          style={style}
          src={canteen}
          alt='Room Icon'
        />
      );
    case 'kitchen':
      return (
        <img
          className='room-icon'
          style={style}
          src={kitchen}
          alt='Room Icon'
        />
      );
    case 'office':
      return (
        <img className='room-icon' style={style} src={office} alt='Room Icon' />
      );
    case 'security':
      return (
        <img
          className='room-icon'
          style={style}
          src={security}
          alt='Room Icon'
        />
      );
    case 'reception':
      return (
        <img
          className='room-icon'
          style={style}
          src={reception}
          alt='Room Icon'
        />
      );
    default:
      return (
        <img
          className='room-icon'
          style={style}
          src={canteen}
          alt='Room Icon'
        />
      );
  }
};

export default RoomIcon;
