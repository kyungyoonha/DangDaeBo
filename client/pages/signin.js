import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Input, Button } from '../components/Form';
import { Container } from '../components/Layout';
import useInputs from '../hooks/useInputs';
import { SIGN_IN_REQUEST } from '../reducers/userReducer';

const initialState = {
  email: '',
  pw: '',
};

const Signin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { inputs, errors, setErrors, onChange, validateAll } = useInputs(initialState);
  const { signInDone, signInError } = useSelector((state) => state.user);

  useEffect(() => {
    if (!signInError) return;
    setErrors({ ...signInError });
  }, [signInError]);

  useEffect(() => {
    if (!signInDone) return;
    router.push('/');
  }, [signInDone]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!validateAll()) return;

      dispatch({
        type: SIGN_IN_REQUEST,
        data: inputs,
      });
    },
    [inputs]
  );

  return (
    <Container>
      <Form>
        <h1>로그인</h1>
        <Input
          label="이메일"
          name="email"
          value={inputs.email}
          placeholder="이메일를 입력해주세요"
          required
          onChange={onChange}
          error={errors.email}
        />

        <Input
          label="비밀번호"
          name="pw"
          type="password"
          value={inputs.pw}
          placeholder="패스워드를 입력해주세요"
          required
          onChange={onChange}
          error={errors.pw}
        />

        <Button onClick={onSubmit} color="blue">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Signin;

const Form = styled.form`
  margin-top: 80px;
  border: 1px solid ${(props) => props.theme.gray[0]};
  border-radius: 1%;
  height: 700px;
  padding: 80px 20px;

  h1 {
    font-weight: 900;
    text-align: center;
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    padding: 80 50px;
  }

  @media (min-width: 992px) {
    padding: 80px 100px;
  }
`;
