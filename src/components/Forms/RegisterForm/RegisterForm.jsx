import React, { useState } from 'react';
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { AuthActions } from '../../../redux/actions'
import Validator from 'validator';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import MessagePopup from '../../Common/MessagePopup/MessagePopup';
import { Form } from './RegisterForm.styles';

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

const RegisterForm = ({history, registerStart}) => {
  const [ state, setState ] = useState(initialState);
  const [ errors, setErrors ] = useState(initialErrorState);
  const [ step, setStep ] = useState(1);
  const [ termsChecked, setTermsChecked ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState(null);

  const clearErrors = () => {
    setErrors(initialErrorState);
    setErrorMessage(null);
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
    registerStart(state, history)
  };

  return (
    <Form onSubmit={handleSubmit}>
      {step === 1 ? (
        <StepOne
          values={{ ...state, termsChecked }}
          handleChange={handleChange}
          handleStepChange={handleStepChange}
          setTermsChecked={setTermsChecked}
          errors={errors}
        />
      ) : (
        <StepTwo
          values={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleStepChange={() => setStep(1)}
          errors={errors}
        />
      )}
      <MessagePopup
        errorMessage={errorMessage}
        onClose={() => setErrorMessage(null)}
      />
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  registerStart: (data, history) => dispatch(AuthActions.registerStart(data, history))
})

export default connect(null, mapDispatchToProps)(withRouter(RegisterForm))
