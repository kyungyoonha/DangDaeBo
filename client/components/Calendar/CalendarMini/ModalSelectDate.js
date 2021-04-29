import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import ModalLayout from '../../Modal/ModalLayout';
import useObserver from '../../../hooks/useObserver';

const ModalSelectDate = ({ onCloseModal }) => {
  const year = new Date().getFullYear();
  const [yearData, setYearData] = useState([]);
  const fetchMoreData = useCallback(() => {
    setYearData([...new Array(10)].map((_, idx) => year - yearData.lengh - idx));
  }, [yearData]);
  const ref = useObserver(fetchMoreData);

  useEffect(() => {
    setYearData([...new Array(30)].map((_, idx) => year - idx));
  }, []);

  return (
    <ModalLayout onCloseModal={onCloseModal}>
      <Wrapper>
        <h1 className="select-date__title">년도, 월 선택</h1>
        <div className="select-date__box">
          <select value={year}>
            {yearData.map((item, idx) => (
              <option key={idx} value={item} ref={idx === yearData.length - 1 ? ref : null}>
                {item}
              </option>
            ))}
            <option ref={ref} value="fwe">
              마지막
            </option>
          </select>
          <select>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
      </Wrapper>
    </ModalLayout>
  );
};

export default ModalSelectDate;

const Wrapper = styled.div`
  min-width: 550px;
  padding: 150px 30px;

  .select-date__title {
    margin-bottom: 10px;
  }

  .select-date__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    select {
      padding: 15px 30px;
      border: 1px solid ${(props) => props.theme.gray[0]};
    }
  }
`;
