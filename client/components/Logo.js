import React from 'react';
import styled from 'styled-components';

const Logo = ({ width }) => {
  return (
    <Wrapper width={width}>
      <StyledLogo />
    </Wrapper>
  );
};

export default React.memo(Logo);

const Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : '100px')};
  height: ${(props) => (props.width ? props.width : '100px')};
  padding: 0.5rem;
`;

const StyledLogo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: blue;
  border-radius: 50%;
  box-shadow: 0 0 0.1rem 0.3rem #000;
  border: 0.5rem solid #fff;
  overflow: hidden;

  &::before {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    transform: translate(-25%, -75%);
    border-radius: 40%;
    background: rgba(255, 20, 255, 0.7);
    animation: rotateLogo 3s linear infinite;
  }

  &::after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    transform: translate(-25%, -75%);
    border-radius: 35%;
    background: rgba(255, 20, 20, 0.8);
    animation: rotateLogo 3s linear infinite;
  }

  @keyframes rotateLogo {
    0% {
      transform: translate(-25%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-25%, -75%) rotate(360deg);
    }
  }
`;
