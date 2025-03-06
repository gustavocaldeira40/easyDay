import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';
import Sidebar from './components/Menu';
import MainRoutes from './routes';
import { BrowserRouter as Router, } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Sidebar />
          <div
            style={{
              flex: 1,
              padding: '0 0  0 5vw',
            }}
          >
            <MainRoutes />
          </div>
        </div>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable />


    </ThemeProvider>
  );
};

export default App;
