import React, { useState, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import { DaysScrollContainer, DayCell, DayLabel } from './style';
import {
  generateNext7Days,
  generateToday,
} from '../../services/generate7NextDays';
import { WeeklyDaysProps } from '../../interfaces/weeklyDays';

// Definindo o formato dos dias

const WeeklyDays: React.FC<WeeklyDaysProps> = ({
  selectedDate,
  selectedFilter,
  onDateChange,
}) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // Função para gerar os dias a serem exibidos, dependendo do filtro
  const daysToDisplay = useMemo(() => {
    const today = selectedDate;
    if (selectedFilter === 'day') {
      return generateNext7Days(today);
    } else {
      return generateNext7Days(today);
    }
  }, [selectedDate, selectedFilter]);

  // Handle para selecionar o dia
  const handleDayClick = (day: string) => {
    setSelectedDay(day);
    onDateChange(dayjs(day));

    console.log(`Dia selecionado: ${day}`);
  };

  // Atualiza o selectedDay conforme a data ou filtro mudar
  useEffect(() => {
    if (selectedFilter === 'day') {
      setSelectedDay(selectedDate.format('YYYY-MM-DD')); // Quando for 'day', mostra só o dia de hoje
    } else {
      setSelectedDay(daysToDisplay[0].fullDate); // Quando for 'week', mostra o primeiro dia da semana
    }
  }, [selectedDate, selectedFilter, daysToDisplay]);

  return (
    <DaysScrollContainer>
      {daysToDisplay.map((day, index) => {
        // Desabilita os dias futuros quando o filtro for 'day'
        const isDisabled =
          selectedFilter === 'day' &&
          day.fullDate !== selectedDate.format('YYYY-MM-DD') &&
          day.fullDate > selectedDate.format('YYYY-MM-DD');

        return (
          <DayCell
            key={day.fullDate}
            onClick={() => !isDisabled && handleDayClick(day.fullDate)} // Modificado: Não permite clicar em dias desabilitados
            isSelected={selectedDay === day.fullDate}
            isDisabled={isDisabled} // Modificado: Passando o estado de desabilitado para o estilo
          >
            <DayLabel
              isSelected={selectedDay === day.fullDate}
              typeLabel="week"
            >
              {day.dayOfWeek}
            </DayLabel>
            <DayLabel
              isSelected={selectedDay === day.fullDate}
              typeLabel="number"
            >
              {day.dayNumber}
            </DayLabel>
          </DayCell>
        );
      })}
    </DaysScrollContainer>
  );
};

export default WeeklyDays;
