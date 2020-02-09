import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../../GlobalStyle/theme";
import Image from "../../images/imagesMain";
import BurgerMenu from "./BurgerMenu";
import styled, { ThemeProvider } from "styled-components";
import backgroundImage from "../../images/background.jpeg";

//import { StyledMainDiv, StyledOtherDiv } from "./Styled";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

const Contato = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
        <BurgerMenu />
        <StyledMainDiv>
          <div className={classes.form}>
            <h1>ENTRE EM CONTATO</h1>
            <StyledOtherDiv>
              <p>Tem alguma dúvida, problema com o aplicativo ou quer nos dar</p>
              <p>um feedback? Entre em contato conosco por email.</p>
            </StyledOtherDiv>
            <StyledOtherDiv>
              <span>contatonome@gmail.com</span>
            </StyledOtherDiv>
            <StyledOtherDiv>
              <Image />
            </StyledOtherDiv>
          </div>
        </StyledMainDiv>
    </ThemeProvider>
  );
};

const StyledMainDiv = styled.div`
  /* width: 320px; */
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 2px;
  z-index: -1;

  h1 {
    margin-top: 12vw;
  }
`

const StyledOtherDiv = styled.div`
  margin-top: 5px;
`

export default Contato;
