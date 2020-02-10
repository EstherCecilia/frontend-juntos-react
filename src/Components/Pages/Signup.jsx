import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../GlobalStyle/theme";
import TextField from "./atoms/TextField";
import BurgerMenu from "./BurgerMenu";
import DatePicker from "./atoms/DatePicker/index";
import SelectField from "./atoms/SelectField/select";
import { StyledMainDiv, StyledOtherDiv } from "./Styled";

let SignupForm = props => {
  const { handleSubmit, cursos } = props;
  const courseList = [];
  const [id, setId] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios.get(`https://api-edu.herokuapp.com/subjects?course=${id}&size=150`).then(res => {
      setSubjects(res.data);
    });
  }, [id]);
  
  const genders = [
    {
      value: "M",
      label: "Masculino"
    },
    {
      value: "F",
      label: "Feminino"
    },
    {
      value: "N",
      label: "Não Informar"
    }
  ];

  const subjectList = [];

  subjects.map(subject => {
    subjectList.push({
      value: subject._id,
      label: subject.name,
    })
  })

  cursos.map(course => {
    courseList.push({
      value: course._id,
      label: course.name.concat(" (", course.campus, ")")
      // campus: course._source.campus,
    });
  });

  //console.log(data);

  const optionLabelCourse = courseList;
  const optionLabelSubject = subjectList;

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
              id="genero"
              isSearchable={false}
              isClearable
              placeholder={"Gênero"}
              component={SelectField}
              width="31.5vw"
              options={genders}
            />
          </StyledOtherDiv>

          <StyledOtherDiv>
            <Field
              classes={classes}
              name="cursos"
              id="cursos"
              required
              isClearable
              placeholder={"Cursos"}
              onChange={value => {
                if(value !== null){
                  setId(value.value)
                }
              }}
              component={SelectField}
              options={optionLabelCourse}
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
          <StyledOtherDiv>
            <label htmlFor="monitor">Monitor</label>
            <Field
              name="monitor"
              id="monitor"
              component="input"
              type="checkbox"
            />
            <Field
              classes={classes}
              required
              name="materias"
              id="materias"
              isClearable
              isMulti
              placeholder={"Matérias"}
              component={SelectField}
              options={subjectList}
              width="31.5vw"
            ></Field>
          </StyledOtherDiv>
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
//     let courseValue = "";
//     if(selector(state, "cursos") != undefined){
//       courseValue = selector(state, "cursos")
//       courseValue = courseValue.value;
//     }
//     console.log(courseValue);
    
//     return {
//       courseValue
//     }
//   }
// )(SignupForm)

export default SignupForm;
