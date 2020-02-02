import React from "react";
import { reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "./atoms/TextField";
import { ThemeProvider } from "styled-components";
import { theme } from "../../GlobalStyle/theme";
import BurgerMenu from './BurgerMenu';

const useStyles = makeStyles(theme => ({

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    }
  },
  submit: {
    margin: (theme.spacing(3, 0, 2), "10px"),
    display: "flex",
    backgroundColor: "#f50057",
    color: "#fafafa",
  },
  divSubmit: {
    display: "-webkit-inline-box",
    margin: "auto"
  }

}));

const Contato = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const classes = useStyles();
  return (<ThemeProvider theme={theme}>
    <>
      <BurgerMenu />
    </>
    <>
      <div style={{ marginLeft: "35%" }}>
        <form className={classes.root} onSubmit={handleSubmit}>
          <h1>ENTRE EM CONTATO</h1>
          <div>
            <TextField
              show
              type="email"
              width="180px"
              id="login"
              placeholder="Email"
            />
          </div>
          <div>
            <TextField
              show
              id="outlined-multiline-static"
              label="Texto"
              multiline
              rows="4"
              defaultValue="Default Value"
              variant="outlined"
            />

          </div>
          <div>
            <div className={classes.divSubmit}>
              <Button type="submit" color="primary" className={classes.submit} disabled={pristine || submitting}>
                Submit
          </Button>
              <Button type="button" className={classes.submit} disabled={pristine || submitting} onClick={reset}>Clear values</Button>

            </div>
          </div>
        </form>
      </div>
    </>
  </ThemeProvider>
  );
};

export default reduxForm({
  form: "contato" // a unique identifier for this form
})(Contato);