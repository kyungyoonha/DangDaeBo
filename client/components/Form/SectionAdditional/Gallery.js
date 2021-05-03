import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Gallery = ({ imageArray, onChangeImage }) => {
  const buttonRef = useRef();

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

Gallery.propsTypes = {
  imageArray: PropTypes.array.isRequired,
  onUloadImage: PropTypes.func.isRequired,
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
