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
        <h2>의견쓰기</h2>
        <textarea rows="3" placeholder="입력해주세요." value={input} onChange={onChange} />
        <div className="comments-header-bottom">
          <span>{input.length}/500</span>
          <button>등록</button>
        </div>
      </div>
      <div className="comments-body">
        <div className="comments-body-category">
          <button className={category === 'best' ? 'active' : ''} onClick={onClickCategory('best')}>
            베스트 댓글
          </button>
          <button className={category === 'total' ? 'active' : ''} onClick={onClickCategory('total')}>
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
    h2 {
      margin-bottom: 10px;
    }
    textarea {
      width: 100%;
      border: 1px solid ${(props) => props.theme.gray[1]};
      padding: 20px;
    }
  }

  .comments-header-bottom {
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

  .comments-body-category {
    border-bottom: 1px solid ${(props) => props.theme.gray[0]};
    button {
      margin-bottom: -2px;
      font-size: 1.1rem;
      padding: 10px 40px;
      border: 1px solid ${(props) => props.theme.gray[0]};
    }

    button:nth-child(2) {
      border-left: none;
    }

    button.active {
      background: ${(props) => props.theme.gray[0]};
      color: white;
    }
  }

  .comments-footer {
    padding-left: 20px;
    padding-bottom: 30px;
  }
`;
