import { TextField } from '@mui/material';
import styled from 'styled-components';

export const StyledTextField = styled(TextField)<{ fullWidth?: boolean }>`
  .MuiInputBase-root {
    background-color: #fff;
    border-radius: 8px;
  }

  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #1976d2;
    }
  }

  .MuiInputLabel-root {
    font-size: 16px;
    color: #333;
  }

  .MuiOutlinedInput-input {
    font-size: 16px;
    padding: 10px;
  }
`;
