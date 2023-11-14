import React, {useEffect} from 'react';
import styled from 'styled-components';
import {getMoviesGenres, setSelectedMenu} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation, useParams} from 'react-router-dom';
import MoviesList from '../../components/MoviesList';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import {animateScroll as scroll} from 'react-scroll';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Genres = () => {
  const dispatch = useDispatch();
  const {name} = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page');
  const movies = useSelector((state) => state?.movies);
  const config = useSelector((state) => state?.config);
  const {secure_base_url} = config?.loading ? '' : config?.base?.images;
  useEffect(() => {
    dispatch(setSelectedMenu(name));
    scroll.scrollToTop({
      smooth: true,
    });
    dispatch(getMoviesGenres(name, page));
  }, [dispatch, name, page]);
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

export default Genres;
