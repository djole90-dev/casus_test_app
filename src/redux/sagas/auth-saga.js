import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AuthActions } from '../actions';
import { AuthTypes } from '../types';
import Api from '../api/api';

const registerUser = function*({ payload, history }) {
  try {
    console.log(Api);
    const res = yield call(Api.registerUser, payload);
    console.log(res);
    yield put(AuthActions.registerSuccess());
    yield call(history.push, '/login');
  } catch (err) {
    console.log(err);
    yield put(AuthActions.registerFail(err.toString()));
  }
};

const loginUser = function*({ payload, history }) {
  try {
    const { data } = yield call(Api.loginUser, payload);
    yield call(Api.setCredentials, data.data.user);
    delete data.data.user.token
    yield put(AuthActions.loginSuccess(data.data.user));
    yield call(history.push('/'));
  } catch (err) {
    yield put(AuthActions.loginFail(err.toString()));
  }
};

const watchRegisterStart = function*() {
  yield takeLatest(AuthTypes.REGISTER_START, registerUser);
};

const watchLoginStart = function*() {
  yield takeLatest(AuthTypes.LOGIN_START, loginUser);
};

const watchLogout = function*() {
  
}

export default function*() {
  yield all([ call(watchLoginStart), call(watchRegisterStart) ]);
}
