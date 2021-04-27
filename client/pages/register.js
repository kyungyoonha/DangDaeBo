import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import { Button } from '../components/Form';
import { FormSectionBasic } from '../components/FormSection';

const Register = () => {
  return (
    <>
      <Header />
      <Contents>
        <Container>
          <FormWrapper>
            <h1 className="register-form__title">영웅 등록</h1>
            <div className="register-form__contents">
              <h3>대한민국의 영웅을 등록해주세요. 일정한 절차를거친 후에 등록해드립니다.</h3>
              <p>※거짓 내용이 있는 경우 게시글이 삭제될 수 있습니다.</p>
            </div>
            <FormSectionBasic />
            <Button className="register-form__submit" onClick={() => {}}>
              제출
            </Button>
          </FormWrapper>
        </Container>
      </Contents>
    </>
  );
};

export default Register;

const Contents = styled.div`
  width: 100%;
  text-align: center;
  background: #f1f0e9;
  padding: 30px 0;

  .register-header {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin: 20px;
      padding: 20px 100px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }
  }

  .register-form__title {
    padding-top: 80px;
    padding-bottom: 30px;
    font-weight: 700;
  }

  .register-form__contents {
    margin-bottom: 20px;
    padding: 50px 30px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;

    h3 {
      font-weight: 700;
      margin-bottom: 10px;
    }
  }

  .register-form__submit {
    margin-top: 30px;
    width: 100px;
  }
`;

const FormWrapper = styled.div`
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 0 100px 100px;

  @media (max-width: 576px) {
    padding: 0 10px 100px;
  }

  @media (max-width: 768px) {
    padding: 0 30px 100px;
  }
`;
