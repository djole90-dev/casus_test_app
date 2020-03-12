import { DocumentTypes } from '../types';

export const getDocumentsStart = () => ({
  type: DocumentTypes.GET_ALL_START
});

export const getDocumentsSuccess = (documents) => ({
  type: DocumentTypes.GET_ALL_SUCCESS,
  payload: documents
});

export const getDocumentsFail = (errorMessage) => ({
  type: DocumentTypes.GET_ALL_FAIL,
  payload: errorMessage
});

export const getOneDocumentStart = (id) => ({
  type: DocumentTypes.GET_ONE_START,
  payload: id
});

export const getOneDocumentSuccess = (doc) => ({
  type: DocumentTypes.GET_ONE_SUCCESS,
  payload: doc
});

export const getOneDocumentFail = (errorMessage) => ({
  type: DocumentTypes.GET_ONE_FAIL,
  payload: errorMessage
});

export const editDocumentStart = (data, id) => ({
  type: DocumentTypes.EDIT_ONE_START,
  payload: { data, id }
});

export const editDocumentSuccess = (doc) => ({
  type: DocumentTypes.EDIT_ONE_SUCCESS,
  payload: doc
});

export const editDocumentFail = (errorMessage) => ({
  type: DocumentTypes.EDIT_ONE_FAIL,
  payload: errorMessage
});

export const sortDocuments = (sortType) => ({
  type: DocumentTypes.SORT,
  payload: sortType
});

export const filterDocumentsByCategory = (category) => ({
  type: DocumentTypes.FILTER_DOCUMENTS_BY_CATEGORY,
  payload: category
});
