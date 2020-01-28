import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../GlobalStyle/global';
import { theme } from '../../GlobalStyle/theme';
import BurgerMenu from './BurgerMenu';
import googlePlay from '../../images/googlePlay.png';
import appStore from '../../images/appStore.png';

const Main = () => {
    return (
        <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <div>
                <BurgerMenu/>
                <StyledH1>Nome</StyledH1>
                <StyledP>Encontre monitores dentro da sua faculdade!</StyledP>
                <ImageDiv>
                  <Image/>
                  <Image/>
                </ImageDiv>
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
`;

const StyledP = styled.p`

  @media screen and (min-width: 600px) {
    font-size: 25px;
    margin-bottom: 250px;
    margin-right: 600px;
  }

  @media screen and (max-width: 601px) {
    font-size: 15px;
    margin-bottom: 50px;
    margin-right: 50px;
  }
`;

const ImageDiv = styled.div`
  display: inline;
`;

const Image = styled.image`
  width: 100px;
  height: 100px;
`;

export default Main;
