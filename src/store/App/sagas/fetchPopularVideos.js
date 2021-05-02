/* eslint-disable no-console */
import { put, call, spawn } from 'redux-saga/effects';
import * as api from '../../../api/videos';
import at from '../types';
import { showLoaderContent, hideLoaderContent } from './fetchLoader';

export default function* fetchPopularVideos(params) {
  try {
    yield spawn(showLoaderContent);
    const results = yield call(api.fetchPopularVideoList, params);
    const data = results && results.data;
    const value = data && data.value;

    yield put({
      type: at.FETCH_SUCCESS_POPULAR_VIDEOS,
      popularVideos: value
    });
    yield spawn(hideLoaderContent);
  } catch (error) {
    yield put({
      type: at.FETCH_FAILURE_POPULAR_VIDEOS,
      error
    });
    yield spawn(hideLoaderContent);
  }
}
