import { combineReducers } from 'redux';
import { azReducer } from './azReducer';
import { dzReducer } from './dzReducer';
import { ozReducer } from './ozReducer';
import { opReducer } from './opReducer';
import { pointReducer } from './pointReducer';
import { fadReducer } from './fadReducer';
import { panelReducer } from './panelReducer';

export const rootReducer = combineReducers({
  az: azReducer,
  dz: dzReducer,
  oz: ozReducer,
  op: opReducer,
  fad: fadReducer,
  point: pointReducer,
  panel: panelReducer,
});
