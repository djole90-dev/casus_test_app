import React from 'react';
import { Container } from './DocumentCollection.styles';
import Document from '../Document/Document';

const DocumentCollection = ({ documents }) => {
  return (
    <Container>
      {documents.map((doc, i) => <Document key={i} title={doc.title} category={doc.category} />)}
    </Container>
  );
};

export default DocumentCollection;
