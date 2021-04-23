import React from 'react';
import styled from 'styled-components';

import { LogoBox } from './Logo';

const Loader = () => {
  return (
    <Background>
      <div className="logo__wrapper">
        <Logo />
        <p>Loading...</p>
      </div>
    </Background>
  );
};

export default React.memo(Loader);

const Background = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: calc(100% - 100px);
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;

  .logo__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: #fff;
    border-radius: 10%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5);
  }

  p {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    color: ${(props) => props.theme.gray[1]};

    &::before {
      content: 'Loading...';
      position: absolute;
      top: 0;
      left: 0;
      color: #000;
      width: 50%;
      overflow: hidden;
      animation: animation-text 2s linear infinite;
    }
  }

  @keyframes animation-text {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
`;

const Logo = styled(LogoBox)`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;
