import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../GlobalStyle/global";
import { theme } from "../../GlobalStyle/theme";
import BurgerMenu from "./BurgerMenu";
import Image from "../../images/jsx/imagesMain";
import Logo from "../../images/jsx/logo";

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BurgerMenu />
      <div>
        <div position="relative">
          <StyledH1>
            JUNTOS
            <sup>&trade;</sup>
            <Logo />
          </StyledH1>
          <StyledP>Encontre monitores dentro da sua faculdade!</StyledP>
        </div>
      </div>
      <Image />
    </ThemeProvider>
  );
};

const StyledH1 = styled.h1`
  font-family: "Nunito Sans";
  font-weight: lighter;
  margin-top: 5vw;

  @media only screen and (min-width: 600px) {
    font-size: 2em;
    margin-bottom: 4vw;
    margin-left: 0.5vw;
  }

  @media only screen and (max-width: 600px) {
    font-size: 3em;
    margin-bottom: 3vw;
    margin-left: 1vw;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 3em;
    margin-bottom: 3vw;
    margin-left: 1vw;
  }

  sup {
    font-size: 1.5rem;
  }
`;

const StyledP = styled.p`
  @media screen and (min-width: 601px) {
    font-size: 2vw;
    margin-bottom: 1vw;
    margin-right: 40vw;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 2vw;
    margin-bottom: 2vw;
    margin-right: 40vw;
  }
`;

export default Main;
