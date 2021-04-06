import React from 'react';
import styled from 'styled-components';

const Timeline = () => {
  return (
    <Wrapper>
      <ul className="timeline-header">
        <li className="active">2021 ~</li>
        <li>2011 ~ 2020</li>
        <li>2001 ~ 2010</li>
        <li>1991 ~ 2000</li>
        <li>1981 ~ 1990</li>
      </ul>
      <div className="timeline-body">
        <ul>
          <li>＊ 1</li>
          <li>＊ 2</li>
          <li>＊ 3</li>
          <li>＊ 4</li>
          <li>＊ 5</li>
          <li>＊ 6</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default React.memo(Timeline);

const Wrapper = styled.div`
  margin-top: 70px;

  ul.timeline-header {
    display: flex;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 30px;

    li {
      flex: 1;
      border-left: 1px solid ${(props) => props.theme.gray[1]};
    }

    li:last-child {
      border-right: 1px solid ${(props) => props.theme.gray[1]};
    }

    li.active {
      font-weight: 900;
    }
  }

  .timeline-body {
    width: 100%;
    height: 300px;
    border: 1px solid red;
    margin-top: 70px;
    padding-top: 30px;

    ul li {
      margin-left: 30px;
    }
  }
`;
