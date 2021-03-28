import React from 'react';
import styled from 'styled-components';

const WeeksList = ['일', '월', '화', '수', '목', '금', '토'];
const Thead = () => {
  return (
    <WrapperTr>
      {WeeksList.map((weekName) => (
        <th key={weekName}>{weekName}</th>
      ))}
    </WrapperTr>
  );
};

export default Thead;

const WrapperTr = styled.tr`
  th {
    margin: 15px auto;
    border-bottom: 2px solid ${(props) => props.theme.gray[1]};
  }
`;
