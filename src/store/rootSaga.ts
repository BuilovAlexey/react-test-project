import { all } from 'redux-saga/effects';
import saga from '../pages/beers/modules/beers/saga';

export default function* startSagas() {
  yield all([
    ...saga
  ]);
}