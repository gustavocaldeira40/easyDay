import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const DaysScrollContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding: 10px 10px 10px 60px;
  padding-bottom: 7px;
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 5px;
`;

export const DayLabel = styled.div<{ isSelected: boolean; typeLabel: string }>`
  font-size: ${({ typeLabel }) => (typeLabel === 'week' ? '18px' : '14px')};
  font-weight: ${({ isSelected, typeLabel }) =>
    isSelected && typeLabel === 'week' ? 'bold' : 'normal'};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')}; /* Modificado: Adicionando cor para destacar o texto */
`;

export const DayCell = styled.div<{ isSelected: boolean; isDisabled: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${({ isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.background};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')}; /* Modificado: Altera o cursor para 'not-allowed' quando desabilitado */
  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)}; /* Modificado: Reduz a opacidade quando desabilitado */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isDisabled, isSelected }) =>
      !isDisabled && !isSelected ? theme.colors.hover : ''};
  }

  /* Estilo para a borda quando o dia for selecionado */
  border: ${({ isSelected }) => (isSelected ? '2px solid #fff' : 'none')};
`;
