import React from 'react';
import PropTypes from 'prop-types';
import DrawerMUI from '@mui/material/Drawer';
import { DrawerHeader } from 'designSystems/molecules';
import { ReactComponent as CloseIcon } from 'designSystems/atoms/icon/x-close.svg';

const style = {
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
  },
};

const Drawer = ({ onClick, open }) => {
  return (
    <DrawerMUI sx={style} variant="persistent" anchor="left" open={open}>
      <DrawerHeader>
        <CloseIcon
          style={{ cursor: 'pointer', width: 24, height: 24 }}
          onClick={onClick}
        />
      </DrawerHeader>
    </DrawerMUI>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Drawer;
