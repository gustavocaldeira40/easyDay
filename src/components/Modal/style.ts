import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #3f51b5;
  font-weight: bold;
`;

export const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #3f51b5;
  }
`;

export const TextareaField = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: #3f51b5;
  }
`;

export const ButtonCancel = styled.button`
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, border-color 0.3s;
  align-self: flex-start; /* Alinha o botão à esquerda */

  &:hover {
    background-color: #e0e0e0;
    border-color: #bbb;
  }

  &:active {
    background-color: #d0d0d0;
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(63, 81, 181, 0.7);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Distribui os botões igualmente */
  gap: 10px; /* Espaço entre os botões */
  margin-top: 20px;
`;
