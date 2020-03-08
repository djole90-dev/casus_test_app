import React from 'react';
import { Button } from './CustomButton.styles';

const CustomButton = ({ title, ...otherProps }) => (
  <Button {...otherProps}>{title}</Button>
);

export default CustomButton;
