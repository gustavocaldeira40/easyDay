import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CalendarEventsProps } from '../interfaces/calendar';
import { AppointmentsContextType } from '../interfaces/appointmentsContext';

// Salvar eventos no localStorage
const saveAppointmentsToLocalStorage = (appointments: CalendarEventsProps[]) => {
  localStorage.setItem('appointments', JSON.stringify(appointments));
};

// Carregar eventos do localStorage
const loadAppointmentsFromLocalStorage = (): CalendarEventsProps[] => {
  const savedAppointments = localStorage.getItem('appointments');
  return savedAppointments ? JSON.parse(savedAppointments) : [];
};

interface AppointmentsProviderProps {
  children: ReactNode;
}

export const AppointmentsContext = createContext<AppointmentsContextType | undefined>(undefined);

export const AppointmentsProvider: React.FC<AppointmentsProviderProps> = ({ children }) => {
  const [appointments, setAppointments] = useState<CalendarEventsProps[]>([]);


  const addAppointment = (appointment: CalendarEventsProps) => {
    const updatedAppointments = [...appointments, appointment];
    setAppointments(updatedAppointments);
    saveAppointmentsToLocalStorage(updatedAppointments);
  };

  const removeAppointment = (time: string) => {
    const updatedAppointments = appointments.filter(appointment => appointment.time !== time);
    setAppointments(updatedAppointments);
    saveAppointmentsToLocalStorage(updatedAppointments);
  };

  useEffect(() => {
    const storedAppointments = loadAppointmentsFromLocalStorage();
    setAppointments(storedAppointments);
  }, []);

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment, removeAppointment, setAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};
