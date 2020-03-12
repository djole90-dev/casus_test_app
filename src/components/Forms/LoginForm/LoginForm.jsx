import React from 'react';
import PropTypes from 'prop-types'
import { Heading } from '../common-styles';
import { Form } from './LoginForm.styles';
import TextInputGroup from '../../Common/TextInputGroup/TextInputGroup';
import CustomButton from '../../Common/CustomButton/CustomButton';
import FormFooter from '../FormFooter/FormFooter';
import MessagePopup from '../../Common/MessagePopup/MessagePopup';

const LoginForm = ({
  isLoading,
  handleChange,
  handleSubmit,
  state,
  errMsg,
  setErrorMessage
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Heading variant="h3">Log in</Heading>
      <TextInputGroup
        type="email"
        label="Ihre Email adresse angeben"
        name="email"
        value={state.email}
        placeholder="z.B. marina@meyer.ch"
        onChange={handleChange}
        required
      />
      <TextInputGroup
        type="password"
        label="Passwort"
        name="password"
        value={state.password}
        onChange={handleChange}
        required
      />
      <CustomButton
        title={!isLoading ? 'Log in' : 'Logging in ...'}
        actionbtn="true"
        type="submit"
        isLoading={isLoading}
        btntype="action"
      />
      <FormFooter
        text="Haben Sie noch kein Konto?"
        url="/"
        urlText="Registrierung"
      />
      <MessagePopup
        errorMessage={errMsg}
        onClose={() => setErrorMessage(null)}
      />
    </Form>
  );
};

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  state: PropTypes.object.isRequired,
  setErrorMessage: PropTypes.func.isRequired
}

export default LoginForm;
