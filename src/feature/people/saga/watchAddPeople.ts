import { take, call, fork } from "redux-saga/effects";
import { Person } from "../../../app/interfaces/person";
import { ActionPeoleAdd, PEOPLE_ADD } from "../action";
import { addPerson } from "./add-person";
import { deletePerson } from "./delete-person";

export function* watchAddPeople() {
  while (true) {
    const { payload }: ActionPeoleAdd = yield take<ActionPeoleAdd>(PEOPLE_ADD);

    const person: Person | void = yield call(addPerson, payload);

    if (person) {
      yield fork(deletePerson, person.url);
    }
  }
}
