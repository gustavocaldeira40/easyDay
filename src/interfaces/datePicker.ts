import { Dayjs } from 'dayjs';

export interface DatePickerProps {
  selectedDate: Dayjs;
  handleDateChange: (date: Dayjs | null) => void;
}
