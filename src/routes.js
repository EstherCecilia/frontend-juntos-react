import React, { useState, useEffect } from "react";
import { Route, Switch, Router } from "react-router-dom";
import Main from "./Components/Pages/Main";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Perfil from "./Components/Pages/Perfil";
import Contato from "./Components/Pages/Contato";
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
  const [usuario, setUsuario] = useState([]);
  const [token, setToken] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios.get(`https://api-edu.herokuapp.com/courses?page=1`).then(res => {
      setCourses(res.data);
    });
  }, []);

  const handleSignIn = values => {
    axios
      .post(`https://api-edu.herokuapp.com/login`, {
        email: values.email,
        password: values.password
      })
      .then(res => {
        setUsuario(res.data.user.student);
        localStorage.setItem('token', res.data.token)
        console.log(localStorage.getItem('token'))
        history.push("/perfil");
      });
  };

  const Submit = values => {
    if (values.senha === values.senhaConfirma) {
      axios
        .post(`http://api-edu.herokuapp.com/register`, {
          name: values.nome,
          course: "5e24dc32d07b5d29174b98a6",
          gender: values.genero,
          birthdate: values.data,
          email: values.email,
          password: values.senha
        })
        .then(res => {
          alert("Dados cadastrados com sucesso!");
          console.log(res);
        });
    } else {
      alert("Senha incorreta!");
    }

    console.log(values);
  };

  const Contact = values => {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    //       .then(res => {
    //         const persons = res.data;
    //   console.log(persons);
    //       })

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
              component={() => <Login onSubmit={handleSignIn} />}
            />
            <Route
              path="/register"
              component={() => <Signup onSubmit={Submit} data={courses} />}
            />
            <Route
              path="/contact"
              component={() => <Contato onSubmit={Contact} />}
            />
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
