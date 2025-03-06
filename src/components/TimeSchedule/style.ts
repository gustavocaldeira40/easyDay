import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface TimeCellProps {
  isOccupied: boolean;
}


export const ContainerGlobal = styled.div`
  background-color: #fff;
  margin: 10px 0;
  overflow: hidden;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 5px;
  /* background-color: blue; */
  overflow: hidden;
`;

export const TimeSlot = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  overflow: hidden;
`;

export const TimeLabel = styled.div`
  width: 60px;
  text-align: center;
  font-size: 14px;
  color: #333;
`;

export const TimeCell = styled.div<TimeCellProps>`
  flex: 1;
  height: 60px;
  background-color: ${({ isOccupied }) => (isOccupied ? '#f5a623' : '#f4f4f4')};  // Altera a cor se ocupado
  border-radius: 10px;
  cursor: ${({ isOccupied }) => (isOccupied ? 'not-allowed' : 'pointer')}; // Desabilita o clique se ocupado

  &:hover {
    background-color: ${({ isOccupied }) =>
      isOccupied ? '#f5a623' : theme.colors.hover}; // Hover normal se não ocupado
    transition: background-color 0.5s;
  }
`;