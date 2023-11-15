import React from 'react';
import * as S from './style';
import NotfoundSvg from '../../svg/empty.svg';
import Button from '../Button';
import {faHome} from '@fortawesome/free-solid-svg-icons';

const NotFound = ({title, subtitle}) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title> {title} </S.Title>
        <S.SubTitle> {subtitle} </S.SubTitle>
      </S.TitleWrapper>
      <S.Svg src={`${NotfoundSvg}`} alt="Not Found" />
      <S.LinkWrapper to={'/'}>
        <Button title="Home" solid left icon={faHome} />
      </S.LinkWrapper>
    </S.Wrapper>
  );
};

export default NotFound;
