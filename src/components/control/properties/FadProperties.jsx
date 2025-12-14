import React from 'react';
import TextLabel from '../../atom/label/TextLabel';
import TitleLabel from '../../atom/label/TitleLabel';
import './properties.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMoniterUnit,
  removeMoniterUnit,
} from '../../../redux/actions/opActions';
import FadIcon from '../../../icons/fad_icon.png';

const FadProperties = ({ unit, monitering }) => {
  const Fads = useSelector((state) => state.fad);
  const dispatch = useDispatch();

  const getUnitInfo = () => {
    if (Fads) {
      return Fads.find((fad) => fad.name === unit.name);
    }
    return null;
  };
  const fad = getUnitInfo();

  return (
    <div className={'property-unit'}>
      <TitleLabel
        icon={FadIcon}
        name={'FAD Properties'}
        fixed={monitering}
        onClick={() => {
          if (monitering) {
            dispatch(removeMoniterUnit(unit.name, unit.category));
          } else {
            dispatch(setMoniterUnit());
          }
        }}
      />
      <TextLabel name={'Name:'} content={fad ? fad.name : 'unknown'} />
      <TextLabel name={'Model:'} content={fad ? fad.model : 'unknown'} />
      <TextLabel name={'Type:'} content={fad ? fad.type : 'unknown'} />
      <TextLabel name={'AZ:'} content={fad ? fad.AZ.join(', ') : 'unknown'} />
      <TextLabel name={'State:'} content={fad ? fad.state : 'unknown'} />
    </div>
  );
};

export default FadProperties;
