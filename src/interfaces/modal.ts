
import dayjs from "dayjs";
import { CalendarEventsProps } from "./events";

export interface EventModalProps {
  open: boolean;
  onClose: () => void;
  selectedDate: dayjs.Dayjs;
  // setSelectedDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
  time: string | null  ;
  handleSave: (event: CalendarEventsProps) => void;
}