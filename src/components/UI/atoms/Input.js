import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const Input = (props) => {
  return <TextField {...props} id={props.id} label={props.placeholder} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

export default Input;
