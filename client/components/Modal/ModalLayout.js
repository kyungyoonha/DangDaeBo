import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../Layout';

const ModalLayout = ({ className, w = '600px', onCloseModal, children }) => {
  return (
    <Wrapper className={className} onClick={onCloseModal}>
      <Container>
        <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ width: w }}>
          {children}
        </div>
      </Container>
    </Wrapper>
  );
};

ModalLayout.propTypes = {
  className: PropTypes.string,
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ModalLayout;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;

  .modal-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
  }
`;
