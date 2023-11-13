import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {setSelectedMenu} from '../../redux/actions';
import {useDispatch} from 'react-redux';

const Discover = () => {
  const {name} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedMenu(name));
  }, [dispatch, name]);

  return <div>Discover</div>;
};

export default Discover;
