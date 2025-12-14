import {
  SET_CURRENT_UNIT,
  CLEAR_CURRENT_UNIT,
  SET_MONITER_UNIT,
  REMOVE_MONITER_UNIT,
} from '../actions/constants';

const defaultState = {
  currentUnit: null,
  moniterUnits: [],
};

export const opReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_UNIT:
      return {
        moniterUnits: [...state.moniterUnits],
        currentUnit: { name: action.name, category: action.category },
      };
    case CLEAR_CURRENT_UNIT:
      return {
        currentUnit: null,
        moniterUnits: [],
      };
    case SET_MONITER_UNIT:
      const exist = state.moniterUnits.find(
        (unit) =>
          unit.name === state.currentUnit.name &&
          unit.category === state.currentUnit.category
      );
      if (exist) {
        return {
          currentUnit: null,
          moniterUnits: [...state.moniterUnits],
        };
      }
      return {
        currentUnit: null,
        moniterUnits: [state.currentUnit, ...state.moniterUnits],
      };
    case REMOVE_MONITER_UNIT:
      const match = state.moniterUnits.find(
        (unit) => unit.name === action.name && unit.category === action.category
      );
      if (match) {
        return {
          ...state,
          moniterUnits: state.moniterUnits.filter(
            (unit) =>
              unit.name !== action.name || unit.category !== action.category
          ),
        };
      }
      return state;
    default:
      return state;
  }
};
