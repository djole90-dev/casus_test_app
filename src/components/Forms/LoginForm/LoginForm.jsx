import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { AuthActions } from '../../../redux/actions';
import { Heading } from '../common-styles';
import { Form } from './LoginForm.styles';
import TextInputGroup from '../../Common/TextInputGroup/TextInputGroup';
import CustomButton from '../../Common/CustomButton/CustomButton';
import FormFooter from '../FormFooter/FormFooter';
import MessagePopup from '../../Common/MessagePopup/MessagePopup';

const RegisterForm = ({ loginUser, history }) => {
  const [ state, setState ] = useState({ email: '', password: '' });
  const [ errorMessage, setErrorMessage ] = useState(null);

  const handleSubmit = (e) => {
    setErrorMessage(null);
    e.preventDefault();
    loginUser(state, history)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

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
      <CustomButton title="Log in" actionbtn="true" type="submit" />
      <FormFooter
        text="Haben Sie noch kein Konto?"
        url="/"
        urlText="Registrierung"
      />
      <MessagePopup
        errorMessage={errorMessage}
        onClose={() => setErrorMessage(null)}
      />
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data, history) => dispatch(AuthActions.loginStart(data, history))
});

export default connect(null, mapDispatchToProps)(withRouter(RegisterForm));
