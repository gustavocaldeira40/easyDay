import {ButtonProps as PropsButton} from '@mui/material'
export interface ButtonProps extends PropsButton {
  label: string;
  onClick: () => void;
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined' | 'text';
  fullWidth?: boolean;
}