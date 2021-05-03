import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { Button } from '../Form';

const initialState = {
  imageArray: ['few'],
  infoArray: [],
};

const FormSectionAdditional = ({ setPage }) => {
  const buttonRef = useRef();
  const [state, setState] = useState(initialState);
  const { imageArray, infoArray } = state;
  // TODO. 바로 업로드 후 URL만 저장
  const onUloadImage = (e) => {
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
  };

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
      <div className="gallery">
        <h3 className="galery__title">※ 사진 업로드</h3>
        <input
          name="pictures"
          type="file"
          id="pictures"
          accept="image/*"
          multiple
          ref={buttonRef}
          hidden
          onChange={onUloadImage}
        />
        <div className="gallery__list">
          {imageArray.map((src, idx) => (
            <img key={idx} className="gallery__item" src={src} />
          ))}
          {imageArray.length < 10 && (
            <div className="gallery__add" onClick={() => buttonRef.current.click()}>
              <i className="fas fa-plus"></i>
            </div>
          )}
        </div>
      </div>

      <Button type="button" className="section-add__prev" m="0 10px" onClick={onClickButton('prev')}>
        이전
      </Button>
      <Button type="button" className="section-add__next" m="0 10px" onClick={onClickButton('next')}>
        제출
      </Button>
    </Wrapper>
  );
};

export default FormSectionAdditional;

const Wrapper = styled.div`
  .section-add__title {
    margin-bottom: 30px;
    color: ${(props) => props.theme.gray[0]};
    font-size: 0.9rem;
  }

  .gallery {
    text-align: left;

    .galery__title {
      margin: 20px 0 10px;
    }
    .gallery__list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .gallery__item,
    .gallery__add {
      width: 140px;
      height: 140px;
    }

    .gallery__item {
      background: red;
      margin-right: 10px;
      margin-bottom: 10px;
      object-fit: cover;
    }

    .gallery__add {
      position: relative;
      border: 2px solid ${(props) => props.theme.line[1]};
      cursor: pointer;

      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        color: ${(props) => props.theme.line[1]};
      }
    }
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
