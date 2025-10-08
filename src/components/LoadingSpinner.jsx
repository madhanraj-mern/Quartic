import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

const LoadingSpinnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.25rem solid #f3f3f3;
  border-top: 0.25rem solid #f15a29;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <LoadingSpinnerBox>
        <Spinner role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </LoadingSpinnerBox>
    </LoadingContainer>
  );
};

export default LoadingSpinner;

