import React from 'react';
import { connect } from 'react-redux';
import TextLabel from '../../atom/label/TextLabel';
import EditLabelWithTimerButton from '../../atom/label/EditLabelWithTimerButton';
import TitleLabel from '../../atom/label/TitleLabel';
import DropdownCombo from '../../atom/combobox/DropdownCombo';
import DZicon from '../../../icons/dz_icon.png';
import { DZ_TYPES } from '../../../redux/actions/constants';
import './properties.css';
import {
  setDzType,
  setT1Value,
  setT2Value,
  setDzT1TimerState,
  setDzT2TimerState,
} from '../../../redux/actions/dzActions';
import {
  setMoniterUnit,
  removeMoniterUnit,
} from '../../../redux/actions/opActions';

const mapStateToProps = (state) => ({
  points: state.point,
  dzs: state.dz,
});

const mapDispatchToProps = {
  setDzType,
  setT1Value,
  setT2Value,
  setMoniterUnit,
  removeMoniterUnit,
  setDzT1TimerState,
  setDzT2TimerState,
};

const DzPropertiesUnwrapper = ({
  unit,
  monitering,
  dzs,
  setDzType,
  setT1Value,
  setT2Value,
  setMoniterUnit,
  removeMoniterUnit,
  setDzT1TimerState,
  setDzT2TimerState,
}) => {
  const getUnitInfo = () => {
    if (dzs) {
      return dzs.find((dz) => dz.name === unit.name);
    }
    return null;
  };
  const dz = getUnitInfo();

  return (
    <div className={'property-unit'}>
      <TitleLabel
        icon={DZicon}
        name={'DZ Properties'}
        fixed={monitering}
        onClick={() => {
          if (monitering) {
            removeMoniterUnit(unit.name, unit.category);
          } else {
            setMoniterUnit();
          }
        }}
      />
      <TextLabel name={'Name:'} content={dz ? dz.name : 'unknown'} />
      <TextLabel
        name={'A-State:'}
        content={dz ? dz.activation_state : 'unknown'}
      />
      <TextLabel
        name={'P-State:'}
        content={dz ? dz.presentation_state : 'unknown'}
      />
      <DropdownCombo
        name={'Type: '}
        options={DZ_TYPES}
        current={dz ? dz.type : DZ_TYPES[0]}
        onChangeHandel={(e) => {
          if (dz) {
            setDzType(dz.name, e.currentTarget.value);
          }
        }}
      />
      <EditLabelWithTimerButton
        name={'T1:'}
        value={dz ? dz.t1 : 0}
        onChange={(e) => {
          if (dz) {
            setT1Value(dz.name, e.currentTarget.value);
          }
        }}
        bname='Delay'
        timerState={dz.t1_state}
        onTimeOut={() => {
          if (dz) {
            setDzT1TimerState(dz.name, 'Expired');
          }
        }}
        onButtonClick={() => {
          if (dz) {
            setDzT1TimerState(dz.name, 'On-Hold');
          }
        }}
      />
      <EditLabelWithTimerButton
        name={'T2:'}
        value={dz ? dz.t2 : 0}
        onChange={(e) => {
          if (dz) {
            setT2Value(dz.name, e.currentTarget.value);
          }
        }}
        bname='Active'
        timerState={dz.t2_state}
        onTimeOut={() => {
          if (dz) {
            setDzT2TimerState(dz.name, 'Expired');
          }
        }}
        onButtonClick={() => {
          if (dz) {
            if (dz.t1_state === 'Activated') {
              setDzT1TimerState(dz.name, 'Expired');
            } else if (dz.t2_state === 'Activated') {
              setDzT2TimerState(dz.name, 'Expired');
            }
          }
        }}
      />
      <TextLabel
        name={'AZ:'}
        content={dz ? dz.connectedAZ.join(', ') : 'unknow'}
      />
      <TextLabel
        name={'Points:'}
        content={dz ? dz.points.join(', ') : 'unknow'}
      />
    </div>
  );
};

export const DzProperties = connect(
  mapStateToProps,
  mapDispatchToProps
)(DzPropertiesUnwrapper);
