import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Container from '../components/Layout/Container';

const Lank = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <div className="lank-header"></div>
        <div className="lank-body">
          <Table>
            <div className="header">
              <ul>
                <li>순위</li>
                <li>프로필</li>
                <li>이름</li>
                <li>날짜</li>
                <li>추천수</li>
                <li>추천하기</li>
              </ul>
            </div>
            <div className="body">
              <div className="row">
                <ul>
                  <li className="row-lank">1</li>
                  <li className="row-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8pwdl-wkxs3-9tOyY3awp3YJ3B3SYkkxJg&usqp=CAU" />
                  </li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>
                    <button type="button">추천하기</button>
                  </li>
                </ul>
              </div>
              <div className="row">
                <ul>
                  <li className="row-lank">2</li>
                  <li className="row-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8pwdl-wkxs3-9tOyY3awp3YJ3B3SYkkxJg&usqp=CAU" />
                  </li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>
                    <button type="button">추천하기</button>
                  </li>
                </ul>
              </div>
              <div className="row">
                <ul>
                  <li className="row-lank">3</li>
                  <li className="row-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8pwdl-wkxs3-9tOyY3awp3YJ3B3SYkkxJg&usqp=CAU" />
                  </li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>
                    <button type="button">추천하기</button>
                  </li>
                </ul>
              </div>
            </div>
          </Table>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Lank;

const Table = styled.div`
  width: 100%;
  text-align: center;

  .header {
    position: relative;
    ul {
      display: flex;
      background: ${(props) => props.theme.blue[0]};
      color: #fff;
      padding-top: 10px;
      padding-bottom: 10px;
      opacity: 0;

      li {
        width: 16.6%;
        text-align: center;
      }
    }

    &::before {
      content: '순위';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: ${(props) => props.theme.blue[0]};
      color: #fff;
      padding-top: 10px;
      padding-bottom: 10px;
    }
    @media (min-width: 992px) {
      ul {
        opacity: 1;
      }

      &::before {
        opacity: 0;
      }
    }
  }

  .body .row {
    padding-bottom: 50px;
    border-bottom: 1px solid ${(props) => props.theme.line[1]};
    position: relative;

    ul {
      li {
        width: 100%;
        overflow: hidden;
      }
    }
    button {
      border: 1px solid ${(props) => props.theme.blue[0]};
      padding: 10px;
      border-radius: 10px;
      color: ${(props) => props.theme.blue[0]};
      font-weight: 400;
      width: 80%;
    }
    .row-lank {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 3rem;
      font-weight: 700;
      color: ${(props) => props.theme.gray[1]};
    }

    .row-image {
      padding: 20px;
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
      }
    }
    @media (min-width: 992px) {
      padding-bottom: 0;
      ul {
        display: flex;
        justify-content: center;
        align-items: center;

        li {
          width: 16.6%;
        }
      }
      .row-lank {
        position: relative;
        font-size: 3rem;
        font-weight: 700;
        color: ${(props) => props.theme.gray[1]};
      }

      .row-image {
        padding: 20px;
        img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 50%;
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  .lank-header {
    margin-bottom: 50px;
  }
`;
