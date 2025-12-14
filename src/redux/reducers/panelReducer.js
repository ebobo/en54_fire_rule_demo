import { SET_NIGHT_MODE, SET_PROLONG } from '../actions/constants';

const defaultState = { name: 'PANEL-1', night_mode: false, prolong: false };

export const panelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_NIGHT_MODE:
      return { ...state, night_mode: action.value };
    case SET_PROLONG:
      return { ...state, prolong: action.value };
    default:
      return state;
  }
};
