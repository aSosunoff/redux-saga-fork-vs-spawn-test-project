import { put } from "redux-saga/effects";
import { ActionPeoleFailure, PEOPLE_FAILURE } from "../../../action";

export function* peopleFailure(error: any) {
  yield put<ActionPeoleFailure>({
    type: PEOPLE_FAILURE,
    payload: error,
  });
}
