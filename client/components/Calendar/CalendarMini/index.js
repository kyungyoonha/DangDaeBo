import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import router from 'next/router';

import { Button } from '../../Form';
import { calendarFunc, checkTodayActiveRow } from '../../../util/calendarFunc';
import Weeks from './Weeks';

const WeeksList = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarMini = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());
  const [dateKey, setDateKey] = useState(router.asPath.replace('/#', '') || `${year}-${month}-${date}`);

  const weeks = calendarFunc(year, month - 1);
  const activeRow = checkTodayActiveRow(weeks, dateKey);

  useEffect(() => {
    setDateKey(router.asPath.replace('/#', ''));
  }, []);

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

  const onClickDate = useCallback((key) => {
    setDateKey(key);
  }, []);

  return (
    <Wrapper>
      <div className="calmini-header">
        <Button onClick={onClickPrevButton}>
          <i className="fas fa-angle-left"></i>
        </Button>
        <span>
          {year}-{month}
        </span>
        <Button onClick={onClickNextButton}>
          <i className="fas fa-angle-right"></i>
        </Button>
      </div>
      <StyledTable>
        <thead>
          <tr>
            {WeeksList.map((weekName) => (
              <th className="calmini-header-th" key={weekName}>
                {weekName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, idx) => (
            <Weeks key={idx} week={week} isActive={idx === activeRow} dateKey={dateKey} onClick={onClickDate} />
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default React.memo(CalendarMini);

const Wrapper = styled.div`
  .calmini-header {
    position: relative;
    text-align: center;
    width: 100%;
    overflow: hidden;

    button {
      margin: 5px 5px;
      padding: 5px 10px;
    }

    span {
      font-size: 1.3rem;
      margin: 0 10px;
    }
  }
`;

const StyledTable = styled.table`
  width: 300px;
  background: #fff;
  color: #000;
  border-radius: 5px;
  margin-bottom: 30px;
  border: 1px solid ${(props) => props.theme.line[1]};
  padding: 10px 0 15px;

  tr {
    border: 1px solid ${(props) => props.theme.line[0]};
  }

  .calmini-header-th {
    margin: 15px auto;
    border-bottom: 2px solid ${(props) => props.theme.gray[1]};
  }
`;
