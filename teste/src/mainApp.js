import React, {Component} from "react";
import App from "./App";
import Form from "./Form";
import Login from "./Login";
import { slide as Menu } from "react-burger-menu";
import store from "./store";
import { Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import "./App.css"; 

const Submit = values => {
  // axios.get(`https://jsonplaceholder.typicode.com/users`)
  //       .then(res => {
  //         const persons = res.data;
  //   console.log(persons);
  //       })
  
  console.log(values);
  }

class MainApp extends Component {
    render(){

        return(
            <div id="App">
                 <Menu>
      <Link className="menu-item" to="/page1">
        HOME
      </Link>

      <Link className="menu-item" to="/page2">
        MEU PERFIL
      </Link>

      <Link className="menu-item" to="/page3">
CADASTRAR      </Link>

      <Link className="menu-item" to="/page1">
      SOBRE NÓS
      </Link>
      <Link className="menu-item" to="/page1">
      ENTRE EM CONTATO
      </Link>

    </Menu>
            <div id="page-wrap">
      
    
  <Provider store={store}>
    <Switch>
        <Route path="/page1" component={App}/>
        <Route path="/page2" component={() => <Login onSubmit={Submit}/>}/>
        <Route path="/page3" component={() => <Form onSubmit={Submit}/>}/>
            
    </Switch>
    </Provider></div>

</div>
        );
    }
}
export default MainApp;

