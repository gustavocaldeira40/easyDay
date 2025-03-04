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

const TimeSchedule: React.FC<TimeScheduleProps> = ({ onTimeSelect }) => {
  return (
    <ContainerGlobal>
      {/* Exibir os horários de 8h até 20h */}
      <TimeContainer>
        {hours.map((hour) => (
          <TimeSlot key={hour}>
            <TimeLabel>{hour}</TimeLabel>
            <TimeCell onClick={() => onTimeSelect(hour)} />
          </TimeSlot>
        ))}
      </TimeContainer>
    </ContainerGlobal>
  );
};

export default TimeSchedule;
