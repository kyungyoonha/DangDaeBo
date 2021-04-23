import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import Loader from '../Loader';
import { Button } from '../Form';
import { calendarFunc } from '../../util/calendarFunc';
import { makeData } from '../../util/fakeData';
import { ModalHero } from '../../components/Modal';

const CalendarMain = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [isFetched, setIsFetched] = useState(false);
  const [modal, setModal] = useState('');

  const weeks = calendarFunc(year, month - 1);
  const dataObj = makeData(weeks);
  useEffect(() => {
    if (!isFetched) {
      setTimeout(() => {
        setIsFetched(true);
      }, 1000);
    }
  }, [isFetched]);

  const onClickPrevButton = () => {
    if (month <= 1) {
      setMonth(12);
      setYear((prevYear) => prevYear - 1);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
    setIsFetched(false);
  };

  const onClickNextButton = () => {
    if (month >= 12) {
      setMonth(1);
      setYear((prevYear) => prevYear + 1);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
    setIsFetched(false);
  };

  const onOpenModal = (id) => setModal(id);
  const onCloseModal = useCallback(() => setModal(''), []);

  return (
    <Wrapper>
      <div className="cal-header">
        <div className="cal-header__title">
          <Button onClick={onClickPrevButton} m="10px" p="5px 10px">
            <i className="fas fa-angle-left"></i>
          </Button>
          <span>
            {year}-{month}
          </span>
          <Button onClick={onClickNextButton}>
            <i className="fas fa-angle-right"></i>
          </Button>
        </div>
        <div className="cal-header__week">
          <ul className="cal-header__list">
            <li>일</li>
            <li>월</li>
            <li>화</li>
            <li>수</li>
            <li>목</li>
            <li>금</li>
            <li>토</li>
          </ul>
        </div>
      </div>

      <div className="cal-body">
        {weeks.map((week, idx) => (
          <ul key={idx} className="cal-body__list">
            {week.map((item) => (
              <li key={item.key} id={item.key} className="cal-body__item">
                <div className="cal-body__day">{item.day}</div>
                <div className="cal-body__data">
                  {dataObj[item.key] &&
                    dataObj[item.key].map((data) => (
                      <p key={data.id} onClick={() => onOpenModal(data.id)}>
                        <span className="cal-body__label" value={data.category}>
                          {data.category}
                        </span>
                        {data.name}
                      </p>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
      {!isFetched && <Loader />}
      {modal && <ModalHero id={modal} onCloseModal={onCloseModal} />}
    </Wrapper>
  );
};

export default CalendarMain;

const Wrapper = styled.div`
  flex: 1;

  .cal-header {
    width: 100%;
  }

  .cal-header__title {
    height: 50px;
    text-align: center;
    background: #03c75a;
    span {
      margin-right: 10px;
    }
  }
  .cal-header__week {
    overflow-y: scroll;
  }

  .cal-header__list {
    border: 0px solid ${(props) => props.theme.line[1]};
    border-width: 0 0 1px 1px;
    overflow: hidden;
    position: relative;
  }

  .cal-header__list li {
    float: left;
    width: 14.28%;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 0px solid ${(props) => props.theme.line[1]};
    border-width: 1px 1px 0 0;
    background: #4b4e3d;
    color: white;

    &:nth-child(1) {
      color: pink;
    }

    &:last-child {
      color: skyblue;
    }
  }

  .cal-body {
    position: relative;
    height: calc(100% - 75px);
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .cal-body__list {
    border: 1px solid ${(props) => props.theme.line[1]};
    border-width: 0 0 1px 1px;
    overflow: hidden;
  }

  .cal-body__item {
    float: left;
    width: 14.28%;
    border: 0px solid ${(props) => props.theme.line[1]};
    border-width: 1px 1px 0 0;

    &:nth-child(1) .week-day {
      color: pink;
    }
    &:last-child .week-day {
      color: skyblue;
    }
  }

  .cal-body__day {
    position: sticky;
    background: ${(props) => props.theme.line[0]};
    text-align: center;
  }

  .cal-body__data {
    min-height: 500px;
    padding-left: 7px;
    padding-top: 10px;

    p {
      cursor: pointer;
    }
  }

  .cal-body__label {
    background-color: #428fd7;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 0px 5px;
    color: white;
    margin-right: 5px;
    text-align: center;

    &[value='1'] {
      background: red;
    }

    &[value='2'] {
      background: green;
    }

    &[value='3'] {
      background: black;
    }
  }
`;
