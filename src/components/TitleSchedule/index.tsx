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

const ScheduleTitle: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('day'); // Filtro selecionado

  const currentDate = dayjs();

  const formattedDate = currentDate.format('MMMM, YYYY'); // Exemplo: "October, 2020"

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

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
          onClick={() => handleFilterChange('day')}
        >
          Day
        </FilterOption>
        <FilterOption
          selected={selectedFilter === 'week'}
          onClick={() => handleFilterChange('week')}
        >
          Week
        </FilterOption>
      </FilterContainer>
    </TitleContainer>
  );
};

export default ScheduleTitle;
