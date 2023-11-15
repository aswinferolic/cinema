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
  const {staticCategories, genres, loading, selected} = config;
  const [isOpened, setisOpened] = useState(false);

  const isMenuOpen = ({isOpened}) => {
    setisOpened(isOpened);
  };

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
