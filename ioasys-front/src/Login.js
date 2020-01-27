import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "./atoms/TextField";
import Link from "@material-ui/core/Link";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { reduxForm } from "redux-form";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
	textAlign: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2), 
    display: "flex",
    margin: "auto",
    backgroundColor: "#f50057",
    color:"#fafafa" 
 }
}));

const Login = props => {
  const { handleSubmit } = props;
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" style={{backgroundColor: "#00dad9"}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            show
            type="email"
            width="180px"
            id="login"
            placeholder="Login"
          />
          <TextField
            show
            type="password"
            width="180px"
            id="password"
            placeholder="Senha"
          />

          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button type="submit" color="primary" className={classes.submit}>
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(Login);