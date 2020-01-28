import React from "react";
import { Field, reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "./atoms/TextField";
// import DropdownField from "./atoms/DropdownField"

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

const handleChangeType = item => {
  if(!item) return;
  this.setState({type:item.value})
};

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h1>CADASTRO</h1>
      <div>
      <TextField
            show
            type="text"
            width="180px"
            id="nome"
            placeholder="Nome"
          />
      </div>
  
      <div>
      <TextField
            show
            type="text"
            width="180px"
            id="faculdade"
            placeholder="Faculdade"
          />
      </div>
      <div>
      <TextField
            show
            type="text"
            width="180px"
            id="matricula"
            placeholder="Matricula"
          />
      </div>
      <div>
        
      <TextField
            show
            type="text"
            width="180px"
            id="telefone"
            placeholder="Telefone"
          />
      </div>
      <div>
      <TextField
            show
            type="email"
            width="180px"
            id="email"
            placeholder="Email"
          />
      </div>
      {/* <div>
        <DropdownField 
        show 
        id="sexo" 
        placeholder="Sexo" widht="210px" 
        data={[{label:"Feminino", value:"f"},{label:"Masculino", value:"m"},{label:"Prefiro não informar"}]}
        custom={{isCrearable:false}}
        onChange={handleChangeType()} />
      </div> */}
      <div>
      <TextField
            show
            type="password"
            width="180px"
            id="senha"
            placeholder="Senha"
          />
      </div>{" "}
      <div>
        
      <TextField
            show
            type="password"
            width="180px"
            id="senhaConfirma"
            placeholder="Confirma senha"
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
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(Form);
