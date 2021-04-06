import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Slick from '../components/Slick';
import Timeline from '../components/Timeline';
import { Container } from '../components/Layout';

const Today = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <p className="today-title">2021-04-06</p>
        <Slick />
        <Container>
          <Timeline />
        </Container>
      </Wrapper>
    </>
  );
};

export default Today;

const Wrapper = styled.div`
  .today-title {
    text-align: center;
    padding-top: 50px;
    font-size: 2rem;
    font-weight: 700;
  }
`;
