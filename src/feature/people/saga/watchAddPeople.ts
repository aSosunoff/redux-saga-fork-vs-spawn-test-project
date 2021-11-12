import { take, put, select } from "redux-saga/effects";
import { StateRoot } from "../../../app/redux/reducers";
import { getIdFromUrl } from "../../../getIdFromUrl";
import {
  ActionPeoleAdd,
  ActionPeoleDelete,
  ActionPeopleSuccess,
  PEOPLE_ADD,
  PEOPLE_DELETE,
  PEOPLE_SUCCESS,
} from "../action";
import { selectorPeople } from "../selectors/selector-people";

/* function* addPerson({ payload }: ActionPeoleAdd) {
  console.log(payload);
} */

export function* watchAddPeople() {
  while (true) {
    /* ADD */
    const { payload: newPerson }: ActionPeoleAdd = yield take<ActionPeoleAdd>(PEOPLE_ADD);

    const { pageData: addPageData }: StateRoot["people"] = yield select(selectorPeople);

    if (addPageData) {
      yield put<ActionPeopleSuccess>({
        type: PEOPLE_SUCCESS,
        payload: {
          ...addPageData,
          results: [...addPageData.results, newPerson],
        },
      });
    }

    /* DELETE */
    yield take<ActionPeoleDelete>(PEOPLE_DELETE(newPerson.url));

    const { pageData: deletePageData }: StateRoot["people"] = yield select(selectorPeople);

    if (deletePageData) {
      yield put<ActionPeopleSuccess>({
        type: PEOPLE_SUCCESS,
        payload: {
          ...deletePageData,
          results: deletePageData.results.filter(
            ({ url }) => getIdFromUrl(url) !== getIdFromUrl(newPerson.url)
          ),
        },
      });
    }
  }
}
