import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ModalLayout from './ModalLayout';

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
    <ModalLayout onCloseModal={onCloseModal} w="1200px">
      <Wrapper>
        <div className="modal-header"></div>
        <div className="modal-body"></div>
        <div className="modal-footer"></div>
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

  .modal-header {
    height: 400px;
    background: ${(props) => props.theme.gray[0]};
  }

  .modal-body {
    height: 400px;
    background: blue;
  }
  .modal-footer {
    height: 800px;
    background: green;
  }
`;
