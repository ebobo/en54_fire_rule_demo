import React, { useEffect } from 'react';
import TextLabel from '../../atom/label/TextLabel';
import TitleLabel from '../../atom/label/TitleLabel';
import './properties.css';
import { connect } from 'react-redux';
import {
  setPointAlarmState,
  setPointFaultState,
  setPointDisableState,
} from '../../../redux/actions/pointActions';
import {
  setDzActivationState,
  setDzPresentationState,
  setDzT1TimerState,
  setDzT2TimerState,
} from '../../../redux/actions/dzActions';
import { setAzState } from '../../../redux/actions/azActions';
import {
  setMoniterUnit,
  removeMoniterUnit,
} from '../../../redux/actions/opActions';
import DropdownCombo from '../../atom/combobox/DropdownCombo';
import {
  PNT_ALARM_STATES,
  PNT_FAULT_STATES,
  PNT_DISABLE_STATES,
} from '../../../redux/actions/constants';
import { calcDZstatesFromPoint } from '../../../core/dzStateGenerator';
import DetectorIcon from '../../../icons/detector_icon.png';
import McpIcon from '../../../icons/mcp_icon.png';

const mapStateToProps = (state) => ({
  points: state.point,
  dzs: state.dz,
  nightMode: state.panel.night_mode,
});

const mapDispatchToProps = {
  setPointAlarmState,
  setPointFaultState,
  setPointDisableState,
  setMoniterUnit,
  removeMoniterUnit,
  setDzActivationState,
  setDzPresentationState,
  setDzT1TimerState,
  setDzT2TimerState,
  setAzState,
};

const PntPropertiesUnwrapper = ({
  unit,
  monitering,
  points,
  dzs,
  nightMode,
  setPointAlarmState,
  setPointFaultState,
  setPointDisableState,
  setMoniterUnit,
  removeMoniterUnit,
  setDzActivationState,
  setDzPresentationState,
  setDzT1TimerState,
  setDzT2TimerState,
  setAzState,
}) => {
  const getUnitInfo = () => {
    if (points) {
      return points.find((pnt) => pnt.name === unit.name);
    }
    return null;
  };
  const pnt = getUnitInfo();

  useEffect(() => {
    if (pnt) {
      const stateArray = calcDZstatesFromPoint(dzs, points, pnt, nightMode);
      stateArray.forEach((obj) => {
        setDzActivationState(obj.name, obj.astate);
        setDzPresentationState(obj.name, obj.pstate);
        obj.azStates.forEach((az) => {
          setAzState(az.name, az.state);
        });
        if (obj.t1state) {
          setDzT1TimerState(obj.name, obj.t1state);
        }
        if (obj.t2state) {
          setDzT2TimerState(obj.name, obj.t2state);
        }
      });
    }
  }, [
    points,
    dzs,
    pnt,
    setDzActivationState,
    setDzPresentationState,
    setDzT1TimerState,
    setDzT2TimerState,
    setAzState,
  ]);

  return (
    <div className={'property-unit'}>
      <TitleLabel
        icon={pnt ? (pnt.type === 'MCP' ? McpIcon : DetectorIcon) : null}
        name={'Point Properties'}
        fixed={monitering}
        onClick={() => {
          if (monitering) {
            removeMoniterUnit(unit.name, unit.category);
          } else {
            setMoniterUnit();
          }
        }}
      />
      <TextLabel name={'Name:'} content={pnt ? pnt.name : 'unknown'} />
      <TextLabel name={'Model:'} content={pnt ? pnt.model : 'unknown'} />
      <TextLabel name={'Type:'} content={pnt ? pnt.type : 'unknown'} />
      <TextLabel name={'DZ:'} content={pnt ? pnt.DZ.join(', ') : 'unknown'} />
      <DropdownCombo
        name={'Alarm: '}
        options={PNT_ALARM_STATES}
        current={pnt ? pnt.alarm_state : PNT_ALARM_STATES[0]}
        onChangeHandel={(e) => {
          if (pnt) {
            setPointAlarmState(pnt.name, e.currentTarget.value);
          }
        }}
      />
      <DropdownCombo
        name={'Fault: '}
        options={PNT_FAULT_STATES}
        current={pnt ? pnt.fault_state : PNT_FAULT_STATES[0]}
        onChangeHandel={(e) => {
          if (pnt) {
            setPointFaultState(pnt.name, e.currentTarget.value);
          }
        }}
      />
      <DropdownCombo
        name={'Disable: '}
        options={PNT_DISABLE_STATES}
        current={pnt ? pnt.disable_state : PNT_DISABLE_STATES[0]}
        onChangeHandel={(e) => {
          if (pnt) {
            setPointDisableState(pnt.name, e.currentTarget.value);
          }
        }}
      />
    </div>
  );
};

export const PntProperties = connect(
  mapStateToProps,
  mapDispatchToProps
)(PntPropertiesUnwrapper);
