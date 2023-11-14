import React from 'react';
import * as S from './style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Button = ({title, solid, icon, left}) => {
  return (
    <S.StyledButton left={left ? 1 : 0} solid={solid ? 1 : 0}>
      <FontAwesomeIcon
        size="1x"
        icon={icon}
        style={left ? {marginRight: '10px'} : {marginLeft: '10px'}}
      />
      {title}
    </S.StyledButton>
  );
};

export default Button;
