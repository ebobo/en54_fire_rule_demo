import {
  SHOW_DZ_ALL,
  SET_DZ_TYPE,
  SET_T1_VALUE,
  SET_T2_VALUE,
  SET_DZ_ACTIVATION_STATE,
  SET_DZ_PRESENTATION_STATE,
  SET_T1_TIMER_STATE,
  SET_T2_TIMER_STATE,
} from '../actions/constants';

//type: "Immediate"/ "Delayed"/ "Dependency" / "Delayed Dependency" / "Maritime SOLAS"
//activation state: "Quiescent"/ "PreAlarm" / "SilentAlarm" / "SmallAlarm" / "LargeAlarm" / "BLOCKED"
//presentation state: "Quiescent" / "Pre Alarm" / "Alarm"
//timer state "Non-Activated" / "Activated" / "Expired" / "On-Hold"
const defaultState = [
  {
    name: 'DZ-1',
    type: 'Immediate',
    activation_state: 'Quiescent',
    presentation_state: 'Quiescent',
    points: ['A0101', 'A0102', 'A0103'],
    connectedAZ: ['AZ-1'],
    show: false,
    t1: 20,
    t2: 40,
    t1_state: 'Non-Activated',
    t2_state: 'Non-Activated',
  },
  {
    name: 'DZ-2',
    type: 'Immediate',
    activation_state: 'Quiescent',
    presentation_state: 'Quiescent',
    points: ['A0105'],
    connectedAZ: ['AZ-1'],
    show: false,
    t1: 20,
    t2: 40,
    t1_state: 'Non-Activated',
    t2_state: 'Non-Activated',
  },
  {
    name: 'DZ-3',
    type: 'Immediate',
    activation_state: 'Quiescent',
    presentation_state: 'Quiescent',
    points: ['B0105'],
    connectedAZ: ['AZ-2'],
    show: false,
    t1: 20,
    t2: 40,
    t1_state: 'Non-Activated',
    t2_state: 'Non-Activated',
  },
  {
    name: 'DZ-4',
    type: 'Immediate',
    activation_state: 'Quiescent',
    presentation_state: 'Quiescent',
    points: ['B0107'],
    connectedAZ: ['AZ-3'],
    show: false,
    t1: 20,
    t2: 40,
    t1_state: 'Non-Activated',
    t2_state: 'Non-Activated',
  },
  {
    name: 'DZ-5',
    type: 'Immediate',
    activation_state: 'Quiescent',
    presentation_state: 'Quiescent',
    points: ['B0109'],
    connectedAZ: ['AZ-4'],
    show: false,
    t1: 20,
    t2: 40,
    t1_state: 'Non-Activated',
    t2_state: 'Non-Activated',
  },
];

const deepCopyDZ = (dz) => ({
  ...dz,
  points: [...dz.points],
  connectedAZ: [...dz.connectedAZ],
});

export const dzReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_DZ_ALL:
      return state.map((dz) => ({
        ...dz,
        points: [...dz.points],
        connectedAZ: [...dz.connectedAZ],
        show: action.show,
      }));
    case SET_DZ_TYPE: {
      return state.map((dz) => {
        if (dz.name === action.name) {
          return {
            ...dz,
            points: [...dz.points],
            connectedAZ: [...dz.connectedAZ],
            type: action.dzType,
          };
        }
        return deepCopyDZ(dz);
      });
    }
    case SET_T1_VALUE: {
      return state.map((dz) => {
        if (dz.name === action.name) {
          return {
            ...dz,
            points: [...dz.points],
            connectedAZ: [...dz.connectedAZ],
            t1: action.value,
          };
        }
        return deepCopyDZ(dz);
      });
    }
    case SET_T2_VALUE: {
      return state.map((dz) => {
        if (dz.name === action.name) {
          return {
            ...dz,
            points: [...dz.points],
            connectedAZ: [...dz.connectedAZ],
            t2: action.value,
          };
        }
        return deepCopyDZ(dz);
      });
    }
    case SET_DZ_ACTIVATION_STATE: {
      return state.map((dz) => {
        if (dz.name === action.name) {
          return {
            ...dz,
            points: [...dz.points],
            connectedAZ: [...dz.connectedAZ],
            activation_state: action.value,
          };
        }
        return deepCopyDZ(dz);
      });
    }
    case SET_DZ_PRESENTATION_STATE: {
      return state.map((dz) => {
        if (dz.name === action.name) {
          return {
            ...deepCopyDZ(dz),
            presentation_state: action.value,
          };
        }
        return deepCopyDZ(dz);
      });
    }
    case SET_T1_TIMER_STATE: {
      return state.map((dz) => {
        if (dz.name === action.name) {
          return {
            ...deepCopyDZ(dz),
            t1_state: action.value,
          };
        }
        return deepCopyDZ(dz);
      });
    }
    case SET_T2_TIMER_STATE: {
      return state.map((dz) => {
        if (dz.name === action.name) {
          return {
            ...deepCopyDZ(dz),
            t2_state: action.value,
          };
        }
        return deepCopyDZ(dz);
      });
    }
    default:
      return state;
  }
};
