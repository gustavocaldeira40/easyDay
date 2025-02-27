import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";
import Sidebar from "./components/Menu";
import MainRoutes from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <GlobalStyle />
        <main style={{ flex: 1, padding: '20px', marginLeft: 80 }}>

          <Sidebar />
          <MainRoutes />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
