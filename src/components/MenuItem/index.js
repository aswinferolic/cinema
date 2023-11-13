import React from 'react';
import * as S from './style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faPoll,
  faCalendar,
  faDotCircle,
} from '@fortawesome/free-solid-svg-icons';

const MenuItem = ({title, selected}) => {
  return (
    <S.Wrapper selected={selected}>
      <FontAwesomeIcon icon={renderIcon(title)} style={{marginRight: '10px'}} />
      {title}
    </S.Wrapper>
  );
};

const renderIcon = (title) => {
  switch (title) {
    case 'Top Rated':
      return faPoll;
    case 'Upcoming':
      return faCalendar;
    case 'Popular':
      return faHeart;
    default:
      return faDotCircle;
  }
};
export default MenuItem;
