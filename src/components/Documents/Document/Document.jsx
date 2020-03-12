import React from 'react';
import PropTypes from 'prop-types'
import { DocumentBody, Title } from './Document.styles';
import C from '../C_Logo/C_Logo'

const Document = ({ title, category }) => (
  <DocumentBody>
    <Title>{title}</Title>
    <C category={category}/>
  </DocumentBody>
);

Document.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default Document;
