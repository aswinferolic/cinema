import React from 'react';
import * as S from './style';
import MovieItem from '../MovieItem';

const MoviesList = ({movies, baseurl}) => {
  return (
    <>
      <S.Wrapper>
        {movies?.results?.map((movie) => (
          <MovieItem key={movie?.id} movie={movie} baseurl={baseurl} />
        ))}
      </S.Wrapper>
    </>
  );
};

export default MoviesList;
