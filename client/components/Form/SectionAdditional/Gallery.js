import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { FORM_UPLOAD_REQUEST } from '../../../reducers/formReducer';

const Gallery = () => {
  const buttonRef = useRef();
  const dispatch = useDispatch();
  const { imageArray } = useSelector((state) => state.form);

  const onChangeImage = (e) => {
    const { files } = e.target;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      if (i > 9) {
        alert('사진은 10개까지만 업로드됩니다.');
        break;
      }
      formData.append('image', files[i]);
    }
    dispatch({
      type: FORM_UPLOAD_REQUEST,
      payload: formData,
    });
  };

  return (
    <Wrapper className="gallery">
      <h3 className="galery__title">※ 사진 업로드</h3>
      <input
        name="pictures"
        type="file"
        id="pictures"
        accept="image/*"
        multiple
        ref={buttonRef}
        hidden
        onChange={onChangeImage}
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
    </Wrapper>
  );
};

export default Gallery;

const Wrapper = styled.div`
  text-align: left;

  .galery__title {
    margin: 20px 0 10px;
  }
  .gallery__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .gallery__item,
  .gallery__add {
    width: 140px;
    height: 140px;
  }

  .gallery__item {
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
`;
