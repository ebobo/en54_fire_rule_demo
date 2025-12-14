import { SET_NIGHT_MODE, SET_PROLONG } from './constants';

export const setNightModel = (value) => ({
  type: SET_NIGHT_MODE,
  value,
});

export const setProlong = (value) => ({
  type: SET_PROLONG,
  value,
});
