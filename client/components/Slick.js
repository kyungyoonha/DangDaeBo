import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import dummy from '../config/dummy.json';

const Slick = () => {
  const itemsEL = useRef();
  const itemMargin = -1;
  const [scrollCtrl, setScrollCtrl] = useState({
    isScrolling: false,
    scrollX: 0,
    clientX: 0,
    itemNum: 0,
    itemWidth: 0,
    leftScrollX: 0,
    center: 0,
    startIndex: 0,
  });

  useEffect(() => {
    if (!itemsEL.current) return;
    const itemNum = itemsEL.current.children.length;
    const itemWidth = itemsEL.current.children[0].clientWidth + itemMargin;
    const itemsWidth = itemsEL.current.offsetWidth;
    const leftScrollX = itemWidth * itemNum - itemsWidth;
    const centerX = (itemsWidth - itemWidth) / 2;
    setScrollCtrl({ ...scrollCtrl, itemNum, itemWidth, leftScrollX, centerX, scrollX: centerX });
  }, []);

  const { scrollX, clientX, itemNum, itemWidth, isScrolling, leftScrollX, centerX, startIndex } = scrollCtrl;

  const onMouseDown = (e) => {
    e.preventDefault();
    setScrollCtrl({ ...scrollCtrl, isScrolling: true, clientX: e.clientX });
  };

  const onMouseMove = (e) => {
    if (!isScrolling) return;
    const dx = e.clientX - clientX;
    const newScrollX = scrollX + dx;
    if (newScrollX - centerX > 0 || newScrollX + centerX < -leftScrollX) return;
    setScrollCtrl((prev) => ({
      ...prev,
      clientX: e.clientX,
      scrollX: newScrollX,
      startIndex: -Math.ceil(Math.abs(newScrollX - centerX) / itemWidth),
    }));
  };

  const onMouseUp = () => {
    setScrollCtrl({ ...scrollCtrl, isScrolling: false });
  };
  return (
    <Wrapper itemMargin={itemMargin}>
      <div className="items" ref={itemsEL} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
        {dummy.slice(0, 10).map((item, idx) => (
          <div
            key={idx}
            className={`item${startIndex + idx === 0 ? ' center' : ''}`}
            style={{
              transform: `translateX(${scrollX}px) scale(${1.3 - 0.1 * Math.abs(startIndex + idx)})`,
              zIndex: itemNum - Math.abs(startIndex + idx) || 1,
              marginRight: itemMargin - Math.abs(startIndex + idx) * 1.1,
            }}>
            <img src={item.url} alt="" />
            <div className="item-content">
              <h2>{item.name}</h2>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default React.memo(Slick);

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 150px 30px;
  height: 100vh;
  cursor: grab;
  perspective: 1200px;
  background: #212121;

  .items {
    transform-style: preserve-3d;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    padding: 70px 0;
    background: none;
  }

  .item {
    flex-shrink: 0;
    width: 280px;
    height: 380px;
    background: #fff;
    margin-right: ${(props) => props.itemMargin + 'px' || ''};
    transition: transform 0.2s ease;
    box-shadow: 20px 0 10px rgba(0, 0, 0, 0.3), 30px 0 10px rgba(0, 0, 0, 0.2), -20px 0 10px rgba(0, 0, 0, 0.3),
      -30px 0 10px rgba(0, 0, 0, 0.2);
    img {
      width: 100%;
      height: 280px;
      object-fit: cover;
    }
  }
  .item-content {
    padding-top: 10px;
    text-align: center;

    h2 {
      font-weight: 700;
    }
  }
`;
