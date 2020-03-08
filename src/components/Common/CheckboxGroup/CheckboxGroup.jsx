import React from 'react';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import { Label } from './CheckboxGroup.styles';
import Colors from '../../../constants/colors';

const CheckboxGroup = ({ label, checked = false, multiline, handleCheckboxChange }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        onChange={handleCheckboxChange}
        value="checkedE"
        color="primary"
        style={{
          color: checked ? Colors.textLight : Colors.borders,
          alignSelf: multiline ? 'flex-start' : 'center',
          transform: `translateY(${multiline ? '-5px' : '0'})`
        }}
      />
    }
    label={<Label>{label}</Label>}
    style={{marginBottom: '15px'}}
  />
);

export default CheckboxGroup;
