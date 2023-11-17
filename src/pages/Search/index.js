import React, {useEffect} from 'react';
import styled from 'styled-components';
import MoviesList from '../../components/MoviesList';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import {useLocation, useParams} from 'react-router-dom';
import {clearMovies, getMoviesSearch} from '../../redux/actions';
import Pagination from '../../components/Pagination';
import {animateScroll as scroll} from 'react-scroll';
import NotFound from '../../components/NotFound';
import {Helmet} from 'react-helmet';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Search = () => {
  const dispatch = useDispatch();

  const config = useSelector((state) => state?.config);
  const {secure_base_url} = config?.loading ? '' : config?.base?.images;

  const movies = useSelector((state) => state?.movies);
  const {query} = useParams();

  const search = useLocation().search;
  const page = new URLSearchParams(search).get('page');

  useEffect(() => {
    dispatch(getMoviesSearch(query, page));
    scroll.scrollToTop({
      smooth: true,
    });
    return () => clearMovies();
  }, [dispatch, page, query]);

  if (movies?.loading) {
    return <p> Loading... </p>;
  }

  if (movies?.total_results === 0) {
    return (
      <>
        <Helmet>search results</Helmet>

        <NotFound
          title="Sorry!"
          subtitle={`There were no results for ${query}`}
        />
      </>
    );
  }

  return (
    <Wrapper>
      <Helmet>search results</Helmet>
      <Header title={query} subtitle="search results" />
      {!config?.loading && (
        <MoviesList movies={movies} baseurl={secure_base_url} />
      )}
      {!config?.loading && <Pagination movies={movies} />}
    </Wrapper>
  );
};

export default Search;
