import React, { Fragment } from 'react';
import DocumentsMenu from '../../../components/Documents/DocumentsMenu/DocumentsMenu';
import DocumentCollection from '../../../components/Documents/DocumentCollection/DocumentCollection';
import DocumentSorter from '../../../components/Documents/DocumentSorter/DocumentSorter'
import {
  TopContent,
  MainContent,
  MenuContainer,
  DocumentsContainer,
  Heading,
  SearchBtn,
  SearchIcon
} from './DocumentsPage.styles';

const DocumentsPage = () => (
  <Fragment>
    <TopContent>
      <Heading>Dokumentvorlage auswählen</Heading>
      <DocumentSorter />
      <SearchBtn>
        <SearchIcon />
      </SearchBtn>
    </TopContent>
    <MainContent>
      <MenuContainer>
        <DocumentsMenu />
      </MenuContainer>
      <DocumentsContainer>
        <DocumentCollection documents={[]} />
      </DocumentsContainer>
    </MainContent>
  </Fragment>
);

export default DocumentsPage;
