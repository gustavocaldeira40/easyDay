import dayjs from 'dayjs';

// Função para gerar todos os horários de um dia específico (por padrão de 08:00 às 18:00)
const getAllDayHours = (
  date: string,
  startHour: number = 8,
  endHour: number = 18,
): string[] => {
  // Gerando um array com os horários de cada hora
  const hours = [];

  // Criando o objeto dayjs para o início da data fornecida
  const startOfDay = dayjs(date).hour(startHour).minute(0).second(0); // Início do dia às 08:00
  const endOfDay = dayjs(date).hour(endHour).minute(0).second(0); // Fim do dia às 18:00

  let currentTime = startOfDay;

  // Preenchendo o array com os horários
  while (
    currentTime.isBefore(endOfDay) ||
    currentTime.isSame(endOfDay, 'hour')
  ) {
    hours.push(currentTime.format('HH:mm'));
    currentTime = currentTime.add(1, 'hour'); // Avança para a próxima hora
  }

  return hours;
};

export default getAllDayHours;
