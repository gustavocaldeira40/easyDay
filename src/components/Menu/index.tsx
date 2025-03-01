import React from 'react';
import { FaHome, FaCalendarAlt, FaEllipsisH } from 'react-icons/fa';  // Usando react-icons
import { useNavigate, useLocation } from 'react-router-dom';
import { MenuItem, Container } from './style';

// Definindo as rotas e ícones dinamicamente
const menuItems = [
  { path: '/', label: 'Home', icon: <FaHome /> },
  { path: '/calendar', label: 'Calendar', icon: <FaCalendarAlt /> },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Função para verificar se a rota está ativa
  const isActive = (path: string) => location.pathname === path;

  return (
    <Container>
      {menuItems.map((item) => (
        <MenuItem
          key={item.path}
          onClick={() => navigate(item.path)}
          isActive={isActive(item.path)}  // Verifica se o item está ativo
        >
          {item.icon}
        </MenuItem>
      ))}
    </Container>
  );
};

export default Sidebar;
