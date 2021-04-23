import React, { useState } from 'react';
import styled from 'styled-components';

import Comment from './Comment';

const Comments = () => {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('best');

  const onChange = (e) => {
    if (input.length > 500) {
      alert('500자까지만 입력 가능합니다.');
      return;
    }
    setInput(e.target.value);
  };
  const onClickCategory = (ctg) => () => {
    setCategory(ctg);
  };
  return (
    <Wrapper>
      <div className="comments-header">
        <h2 className="comments-header__title">의견쓰기</h2>
        <textarea
          className="comments-header__textarea"
          rows="3"
          placeholder="입력해주세요."
          value={input}
          onChange={onChange}
        />
        <div className="comments-header__bottom">
          <span>{input.length}/500</span>
          <button>등록</button>
        </div>
      </div>

      <div className="comments-body">
        <div className="comments-body__category">
          <button
            className={`comments-body__button ${category === 'best' ? 'comments-body__button--active' : ''}`}
            onClick={onClickCategory('best')}>
            베스트 댓글
          </button>
          <button
            className={`comments-body__button ${category === 'total' ? 'comments-body__button--active' : ''}`}
            onClick={onClickCategory('total')}>
            전체 댓글
          </button>
        </div>
        {[...new Array(10)].map((item, idx) => (
          <Comment key={idx} isBest={category === 'best'} />
        ))}
      </div>

      <div className="comments-footer">
        <span>
          전체 댓글 보기<ion-icon name="chevron-forward-outline"></ion-icon>
        </span>
      </div>
    </Wrapper>
  );
};

export default React.memo(Comments);

const Wrapper = styled.div`
  .comments-header {
    &__title {
      margin-bottom: 10px;
    }
    &__textarea {
      width: 100%;
      border: 1px solid ${(props) => props.theme.gray[1]};
      padding: 20px;
    }
    &__bottom {
      margin-bottom: 50px;
      button {
        float: right;
        width: 100px;
        padding-top: 10px;
        padding-bottom: 10px;
        background: ${(props) => props.theme.green[0]};
        color: #fff;
      }
    }
  }

  .comments-body__category {
    border-bottom: 1px solid ${(props) => props.theme.gray[0]};
  }

  .comments-body__button {
    margin-bottom: -2px;
    font-size: 1.1rem;
    padding: 10px 40px;
    border: 1px solid ${(props) => props.theme.gray[0]};

    &:nth-child(2) {
      border-left: none;
    }

    &--active {
      background: ${(props) => props.theme.gray[0]};
      color: white;
    }
  }

  .comments-footer {
    padding-left: 20px;
    padding-bottom: 30px;
  }
`;
