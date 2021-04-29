import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ModalLayout from '../ModalLayout';
import Comments from './Comments';

const dummyData = {
  id: 2,
  name: 'Abdul Molina',
  date: '2021-04-25',
  location: 'Ap #873-5086 Vitae Street',
  category: 2,
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8pwdl-wkxs3-9tOyY3awp3YJ3B3SYkkxJg&usqp=CAU',
};

const ModalHero = ({ id, onCloseModal }) => {
  return (
    <ModalLayout onCloseModal={onCloseModal}>
      <Wrapper>
        <div className="modal-header">
          <img src={dummyData.url} />

          <div className="modal-header__contents">
            <div className="modal-header__info">
              <h2>{dummyData.name}</h2>
              <p>Sunt sint ex Lorem ut cillum ut laboris magna do est.</p>
            </div>
            <div className="modal-header__statistics">
              <span label="좋아요">50</span>
              <span label="댓글 수">100</span>
              <span label="즐겨찾기">10</span>
            </div>
            <div className="modal-header__buttons">
              <button>좋아요</button>
              <button>댓글달기</button>
              <button>즐겨찾기</button>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-body__section">
            <h2>1. 상세내용1</h2>
            <p>
              Deserunt eu in fugiat consequat tempor officia ut nostrud. Qui aliqua exercitation ut deserunt non aute
              est elit id dolor. Eiusmod adipisicing Lorem fugiat exercitation id quis Lorem elit eu esse cupidatat
              consequat Lorem veniam. Sit pariatur pariatur elit amet irure. Nisi ad anim sunt excepteur nostrud minim
              ullamco incididunt. Sit nostrud sint duis consectetur non dolor ad excepteur aute veniam labore labore ex
              enim. Dolor aliquip deserunt deserunt nisi labore aliquip amet sit aute aliquip aliqua. Sunt ut culpa
              irure qui quis. Incididunt eiusmod velit fugiat adipisicing in eu pariatur. Incididunt eu reprehenderit
              elit esse deserunt duis mollit fugiat exercitation. Tempor aliquip sit non pariatur incididunt ad eu
              ullamco amet anim exercitation eiusmod est. Sint ullamco sit deserunt et nisi ullamco Lorem. Occaecat esse
              ut nulla eu veniam dolor proident sunt nisi in. Nulla qui veniam veniam nisi ipsum quis cupidatat esse
              culpa. Aute ut incididunt dolor amet non sunt adipisicing.
            </p>
            <button>글 수정 요청</button>
          </div>
          <div className="modal-body__section">
            <h2>2. 상세내용1</h2>
            <p>
              Deserunt eu in fugiat consequat tempor officia ut nostrud. Qui aliqua exercitation ut deserunt non aute
              est elit id dolor. Eiusmod adipisicing Lorem fugiat exercitation id quis Lorem elit eu esse cupidatat
              consequat Lorem veniam. Sit pariatur pariatur elit amet irure. Nisi ad anim sunt excepteur nostrud minim
              ullamco incididunt. Sit nostrud sint duis consectetur non dolor ad excepteur aute veniam labore labore ex
              enim. Dolor aliquip deserunt deserunt nisi labore aliquip amet sit aute aliquip aliqua. Sunt ut culpa
              irure qui quis. Incididunt eiusmod velit fugiat adipisicing in eu pariatur. Incididunt eu reprehenderit
              elit esse deserunt duis mollit fugiat exercitation. Tempor aliquip sit non pariatur incididunt ad eu
              ullamco amet anim exercitation eiusmod est. Sint ullamco sit deserunt et nisi ullamco Lorem. Occaecat esse
              ut nulla eu veniam dolor proident sunt nisi in. Nulla qui veniam veniam nisi ipsum quis cupidatat esse
              culpa. Aute ut incididunt dolor amet non sunt adipisicing.
            </p>
            <button>글 수정 요청</button>
          </div>
        </div>
        <div className="modal-footer">
          <Comments />
        </div>
        <div className="modal-close" onClick={onCloseModal}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </Wrapper>
    </ModalLayout>
  );
};

ModalHero.propType = {
  id: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
export default ModalHero;

const Wrapper = styled.div`
  padding: 40px;
  min-height: 900px;
  height: 900px;
  overflow-y: scroll;
  position: relative;

  .modal-header {
    padding: 30px;
    display: block;
    margin-bottom: 30px;

    img {
      display: block;
      width: 100%;
      min-height: 350px;
      object-fit: cover;
    }
  }

  .modal-header__contents {
    padding: 0 30px;
  }

  .modal-header__info {
    margin-bottom: 40px;
  }
  .modal-header__statistics {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 50px;
    width: 100%;

    span {
      position: relative;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      line-height: 130px;
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

      &::before {
        content: attr(label);
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  .modal-header__buttons button {
    width: 100%;
    padding: 10px 40px;
    border: 1px solid ${(props) => props.theme.gray[0]};
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .modal-body__section {
    padding: 30px 50px 50px;
    border: 1px solid ${(props) => props.theme.gray[1]};
    border-radius: 10px;
    margin-bottom: 30px;

    h2 {
      margin-bottom: 10px;
      font-weight: bold;
    }

    button {
      width: 170px;
      padding: 10px 10px;
      border: 1px solid ${(props) => props.theme.gray[1]};
      margin-top: 20px;
    }
  }

  .modal-close {
    position: fixed;
    top: 10px;
    right: 30px;
    font-size: 3rem;
  }

  @media (min-width: 992px) {
    .modal-header {
      display: flex;

      img {
        width: 350px;
      }
    }
    .modal-header__contents {
      flex: 1;
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
    .modal-header__buttons button {
      width: 170px;
    }
  }
`;
