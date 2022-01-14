import React from 'react';

import { Button } from 'designSystems/atoms';
import { Form } from 'react-final-form';
import { required, number } from 'components/validations/FormValidations';
import TextInput from 'components/organisms/TextInput';

const Login = () => {
  const onSubmit = (v) => console.log('v :>> ', v);
  return (
    <React.Fragment>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, pristine }) => (
          <form onSubmit={handleSubmit} style={{ padding: 20 }}>
            <h2>Login</h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 'fit-content',
                gap: 25,
              }}
            >
              <TextInput
                finalForm
                name="userName"
                validate={[required, number]}
                placeholder="First Name"
              />

              <TextInput
                finalForm
                name="password"
                type="password"
                validate={[required]}
                placeholder="password"
              />
            </div>
            <br />
            <Button label="submit" disabled={pristine} type="submit" primary />
          </form>
        )}
      />
    </React.Fragment>
  );
};

export default Login;
