import React from 'react';
import styled from 'styled-components';

const ErrorFallback = ({ error }: { error: Error }) => {
  const goHome = () => {
    window.location.replace(`/`);
  };

  return (
    <ErrorContainer>
      <ErrorMessage>{error.message}</ErrorMessage>
      <Reset onClick={goHome}>Go to Main</Reset>
    </ErrorContainer>
  );
};

export default ErrorFallback;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 9999999;
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.color.purple};
`;

const Reset = styled.button`
  width: 200px;
  height: 200px;
`;
