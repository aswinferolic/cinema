import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 65%;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 6rem;
`;

export const Title = styled.h1`
  color: var(--color-primary);
  font-weight: 300;
  font-size: 3.5rem;
`;

export const SubTitle = styled.h2`
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.8rem;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

export const Svg = styled.img`
  max-width: 100%;
  height: 40vh;
  margin-bottom: 6rem;
`;
