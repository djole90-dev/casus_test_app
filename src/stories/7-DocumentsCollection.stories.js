import React from 'react';
import DocumentCollection from '../components/Documents/DocumentCollection/DocumentCollection';
export default {
  title: 'Document Collection',
  component: DocumentCollection,
  excludeStories: /.*Data$/
};

export const documentData = {
  documents: [
    { title: 'Category 1 Title', category: 'Choi' },
    { title: 'Category 1 Title', category: 'Choi' },
    { title: 'Category 2 Title', category: 'Bananas' },
    { title: 'Category 3 Title', category: 'Cars' },
    { title: 'Category 2 Title', category: 'Bananas' },
    { title: 'Category 3 Title', category: 'Cars' },
  ]
};

export const DocumentsCategoryList = () => (
  <DocumentCollection {...documentData} />
);
