import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import composeValidators from 'components/UI/molecules/finalForm/validations/composeValidators';
import { Input } from 'components/UI/atoms';

const TextInput = ({ name, validate, onBlur, ...props }) => (
  <Field
    name={name}
    validate={composeValidators(...validate)}
    render={({ input, meta }) => (
      <div>
        <Input
          id={name}
          {...input}
          {...props}
          onBlur={onBlur}
          error={meta.touched && meta.error}
          helperText={meta.error}
        />
      </div>
    )}
  />
);
TextInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  validate: PropTypes.func,
  onBlur: PropTypes.func,
};

export default TextInput;
