import { call, fork } from "redux-saga/effects";
import { PagesType } from "../../../app/interfaces/page-type";
import { Person } from "../../../app/interfaces/person";
import { SWAPIService } from "../../../app/services/SWAPIService";
import { ActionPeopleRequest } from "../action";
import { deletePerson } from "./delete-person";
import { peopleFailure } from "./helper-store/store/peopleFailure";
import { peopleRequest } from "./helper-store/store/peopleRequest";
import { peopleSuccess } from "./helper-store/store/peopleSuccess";

export function* loadPeopleList() {
  while (true) {
    try {
      const { page, search }: ActionPeopleRequest["payload"] = yield call(peopleRequest);

      const pageData: PagesType<Person> = yield call(SWAPIService.getPeople, page, search);

      yield call(peopleSuccess, pageData);

      for (const person of pageData.results) {
        yield fork(deletePerson, person.url);
      }
    } catch (error: any) {
      yield call(peopleFailure, error);
    }
  }
}
