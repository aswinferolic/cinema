import React, {useState, useEffect, useRef} from 'react';
import * as S from './style';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
  const [input, setInput] = useState('');
  const [state, setState] = useState(false);
  const node = useRef();
  const inputFocus = useRef();
  const history = useNavigate();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setState(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (input.length === 0) return;
    setInput('');
    setState(false);
    history(`/search/${input}`);
  };

  return (
    <S.Form
      state={state}
      onClick={() => {
        setState(true);
        inputFocus.current.focus();
      }}
      onSubmit={onFormSubmit}
      ref={node}
    >
      <S.Button type="submit" state={state}>
        <FontAwesomeIcon icon={faSearch} size="1x" />
      </S.Button>

      <S.Input
        onChange={(e) => setInput(e?.target?.value)}
        ref={inputFocus}
        value={input}
        state={state}
        placeholder="Search for a movie..."
      />
    </S.Form>
  );
};

export default Searchbar;
