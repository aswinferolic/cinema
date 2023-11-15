import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px var(--shadow-color);
  background-color: var(--color-primary-dark);
  border: 1px solid var(--color-primary);
  width: ${(props) => (props?.state ? '30rem' : '2rem')};
  cursor: ${(props) => (props?.state ? 'auto' : 'pointer')};
  padding: 2rem;
  height: 2rem;
  outline: none;
  border-radius: 10rem;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  @media ${(props) => props.theme.mediaQueries.large} {
    background-color: var(--color-primary);
    border: 1px solid transparent;
    padding: 1.5rem;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    max-width: 25rem;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props?.state ? '1rem' : '0rem')};
  color: var(--text-color);
  border: none;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 13px;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 12px;
  }
  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 11px;
  }

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: var(--text-color);
  }
`;

export const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props?.state ? 'auto' : 'none')};
  cursor: ${(props) => (props?.state ? 'pointer' : 'none')};
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--text-color);

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 10px;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 8px;
  }
`;
