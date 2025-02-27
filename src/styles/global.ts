import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color:#fff;
    color: #333;
    font-size: 16px;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyle;
