import React from 'react';
import styled from 'styled-components';


import { Button } from '../Form';
import { calcendarFunc } from '../../util/calendarFunc';
import { Thead, Weeks } from './';

const Calendar = () => {
  calcendarFunc();
  return (
    <Wrapper>
      <div className="calendar-header">
        <Button onClick={() => {}}>
          <i className="fas fa-angle-left"></i>
        </Button>
        <span>2021-03</span>
        <Button onClick={() => {}}>

          <i className="fas fa-angle-right"></i>
        </Button>
      </div>
      <StyledTable>
        <Thead />
        <tbody>
          {[...new Array(6)].map((weekSeq, i) => (
            <Weeks key={i} weekSeq={i + 1} />
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
