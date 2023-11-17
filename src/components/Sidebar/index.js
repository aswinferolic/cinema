import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {slide as Menu} from 'react-burger-menu';
import slidestyle from '../../styles/slide';
import * as S from './style';
import MenuItem from '../MenuItem';
import Searchbar from '../Searchbar';
import TmdbGreenSvg from '../../svg/tmdbgreen.svg';

const Sidebar = () => {
  const config = useSelector((state) => state.config);
  let {staticCategories, genres, loading, selected} = config;
  const [isOpened, setisOpened] = useState(false);

  const isMenuOpen = ({isOpened}) => {
    setisOpened(isOpened);
  };

  // passing genres static for temporary purpose
  genres = [
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

  return (
    <>
      <S.WrapperStickyBox>
        <S.Hamburger onClick={() => setisOpened(true)}>
          <S.Bar />
          <S.Bar />
          <S.Bar />
        </S.Hamburger>
        <Searchbar />
      </S.WrapperStickyBox>
      <Menu isOpen={isOpened} onStateChange={isMenuOpen} styles={slidestyle}>
        <S.Heading> Discover </S.Heading>
        {renderStatic(staticCategories, selected, setisOpened)}
        <S.Heading> Genres </S.Heading>
        {!loading && renderGenres(genres, selected, setisOpened)}

        <S.StyledCoffee>
          <img
            src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <span style={{marginLeft: '5px'}}> Buy me a coffee </span>
        </S.StyledCoffee>

        <S.CopyRight>
          Copyright
          <S.StyledLink href="https://www.github.com/aswinferolic">
            2023
          </S.StyledLink>
        </S.CopyRight>

        <S.TmdbSvg src={TmdbGreenSvg} alt="the tmdb api" />
      </Menu>
    </>
  );
};

const renderStatic = (categories, selected, setisOpened) => {
  return categories.map((category, i) => (
    <S.LinkWrap
      to={`/discover/${category}`}
      key={i}
      onClick={setisOpened ? () => setisOpened(false) : null}
    >
      <MenuItem
        title={category}
        selected={selected === category ? true : false}
      />
    </S.LinkWrap>
  ));
};

const renderGenres = (genres, selected, setisOpened) => {
  return genres.map((genre) => (
    <S.LinkWrap
      to={`/genres/${genre.name}`}
      key={genre.id}
      onClick={setisOpened ? () => setisOpened(false) : null}
    >
      <MenuItem
        title={genre.name}
        selected={selected === genre.name ? true : false}
      />
    </S.LinkWrap>
  ));
};

export default Sidebar;
