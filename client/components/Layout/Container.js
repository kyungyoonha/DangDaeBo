import React from 'react';
import styled from 'styled-components';

const Container = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 100%;
  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
    padding: 0 20px;
  }

  @media (min-width: 992px) {
    padding: 0 30px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;
