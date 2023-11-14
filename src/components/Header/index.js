import React from 'react';
import * as S from './style';

const Header = ({title, subtitle, size}) => {
  return (
    <S.HeaderWrapper>
      <S.Title size={size}> {title} </S.Title>
      <S.Subtitle size={size}> {subtitle} </S.Subtitle>
    </S.HeaderWrapper>
  );
};

export default Header;
