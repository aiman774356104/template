import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Login from 'containers/public/login';
import Home from 'containers/public/home';
import Nav from 'components/UI/molecules/page/nav';

const RootRouter = () => {
  const minNav = [
    { to: '/', title: 'Home' },
    { to: 'login', title: 'Login' },
    { to: '/dashboard', title: 'Dashboard' },
  ];
  return (
    <div>
      <Nav listNav={minNav}/>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default withRouter(RootRouter);
