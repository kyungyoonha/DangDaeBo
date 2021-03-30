import React from 'react';
import styled from 'styled-components';

import { changeDataFormat } from '../../util/calendarFunc';

const Weeks = ({ week }) => {
  const today = new Date();
  const todayKey = changeDataFormat(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <WrapperTr>
      {week.map((item, i) => (
        <td className={`${item.isGray ? 'gray' : ''} ${todayKey === item.key ? ' today' : ''}`} key={i}>
          {item.day}
        </td>
      ))}
    </WrapperTr>
  );
};

export default React.memo(Weeks);

const WrapperTr = styled.tr`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${(props) => props.theme.line[0]};
  text-align: center;
  color: ${(props) => props.theme.gray[2]};
  li {
    float: left;
    padding: 0 10px;
  }

  td.gray {
    color: ${(props) => props.theme.gray[0]};
  }

  td.today {
    background: pink;
    color: white;
    border-radius: 50%;
  }
`;
