import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { FORM_INFO_ARRAY_CHANGE, FORM_INFO_ARRAY_ADD } from '../../../reducers/formReducer';

const Info = () => {
  const [nextId, setNextId] = useState(1);
  const dispatch = useDispatch();
  const { infoArray } = useSelector((state) => state.form);

  const onChangeInfo = (id) => (e) => {
    const { name, value } = e.target;
    dispatch({
      type: FORM_INFO_ARRAY_CHANGE,
      payload: {
        id,
        [name]: value,
      },
    });
  };

  const onAddInfo = () => {
    dispatch({
      type: FORM_INFO_ARRAY_ADD,
      payload: {
        id: nextId,
        title: '',
        content: '',
      },
    });
    setNextId((prev) => prev + 1);
  };

  return (
    <Wrapper className="info">
      <h3>※ 추가 정보</h3>
      {infoArray.map((info) => (
        <div key={info.id} className="info-section">
          <h3 className="info-section__head">문답1</h3>
          <div className="info-section__box">
            <div className="info-section__title">제목</div>
            <input
              name="title"
              value={info.title}
              placeholder="제목을 입력해주세요."
              onChange={onChangeInfo(info.id)}
            />
          </div>
          <div className="info-section__box">
            <div className="info-section__title">내용</div>
            <textarea
              name="content"
              value={info.content}
              placeholder="내용을 입력해주세요."
              onChange={onChangeInfo(info.id)}
              rows="7"
            />
          </div>
        </div>
      ))}
      <button className="info__button" type="button" onClick={onAddInfo}>
        내용 추가하기
      </button>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.div`
  text-align: left;
  h3 {
    margin: 20px 0 10px;
  }

  .info-section {
    padding: 10px 20px;
    margin-bottom: 30px;
    border: 1px solid ${(props) => props.theme.gray[0]};
    border-radius: 10px;
    background: #f1f0e9;
    .info-section__head {
      text-align: center;
    }
    input,
    textarea {
      padding: 10px 20px;
      width: 100%;
      border: 1px solid ${(props) => props.theme.gray[0]};
      border-radius: 5px;
      background: #fff;
    }

    .info-section__box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;

      &__title {
        width: 80px;
        text-align: center;
      }
    }
  }

  .info__button {
    display: block;
    margin-top: 20px;
    width: 100%;
    padding: 10px;
    background: ${(props) => props.theme.blue[0]};
    color: #fff;
    border-radius: 10px;
    font-weight: 600;
  }
`;
