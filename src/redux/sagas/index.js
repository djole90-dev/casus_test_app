import { all, call } from 'redux-saga/effects';
import authSaga from './auth-saga';
import documentSaga from './document-saga';

export default function*() {
  yield all([ call(authSaga), call(documentSaga) ]);
}
