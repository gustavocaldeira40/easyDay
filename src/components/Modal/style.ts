// src/components/Modal/EventModal.styles.ts
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

export const CloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }
`;

export const InputField = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
