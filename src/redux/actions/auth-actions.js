import { AuthTypes } from '../types';

export const registerStart = (data, history) => ({
  type: AuthTypes.REGISTER_START,
  payload: data,
  history
});

export const registerSuccess = () => ({
  type: AuthTypes.REGISTER_SUCCESS
});

export const registerFail = (errorMessage) => ({
  type: AuthTypes.REGISTER_FAIL,
  payload: errorMessage
});

export const loginStart = (data, history) => ({
  type: AuthTypes.LOGIN_START,
  payload: data,
  history
});

export const loginSuccess = (user) => ({
  type: AuthTypes.LOGIN_SUCCESS,
  payload: user
});

export const loginFail = (errorMessage) => ({
  type: AuthTypes.LOGIN_FAIL,
  payload: errorMessage
});

export const logout = () => ({ type: AuthTypes.LOGOUT });
