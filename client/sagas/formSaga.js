import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import { FORM_UPLOAD_REQUEST, FORM_UPLOAD_SUCCESS, FORM_UPLOAD_FAILURE } from '../reducers/formReducer';

function uploadAPI(data) {
  return axios.lost('/form/upload', data);
}

function* upload(action) {
  try {
    const result = yield call(uploadAPI, action.data);
    yield put({
      type: FORM_UPLOAD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FORM_UPLOAD_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchUpload() {
  yield takeLatest(FORM_UPLOAD_REQUEST, upload);
}

export default function* formSaga() {
  yield all([fork(watchUpload)]);
}
