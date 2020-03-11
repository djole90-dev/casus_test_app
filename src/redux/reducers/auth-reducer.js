import { AuthTypes } from '../types';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.REGISTER_START:
    case AuthTypes.LOGIN_START:
    case AuthTypes.REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case AuthTypes.LOGIN_SUCCESS:
      return { ...state, currentUser: action.payload, isLoading: false, isAuthenticated: true };
    case AuthTypes.REGISTER_FAIL:
    case AuthTypes.LOGIN_FAIL:
      return { ...state, isLoading: false }
    case AuthTypes.LOGOUT:
      return initialState
    default:
      return state;
  }
};
