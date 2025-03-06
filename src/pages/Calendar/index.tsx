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
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Eventos Salvos
  const [appointments, setAppointments] = useState<CalendarEventsProps[]>([]);

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const openEventModal = (time: string) => {
    // Formatar o time para garantir que tenha dois dígitos
    const formattedTime = dayjs(time, 'HH:mm').format('HH:mm');

    // Atualiza o selectedTime e garante que o modal seja aberto
    console.log('selecionado horario ', formattedTime);
    setSelectedTime(formattedTime);

    if (formattedTime) {
      setOpenModal(true);
    }
  };

  const closeEventModal = () => {
    setOpenModal(false);
    setSelectedTime(''); // Limpa o selectedTime quando o modal é fechado
  };

  const handleSaveModal = ({
    title,
    description,
    date,
    time,
  }: CalendarEventsProps) => {
    const newAppointment: CalendarEventsProps = {
      title,
      description,
      date,
      time,
    };
    setAppointments([...appointments, newAppointment]);
  };

  // Atualiza a lista de eventos quando o componente é montado
  useEffect(() => {
    const storedEvents = getEventsFromLocalStorage();
    setAppointments(storedEvents);
    console.log('events', storedEvents);
  }, []);


  // OnChange of filter of screen
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
