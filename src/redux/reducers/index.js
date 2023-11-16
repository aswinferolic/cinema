import {combineReducers} from 'redux';
import {configReducer} from './config.reducer';
import {moviesReducer} from './movies.reducer';
import {errorReducer} from './error.reducer';
import {movieReducer} from './movie.reducer';

export default combineReducers({
  config: configReducer,
  movies: moviesReducer,
  movie: movieReducer,
  error: errorReducer,
});
