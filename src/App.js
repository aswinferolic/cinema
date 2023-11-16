import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {init} from './redux/actions';
import Discover from './pages/Discover';
import Sidebar from './components/Sidebar';
import Genres from './pages/Genres';
import Search from './pages/Search';
import Movie from './pages/Movie';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  user-select: none;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 4rem;

  @media ${(props) => props?.theme?.mediaQueries?.larger} {
    padding: 6rem 3rem;
  }

  @media ${(props) => props?.theme?.mediaQueries?.large} {
    padding: 4rem 2rem;
  }
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(init());
  });
  return (
    <Router>
      <Sidebar />
      <Layout>
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to="/discover/popular" />}
            />
            <Route path="/discover/:name" element={<Discover />} />
            <Route path="/genres/:name" element={<Genres />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/movie/:movieId" element={<Movie />} />
          </Routes>
        </Wrapper>
      </Layout>
    </Router>
  );
};

export default App;
