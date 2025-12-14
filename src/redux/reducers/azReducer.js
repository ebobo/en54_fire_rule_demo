import { SHOW_AZ_ALL, SET_AZ_STATE, AZ_STATES } from '../actions/constants';

//state: 'Non-Activated' / 'Activated'
const defaultState = [
  {
    name: 'AZ-1',
    state: AZ_STATES[0],
    connectedDZ: ['DZ-1', 'DZ-2'],
    fads: ['A-0105'],
    neighborAZ: [],
    show: false,
  },
  {
    name: 'AZ-2',
    state: AZ_STATES[0],
    connectedDZ: ['DZ-3'],
    neighborAZ: [],
    fads: ['B-0106'],
    show: false,
  },
  {
    name: 'AZ-3',
    state: AZ_STATES[0],
    connectedDZ: ['DZ-4'],
    neighborAZ: [],
    fads: ['B-0108'],
    show: false,
  },
  {
    name: 'AZ-4',
    state: AZ_STATES[0],
    connectedDZ: ['DZ-5'],
    neighborAZ: [],
    fads: ['B-0110'],
    show: false,
  },
];

const deepCopyAZ = (az) => ({
  ...az,
  connectedDZ: [...az.connectedDZ],
  neighborAZ: [...az.neighborAZ],
  fads: [...az.fads],
});

export const azReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_AZ_ALL:
      return state.map((az) => ({
        ...az,
        connectedDZ: [...az.connectedDZ],
        neighborAZ: [...az.neighborAZ],
        fads: [...az.fads],
        show: action.show,
      }));
    case SET_AZ_STATE:
      return state.map((az) => {
        if (az.name === action.name) {
          return {
            ...az,
            connectedDZ: [...az.connectedDZ],
            neighborAZ: [...az.neighborAZ],
            fads: [...az.fads],
            state: action.value,
          };
        }
        return deepCopyAZ(az);
      });
    default:
      return state;
  }
};
