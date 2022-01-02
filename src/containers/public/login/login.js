import React from 'react';
import { Form } from 'react-final-form';
import { required ,number} from 'components/UI/molecules/finalForm/validations/FormValidations';
import { TextInput } from 'components/UI/molecules/finalForm';

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
            <div>
              <TextInput
                name="userName"
                validate={[required,number]}
                placeholder="First Name"
              />
              <br />
            </div>
            <div>
              <TextInput
                name="password"
                type='password'
                validate={[required]}
                placeholder="password"
              />
            </div>
            <button disabled={pristine} type="submit">
              Submit
            </button>
          </form>
        )}
      />
    </React.Fragment>
  );
};

export default Login;
