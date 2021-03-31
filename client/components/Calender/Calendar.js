import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../components/Form';
import { calendarFunc } from '../../util/calendarFunc';
import { Thead, Weeks } from '.';

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const weeks = calendarFunc(year, month - 1);

  const onClickPrevButton = () => {
    if (month <= 1) {
      setMonth(12);
      setYear((prevYear) => prevYear - 1);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  const onClickNextButton = () => {
    if (month >= 12) {
      setMonth(1);
      setYear((prevYear) => prevYear + 1);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
  };
  return (
    <Wrapper>
      <div className="cal-header">
        <div className="cal-title">
          <StyledButton onClick={onClickPrevButton}>
            <i className="fas fa-angle-left"></i>
          </StyledButton>
          <span>
            {year}-{month}
          </span>
          <StyledButton onClick={onClickNextButton}>
            <i className="fas fa-angle-right"></i>
          </StyledButton>
        </div>
        <div className="week-name">
          <ul>
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
        {weeks.map((week) => (
          <ul>
            {week.map((item, idx) => (
              <li>
                <div className="week-day">{item.day}</div>
                <div className="week-data">few</div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Wrapper>
  );
};

export default Calendar;

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: scroll;

  .cal-header {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    width: 100%;
  }

  .cal-title {
    height: 50px;
    text-align: center;
    background: #03c75a;
  }

  .week-name {
    ul {
      border: 0px solid ${(props) => props.theme.line[1]};
      border-width: 0 0 1px 1px;
      overflow: hidden;
    }
    ul li {
      float: left;
      width: 14.28%;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border: 0px solid ${(props) => props.theme.line[1]};
      border-width: 1px 1px 0 0;
      background: #4b4e3d;
      color: white;
    }

    ul li:nth-child(1) {
      color: pink;
    }

    ul li:last-child {
      color: skyblue;
    }
  }

  .cal-body {
    ul {
      border: 1px solid ${(props) => props.theme.line[1]};
      border-width: 0 0 1px 1px;
      overflow: hidden;
    }
    ul li {
      float: left;
      width: 14.28%;
      border: 0px solid ${(props) => props.theme.line[1]};
      border-width: 1px 1px 0 0;
    }

    ul li:nth-child(1) .week-day {
      color: pink;
    }

    ul li:last-child .week-day {
      color: skyblue;
    }
  }

  .week-day {
    background: ${(props) => props.theme.line[0]};
    text-align: center;
    top: 0px;
  }

  .week-data {
    min-height: 500px;
    padding-left: 7px;
    padding-top: 10px;
  }

  .ctg {
    background-color: #428fd7;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 0px 5px;
    color: white;
    margin-right: 5px;
    text-align: center;
  }

  .ctg.yellow {
    background: ${(props) => props.theme.green[1]};
  }
`;

const StyledButton = styled(Button)`
  padding: 5px 10px;
  margin: 10px;
`;
