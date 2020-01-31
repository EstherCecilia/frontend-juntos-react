import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./Components/Pages/Main";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Contato from "./Components/Pages/Contato";
import api from "./services/api";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

export default function Routes() {
  /*useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/students');
            setUser(response.data);
        }
        loadUsers();
    }, []);*/

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
    if(values.senha===values.senhaConfirma){
    axios
      .post(`http://api-edu.herokuapp.com/register`, {
        name: values.nome,
        course: "5e24dc32d07b5d29174b98a6",
        gender: "F",
        birthdate: values.data,
        email: values.email,
        password: values.senha
      })
      .then(res => {
          alert("Dados cadastrados com sucesso!")
        console.log(res);
      })

      .catch(alert("Erro ao cadastrar usuario"));
    }else{
      alert("Senha incorreta!")
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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route
              path="/login"
              component={() => <Login onSubmit={handleSignIn} />}
            />
            <Route
              path="/register"
              component={() => <Signup onSubmit={Submit} />}
            />
            <Route
              path="/contact"
              component={() => <Contato onSubmit={Contact} />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
