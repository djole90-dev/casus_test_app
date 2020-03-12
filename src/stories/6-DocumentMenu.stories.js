import React from 'react';
import { action } from '@storybook/addon-actions'
import DocumentsMenu from '../components/Documents/DocumentsMenu/DocumentsMenu'

export default {
  title: 'Documents Menu',
  component: DocumentsMenu,
  excludeStories: /.*Data$/
};

export const documentData = {
  categories: ['Category1', 'Category2']
}

export const actionsData = {
  filterDocumentsByCategory: action('Filter Documents')
}

export const DocumentsCategoryList = () => <DocumentsMenu {...documentData} {...actionsData}/>
