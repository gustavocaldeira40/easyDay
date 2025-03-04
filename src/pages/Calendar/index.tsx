import React, { useEffect, useState } from 'react';
import { ContainerData, ContainerGlobal, ContainerRightSide } from './style';
import FeedbackCard from '../../components/Cards/Feedback';
import ScheduleTitle from '../../components/TitleSchedule';
import TimeSchedule from '../../components/TimeSchedule';
import dayjs, { Dayjs } from 'dayjs';
import DatePickerComponent from '../../components/DataPicker';
import WeeklyDays from '../../components/WeeklyDays';
import EventModal from '../../components/Modal';
import { CalendarEventsProps } from '../../interfaces/events';
import { getEventsFromLocalStorage } from '../../services/localStorageService';

const Calendar: React.FC = () => {
  // Configuração do Calendar
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedFilter, setSelectedFilter] = useState<string>('day'); // Filtro selecionado
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Eventos Salvos
  const [appointments, setAppointments] = useState<CalendarEventsProps[]>([]);

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const openEventModal = (time: string) => {
    // Atualiza o selectedTime e garante que o modal seja aberto
    setSelectedTime(time);
  };

  const closeEventModal = () => {
    setOpenModal(false);
    setSelectedTime(null); // Limpa o selectedTime quando o modal é fechado
  };

  const handleSaveModal = ({ title, description, date, time }: CalendarEventsProps) => {
    const newAppointment: CalendarEventsProps = { title, description, date, time };
    setAppointments([...appointments, newAppointment]);
  };

  // Atualiza a lista de eventos quando o componente é montado
  useEffect(() => {
    const storedEvents = getEventsFromLocalStorage();
    setAppointments(storedEvents);
    console.log('events', storedEvents);
  }, []);

  // UseEffect para abrir o modal quando selectedTime for alterado
  useEffect(() => {
    if (selectedTime) {
      setOpenModal(true);

      console.log('TIME ', selectedTime);
    }
  }, [selectedTime]);

  // OnChange do filtro de tela
  const onFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };


  return (
    <ContainerGlobal>
      <ContainerData>
        <DatePickerComponent
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}
        />
        <FeedbackCard />
      </ContainerData>

      <ContainerRightSide>
        <ScheduleTitle
          currentDate={selectedDate}
          onFilterChange={onFilterChange}
          selectedFilter={selectedFilter}
        />
        <WeeklyDays
          selectedDate={selectedDate}
          selectedFilter={selectedFilter}
          onDateChange={handleDateChange}
        />
        <TimeSchedule
          selectedDate={selectedDate}
          onTimeSelect={openEventModal}
        />

        {/* Modal para adicionar evento */}
        <EventModal
          open={openModal}
          onClose={closeEventModal}
          time={selectedTime}
          handleSave={handleSaveModal}
          selectedDate={selectedDate}
        />
      </ContainerRightSide>
    </ContainerGlobal>
  );
};

export default Calendar;
