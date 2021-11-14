import { all } from "redux-saga/effects";
import { getRetrySagas } from "../../../app/redux/sagas/effectHelper/get-retry-sagas";
import { watchAddPerson } from "./watchAddPerson";
import { watchRequestPeople } from "./watchRequestPeople";

export function* peopleRootSaga() {
  yield all(getRetrySagas(watchRequestPeople, watchAddPerson));
}
