import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Weeks = ({ week, isActive, dateKey, onClick }) => {
  return (
    <WrapperTr className={`weeks ${isActive ? ' weeks--active' : ''}`}>
      {week.map((item, i) => (
        <td
          className={`${item.isGray ? 'weeks__data--gray' : ''} ${item.key === dateKey ? ' weeks__data--today' : ''}`}
          key={i}
          onClick={() => onClick(item.key)}>
          <a href={'#' + item.key}>{item.day}</a>
        </td>
      ))}
    </WrapperTr>
  );
};

Weeks.propTypes = {
  week: PropTypes.array,
  isAtive: PropTypes.bool,
  dateKey: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(Weeks);

const WrapperTr = styled.tr`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${(props) => props.theme.line[0]};
  text-align: center;
  color: ${(props) => props.theme.gray[2]};
  position: relative;

  &.weeks--active {
    background: #ffc0cb9e;
    a {
      color: white;
    }
    color: white;
  }
  li {
    float: left;
    padding: 0 10px;
  }
  td {
    margin: 0;
    padding: 0 !important;
    border-collapse: collapse;
  }

  .weeks__data {
    &--gray a {
      color: ${(props) => props.theme.gray[0]};
    }

    &--today a {
      display: block;
      color: #000;
      font-weight: 600;
    }
  }
`;
