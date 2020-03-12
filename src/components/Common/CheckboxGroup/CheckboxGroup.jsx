import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { Label } from './CheckboxGroup.styles';
import Colors from '../../../constants/colors';

const CheckboxGroup = ({
  label,
  checked = false,
  multiline,
  handleChange,
  error,
  ...otherProps
}) => {
  let checkboxStyles = {
    color: Colors.borders,
    alignSelf: multiline ? 'flex-start' : 'center',
    transform: `translateY(${multiline ? '-5px' : '0'})`
  };

  if (error) {
    checkboxStyles.color = 'red';
  } else if (checked) {
    checkboxStyles.color = Colors.textLight;
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          value="checkedE"
          color="primary"
          style={checkboxStyles}
          {...otherProps}
        />
      }
      label={<Label>{label}</Label>}
      style={{ marginBottom: '15px' }}
    />
  );
};

export default CheckboxGroup;
