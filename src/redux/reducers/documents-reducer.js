import { DocumentTypes, AuthTypes } from '../types';
import { documentSorter } from '../../utils/sortHelpers';

const initialState = {
  categories: [],
  documents: [],
  filteredDocuments: [],
  document: null,
  isLoading: false,
  sorting: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DocumentTypes.GET_ALL_START:
    case DocumentTypes.GET_ONE_START:
    case DocumentTypes.EDIT_ONE_START:
      return { ...state, isLoading: false };
    case DocumentTypes.GET_ALL_SUCCESS:
      return {
        ...state,
        categories: [ ...new Set(action.payload.map((doc) => doc.category)) ],
        documents: action.payload,
        filteredDocuments: action.payload,
        isLoading: false
      };
    case DocumentTypes.EDIT_ONE_SUCCESS:
      return { ...state, documents: [], filteredDocuments: [] };
    case DocumentTypes.GET_ONE_SUCCESS:
      return { ...state, document: action.payload, isLoading: false };
    case DocumentTypes.GET_ALL_FAIL:
    case DocumentTypes.GET_ONE_FAIL:
    case DocumentTypes.EDIT_ONE_FAIL:
      return { ...state, isLoading: false };
    case DocumentTypes.FILTER_DOCUMENTS_BY_CATEGORY:
      return {
        ...state,
        filteredDocuments: action.payload
          ? documentSorter(
              state.sorting,
              state.documents.filter((doc) => doc.category === action.payload)
            )
          : documentSorter(state.sorting, state.documents)
      };
    case DocumentTypes.SORT:
      return {
        ...state,
        filteredDocuments: documentSorter(action.payload, state.filteredDocuments),
        sorting: action.payload
      };
    case DocumentTypes.SORT_DEFAULT:
      return { ...state, filteredDocuments: [ ...state.documents ] };
    case AuthTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
