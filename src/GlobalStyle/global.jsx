import { createGlobalStyle } from 'styled-components';
import BackgroundHand from '../images/backgroundHand.jpeg';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    outline: 0;
    min-height: 100%;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    justify-content: center;
    display: flex;
  }

  @media only screen and (min-device-height: 600px) {
    body {
      background-image: url(${BackgroundHand});
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: 100% 100%;
    }
  }
`;