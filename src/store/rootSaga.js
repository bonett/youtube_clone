import { fork } from 'redux-saga/effects';
import { rootSaga as appData } from './app';

export default function* rootSaga() {
  yield fork(appData);
}
