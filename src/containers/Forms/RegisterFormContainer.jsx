import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Validator from 'validator';
import { AuthActions } from '../../redux/actions';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm'

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  position: ''
};

const initialErrorState = {
  email: false,
  password: false,
  firstname: false,
  lastname: false,
  position: false,
  terms: false
};

const RegisterFormContainer = ({
  history,
  registerStart,
  errorMessage,
  successMessage,
  isLoading
}) => {
  const [ state, setState ] = useState(initialState);
  const [ errors, setErrors ] = useState(initialErrorState);
  const [ step, setStep ] = useState(1);
  const [ termsChecked, setTermsChecked ] = useState(false);
  const [ errMsg, setErrorMessage ] = useState(null);
  const [ successMsg, setSuccessMessage ] = useState(null);

  useEffect(
    () => {
      setErrorMessage(errorMessage);
      setSuccessMessage(successMessage);

      if (errorMessage && errorMessage.startsWith('Email already')) {
        setStep(1);
        setErrors((prev) => ({ ...prev, email: true }));
      }
    },
    [ errorMessage, successMessage ]
  );

  const clearMessages = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const clearErrors = () => {
    setErrors(initialErrorState);
    clearMessages();
  };

  const validateForm = (fields) => {
    let isValid = true;
    for (let key of fields) {
      if (!state[key]) {
        setErrors((prev) => ({ ...prev, [key]: true }));
        isValid = false;
      }
      if (key === 'email' && state.email.length > 0) {
        const emailValid = Validator.isEmail(state.email);
        if (!emailValid) {
          setErrors((prev) => ({ ...prev, email: true }));
          setErrorMessage('Please enter a valid email address');
          isValid = false;
        }
      }
    }
    if (!termsChecked) {
      setErrors((prev) => ({ ...prev, terms: true }));
      isValid = false;
    }
    return isValid;
  };

  const handleStepChange = (step) => {
    clearErrors();
    const isValid = validateForm([ 'email', 'password' ]);
    if (!isValid) return;
    if (state.password.length < 8) {
      return setErrors((prev) => ({ ...prev, password: true }));
    }
    setStep(step);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: value && false }));
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();
    const isValid = validateForm([ 'firstname', 'lastname', 'position' ]);
    if (!isValid) return;
    registerStart(state, history);
  };

  return (
    <RegisterForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleStepChange={handleStepChange}
      state={state}
      errors={errors}
      step={step}
      termsChecked={termsChecked}
      setTermsChecked={setTermsChecked}
      errMsg={errMsg}
      sucessMsg={successMsg}
      isLoading={isLoading}
      clearMessages={clearMessages}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  registerStart: (data, history) =>
    dispatch(AuthActions.registerStart(data, history))
});

const mapStateToProps = ({
  messages: { errorMessage, successMessage },
  auth: { isLoading }
}) => ({
  errorMessage,
  successMessage,
  isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(RegisterFormContainer)
);
