import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = ({ type = 'submit', color = 'gray', onClick, children }) => {
  return (
    <>
      <StyledButton type={type} onClick={onClick} color={color}>
        {children}
      </StyledButton>
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default React.memo(Button);

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.gray[0]};

  ${(props) => {
    switch (props.color) {
      case 'green':
        return css`
          background: ${props.theme.green[0]};
          color: white;
        `;

      case 'red':
        return css`
          background: ${props.theme.red[0]};

          color: white;
        `;

      case 'blue':
        return css`
          background: ${props.theme.blue[0]};
          color: white;
        `;

      default:
        return css`
          background: ${props.theme.gray[0]};
          color: white;
        `;
    }
  }}
`;
