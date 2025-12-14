import React from 'react';
import TextLabel from '../../atom/label/TextLabel';
import TitleLabel from '../../atom/label/TitleLabel';
import './properties.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMoniterUnit,
  removeMoniterUnit,
} from '../../../redux/actions/opActions';
import AZicon from '../../../icons/az_icon.png';

const AzProperties = ({ unit, monitering }) => {
  const AZs = useSelector((state) => state.az);

  const dispatch = useDispatch();
  const getUnitInfo = () => {
    if (AZs) {
      return AZs.find((az) => az.name === unit.name);
    }
    return null;
  };
  const az = getUnitInfo();

  return (
    <div className={'property-unit'}>
      <TitleLabel
        icon={AZicon}
        name={'AZ Properties'}
        fixed={monitering}
        onClick={() => {
          if (monitering) {
            dispatch(removeMoniterUnit(unit.name, unit.category));
          } else {
            dispatch(setMoniterUnit());
          }
        }}
      />
      <TextLabel name={'Name:'} content={az ? az.name : 'unknown'} />
      <TextLabel name={'State:'} content={az ? az.state : 'unknown'} />
      <TextLabel
        name={'DZ in:'}
        content={az ? az.connectedDZ.join(', ') : 'unknown'}
      />
      <TextLabel name={'FADs:'} content={az ? az.fads.join(', ') : 'unknown'} />
      <TextLabel
        name={'Neighbor:'}
        content={az ? az.neighborAZ.join(', ') : 'unknown'}
      />
    </div>
  );
};

export default AzProperties;
