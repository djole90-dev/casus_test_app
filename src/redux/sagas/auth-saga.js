import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AuthActions } from '../actions';
import { AuthTypes } from '../types';
import Api from '../api/api';

const registerUser = function*({ payload, history }) {
  try {
    yield call(Api.registerUser, payload);
    yield put(AuthActions.registerSuccess());
    yield call(history.push, '/login');
  } catch (err) {
    yield put(AuthActions.registerFail(err.response.data.message));
  }
};

const loginUser = function*({ payload, history }) {
  try {
    const { data } = yield call(Api.loginUser, payload);
    yield call(Api.setCredentials, data.data.user);
    yield call(Api.setAuthHeaders)
    yield put(AuthActions.loginSuccess(data.data.user));
    yield call(history.push, '/');
  } catch (err) {
    yield put(AuthActions.loginFail(err.response.data.message));
  }
};

const logoutUser = function*() {
  yield call(Api.removeCredentials)
  window.location.href = '/'
}

const watchRegisterStart = function*() {
  yield takeLatest(AuthTypes.REGISTER_START, registerUser);
};

const watchLoginStart = function*() {
  yield takeLatest(AuthTypes.LOGIN_START, loginUser);
};


const watchLogout = function*() {
  yield takeLatest(AuthTypes.LOGOUT, logoutUser)
}

export default function*() {
  yield all([ call(watchLoginStart), call(watchRegisterStart), call(watchLogout) ]);
}
