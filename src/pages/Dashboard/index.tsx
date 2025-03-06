import React from 'react';
import DashboardCard from '../../components/Cards/DashboardCard';
import Header from '../../components/Header';
import { DashboardContainer, CardsContainer } from './style';
import { theme } from '../../styles/theme';



import { AiOutlineCalendar } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FiCheckCircle } from "react-icons/fi";




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
          Icon={AiOutlineCalendar}
          colorIcon={theme.colors.primary} //
        />
        <DashboardCard
          title="Eventos Pendentes"
          content="Você tem 3 eventos pendentes para esta semana."
          details={[
            { label: 'Pendência 1', value: 'Aprovação de orçamento' },
            { label: 'Pendência 2', value: 'Feedback do cliente' },
          ]}
          Icon={RiTimeLine}
          colorIcon="#F4E1A1"
        />
        <DashboardCard
          title="Próximos Eventos"
          content="Seu próximo evento será amanhã às 10:00."
          details={[
            { label: 'Evento', value: 'Encontro com fornecedor' },
            { label: 'Data', value: '2025-03-02' },
            { label: 'Horário', value: '10:00 AM' },
          ]}
          Icon={HiOutlineArrowNarrowRight}
          colorIcon="#D07F6A"
        />
        <DashboardCard
          title="Eventos Concluídos"
          content="Você concluiu 7 eventos este mês."
          details={[
            { label: 'Evento 1', value: 'Reunião de planejamento' },
            { label: 'Evento 2', value: 'Workshop de vendas' },
          ]}
          Icon={FiCheckCircle}
          colorIcon={theme.colors.success}
        />
      </CardsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
