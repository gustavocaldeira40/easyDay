import React, { useEffect, useState } from 'react';
import { theme } from '../../styles/theme';
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
  //Config of Calendar
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedFilter, setSelectedFilter] = useState<string>('day'); // Filtro selecionado
  const [selectedTime, setSelectedTime] = useState<string | null>(null);


  const [openModal, setOpenModal] = useState<boolean>(false);

  //Eventos Salvos
  const [appointments, setAppointments] = useState<CalendarEventsProps[]>([]);

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setSelectedDate(date);
    }
  };



  const openEventModal = (time: string) => {
    setSelectedTime(time);

    console.log(selectedTime);
    setOpenModal(true);
  };

  const closeEventModal = () => {
    setOpenModal(false);
    setSelectedTime(null);
  };

  const handleSaveModal = ({ title, description, date, time }: CalendarEventsProps) => {
    const newAppointment: CalendarEventsProps = { title, description, date, time };
    setAppointments([...appointments, newAppointment]);
  };


  //OnChange of Filter of Screen
  const onFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };



  // Get the events
  useEffect(() => {
    const storedEvents = getEventsFromLocalStorage();
    setAppointments(storedEvents);

    console.log('events', storedEvents)
  }, []);


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
        <TimeSchedule selectedDate={selectedDate} onTimeSelect={openEventModal} />

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
