import { Button } from '@mui/material';
import styled from 'styled-components';

export const StyledButton = styled(Button)<{ fullWidth?: boolean }>`
  border-radius: 8px;
  font-size: 16px;
  padding: 10px 20px;

  &:hover {
    background-color: #1976d2;
    color: white;
  }
`;
