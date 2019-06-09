import { all, call } from 'redux-saga/effects'
import fetchData from './fetch-data'

export default function* rootSaga() {
  yield all([call(fetchData)])
}
