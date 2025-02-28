import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';
import Sidebar from './components/Menu';
import MainRoutes from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div style={{ display: 'flex', height: '100vh' }}> <Sidebar />
          <div
            style={{
              flex: 1,
              padding: '0 0  0 5vw'
              // paddingLeft: '6%',
            }}
          >
            {' '}
            <MainRoutes />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
