import { all, fork } from "redux-saga/effects";
import { watchCustomersSaga } from "./customersSaga";

export default function* rootSaga() {
  yield all([fork(watchCustomersSaga)]);
}
