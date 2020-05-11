import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;

  }

  body {
    background: #fff;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;

  }

`;

export default Global;
