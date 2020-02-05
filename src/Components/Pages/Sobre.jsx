import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "../../GlobalStyle/theme";
import Image from '../../images/imagesMain';
import BurgerMenu from './BurgerMenu';
import backgroundImage from "../../images/background.jpeg";
import styled, { ThemeProvider } from "styled-components";


const useStyles = makeStyles(theme => ({

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
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
  return (<ThemeProvider theme={theme}>
    <>
      <BurgerMenu />
        <StyledMainDiv>
          <div className={classes.form}>
          <StyledOtherDiv>
          <h1>QUEM SOMOS?</h1>
          </StyledOtherDiv>
          <StyledOtherDiv>
            <p>Somos estusiastas por tecnologia e por meio do <span>NOME</span> temos</p>
            <p>a missão de facilitar a vida de estudantes universitários que</p>
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


const StyledMainDiv = styled.div`
  background-attachment: fixed;
  /* width: 320px; */
  align-content: center;
  align-items: center;
  vertical-align: middle;
  background-image: url(${backgroundImage});
  border-radius: 2px;
  padding: 30px 20px;
  margin: 0 auto;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: ${({ theme }) => theme.primaryRed};
  }

  form {
    margin-left: auto;
    margin-right: auto;
  }

  button[type="submit"] {
    width: 100%;
    border: 0;
    margin-top: 30px;
    background: ${({ theme }) => theme.primaryRed};
    border-radius: 2px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryDark};
    cursor: pointer;
    transition: background 0.5s;
  }
`;

const StyledOtherDiv = styled.div`
  margin-top: 10px;

  input {
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: grey;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.primaryDark};
  }

  label {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  a {
    text-align: center;
  }
`;



