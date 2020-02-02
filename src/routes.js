import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./Components/Pages/Main";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Perfil from "./Components/Pages/Perfil";
import Contato from "./Components/Pages/Contato";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

export default function Routes() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get(`https://api-edu.herokuapp.com/courses?page=1`).then(res => {
      console.log("Cursos buscado com sucesso!");
      //console.log(res.data.docs);
      setCourses(res.data.docs);
    });
  }, []);

  const handleSignIn = values => {
    // try{
    //     await api.post("/login", values);
    // }catch(erro){
    //     alert("erro, verifique suas credenciais");
    // }
    /*const response = await api.post('/login', values);*/
    console.log(values);
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
  console.log(courses);

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
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
              path="/sobre"
              component={() => <Perfil/>}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
