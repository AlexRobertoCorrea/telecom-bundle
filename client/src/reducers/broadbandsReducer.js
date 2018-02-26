import { FETCH_BROADBAND_BUNDLES } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_BROADBAND_BUNDLES:
      return action.payload || [];
    default:
      return state;
  }
}
