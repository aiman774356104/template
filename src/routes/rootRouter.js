import React, { useState } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';

import Login from 'containers/public/login';
import Home from 'containers/public/home';
import { HeaderMain, DrawerHeader, HeaderAppBar } from 'components/UI/atoms';
import HeaderNav from 'components/templates/headerNav';

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
      <HeaderAppBar position="fixed" open={openDrawer}>
        <Toolbar>
          {!openDrawer && <p onClick={() => DrawerlocalStorage(true)}>Open</p>}
          <HeaderNav
            colorLink="#FFF"
            style={{ display: 'flex', gap: 10 }}
            listNav={minNav}
          />
        </Toolbar>
      </HeaderAppBar>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={openDrawer}
      >
        <DrawerHeader>
          <p onClick={() => DrawerlocalStorage(false)}>Close</p>
        </DrawerHeader>
      </Drawer>

      <HeaderMain open={openDrawer}>
        <DrawerHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </HeaderMain>
    </Box>
  );
};

export default withRouter(RootRouter);
