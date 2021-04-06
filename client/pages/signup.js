import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { SignInput, Button } from '../components/Form';
import useInputs from '../hooks/useInputs';
import { SIGN_UP_REQUEST } from '../reducers/userReducer';
import { Wrapper, StyledLogo, Form } from './signin';

const initialValue = {
  name: '',
  email: '',
  pw: '',
  pwConfirm: '',
};

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { inputs, errors, setErrors, onChange, validateAll } = useInputs(initialValue);
  const { signUpError, signUpDone } = useSelector((state) => state.user);

  useEffect(() => {
    if (!signUpError) return;

    setErrors({ ...signUpError });
  }, [signUpError]);

  useEffect(() => {
    if (!signUpDone) return;
    router.push('/signin');
  }, [signUpDone]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const isValid = validateAll();
      if (!isValid) return;

      dispatch({
        type: SIGN_UP_REQUEST,
        data: inputs,
      });
    },
    [inputs]
  );

  return (
    <Wrapper>
      <a className="sign-header" href="/">
        <StyledLogo />
      </a>{' '}
      <Form>
        <h1>회원가입</h1>
        <SignInput
          label="이름"
          name="name"
          value={inputs.name}
          placeholder="이름를 입력해주세요"
          required
          onChange={onChange}
          error={errors.name}
        />

        <SignInput
          label="이메일"
          name="email"
          type="email"
          value={inputs.email}
          placeholder="이메일를 입력해주세요"
          required
          onChange={onChange}
          error={errors.email}
        />

        <SignInput
          label="비밀번호"
          name="pw"
          type="password"
          value={inputs.pw}
          placeholder="패스워드를 입력해주세요"
          required
          onChange={onChange}
          error={errors.pw}
        />

        <SignInput
          label="비밀번호 체크"
          name="pwConfirm"
          type="password"
          value={inputs.pwConfirm}
          placeholder="패스워드를 한번 더 입력해주세요"
          required
          onChange={onChange}
          error={errors.pwConfirm}
        />

        <Button className="round" onClick={onSubmit} color="blue" width="100%" m="20px 0 20px">
          회원가입
        </Button>
        <div className="divider" />
        <div className="sign-footer">
          이미 회원이신가요?
          <a href="signin">로그인</a>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Signup;
