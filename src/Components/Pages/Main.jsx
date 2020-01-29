import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../GlobalStyle/global';
import { theme } from '../../GlobalStyle/theme';
import BurgerMenu from './BurgerMenu';

const Main = () => {
    return (
        <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <div>
                <BurgerMenu/>
                <div>
                  <StyledH1>Nome</StyledH1>
                  <StyledP>Encontre monitores dentro da sua faculdade!</StyledP>
                </div>
                <div position="relative">  
                    <img src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png" 
                          alt="googlePlay"
                          width="150px"
                          position="absolute"></img>
                  </div>
                  <div position="relative">
                    <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                          alt="appStore"
                          margin-bottom="15px"
                          margin-left="15px"
                          position="absolute"></img>
                  </div>
            </div>
        </>
        </ThemeProvider>
    );
}

const StyledH1 = styled.h1`
  position: relative;
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
    font-size: 2vw;
    margin-bottom: 2vw;
    margin-left: 1vw;
  }
`;

const StyledP = styled.p`
  position: relative;
  font-weight: bold;
  @media screen and (min-width: 601px) {
    font-size: 2vw;
    margin-bottom: 12vw;
    margin-right: 40vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 3vw;
    margin-bottom: 15vw;
    margin-right: 15vw;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 2vw;
    margin-bottom: 15vw;
    margin-right: 40vw;
  }
`;

const ImageDiv = styled.div`
  display: inline;
  position: absolute;
`;

export default Main;
