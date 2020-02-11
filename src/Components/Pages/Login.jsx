import React from "react";
import { reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../GlobalStyle/theme";
import BurgerMenu from "./BurgerMenu";
import TextField from "./atoms/TextField";
// import FacebookLogin from "react-facebook-login";
// import { GoogleLogin } from "react-google-login";
import facebook from "../../images/facebook.png";
import gmail from "../../images/gmail.png";
import { StyledMainDiv, StyledOtherDiv } from "./Styled/login";
import Modal from "@material-ui/core/Modal";

/*function rand() {
  return Math.round(Math.random() * 20) - 10;
}*/

const LoginForm = props => {
  const { handleSubmit } = props;
  const [open, setOpen] = React.useState(false);
  if (localStorage.getItem("token") !== undefined) {
    props.requestToken();
  }

  // const responseFacebook = response => {
  //   console.log(response);
  // };

  // const responseGoogle = response => {
  //   console.log(response);
  // };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <BurgerMenu />
        <StyledMainDiv>
          <form className={classes.form} onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <StyledOtherDiv>
              <TextField
                show
                type="email"
                width="180px"
                className="inputPlaceholder"
                id="email"
                placeholder="Email"
              />
            </StyledOtherDiv>
            <StyledOtherDiv>
              <TextField
                show
                type="password"
                width="180px"
                className="inputPlaceholder"
                id="password"
                placeholder="Password"
              />
            </StyledOtherDiv>

            <Button
              type="submit"
              placeholder="Login"
              variant="contained"
              style={{
                width: "200px",
                height: "35px",
                color: "#fafafa",
                borderRadius: "10px",
                textAlign: "center",
                lineHeight: "0.5vh",
              }}
              color="#FF2E63"
              className={classes.submit}
            >
              Login
            </Button>
            <div>
              <span>-ou-</span>
            </div>
            <StyledOtherDiv>
              {/* { <FacebookLogin
                appId="596666950897064"
                fields="name, email, picture"
                callback={responseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
              />} */}

              {/* {<GoogleLogin
                clientId="175745869829-ap2tvjungr7o5abfbngfr9246sd44te8.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />} */}

              {<img 
                style={{width:"40px", cursor: "pointer"}} 
                onClick={()=> {alert("Hello")}} 
                src={facebook}
                alt="Facebook">
              </img> }

              {<img style=
                {{width:"40px", marginLeft:"5px", cursor: "pointer"}} 
                onClick={()=> {alert("Hello")}} 
                src={gmail}
                alt="Gmail">
              </img> }
            </StyledOtherDiv>
            <StyledOtherDiv>
              <a
                style={{
                  color: "#ff2e63",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
                onClick={handleOpen}
              >
                <p style={{ color: "#ff2e63", fontFamily: ('Nunito Sans', 'sans-serif') }}>
                  Esqueceu sua senha?
                </p>
              </a>
              <Link style={{ color: "#ff2e63" }} to="/register">
                <p style={{ color: "#ff2e63", fontFamily: ('Nunito Sans', 'sans-serif') }}>
                  Cadastre-se
                </p>
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
        <div
          style={{
            backgroundColor: "#08D9D6",
            color: "#000",
            width: "500px",
            margin: "auto"
          }}
          className={classes.paper}
        >
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
            style={{ width: "200px", color: "#fafafa", borderRadius: "10px" }}
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
    width: "180px",
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
