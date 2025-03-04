export interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Tipo genérico para permitir tanto Input quanto Textarea
  type?: string;
  placeholder?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
}