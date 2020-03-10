import React from 'react';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import {
  StyledInputBase,
  Label,
  Placeholder,
  Text
} from './SelectGroup.styles';

const SelectGroup = ({ handleChange, value, options, name, error }) => {
  return (
    <FormControl style={{ width: '100%' }}>
      <Label>Ihre Position</Label>
      <Select
        labelId="demo-customized-select-label"
        value={value || 1}
        onChange={handleChange}
        input={<StyledInputBase name={name} error={error} />}
        displayEmpty
      >
        <MenuItem value={1} disabled>
          <Placeholder style={{ opacity: 0.66 }}>Option auswählen</Placeholder>
        </MenuItem>
        {options.map((opt, i) => (
          <MenuItem key={i} value={opt.value}>
            <Text>{opt.label}</Text>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectGroup;
