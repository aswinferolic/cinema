import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {getMoviesDiscover, setSelectedMenu} from '../../redux/actions';
import {useDispatch} from 'react-redux';

const Discover = () => {
  const dispatch = useDispatch();

  const {name} = useParams();
  const lowercasedName = name.replace(/\s+/g, '_').toLowerCase();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page');

  useEffect(() => {
    dispatch(setSelectedMenu(name));
    dispatch(getMoviesDiscover(lowercasedName, page));
  }, [dispatch, lowercasedName, name, page]);

  return <div>Discover</div>;
};

export default Discover;
