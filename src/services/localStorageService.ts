// services/localStorage.ts

import { CalendarEventsProps } from '../interfaces/events';

// Função para obter eventos do LocalStorage
export const getEventsFromLocalStorage = (): CalendarEventsProps[] => {
  return JSON.parse(localStorage.getItem('@easyDay:events') || '[]');
};

// Função para salvar eventos no LocalStorage
export const saveEventToLocalStorage = (newEvent: CalendarEventsProps) => {
  const storedEvents = getEventsFromLocalStorage();
  storedEvents.push(newEvent);
  localStorage.setItem('@easyDay:events', JSON.stringify(storedEvents));
};

// Função para editar evento no LocalStorage
export const editEventInLocalStorage = (updatedEvent: CalendarEventsProps) => {
  const storedEvents = getEventsFromLocalStorage();
  const eventIndex = storedEvents.findIndex(
    (event) =>
      event.time === updatedEvent.time && event.date === updatedEvent.date,
  );

  if (eventIndex !== -1) {
    storedEvents[eventIndex] = updatedEvent;
    localStorage.setItem('@easyDay:events', JSON.stringify(storedEvents));
  }
};

// Função para excluir evento no LocalStorage
export const deleteEventFromLocalStorage = (
  eventToDelete: CalendarEventsProps,
) => {
  const storedEvents = getEventsFromLocalStorage();
  const filteredEvents = storedEvents.filter(
    (event) =>
      event.time !== eventToDelete.time || event.date !== eventToDelete.date,
  );
  localStorage.setItem('@easyDay:events', JSON.stringify(filteredEvents));
};
