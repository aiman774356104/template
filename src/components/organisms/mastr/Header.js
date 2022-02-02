import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import { HeaderAppBar,HeaderNav } from 'components/molecules';
import { ReactComponent as MenuIcon } from 'components/atoms/icon/menu.svg';

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
  listNav: PropTypes.arrayOf(PropTypes.shape),
  onClick: PropTypes.func,
};

export default Header;
