import * as TYPES from '../actions/types';

export const movieReducer = (state = {loading: true}, action) => {
  switch (action?.type) {
    case TYPES.FETCH_MOVIE_LOADING:
      return {...state, loading: true};
    case TYPES.FETCH_MOVIE_FINISHED:
      return {...state, loading: false};
    case TYPES.FETCH_MOVIE:
      return {...state, ...action?.payload};
    default:
      return state;
  }
};
