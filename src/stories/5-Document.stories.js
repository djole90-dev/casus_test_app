import React from 'react';
import Document from '../components/Documents/Document/Document'

export default {
  title: 'Document',
  component: Document,
  excludeStories: /.*Data$/
};

export const documentData = {
  title: 'Document Title',
  category: 'Document Category'
}

export const SingleDocument = () => <Document {...documentData} />
