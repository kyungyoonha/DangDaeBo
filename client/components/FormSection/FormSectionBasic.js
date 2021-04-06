import React from 'react';
import styled from 'styled-components';

import useInputs from '../../hooks/useInputs';
import { Input } from '../Form';

const initialState = {
  name: '',
};

const FormSectionBasic = () => {
  const { inputs, errors, onChange } = useInputs(initialState);

  return (
    <Wrapper>
      <Input
        label="성함"
        description="※ 정확한 정보 확인을 위해 실명으로 입력해주세요."
        name="name"
        value={inputs.name}
        required
        onChange={onChange}
        error={errors.name}
      />
      <Input
        label="성함"
        description="※ 정확한 정보 확인을 위해 실명으로 입력해주세요."
        placeholder="fewfwefwefwefwewefwefewfwefwefewfew"
        name="name"
        value={inputs.name}
        required
        onChange={onChange}
        error={errors.name}
      />
      <Input
        label="성함"
        description="※ 정확한 정보 확인을 위해 실명으로 입력해주세요."
        name="name"
        value={inputs.name}
        required
        onChange={onChange}
        error={errors.name}
      />
      <Input
        label="성함"
        description="※ 정확한 정보 확인을 위해 실명으로 입력해주세요."
        name="name"
        value={inputs.name}
        required
        onChange={onChange}
        error={errors.name}
      />
    </Wrapper>
  );
};

export default FormSectionBasic;

const Wrapper = styled.div``;
