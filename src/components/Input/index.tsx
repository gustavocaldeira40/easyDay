import { InputProps } from "../../interfaces/input";
import { StyledTextField } from "./style";

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  fullWidth = true,
  multiline = false,
  rows = 4,
}) => {
  return (
    <StyledTextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      variant="outlined"
      margin="normal"
    />
  );
};

export default Input;