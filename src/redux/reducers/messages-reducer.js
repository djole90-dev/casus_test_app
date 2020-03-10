import { AuthTypes, DocumentTypes, MessageTypes } from '../types';

const initialState = {
  succesMessage: null,
  errorMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MessageTypes.CLEAR:
    case AuthTypes.REGISTER_START:
    case AuthTypes.LOGIN_START:
    case DocumentTypes.GET_ALL_START:
    case DocumentTypes.GET_ONE_START:
    case DocumentTypes.EDIT_ONE_START:
      return initialState
    case AuthTypes.LOGIN_SUCCESS:
    case AuthTypes.REGISTER_SUCCESS:
      return {...state, successMessage: action.payload}
    case AuthTypes.REGISTER_FAIL:
    case AuthTypes.LOGIN_FAIL:
    case DocumentTypes.GET_ALL_FAIL:
    case DocumentTypes.GET_ONE_FAIL:
    case DocumentTypes.EDIT_ONE_FAIL:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
