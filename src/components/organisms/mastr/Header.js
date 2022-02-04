import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Avatar, Box } from '@mui/material';
import { HeaderAppBar } from 'components/molecules';
import { ReactComponent as MenuIcon } from 'components/atoms/icon/menu.svg';

const Header = ({ open, onClick }) => {
  return (
    <HeaderAppBar position="fixed" open={open}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Toolbar>
          {!open && (
            <MenuIcon
              style={{ cursor: 'pointer', width: 24, height: 24 }}
              onClick={onClick}
            />
          )}
        </Toolbar>
        <h3>welcome</h3>
        <Avatar sx={{ mr: '24px' }} aria-label="recipe">
          A
        </Avatar>
      </Box>
    </HeaderAppBar>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  listNav: PropTypes.arrayOf(PropTypes.shape),
  onClick: PropTypes.func,
};

export default Header;
