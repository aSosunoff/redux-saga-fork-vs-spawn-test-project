import { call, select } from "redux-saga/effects";
import { Person } from "../../../app/interfaces/person";
import { StateRoot } from "../../../app/redux/reducers";
import { selectorPeople } from "../selectors/selector-people";
import { peopleSuccess } from "./helper-store/store/peopleSuccess";

export function* addPerson(person: Person) {
  const { pageData }: StateRoot["people"] = yield select(selectorPeople);

  if (pageData) {
    yield call(peopleSuccess, {
      ...pageData,
      results: [...pageData.results, person],
    });

    return person;
  }
}
