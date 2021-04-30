import { takeEvery } from 'redux-saga/effects';

import at from '../types';
import fetch from './fetch';

export default function* root() {
  yield takeEvery(at.FETCH_REQUEST, fetch);
}
