import React from 'react';
import styled from 'styled-components';

import Comment from './Comment';

const Comments = () => {
  return (
    <Wrapper>
      <div className="comments-textarea">
        <h2>의견쓰기</h2>
        <textarea rows="3" placeholder="입력해주세요." />
        <div className="comments-textarea-bottom">
          <span>0/500</span>
          <button>등록</button>
        </div>
      </div>
      <div className="comments-contents">
        <div className="comments-contents-category">
          <span className="active">베스트 댓글</span>
          <span>전체 댓글</span>
        </div>
        {[...new Array(10)].map((item, idx) => (
          <Comment key={idx} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Comments;

const Wrapper = styled.div`
  .comments-textarea {
    h2 {
      margin-bottom: 10px;
    }
    textarea {
      width: 100%;
      border: 1px solid ${(props) => props.theme.gray[1]};
      padding: 20px;
    }
  }

  .comments-textarea-bottom {
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

  .comments-contents-category {
    padding-bottom: 10px;
    border-bottom: 1px solid ${(props) => props.theme.gray[1]};
    span {
      font-size: 1.1rem;
      padding: 10px 40px;
      border: 1px solid ${(props) => props.theme.gray[1]};
    }

    span:nth-child(2) {
      margin: -1px;
    }

    span.active {
      background: ${(props) => props.theme.gray[0]};
      color: white;
    }
  }
`;
