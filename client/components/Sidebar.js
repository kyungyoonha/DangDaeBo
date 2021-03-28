import React from 'react';
import styled from 'styled-components';
import { Button } from './Form';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="calendar-header">
        <Button>
          <i className="fas fa-angle-left"></i>
        </Button>
        2021-03-28
        <Button>
          <i className="fas fa-angle-right"></i>
        </Button>
      </div>
      <Calendar>달력</Calendar>
      <p>당신은 대한민국의 보배입니다.</p>
      <h1>이곳은 대한민국의 의인들을 기억하기 위한 곳입니다.🌺</h1>
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
  height: 100%;
  background: #4290aa;
  padding: 25px;
  color: #fff;

  button {
    margin: 10px;
  }

  p {
    font-weight: 200;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }

  h1 {
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

const Calendar = styled.div`
  width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
`;
