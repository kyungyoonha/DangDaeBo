import React from 'react';
import styled from 'styled-components';

const Weeks = ({ num, weekSeq, startIndex }) => {
  return (
    <WrapperTr>
      {[...new Array(7)].map((day, i) => (
        <td>{i + 1}</td>
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
  color: ${(props) => props.theme.gray[0]};
  li {
    float: left;
    padding: 0 10px;
  }
`;
