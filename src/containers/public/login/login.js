import React from 'react';
import { Form, Field } from 'react-final-form';

const Login = () => {
  const required = value => (value ? undefined : 'Required');
  const onSubmit =(v) => console.log('v :>> ', v);
  return(
    <React.Fragment>
    <Form
    onSubmit={onSubmit}
    validate={required}
    render={({ handleSubmit ,pristine }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>

        <h2>An Arbitrary Reusable Input Component</h2>
        <div>
          <label>Interests</label>
          <Field name="interests" component="input" />
        </div>

        <h2>Render Function</h2>
        <Field
          name="bio"
          // validate={required}
          render={({ input, meta }) => (
            <div>
              <label>Bio</label>
              <textarea {...input} />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        />

        <h2>Render Function as Children</h2>
        <Field name="phone">
          {({ input, meta }) => (
            <div>
              <label>Phone</label>
              <input type="text" {...input} placeholder="Phone" />
              {meta.touched && meta.error && <span>{meta.error}</span>}
            </div>
          )}
        </Field>

        <button disabled={pristine} type="submit">Submit</button>
      </form>
    )}
  />
  </React.Fragment>
  );
};


export default Login;
