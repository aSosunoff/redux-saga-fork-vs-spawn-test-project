import { put, select } from "redux-saga/effects";
import { Person } from "../../../app/interfaces/person";
import { StateRoot } from "../../../app/redux/reducers";
import { ActionPeopleSuccess, PEOPLE_SUCCESS } from "../action";
import { selectorPeople } from "../selectors/selector-people";

export function* addPerson(person: Person) {
  const { pageData }: StateRoot["people"] = yield select(selectorPeople);

  if (pageData) {
    yield put<ActionPeopleSuccess>({
      type: PEOPLE_SUCCESS,
      payload: {
        ...pageData,
        results: [...pageData.results, person],
      },
    });

    return person;
  }
}
