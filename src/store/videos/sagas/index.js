import { takeEvery } from 'redux-saga/effects';

import at from '../types';
import fetchVideos from './fetchVideos';

export default function* root() {
  yield takeEvery(at.FETCH_REQUEST, fetchVideos);
}
