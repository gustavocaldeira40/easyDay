import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from '@mui/icons-material'; // Importando ícones de seta
import {
  IconButtonStyled,
  TitleContainer,
  LeftContainer,
  FilterContainer,
  FilterOption,
  LabelDate,
} from './style'; // Importando os estilos
import dayjs from 'dayjs';
import { ScheduleTitleProps } from '../../interfaces/scheduleTitle';

const ScheduleTitle: React.FC<ScheduleTitleProps> = ({
  currentDate,
  onFilterChange,
  selectedFilter,
}) => {

  const formattedDate = currentDate.format('MMMM, YYYY');

  return (
    <TitleContainer>
      {/* Left Container with Arrows and Label */}
      <LeftContainer>
        <LabelDate>{formattedDate}</LabelDate>
      </LeftContainer>

      {/* Right Container with Filter Options */}
      <FilterContainer>
        <FilterOption
          selected={selectedFilter === 'day'}
          onClick={() => onFilterChange('day')}
        >
          Day
        </FilterOption>
        <FilterOption
          selected={selectedFilter === 'week'}
          onClick={() => onFilterChange('week')}
        >
          Week
        </FilterOption>
      </FilterContainer>
    </TitleContainer>
  );
};

export default ScheduleTitle;
