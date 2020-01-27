import React from "react";
import { Field, reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
    backgroundColor: "#f50057",
    color:"#fafafa",
    margin:"10px"
 },
 divSubmit:{display: "-webkit-inline-box",
  margin: "auto"
  }

}));

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h1>CADASTRO</h1>
      <div>
        <label>Nome</label>
        <div>
          <Field name="nome" component="input" type="text" placeholder="" />
        </div>
      </div>
  
      <div>
        <label>Faculdade</label>
        <div>
          <Field
            name="faculdade"
            component="input"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label>Matricula</label>
        <div>
          <Field
            name="matricula"
            component="input"
            type="matricula"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label>Telefone</label>
        <div>
          <Field
            name="telefone"
            component="input"
            type="telefone"
            placeholder=""
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="" />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{" "}
            Female
          </label>
          <label>
            <Field
              name="sex"
              component="input"
              type="radio"
              value="Ninformado"
            />{" "}
            Não informar
          </label>
        </div>
      </div>
      <div>
        <label>Senha</label>
        <div>
          <Field name="senha" component="input" type="senha" placeholder="" />
        </div>
      </div>{" "}
      <div>
        <label>Confirmar senha</label>
        <div>
          <Field
            name="confirmSenha"
            component="input"
            type="confirmSenha"
            placeholder=""
          />
        </div>
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
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(Form);
