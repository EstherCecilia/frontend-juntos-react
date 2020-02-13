import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../../GlobalStyle/theme";
import Image from "../../images/imagesMain";
import BurgerMenu from "./BurgerMenu";
import { ThemeProvider } from "styled-components";
import { StyledMainDiv, StyledOtherDiv } from '../Pages/Styled/telasSecundarias';

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
            <h1>QUEM SOMOS?</h1>
            <StyledOtherDiv>
              <p className="topTextAbout">
                Somos estusiastas por tecnologia e por meio do <span>JUNTOS</span>{" "}
                temos
              </p>
              <p className="textAbout"> 
                a missão de facilitar a vida de estudantes universitários que
              </p>
              <p className="textAbout">precisam achar outros estudantes dispostos a ajudar com</p>
              <p className="textAbout">matérias da faculdade, de forma ágil e objetiva.</p>
            </StyledOtherDiv>
            <StyledOtherDiv>
              <Image/>
            </StyledOtherDiv>
          </div>
        </StyledMainDiv>
      </>
    </ThemeProvider>
  );
};

export default Sobre;
