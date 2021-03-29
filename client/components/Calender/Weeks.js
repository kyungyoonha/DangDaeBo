import React from 'react';
import styled from 'styled-components';

const Weeks = ({ week }) => {
  console.log(week);
  return (
    <WrapperTr>
      {week.map((item, i) => (
        <td className={item.isGray ? 'gray' : ''} key={i}>
          {item.day}
        </td>
      ))}
    </WrapperTr>
  );
};

export default Weeks;

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
`;
