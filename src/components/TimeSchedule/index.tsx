import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import EventModal from '../Modal';
import { CalendarContainer, DayCell, TimeCell, TimeGrid } from './style';

const TimeSchedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  useEffect(() => {
    // Gerar os horários de 8h às 18h
    const slots = Array.from({ length: 11 }, (_, i) => `${8 + i}:00`);
    setTimeSlots(slots);
  }, []);

  // Função para abrir o modal
  const openEventModal = (time: string) => {
    setSelectedTime(time);
    setOpenModal(true);
  };

  // Função para fechar o modal
  const closeEventModal = () => {
    setOpenModal(false);
    setSelectedTime(null);
  };

  // Gerar os dias do mês
  const generateDaysOfMonth = () => {
    const daysInMonth = dayjs().daysInMonth();
    const startOfMonth = dayjs().startOf('month');

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(startOfMonth.date(i).format('YYYY-MM-DD'));
    }

    return days;
  };

  return (
    <div>
      {/* <h2>{dayjs().format('MMMM YYYY')}</h2>
      <CalendarContainer>
        {generateDaysOfMonth().map((day) => (
          <DayCell key={day} onClick={() => setSelectedDate(day)}>
            {dayjs(day).format('D')}
          </DayCell>
        ))}
      </CalendarContainer> */}


      <div>
        {/* <h3>
          Selecione o horário para {dayjs(selectedDate).format('D MMMM YYYY')}
        </h3> */}
        <TimeGrid>
          {timeSlots.map((time) => (
            <TimeCell key={time} onClick={() => openEventModal(time)}>
              {time}
            </TimeCell>
          ))}
        </TimeGrid>
      </div>


      <EventModal
        open={openModal}
        onClose={closeEventModal}
        time={selectedTime}
        date={selectedDate}
      />
    </div>
  );
};
export default TimeSchedule;
