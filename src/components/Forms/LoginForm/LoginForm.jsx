import React, { useState } from 'react';
import { Heading } from '../common-styles';
import { Form } from './LoginForm.styles';
import TextInputGroup from '../../Common/TextInputGroup/TextInputGroup';
import CustomButton from '../../Common/CustomButton/CustomButton';
import FormFooter from '../FormFooter/FormFooter';

const RegisterForm = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  return (
    <Form>
      <Heading variant="h3">Log in</Heading>
      <TextInputGroup
        type="email"
        label="Ihre Email adresse angeben"
        name="email"
        value={email}
        placeholder="z.B. marina@meyer.ch"
        onChange={({ target }) => setEmail(target.value)}
        required
      />
      <TextInputGroup
        type="password"
        label="Passwort"
        name="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        required
      />
      <CustomButton title="Log in" actionbtn="true"/>
      <FormFooter
        text="Haben Sie noch kein Konto?"
        url="/"
        urlText="Registrierung"
      />
    </Form>
  );
};

export default RegisterForm;
