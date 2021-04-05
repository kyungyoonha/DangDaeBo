import React from 'react';
import styled from 'styled-components';

import useInputs from '../../hooks/useInputs';
import { Input } from '../Form';

const initialState = {};

const FormSectionBasic = () => {
  const { inputs, errors, onChange } = useInputs(initialState);

  return (
    <Wrapper>
      <Input
        label="이름을 입력해주세요."
        description="카톡연결을 위해 한국번호를 '-' 없이 작성해주세요 (투어 컨펌을 위하여 정확하게 기입해주세요.)"
        name="name"
        value={inputs.name}
        placeholder="이메일를 입력해주세요"
        required
        onChange={onChange}
        error={errors.name}
      />
    </Wrapper>
  );
};

export default FormSectionBasic;

const Wrapper = styled.div``;
