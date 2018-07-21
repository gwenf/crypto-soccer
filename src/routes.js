import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import Health from './components/Health';
import {LandingPage} from "./components/LandingPage/LandingPage";

export default(
  <Switch>
    <div className="routes">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/metamask-test" component={AppContainer}/>
      <Route path="/health" component={Health}/>
    </div>
  </Switch>
);