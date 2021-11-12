import { take, put, select } from "redux-saga/effects";
import { StateRoot } from "../../../app/redux/reducers";
import { getIdFromUrl } from "../../../getIdFromUrl";
import { ActionPeoleDelete, ActionPeopleSuccess, PEOPLE_DELETE, PEOPLE_SUCCESS } from "../action";
import { selectorPeople } from "../selectors/selector-people";

export function* deletePerson(id: string) {
  yield take<ActionPeoleDelete>(PEOPLE_DELETE(id));

  const { pageData }: StateRoot["people"] = yield select(selectorPeople);

  if (pageData) {
    yield put<ActionPeopleSuccess>({
      type: PEOPLE_SUCCESS,
      payload: {
        ...pageData,
        results: pageData.results.filter(({ url }) => getIdFromUrl(url) !== getIdFromUrl(id)),
      },
    });
  }
}
