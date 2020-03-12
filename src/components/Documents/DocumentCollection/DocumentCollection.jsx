import React from 'react';
import PropTypes from 'prop-types'
import { Container } from './DocumentCollection.styles';
import Document from '../Document/Document';

const DocumentCollection = ({ documents }) => {
  return (
    <Container>
      {documents.map((doc, i) => <Document key={i} title={doc.title} category={doc.category} />)}
    </Container>
  );
};

DocumentCollection.propTypes = {
  documents: PropTypes.array.isRequired
}

export default DocumentCollection;
