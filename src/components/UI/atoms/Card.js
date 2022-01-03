import React from 'react';
import PropTypes from 'prop-types';
import CardUi from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import { red } from '@mui/material/colors';

const Card = ({ src, name, birthDate, icon, onClick, children }) => {
  return (
    <CardUi sx={{ maxWidth: 345 }} variant="outlined">
      <CardHeader
        avatar={
          // <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {src}
          </Avatar>
        }
        action={
          icon && (
            <p onClick={onClick} style={{ margin: '5px 0 0 25px' }}>
              icon
            </p>
          )
        }
        title={name}
        subheader={birthDate}
      />
      <CardContent>{children}</CardContent>
    </CardUi>
  );
};

Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  birthDate: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.bool,
};

export default Card;
