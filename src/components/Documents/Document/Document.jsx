import React from 'react';
import { DocumentBody, Title } from './Document.styles';
import C from '../C_Logo/C_Logo'

const Document = ({ title, category }) => (
  <DocumentBody>
    <Title>{title}</Title>
    <C category={category}/>
  </DocumentBody>
);

export default Document;
