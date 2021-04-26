import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Timeline from '../components/Timeline';
import Sidebar from '../components/Sidebar';

const Today = () => {
  return (
    <>
      <Header />
      <Contents>
        <Sidebar />
        <Timeline />
      </Contents>
    </>
  );
};

export default Today;

const Contents = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: stretch;
  background: #111111;

  /* svg {
    width: 100%;
    height: 100vh;
  } */
`;
