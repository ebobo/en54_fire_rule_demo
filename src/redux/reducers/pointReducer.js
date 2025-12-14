import {
  SET_PNT_ALARM_STATE,
  SET_PNT_FAULT_STATE,
  SET_PNT_DISABLE_STATE,
  PNT_ALARM_STATES,
  PNT_FAULT_STATES,
  PNT_DISABLE_STATES,
} from '../actions/constants';

//point alarm state: "Quiescent"/ "PreAlarm" / "Alarm"
//point fault state "Fault" / "Fault_Ok"
//point disable state "Enable" / "Disable"
const defaultState = [
  {
    name: 'A0101',
    model: 'BHH-320',
    type: 'MULTI',
    DZ: ['DZ-1'],
    alarm_state: PNT_ALARM_STATES[0], // Quiescent
    fault_state: PNT_FAULT_STATES[0], // Fault
    disable_state: PNT_DISABLE_STATES[0], // Enable
  },
  {
    name: 'A0102',
    model: 'BHH-320',
    type: 'MULTI',
    DZ: ['DZ-1'],
    alarm_state: PNT_ALARM_STATES[0], // Quiescent
    fault_state: PNT_FAULT_STATES[0], // Fault
    disable_state: PNT_DISABLE_STATES[0], // Enable
  },
  {
    name: 'A0103',
    model: 'BF-300',
    type: 'MCP',
    DZ: ['DZ-1'],
    alarm_state: PNT_ALARM_STATES[0], // Quiescent
    fault_state: PNT_FAULT_STATES[0], // Fault
    disable_state: PNT_DISABLE_STATES[0], // Enable
  },
  {
    name: 'A0104',
    model: 'BF-300',
    type: 'MULTI',
    DZ: ['DZ-2'],
    alarm_state: PNT_ALARM_STATES[0], // Quiescent
    fault_state: PNT_FAULT_STATES[0], // Fault
    disable_state: PNT_DISABLE_STATES[0], // Enable
  },
  {
    name: 'B0105',
    model: 'BHH-320',
    type: 'MULTI',
    DZ: ['DZ-3'],
    alarm_state: PNT_ALARM_STATES[0], // Quiescent
    fault_state: PNT_FAULT_STATES[0], // Fault
    disable_state: PNT_DISABLE_STATES[0], // Enable
  },
  {
    name: 'B0107',
    model: 'BHH-320',
    type: 'MULTI',
    DZ: ['DZ-4'],
    alarm_state: PNT_ALARM_STATES[0], // Quiescent
    fault_state: PNT_FAULT_STATES[0], // Fault
    disable_state: PNT_DISABLE_STATES[0], // Enable
  },
  {
    name: 'B0109',
    model: 'BHH-320',
    type: 'MULTI',
    DZ: ['DZ-5'],
    alarm_state: PNT_ALARM_STATES[0], // Quiescent
    fault_state: PNT_FAULT_STATES[0], // Fault
    disable_state: PNT_DISABLE_STATES[0], // Enable
  },
];

export const pointReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PNT_ALARM_STATE:
      return state.map((pt) => {
        if (pt.name === action.name) {
          return {
            ...pt,
            DZ: [...pt.DZ],
            alarm_state: action.state,
          };
        }
        return {
          ...pt,
          DZ: [...pt.DZ],
        };
      });
    case SET_PNT_FAULT_STATE:
      return state.map((pt) => {
        if (pt.name === action.name) {
          return {
            ...pt,
            DZ: [...pt.DZ],
            fault_state: action.state,
          };
        }
        return {
          ...pt,
          DZ: [...pt.DZ],
        };
      });
    case SET_PNT_DISABLE_STATE:
      return state.map((pt) => {
        if (pt.name === action.name) {
          return {
            ...pt,
            DZ: [...pt.DZ],
            disable_state: action.state,
          };
        }
        return {
          ...pt,
          DZ: [...pt.DZ],
        };
      });
    default:
      return state;
  }
};
