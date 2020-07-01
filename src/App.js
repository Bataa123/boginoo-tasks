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
                </Router>
            </Switch>
        </Router>
    )
}

export default App;