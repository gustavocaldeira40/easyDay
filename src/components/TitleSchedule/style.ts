import styled from 'styled-components';
import { IconButton } from '@mui/material';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
  margin-top: 20px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButtonStyled = styled(IconButton)`
  padding: 8px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 2px;
  /* background-color: #f9f9f9; */
`;

// Opções de filtro (Day, Week, Month)
export const FilterOption = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#1565C0' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  border: none;
  /* border: 1px solid ${({ selected }) => (selected ? '#fff' : '#ddd')}; */
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  /* transition:
    background-color 0.3s,
    color 0.3s; */

  /* &:hover {
    background-color: rgba(21, 101, 192, 0.3);
  } */
`;
