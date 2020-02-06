import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../../GlobalStyle/theme";
import Image from "../../images/imagesMain";
import BurgerMenu from "./BurgerMenu";
import { ThemeProvider } from "styled-components";

import { StyledMainDiv, StyledOtherDiv } from "./Styled";

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
      <>
        <BurgerMenu />
        <StyledMainDiv>
          <div className={classes.form}>
            <StyledOtherDiv>
              <h1>ENTRE EM CONTATO</h1>
            </StyledOtherDiv>
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
      </>
    </ThemeProvider>
  );
};

export default Contato;
