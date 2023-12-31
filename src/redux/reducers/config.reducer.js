import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  staticCategories: ['Popular', 'Top Rated', 'Upcoming'],
  selected: 'Popular',
  loading: true,
};

export const configReducer = (state = INITIAL_STATE, action) => {
  switch (action?.type) {
    case TYPES.SET_LOADING:
      return {...state, loading: true};
    case TYPES.REMOVE_LOADING:
      return {...state, loading: false};
    case TYPES.SET_SELECTED_MENU:
      return {...state, selected: action?.payload};
    case TYPES.REMOVE_SELECTED_MENU:
      return {...state, selected: null};
    case TYPES.GET_CONFIG:
      return {...state, base: action?.payload};
    case TYPES.GET_GENRES:
      return {...state, ...action?.payload};
    default:
      return state;
  }
};
