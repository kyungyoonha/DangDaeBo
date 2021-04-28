import React from 'react';
import styled from 'styled-components';

import useInputs from '../../hooks/useInputs';
import { Input, Button } from '../Form';

const initialState = {
  name: '',
  phone: '',
  email: '',
};

const FormSectionBasic = ({ setPage }) => {
  const { inputs, errors, onChange, validateAll } = useInputs(initialState);

  const onClickButton = (ctg) => () => {
    if (ctg === 'prev') {
      setPage(0);
    }
    const isValid = validateAll();

    if (isValid) {
      setPage(page);
    }
  };
  return (
    <Wrapper>
      <Input
        label="이름"
        description="※ 등록할 영웅의 이름을 적어주세요."
        name="heroName"
        value={inputs.heroName}
        onChange={onChange}
        errorMessage={errors.heroName}
      />
      <Input
        label="기념일"
        description="※ 기념일을 적어주세요."
        name="date"
        value={inputs.date}
        onChange={onChange}
        errorMessage={errors.date}
      />
      <Input
        label="출생년도"
        description="※ 출생년도를 적어주세요."
        name="birthDate"
        value={inputs.birthDate}
        onChange={onChange}
        errorMessage={errors.birthDate}
      />
      <Input
        label="기념장소"
        description="※ 기념장소 혹은 출생장소를 적어주세요."
        name="birthDate"
        value={inputs.birthDate}
        onChange={onChange}
        errorMessage={errors.birthDate}
      />
      <Input
        label="태그"
        description="※ 관련 태그를 추가해주세요"
        name="tags"
        value={inputs.tags}
        onChange={onChange}
        errorMessage={errors.tags}
      />
      <Button type="button" className="section-basic__prev" m="0 10px" onClick={onClickButton('prev')}>
        이전
      </Button>
      <Button type="button" className="section-basic__next" m="0 10px" onClick={onClickButton('next')}>
        다음
      </Button>
    </Wrapper>
  );
};

export default FormSectionBasic;

const Wrapper = styled.div`
  .section-basic__prev,
  .section-basic__next {
    margin-top: 30px;
    width: 150px;
    background: ${(props) => props.theme.green[0]};
  }

  .section-basic__prev {
    background: none;
    color: ${(props) => props.theme.green[0]};
    border: 2px solid ${(props) => props.theme.green[0]};
  }
`;
