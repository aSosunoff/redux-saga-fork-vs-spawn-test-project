import { all, fork } from "@redux-saga/core/effects";
import { watchAddPeople } from "./watchAddPeople";
import { watchRequestPeople } from "./watchRequestPeople";

export function* peopleRootSaga() {
  yield all([fork(watchRequestPeople), fork(watchAddPeople)]);
}
