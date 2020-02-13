import React from "react";
import { reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "styled-components";
import { theme } from "../../GlobalStyle/theme";
import TextField from "./atoms/TextField";
import BurgerMenu from "./BurgerMenu";
import { StyledMainDiv, StyledOtherDiv } from '../Pages/Styled/ajusteBackground';
import { createBrowserHistory } from "history";

const history = createBrowserHistory({
  basename: "/"
});

const Editar = () => {
  const handleSubmit = () => {
    alert("Dados editado com sucesso!");
    history.push("/login");
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BurgerMenu />

      {/* <FontAwesomeIcon
        style={{
          color: "#fd7e14",
          marginRight: "40%",
          marginTop: "5%",
          marginLeft: "45%"
        }}
        icon={faPlusCircle}
        size="2x"
      /> */}
      <StyledMainDiv className="editar">
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1>EDITAR DADOS</h1>
          <StyledOtherDiv>
            <TextField
              show
              type="text"
              width="14vw"
              id="nome"
              placeholder="Nome"
            />
            <TextField
              show
              type="text"
              width="14vw"
              id="telefone"
              placeholder="Telefone"
            />
          </StyledOtherDiv>

          <StyledOtherDiv>
            <TextField
              show
              type="email"
              width="14vw"
              id="email"
              placeholder="Email"
            />
            <TextField
              show
              type="password"
              width="14vw"
              id="senha"
              placeholder="Senha"
            />
          </StyledOtherDiv>

          <Button
            type="submit"
            style={{
              width: "30vw",
              height: "2vh",
              color: "#fafafa",
              borderRadius: "10px",
              textAlign: "center",
              lineHeight: "0.5vh",
            }}
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
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
    color: "#000",
    border: 0,
    borderBottom: ("1px", "solid", "black")
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    display: "center",
    backgroundColor: "#000",
    color: "#fafafa"
  },
  divSubmit: { display: "-webkit-inline-box", margin: "auto" }
}));

export default reduxForm({
  form: "editar" // a unique identifier for this form
})(Editar);
