import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Jost', sans-serif;
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

  body {
    background: url('/assets/belancars-frdmstng.png'); 
    background-size: cover;
    background-attachment: fixed;
    background-position: right;

    
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

  img{
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color:inherit;
  }

  .my-node-enter {
  opacity: 0;
  }

  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .my-node-exit {
    opacity: 1;
  }
  
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }

`;

export default GlobalStyle;
