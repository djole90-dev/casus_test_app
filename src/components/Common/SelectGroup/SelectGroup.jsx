import React from 'react';
import PropTypes from 'prop-types'
import { FormControl, Select, MenuItem } from '@material-ui/core';
import {
  StyledInputBase,
  Label,
  Placeholder,
  Text
} from './SelectGroup.styles';

const SelectGroup = ({ handleChange, value = 1, options, name, error, label }) => {
  return (
    <FormControl style={{ width: '100%' }}>
      <Label>{label}</Label>
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

SelectGroup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.bool,
  label: PropTypes.string.isRequired
}

export default SelectGroup;
