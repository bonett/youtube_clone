/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects';
import * as api from '../../../api/videos';
import at from '../types';

export default function* fetchPopularVideos({ params }) {
  try {
    const results = yield call(api.fetchPopularVideoList, params);
    yield put({
      type: at.FETCH_SUCCESS,
      videoList: results
    });
  } catch (error) {
    yield put({ type: at.FETCH_FAILURE, error });
  }
}
