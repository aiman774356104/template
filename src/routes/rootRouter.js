import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Login from 'containers/public/login';
import Home from 'containers/public/home';
import Nav from 'containers/public/nav';

const RootRouter = () => {
  return (
    <div>
      <Nav />
      <hr />
      <Switch>
        <Route exact path= "/" component={Home} />
        <Route path= "/login" component={Login} />
        <Redirect to= '/' />
      </Switch>
    </div>
  );
};

export default withRouter(RootRouter);
