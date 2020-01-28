import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './Components/Pages/Main';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import api from './services/api';
import store from "./store";
import { Provider } from 'react-redux';

export default function Routes() {
    const [user, setUser] = useState([]);

    /*useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/students');
            setUser(response.data);
        }
        loadUsers();
    }, []);*/

    async function handleAddUser(data){
        //const response = await api.post('/register', data);
        //setUser([...user, response.data]);
        //console.log(data);
    }

    async function handleSignIn(data) {
        
        try{
            await api.post("/login", data);
        }catch(erro){
            alert("erro, verifique suas credenciais");
        }
        /*const response = await api.post('/login', data);*/
        console.log(data);
    }

    return (
        <div>
        <Provider store={store}>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/login" component={() => <Login onSubmit={handleSignIn}/>} />
                <Route path="/register" component={() => <Signup onSubmit={handleAddUser}/>} />
            </Switch>
            </BrowserRouter>
        </Provider>
        </div>
    );
}

