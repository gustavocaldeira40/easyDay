export interface ButtonProps {
  label: string;
  onClick: () => void;
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined' | 'text';
  fullWidth?: boolean;
}