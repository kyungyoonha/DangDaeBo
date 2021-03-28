import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import wrapper from '../store/configureStore';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* 콘텐츠 제목 */}
        {/* <meta property="og:title" content="..." /> */}
        {/* 웹페이지 URL */}
        {/* <meta property="og:url" content="..." /> */}
        {/* 웹페이지 타입(blog, website 등) */}
        {/* <meta property="og:type" content="..." /> */}
        {/* 표시되는 이미지 */}
        {/* <meta property="og:image" content="..." /> */}
        {/* 웹사이트 이름(URL과 다름) */}
        {/* <meta property="og:site_name" content="..." /> */}
        {/* 웹페이지 설명(제목 아래에 표시) */}
        {/* <meta property="og:description" content="..." /> */}
        <title>Boiler Plate</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component />
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
