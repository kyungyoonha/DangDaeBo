import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import useObserver from '../../../hooks/useObserver';

const SelectYear = ({ year, onChangeYear }) => {
  const [yearData, setYearData] = useState([...new Array(30)].map((_, idx) => year - idx));
  const [isClicked, setIsClicked] = useState(false);
  const elemSelect = useRef(null);

  const fetchMoreData = () => {
    const newData = [...new Array(10)].map((_, idx) => year - yearData.length - idx);
    setYearData([...yearData, ...newData]);
  };
  const ref = useObserver(fetchMoreData);

  const handleClickOutside = ({ target }) => {
    if (isClicked && elemSelect.current && !elemSelect.current.contains(target)) setIsClicked(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isClicked]);

  return (
    <Wrapper onClick={() => setIsClicked(!isClicked)}>
      <h3 className="select-year__value">{year}년</h3>
      {isClicked && (
        <div className="select-year__list" ref={elemSelect}>
          {yearData.map((item) => (
            <div
              className={`select-year__item ${item === year ? 'select-year__item--active' : ''}`}
              key={item}
              onClick={() => onChangeYear(item)}>
              {item} 년
            </div>
          ))}
          <div className="last" ref={ref}></div>
        </div>
      )}
      <ion-icon
        name="chevron-down-outline"
        class="ionicon s-ion-icon md hydrated"
        role="img"
        aria-label="chevron down outline"></ion-icon>
    </Wrapper>
  );
};

export default SelectYear;

const Wrapper = styled.div`
  position: relative;
  top: 7px;
  display: inline-block;
  margin: 0 10px;
  width: 90px;
  height: 25px;
  border: 1px solid ${(props) => props.theme.gray[0]};
  font-size: 0.7rem;
  color: #000;
  text-align: center;
  background: #fff;

  .select-year__value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .select-year__list {
    position: absolute;
    top: 25px;
    border: 1px solid ${(props) => props.theme.gray[0]};
    background: #fff;
    width: 100%;
    height: 300px;
    overflow-y: scroll;
  }

  .select-year__item {
    height: 22px;
    line-height: 22px;
    &:hover {
      background: ${(props) => props.theme.gray[0]};
      color: white;
    }

    &--active {
      background: ${(props) => props.theme.gray[0]};
      color: white;
    }
  }

  ion-icon {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    font-weight: 900;
  }
`;
