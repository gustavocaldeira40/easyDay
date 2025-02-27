import styled from 'styled-components';
import { Button } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 100vh;
  background-color: #fff;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #ff6347;
`;

export const Emoji = styled.div`
  font-size: 4rem;
  margin: 20px 0;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
`;

export const GoHomeButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  &:hover {
    background-color: #45a049;
  }
`;
