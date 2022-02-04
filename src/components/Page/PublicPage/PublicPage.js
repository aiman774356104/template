import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import MastarTemplates from 'components/Templates/MastarTemplates';
import Login from 'components/Page/Login';
import Home from 'components/Page/home';

const PublicPage = () => {

  return (
    <MastarTemplates >
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Redirect to="/" />
    </MastarTemplates>
  );
};

PublicPage.propTypes = {
  children: PropTypes.node,
};

export default PublicPage;
