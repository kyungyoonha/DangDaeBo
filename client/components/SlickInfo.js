import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const imgList = [
  'https://www.kyentertainment.kr/theme/theme/img/bg_homeArea1.jpg',
  'https://www.kyentertainment.kr/theme/theme/img/bg_homeArea2.jpg',
  'https://www.kyentertainment.kr/theme/theme/img/bg_homeArea3.jpg',
  'https://www.kyentertainment.kr/theme/theme/img/bg_homeArea4.jpg',
  'https://www.kyentertainment.kr/theme/theme/img/bg_homeArea5.jpg',
  'https://www.kyentertainment.kr/theme/theme/img/bg_homeArea6.jpg',
];

// useEffect + setTimeout();
//

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
      {imgList.map((url, idx) => (
        <Background key={idx} className={idx === imgIdx ? 'active' : 'hide'} url={url} />
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
  transform: scale(1);
  animation: animate-slick-bg 4s ease paused forwards;
  opacity: 0;

  &.active {
    opacity: 1;
    animation-play-state: running;
  }

  &.hide {
    opacity: 0;
  }

  @keyframes animate-slick-bg {
    0% {
      transform: scale(1.2);
    }
    /* 50% {
      transform: scale(1);
    } */
    100% {
      transform: scale(1);
    }
  }
`;
