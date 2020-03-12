import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AppActions, DocumentActions } from '../actions';
import { AppTypes, DocumentTypes } from '../types'

const loadDataMainPage = function*() {
  try {
    yield put(DocumentActions.getDocumentsStart())
  } catch (err) {
    yield put(AppActions.mainPageLoadFail())
  }
}

const loadDataMainPageSucces = function*() {
  try {
    yield put(AppActions.mainPageLoadSuccess())
  } catch (err) {
    yield put(AppActions.mainPageLoadFail())
  }
}

const watchMainPageMount = function*() {
  yield takeLatest(AppTypes.MAIN_PAGE_LOAD_START, loadDataMainPage)
  yield takeLatest(DocumentTypes.GET_ALL_SUCCESS, loadDataMainPageSucces)
}

export default function*() {
  yield all([ call(watchMainPageMount) ]);
}
