import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuItem, Container } from './style';

const Sidebar: React.FC = () => {
  const themeMenu = {
    backgroundColor: 'white',
    margin: '5px 0px',
    padding: '10px',
    color: '#8A8F9E',
  };

  return (
    <Container>
      <MenuItem
        style={themeMenu}
        size="large"
        onClick={() => alert('Home Clicked')}
      >
        <HomeIcon />
      </MenuItem>
      <MenuItem
        style={themeMenu}
        size="large"
        onClick={() => alert('Calendar Clicked')}
      >
        <CalendarTodayIcon />
      </MenuItem>
    </Container>
  );
};

export default Sidebar;
