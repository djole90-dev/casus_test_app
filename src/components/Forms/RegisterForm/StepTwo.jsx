import React, { Fragment, useState } from 'react';
import TextInputGroup from '../../Common/TextInputGroup/TextInputGroup';
import CustomButton from '../../Common/CustomButton/CustomButton';
import SelectGroup from '../../Common/SelectGroup/SelectGroup';
import { Heading } from './RegisterForm.styles';

const selectOptions = [
  { label: 'Position 1', value: 'Position 1' },
  { label: 'Position 2', value: 'Position 2' },
  { label: 'Position 3', value: 'Position 3' }
];

const StepTwo = ({ values, handleChange, handleSelectChange, handleSubmit }) => {
  const { firstname, lastname, position } = values;
  const [ errors, setErrors ] = useState({})

  const handleRegisterClick = () => {

  }

  return (
    <Fragment>
      <Heading variant="h3">Noch einen Schritt</Heading>
      <TextInputGroup
        type="Text"
        label="Ihr Vorname"
        name="firstname"
        value={firstname}
        placeholder="z.B. Marina"
        onChange={handleChange}
        required
      />
      <TextInputGroup
        type="text"
        label="Ihr Nachname"
        name="lastname"
        value={lastname}
        onChange={handleChange}
        required
      />
      <SelectGroup
        handleChange={handleSelectChange}
        value={position}
        options={selectOptions}
        required
      />
      <CustomButton
        title="CASUS-Konto erstellen"
        actionbtn="true"
        type="submit"
      />
    </Fragment>
  );
};

export default StepTwo;
