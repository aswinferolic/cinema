import React, {useState} from 'react';
import LazyLoad from 'react-lazyload';
import * as S from './style';
import NothingSvg from '../../svg/nothing.svg';
import Rating from '../Rating';

const MovieItem = ({movie, baseurl}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <LazyLoad offset={200} height={200}>
      <S.MovieWrapper to={`/movie/${movie?.id}`}>
        {!loaded ? <S.ImgLoading> Loading... </S.ImgLoading> : null}
        <S.MovieImg
          error={error ? 1 : 0}
          onLoad={() => setLoaded(true)}
          style={!loaded ? {display: 'none'} : {}}
          onError={(e) => {
            setError(true);
            if (e.target.src !== NothingSvg) {
              e.target.src = NothingSvg;
            }
          }}
          src={`${baseurl}w342${movie?.poster_path}`}
        />
        <S.DetailsWrapper>
          <S.Title> {movie?.title} </S.Title>
          <S.RatingsWrapper>
            <Rating number={movie?.vote_average / 2} />
            <S.Tooltip>
              {movie.vote_average} average rating on {movie.vote_count} votes
            </S.Tooltip>
          </S.RatingsWrapper>
        </S.DetailsWrapper>
      </S.MovieWrapper>
    </LazyLoad>
  );
};

export default MovieItem;
