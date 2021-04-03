import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ className, type = 'submit', color = 'gray', onClick, children, width, m, p }) => {
  return (
    <>
      <StyledButton className={className} type={type} onClick={onClick} color={color} width={width} m={m} p={p}>
        {children}
      </StyledButton>
    </>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default React.memo(Button);

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  width: ${(props) => props.width || ''};
  margin: ${(props) => (props.m ? props.m : '')};
  padding: ${(props) => (props.p ? props.p : '')};
  background: ${(props) => (props.color ? props.color : props.theme.gray[0])};
  color: white;

  &.outline {
    background: none;
    border: 1px solid ${(props) => (props.color ? props.color : props.theme.gray[0])};
    color: ${(props) => (props.color ? props.color : props.theme.gray[0])};
    font-size: 700;
  }

  &.round {
    border-radius: 30px;
  }
`;
