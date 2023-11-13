import styled from 'styled-components';
import StickyBox from 'react-sticky-box';
import {Link} from 'react-router-dom';

export const WrapperStickyBox = styled(StickyBox)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props?.theme?.colors?.lighter};
  box-shadow: 0 4px 20px var(--shadow-color);
  z-index: 999;
`;

export const Hamburger = styled.div`
  width: 25px;
  height: auto;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  background-color: transparent;
  line-height: 1;
  cursor: pointer;
`;

export const Bar = styled.span`
  width: 100%;
  height: 4px;
  margin: 2px 0;
  display: inline-block;
  background-color: ${(props) => props?.theme?.colors?.main};
  border-radius: 10px;
  transform: all 0.3s;
`;

export const Heading = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 1rem 1rem;
  text-transform: uppercase;
  letter-spacing: -0.5px;

  &:not(:first-child) {
    margin-top: 4rem;
  }
`;

export const LinkWrap = styled(Link)`
  text-decoration: none;
  outline: none;
  display: block;
  margin-bottom: 0.5rem;
`;
