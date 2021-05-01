import { put, call } from 'redux-saga/effects';

import * as api from '../../../api/videos';
import at from '../types';

export default function* fetchVideos() {
  try {
    const { data } = yield call(api.fetchVideos);
    yield put({ type: at.FETCH_SUCCESS, data });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({ type: at.FETCH_FAILURE });
  }
}
