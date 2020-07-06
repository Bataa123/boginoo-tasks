import React from 'react';
import { HomeDefault } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './style/main.scss';
import { Login } from './pages/login';
import { SignUp } from './pages/signUp';
import { NewUSer } from './pages/newUser';
import { ContextProvider } from './authUserProvider'

const App = () => {
    return (
        <Router>
            <ContextProvider>
                <Switch>
                    <Router>
                        <Route path="/" exact>
                            <HomeDefault />
                        </Route>
                        <Route path="/login" >
                            <Login />
                        </Route>
                        <Route path="/signUp" >
                            <SignUp />
                        </Route>
                        <Route path="/newUser" >
                            <NewUSer />
                        </Route>
                    </Router>
                </Switch>
            </ContextProvider>
        </Router>
    )
}

export default App;