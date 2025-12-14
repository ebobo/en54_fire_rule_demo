import * as dzSelectors from './dzSelectors';
import * as pointSelectors from './pointSelectors';

export const dzs = (state) => dzSelectors.dzs(state);
export const points = (state) => pointSelectors.points(state);
