import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para navegação
import DashboardCard from '../../components/Cards/DashboardCard';
import Header from '../../components/Header';
import { DashboardContainer, CardsContainer } from './style';
import { theme } from '../../styles/theme';
import { AiOutlineCalendar } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";
import { useAppointments } from '../../hooks/useAppointments';
import dayjs from 'dayjs';

const Dashboard: React.FC = () => {
  const { appointments } = useAppointments();
  const navigate = useNavigate(); // Inicializando o useNavigate

  // Filtra compromissos de hoje
  const todayAppointments = useMemo(() => {
    return appointments.filter(appointment => dayjs(appointment.date).isSame(dayjs(), 'day'));
  }, [appointments]);

  // Filtra compromissos pendentes para esta semana
  const pendingAppointments = useMemo(() => {
    return appointments.filter(appointment => dayjs(appointment.date).isAfter(dayjs(), 'day'));
  }, [appointments]);

  // Encontra o próximo compromisso
  const nextAppointment = useMemo(() => {
    return appointments.find(appointment => dayjs(appointment.date).isAfter(dayjs(), 'day'));
  }, [appointments]);

  // Filtra os eventos concluídos
  const completedAppointments = useMemo(() => {
    return appointments.filter(appointment => dayjs(appointment.date).isBefore(dayjs(), 'day'));
  }, [appointments]);

  const handleCardClick = () => {
    navigate('/calendar'); // Navega para a tela de calendário
  };

  return (
    <DashboardContainer>
      <Header />
      <CardsContainer>
        {/* Card de Eventos Agendados */}
        <DashboardCard
          title="Eventos Agendados"
          content={`Você tem ${todayAppointments.length} eventos agendados para hoje.`}
          details={todayAppointments.map((appointment, index) => ({
            label: `Evento ${index + 1}`,
            value: appointment.title,
          }))}
          Icon={AiOutlineCalendar}
          colorIcon={theme.colors.primary}
          onClick={handleCardClick} // Redireciona para o calendário ao clicar
        />

        {/* Card de Eventos Pendentes */}
        <DashboardCard
          title="Eventos Pendentes"
          content={`Você tem ${pendingAppointments.length} eventos pendentes para esta semana.`}
          details={pendingAppointments.slice(0, 2).map((appointment, index) => ({
            label: `Pendência ${index + 1}`,
            value: appointment.title,
          }))}
          Icon={RiTimeLine}
          colorIcon="#F4E1A1"
          onClick={handleCardClick} // Redireciona para o calendário ao clicar
        />

        {/* Card de Próximos Eventos */}
        {nextAppointment && (
          <DashboardCard
            title="Próximos Eventos"
            content={`Seu próximo evento será em ${dayjs(nextAppointment.date).format('DD/MM/YYYY')} às ${dayjs(nextAppointment.time, 'HH:mm').format('HH:mm')}.`}
            details={[
              { label: 'Evento', value: nextAppointment.title },
              { label: 'Data', value: dayjs(nextAppointment.date).format('YYYY-MM-DD') },
              { label: 'Horário', value: dayjs(nextAppointment.time, 'HH:mm').format('HH:mm') },
            ]}
            Icon={HiOutlineArrowNarrowRight}
            colorIcon="#D07F6A"
            onClick={handleCardClick} // Redireciona para o calendário ao clicar
          />
        )}

        {/* Card de Eventos Concluídos */}
        <DashboardCard
          title="Eventos Concluídos"
          content={`Você concluiu ${completedAppointments.length} eventos este mês.`}
          details={completedAppointments.slice(0, 2).map((appointment, index) => ({
            label: `Evento ${index + 1}`,
            value: appointment.title,
          }))}
          Icon={FiCheckCircle}
          colorIcon={theme.colors.success}
          onClick={handleCardClick}
        />
      </CardsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
