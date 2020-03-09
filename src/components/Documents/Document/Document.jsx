import React from 'react';
import { DocumentBody, Title, C } from './Document.styles';
import c_image from '../../../assets/c.JPG';

const Document = ({ title }) => (
  <DocumentBody>
    <Title>{title}</Title>
    <C src={c_image} alt="Casus logo image" />
  </DocumentBody>
);

export default Document;
