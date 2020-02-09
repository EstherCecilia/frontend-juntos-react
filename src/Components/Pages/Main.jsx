import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../GlobalStyle/global';
import { theme } from '../../GlobalStyle/theme';
import BurgerMenu from './BurgerMenu';
import Image from '../../images/imagesMain';

const Main = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BurgerMenu/>
            <div>
                <div position="relative">
                  <StyledH1>Nome</StyledH1>
                  <StyledP>Encontre monitores dentro da sua faculdade!</StyledP>
                </div>
            </div>
          <Image/>
        </ThemeProvider>
    );
}

const StyledH1 = styled.h1`
  @media only screen and (min-width: 600px) {
    font-size: 3vw;
    margin-bottom: 2vw;
    margin-left: 2vw;
  }

  @media only screen and (max-width: 600px) {
    font-size: 4vw;
    margin-bottom: 2vw;
    margin-left: 2vw;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 3vw;
    margin-bottom: 2vw;
    margin-left: 1vw;
  }
`;

const StyledP = styled.p`
  @media screen and (min-width: 601px) {
    font-size: 2vw;
    margin-bottom: 4vw;
    margin-right: 40vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
    margin-bottom: 15vw;
    margin-right: 15vw;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 2vw;
    margin-bottom: 4vw;
    margin-right: 40vw;
  }
`;

export default Main;
