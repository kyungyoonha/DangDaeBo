import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import { Button } from '../components/Form';
import { FormSectionWriter, FormSectionBasic } from '../components/FormSection';

const Page = ({ page, onClickButton }) => {
  switch (page) {
    case 1:
      return <FormSectionBasic onClickButton={onClickButton} />;
    case 2:
      return <FormSectionAdditional onClickButton={onClickButton} />;
    default:
      return <FormSectionWriter onClickButton={onClickButton} />;
  }
};

const Register = () => {
  const [page, setPage] = useState(0);

  const onClickButton = useCallback((page) => {
    setPage(page);
  }, []);
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
            <div className="register-form__breadcrumb">
              <span title="작성자 정보" className={page === 0 ? 'register-form__breadcrumb--active' : ''}>
                1
              </span>
              <span title="기본 정보" className={page === 1 ? 'register-form__breadcrumb--active' : ''}>
                2
              </span>
              <span title="추가 정보" className={page === 2 ? 'register-form__breadcrumb--active' : ''}>
                3
              </span>
            </div>
            <Page page={page} onClickButton={onClickButton} />
            <Button
              type="button"
              className={`register-form__button register-form__button${page === 2 ? '--submit' : '--next'}`}
              onClick={(e) => {
                console.log(e);
              }}>
              {page === 2 ? '제출' : '다음'}
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

  .register-form__breadcrumb {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 30px;
    height: 100px;
    min-width: 550px;

    span {
      position: relative;
      width: 50px;
      height: 50px;
      line-height: 40px;
      border-radius: 50%;
      border: 3px solid ${(props) => props.theme.line[1]};
      text-align: center;
      font-size: 1.5rem;
      font-weight: 400;
      margin: 0 50px;

      &:before {
        content: attr(title);
        position: absolute;
        top: -40px;
        left: -20px;
        width: 200px;
        font-size: 1rem;
        text-align: left;
      }

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 60px;
        width: 75px;
        height: 3px;
        border-bottom: 3px dotted ${(props) => props.theme.line[1]};
      }
    }

    span:last-child:after {
      display: none;
      opacity: 0;
    }
  }

  .register-form__breadcrumb--active {
    border: 3px solid blue !important;
    &:before {
      color: blue;
    }
    &:after {
      border-bottom: 3px dotted blue !important;
    }
  }
  .register-form__button {
    margin-top: 30px;
    width: 100px;

    &--submit {
      background: ${(props) => props.theme.blue[0]};
    }

    &--next {
      background: ${(props) => props.theme.green[0]};
    }
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
