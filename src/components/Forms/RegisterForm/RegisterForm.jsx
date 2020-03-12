import React from 'react';
import PropTypes from 'prop-types'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import MessagePopup from '../../Common/MessagePopup/MessagePopup';
import { Form } from './RegisterForm.styles';

const RegisterForm = ({
  isLoading,
  handleChange,
  handleStepChange,
  handleSubmit,
  setTermsChecked,
  termsChecked,
  clearMessages,
  state,
  errors,
  step,
  errMsg,
  successMsg
}) => {
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
          handleStepChange={() => handleStepChange(1)}
          isLoading={isLoading}
          errors={errors}
        />
      )}
      <MessagePopup
        errorMessage={errMsg}
        successMessage={successMsg}
        onClose={clearMessages}
      />
    </Form>
  );
};

RegisterForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleStepChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  state: PropTypes.object.isRequired,
  setTermsChecked: PropTypes.func.isRequired,
  clearMessages: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
}

export default RegisterForm;
