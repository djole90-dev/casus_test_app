import React, { useState } from 'react';
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
  const [ passwordVisibility, setPasswordVisibility ] = useState('password');

  let passwordIcon;

  if (type === 'password') {
    if (passwordVisibility === 'password') {
      passwordIcon = (
        <VisibilityIcon onClick={() => setPasswordVisibility('text')} />
      );
    } else {
      passwordIcon = (
        <VisibilityOffIcon onClick={() => setPasswordVisibility('password')} />
      );
    }
  }

  return (
    <InputGroupContainer>
      <Label>{label}</Label>
      <InputWrapper>
        <InputEl
          {...otherProps}
          type={type !== 'password' ? type : passwordVisibility}
        />
        {passwordIcon}
      </InputWrapper>
    </InputGroupContainer>
  );
};

export default TextInputGroup;
