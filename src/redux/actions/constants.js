export const SHOW_OZ = 'SHOW_OZ';

//AZ
export const SHOW_AZ_ALL = 'SHOW_AZ_ALL';
export const SET_AZ_STATE = 'SET_AZ_STATE';
export const AZ_STATES = ['Non-Activated', 'Activated'];

//DZ
export const SHOW_DZ_ALL = 'SHOW_DZ_ALL';
export const SET_DZ_TYPE = 'SET_DZ_TYPE';
export const SET_T1_VALUE = 'SET_T1_VALUE';
export const SET_T2_VALUE = 'SET_T2_VALUE';

export const SET_DZ_ACTIVATION_STATE = 'SET_DZ_ACTIVATION_STATE';
export const SET_DZ_PRESENTATION_STATE = 'SET_DZ_PRESENTATION_STATE';

export const SET_T1_TIMER_STATE = 'SET_T1_TIMER_STATE';
export const SET_T2_TIMER_STATE = 'SET_T2_TIMER_STATE';

export const DZ_TYPES = [
  'Immediate',
  'Delayed',
  'Dependency',
  'Delayed Dependency',
  'Maritime SOLAS',
];

export const DZ_ACTIVATION_STATE = [
  'Quiescent',
  'PreAlarm',
  'SilentAlarm',
  'SmallAlarm',
  'LargeAlarm',
  'Blocked',
];

export const DZ_PRESENTATION_STATE = ['Quiescent', 'PreAlarm', 'Alarm'];

export const DZ_TIMER_STATE = [
  'Non-Activated',
  'Activated',
  'Expired',
  'On-Hold',
];

//Operation
export const SET_CURRENT_UNIT = 'SET_CURRENT_UNIT';
export const CLEAR_CURRENT_UNIT = 'CLEAR_CURRENT_UNIT';
export const SET_MONITER_UNIT = 'SET_MONITER_UNIT';
export const REMOVE_MONITER_UNIT = 'REMOVE_MONITER_UNIT';

//PNT
export const SET_PNT_ALARM_STATE = 'SET_PNT_ALARM_STATE';
export const SET_PNT_FAULT_STATE = 'SET_PNT_FAULT_STATE';
export const SET_PNT_DISABLE_STATE = 'SET_PNT_DISABLE_STATE';

export const PNT_ALARM_STATES = ['Quiescent', 'PreAlarm', 'Alarm'];
export const PNT_FAULT_STATES = ['Fault_Ok', 'Fault'];
export const PNT_DISABLE_STATES = ['Enable', 'Disable'];

//FAD
export const SET_FAD_STATE = 'SET_FAD_STATE';
export const FAD_STATES = ['Non-Activated', 'Activated'];

//Panel
export const SET_NIGHT_MODE = 'SET_NIGHT_MODE';
export const SET_PROLONG = 'SET_NIGHT_MODE';
