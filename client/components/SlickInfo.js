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
          <Background key={idx} className={idx === imgIdx ? 'slick-info--active' : 'slick-info--hide'} url={item.url} />
          <div className="slick-info__text" style={{ display: idx === imgIdx ? 'block' : 'none' }}>
            <h2 className="slick-info__title">{item.title}</h2>
            <p className="slick-info-contents">{item.subTitle}</p>
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

  .slick-info__text {
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
  .slick-info__title {
    font-size: 3rem;
    font-weight: 700;
  }
  .slick-info__cotnents {
    font-size: 1.7rem;
    font-weight: 100;
    color: ${(props) => props.theme.gray[0]};
  }
  .slick-info--active {
    opacity: 1;
    animation: animate-slick-bg 4s ease forwards;
  }

  .slick-info--hide {
    opacity: 0;
    animation: none;
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

  @keyframes animate-slick-bg {
    0% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
`;
