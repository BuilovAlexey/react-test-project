import { put, takeLatest, fork, call } from 'redux-saga/effects';
import { ActionType } from '../../../../models/models';

import { createApiGetCall, beersEndpoint } from './api';
import { IBeerModelRequest } from './models/models';

function* beersSaga({ payload }: { payload: IBeerModelRequest }): Generator<any> {
  try {
    const response: any = yield call(
      createApiGetCall, { url: beersEndpoint, data: payload }
    );
    if (response?.data?.length > 1) {
      yield put({ type: ActionType.GET_BEERS_SUCCESS, payload: response.data });
    } else {
      yield put({ type: ActionType.GET_BEERS_ERROR, payload: 'error' })
    }
  } catch (error) {
    yield put({ type: ActionType.GET_BEERS_ERROR, payload: 'error' })
  }
}
function* onGetBeersWatcher() {
  yield takeLatest(ActionType.GET_BEERS as any, beersSaga);
}

export default [
  fork(onGetBeersWatcher),
];