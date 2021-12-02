import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from 'containers/public/login';
import Home from 'containers/public/home';
import Nav from 'containers/public/nav';
// import Login from '../containers/public/Login';
const RootRouter = () => {
  return (
    <div>
      <Nav />
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* <Redirect
      to={{
        pathname: '/login',
        state: { from: location },
      }}
    /> */}
      </Switch>
    </div>
  );
};

export default withRouter(RootRouter);
