import React from 'react';
import { HeaderContainer, Title } from './style';
import Line from '../Line';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Dashboard de Eventos</Title>
      {/* <Line /> */}
    </HeaderContainer>
  );
};

export default Header;
