
import styled from 'styled-components';
export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); // 7 colunas (para 7 dias da semana)
  gap: 10px;
  padding: 20px;
`;

export const DayCell = styled.div`
  background-color: transparent; // Sem fundo
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #90caf9; // Azul claro no hover
  }
`;

export const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Apenas uma coluna para os horários
  gap: 5px;
  margin-top: 20px;
`;

export const TimeCell = styled.div`
  background-color: transparent; // Sem fundo
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;
  border: 1px solid #ccc; // Apenas borda para destacar o horário

  &:hover {
    background-color: #90caf9; // Azul claro no hover
  }
`;