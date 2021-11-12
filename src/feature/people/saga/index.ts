import { all, fork } from "@redux-saga/core/effects";
import { watchRequestPeople } from "./watchRequestPeople";

export function* peopleRootSaga() {
  yield all([fork(watchRequestPeople)]);
}
