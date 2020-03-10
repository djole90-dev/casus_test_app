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
const initialErrorState = {terms: false, email: false, password: false}

const StepOne = ({values, handleChange, handleStepChange }) => {
  const { email, password } = values
  const [ strVisible, setStrVisibility ] = useState(false);
  const [ subscribed, setSubscribed ] = useState(false);
  const [ termsChecked, setTermsChecked ] = useState(false)

  const [ errors, setErrors ] = useState(initialErrorState)

  const clearErrors = () => setErrors(initialErrorState)

  const handleNextClick = () => {
    clearErrors()
    if (!termsChecked || !email || !password) {
      if (!termsChecked) {
        setErrors(prev => ({...prev, terms: true}))
      } 
      if (!email) {
        setErrors(prev => ({...prev, email: true}))
      }
      if (!password) {
        setErrors(prev => ({...prev, password: true}))

      }
      return
    }
    handleStepChange(2)
  }

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
        {strVisible && <PasswordStrengthMeter />}
      </PasswordContainer>
      <CheckboxContainer>
        <CheckboxGroup
          label={CbLabel}
          checked={termsChecked}
          handleChange={() => setTermsChecked(!termsChecked)}
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
      <CustomButton title="Weiter" actionbtn="true" onClick={handleNextClick}/>
      <FormFooter
        text="Haben Sie bereits ein Konto?"
        url="/login"
        urlText="Log in"
      />
    </Fragment>
  );
};

export default StepOne;
