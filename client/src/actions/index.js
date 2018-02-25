import axios from 'axios';
import { FETCH_BROADBAND_BUNDLES } from './types';

export const fetchBroadbandBundles = () => async dispatch => {
  const res = await axios.get('/list-all-broadband');

  dispatch({ type: FETCH_BROADBAND_BUNDLES, payload: res.data });
};
