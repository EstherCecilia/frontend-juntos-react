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
                  <ImageDiv>
                    <img src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png" 
                          alt="googlePlay"
                          width="150px"
                          position="absolute"></img>
                    <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                          alt="appStore"
                          position="absolute"></img>
                  </ImageDiv>
                </div>
            </div>
        </>
        </ThemeProvider>
    );
}

const StyledH1 = styled.h1`
  @media only screen and (min-width: 600px) {
    font-size: 30px;
    margin-bottom: 20px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 5vw;
    margin-bottom: 20px;
    margin-left: 10px;
  }
`;

const StyledP = styled.p`

  @media screen and (min-width: 600px) {
    font-size: 25px;
    margin-bottom: 200px;
    margin-right: 600px;
  }

  @media screen and (max-width: 601px) {
    font-size: 15px;
    margin-bottom: 50px;
    margin-right: 50px;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 5vw;
    margin-bottom: 20px;
    margin-left: 10px;
  }
`;

const ImageDiv = styled.div`
  display: inline;
`;

export default Main;
