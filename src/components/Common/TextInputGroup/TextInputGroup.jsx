import React, { useState } from 'react';
import {
  InputGroupContainer,
  InputEl,
  Label,
  VisibilityIcon,
  VisibilityOffIcon
} from './TextInputGroup.styles';

const TextInputGroup = ({ label, ...otherProps }) => {
  const { type } = otherProps;
  console.log(type);

  const [ passwordVisibility, setPasswordVisibility ] = useState('password');

  return (
    <InputGroupContainer>
      <Label>{label}</Label>
      <InputEl
        {...otherProps}
        type={type !== 'password' ? type : passwordVisibility}
      />
      {type === 'password' &&
      passwordVisibility === 'password' && (
        <VisibilityIcon onClick={() => setPasswordVisibility('text')} />
      )}
      {type === 'password' &&
      passwordVisibility !== 'password' && (
        <VisibilityOffIcon onClick={() => setPasswordVisibility('password')} />
      )}
    </InputGroupContainer>
  );
};

export default TextInputGroup;
