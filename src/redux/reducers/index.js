import {combineReducers} from 'redux';
import {configReducer} from './config.reducer';

export default combineReducers({
  config: configReducer,
});
