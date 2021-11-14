import { take, call, select } from "redux-saga/effects";
import { StateRoot } from "../../../app/redux/reducers";
import { getIdFromUrl } from "../../../getIdFromUrl";
import { ActionPeoleDelete, PEOPLE_DELETE } from "../action";
import { selectorPeople } from "../selectors/selector-people";
import { peopleSuccess } from "./helper-store/store/peopleSuccess";

export function* deletePerson(id: string) {
  yield take<ActionPeoleDelete>(PEOPLE_DELETE(id));

  const { pageData }: StateRoot["people"] = yield select(selectorPeople);

  if (pageData) {
    yield call(peopleSuccess, {
      ...pageData,
      results: pageData.results.filter(({ url }) => getIdFromUrl(url) !== getIdFromUrl(id)),
    });
  }
}
