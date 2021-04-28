import React from 'react';
import styled from 'styled-components';

import useInputs from '../../hooks/useInputs';
import { Input } from '../Form';

const initialState = {
  name: '',
  phone: '',
  email: '',
};

const FormSectionAdditional = () => {
  const { inputs, errors, onChange } = useInputs(initialState);

  return (
    <Wrapper>
      <Input
        label="성함"
        description="※ 정확한 정보 확인을 위해 실명으로 입력해주세요."
        name="name"
        value={inputs.name}
        onChange={onChange}
        errorMessage={errors.name}
      />
      <Input
        label="이메일"
        description="※ 등록이 완료되면 이메일이 발송됩니다."
        name="email"
        value={inputs.email}
        type="email"
        onChange={onChange}
        errorMessage={errors.email}
      />
      <Input
        label="연락처"
        description="※ 등록이 완료되면 문자가 발송됩니다."
        name="phone"
        value={inputs.phone}
        onChange={onChange}
        errorMessage={errors.phone}
      />
    </Wrapper>
  );
};

export default FormSectionAdditional;

const Wrapper = styled.div``;
