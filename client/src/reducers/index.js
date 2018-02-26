import { combineReducers } from 'redux';
import broadbandsReducer from './broadbandsReducer';

export default combineReducers({
  broadbands: broadbandsReducer
});
