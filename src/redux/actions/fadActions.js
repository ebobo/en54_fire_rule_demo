import { SET_FAD_STATE } from './constants';

export const setFadState = (name, state) => ({
  type: SET_FAD_STATE,
  name,
  state,
});
