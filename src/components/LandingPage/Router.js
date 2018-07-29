import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';

import NavBar from './NavBar';
import AppContainer from "../../container/AppContainer";
import CodeEditor from "../CodeEditor/CodeEditor";
import Health from "../Health";
import Register from '../register/RegisterContainer';
import LandingPage from './LandingPage';

const store = configureStore();

export const RouterComponent = () => (
    <div>
        <NavBar />

        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={LandingPage} exact />
                    <Route path="/metamask-utilities" component={AppContainer} />
                    <Route path="/health" component={Health} />
                    <Route path="/register" component={Register} />
                    <Route path="/start-learning" component={CodeEditor} />
                </Switch>
            </Router>
        </Provider>
    </div>
);

export default RouterComponent;