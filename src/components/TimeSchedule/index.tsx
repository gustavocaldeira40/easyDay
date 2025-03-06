import React, { useEffect, useState } from 'react';
import {
  TimeSlot,
  TimeContainer,
  TimeLabel,
  TimeCell,
  ContainerGlobal,
} from './style';

import { hours } from '../../services/generateHours';
import { TimeScheduleProps } from '../../interfaces/timeSchedule';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const TimeSchedule: React.FC<TimeScheduleProps> = ({ appointments, onTimeSelect }) => {



  const handleTimeSelect = (hour: string) => {
    const formattedHour = dayjs(hour, 'HH:mm').format('HH:mm'); // Formatar o horário selecionado

    // Verifica se o compromisso já existe para esse horário
    const existingAppointment = appointments.find(appointment =>
      dayjs(appointment.time, 'HH:mm').isSame(dayjs(formattedHour, 'HH:mm'), 'minute')
    );
    if (existingAppointment) {
      toast.error('Este horário já tem um compromisso agendado!');
      return;
    }

    onTimeSelect(formattedHour);
  };


  return (
    <ContainerGlobal>
      <TimeContainer>
        {hours.map((hour) => (
          <TimeSlot key={hour}>
            <TimeLabel>{hour}</TimeLabel>
            <TimeCell
              onClick={() => handleTimeSelect(hour)}
              isOccupied={appointments.some(appointment => dayjs(appointment.time, 'HH:mm').isSame(dayjs(hour, 'HH:mm'), 'minute'))}

            />
          </TimeSlot>
        ))}
      </TimeContainer>
    </ContainerGlobal>
  );
};

export default TimeSchedule;
