import React from 'react';
import styled from 'styled-components';

const Calendar = () => {
  return (
    <Wrapper>
      <div className="cal-header">2021-03</div>

      <table>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row-date">
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
          </tr>
          <tr>
            <td>
              <span>고</span>안중근
              <br />
              <span>고</span>유관순
              <br />
              <span>고</span>유관순
              <br />
              <span>고</span>안중근
              <br />
              <span>고</span>유관순
            </td>
            <td>
              <span className="yellow">고</span>유관순
            </td>
            <td>
              <span className="yellow">고</span>유관순
            </td>
            <td>
              <span className="yellow">고</span>유관순
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="row-date">
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Calendar;

const Wrapper = styled.div`
  flex: 1;
  overflow-y: scroll;

  .cal-header {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background: #03c75a;
  }

  table {
    width: 100%;
    /* height: 200%; */
    border-collapse: collapse;
  }

  table,
  th,
  td {
    border: 1px solid ${(props) => props.theme.line[1]};
  }

  td,
  th {
    width: 14.28%;
  }

  thead {
    background: #4b4e3d;
    color: white;
  }

  .row-date {
    background: ${(props) => props.theme.gray[0]};
  }

  tbody td {
    height: 500px;
    padding-left: 7px;
    padding-top: 10px;
    vertical-align: top;
  }

  span {
    background-color: #428fd7;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 0px 5px;
    color: white;
    margin-right: 5px;
    text-align: center;
  }

  span.yellow {
    background: ${(props) => props.theme.green[1]};
  }
`;
