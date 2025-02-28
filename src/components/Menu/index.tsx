import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuItem, Container } from './style';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const themeMenu = {
    backgroundColor: 'white',
    margin: '5px 0px',
    padding: '10px',
    color: '#8A8F9E',
  };


  const navigate = useNavigate();


  return (
    <Container>
      <MenuItem
        style={themeMenu}
        size="large"
        onClick={() => navigate('/')}
      >
        <HomeIcon />
      </MenuItem>
      <MenuItem
        style={themeMenu}
        size="large"
        onClick={() => navigate('/NotFound')}
      >
        <CalendarTodayIcon />
      </MenuItem>
    </Container>
  );
};

export default Sidebar;
