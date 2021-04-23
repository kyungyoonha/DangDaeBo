import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = ({
  label,
  description,
  name,
  value,
  onChange,
  placeholder = '답변을 입력해주세요.',
  type = 'text',
  required = false,
  // error = '',
}) => {
  return (
    <Wrapper>
      <label className="form-input__left">{label}</label>
      <div className="form-input__right">
        <input
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          required={required}
          autoComplete="off"
          placeholder={placeholder}
        />
        <p>{description}</p>
      </div>
      {/* <p className={error ? 'form-input__error--on' : 'form-input__error'}>{error}</p> */}
    </Wrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  // error: PropTypes.string,
};

export default React.memo(Input);

const Wrapper = styled.div`
  padding: 20px 20px 50px;
  border-bottom: 1px solid ${(props) => props.theme.line[1]};
  text-align: left;
  display: block;

  .form-input__left {
    font-size: 1.1rem;
    display: block;
    width: 100%;
    margin-bottom: 10px;
    font-weight: 600;
  }
  .form-input__right {
    flex: 1;

    input {
      border: 1px solid ${(props) => props.theme.line[1]};
      width: 100%;
      padding: 5px 10px;
    }

    p {
      margin-top: 10px;
    }
  }

  @media (min-width: 992px) {
    display: flex;
    .form-input__left {
      display: inline-block;
      padding: 0 30px;
      width: 200px;
    }
  }
`;
