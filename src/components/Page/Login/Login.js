import React from 'react';
import LoginTemplates from 'components/Templates/Login';

const Login = () => {
  const onSubmit = (v) => console.log('v :>> ', v);
  return <LoginTemplates onSubmit={onSubmit} />;
};

export default Login;
