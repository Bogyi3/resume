import openAboutMeReducer from './openAboutMe';
import windowSizeReducer from './windowSize'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  openAboutMeReducer,
  windowSizeReducer
});

export default allReducers;