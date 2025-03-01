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
import { Appointment } from '../../interfaces/appointment';

const TimeSchedule: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  //Eventos Salvos
  const [appointments, setAppointments] = useState<Appointment[]>([]);


  // Horários de 8h até 20h
  const times = Array.from({ length: 13 }, (_, i) => `${8 + i}:00`);

  const openEventModal = (time: string) => {
    setSelectedTime(time);
    setOpenModal(true);
  };

  const closeEventModal = () => {
    setOpenModal(false);
    setSelectedTime(null);
  };

  const handleSave = (title: string, description: string, date: string) => {
    const newAppointment: Appointment = { title, description, date };
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <ContainerGlobal>
      <WeeklyDays />

      {/* Caso Tenha um Evento ja criado */}
      {/*  <div>
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>
                <strong>{appointment.title}</strong>
                <p>{appointment.description}</p>
                <p>{dayjs(appointment.date).format('DD/MM/YYYY')}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Não há compromissos cadastrados.</p>
        )}
      </div>
 */}

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
