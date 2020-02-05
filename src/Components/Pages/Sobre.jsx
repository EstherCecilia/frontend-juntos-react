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

const Sobre = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <>
        <BurgerMenu />
        <StyledMainDiv>
          <div className={classes.form}>
            <StyledOtherDiv>
              <h1>QUEM SOMOS?</h1>
            </StyledOtherDiv>
            <StyledOtherDiv>
              <p>
                Somos estusiastas por tecnologia e por meio do <span>NOME</span>{" "}
                temos
              </p>
              <p>
                a missão de facilitar a vida de estudantes universitários que
              </p>
              <p>precisam achar outros estudantes dispostos a ajudar com</p>
              <p>matérias da faculdade, de forma ágil e objetiva.</p>
            </StyledOtherDiv>
          </div>
        </StyledMainDiv>
      </>
    </ThemeProvider>
  );
};

export default Sobre;
