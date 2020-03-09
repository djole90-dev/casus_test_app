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

  return (
    <InputGroupContainer>
      <Label>{label}</Label>
      <InputWrapper>
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
          <VisibilityOffIcon
            onClick={() => setPasswordVisibility('password')}
          />
        )}
      </InputWrapper>
    </InputGroupContainer>
  );
};

export default TextInputGroup;
