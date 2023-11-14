import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import {
  clearMovies,
  getMoviesDiscover,
  setSelectedMenu,
} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import MoviesList from '../../components/MoviesList';
import styled from 'styled-components';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Discover = () => {
  const dispatch = useDispatch();
  const {name} = useParams();
  const lowercasedName = name.replace(/\s+/g, '_').toLowerCase();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page');

  const config = useSelector((state) => state?.config);
  const {secure_base_url} = config?.loading ? '' : config?.base?.images;
  const movies = useSelector((state) => state?.movies);

  useEffect(() => {
    dispatch(setSelectedMenu(name));
    scroll.scrollToTop({
      smooth: true,
    });
    dispatch(getMoviesDiscover(lowercasedName, page));
    dispatch(clearMovies());
  }, [dispatch, lowercasedName, name, page]);

  // loader
  if (movies?.loading) return <p> Loading... </p>;
  if (config?.loading) return <p> Loading...</p>;
  return (
    <Wrapper>
      {!config?.loading && (
        <Header title={config?.selected} subtitle="movies" />
      )}
      {!config?.loading && (
        <MoviesList movies={movies} baseurl={secure_base_url} />
      )}

      {!config?.loading && <Pagination movies={movies} />}
    </Wrapper>
  );
};

export default Discover;
