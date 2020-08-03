import React from 'react';
import { HomeDefault } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './style/main.scss';
import { Login } from './pages/login';
import { Password } from './pages/password';
import { NewUSer } from './pages/newUser';
import { SwithPath } from './components/switchPath.jsx'
import { History } from './pages/history';
import { ContextProvider } from './authUserProvider';

const App = () => {
    return (
        <Router>
            <ContextProvider>
                <Switch>
                    <Route path="/" exact>
                        <HomeDefault />
                    </Route>
                    <Route path="/login" >
                        <Login />
                    </Route>
                    <Route path="/password" >
                        <Password />
                    </Route>
                    <Route path="/newUser" >
                        <NewUSer />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="*">
                        <SwithPath />
                    </Route>
                </Switch>
            </ContextProvider>
        </Router>
    )
}

export default App;