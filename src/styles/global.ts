import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%; 
    font-family: ${(props) => props.theme.typography.fontFamily};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text}; 
    font-size: ${(props) => props.theme.typography.fontSize}; 
    line-height: ${(props) => props.theme.typography.lineHeight}; }

  #root {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
