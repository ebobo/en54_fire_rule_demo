import {
  SET_PNT_ALARM_STATE,
  SET_PNT_FAULT_STATE,
  SET_PNT_DISABLE_STATE,
} from './constants';

export const setPointAlarmState = (name, state) => ({
  type: SET_PNT_ALARM_STATE,
  name,
  state,
});

export const setPointFaultState = (name, state) => ({
  type: SET_PNT_FAULT_STATE,
  name,
  state,
});

export const setPointDisableState = (name, state) => ({
  type: SET_PNT_DISABLE_STATE,
  name,
  state,
});
