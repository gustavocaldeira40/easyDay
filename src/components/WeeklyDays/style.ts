import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const DaysScrollContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  padding-right: 10px;
  margin: 10px 0 10px 60px;
  padding-bottom: 7px;
  overflow-x: auto;
  white-space: nowrap;
`;

export const DayLabel = styled.div<{ isSelected: boolean; typeLabel: string }>`
  font-size: ${({ typeLabel }) => (typeLabel === 'week' ? '18px' : '14px')};
  font-weight: ${({ isSelected, typeLabel }) =>
    isSelected && typeLabel === 'week' ? 'bold' : 'normal'};
`;

export const DayCell = styled.div<{ isSelected: boolean; isDisabled: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Deslocamento X, Y, desfoque, cor */
  
  

  /* background: linear-gradient(to bottom, #e0e0e0, #ffffff);   */
  background-color: ${({ isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.background};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};

  /* font-size: 14px; */
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isDisabled, isSelected }) =>
      !isDisabled && !isSelected ? theme.colors.hover : ''};
  }
`;
