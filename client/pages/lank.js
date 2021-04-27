import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Container from '../components/Layout/Container';

const Lank = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <div className="lank-today">오늘 등록된 후보자</div>
        <div className="lank-table">
          <div className="lank-table__filters" style={{ height: '300px', border: '1px solid gray' }}>
            테이블 필터
          </div>
          <h2 className="lank-table__title">등록 대기중</h2>
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
                    <li className="table-body__lank">{idx + 1}</li>
                    <li className="table-body__image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8pwdl-wkxs3-9tOyY3awp3YJ3B3SYkkxJg&usqp=CAU" />
                    </li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li className="table-body__buttons">
                      <button type="button">
                        <ion-icon className="table-body__icon" name="thumbs-up-outline"></ion-icon>
                      </button>
                      <button type="button">
                        <ion-icon className="table-body__icon" name="star-outline"></ion-icon>
                      </button>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </Table>
        </div>
        <div className="lank-"></div>
      </Container>
    </Wrapper>
  );
};

export default Lank;

const Wrapper = styled.div`
  .lank-today {
    margin-bottom: 50px;
    height: 400px;
    border: 1px solid ${(props) => props.theme.gray[0]};
  }

  .lank-table__title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
  }
`;

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
      opacity: 0;
    }
  }

  .table-header__list {
    display: flex;
    background: ${(props) => props.theme.blue[0]};
    color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    opacity: 1;

    li {
      width: 16.6%;
      text-align: center;
    }
  }

  .table-body__row {
    padding-bottom: 0;
  }
  .table-body__list {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.line[1]};
    height: 200px;

    li {
      width: 16.6%;
    }
  }
  .table-body__buttons {
    button {
      position: relative;
      margin-right: 10px;
      width: 40px;
      height: 40px;
      color: ${(props) => props.theme.blue[0]};
      border: 1px solid ${(props) => props.theme.blue[0]};
      border-radius: 50px;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
    }
  }

  .table-body__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
      object-fit: cover;
    }
  }

  @media (max-width: 992px) {
    .table-header::before {
      opacity: 1;
    }
    .table-header__list {
      opacity: 0;
    }
    .table-body__row {
      padding-bottom: 50px;
      position: relative;
      padding: 0 0 20px;
    }

    .table-body__list {
      display: block;
      padding-bottom: 0px;
      overflow: hidden;
      height: auto;

      li {
        width: 100%;
      }
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
        border-radius: 0;
      }
    }
  }
`;
