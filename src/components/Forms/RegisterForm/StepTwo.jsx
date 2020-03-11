import React, { Fragment } from 'react';
import TextInputGroup from '../../Common/TextInputGroup/TextInputGroup';
import CustomButton from '../../Common/CustomButton/CustomButton';
import SelectGroup from '../../Common/SelectGroup/SelectGroup';
import { Heading } from './RegisterForm.styles';

const selectOptions = [
  { label: 'Position 1', value: 'Position 1' },
  { label: 'Position 2', value: 'Position 2' },
  { label: 'Position 3', value: 'Position 3' }
];

const StepTwo = ({ values, handleChange, handleStepChange, errors}) => {
  const { firstname, lastname, position } = values;
 
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
        error={errors.firstname}
      />
      <TextInputGroup
        type="text"
        label="Ihr Nachname"
        name="lastname"
        value={lastname}
        onChange={handleChange}
        error={errors.lastname}
      />
      <SelectGroup
        handleChange={handleChange}
        name="position"
        value={position}
        options={selectOptions}
        error={errors.position}
      />
      <CustomButton
        title="CASUS-Konto erstellen"
        actionbtn="true"
        type="submit"
        style={{marginBottom: '24px'}}
      />
       <CustomButton
        title="Zurück"
        actionbtn="true"
        type="button"
        onClick={handleStepChange}
      />
    </Fragment>
  );
};

export default StepTwo;
