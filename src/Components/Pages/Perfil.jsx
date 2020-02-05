import React from "react";
import { reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../GlobalStyle/theme";
import BurgerMenu from "./BurgerMenu";
import Avatar from "@material-ui/core/Avatar";
import backgroundImage from "../../images/background.jpeg";
import perfil from "../../images/perfil.jpg";

const Perfil = props => {
  const { usuario } = props;
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <BurgerMenu />

        <StyledMainDiv>
          <div className={classes.form}>
            <StyledOtherDiv>
              <h1>Meu perfil</h1>

              <Avatar
                style={{ margin: "auto", width: "100px", height: "100px" }}
                alt="Remy Sharp"
                src={perfil}
              />
            </StyledOtherDiv>
            <StyledOtherDiv>
              <h2>{usuario.name}</h2>
              <p>{usuario.course}</p>
              <p>{usuario.birthdate}</p>
            </StyledOtherDiv>
          </div>
        </StyledMainDiv>
      </ThemeProvider>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },

  input: {
    width: "100%",
    height: "32px",
    fontSize: "14px",
    display: "center",
    color: "black",
    border: 0,
    borderBottom: ("1px", "solid", "#0D0C1D")
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    display: "center",
    backgroundColor: "#f50057",
    color: "#fafafa"
  },
  divSubmit: { display: "-webkit-inline-box", margin: "auto" }
}));

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

export default Perfil;
