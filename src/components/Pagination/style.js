import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => {
    if (props?.type === 'one') {
      return 'flex-start';
    } else if (props?.type === 'both') {
      return 'space-between';
    } else {
      return 'flex-end';
    }
  }};
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;
