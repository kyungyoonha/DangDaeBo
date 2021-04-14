import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProgressBar = ({ title, percent }) => {
  return (
    <Wrapper>
      {/* <h2>{`${title}(${percent}%)`}</h2> */}
      <BarContainer percent={percent} />
      <span className="bar-endpoint" style={{ left: `${percent}%` }} />
    </Wrapper>
  );
};

ProgressBar.propTypes = {
  title: PropTypes.string,
  percent: PropTypes.number,
};

export default ProgressBar;

const Wrapper = styled.div`
  position: relative;
  height: 50px;
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  .bar-endpoint {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background: #fff;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.7);
    border-radius: 50%;
  }
`;

const BarContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 20px;
  border: 4px solid #fff;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0px 8px 4px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, blue, red);
    background: repeating-linear-gradient(45deg, purple, blue, green, yellow, orange, red);
    background-size: 400%;
    background-position-x: 100%;
    border-radius: 10px;
    transform: ${(props) => `translateX(${-(100 - props.percent)}%)`};
    transition: 0.3s;
    animation: animation-progressbar 4s forwards infinite;
  }

  @keyframes animation-progressbar {
    0% {
      background-position-x: 100%;
    }
    50% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: 100%;
    }
  }
`;
