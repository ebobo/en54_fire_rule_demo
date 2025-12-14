import { SHOW_OZ } from '../actions/constants';

const defaultState = [{ name: 'OZ-1', show: false }];

export const ozReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_OZ:
      return state.map((oz) => ({ ...oz, show: action.show }));
    default:
      return state;
  }
};
