import React from 'react';
// import { FaHome, FaCalendarAlt, FaEllipsisH } from 'react-icons/fa'; // Usando react-icons
import { useNavigate, useLocation } from 'react-router-dom';
import { MenuItem, Container } from './style';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";

// Definindo as rotas e ícones dinamicamente
const menuItems = [
  { path: '/', label: 'Home', icon: <AiOutlineHome /> },
  { path: '/calendar', label: 'Calendar', icon: <AiOutlineCalendar /> },
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
          onClick={() => { console.log('path que ta chegando ', item); navigate(item.path) }}
          isActive={isActive(item.path)} // Verifica se o item está ativo
        >
          {item.icon}
        </MenuItem>
      ))}
    </Container>
  );
};

export default Sidebar;
