import React from 'react';
import DashboardCard from '../../components/Cards/DashboardCard';
import Header from '../../components/Header';
import { DashboardContainer, CardsContainer } from './style';

import { FaCheck } from "react-icons/fa";
import { theme } from '../../styles/theme';
import { FaRegClock } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';
import { FaCalendarDay } from "react-icons/fa";

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Header />
      <CardsContainer>
        <DashboardCard
          title="Eventos Agendados"
          content="Você tem 5 eventos agendados para hoje."
          details={[
            { label: 'Evento 1', value: 'Reunião com a equipe' },
            { label: 'Evento 2', value: 'Almoço com cliente' },
          ]}
          Icon={FaCalendarDay}
          colorIcon={theme.colors.hover}
        />
        <DashboardCard
          title="Eventos Pendentes"
          content="Você tem 3 eventos pendentes para esta semana."
          details={[
            { label: 'Pendência 1', value: 'Aprovação de orçamento' },
            { label: 'Pendência 2', value: 'Feedback do cliente' },
          ]}
          Icon={FaRegClock}
          colorIcon='#F4E1A1'
        />
        <DashboardCard
          title="Próximos Eventos"
          content="Seu próximo evento será amanhã às 10:00."
          details={[
            { label: 'Evento', value: 'Encontro com fornecedor' },
            { label: 'Data', value: '2025-03-02' },
            { label: 'Horário', value: '10:00 AM' },
          ]}
          Icon={FaArrowRight}
          colorIcon='#D07F6A'
        />
        <DashboardCard
          title="Eventos Concluídos"
          content="Você concluiu 7 eventos este mês."
          details={[
            { label: 'Evento 1', value: 'Reunião de planejamento' },
            { label: 'Evento 2', value: 'Workshop de vendas' },
          ]}
          Icon={FaCheck}
          colorIcon={theme.colors.success}
        />
      </CardsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
