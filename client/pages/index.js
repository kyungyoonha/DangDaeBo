import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { END } from 'redux-saga';

import wrapper from '../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../reducers/userReducer';

const Home = () => {
  return (
    <>
      <Header />
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
