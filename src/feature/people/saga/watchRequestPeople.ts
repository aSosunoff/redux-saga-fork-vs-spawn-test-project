import { takeEvery } from "redux-saga/effects";
import { ActionPeopleRequest, PEOPLE_REQUEST } from "../action";
import { loadPeopleList } from "./loadPeopleList";

export function* watchRequestPeople() {
  yield takeEvery<ActionPeopleRequest>(PEOPLE_REQUEST, loadPeopleList);
}
