import * as TYPES from './types';
import movieAPI from '../movieAPI';

export const init = () => async (dispatch) => {
  try {
    dispatch({type: TYPES.SET_LOADING});
    await dispatch(getConfig());
    await dispatch(getGenres());
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

export const getGenres = () => async (dispatch) => {
  try {
    const res = await movieAPI.get('genre/movie/list');
    await dispatch({
      type: TYPES.GET_GENRES,
      payload: res?.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES?.INSERT_ERROR,
      payload: error?.response,
    });
  }
};

export const setSelectedMenu = (name) => async (dispatch, getState) => {
  try {
    const {loading, staticCategories, genres} = getState().config;
    if (!loading) {
      if (!name) {
        dispatch({type: TYPES.REMOVE_SELECTED_MENU});
      }
      if (
        staticCategories.find((category) => category === name) ||
        genres.find((genre) => genre?.name === name)
      ) {
        dispatch({
          type: TYPES.SET_SELECTED_MENU,
          payload: name,
        });
      }
    }
  } catch (error) {
    dispatch({
      type: TYPES?.INSERT_ERROR,
      payload: error?.response,
    });
  }
};
