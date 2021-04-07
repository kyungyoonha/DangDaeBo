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
        <TimelineItem className="item">
          <h1>제목</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </TimelineItem>
        <TimelineItem className="item">
          <h1>제목</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </TimelineItem>
        <TimelineItem className="item">
          <h1>제목</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </TimelineItem>
        <div style={{ clear: 'both' }}></div>
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
      margin: 0;
    }

    li:last-child {
      border-right: 1px solid ${(props) => props.theme.gray[1]};
    }

    li.active {
      font-weight: 900;
    }
  }

  .timeline-body {
    position: relative;
    width: 100%;
    border: 1px solid red;
    margin-top: 70px;
    padding-top: 30px;

    &::before {
      content: '';
      position: absolute;
      width: 4px;
      height: 100%;
      top: 0;
      left: 50%;
      background: #f0f;
    }
  }

  ul li {
    margin-left: 30px;
  }

  .item:nth-child(odd) {
    float: left;
    clear: both;
    text-align: right;
  }

  .item:nth-child(even) {
    float: right;
    clear: both;
  }
`;

const TimelineItem = styled.div`
  border: 1px solid green;
  width: 50%;
`;
