import {
  SET_CURRENT_UNIT,
  CLEAR_CURRENT_UNIT,
  SET_MONITER_UNIT,
  REMOVE_MONITER_UNIT,
} from './constants';

export const setCurrentUnit = (name, category) => ({
  type: SET_CURRENT_UNIT,
  name,
  category,
});

export const clearCurrentUnit = () => ({
  type: CLEAR_CURRENT_UNIT,
});

export const setMoniterUnit = () => ({
  type: SET_MONITER_UNIT,
});

export const removeMoniterUnit = (name, category) => ({
  type: REMOVE_MONITER_UNIT,
  name,
  category,
});
