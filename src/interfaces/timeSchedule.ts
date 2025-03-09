import { Dayjs } from 'dayjs';
import { CalendarEventsProps } from './calendar';

export interface TimeScheduleProps {
  onTimeSelect: (time: string) => void;
  appointments: CalendarEventsProps[];
}
