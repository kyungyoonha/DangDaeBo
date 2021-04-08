import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import imgList from '../config/imgList.json';

const SlickInfo = () => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const timeFunc = setInterval(() => {
      setImgIdx((prev) => (prev === imgList.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timeFunc);
  }, []);
  return (
    <Wrapper>
      {imgList.map((item, idx) => (
        <>
          <Background key={idx} className={idx === imgIdx ? 'active' : 'hide'} url={item.url} />
          <div className="slickinfo-text" style={{ display: idx === imgIdx ? 'block' : 'none' }}>
            <h2>{item.title}</h2>
            <p>{item.subTitle}</p>
          </div>
        </>
      ))}
    </Wrapper>
  );
};

export default SlickInfo;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  .slickinfo-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 300px;
    border: 1px solid ${(props) => props.theme.gray[0]};
    text-align: center;
    color: white;
    padding-top: 90px;
    h2 {
      font-size: 3rem;
      font-weight: 700;
    }
    p {
      font-size: 1.7rem;
      font-weight: 100;
      color: ${(props) => props.theme.gray[0]};
    }

    &::before {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      width: 20px;
      height: 20px;
      border-top: 6px solid #fff;
      border-left: 6px solid #fff;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      right: -3px;
      width: 20px;
      height: 20px;
      border-bottom: 6px solid #fff;
      border-right: 6px solid #fff;
    }
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.url})`};
  background-size: cover;
  background-position: center;
  opacity: 0;

  &.active {
    opacity: 1;
    animation: animate-slick-bg 4s ease forwards;
  }

  &.hide {
    opacity: 0;
    animation: none;
  }

  @keyframes animate-slick-bg {
    0% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
`;
