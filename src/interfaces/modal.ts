import dayjs from 'dayjs';
import { CalendarEventsProps } from './events';

export interface EventModalProps {
  open: boolean;
  onClose: () => void;
  selectedDate: dayjs.Dayjs;
  time: string;
  handleSave: (event: CalendarEventsProps) => void;
}
