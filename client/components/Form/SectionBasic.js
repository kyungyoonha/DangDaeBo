import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import useInputs from '../../hooks/useInputs';
import Input from './Input';
import Button from './Button';
import { FORM_SUBMIT_BASIC } from '../../reducers/formReducer';

const initialState = {
  heroName: '',
  date: '',
  birthDate: '',
  location: '',
  tags: '',
};

const SectionBasic = ({ setPage }) => {
  const dispatch = useDispatch();
  const hero = useSelector((state) => state.form.hero);
  const { inputs, setInputs, errors, setErrors, onChange } = useInputs(initialState);

  useEffect(() => {
    if (!Object.keys(hero).length) return;
    setInputs(hero);
  }, []);

  const onClickButtonPrev = () => setPage(0);

  const onClickButtonNext = () => {
    let isValid = true;
    let validCheck = ['heroName', 'date'];
    validCheck.forEach((item) => {
      if (!inputs[item]) {
        isValid = false;
        setErrors((prev) => ({ ...prev, [item]: '필수입력값 입니다.' }));
      }
    });

    if (!isValid) return;

    dispatch({
      type: FORM_SUBMIT_BASIC,
      payload: inputs,
    });
    setPage(2);
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
        type="date"
        name="date"
        value={inputs.date}
        onChange={onChange}
        errorMessage={errors.date}
      />
      <Input
        label="출생년도"
        description="※ 출생년도를 적어주세요."
        type="date"
        name="birthDate"
        value={inputs.birthDate}
        onChange={onChange}
        errorMessage={errors.birthDate}
      />
      <Input
        label="기념장소"
        description="※ 기념장소 혹은 출생장소를 적어주세요."
        name="location"
        value={inputs.location}
        onChange={onChange}
        errorMessage={errors.location}
      />
      <Input
        label="태그"
        description="※ 관련 태그를 추가해주세요"
        name="tags"
        value={inputs.tags}
        onChange={onChange}
        errorMessage={errors.tags}
      />
      <Button type="button" className="section-basic__prev" m="0 10px" onClick={onClickButtonPrev}>
        이전
      </Button>
      <Button type="button" className="section-basic__next" m="0 10px" onClick={onClickButtonNext}>
        다음
      </Button>
    </Wrapper>
  );
};

export default SectionBasic;

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
