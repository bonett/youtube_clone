/* eslint-disable no-console */
import { put, call } from 'redux-saga/effects';
import * as api from '../../../api/videos';
import at from '../types';

export default function* fetchPopularVideos(params) {
  try {
    const results = yield call(api.fetchPopularVideoList, params);
    const data = results && results.data;
    yield put({
      type: at.FETCH_SUCCESS_POPULAR_VIDEOS,
      popularVideos: data.items
    });
  } catch (error) {
    yield put({
      type: at.FETCH_FAILURE_POPULAR_VIDEOS,
      error
    });
  }
}