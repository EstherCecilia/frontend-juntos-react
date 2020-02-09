import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../../GlobalStyle/theme";
import Image from "../../images/imagesMain";
import BurgerMenu from "./BurgerMenu";
import styled, { ThemeProvider } from "styled-components";
import backgroundImage from "../../images/background.jpeg";
//import { StyledMainDiv } from "./Styled";

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
export default Sobre;
