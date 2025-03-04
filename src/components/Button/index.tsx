import React from 'react';
import { ButtonProps } from '../../interfaces/button';
import { StyledButton } from './style';

const CustomButton: React.FC<ButtonProps> = ({ label, onClick, color = 'primary', variant = 'contained', fullWidth = true }) => {
  return (
    <StyledButton color={color} variant={variant} onClick={onClick} fullWidth={fullWidth}>
      {label}
    </StyledButton>
  );
};

export default CustomButton;