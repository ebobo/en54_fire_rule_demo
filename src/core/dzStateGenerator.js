import {
  PNT_ALARM_STATES,
  DZ_ACTIVATION_STATE,
  DZ_PRESENTATION_STATE,
  AZ_STATES,
  DZ_TIMER_STATE,
} from '../redux/actions/constants';

export const calcDZstatesFromPoint = (dzs, points, point, night) => {
  const pointDz = dzs.filter((dz) => point.DZ.includes(dz.name));
  return calcDZstates(points, pointDz, night);
};

export const calcDZstates = (points, dzs, night = false) => {
  console.log('calculate dz states');
  let DzStates = [];

  dzs.forEach((dz) => {
    switch (dz.type) {
      case 'Immediate': {
        const state = calImmediateDzState(dz, points);
        state && DzStates.push(state);
        break;
      }
      case 'Delayed': {
        const state = night
          ? calImmediateDzState(dz, points)
          : calDelayedDzState(dz, points);
        state && DzStates.push(state);
        break;
      }
      case 'Dependency': {
        const state = calDependencyDzState(dz, points);
        state && DzStates.push(state);
        break;
      }
      case 'Delayed Dependency': {
        const state = night
          ? calImmediateDzState(dz, points)
          : calDelayedDependencyDzState(dz, points);
        state && DzStates.push(state);
        break;
      }
      default:
        break;
    }
  });

  return DzStates;
};

// Immediate
//The detection zone will turn in to Large Alarm
//1. one detector in this DZ enters Alarm. Connected alarm zones will be activated immediately
const calImmediateDzState = (dz, points) => {
  const dzPoints = points.filter((pnt) => pnt.DZ.includes(dz.name));

  let astate = DZ_ACTIVATION_STATE[0];
  let pstate = DZ_PRESENTATION_STATE[0];

  const alarmPoint = dzPoints.find(
    (pnt) => pnt.alarm_state === PNT_ALARM_STATES[2]
  );
  if (alarmPoint) {
    astate = DZ_ACTIVATION_STATE[4];
    pstate = DZ_PRESENTATION_STATE[2];
  } else {
    const preAlarmPoint = dzPoints.find(
      (pnt) => pnt.alarm_state === PNT_ALARM_STATES[1]
    );
    if (preAlarmPoint) {
      astate = DZ_ACTIVATION_STATE[1];
      pstate = DZ_PRESENTATION_STATE[1];
    }
  }

  if (dz.activation_state !== astate) {
    const state =
      astate === DZ_ACTIVATION_STATE[4] ? AZ_STATES[1] : AZ_STATES[0];
    const azStates = dz.connectedAZ.map((name) => ({
      name,
      state,
    }));

    return { name: dz.name, astate, pstate, azStates };
  }
  return null;
};

//Dependency
//The detection zone will turn in to Large Alarm :
// 1. one MCP in this DZ enters Alarm, connected alarm zones will be activated immediately
// 2. one detector in this DZ enters Alarm and Global Two Points In Alarm
//   (The Global Two Points In Alarm input is set if there is at least two Point in the whole installation that are in the ALARM state.)
//The detection zone will turn in to Silent Alarm :
// 1. one detector in this DZ enters Alarm
//The Presentation State：
// 1. MCP or Detector Alarm State inputs.

const calDependencyDzState = (dz, points) => {
  let astate = DZ_ACTIVATION_STATE[0];
  let pstate = DZ_PRESENTATION_STATE[0];

  const globalTwoPnt =
    points.filter((pnt) => pnt.alarm_state === PNT_ALARM_STATES[2]).length > 1;

  const dzPoints = points.filter((pnt) => pnt.DZ.includes(dz.name));

  const alarmPoints = dzPoints.filter(
    (pnt) => pnt.alarm_state === PNT_ALARM_STATES[2]
  );

  if (alarmPoints.length > 1) {
    astate = DZ_ACTIVATION_STATE[4];
    pstate = DZ_PRESENTATION_STATE[2];
  } else if (alarmPoints.length === 1) {
    if (alarmPoints[0].type === 'MCP' || globalTwoPnt) {
      astate = DZ_ACTIVATION_STATE[4];
    } else {
      astate = DZ_ACTIVATION_STATE[2];
    }
    pstate = DZ_PRESENTATION_STATE[2];
  } else {
    const preAlarmPoint = dzPoints.find(
      (pnt) => pnt.alarm_state === PNT_ALARM_STATES[1]
    );
    if (preAlarmPoint) {
      astate = DZ_ACTIVATION_STATE[1];
      pstate = DZ_PRESENTATION_STATE[1];
    }
  }

  if (dz.activation_state !== astate) {
    const state =
      astate === DZ_ACTIVATION_STATE[4] ? AZ_STATES[1] : AZ_STATES[0];
    const azStates = dz.connectedAZ.map((name) => ({
      name,
      state,
    }));

    return { name: dz.name, astate, pstate, azStates };
  }

  return null;
};

//Delayed
//DZ state: [QUIECENT, PRE-ALARM, SILENT-ALARM, LARGE-ALARM]
//The detection zone will turn in to Large Alarm :
// 1. one or more MCP in this DZ enters Alarm, connected alarm zones will be activated immediately
// 2. one detector in this DZ enters Alarm and either T1 or T2 expires
// 3. one detector in this DZ enters Alarm and user presses the activate button while T1 or T2 is running
//The detection zone will turn in to Silent Alarm :
// 1. one detector in this DZ enters Alarm
//The Presentation State：
// 1. MCP or Detector Alarm State inputs.
//The night mode:
// 1. logic will be the same as Immediate DZ

const calDelayedDzState = (dz, points) => {
  let astate = DZ_ACTIVATION_STATE[0];
  let pstate = DZ_PRESENTATION_STATE[0];
  let t1state = dz.t1_state;
  let t2state = dz.t2_state;

  //find all points in this DZ
  const dzPoints = points.filter((pnt) => pnt.DZ.includes(dz.name));

  //find all points in this DZ with Alarm state
  const alarmPoints = dzPoints.filter(
    (pnt) => pnt.alarm_state === PNT_ALARM_STATES[2]
  );

  // if there is at least on point in alarm state
  if (alarmPoints.length > 0) {
    pstate = DZ_PRESENTATION_STATE[2]; // set DZ presentation state to Alarm.
    const mcp = alarmPoints.filter((ap) => ap.type === 'MCP');
    //if there is a mcp in alarm state set DZ to "LargeAlarm"
    if (mcp.length > 0) {
      astate = DZ_ACTIVATION_STATE[4];
      t1state = DZ_TIMER_STATE[0];
      t2state = DZ_TIMER_STATE[0];
    } else {
      if (
        // if there t1 or t2 in "Expired" state, set DZ to "LargeAlarm"
        dz.t1_state === DZ_TIMER_STATE[2] || //
        dz.t2_state === DZ_TIMER_STATE[2]
      ) {
        astate = DZ_ACTIVATION_STATE[4];
      } else {
        // set DZ to SilentAlarm
        astate = DZ_ACTIVATION_STATE[2];
      }
      // if t1 and t2 is in "Non-Activated" state and dz state is in "Quiescent" or "PreAlarm"
      if (
        dz.t1_state === DZ_TIMER_STATE[0] &&
        dz.t2_state === DZ_TIMER_STATE[0] &&
        (dz.activation_state === DZ_ACTIVATION_STATE[0] ||
          dz.activation_state === DZ_ACTIVATION_STATE[1])
      ) {
        t1state = DZ_TIMER_STATE[1];
      }
      // if t1 in "On-Hold" state and t2 is in "Non-Activated" state
      if (
        dz.t1_state === DZ_TIMER_STATE[3] &&
        dz.t2_state === DZ_TIMER_STATE[0]
      ) {
        // set t2 to "Activated"
        t2state = DZ_TIMER_STATE[1];
      }
    }
  } else {
    const preAlarmPoint = dzPoints.find(
      (pnt) => pnt.alarm_state === PNT_ALARM_STATES[1]
    );
    if (preAlarmPoint) {
      astate = DZ_ACTIVATION_STATE[1];
      pstate = DZ_PRESENTATION_STATE[1];
    }
    t1state = DZ_TIMER_STATE[0];
    t2state = DZ_TIMER_STATE[0];
  }
  if (
    dz.activation_state !== astate ||
    t1state !== dz.t1_state ||
    t2state !== dz.t2_state
  ) {
    const state =
      astate === DZ_ACTIVATION_STATE[4] ? AZ_STATES[1] : AZ_STATES[0];
    const azStates = dz.connectedAZ.map((name) => ({
      name,
      state,
    }));

    return { name: dz.name, astate, pstate, azStates, t1state, t2state };
  }

  return null;
};

//Delayed Dependency
//DZ state: [QUIECENT, PRE-ALARM, SILENT-ALARM, SMALL-ALARM, LARGE-ALARM]
//The detection zone will turn in to Large Alarm :
// 1. one or more MCp, Heat, Sprinkler in this DZ enters Alarm, connected alarm zones will be activated immediately
// 2. one detector in this DZ enters Alarm and Global Two Points In Alarm
//   (The Global Two Points In Alarm input is set if there is at least two Point in the whole installation that are in the ALARM state.)
// 3. one detector in this DZ enters Alarm and T2 expires (T1 change to T2 automatically if )
// 4. one detector in this DZ enters Alarm and user presses the activate button while T1 or T2 is running
//The detection zone will turn in to Silent Alarm :
// 1. one detector in this DZ enters Alarm, then T1 start
//The detection zone will turn in to Small Alarm :
// 1. one detector in this DZ enters Alarm and T1 expires, then T2 start
//The Presentation State：
// 1. MCP or Detector Alarm State inputs.
//The night mode:
// 1. logic will be the same as Immediate DZ

const calDelayedDependencyDzState = (dz, points) => {
  let astate = DZ_ACTIVATION_STATE[0];
  let pstate = DZ_PRESENTATION_STATE[0];
  let t1state = dz.t1_state;
  let t2state = dz.t2_state;

  //find all points in this DZ
  const dzPoints = points.filter((pnt) => pnt.DZ.includes(dz.name));

  //find all points in this DZ with Alarm state
  const alarmPoints = dzPoints.filter(
    (pnt) => pnt.alarm_state === PNT_ALARM_STATES[2]
  );

  // if there is at least on point in alarm state
  if (alarmPoints.length > 0) {
    pstate = DZ_PRESENTATION_STATE[2]; // set DZ presentation state to Alarm.
    const mcp = alarmPoints.filter((ap) => ap.type === 'MCP');
    //if there is a mcp in alarm state set DZ to "LargeAlarm"
    if (mcp.length > 0) {
      astate = DZ_ACTIVATION_STATE[4];
      t1state = DZ_TIMER_STATE[0];
      t2state = DZ_TIMER_STATE[0];
    } else {
      if (
        // if t1 and t2 both in "Expired" state, set DZ to "LargeAlarm"
        dz.t1_state === DZ_TIMER_STATE[2] && //
        dz.t2_state === DZ_TIMER_STATE[2]
      ) {
        // set DZ to LargeAlarm
        astate = DZ_ACTIVATION_STATE[4];
      } else if (
        // if t1 in "Expired" state and t2 in "Activated", set DZ to "SmallAlarm"
        dz.t1_state === DZ_TIMER_STATE[2] && //
        dz.t2_state === DZ_TIMER_STATE[1]
      ) {
        // set DZ to SmallAlarm
        astate = DZ_ACTIVATION_STATE[3];
      } else {
        // set DZ to SilentAlarm
        astate = DZ_ACTIVATION_STATE[2];
      }
      // if t1 and t2 is in "Non-Activated" state and dz state is in "Quiescent" or "PreAlarm"
      if (
        dz.t1_state === DZ_TIMER_STATE[0] &&
        dz.t2_state === DZ_TIMER_STATE[0] &&
        (dz.activation_state === DZ_ACTIVATION_STATE[0] ||
          dz.activation_state === DZ_ACTIVATION_STATE[1])
      ) {
        // set t1 to "Activated"
        t1state = DZ_TIMER_STATE[1];
      }
      // if t1 in "Expired" or "On-Hold" state and t2 is in "Non-Activated" state
      else if (
        (dz.t1_state === DZ_TIMER_STATE[2] ||
          dz.t1_state === DZ_TIMER_STATE[3]) &&
        dz.t2_state === DZ_TIMER_STATE[0]
      ) {
        // set t2 to "Activated"
        t2state = DZ_TIMER_STATE[1];
      }
    }
  } else {
    const preAlarmPoint = dzPoints.find(
      (pnt) => pnt.alarm_state === PNT_ALARM_STATES[1]
    );
    if (preAlarmPoint) {
      astate = DZ_ACTIVATION_STATE[1];
      pstate = DZ_PRESENTATION_STATE[1];
    }
    t1state = DZ_TIMER_STATE[0];
    t2state = DZ_TIMER_STATE[0];
  }
  if (
    dz.activation_state !== astate ||
    t1state !== dz.t1_state ||
    t2state !== dz.t2_state
  ) {
    const state =
      astate === DZ_ACTIVATION_STATE[4] ? AZ_STATES[1] : AZ_STATES[0];
    const azStates = dz.connectedAZ.map((name) => ({
      name,
      state,
    }));

    return { name: dz.name, astate, pstate, azStates, t1state, t2state };
  }

  return null;
};
