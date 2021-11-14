import { take } from "redux-saga/effects";
import { ActionPeopleRequest, PEOPLE_REQUEST } from "../../../action";

export function* peopleRequest() {
  const {
    payload: { page, search },
  }: ActionPeopleRequest = yield take<ActionPeopleRequest>(PEOPLE_REQUEST);

  return { page, search };
}
