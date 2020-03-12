import { all, call, put, takeLatest } from 'redux-saga/effects';
import { DocumentActions } from '../actions';
import { DocumentTypes } from '../types';
import Api from '../api/api';

const getAllDocuments = function*() {
  try {
    const { data } = yield call(Api.getAllDocuments);
    yield put(DocumentActions.getDocumentsSuccess(data.data));
  } catch (err) {
    yield put(DocumentActions.getDocumentsFail(err.response.data.message));
  }
};

const getOneDocument = function*({ payload, id }) {
  try {
    const { data } = yield call(Api.getOneDocument, payload);
    yield put(DocumentActions.getOneDocumentSuccess(data.data));
  } catch (err) {
    yield put(DocumentActions.getOneDocumentFail(err.response.data.message));
  }
};

const editOneDocument = function*({ payload: { data, id } }) {
  try {
    const res = yield call(Api.editDocument, id, data);
    yield put(DocumentActions.editDocumentSuccess(res.data.data));
  } catch (err) {
    yield put(DocumentActions.getOneDocumentFail(err.response.data.message));
  }
};

const watchGetAllDocumentsStart = function*() {
  yield takeLatest(DocumentTypes.GET_ALL_START, getAllDocuments);
};

const watchGetOneDocumentStart = function*() {
  yield takeLatest(DocumentTypes.GET_ONE_START, getOneDocument);
};

const watchEditOneDocumentStart = function*() {
  yield takeLatest(DocumentTypes.EDIT_ONE_START, editOneDocument);
};

export default function*() {
  yield all([
    call(watchGetAllDocumentsStart),
    call(watchGetOneDocumentStart),
    call(watchEditOneDocumentStart)
  ]);
}
