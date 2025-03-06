import { Routes, Route } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/calendar" element={<Calendar />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
