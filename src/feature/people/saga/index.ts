import { all } from "@redux-saga/core/effects";
import { loadPeopleList } from "./loadPeopleList";

export function* peopleRootSaga() {
  const sagas = [loadPeopleList];

  yield all(sagas);
}
