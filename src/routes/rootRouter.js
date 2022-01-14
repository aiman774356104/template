import React, { useState } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Box from '@mui/material/Box';

import Header from 'components/organisms/mastr/Header';
import Drawer from 'components/organisms/mastr/Drawer';
import Body from 'components/organisms/mastr/Body';
import Login from 'components/Page/login';
import Home from 'components/Page/home';

const RootRouter = () => {
  const [openDrawer, setOpenDrawer] = useState(
    JSON.parse(localStorage.getItem('open_drawer'))
  );
  const minNav = [
    { to: '/', title: 'Home' },
    { to: 'login', title: 'Login' },
    { to: '/dashboard', title: 'Dashboard' },
  ];

  const DrawerlocalStorage = (value) => {
    localStorage.setItem('open_drawer', value);
    setOpenDrawer(value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header
        open={openDrawer}
        onClick={() => DrawerlocalStorage(true)}
        listNav={minNav}
      />
      <Drawer open={openDrawer} onClick={() => DrawerlocalStorage(false)} />
      <Body open={openDrawer}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </Body>
    </Box>
  );
};

export default withRouter(RootRouter);
