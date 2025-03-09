
import { CalendarEventsProps } from "./calendar";

export interface AppointmentsContextType {
  appointments: CalendarEventsProps[];
  addAppointment: (appointment: CalendarEventsProps) => void;
  removeAppointment: (time: string) => void;
 }