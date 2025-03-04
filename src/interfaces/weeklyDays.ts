import dayjs, { Dayjs } from 'dayjs';

export interface WeeklyDaysProps {
  selectedDate: dayjs.Dayjs;
  selectedFilter: string;
  onDateChange: (date: Dayjs | null) => void;
}
