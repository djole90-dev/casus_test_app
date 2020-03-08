import React, { useState, Fragment } from 'react';
import {
  Form,
  Heading,
  Text,
  LoginRedirect,
  CheckboxContainer,
  AcceptUrl,
  RCP
} from './RegisterForm.styles';
import reCAPTCHA_image from '../../../assets/recaptcha.JPG';
import TextInputGroup from '../../Common/TextInputGroup/TextInputGroup';
import CustomButton from '../../Common/CustomButton/CustomButton';
import CheckboxGroup from '../../Common/CheckboxGroup/CheckboxGroup';

const CbLabel = (
  <Fragment>
    Ich akzeptiere die
    <AcceptUrl to="/123">Nutzungsbedingungen*</AcceptUrl>
  </Fragment>
);

const RegisterForm = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ termsChecked, setTermsChecked ] = useState(false);
  const [ subscribed, setSubscribed ] = useState(false);

  return (
    <Form>
      <Heading>Registrierung</Heading>
      <TextInputGroup
        type="email"
        label="Emailadresse"
        name="email"
        value={email}
        placeholder="z.B. paul@mueller.ch"
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
      <CheckboxContainer>
        <CheckboxGroup
          label={CbLabel}
          checked={termsChecked}
          handleCheckboxChange={() => setTermsChecked(!termsChecked)}
        />
        <CheckboxGroup
          label="Ich möchte über Neuigkeiten aus der CASUS-Welt per Mail auf dem Laufenden bleiben."
          checked={subscribed}
          handleCheckboxChange={() => setSubscribed(!subscribed)}
          multiline
        />
      </CheckboxContainer>
      <RCP src={reCAPTCHA_image} alt="Dummy reCAPTCHA" />
      <CustomButton title="CASUS-Konto erstellen" />
      <Text align="center">
        Haben Sie bereits ein Konto?
        <LoginRedirect to="/login">Log in</LoginRedirect>
      </Text>
    </Form>
  );
};

export default RegisterForm;
