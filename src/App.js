import React from 'react';
import { HomeDefault } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';
import { Login } from './pages/login';
import { SignUp } from './pages/signUp';

const App = () => {
    return (
        <Router>
            <Switch>
                <Router>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/signUp" exact>
                        <SignUp />
                    </Route>
                </Router>
            </Switch>
        </Router>
    )
}

export default App;