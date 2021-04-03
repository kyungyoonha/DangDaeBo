import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { Input, Button } from '../components/Form';
import { Container } from '../components/Layout';
import useInputs from '../hooks/useInputs';
import { SIGN_IN_REQUEST } from '../reducers/userReducer';
import { LogoBox } from '../components/Logo';

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
    <Wrapper>
      <a className="sign-header" href="/">
        <StyledLogo />
      </a>

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

        <Button className="round" onClick={onSubmit} color="blue" width="100%" m="0 0 20px">
          로그인
        </Button>
        <div className="divider" />
        <Button className="round outline" onClick={onSubmit} color="blue" width="100%" m="0 0 20px">
          페이스북
        </Button>
        <Button className="round outline" onClick={onSubmit} color="green" width="100%" m="0 0 20px">
          네이버
        </Button>
        <div className="sign-footer">
          처음이신가요?
          <a href="signup">회원가입</a>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Signin;

export const Wrapper = styled(Container)`
  position: relative;
  max-width: 600px;
  margin: 0 auto;

  .sign-header {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
  }

  .divider {
    width: 100%;
    border-bottom: 1px dotted ${(props) => props.theme.gray[1]};
    margin-bottom: 20px;
    position: relative;

    &::before {
      content: 'OR';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      background: white;
      text-align: center;
    }
  }

  .sign-footer {
    text-align: center;
    a {
      font-weight: 700;
      margin-left: 5px;
    }
  }
`;

export const StyledLogo = styled(LogoBox)`
  width: 80px;
  height: 80px;
  display: inline-block;
`;

export const Form = styled.form`
  margin-top: 80px;
  border: 1px solid ${(props) => props.theme.gray[0]};
  border-radius: 1%;
  height: 700px;
  padding: 40px 40px;

  h1 {
    font-weight: 900;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    padding: 40px 30px;
  }

  @media (min-width: 992px) {
    padding: 40px 50px;
  }
`;
