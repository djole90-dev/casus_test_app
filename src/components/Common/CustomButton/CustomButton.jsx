import React from 'react';
import { ButtonEl } from './CustomButton.styles';

const CustomButton = ({ title, ...otherProps }) => (
  <ButtonEl {...otherProps}>{title}</ButtonEl>
);

export default CustomButton;
