import { put, call } from "redux-saga/effects";
import { PagesType } from "../../../app/interfaces/page-type";
import { Person } from "../../../app/interfaces/person";
import { ActionSetPeople } from "../../../app/redux/reducers/peopleReducer";
import { SWAPIService } from "../../../app/services/SWAPIService";
import { ActionPeopleRequest } from "../action";

export function* loadPeopleList({ payload: { page, search } }: ActionPeopleRequest) {
  const payload: PagesType<Person> = yield call(SWAPIService.getPeople, page, search);

  yield put<ActionSetPeople>({
    type: "SET_PEOPLE",
    payload,
  });
}
