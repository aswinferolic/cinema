import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import * as S from './style';
import {
  clearMovie,
  getMovieDetail,
  getRecommendedMovies,
} from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import LazyLoad from 'react-lazyload';
import NothingSvg from '../../svg/nothing.svg';
import Header from '../../components/Header';
import Rating from '../../components/Rating';
import Button from '../../components/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDotCircle, faLink, faPlay} from '@fortawesome/free-solid-svg-icons';
import {faImdb} from '@fortawesome/free-brands-svg-icons';
import {animateScroll as scroll, Element} from 'react-scroll';
import NotFound from '../../components/NotFound';
import MoviesList from '../../components/MoviesList';
import {Helmet} from 'react-helmet';

const Movie = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [contain, setContain] = useState(false);

  const movie = useSelector((state) => state?.movie);
  const config = useSelector((state) => state?.config);

  const {secure_base_url} = config?.loading ? '' : config?.base?.images;
  const search = useLocation().search;
  const page = new URLSearchParams(search).get('page');
  const {movieId} = useParams();
  const recommended = useSelector((state) => state.recommendedMovies);

  useEffect(() => {
    dispatch(getMovieDetail(movieId));
    dispatch(getRecommendedMovies(movieId), page);
    scroll.scrollToTop({
      smooth: true,
    });
    return () => {
      clearMovie();
    };
  }, [dispatch, movieId, page]);

  return (
    <S.Wrapper>
      {!movie?.loading && <Helmet> {`${movie?.title}`} </Helmet>}
      <LazyLoad offset={500}>
        {!movie?.loading && (
          <S.MovieWrapper>
            {!loaded && <S.ImgLoading> Loading...</S.ImgLoading>}
            <S.ImageWrapper style={!loaded ? {display: 'none'} : {}}>
              <S.MovieImg
                contain={contain ? 1 : 0}
                src={`${secure_base_url}w780${movie?.poster_path}`}
                onLoad={() => setLoaded(true)}
                onError={(e) => {
                  setContain(true);
                  if (e.target.src !== `${NothingSvg}`) {
                    e.target.src = `${NothingSvg}`;
                  }
                }}
              />
            </S.ImageWrapper>
            <S.MovieDetails>
              <S.HeaderWrapper>
                <Header
                  size={2}
                  title={movie?.title}
                  subtitle={movie?.tagline}
                />
              </S.HeaderWrapper>
              <S.DetailsWrapper>
                <S.RatingsWrapper>
                  <Rating number={movie?.vote_average / 2} />
                  <S.RatingNumber>
                    {movie?.vote_average.toFixed(1)}
                  </S.RatingNumber>
                </S.RatingsWrapper>
                <S.Info>
                  {!movie?.loading &&
                    renderInfo(
                      movie.spoken_languages,
                      movie.runtime,
                      splitYear(movie.release_date)
                    )}
                </S.Info>
              </S.DetailsWrapper>
              <S.Heading> The genres</S.Heading>
              <S.LinkWrapper> {renderGenres(movie?.genres)}</S.LinkWrapper>
              <S.Heading> Synopsis </S.Heading>
              <S.Synopsis>
                {movie?.overview
                  ? movie?.overview
                  : 'There is no synopsis available'}
              </S.Synopsis>
              <S.ButtonsWrapper>
                <S.LeftButtons>
                  {renderWebsite(movie?.homepage)}
                  {renderImdb(movie?.imdb_id)}
                  {renderTrailer(movie?.videos?.results)}
                </S.LeftButtons>
              </S.ButtonsWrapper>
            </S.MovieDetails>
          </S.MovieWrapper>
        )}
      </LazyLoad>
      <Header title="Recommended" subtitle="movies" />
      {renderRecommendedMovies(recommended, secure_base_url)}
    </S.Wrapper>
  );
};

const renderInfo = (languages, time, data) => {
  const info = [];
  if (languages.length !== 0) {
    info.push(languages[0].name);
  }
  info.push(time, data);

  return info
    .filter((el) => el !== null)
    .map((el) => (typeof el === 'number' ? `${el} min.` : el))
    .map((el, i, array) => (i !== array.length - 1 ? `${el} / ` : el));
};

// Function to get the year only from the date
const splitYear = (date) => {
  if (!date) {
    return;
  }
  const [year] = date.split('-');
  return year;
};

const renderGenres = (genres) => {
  return genres.map((genre) => (
    <S.StyledLink to={`/genres/${genre.name}`} key={genre.id}>
      <FontAwesomeIcon
        icon={faDotCircle}
        size="1x"
        style={{marginRight: '5px'}}
      />
      {genre.name}
    </S.StyledLink>
  ));
};

const renderWebsite = (link) => {
  if (!link) {
    return null;
  }
  return (
    <S.AWrapper target="_blank" href={link}>
      <Button title="Website" icon={faLink} />
    </S.AWrapper>
  );
};

const renderImdb = (id) => {
  if (!id) {
    return null;
  }
  return (
    <S.AWrapper target="_blank" href={`https://www.imdb.com/title/${id}`}>
      <Button title="IMDB" icon={faImdb} />
    </S.AWrapper>
  );
};

const renderTrailer = (videos) => {
  if (videos.length === 0) {
    return;
  }
  const {key} = videos.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube'
  );
  return (
    <S.AWrapper target="_blank" href={`https://www.youtube.com/watch?v=${key}`}>
      <Button title="trailer" icon={faPlay} />
    </S.AWrapper>
  );
};

const renderRecommendedMovies = (recommended, baseurl) => {
  if (recommended?.loading) {
    return <p> Loading...</p>;
  } else if (recommended.total_results === 0) {
    return (
      <NotFound
        title="Sorry!"
        subtitle={`There are no recommended movies...`}
      />
    );
  } else {
    return (
      <Element name="scroll-to-element">
        <MoviesList movies={recommended} baseurl={baseurl} />
      </Element>
    );
  }
};

export default Movie;
