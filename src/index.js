import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import configureStore from './configureStore';

import './index.css';
import Intl from './Intl';
import * as serviceWorker from './serviceWorker';
const initialState = window.initialReduxState;
const history = createHashHistory();
const store = configureStore(history, initialState);

const app = (
  <Provider store={store}>
    <Intl />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
