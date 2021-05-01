import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Row } from './Layout';
import { SIGN_OUT_REQUEST } from '../reducers/userReducer';
import Logo from './Logo';

const Header = () => {
  const asPath = useRouter().asPath;
  const [active, setActive] = useState('/'); // className 에러 때문에 그냥 state로 관리
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    setActive(asPath);
  }, [asPath]);

  const onClickLogOut = () => {
    dispatch({
      type: SIGN_OUT_REQUEST,
    });
  };
  return (
    <Wrapper>
      <Row className="header-logo" width="20%">
        <a href="/">
          <Logo />
        </a>
      </Row>
      <StyledRow show="m" width="calc(80% - 170px)">
        <ul className="nav__list">
          <li className={`nav__item ${active === '/' ? 'nav__item--active' : ''}`}>
            <Link href="/">이번달 영웅</Link>
          </li>
          <li className={`nav__item ${active === '/today' ? 'nav__item--active' : ''}`}>
            <Link href="/today">오늘의 영웅</Link>
          </li>
          <li className={`nav__item ${active === '/register' ? 'nav__item--active' : ''}`}>
            <Link href="/register">영웅 등록</Link>
          </li>
          <li className={`nav__item ${active === '/info' ? 'nav__item--active' : ''}`}>
            <Link href="/info">소개</Link>
          </li>
        </ul>
      </StyledRow>
      <Row className="header-user" width="170px">
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
    </Wrapper>
  );
};

export default React.memo(Header);

const Wrapper = styled.div`
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid ${(props) => props.theme.line[1]};
  .header-logo {
    width: 20%;
    float: left;
  }
  img {
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }

  .header-user {
    float: right;

    li {
      margin-left: 20px;
      float: left;
    }
  }
`;

const StyledRow = styled(Row)`
  text-align: center;

  .nav__list {
    height: 100%;
    display: inline-block;
    margin: 0 auto;
  }

  .nav__item {
    float: left;
    margin-right: 60px;

    a {
      font-weight: 500;
      color: ${(props) => props.theme.gray[1]};
    }

    &--active a {
      color: #000;
    }
  }
  .active {
    color: #000;
  }
`;
