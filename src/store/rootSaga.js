import { fork } from 'redux-saga/effects';
import { rootSaga as videos } from './videos';

export default function* rootSaga() {
  yield fork(videos);
}
