import React from 'react';
import styled from 'styled-components';

import { CalendarMini } from './Calendar';

const Sidebar = () => {
  return (
    <Wrapper>
      <CalendarMini />
      <p>당신은 대한민국의 영웅입니다.</p>
      <h1 className="sidbar__title">이곳은 대한민국의 의인들을 기억하기 위한 곳입니다.🌺</h1>
      <h3>Ea non cupidatat quis sunt velit amet Lorem sint veniam.</h3>
      <p>
        자세히 보기<i className="fas fa-arrow-right"></i>
      </p>
    </Wrapper>
  );
};

export default React.memo(Sidebar);

const Wrapper = styled.div`
  width: 350px;
  background: #4290aa;
  padding: 25px;
  color: #fff;

  button {
    margin: 10px;
  }

  p {
    font-weight: 200;
    padding-bottom: 5px;
  }

  .sidbar__title {
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
    font-size: 2.2rem;
    padding: 20px 15px;
    border: 1px solid #6aafc6;
    border-radius: 5px;
    background: #000;
    font-family: 'Black Han Sans', sans-serif;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 70%;
      height: 100%;
      background: rgba(255, 255, 255, 0.7);
      transform: translateX(-100px) skewX(45deg);
      animation: animationReflect 5s linear infinite;
    }

    h3 {
      margin-bottom: 20px;
    }
  }

  @keyframes animationReflect {
    0% {
      transform: translateX(-200px) skewX(45deg);
    }
    4% {
      transform: translateX(400px) skewX(45deg);
    }

    100% {
      transform: translateX(400px) skewX(45deg);
    }
  }
`;
