import {
  SHOW_DZ_ALL,
  SET_DZ_TYPE,
  SET_T1_VALUE,
  SET_T2_VALUE,
  SET_DZ_ACTIVATION_STATE,
  SET_DZ_PRESENTATION_STATE,
  SET_T1_TIMER_STATE,
  SET_T2_TIMER_STATE,
} from './constants';

export const showAllDZ = (show) => ({
  type: SHOW_DZ_ALL,
  show,
});

export const setDzType = (name, dzType) => ({
  type: SET_DZ_TYPE,
  name,
  dzType,
});

export const setT1Value = (name, value) => ({
  type: SET_T1_VALUE,
  name,
  value,
});

export const setT2Value = (name, value) => ({
  type: SET_T2_VALUE,
  name,
  value,
});

export const setDzActivationState = (name, value) => ({
  type: SET_DZ_ACTIVATION_STATE,
  name,
  value,
});

export const setDzPresentationState = (name, value) => ({
  type: SET_DZ_PRESENTATION_STATE,
  name,
  value,
});

export const setDzT1TimerState = (name, value) => ({
  type: SET_T1_TIMER_STATE,
  name,
  value,
});

export const setDzT2TimerState = (name, value) => ({
  type: SET_T2_TIMER_STATE,
  name,
  value,
});
