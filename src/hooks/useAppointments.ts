import { useContext } from "react";
import { AppointmentsContextType } from "../interfaces/appointmentsContext";
import { AppointmentsContext } from "../contexts/appointments";

export const useAppointments = (): AppointmentsContextType => {
  const context = useContext(AppointmentsContext);
  if (!context) {
    throw new Error('useAppointments must be used within an AppointmentsProvider');
  }
  return context;
};
