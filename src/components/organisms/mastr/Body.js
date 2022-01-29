import React from 'react';
import PropTypes from 'prop-types';
import { HeaderMain, DrawerHeader } from 'designSystems/molecules';

const Body = ({ open, children }) => {
  return (
    <HeaderMain open={open}>
      <DrawerHeader />
      {children}
    </HeaderMain>
  );
};

Body.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
};

export default Body;
