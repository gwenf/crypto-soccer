import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import browserHistory from 'react-router-dom';
import AppContainer from './container/AppContainer';
import Health from './components/Health';
import {LandingPage} from "./components/LandingPage/LandingPage";

const OriginalRouter = () => (
        <Router history={browserHistory}>
            <div className="routes">
                <Route component={LandingPage}/>
                <Route path="/metamask-utilities" component={AppContainer}/>
                <Route path="/metamask-test" component={AppContainer}/>
                <Route path="/health" component={Health}/>
            </div>
        </Router>
    );

export default OriginalRouter;