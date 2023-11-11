import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  staticCategories: ['Popular', 'Top Rated', 'Upcoming'],
  selected: 'Top Rated',
  loading: true,
};

export const configReducer = (state = INITIAL_STATE, action) => {
  switch (action?.type) {
    case TYPES.SET_LOADING:
      return {...state, loading: true};
    case TYPES.REMOVE_LOADING:
      return {...state, loading: false};
    case TYPES.GET_CONFIG:
      return {...state, base: action?.payload};
    default:
      return state;
  }
};
