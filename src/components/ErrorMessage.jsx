import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  z-index: 9999;
  padding: 2rem;
`;

const ErrorMessageBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
`;

const ErrorIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ErrorTitle = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const ErrorText = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

const RetryButton = styled.button`
  background-color: #f15a29;
  border-color: #f15a29;
  padding: 0.5rem 2rem;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #d94e1f;
    border-color: #d94e1f;
  }
`;

const ErrorMessage = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorMessageBox>
        <ErrorIcon>⚠️</ErrorIcon>
        <ErrorTitle>Something went wrong</ErrorTitle>
        <ErrorText>{message || 'An error occurred while loading the page. Please try again later.'}</ErrorText>
        <RetryButton onClick={() => window.location.reload()}>
          Retry
        </RetryButton>
      </ErrorMessageBox>
    </ErrorContainer>
  );
};

export default ErrorMessage;

