import React from 'react';
import { ButtonEl, SpinnerContainer } from './CustomButton.styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const CustomButton = ({ title, isLoading, ...otherProps }) => (
  <ButtonEl {...otherProps} disabled={isLoading}>
    {title}
    {isLoading && (
      <SpinnerContainer>
        <CircularProgress size={20} />
      </SpinnerContainer>
    )}
  </ButtonEl>
);

export default CustomButton;
