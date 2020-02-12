import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../GlobalStyle/theme";
import TextField from "./atoms/TextField";
import BurgerMenu from "./BurgerMenu";
import DatePicker from "./atoms/DatePicker/index";
import SelectField from "./atoms/SelectField/select";
import { StyledMainDiv, StyledOtherDiv } from "./Styled/main";
//import { required, minLength, number, email } from './validation/validateFields';

let SignupForm = props => {
  const { handleSubmit, cursos } = props;
  const courseList = [];
  const [id, setId] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api-edu.herokuapp.com/subjects?course=${id}&size=100`)
      .then(res => {
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
      label: subject.name
    });
  });

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
              width="15vw"
              id="nome"
              placeholder="Nome"
              //validate={required}
            />
            <TextField
              show
              type="text"
              width="15vw"
              id="telefone"
              placeholder="Telefone"
              //validate={required, number}
            />
          </StyledOtherDiv>
          <StyledOtherDiv>
            <TextField
              show
              type="email"
              width="15vw"
              id="email"
              placeholder="Email"
              //validate={[required, email]}
            />
            <TextField
              show
              type="date"
              component={DatePicker}
              width="15vw"
              id="data"
              placeholder="Data de Nascimento"
              InputLabelProps={{
                shrink: true
              }}
            ></TextField>
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
              //validate={required}
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
              placeholder={"Curso"}
              onChange={value => {
                if (value !== null) {
                  setId(value.value);
                }
              }}
              //validate={required}
              component={SelectField}
              options={optionLabelCourse}
              width="31.5vw"
            ></Field>
          </StyledOtherDiv>

          <StyledOtherDiv>
            <TextField
              show
              type="password"
              width="15vw"
              id="senha"
              //validate={required, minLength(6)}
              placeholder="Senha"
            />
            <TextField
              show
              type="password"
              width="15vw"
              id="senhaConfirma"
              //validate={required, minLength(6)}
              placeholder="Confirmar senha"
            />
          </StyledOtherDiv>
          <StyledOtherDiv>
            <div style={{display: "inline-flex", width: "25vw"}}>
            <span style={{width: "25vw", fontFamily: "Nunito Sans"}}>Deseja ajudar em alguma matéria ?</span>
            <Field
              style={{width: "2vw", marginTop: "-0.4vw"}}
              name="monitor"
              id="monitor"
              component="input"
              type="checkbox"
              onChange={() => setShow(!(show))}
            />
            </div>
            
            {show ? (
              <div style={{display:"block", margin:"auto"}}>
              <Field
                classes={classes}
                required
                name="materias"
                id="materias"
                isClearable
                isMulti
                //validate={required}
                placeholder={"Matérias"}
                component={SelectField}
                options={subjectList}
                width="31.5vw"
              ></Field>
              </div>
            ) : null}
            
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
            Inscrever-se
          </Button>
          <Link style={{ color: "#ff2e63" }} to="/login">
            <p style={{ color: "#FF2E63", fontFamily: 'Nunito Sans' }}>Já é cadastrado?</p>
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
  form: "simple", // a unique identifier for this form
})(SignupForm);

export default SignupForm;
