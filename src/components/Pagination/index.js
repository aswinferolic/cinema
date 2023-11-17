import React from 'react';
import {scroller} from 'react-scroll';
import * as S from './style';
import Button from '../Button';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Pagination = ({movies}) => {
  const {page, total_pages} = movies;

  const scrollTo = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 1500,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  };

  if (total_pages === 1) return null;

  // on first page
  if (page < total_pages && page === 1) {
    return (
      <S.Wrapper>
        <S.LinkWrapper to={`?page=${page + 1}`} onClick={scrollTo}>
          <Button title={`Page ${page + 1}`} solid icon={faArrowRight} />
        </S.LinkWrapper>
      </S.Wrapper>
    );
  }

  if (page < total_pages) {
    return (
      <S.Wrapper type="both">
        <S.LinkWrapper to={`?page=${page - 1}`} onClick={scrollTo}>
          <Button title={`Page ${page - 1}`} $left $solid icon={faArrowLeft} />
        </S.LinkWrapper>

        <S.LinkWrapper to={`?page=${page + 1}`} onClick={scrollTo}>
          <Button title={`Page ${page + 1}`} $solid icon={faArrowRight} />
        </S.LinkWrapper>
      </S.Wrapper>
    );
  }

  // on last page
  else {
    return (
      <S.Wrapper type="one">
        <S.LinkWrapper to={`?page=${page - 1}`} onClick={scrollTo}>
          <Button $solid title={`Page ${page - 1}`} icon={faArrowLeft} />
        </S.LinkWrapper>
      </S.Wrapper>
    );
  }
};

export default Pagination;
