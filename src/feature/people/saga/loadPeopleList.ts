import { put, call, fork } from "redux-saga/effects";
import { PagesType } from "../../../app/interfaces/page-type";
import { Person } from "../../../app/interfaces/person";
import { SWAPIService } from "../../../app/services/SWAPIService";
import {
  ActionPeoleFailure,
  ActionPeopleRequest,
  ActionPeopleSuccess,
  PEOPLE_FAILURE,
  PEOPLE_SUCCESS,
} from "../action";
import { deletePerson } from "./delete-person";

export function* loadPeopleList({ payload: { page, search } }: ActionPeopleRequest) {
  try {
    const pageData: PagesType<Person> = yield call(SWAPIService.getPeople, page, search);

    yield put<ActionPeopleSuccess>({
      type: PEOPLE_SUCCESS,
      payload: pageData,
    });

    for (const person of pageData.results) {
      yield fork(deletePerson, person.url);
    }
  } catch (error: any) {
    yield put<ActionPeoleFailure>({
      type: PEOPLE_FAILURE,
      payload: error,
    });
  }
}
