import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { END } from 'redux-saga';
import styled from 'styled-components';

import wrapper from '../store/configureStore';
import Sidebar from '../components/Sidebar';
import { LOAD_MY_INFO_REQUEST } from '../reducers/userReducer';
import { Calendar } from '../components/Calender';

const Home = () => {
  return (
    <>
      <Header />
      <Contents>
        <Sidebar />
        <Calendar />
      </Contents>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  context.store.dispatch(END);

  await context.store.sagaTask.toPromise();
});

export default Home;

const Contents = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: stretch;

  .main-header {
  }
`;
