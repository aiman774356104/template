import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import  composeValidators  from 'components/global/atomsForm/validations/composeValidators';

const TextInput = ({ name, validate, onBlur, ...props }) => (
  <Field
    name={name}
    validate={composeValidators(...validate)}
    render={({ input, meta }) => (
      <div>
        <input onBlur={onBlur} {...input} {...props} />
        {meta.touched && meta.error && <span>{meta.error}</span>}
      </div>
    )} />
);
TextInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  validate: PropTypes.func,
  onBlur: PropTypes.func,
};

export default TextInput;
