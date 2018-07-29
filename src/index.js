import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import AppContainer from './container/AppContainer';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import Router from "./components/LandingPage/Router";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
