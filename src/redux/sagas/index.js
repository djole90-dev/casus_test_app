import { all, call } from 'redux-saga/effects';
import authSaga from './auth-saga';
import documentSaga from './document-saga';
import appSaga from './app-saga'

export default function*() {
  yield all([ call(authSaga), call(documentSaga), call(appSaga) ]);
}
