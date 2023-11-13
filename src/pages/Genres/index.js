import React, {useEffect} from 'react';
import {getMoviesGenres, setSelectedMenu} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import {useLocation, useParams} from 'react-router-dom';

const Genres = () => {
  const dispatch = useDispatch();
  const {name} = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page');

  useEffect(() => {
    dispatch(setSelectedMenu(name));
    dispatch(getMoviesGenres(name, page));
  }, [dispatch, name, page]);
  return <div>Genres</div>;
};

export default Genres;
