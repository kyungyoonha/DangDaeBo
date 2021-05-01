import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { Button } from '../../Form';
import { calendarFunc, changeDataFormat, checkTodayActiveRow } from '../../../util/calendarFunc';
import Weeks from './Weeks';
import SelectYear from './SelectYear';

const CalendarMini = () => {
  const dateObj = new Date();
  const [state, setState] = useState({
    WeeksList: ['일', '월', '화', '수', '목', '금', '토'],
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1,
    date: dateObj.getDate(),
    key: '2021-01-01',
    weekArray: [],
    weekActiveIdx: 0,
  });
  const { WeeksList, year, month, date, key, weekArray, weekActiveIdx } = state;

  useEffect(() => {
    const weekArr = calendarFunc(year, month - 1);
    setState((prev) => ({
      ...prev,
      key: changeDataFormat(year, month - 1, date),
      weekArray: weekArr,
      weekActiveIdx: checkTodayActiveRow(weekArr, changeDataFormat(year, month - 1, date)),
    }));
  }, [year, month, key]);

  const onClickPrevButton = () => {
    month <= 1
      ? setState((prev) => ({ ...prev, year: prev.year - 1, month: 12 }))
      : setState((prev) => ({ ...prev, month: prev.month - 1 }));
  };

  const onClickNextButton = () => {
    month >= 12
      ? setState((prev) => ({ ...prev, year: prev.year + 1, month: 1 }))
      : setState((prev) => ({ ...prev, month: prev.month + 1 }));
  };
  const onClickDate = useCallback((newKey) => {
    if (newKey === key) return;
    const keySplit = newKey.split('-');
    setState({ ...state, year: keySplit[0], month: keySplit[1], date: keySplit[2], key });
  }, []);

  const onChangeYear = useCallback((newYear) => setState({ ...state, year: newYear }), []);
  const onChangeMonth = useCallback((e) => setState({ ...state, month: e.target.value }), []);
  return (
    <Wrapper>
      <div className="calmini__header">
        <Button onClick={onClickPrevButton}>
          <i className="fas fa-angle-left"></i>
        </Button>
        <span>
          <SelectYear year={year} onChangeYear={onChangeYear} />
          <select onChange={onChangeMonth}>
            {[...new Array(12)].map((_, idx) => (
              <option key={idx} value={idx + 1}>
                {idx + 1 < 10 ? '0' + (idx + 1) : idx + 1} 월
              </option>
            ))}
          </select>
        </span>
        <Button onClick={onClickNextButton}>
          <i className="fas fa-angle-right"></i>
        </Button>
      </div>
      <StyledTable>
        <thead>
          <tr>
            {WeeksList.map((weekName) => (
              <th key={weekName}>{weekName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weekArray.map((week, idx) => (
            <Weeks key={idx} week={week} isActive={idx === weekActiveIdx} dateKey={key} onClick={onClickDate} />
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default React.memo(CalendarMini);

const Wrapper = styled.div`
  .calmini__header {
    position: relative;
    text-align: center;
    width: 100%;

    button {
      margin: 5px 5px;
      padding: 5px 10px;
    }

    span {
      font-size: 1.3rem;
      margin: 0 10px;
    }

    select {
      padding: 1px 5px;
      border: 1px solid ${(props) => props.theme.gray[0]};
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

  th {
    margin: 15px auto;
    border-bottom: 2px solid ${(props) => props.theme.gray[1]};
  }
`;
