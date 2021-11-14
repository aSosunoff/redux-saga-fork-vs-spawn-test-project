import { takeEvery } from "redux-saga/effects";
import { ActionPeoleAdd, PEOPLE_ADD } from "../action";
import { addPerson } from "./add-person";

export function* watchAddPerson() {
  yield takeEvery<ActionPeoleAdd>(PEOPLE_ADD, addPerson);
}
