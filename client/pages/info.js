import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import SlickInfo from '../components/SlickInfo';

const Info = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <SlickInfo />
      </Wrapper>
    </>
  );
};

export default Info;

const Wrapper = styled.div``;
