import dayjs from 'dayjs';
import { DayInfoProps } from '../interfaces/days';

export const generateNext7Days = (startDate: dayjs.Dayjs): DayInfoProps[] => {
  const days: DayInfoProps[] = [];
  
  for (let i = 0; i < 7; i++) {
    const day = startDate.add(i, 'day');
    days.push({
      dayOfWeek: day.format('ddd'),
      dayNumber: day.format('DD'),
      fullDate: day.format('YYYY-MM-DD'),
    });
  }
  
  return days;
};

// Função para gerar apenas o dia atual
export const generateToday = (today: dayjs.Dayjs): DayInfoProps[] => {
  return [
    {
      dayOfWeek: today.format('ddd'),
      dayNumber: today.format('DD'),
      fullDate: today.format('YYYY-MM-DD'),
    },
  ];
};
