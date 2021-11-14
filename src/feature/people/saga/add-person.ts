import { call, select, fork } from "redux-saga/effects";
import { StateRoot } from "../../../app/redux/reducers";
import { ActionPeoleAdd } from "../action";
import { selectorPeople } from "../selectors/selector-people";
import { deletePerson } from "./delete-person";
import { peopleSuccess } from "./helper-store/store/peopleSuccess";

export function* addPerson({ payload: person }: ActionPeoleAdd) {
  const { pageData }: StateRoot["people"] = yield select(selectorPeople);

  if (pageData) {
    yield call(peopleSuccess, {
      ...pageData,
      results: [...pageData.results, person],
    });

    yield fork(deletePerson, person.url);
  }
}
