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

export const StyledCoffee = styled.a`
  font-size: 1.2rem;
  display: flex !important;
  outline: none;
  justify-content: center !important;
  align-items: center !important;
  background-color: #fff;
  color: #000;
  padding: 0.5rem 2rem;
  border-radius: 3px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  margin: 2rem auto;
  transition: 0.3s all linear;

  &img {
    width: 27px;
    box-shadow: none;
    border: none;
    vertical-align: middle;
  }
`;

export const CopyRight = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  color: #fff;
  margin-bottom: 2rem;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  margin-left: 4px;
  font-weight: 500;
  color: inherit;
`;

export const TmdbSvg = styled.img`
  max-width: 100%;
  height: 3rem;
  display: inline-block !important;
  margin-bottom: 1.4rem !important;
`;
