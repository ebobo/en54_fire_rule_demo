import { SHOW_AZ_ALL, SET_AZ_STATE } from './constants';

export const showAllAZ = (show) => ({
  type: SHOW_AZ_ALL,
  show,
});

export const setAzState = (name, value) => ({
  type: SET_AZ_STATE,
  name,
  value,
});
