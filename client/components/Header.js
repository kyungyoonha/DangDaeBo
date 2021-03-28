import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Container, Row } from './Layout';
import { SIGN_OUT_REQUEST } from '../reducers/userReducer';

const Header = () => {
  const asPath = useRouter().asPath;
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const onClickLogOut = () => {
    dispatch({
      type: SIGN_OUT_REQUEST,
    });
  };

  return (
    <Wrapper>
      <Container>
        <Row width="20%">
          <a href="/">
            <img
              src="https://user-images.githubusercontent.com/29701385/109490996-6157e780-7acc-11eb-96bb-52ac25c7f64d.png"
              alt=""
            />
          </a>
        </Row>
        <Row show="m">
          <ul>
            <li className={asPath === '/' ? 'active' : ''}>
              <Link href="/">Home</Link>
            </li>
            <li className={asPath === '/page1' ? 'active' : ''}>
              <Link href="/">페이지2</Link>
            </li>
            <li className={asPath === '/page2' ? 'active' : ''}>
              <Link href="/">페이지3</Link>
            </li>
            <li className={asPath === '/page3' ? 'active' : ''}>
              <Link href="/">페이지4</Link>
            </li>
          </ul>
        </Row>
        <Row className="header-user">
          {me ? (
            <>
              <li>{me.name} 님</li>
              <li onClick={onClickLogOut}>로그아웃</li>
            </>
          ) : (
            <>
              <li>
                <a href="/signin">로그인</a>
              </li>
              <li>
                <a href="/signup">회원가입</a>
              </li>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 100px;
  line-height: 100px;
  border: 1px solid darkblue;

  img {
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }

  ul {
    li {
      float: left;
      margin-right: 60px;
    }

    li.active {
      a {
        color: #000;
      }
    }

    a {
      font-weight: 500;
      color: ${(props) => props.theme.gray[1]};
    }
  }

  .header-user {
    float: right;
    li {
      margin-left: 20px;
      float: left;
    }
  }
`;
