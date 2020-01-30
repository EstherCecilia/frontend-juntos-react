import React from "react";
import { reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../GlobalStyle/theme";
import BurgerMenu from "./BurgerMenu";
import TextField from "./atoms/TextField";

import backgroundImage from "../../images/background.jpeg";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";

const LoginForm = props => {
  const { handleSubmit } = props;

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BurgerMenu />
      <StyledMainDiv>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1>Login</h1>
          <StyledOtherDiv>
            <TextField
              show
              type="email"
              width="180px"
              id="email"
              placeholder="Email"
            />
          </StyledOtherDiv>

          <StyledOtherDiv>
            <TextField
              show
              type="password"
              width="180px"
              id="password"
              placeholder="Password"
            />
          </StyledOtherDiv>

          <Button
            type="submit"
            style={{ width: "200px" }}
            color="primary"
            className={classes.submit}
          >
            Logar
          </Button>
          <div>
            <span>-OU-</span>
          </div>
          <StyledOtherDiv>
            <FacebookLoginButton
              style={{ width: "200px", margin: "auto" }}
              onClick={() => alert("Hello")}
            />
            <GoogleLoginButton
              style={{ width: "200px", margin: "auto", marginTop: "10px" }}
              onClick={() => alert("Hello")}
            />
          </StyledOtherDiv>
          <StyledOtherDiv>
            <Link to="/">
              <p className="otherOptions">Esqueceu sua senha?</p>
            </Link>
            <Link to="/register">
              <p className="otherOptions">Cadastre-se</p>
            </Link>
          </StyledOtherDiv>
        </form>
      </StyledMainDiv>
    </ThemeProvider>
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
    color: "grey",
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
  margin-top: 20px;

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
`;

/*const StyledDivRadio = styled.div`
    div {
        color: ${({theme}) => theme.primaryRed};
    }

    label {
        color: ${({theme}) => theme.primaryRed};
        font-size: 14px;
        font-weight: bold;
        display: block;
        margin-top: 20px;
        padding-bottom: 10px;
    }

    input {
        font-weight: bold;
        display: inline;
        cursor: pointer;
        border-radius: 50%;
        color: ${({theme}) => theme.primaryRed};
    }

`;*/

export default reduxForm({
  form: "login" // a unique identifier for this form
})(LoginForm);
