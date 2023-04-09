import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Do Hyeon', sans-serif;
  }
  body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
  }
`;

export default GlobalStyle;
