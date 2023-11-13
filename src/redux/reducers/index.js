import {combineReducers} from 'redux';
import {configReducer} from './config.reducer';
import {moviesReducer} from './movies.reducer';

export default combineReducers({
  config: configReducer,
  movies: moviesReducer,
});
