import React from 'react';
import PropTypes from 'prop-types'
import { Text, URL } from './FormFooter.styles';

const FormFooter = ({ url, urlText, text }) => (
  <Text align="center">
    {text}
    <URL to={url}>{urlText}</URL>
  </Text>
);

FormFooter.propTypes = {
  url: PropTypes.string.isRequired,
  urlText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default FormFooter;
