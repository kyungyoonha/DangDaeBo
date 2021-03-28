import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({
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
      <p className={error ? 'err on' : 'err'}>{error}</p>
    </Wrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default React.memo(Input);

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
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

  .err {
    display: none;
    position: absolute;
    top: 77px;
    font-size: 11px;
    color: ${(props) => props.theme.red};
  }
  .err.on {
    display: block;
  }
`;
