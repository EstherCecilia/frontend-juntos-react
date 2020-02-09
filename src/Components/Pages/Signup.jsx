import React, {useState } from "react";
import {connect} from 'react-redux';
import { Field, reduxForm, getFormValues, formValueSelector } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../GlobalStyle/theme";
import TextField from "./atoms/TextField";
import BurgerMenu from "./BurgerMenu";
import RenderSelectField from "./atoms/SelectField/renderSelectField";
import DatePicker from "./atoms/DatePicker/index";
import Curses from "./atoms/Curses/index";
import ComboBox from "./atoms/ComboBox";
import SelectField from './atoms/ComboBox/select';
import { StyledMainDiv, StyledOtherDiv } from "./Styled";

let SignupForm = props => {
  const { handleSubmit, data } = props;
  const courseList = [];
  
  data.map(course => {
    courseList.push({
      value: course._id,
      label: course.name.concat(' (', course.campus, ')'),
      // campus: course._source.campus,
    })
  })

  //console.log(data);

  const optionLabel = courseList;

  // const optionLabel = (course) => {
  //   return(
  //     course.name.concat(' (', course.campus, ')')
  //   )
  // }

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BurgerMenu />
      <StyledMainDiv>
        <form className={classes.form} onSubmit={handleSubmit}>
          <h1>CADASTRO</h1>
          <StyledOtherDiv>
            <TextField
              show
              type="text"
              width="180px"
              id="nome"
              placeholder="Nome"
            />
            <TextField
              show
              type="text"
              width="180px"
              id="telefone"
              placeholder="Telefone"
            />
          </StyledOtherDiv>

          <StyledOtherDiv>
            <Field
              name="genero"
              component={RenderSelectField}
              label="Gênero"
              width="180px"
            >
              <option value={""}></option>
              <option value={"F"}>Feminino</option>
              <option value={"M"}>Masculino</option>
              <option value={"N"}>Não informar</option>
            </Field>
          </StyledOtherDiv>

          <StyledOtherDiv>
            <Field
              classes={classes}
              name="cursos"
              id="cursos"
              placeholder={"Cursos"}
              component={SelectField}
              options={optionLabel}
              width="31.5vw"
            ></Field>
          </StyledOtherDiv>

          {/* <StyledOtherDiv>
            <Field
              classes={classes}
              id="cursos"
              component={ComboBox}
              options={courseList}
              getOptionLabel={optionLabel}
              onChange={(event, value) => console.log(value)}
              label="Cursos"
              width="31.5vw"
            ></Field>
          </StyledOtherDiv> */}

          <StyledOtherDiv>
            <TextField
              show
              type="email"
              width="180px"
              id="email"
              placeholder="Email"
            />
            <TextField
              show
              type="date"
              component={DatePicker}
              width="180px"
              id="data"
              placeholder="Data de Nascimento"
              InputLabelProps={{
                shrink: true
              }}
            ></TextField>
          </StyledOtherDiv>

          <StyledOtherDiv>
            <TextField
              show
              type="password"
              width="180px"
              id="senha"
              placeholder="Senha"
            />
            <TextField
              show
              type="password"
              width="180px"
              id="senhaConfirma"
              placeholder="Confirmar senha"
            />
          </StyledOtherDiv>
  <Curses />
          <Button
            type="submit"
            style={{
              width: "200px",
              borderRadius: "10px",
              color: "#fafafa",
              padding: "10px"
            }}
            color="primary"
            className={classes.submit}
          >
            Inscrever-se
          </Button>
          <Link style={{ color: "#ff2e63" }} to="/login">
            <p style={{ color: "#FF2E63" }}>Já é cadastrado?</p>
          </Link>
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

  select: {
    color: "#000"
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    display: "center",
    backgroundColor: "#000",
    color: "#fafafa"
  },
  divSubmit: { display: "-webkit-inline-box", margin: "auto" }
}));

SignupForm = reduxForm({
  form: "simple" // a unique identifier for this form
})(SignupForm);

// const selector = formValueSelector("simple");
// SignupForm = connect(
//   state => {
//     const courseValue = selector(state, "cursos")
//     return {
//       //courseValue
//     }
//   }
// )(SignupForm)

export default SignupForm;
