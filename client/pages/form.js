import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import { FormSectionBasic } from '../components/FormSection';

const Form = () => {
  return (
    <>
      <Header />
      <Contents>
        <Container>
          <h2 className="form-title">영웅 등록</h2>
          <div className="form-description">
            <h3>대한민국의 영웅을 등록해주세요. 일정한 절차를거친 후에 등록해드립니다.</h3>
            <p>※거짓 내용이 있는 경우 게시글이 삭제될 수 있습니다.</p>
          </div>
          {/* <FormSectionBasic /> */}
        </Container>
      </Contents>
    </>
  );
};

export default Form;

const Contents = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  text-align: center;

  .form-title {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .form-description {
    padding: 30px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;

    h3 {
      font-weight: 700;
    }
  }
`;
