import React from 'react';
import { Container } from './DocumentCollection.styles';
import Document from '../Document/Document';

const DocumentCollection = ({ documents = [] }) => {
  return (
    <Container>
      <Document title="Document 1" />
      <Document title="Document 1" />
      <Document title="Document 1" />
      <Document title="Document 1" />
      <Document title="Document 1" />
      <Document title="Document 1" />
      <Document title="Document 1" />
    </Container>
  );
};

export default DocumentCollection;
