import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Info = ({ infoArray, onChangeInfo }) => {
  return (
    <Wrapper className="info">
      <h3>※ 추가 정보</h3>
      {infoArray.map((info, idx) => (
        <div key={idx} className="info__Wrapper">
          <h3 className="info__title">문답1</h3>
          <div className="info-section">
            <div className="info-section__title">제목</div>
            <input
              name="info-section__input"
              value={info.title}
              placeholder="제목을 입력해주세요."
              onChange={onChangeInfo('title')}
            />
          </div>
          <div className="info-section">
            <div className="info-section__title">제목</div>
            <textarea
              name="info__content"
              value={info.content}
              placeholder="내용을 입력해주세요."
              onChange={onChangeInfo('content')}
              rows="7"
            />
          </div>
        </div>
      ))}
      <button className="info__button" type="button">
        내용 추가하기
      </button>
    </Wrapper>
  );
};

Info.propTypes = {
  infoArray: PropTypes.array.isRequired,
  onChangeInfo: PropTypes.func.isRequired,
};

export default Info;

const Wrapper = styled.div`
  text-align: left;
  h3 {
    margin: 20px 0 10px;
  }

  .info__Wrapper {
    padding: 10px 20px;
    border: 1px solid ${(props) => props.theme.gray[0]};
    border-radius: 10px;
    background: #f1f0e9;
  }

  .info__title {
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

  .info-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    &__title {
      width: 80px;
      text-align: center;
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
