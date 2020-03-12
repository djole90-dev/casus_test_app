import React from 'react';
import DocumentCollection from '../components/Documents/DocumentCollection/DocumentCollection';
export default {
  title: 'Document Collection',
  component: DocumentCollection,
  excludeStories: /.*Data$/
};

export const documentData = {
  documents: [
    { title: 'Category 1 Title', category: 'Category 1' },
    { title: 'Category 1 Title', category: 'Category 1' },
    { title: 'Category 2 Title', category: 'Category 2' },
    { title: 'Category 3 Title', category: 'Category 3' }
  ]
};

export const DocumentsCategoryList = () => (
  <DocumentCollection {...documentData} />
);
