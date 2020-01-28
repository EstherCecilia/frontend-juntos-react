import { createGlobalStyle } from 'styled-components';

export const FormStyle = createGlobalStyle`
    html, body {
    margin: 0;
    padding: 0;
    outline: 0;
    min-height: 100%;
    color: ${({ theme }) => theme.primaryDark};
    background: ${({ theme }) => theme.primaryGreen};
  }

  body, input, button {
    font-family: Roboto, sans-serif;
  }
`;