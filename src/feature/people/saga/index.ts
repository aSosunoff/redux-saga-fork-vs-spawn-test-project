import { all, fork } from "@redux-saga/core/effects";
import { watchAddPerson } from "./watchAddPerson";
import { watchRequestPeople } from "./watchRequestPeople";

export function* peopleRootSaga() {
  yield all([fork(watchRequestPeople), fork(watchAddPerson)]);
}
