import * as TYPES from './types';
import movieAPI from '../movieAPI';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

export const getMoviesDiscover = (name, page) => async (dispatch, getState) => {
  try {
    const {selected} = getState().config;
    if (!selected) return;

    dispatch({type: TYPES.FETCH_MOVIES_LOADING});
    await delay(400);
    const res = await movieAPI.get(`/movie/${name}`, {
      params: {
        page,
      },
    });
    await dispatch({
      type: TYPES.FETCH_MOVIES_DISCOVER,
      payload: res?.data,
    });

    dispatch({type: TYPES.FETCH_MOVIES_FINISHED});
  } catch (error) {
    dispatch({
      type: TYPES.INSERT_ERROR,
      payload: error?.response,
    });
  }
};

export const getMoviesGenres = (name, page) => async (dispatch, getState) => {
  try {
    const {selected} = getState().config;

    const genres = [
      {id: '28', name: 'Action'},
      {id: '12', name: 'Adventure'},
      {id: '16', name: 'Animation'},
      {id: '35', name: 'Comedy'},
      {id: '80', name: 'Crime'},
      {id: '99', name: 'Documentary'},
      {id: '18', name: 'Drama'},
      {id: '10751', name: 'Family'},
      {id: '14', name: 'Fantasy'},
      {id: '36', name: 'History'},
      {id: '27', name: 'Horror'},
      {id: '10402', name: 'Music'},
      {id: '9648', name: 'Mystery'},
      {id: '10749', name: 'Romance'},
      {id: '878', name: 'Science Fiction'},
      {id: '10770', name: 'TV Movie'},
      {id: '53', name: 'Thriller'},
      {id: '10752', name: 'War'},
      {id: '37', name: 'Western'},
    ];

    if (!selected) return;
    await dispatch({type: TYPES.FETCH_MOVIES_LOADING});
    const genreId = genres
      .filter((el) => el.name === name)
      .map((el) => el.id)
      .join('');

    const res = await movieAPI.get('/discover/movie', {
      params: {
        with_genres: genreId,
        page,
      },
    });
    await dispatch({
      type: TYPES.FETCH_MOVIES_DISCOVER,
      payload: res?.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.INSERT_ERROR,
      payload: error?.response,
    });
  }
};

export const clearMovies = () => {
  return {type: TYPES.FETCH_MOVIES_LOADING};
};

export const getMoviesSearch = (query, page) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.FETCH_MOVIES_LOADING,
    });
    const res = await movieAPI.get('/search/movie', {
      params: {
        query,
        page,
      },
    });

    await dispatch({
      type: TYPES.FETCH_MOVIES_SEARCH,
      payload: res?.data,
    });

    dispatch({
      type: TYPES.FETCH_MOVIES_FINISHED,
    });
  } catch (error) {
    dispatch({
      type: TYPES.INSERT_ERROR,
      payload: error?.response,
    });
  }
};

export const getMovieDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.FETCH_MOVIE_LOADING,
    });

    const res = await movieAPI.get(`/movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    });

    await dispatch({
      type: TYPES.FETCH_MOVIE,
      payload: res?.data,
    });

    dispatch({
      type: TYPES?.FETCH_MOVIE_FINISHED,
    });
  } catch (error) {
    dispatch({
      type: TYPES.INSERT_ERROR,
      payload: error?.response,
    });
  }
};

export const clearMovie = () => {
  return {
    type: TYPES.FETCH_MOVIE_LOADING,
  };
};

export const getRecommendedMovies = (id, page) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.FETCH_RECOMMENDATIONS_LOADING,
    });

    const res = await movieAPI.get(`/movie/${id}/recommendations`, {
      params: {
        page,
      },
    });

    await dispatch({
      type: TYPES.FETCH_RECOMMENDATIONS,
      payload: res?.data,
    });

    dispatch({
      type: TYPES.FETCH_RECOMMENDATIONS_FINISHED,
    });
  } catch (error) {
    dispatch({
      type: TYPES.INSERT_ERROR,
      payload: error?.response,
    });
  }
};
