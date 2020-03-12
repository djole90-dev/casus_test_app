import React from 'react';
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

export default RegisterForm;
