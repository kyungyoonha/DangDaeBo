import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Comment = ({ isBest }) => {
  return (
    <Wrapper>
      <div className="comment-contents">
        <h3>아이디</h3>
        <p>
          {isBest && <span className="comment-label">BEST</span>}
          Sint labore nostrud culpa cupidatat. Nisi irure sint et duis. Eu laborum Lorem mollit pariatur. Qui quis magna
          voluptate consequat elit magna veniam qui elit. Pariatur pariatur sunt aliqua ipsum nostrud incididunt. Lorem
          qui sit mollit ex aliquip cillum consequat quis irure. Cillum commodo ad aute in culpa sit amet elit dolor.
          Eiusmod eiusmod nostrud qui nisi veniam sunt proident non veniam do labore laborum Lorem. Tempor consequat
          ipsum ullamco nostrud aliqua do id aute non aliqua in nulla id. Amet enim cupidatat aliquip est et magna aute
          ex ad laboris in veniam do. Aliquip velit
        </p>
        <span className="comment-time">2021-04-16 21:30</span>
      </div>
      <div className="comment-buttons">
        <button>좋아요</button>
        <button>더 좋아요</button>
      </div>
    </Wrapper>
  );
};

Comment.propTypes = {
  isBest: PropTypes.bool.isRequired,
};

export default React.memo(Comment);

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 30px;
  font-size: 0.8rem;
  border-bottom: 1px solid ${(props) => props.theme.line[1]};

  .comment-contents {
    h3 {
      font-weight: bold;
      margin-bottom: 5px;
    }
    p {
      margin-bottom: 10px;
    }
    .comment-label {
      background: red;
      border-radius: 2px;
      color: white;
      padding-left: 10px;
      padding-right: 10px;
      margin-right: 10px;
      font-weight: 100;
    }
    .comment-time {
      color: ${(props) => props.theme.gray[0]};
    }
  }
  .comment-buttons {
    display: flex;
    align-items: center;
    button {
      color: ${(props) => props.theme.gray[0]};
      margin-left: 10px;
      float: left;
      width: 70px;
      height: 30px;
      border: 1px solid ${(props) => props.theme.gray[0]};
    }

    button:nth-child(1) {
      border: 1px solid blue;
    }
    button:nth-child(2) {
      border: 1px solid red;
    }
  }
`;
