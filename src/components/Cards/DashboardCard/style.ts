import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const CardContainer = styled.div`
  /* background-color: ${theme.colors.background}; */
  background-color: #fff;
  width: 40vw;
  /* border: 1px solid #ccc; */
  /* height: auto; */
  /* border-radius:  0px 0px 12px 12px; */
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 5px 10px;
  color: ${theme.colors.textLight};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  /* border-radius: 10px; */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.text};
`;

export const CardContent = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: ${theme.colors.textLight};
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* background:red; */
`;

export const DetailLabel = styled.h4`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin: 0;
`;
