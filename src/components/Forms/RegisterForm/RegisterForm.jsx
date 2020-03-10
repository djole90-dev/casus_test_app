import React, { useState } from 'react';
import { Heading } from '../common-styles';
import { Form } from './RegisterForm.styles';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const RegisterForm = () => {
  const [ state, setState ] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    position: ''
  });

  const [ step, setStep ] = useState(1);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = e => {
    const { value } = e.target
    setState(prev => ({...prev, position: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Form>
      {step === 1 ? (
        <StepOne
          values={state}
          handleChange={handleChange}
          handleStepChange={setStep}
        />
      ) : (
        <StepTwo values={state} handleChange={handleChange} handleSelectChange={handleSelectChange} handleSubmit={handleSubmit}/>
      )}
    </Form>
  );
};

export default RegisterForm;
