import React, { Fragment, useState } from 'react';
import reCAPTCHA_image from '../../../assets/recaptcha.JPG';
import TextInputGroup from '../../Common/TextInputGroup/TextInputGroup';
import CustomButton from '../../Common/CustomButton/CustomButton';
import CheckboxGroup from '../../Common/CheckboxGroup/CheckboxGroup';
import FormFooter from '../FormFooter/FormFooter';
import PasswordStrengthMeter from '../../PasswordStrengthMeter/PasswordStrengthMeter';
import { PasswordContainer, AcceptUrl, CheckboxContainer, RCP, Heading } from './RegisterForm.styles'

const CbLabel = (
  <Fragment>
    Ich akzeptiere die
    <AcceptUrl to="/123">Nutzungsbedingungen*</AcceptUrl>
  </Fragment>
);


const StepOne = ({values, handleChange, handleStepChange, setTermsChecked, errors }) => {
  const { email, password, termsChecked } = values
  const [ strVisible, setStrVisibility ] = useState(false);
  const [ subscribed, setSubscribed ] = useState(false);

  return (
    <Fragment>
    <Heading variant="h3">Registrierung</Heading>
      <TextInputGroup
        type="email"
        label="Emailadresse"
        name="email"
        value={email}
        placeholder="z.B. paul@mueller.ch"
        onChange={handleChange}
        error={errors.email}
        required
      />

      <PasswordContainer>
        <TextInputGroup
          type="password"
          label="Passwort"
          name="password"
          value={password}
          onChange={handleChange}
          onFocus={() => setStrVisibility(true)}
          onBlur={() => setStrVisibility(false)}
          error={errors.password}
          required
        />
        {strVisible && <PasswordStrengthMeter password={password} />}
      </PasswordContainer>
      <CheckboxContainer>
        <CheckboxGroup
          label={CbLabel}
          checked={termsChecked}
          name="terms"
          handleChange={() => setTermsChecked(prev => !prev)}
          error={termsChecked ? false : errors.terms}
        />
        <CheckboxGroup
          label="Ich möchte über Neuigkeiten aus der CASUS-Welt per Mail auf dem Laufenden bleiben."
          checked={subscribed}
          handleChange={() => setSubscribed(!subscribed)}
          multiline
        />
      </CheckboxContainer>
      <RCP src={reCAPTCHA_image} alt="Dummy reCAPTCHA" />
      <CustomButton title="Weiter" actionbtn="true" onClick={handleStepChange}/>
      <FormFooter
        text="Haben Sie bereits ein Konto?"
        url="/login"
        urlText="Log in"
      />
    </Fragment>
  );
};

export default StepOne;
