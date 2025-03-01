import React, { useState } from 'react';
import {
  TimeSlot,
  TimeContainer,
  TimeLabel,
  TimeCell,
  ContainerGlobal,
} from './style';
import EventModal from '../Modal';
import dayjs from 'dayjs';
import WeeklyDays from '../WeeklyDays';

const TimeSchedule: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // Horários de 8h até 20h
  const times = Array.from({ length: 13 }, (_, i) => `${8 + i}:00`);

  // Função para abrir o modal com o horário selecionado
  const openEventModal = (time: string) => {
    setSelectedTime(time);
    setOpenModal(true);
  };

  // Função para fechar o modal
  const closeEventModal = () => {
    setOpenModal(false);
    setSelectedTime(null);
  };

  return (
    <ContainerGlobal>
      <WeeklyDays />

      {/* Exibir os horários de 8h até 20h */}
      <TimeContainer>
        {times.map((time) => (
          <TimeSlot key={time}>
            <TimeLabel>{time}</TimeLabel>
            <TimeCell onClick={() => openEventModal(time)} />
          </TimeSlot>
        ))}
      </TimeContainer>

      {/* Modal para adicionar evento */}
      <EventModal
        open={openModal}
        onClose={closeEventModal}
        time={selectedTime}
      />
    </ContainerGlobal>
  );
};

export default TimeSchedule;
