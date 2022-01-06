import React from 'react';
import styled from 'styled-components';

const Popup = () => {
  return (
    <PopupContainer>
      <LoginModal>
        <div>인풋</div>
        <div>소셜로그인</div>
      </LoginModal>
    </PopupContainer>
  );
};

const PopupContainer = styled.div`
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const LoginModal = styled.div`
  width: 300px;
  height: 500px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;

export default Popup;
