import { FAD_STATES, SET_FAD_STATE } from '../actions/constants';

//FAD state: "Non-Activated" / "Activated"
const defaultState = [
  {
    name: 'A0105',
    model: 'BBR-24',
    type: 'BELL',
    AZ: ['AZ-1'],
    state: FAD_STATES[0],
  },
  {
    name: 'B0106',
    model: 'BBR-200',
    type: 'SOUNDER',
    AZ: ['AZ-2'],
    state: FAD_STATES[0],
  },
  {
    name: 'B0108',
    model: 'BBR-200',
    type: 'SOUNDER',
    AZ: ['AZ-3'],
    state: FAD_STATES[0],
  },
  {
    name: 'B0110',
    model: 'BBR-200',
    type: 'SOUNDER',
    AZ: ['AZ-4'],
    state: FAD_STATES[0],
  },
];

export const fadReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FAD_STATE:
      return state.map((fad) => {
        if (fad.name === action.name) {
          return {
            ...fad,
            AZ: [...fad.AZ],
            state: action.state,
          };
        }
        return {
          ...fad,
          AZ: [...fad.AZ],
        };
      });
    default:
      return state;
  }
};
