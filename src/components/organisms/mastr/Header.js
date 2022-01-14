import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import { HeaderAppBar } from 'designSystems/molecules';
import { ReactComponent as MenuIcon } from 'designSystems/atoms/icon/menu.svg';
import HeaderNav from 'components/organisms/headerNav';

const Header = ({ open, listNav, onClick }) => {
  return (
    <HeaderAppBar position="fixed" open={open}>
      <Toolbar>
        {!open && (
          <MenuIcon
            style={{ cursor: 'pointer', width: 24, height: 24 }}
            onClick={onClick}
          />
        )}
        <HeaderNav
          colorLink="#FFF"
          style={{ display: 'flex', gap: 10 }}
          listNav={listNav}
        />
      </Toolbar>
    </HeaderAppBar>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  listNav: PropTypes.shape,
  onClick: PropTypes.func,
};

export default Header;
