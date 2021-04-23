import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SignInput = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '값을 입력해주세요',
  required = false,
  error = '',
}) => {
  return (
    <Wrapper>
      <label>{label}</label>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        autoComplete="off"
      />
      <p className={`signinput__error ${error ? 'signinput__error--on' : ''}`}>{error}</p>
    </Wrapper>
  );
};

SignInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default React.memo(SignInput);

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.gray[1]};
  }

  .signinput__error {
    display: none;
    position: absolute;
    top: 77px;
    font-size: 11px;
    color: ${(props) => props.theme.red};
  }
  .signinput__error--on {
    display: block;
  }
`;
