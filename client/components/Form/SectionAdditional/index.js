import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Gallery from './Gallery';
import Info from './Info';

const initialState = {
  imageArray: [],
  infoArray: [{ title: 'few', content: 'fewfwe' }],
};

const SectionAdditional = ({ setPage }) => {
  const [state, setState] = useState(initialState);
  const { imageArray, infoArray } = state;
  // TODO. 바로 업로드 후 URL만 저장
  const onChangeImage = useCallback((e) => {
    const { files } = e.target;

    let imageUrls = [];
    for (let i = 0; i < files.length; i++) {
      const url = URL.createObjectURL(event.target.files[i]);
      imageUrls[i] = url;
    }

    const newImageArray = [...state.imageArray, ...imageUrls];
    if (newImageArray.length > 10) {
      alert('사진은 최대 10개까지만 업로드 가능합니다.');
      setState({ ...state, imageArray: newImageArray.slice(0, 10) });
    } else {
      setState({ ...state, imageArray: newImageArray });
    }
  }, []);

  const onChangeInfo = useCallback(
    (name) => (e) => {
      setState({
        ...state,
        info: {
          ...state.info,
          [name]: e.target.value,
        },
      });
    },
    []
  );

  const onClickButton = (ctg) => () => {
    if (ctg === 'prev') {
      setPage(1);
    }
  };
  return (
    <Wrapper>
      <div className="section-add__title">
        <h3>영웅과 관련된 정보를 자유롭게 작성해주세요.</h3>
        <p>(신문기사, 사진, 업적 등등)</p>
      </div>
      <Gallery imageArray={imageArray} onChangeImage={onChangeImage} />
      <Info infoArray={infoArray} onChangeInfo={onChangeInfo} />
      <Button type="button" className="section-add__prev" m="0 10px" onClick={onClickButton('prev')}>
        이전
      </Button>
      <Button type="button" className="section-add__next" m="0 10px" onClick={onClickButton('next')}>
        제출
      </Button>
    </Wrapper>
  );
};

export default SectionAdditional;

const Wrapper = styled.div`
  .section-add__title {
    margin-bottom: 30px;
    color: ${(props) => props.theme.gray[0]};
    font-size: 0.9rem;
  }

  .section-add__prev,
  .section-add__next {
    margin-top: 30px;
    width: 150px;
    background: ${(props) => props.theme.green[0]};
  }

  .section-add__prev {
    background: none;
    color: ${(props) => props.theme.green[0]};
    border: 2px solid ${(props) => props.theme.green[0]};
  }
`;
