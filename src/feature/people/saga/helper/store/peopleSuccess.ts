import { put } from "redux-saga/effects";
import { PagesType } from "../../../../../app/interfaces/page-type";
import { Person } from "../../../../../app/interfaces/person";
import { ActionPeopleSuccess, PEOPLE_SUCCESS } from "../../../action";

export function* peopleSuccess(pageData: PagesType<Person>) {
  yield put<ActionPeopleSuccess>({
    type: PEOPLE_SUCCESS,
    payload: pageData,
  });
}
