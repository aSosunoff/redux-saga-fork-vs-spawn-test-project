import { all, fork } from "@redux-saga/core/effects";
import { loadPeopleList } from "./loadPeopleList";
import { watchAddPerson } from "./watchAddPerson";
import { watchRequestPeople } from "./watchRequestPeople";

export function* peopleRootSaga() {
  yield all([fork(loadPeopleList), fork(watchAddPerson)]);
}
