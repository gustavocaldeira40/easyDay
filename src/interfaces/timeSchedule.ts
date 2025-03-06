import { Dayjs } from 'dayjs';

export interface TimeScheduleProps {
  selectedDate: Dayjs;
  onTimeSelect: (time: string) => void;
}
