import { put, call, select } from 'redux-saga/effects';

import * as api from '../../../api/ads';
import at from '../types';

export default function* fetch({ params }) {
  const state = yield select();
  const {
    authentication: { licenseeAccount = {} }
  } = state;
  const { licenses = [] } = licenseeAccount;
  const userId = licenseeAccount.user.id;
  const accountType = licenseeAccount.subscriptions[0].type;
  const professionIds = licenses.map((l) => l.profession.id);
  const userType = accountType === 'BAS' ? 'NEXT_TO_PRO' : accountType;
  const { mediaCode, adType } = params;
  try {
    const { data } = yield call(api.fetchAds, {
      mediaCode,
      adType,
      userType,
      userId,
      professionIds
    });
    yield put({ type: at.FETCH_SUCCESS, data, mediaCode, userType });
    if (data.length > 0) {
      const offeringId = data[0].offering[0];
      yield put({ type: at.FETCH_DETAIL_REQUEST, offeringId, mediaCode });
    }
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({ type: at.FETCH_FAILURE });
  }
}
