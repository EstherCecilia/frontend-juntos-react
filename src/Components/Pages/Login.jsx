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
import facebook from "../../images/facebook.png";
import gmail from "../../images/gmail.png";

import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}



const LoginForm = props => {
  const { handleSubmit } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  const classes = useStyles();
  return (
    <>
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
              style={{
                width: "200px",
                height: "50px",
                color: "#fafafa",
                borderRadius: "10px",
              }}
              color="#FF2E63"
              className={classes.submit}
            >
              Logar
          </Button>
            <div>
              <span>-OU-</span>
            </div>
            <StyledOtherDiv>
              <img style={{ width: "40px" }} onClick={() => { alert("Hello") }} src={facebook}></img>

              <img style={{ width: "40px", marginLeft: "5px" }} onClick={() => { alert("Hello") }} src={gmail}></img>

            </StyledOtherDiv>
            <StyledOtherDiv>
              <a style={{ color: "#ff2e63", cursor: "pointer", textDecoration: "underline" }} onClick={handleOpen}>
                <p style={{ color: "#ff2e63" }} className="otherOptions">Esqueceu sua senha?</p>
              </a>
              <Link style={{ color: "#ff2e63" }} to="/register">
                <p style={{ color: "#ff2e63" }} className="otherOptions">Cadastre-se</p>
              </Link>
            </StyledOtherDiv>
          </form>
        </StyledMainDiv>
      </ThemeProvider>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={{
          backgroundColor: "#08D9D6",
          color: "#000",
          width: "500px",
          margin: "auto"
        }} className={classes.paper}>
          <h2 id="simple-modal-title">ATUALIZAR SENHA</h2>
          <p>Informe o seu email:</p>
          <StyledOtherDiv>
            <TextField
              show
              type="email"
              width="180px"
              id="email"
              placeholder="Email"
            />
          </StyledOtherDiv>
          <Button
            type="submit"
            style={{ width: "200px", color: "#fafafa", borderRadius:"10px" }}
            className={classes.submit}
          >
            ENVIAR
          </Button>
        </div>
      </Modal>
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

  a {
    text-align: center;
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
