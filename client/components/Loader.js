import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Wrapper>
      <Spinner />
      <SpinnerBlue />
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100% - 100px);
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const Spinner = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 0 10px #fff;
  animation: animation-rotate 1s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border: 8px solid transparent;
    border-left: 8px solid red;
    border-top: 8px solid red;
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    top: 19%;
    right: 16%;
    width: 15px;
    height: 15px;
    background: red;
    border-radius: 50%;
    box-shadow: 0 0 10px red;
  }

  @keyframes animation-rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const SpinnerBlue = styled(Spinner)`
  transform: translate(-50%, -50%) rotate(180deg);
  background: transparent;
  border: none;
  animation-delay: 0.2s;
  &::before {
    width: 100px;
    height: 100px;
    border: 8px solid transparent;
    border-right: 8px solid blue;
    border-bottom: 8px solid blue;
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    top: 29%;
    right: 27%;
    width: 15px;
    height: 15px;
    background: blue;
    border-radius: 50%;
    box-shadow: 0 0 10px blue;
  }
`;
