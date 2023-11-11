import * as TYPES from './types';
import movieAPI from '../movieAPI';

export const init = () => async (dispatch) => {
  try {
    dispatch({type: TYPES.SET_LOADING});
    await dispatch(getConfig());
    dispatch({type: TYPES.REMOVE_LOADING});
  } catch (error) {
    dispatch({
      type: TYPES?.INSERT_ERROR,
      payload: error?.response,
    });
  }
};

export const getConfig = () => async (dispatch) => {
  try {
    const res = await movieAPI.get('/configuration');
    await dispatch({
      type: TYPES.GET_CONFIG,
      payload: res?.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.INSERT_ERROR,
      payload: error?.response,
    });
  }
};
