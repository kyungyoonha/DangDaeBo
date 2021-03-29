import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Button } from '../Form';
import { calcendarFunc } from '../../util/calendarFunc';
import { Thead, Weeks } from './';

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const weeks = calcendarFunc(year, month - 1);
  return (
    <Wrapper>
      <div className="calendar-header">
        <Button onClick={() => setMonth(month - 1)}>
          <i className="fas fa-angle-left"></i>
        </Button>
        <span>
          {year}-{month}
        </span>
        <Button onClick={() => setMonth(month + 1)}>
          <i className="fas fa-angle-right"></i>
        </Button>
      </div>
      <StyledTable>
        <Thead />
        <tbody>
          {weeks.map((week, idx) => (
            <Weeks key={idx} week={week} />
          ))}
        </tbody>
      </StyledTable>
    </Wrapper>
  );
};

export default React.memo(Calendar);

const Wrapper = styled.div`
  .calendar-header {
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
  /* box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7); */
  margin-bottom: 30px;
  border: 1px solid ${(props) => props.theme.line[1]};
  padding: 10px 0 15px;

  tr {
    border: 1px solid ${(props) => props.theme.line[0]};
  }
`;
