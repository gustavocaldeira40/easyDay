import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div
        style={{
          backgroundColor: "#fff",
          border: '1px solid #dcdcdc',
          borderRadius: 10,
          margin: "2em 1rem",
          padding: "2rem 1rem",
        }}
      >
        <h1>Iniciando aplicação!</h1>
        <a>Teste</a>
      </div>
    </ThemeProvider>
  );
};

export default App;
