/* eslint-disable no-console */
import { put } from 'redux-saga/effects';
import at from '../types';

export function* showLoaderContent() {
  yield put({
    type: at.SHOW_LOADER_CONTENT
  });
}

export function* hideLoaderContent() {
  yield put({
    type: at.HIDE_LOADER_CONTENT
  });
}
