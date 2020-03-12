import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { DocumentActions } from '../../../redux/actions';
import DocumentsMenu from '../../../components/Documents/DocumentsMenu/DocumentsMenu';
import DocumentCollection from '../../../components/Documents/DocumentCollection/DocumentCollection';
import DocumentSorter from '../../../components/Documents/DocumentSorter/DocumentSorter';
import {
  TopContent,
  MainContent,
  MenuContainer,
  DocumentsContainer,
  Heading,
  SearchIcon
} from './DocumentsPage.styles';
import CustomButton from '../../../components/Common/CustomButton/CustomButton';

const DocumentsPage = ({
  filteredDocuments,
  categories,
  filterDocumentsByCategory
}) => (
  <Fragment>
    <TopContent>
      <Heading>Dokumentvorlage auswählen</Heading>
      <DocumentSorter />
      <CustomButton btntype="btn-white" title={<SearchIcon />} />
    </TopContent>
    <MainContent>
      <MenuContainer>
        <DocumentsMenu
          categories={categories}
          filterDocumentsByCategory={filterDocumentsByCategory}
        />
      </MenuContainer>
      <DocumentsContainer>
        <DocumentCollection documents={filteredDocuments} />
      </DocumentsContainer>
    </MainContent>
  </Fragment>
);

const mapStateToProps = ({
  docs: { documents, filteredDocuments, categories }
}) => ({
  documents,
  filteredDocuments,
  categories
});

const mapDispatchToProps = (dispatch) => ({
  filterDocumentsByCategory: (category) =>
    dispatch(DocumentActions.filterDocumentsByCategory(category))
});

DocumentsPage.propTypes = {
  filteredDocuments: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  filterDocumentsByCategory: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsPage);
