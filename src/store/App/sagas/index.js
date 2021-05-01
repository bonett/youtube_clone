import { takeEvery } from 'redux-saga/effects';
import at from '../types';
import fetchPopularVideos from './fetchPopularVideos';

export default function* root() {
  yield takeEvery(at.FETCH_POPULAR_VIDEOS, fetchPopularVideos);
}
