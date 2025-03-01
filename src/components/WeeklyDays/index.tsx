import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { DaysScrollContainer, DayCell, DayLabel } from './style';

// Definindo o formato dos dias
interface DayInfo {
  dayOfWeek: string;
  dayNumber: string;
  fullDate: string;
}

const WeeklyDays: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // Função para gerar os próximos 7 dias, incluindo a troca de mês
  const generateNext7Days = () => {
    const today = dayjs();
    const days: DayInfo[] = [];

    for (let i = 0; i < 7; i++) {
      const day = today.add(i, 'day');
      days.push({
        dayOfWeek: day.format('ddd'),
        dayNumber: day.format('DD'),
        fullDate: day.format('YYYY-MM-DD'),
      });
    }

    return days;
  };

  const daysOfWeek = generateNext7Days();

  useEffect(() => {
    setSelectedDay(daysOfWeek[0].fullDate);
  }, [daysOfWeek]);

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
    console.log(`Dia selecionado: ${day}`);
  };

  return (
    <DaysScrollContainer>
      {daysOfWeek.map((day) => (
        <DayCell
          key={day.fullDate}
          onClick={() => handleDayClick(day.fullDate)}
          isSelected={selectedDay === day.fullDate}
          isDisabled={false} // Não há dias desabilitados no exemplo
        >
          <DayLabel isSelected={selectedDay === day.fullDate} typeLabel="week">
            {day.dayOfWeek}
          </DayLabel>
          <DayLabel
            isSelected={selectedDay === day.fullDate}
            typeLabel="number"
          >
            {day.dayNumber}
          </DayLabel>
        </DayCell>
      ))}
    </DaysScrollContainer>
  );
};

export default WeeklyDays;
