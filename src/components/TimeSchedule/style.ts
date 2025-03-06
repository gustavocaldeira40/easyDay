import styled from 'styled-components';
import { theme } from '../../styles/theme';

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

export const TimeCell = styled.div`
  flex: 1;
  height: 60px;
  background-color: #f4f4f4;
  border-radius: 10px;
  /* border: 1px solid #ddd; */
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.hover};
    transition: background-color 0.5s;
  }
`;
