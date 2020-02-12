import React, { useState, useEffect } from "react";
import { Route, Switch, Router } from "react-router-dom";
import Main from "./Components/Pages/Main";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Perfil from "./Components/Pages/Perfil";
import Editar from "./Components/Pages/Editar";
import Contato from "./Components/Pages/Contato";
import Sobre from "./Components/Pages/Sobre";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { createBrowserHistory } from "history";
const history = createBrowserHistory({
  basename: "/"
});
window.redirect = history.push;

export default function Routes() {
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [token, setToken] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios.get(`https://api-edu.herokuapp.com/courses?size=200`).then(res => {
      setCourses(res.data);
    });
    // axios
    //   .get(
    //     `https://api-edu.herokuapp.com/subjects?course=5e2c694d02d79a14ca44de2e&size=150`
    //   )
    //   .then(res => {
    //     setSubjects(res.data);
    //   });
  }, []);

  const handleSignIn = values => {
    axios
      .post(`https://api-edu.herokuapp.com/login`, {
        email: values.email,
        password: values.password
      })
      .then(res => {
        setUsuario(res.data.user.student);
        localStorage.setItem("token", res.data.token);
        console.log(res.data.user.student);
        localStorage.setItem("id", res.data.user.student._id);

        history.push("/perfil");
      });
  };

  const requestToken = () => {
    const AuthToken = localStorage.getItem("token");
    const USER_TOKEN = "Bearer ".concat(AuthToken);
    const URL = `https://api-edu.herokuapp.com/students/${localStorage.getItem(
      "id"
    )}`;
    axios.get(URL, { headers: { Authorization: USER_TOKEN } }).then(res => {
      if (res.data.active) {
        setUsuario(res.data);
        history.push("/perfil");
      } else {
        window.location.reload();
      }
    });
  };

  const Submit = values => {
    // console.log(localStorage.getItem("courses"))
    //console.log(values.course.value);
    let check = false;
    if (values.monitor) {
      check = true;
    } else {
      check = false;
    }
    if (values.senha === values.senhaConfirma) {
      axios
        .post(`http://api-edu.herokuapp.com/register`, {
          name: values.nome,
          course: values.cursos,
          gender: values.genero,
          phone: values.telefone,
          birthdate: values.data,
          email: values.email,
          password: values.senha,
          isHelper: check
        })
        .then(res => {
          //console.log(res);
          const USER_TOKEN = "Bearer ".concat(res.data.token);

          if (check) {
            let subjects = values.materias.map(subjects => subjects.value);
            axios
              .post(
                `http://api-edu.herokuapp.com/helpers`,
                {
                  subjects: subjects
                },
                { headers: { Authorization: USER_TOKEN } }
              )
              .then(res => {
                console.log(res);
              });
          }
          alert("Dados cadastrados com sucesso!");
          // window.location.reload();
        });
    } else {
      alert("Dados incorretos");
    }

    localStorage.setItem("curses", []);
    console.log(values);
  };

  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route
              path="/login"
              component={() => (
                <Login onSubmit={handleSignIn} requestToken={requestToken} />
              )}
            />
            <Route
              path="/register"
              component={() => (
                <Signup
                  onSubmit={Submit}
                  cursos={courses}
                  materias={subjects}
                />
              )}
            />
            <Route path="/contact" component={() => <Contato />} />
            <Route path="/editar" component={() => <Editar />} />
            <Route path="/sobre" component={() => <Sobre />} />
            <Route
              path="/perfil"
              component={() => <Perfil usuario={usuario} />}
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
