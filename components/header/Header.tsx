import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <a>로고</a>
      </Logo>
      <UserContainer>
        <HeaderBtn>login</HeaderBtn>
        <HeaderBtn>sign up</HeaderBtn>
      </UserContainer>
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.header`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
`;
const Logo = styled.h1`
  float: left;
`;
const UserContainer = styled.div`
  float: right;
`;
const HeaderBtn = styled.button`
  border: none;
  background: none;
`;
