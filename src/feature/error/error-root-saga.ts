import { take } from "@redux-saga/core/effects";
import { ActionError, ERROR } from "./action";

export function* errorRootSaga() {
  while (true) {
    yield take<ActionError>(ERROR);

    throw new Error("Error");
  }
}
