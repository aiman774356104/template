import React from 'react';
import { TextInput, Form } from 'components/UI/molecules/finalForm';
import { required, number } from 'components/validations/FormValidations';
import { Button } from 'components/UI/atoms';

const Login = () => {
  const onSubmit = (v) => console.log('v :>> ', v);
  return (
    <React.Fragment>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, pristine }) => (
          <form onSubmit={handleSubmit}>
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
                name="userName"
                validate={[required, number]}
                placeholder="First Name"
              />

              <TextInput
                name="password"
                type="password"
                validate={[required]}
                placeholder="password"
              />
            </div>
            <br />
            <Button disabled={pristine} type="submit" variant="contained">
              Submit
            </Button>
          </form>
        )}
      />
    </React.Fragment>
  );
};

export default Login;
