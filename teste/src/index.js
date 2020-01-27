import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import axios from 'axios';
import MainApp from "./mainApp"
import { BrowserRouter } from "react-router-dom";

// const Submit = values => {
// axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
// 	console.log(persons);
//       })

// console.log(values);
// }

const rootEl = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
    <MainApp/>
    </BrowserRouter>,

  rootEl
);



// If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();