import * as TYPES from '../actions/types';

export const errorReducer = (state = [], action) => {
  switch (action?.type) {
    case TYPES.INSERT_ERROR:
      if (!action?.payload) {
        return [];
      }
      return action?.payload;
    case TYPES.CLEAR_ERROR:
      return [];
    default:
      return state;
  }
};
