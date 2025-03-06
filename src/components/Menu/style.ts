import styled from 'styled-components';
import { theme } from '../../styles/theme';

// Cor primária da aplicação
const primaryColor = '#3f51b5';
const textColor = '#333'; // Cor do texto normal
const hoverColor = '#f0f0f0'; // Cor de fundo do hover

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 4vw;
  height: 100vh;
  background-color: #fff;
  border-radius: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10vh;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease-in-out;

  &:hover {
    width: 5vw; /* Expande ao passar o mouse */
  }
`;

export const MenuItem = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? theme.colors.primary : 'transparent'};
  color: ${({ isActive }) => (isActive ? '#fff' : '#dcdcdc')};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => !isActive && theme.colors.hover};
    color: #fff;
  }

  svg {
    font-size: 24px;
  }
`;
