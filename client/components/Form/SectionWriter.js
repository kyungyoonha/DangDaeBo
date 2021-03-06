import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { FORM_SUBMIT_WRITER } from '../../reducers/formReducer';
import useInputs from '../../hooks/useInputs';
import Input from './Input';
import Button from './Button';

const initialState = {
  name: '',
  phone: '',
  email: '',
};

const SectionWriter = ({ setPage }) => {
  const dispatch = useDispatch();
  const writer = useSelector((state) => state.form.writer);
  const { inputs, setInputs, errors, onChange, validateAll } = useInputs(initialState);

  useEffect(() => {
    if (!Object.keys(writer).length) return;
    setInputs(writer);
  }, []);

  const onClickButton = () => {
    const isValid = validateAll();
    if (!isValid) return;

    dispatch({
      type: FORM_SUBMIT_WRITER,
      payload: inputs,
    });
    setPage(1);
  };
  return (
    <Wrapper>
      <Input
        label="성함"
        description="※ 정확한 정보 확인을 위해 실명으로 입력해주세요."
        name="name"
        value={inputs.name}
        onChange={onChange}
        required={true}
        errorMessage={errors.name}
      />
      <Input
        label="이메일"
        description="※ 등록이 완료되면 이메일이 발송됩니다."
        name="email"
        value={inputs.email}
        type="email"
        onChange={onChange}
        required={true}
        errorMessage={errors.email}
      />
      <Input
        label="연락처"
        description="※ 등록이 완료되면 문자가 발송됩니다."
        name="phone"
        value={inputs.phone}
        onChange={onChange}
        required={true}
        errorMessage={errors.phone}
      />

      <Button type="button" className="form-section-writer__button" onClick={onClickButton}>
        다음
      </Button>
    </Wrapper>
  );
};

export default SectionWriter;

const Wrapper = styled.div`
  .form-section-writer__button {
    margin-top: 30px;
    width: 100px;
    background: ${(props) => props.theme.green[0]};
  }
`;
