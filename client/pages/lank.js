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
            <div className="table-header">
              <ul className="table-header__list">
                <li>순위</li>
                <li>프로필</li>
                <li>이름</li>
                <li>날짜</li>
                <li>추천수</li>
                <li>추천하기</li>
              </ul>
            </div>
            <div className="table-body">
              {[...new Array(3)].map((_, idx) => (
                <div key={idx} className="table-body__row">
                  <ul className="table-body__list">
                    <li className="table-body__lank">1</li>
                    <li className="table-body__image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8pwdl-wkxs3-9tOyY3awp3YJ3B3SYkkxJg&usqp=CAU" />
                    </li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>
                      <button type="table-body__button">추천하기</button>
                    </li>
                  </ul>
                </div>
              ))}
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

  .table-header {
    position: relative;

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
    }
  }

  .table-header__list {
    display: flex;
    background: ${(props) => props.theme.blue[0]};
    color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    opacity: 0;
  }

  .table-header__list li {
    width: 16.6%;
    text-align: center;
  }

  .table-body__row {
    padding-bottom: 50px;
    position: relative;
    padding: 0 20px 20px;
  }
  .table-body__list {
    padding-bottom: 30px;
    overflow: hidden;
    li {
      width: 100%;
      overflow: hidden;
    }
  }
  .table-body__button {
    border: 1px solid ${(props) => props.theme.blue[0]};
    padding: 10px;
    border-radius: 10px;
    color: ${(props) => props.theme.blue[0]};
    font-weight: 400;
    width: 80%;
  }
  .table-body__lank {
    font-size: 2rem;
    font-weight: 700;
    background: #ebf2f8;
  }

  .table-body__image {
    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
    }
  }

  @media (min-width: 992px) {
    .table-header::before {
      opacity: 0;
    }
    .table-header__list {
      opacity: 1;
    }
    .table-body__row {
      padding-bottom: 0;
    }

    .table-body__list {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid ${(props) => props.theme.line[1]};

      li {
        width: 16.6%;
      }
    }
    .table-body__lank {
      font-size: 3rem;
      font-weight: 700;
      color: ${(props) => props.theme.gray[1]};
      background: none;
      width: 16.6%;
    }

    .table-body__image {
      padding: 20px;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
  }
`;

const Wrapper = styled.div`
  .lank-header {
    margin-bottom: 50px;
  }
`;
