import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    -webkit-tap-highlight-color: transparent;
    scroll-behavior: smooth;

    &.disable-scroll {
      overflow: hidden;
    }

  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  #__next,
  html,
  body {
    height: 100%;
    min-height: 100%;

  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

`;

export default GlobalStyle;
