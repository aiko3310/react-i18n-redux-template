import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import * as ROUTES from './router';
import App from './pages/App';

const history = createHashHistory();

const rootRouter = () => (
  <Router basename={process.env.PUBLIC_URL} history={history}>
    <Switch>
      <Route path={ROUTES.HOME} component={App} />
    </Switch>
  </Router>
);
export default rootRouter;
