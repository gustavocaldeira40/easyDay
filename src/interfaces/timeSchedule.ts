import { Dayjs } from 'dayjs';
import { CalendarEventsProps } from './events';

export interface TimeScheduleProps {
  onTimeSelect: (time: string) => void;
  appointments: CalendarEventsProps[];
}
