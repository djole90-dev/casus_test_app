import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {
  InputGroupContainer,
  InputEl,
  Label,
  VisibilityIcon,
  VisibilityOffIcon,
  InputWrapper
} from './TextInputGroup.styles';

const TextInputGroup = ({ label, ...otherProps }) => {
  const { type } = otherProps;
  const [ inputType, setInputType ] = useState('password');

  let passwordIcon;

  if (type === 'password') {
    if (inputType === 'password') {
      passwordIcon = (
        <VisibilityIcon onClick={() => setInputType('text')} />
      );
    } else {
      passwordIcon = (
        <VisibilityOffIcon onClick={() => setInputType('password')} />
      );
    }
  }

  return (
    <InputGroupContainer>
      <Label>{label}</Label>
      <InputWrapper>
        <InputEl
          {...otherProps}
          type={type !== 'password' ? type : inputType}
        />
        {passwordIcon}
      </InputWrapper>
    </InputGroupContainer>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool
}

export default TextInputGroup;
