import React from 'react';
import styled from 'styled-components';

const Logo = ({ width }) => {
  return (
    <>
      <Wrapper width={width}>
        <LogoWrapper>
          <div className="logoShape" />
        </LogoWrapper>
        <Text>
          <p>
            <span>당</span>신은
          </p>
          <p>
            <span>대</span>한민국의
          </p>
          <p>
            <span>보</span>배입니다
          </p>
        </Text>
      </Wrapper>
    </>
  );
};

export default React.memo(Logo);

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : '200px')};
  height: ${(props) => (props.width ? props.width / 2 : '100px')};
`;
const LogoWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 1rem;

  .logoShape {
    position: relative;
    width: 100%;
    height: 100%;
    background: blue;
    border-radius: 50%;
    box-shadow: 0 0 0 0.3rem #000, 0 0 1rem rgba(0, 0, 0, 0.8), 0 0 1rem rgba(0, 0, 0, 0.8);
    border: 0.3rem solid #fff;

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
  }
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  right: 17px;
  transform: translateY(-50%);
  p {
    letter-spacing: 0.1rem;
    font-weight: 500;
    line-height: 1.4rem;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.6);
    span {
      font-weight: 700;
      color: #000;
    }
  }
`;
