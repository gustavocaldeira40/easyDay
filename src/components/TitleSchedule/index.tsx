import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from '@mui/icons-material'; // Importando ícones de seta
import {
  IconButtonStyled,
  TitleContainer,
  LeftContainer,
  FilterContainer,
  FilterOption,
} from './style'; // Importando os estilos

const ScheduleTitle: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('day'); // Filtro selecionado

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <TitleContainer>
      {/* Left Container with Arrows and Label */}
      <LeftContainer>
        <IconButtonStyled>
          <ArrowLeft />
        </IconButtonStyled>
        <div style={{ marginLeft: 10, marginRight: 10 }}>Schedule</div>
        <IconButtonStyled>
          <ArrowRight />
        </IconButtonStyled>
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
        <FilterOption
          selected={selectedFilter === 'month'}
          onClick={() => handleFilterChange('month')}
        >
          Month
        </FilterOption>
      </FilterContainer>
    </TitleContainer>
  );
};

export default ScheduleTitle;
