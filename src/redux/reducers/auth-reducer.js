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
      return { ...state, isLoading: true };
    case AuthTypes.LOGIN_SUCCESS:
      return { ...state, currentUser: action.payload, isLoading: false };
    case AuthTypes.REGISTER_FAIL:
    case AuthTypes.LOGIN_FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
