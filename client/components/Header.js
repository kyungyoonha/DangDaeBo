import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Row } from './Layout';
import { SIGN_OUT_REQUEST } from '../reducers/userReducer';
import Logo from './Logo';

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
      <Row className="header-logo" width="20%">
        <a href="/">
          <Logo />
        </a>
      </Row>
      <StyledRow show="m" width="calc(80% - 170px)">
        <ul>
          <li className={asPath === '/' ? 'active' : ''}>
            <Link href="/">기억하자</Link>
          </li>
          <li className={asPath === '/page1' ? 'active' : ''}>
            <Link href="/">오늘의 의인</Link>
          </li>
          <li className={asPath === '/page2' ? 'active' : ''}>
            <Link href="/">의인 등록</Link>
          </li>
          <li className={asPath === '/page3' ? 'active' : ''}>
            <Link href="/">소개</Link>
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
  border-bottom: 1px solid ${(props) => props.theme.line[0]};
  .header-logo {
    width: 20%;
    float: left;
  }
  img {
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }
  .center {
    width: 100%;
    text-align: center;
  }
  ul {
    height: 100%;
    display: inline-block;
    margin: 0 auto;
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

const StyledRow = styled(Row)`
  text-align: center;
`;
