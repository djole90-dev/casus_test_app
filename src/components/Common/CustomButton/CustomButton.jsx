import React from 'react';
import PropTypes from 'prop-types'
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

CustomButton.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  isLoading: PropTypes.bool,
  btntype: PropTypes.string,
}

export default CustomButton;
