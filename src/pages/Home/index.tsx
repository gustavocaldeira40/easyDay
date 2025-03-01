import React from 'react';
import { theme } from '../../styles/theme';
import DataPicker from '../../components/DataPicker';
import { ContainerData, ContainerGlobal, ContainerRightSide } from './style';
import FeedbackCard from '../../components/Cards/Feedback';
import ScheduleTitle from '../../components/TitleSchedule';
import TimeSchedule from '../../components/TimeSchedule';

const Home: React.FC = () => {
  return (
    <ContainerGlobal>
      <ContainerData>
        <DataPicker />
        <FeedbackCard />
      </ContainerData>

      <ContainerRightSide>
        <ScheduleTitle />
        <TimeSchedule />
      </ContainerRightSide>
    </ContainerGlobal>
  );
};

export default Home;
