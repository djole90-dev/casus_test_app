import { DocumentTypes } from '../types';
import { sortAlphabetically, sortAlphabeticallyReverse} from '../../utils/sortHelpers'

const initialState = {
  documents: null,
  filteredDocuments: [],
  document: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DocumentTypes.GET_ALL_START:
    case DocumentTypes.GET_ONE_START:
    case DocumentTypes.EDIT_ONE_START:
      return {...state, isLoading: false}
    case DocumentTypes.GET_ALL_SUCCESS:
      return {...state, documents: action.payload, filteredDocuments: action.payload, isLoading: false}
    case DocumentTypes.EDIT_ONE_SUCCESS:
      return { ...state, documents: [], filteredDocuments: []}
    case DocumentTypes.GET_ONE_SUCCESS:
      return { ...state, document: action.payload, isLoading:false}
    case DocumentTypes.GET_ALL_FAIL:
    case DocumentTypes.GET_ONE_FAIL:
    case DocumentTypes.EDIT_ONE_FAIL:
      return { ...state, isLoading: false}
    case DocumentTypes.SORT_A_Z:
      return {...state, filteredDocuments: sortAlphabetically(state.filteredDocuments)}
    case DocumentTypes.SORT_Z_A:
      return {...state, filteredDocuments: sortAlphabeticallyReverse(state.filteredDocuments)}
    case DocumentTypes.SORT_DEFAULT:
      return { ...state, filteredDocuments: [...state.documents]};
    default:
      return state;
  }
};
